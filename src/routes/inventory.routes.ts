import { Router } from "express";
import InventoryController from "../controllers/inventory.controller";

const configRouter = Router();
const inventoryController = new InventoryController()

configRouter.get('/books',inventoryController.getAllBooks)
configRouter.post('/books',inventoryController.addingBooks)


export default configRouter;