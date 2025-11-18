import express from "express";
import {
  obtenerResenas,
  crearResena,
  eliminarResena
} from "../controllers/resenasController.js";

const router = express.Router();

router.get("/:juegoId", obtenerResenas);
router.post("/", crearResena);
router.delete("/:id", eliminarResena);

export default router;
