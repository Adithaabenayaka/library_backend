import Book from "../database/models/inventory.model"

class InventoryService{
    async getAllBooks(){
        return await Book.find()
    }

    async addingBooks(){
            const book = new Book({
        title: 'BookOne',
        auther: 'Auther 1',
        genre: 'bsdkf',
        publicationBy: 'Aditha'
    })

    await book.save()
    }
}

export default new InventoryService();