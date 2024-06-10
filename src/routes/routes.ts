import { Router } from "express";
import home from "./home";
import { addBlogs, getBlogs } from "./blog";
const ROUTES = Router();

// home ---------------------------
ROUTES.get("/", home);
// --------------------------------

// blogs --------------------------
ROUTES.get("/blogs", getBlogs);
ROUTES.post("/blogs", addBlogs);
// --------------------------------

export default ROUTES;
