import Resena from "../models/Resena.js";


export const obtenerResenas = async (req, res) => {
  try {
    const resenas = await Resena.find({ juegoId: req.params.juegoId }).sort({ createdAt: -1 });
    res.json(resenas);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al obtener reseñas" });
  }
};


export const crearResena = async (req, res) => {
  try {
    const nueva = await Resena.create(req.body);
    res.status(201).json(nueva);
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: "Error al crear reseña" });
  }
};


export const eliminarResena = async (req, res) => {
  try {
    const eliminado = await Resena.findByIdAndDelete(req.params.id);
    if (!eliminado) return res.status(404).json({ error: "Reseña no encontrada" });
    res.json({ mensaje: "Reseña eliminada" });
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: "Error al eliminar reseña" });
  }
};
