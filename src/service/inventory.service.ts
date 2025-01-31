import Book from "../database/models/inventory.model";

class InventoryService {
  // Retreive All book data
  async getAllBooks() {
    return await Book.find();
  }

  // Adding book data
  async addBooks(
    title: string,
    author: string,
    genre: string,
    publicationBy: string
  ) {
    const book = new Book({ title, author, genre, publicationBy });
    await book.save();
    
  }
}

export default new InventoryService();
