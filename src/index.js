// Importa los módulos necesarios
import dotenv from "dotenv";
import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import router from "./routes/index.routes.js"

// Define __dirname para módulos ES
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Cargar las variables de entorno
dotenv.config({ path: "./var.env" });

// Inicializar Express
const app = express();

// Configurar EJS como motor de plantillas
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Servir archivos estáticos desde la carpeta "public"
app.use(express.static(path.join(__dirname, "public")));

// Middleware para manejar datos en formato JSON
app.use(express.json());

// Configurar las rutas principales
app.use("/", router);

// Iniciar el servidor
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en: http://localhost:${PORT}`);
});
