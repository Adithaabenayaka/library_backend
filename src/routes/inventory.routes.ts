import { Router } from "express";
import BooksPvtController from "../controllers/bookspvt.controller";
import upload from "../config/multer";

const configRouter = Router();

configRouter.get('/books',BooksPvtController.getAllBooks)
configRouter.post('/books',upload.single("image"),BooksPvtController.addBooks)
configRouter.delete('/books/:id',BooksPvtController.deleteBook)
configRouter.put('/books/:id',BooksPvtController.updateBook)
export default configRouter;