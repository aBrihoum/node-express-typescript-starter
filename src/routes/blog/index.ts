import { Request, Response } from "express";

// ----------------------------------------------------------------------------
function getBlogs(_: Request, res: Response) {
  try {
    res.status(200).json({ blogs: "🐞" });
  } catch (error) {
    res.status(500).json({ error });
  }
}
// ----------------------------------------------------------------------------

// ----------------------------------------------------------------------------
function addBlogs(req: Request, res: Response) {
  try {
    res.status(200).json(req.body);
  } catch (error) {
    res.status(500).json({ error });
  }
}
// ----------------------------------------------------------------------------

export { getBlogs, addBlogs };
