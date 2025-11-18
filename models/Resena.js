import mongoose from "mongoose";

const resenaSchema = new mongoose.Schema(
  {
    juegoId: { type: mongoose.Schema.Types.ObjectId, ref: "Juego", required: true },
    autor: { type: String, required: true },
    texto: { type: String, required: true },
    estrellas: { type: Number, min: 1, max: 5, default: 5 }
  },
  { timestamps: true }
);

export default mongoose.model("Resena", resenaSchema);
