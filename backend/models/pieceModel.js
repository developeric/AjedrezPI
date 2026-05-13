import { Schema } from "mongoose";

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

})