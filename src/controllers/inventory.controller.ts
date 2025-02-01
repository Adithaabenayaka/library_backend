import { Request, Response } from "express";
import InventoryService from "../service/inventory.service";
import { successResponse, errorResponse } from "../service/lib/responseManager";

class InventoryController {
  // Retreive All book data
  getAllBooks = async (req: Request, res: Response):Promise<void>  => {
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
  addBooks = async (req: Request, res: Response):Promise<void> => {
    try {
      const { title, author, genre, publicationBy, price, currency, description, imageUrl } = req.body;

      if (title) {
        console.log(title);
        return;
      }

      const book = await InventoryService.addBooks(
        title,
        author,
        genre,
        publicationBy,
        price, 
        currency, 
        description, 
        imageUrl
      );
      successResponse(res, "Book data entry success", book);
    } catch (error: any) {
      errorResponse(res, error.message, error, res.statusCode);
    }
  };

  // Delete Book data
  deleteBook = async (req: Request, res: Response):Promise<void> => {
    try {
      const { id } = req.params;
      console.log("first")
      console.log(req.query)

      if (!id) {
        errorResponse(res, "Book ID is required");
        return;
      }

      const deletedBook = await InventoryService.deleteBook(id);

      if (!deletedBook) {
        errorResponse(res, "Book not found");
        return;
      }

      successResponse(res, "Book deleted successfully", deletedBook);
    } catch (error: any) {
      errorResponse(res, error.message || "Failed to delete book", error);
    }
  };

  // Update book data
  updateBook= async (req: Request, res: Response): Promise<void> => {
    try {
      const { id } = req.params;
      const updateData = req.body;

      const updatedBook = await InventoryService.updateBook(id, updateData);

      if (!updatedBook) {
        errorResponse(res, "Book not found", 404);
        return;
      }

      successResponse(res, "Book updated successfully", updatedBook);
    } catch (error: any) {
      errorResponse(res, error.message || "Failed to update book");
    }
  }
}
export default new InventoryController();
