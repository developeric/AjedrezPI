import { model, Schema } from "mongoose";

export const PieceSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    description: {
        type: String,
    },
    img: {
        type: String,
    },
}, {
    versionKey: false
})

export const Piece = model("Pieza", PieceSchema)