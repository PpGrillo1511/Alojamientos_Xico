import express from "express";

const router = express.Router();

// Ruta principal
router.get("/", (req, res) => {
  res.render("index", { title: "Alojamientos Xico" });
});

// Nueva ruta para el diseño diferente cuando se hace clic en "Inicio"
router.get("/inicio", (req, res) => {
  res.render("inicio", { title: "Diseño Diferente de Inicio" });
});

router.get("/rentas", (req, res) => {
  res.render("rentas", { title: "rentas" });
});

router.get("/sugerencias", (req, res) => {
  res.render("sugerencias", { title: "suge" });
});

router.get("/resenas", (req, res) => {
  res.render("resenas", { title: "rese" });
});


export default router;
