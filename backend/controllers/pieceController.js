import { Piece } from "../models/pieceModel.js";
//Create
export const pieceCreate = async (req, res) => {
    try {
        const pieza = await Piece.create({ name, desc, img })
        if (!pieza) {
            return res.status(400).json({ msg: "No se ha creado la Pieza" })
        }
        return res.status(201).json({ msg: "Pieza Creada", ok: true, data: pieza })
    } catch (error) {
        console.log(error);
        return res.status(500).json({ msg: "Internal Error Server", ok: false })
    }
}

//Update
export const pieceUpdate = async (req, res) => {
    const { id } = req.params
    try {
        const pieza = await Piece.findByIdAndDeleted(id, { name, desc, img }, { new: true })
        if (!pieza) {
            return res.status(400).json({ msg: "No se ha Actualizado la Pieza" })
        }
        return res.status(200).json({ msg: "Pieza Actualizada", ok: true, data: pieza })
    } catch (error) {
        console.log(error);
        return res.status(500).json({ msg: "Internal Error Server", ok: false })
    }
}


export const pieceFindByPK = async (req, res) => {
    const { id } = req.params
    try {
        const pieza = await Piece.findById(id)
        if (!pieza) {
            return res.status(400).json({ msg: "No se ha encontrado la Pieza" })
        }
        return res.status(201).json({ msg: "Pieza Encontrada", ok: true, data: pieza })
    } catch (error) {
        console.log(error);
        return res.status(500).json({ msg: "Internal Error Server", ok: false })
    }
}

export const pieceFindAll = async (req, res) => {
    try {
        const pieza = await Piece.create()
        if (!pieza) {
            return res.status(400).json({ msg: "No se ha encontrado nada..." })
        }
        return res.status(201).json({ msg: "Pieza Creada", ok: true, data: pieza })
    } catch (error) {
        console.log(error);
        return res.status(500).json({ msg: "Internal Error Server", ok: false })
    }
}

export const pieceDelete = async (req, res) => {
    const { id } = req.params
    try {
        const pieza = await Piece.findByIdAndDelete(id)
        if (!pieza) {
            return res.status(400).json({ msg: "No se ha eliminado la Pieza" })
        }
        return res.status(201).json({ msg: "Pieza Eliminada", ok: true, data: pieza })
    } catch (error) {
        console.log(error);
        return res.status(500).json({ msg: "Internal Error Server", ok: false })
    }
}