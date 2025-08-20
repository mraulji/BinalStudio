import express from "express";
import { createServer, type Server } from "http";
import { storage, getCategories, addCategory, deleteCategory } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // put application routes here
  // prefix all routes with /api

  // use storage to perform CRUD operations on the storage interface
  // e.g. storage.insertUser(user) or storage.getUserByUsername(username)

  const httpServer = createServer(app);

  const router = express.Router();

  router.get("/api/admin/categories", (req, res) => {
    res.json(getCategories());
  });

  router.post("/api/admin/categories", (req, res) => {
    const { name } = req.body;
    addCategory(name);
    res.json(getCategories());
  });

  router.delete("/api/admin/categories", (req, res) => {
    const { name } = req.body;
    deleteCategory(name);
    res.json(getCategories());
  });

  app.use(router);

  return httpServer;
}
