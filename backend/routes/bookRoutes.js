import express from 'express';
import { createBook, deleteBook, getBook, getSpecBook, updateBook } from '../controllers/controller.js';


const router = express.Router()

router.post('/books', createBook);
router.get('/books', getBook);
router.get('/books/:id', getSpecBook);
router.put('/books/:id', updateBook);
router.delete('/books/:id', deleteBook);


export default router;