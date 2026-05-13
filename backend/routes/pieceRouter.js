import { Router } from "express";
import { pieceCreate, pieceUpdate, pieceFindByPK, pieceFindAll, pieceDelete } from "../controllers/pieceController.js";
export const router = Router()


router.post("/piece/create/", pieceCreate)
router.put("/piece/update/:id", pieceUpdate)
router.get("/piece/findByPK/:id", pieceFindByPK)
router.get("/piece/findAll/", pieceFindAll)
router.delete("/piece/delete/:id", pieceDelete)


