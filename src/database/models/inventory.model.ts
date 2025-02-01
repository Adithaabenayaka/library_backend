import { Schema, model } from "mongoose";

const BooksSchema: Schema = new Schema({
    title: { type: String, required: true},
    author: { type: String, required: true},
    genre: { type: String, required: true},
    publicationBy: { type: String, required: true },
    price: { type: Number, required: true }, 
    currency: { type: String, required: true }, 
    description: { type: String, required: true }, 
    imageUrl: { type: String, required: true }
},{timestamps: true});

const Book = model("Book",BooksSchema)
export default Book;