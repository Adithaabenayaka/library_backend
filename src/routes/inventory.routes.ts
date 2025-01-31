import { Router } from "express";
import InventoryController from "../controllers/inventory.controller";

const configRouter = Router();

configRouter.get('/books',InventoryController.getAllBooks)
configRouter.post('/books',InventoryController.addBooks)


export default configRouter;