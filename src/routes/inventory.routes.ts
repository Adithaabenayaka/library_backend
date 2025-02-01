import { Router } from "express";
import InventoryController from "../controllers/inventory.controller";
import upload from "../config/multer";

const configRouter = Router();

configRouter.get('/books',InventoryController.getAllBooks)
configRouter.post('/books',upload.single("image"),InventoryController.addBooks)
configRouter.delete('/books/:id',InventoryController.deleteBook)
configRouter.put('/books/:id',InventoryController.updateBook)
export default configRouter;