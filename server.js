import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import "dotenv/config";

import juegosRoutes from "./routes/juegosRoutes.js";
import resenasRoutes from "./routes/resenasRoutes.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));  

// Conectar a MongoDB
const mongoUri = process.env.MONGO_URI;
if (!mongoUri) {
  console.error("Falta MONGO_URI en .env");
  process.exit(1);
}

mongoose
  .connect(mongoUri)
  .then(() => console.log("MongoDB conectado"))
  .catch((err) => {
    console.error("Error al conectar MongoDB:", err);
    process.exit(1);
  });

// Rutas API
app.use("/api/juegos", juegosRoutes);
app.use("/api/resenas", resenasRoutes);

// Ruta raíz mínima (opcional)
app.get("/", (req, res) => {
  res.json({ message: "GameTracker API funcionando" });
});

// Levantar servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Servidor en puerto", PORT);
});
