import { Router } from "express";
import BooksPvtController from "../controllers/bookspvt.controller";
import upload from "../config/multer";

const booksPvtRouter = Router();

booksPvtRouter.post('/books',upload.single("image"),BooksPvtController.addBooks)
booksPvtRouter.delete('/books/:id',BooksPvtController.deleteBook)
booksPvtRouter.put('/books/:id',BooksPvtController.updateBook)
export default booksPvtRouter;