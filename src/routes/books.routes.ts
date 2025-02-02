import { Router } from "express";
import BooksPvtController from "../controllers/bookspvt.controller";

const booksRouter = Router();

booksRouter.get('/',BooksPvtController.getAllBooks)
export default booksRouter;