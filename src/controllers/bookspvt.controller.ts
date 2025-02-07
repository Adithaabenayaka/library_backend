import { Request, Response } from "express";
import InventoryService from "../service/bookspvt.service";
import { successResponse, errorResponse } from "../service/lib/responseManager";

class BooksPvtController {
  // Retreive All book data
  getAllBooks = async (req: Request, res: Response): Promise<void> => {
    try {
      const keyword = req.query.keyword as string;
      const books = await InventoryService.getAllBooks(keyword);
      successResponse(res, "Books retrieved successfully", books, res.statusCode);
    } catch (error: any) {
      errorResponse(res, error.message || error, error, 500);
    }
  };

  // Adding book data
  addBooks = async (req: Request, res: Response):Promise<void> => {
    try {
      const { title, author, genre, publicationBy, price, currency, description } = req.body;
      
      if (!title || !author || !genre || !publicationBy || !price || !currency) {
        errorResponse(res, "Missing required fields", null, 400);
        return;
      }

      const imageUrl = req.file ? `/public/${req.file.filename}` : "";

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
      errorResponse(res, error.message, error, 500);
    }
  };

  // Delete Book data
  deleteBook = async (req: Request, res: Response):Promise<void> => {
    try {
      const { id } = req.params;

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
      errorResponse(res, error.message || "Failed to delete book", error,500);
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
      errorResponse(res, error.message || "Failed to update book",error,500);
    }
  }
}
export default new BooksPvtController();
