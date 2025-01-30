import { Router } from "express";
import ConfigController from "../Controllers/config.controller";

const configRouter = Router();
const configController = new ConfigController()

configRouter.get('/books',configController.getBooks)



export default configRouter;