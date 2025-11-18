import Juego from "../models/Juego.js";

export const obtenerJuegos = async (req, res) => {
  try {
    const juegos = await Juego.find().sort({ createdAt: -1 });

    console.log("Juegos en la base de datos:", juegos);

    res.json(juegos);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al obtener juegos" });
  }
};

export const agregarJuego = async (req, res) => {
  try {

  
    console.log("HEADERS:", req.headers["content-type"]);
    console.log("BODY RECIBIDO:", req.body);

    // Si llega vacío, avisa también
    if (!req.body || Object.keys(req.body).length === 0) {
      console.log("El body esta vacio");
    }
  

    const nuevo = await Juego.create(req.body);
    res.status(201).json(nuevo);
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: "Error al agregar juego" });
  }
};

export const editarJuego = async (req, res) => {
  try {
    const actualizado = await Juego.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!actualizado)
      return res.status(404).json({ error: "Juego no encontrado" });
    res.json(actualizado);
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: "Error al editar juego" });
  }
};

export const eliminarJuego = async (req, res) => {
  try {
    const eliminado = await Juego.findByIdAndDelete(req.params.id);
    if (!eliminado)
      return res.status(404).json({ error: "Juego no encontrado" });
    res.json({ mensaje: "Juego eliminado" });
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: "Error al eliminar juego" });
  }
};
