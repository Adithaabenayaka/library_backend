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

  // Delete book data
  async deleteBook(id: string) {
    return await Book.findByIdAndDelete(id);
  }

  // Update book data
  async updateBook(id: string, updateData: Partial<Record<string, any>>) {
    return await Book.findByIdAndUpdate(id, updateData, { new: true, runValidators: true });
  }
  
}

export default new InventoryService();
