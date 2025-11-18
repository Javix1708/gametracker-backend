import express from "express";
import { 
  obtenerJuegos, 
  agregarJuego, 
  editarJuego, 
  eliminarJuego 
} from "../controllers/juegosController.js";

const router = express.Router();

router.get("/", obtenerJuegos);        // Obtener todos los juegos
router.post("/", agregarJuego);        // Agregar un juego
router.put("/:id", editarJuego);       // Editar un juego
router.delete("/:id", eliminarJuego);  // Eliminar un juego

export default router;
