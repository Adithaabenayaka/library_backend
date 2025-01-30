import { Request, Response } from "express";
import InventoryService from "../service/inventory.service";

class InventoryController{

    async getAllBooks(req:Request, res: Response){
        const books = await InventoryService.getAllBooks();
        console.log(books)
        res.json(books)
    }

    async addingBooks(req:Request, res: Response){
        const books = await InventoryService.addingBooks();
        res.json(books)
}
}
export default InventoryController