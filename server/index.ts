import express, { type Request, Response, NextFunction } from "express";
import cors from "cors";
import { registerRoutes } from "./routes";
import { setupVite, serveStatic, log } from "./vite";
import multer from "multer";
import nodemailer from "nodemailer";

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const upload = multer({ dest: "uploads/" });

let portfolio: any[] = [];

app.post("/api/admin/portfolio", upload.single("file"), (req, res) => {
  const { title, category } = req.body;
  const fileUrl = `/uploads/${req.file.filename}`;
  portfolio.push({ id: Date.now().toString(), url: fileUrl, title, category });
  res.json(portfolio);
});

// Serve uploaded files statically
app.use("/uploads", express.static("uploads"));

app.use((req, res, next) => {
  const start = Date.now();
  const path = req.path;
  let capturedJsonResponse: Record<string, any> | undefined = undefined;

  const originalResJson = res.json;
  res.json = function (bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };

  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path.startsWith("/api")) {
      let logLine = `${req.method} ${path} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }

      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "…";
      }

      log(logLine);
    }
  });

  next();
});

app.post("/api/contact", async (req, res) => {
  const { name, email, phone, event, date, message } = req.body;

  console.log("Received data:", req.body);

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "mraulji2001@gmail.com",
      pass: "iymiisdgdvuvbqzi",
    },
  });

  const mailOptions = {
    from: email,
    to: "mraulji2001@gmail.com",
    subject: "New Contact Form Submission",
    text: `Name: ${name}
Email: ${email}
Phone: ${phone}
Event: ${event}
Date: ${date}
Message: ${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: "Failed to send email" });
  }
});

(async () => {
  const server = await registerRoutes(app);

  app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";

    res.status(status).json({ message });
    throw err;
  });

  // importantly only setup vite in development and after
  // setting up all the other routes so the catch-all route
  // doesn't interfere with the other routes
  if (app.get("env") === "development") {
    await setupVite(app, server);
  } else {
    serveStatic(app);
  }

  // ALWAYS serve the app on port 5000
  // this serves both the API and the client
  const port = 5000;
  server.listen(
    {
      port,
      host: "0.0.0.0",
      reusePort: true,
    },
    () => {
      log(`serving on port ${port}`);
    }
  );
})();
