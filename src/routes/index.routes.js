import express from "express";

const router = express.Router();

// Ruta principal
router.get("/", (req, res) => {
  res.render("index", { title: "Alojamientos Xico" });
});

export default router;
