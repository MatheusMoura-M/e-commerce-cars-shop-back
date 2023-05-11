import {Request, Response} from "express"
import { deleteCommentService } from "../../services/comments"

const deleteCommentController = async (req: Request, res: Response) => {

    await deleteCommentService(req.params.id, req.id)

    return res.status(204).json()

}

export default deleteCommentController