import Book from "../database/models/books.model";

class BooksPvtService {
  // Retreive book data
  async getAllBooks(name?: string) {
    if (name) {
      const regex = new RegExp(name, 'i');
      return await Book.find({
        $or: [
          { title: { $regex: regex } },
          { author: { $regex: regex } },
          { genre: { $regex: regex } },
          { publicationBy: { $regex: regex } }
        ]
      });
    }
    return await Book.find();
  }
  

  // Adding book data
  async addBooks(
    title: string,
    author: string,
    genre: string,
    publicationBy: string,
    price: number, 
    currency: string, 
    description: string, 
    imageUrl: string
    
  ) {
    const book = new Book({ title, author, genre, publicationBy,  price, currency, description, imageUrl  });
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

export default new BooksPvtService();
