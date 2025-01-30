import mongoose, { Schema, Document, model } from "mongoose";

const BooksSchema: Schema = new Schema({
    title: { type: String},
    author: { type: String},
    genre: { type: String },
    publicationBy: { type: String, required: true },
},{timestamps: true});

const Book = model("Book",BooksSchema)
export default Book;