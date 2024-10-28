import mongoose from "mongoose";
import { Book } from "../models/bookModel.js"

export const createBook = async (req, res) =>{
    const book = req.body

    
  if (!book.title || !book.author || !book.publishYear) {
    return res
      .status(400)
      .json({ success: false, message: "Please provide all the fields" });
  }

    const newBook = Book(book)

    try {
        await newBook.save();
        res.status(201).json({ success: true, data: newBook });
      } catch (error) {
        console.log("Error in creating product:", error.message);
        res.status(500).json({ success: false, message: "Server Error" });
      }
}

export const getBook = async(req, res) => {
    try {
        const books = await Book.find({});
        res.status(200).json({ success: true, data: books });
      } catch (error) {
        console.log("error in fetching products:", error.message);
        res.status(500).json({ success: false, message: "Server Error" });
      }
}

export const getSpecBook = async (req, res) => {
    try {
        const {id} = req.params;

        const books = await Book.findById(id)
        res.status(200).json({ success: true, data: books });
    } catch (error) {
        console.log("error in fetching products:", error.message);
        res.status(500).json({ success: false, message: "Server Error" });
    }
}

export const updateBook =async(req, res) => {
    const { id } = req.params;
  const book = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res
      .status(404)
      .json({ success: false, message: "Invalid Product Id" });
  }
  try {
    const updatedBook = await Book.findByIdAndUpdate(id, book, {
      new: true,
    });
    res.status(200).json({ success: true, data: updatedBook });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server Error" });
  }
}

export const deleteBook = async (req, res) => {
    const { id } = req.params;
    try {
      await Book.findByIdAndDelete(id);
      res.status(200).json({ success: true, message: "Product deleted" });
    } catch (error) {
      res.status(404).json({ success: false, message: "Product not found" });
    }
  };