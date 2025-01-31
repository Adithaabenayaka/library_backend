import { Request, Response } from "express";
import InventoryService from "../service/inventory.service";
import { successResponse, errorResponse } from "../service/lib/responseManager";

class InventoryController {
  // Retreive All book data
  getAllBooks = async (req: Request, res: Response) => {
    try {
      const books = await InventoryService.getAllBooks();
      successResponse(
        res,
        "Book data retreive successfully",
        books,
        res.statusCode
      );
    } catch (error: any) {
      errorResponse(res, error.message || error, error, res.statusCode);
    }
  };

  // Adding book data
  addBooks = async (req: Request, res: Response) => {
    try {
      const { title, author, genre, publicationBy } = req.body;

      const book = await InventoryService.addBooks(
        title,
        author,
        genre,
        publicationBy
      );
      successResponse(res, "Book data entry success", book);
    } catch (error: any) {
      errorResponse(res, error.message || error, error, res.statusCode);
    }
  };
}
export default new InventoryController();
