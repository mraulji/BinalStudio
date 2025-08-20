import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "mraulji2001@gmail.com",      // <-- your Gmail address
    pass: "iymiisdgdvuvbqzi"          // <-- your Gmail App Password (no spaces)
  }
});

transporter.verify(function(error, success) {
  if (error) {
    console.log("Error:", error);
  } else {
    console.log("Server is ready to take our messages");
  }
});