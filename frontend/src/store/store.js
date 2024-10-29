import {create} from 'zustand'
export const useBookStore = create((set) => ({
    books: [],
    setBooks: (books) => set({ books }),
  
    fetchBooks: async () => {
      const res = await fetch('https://book-store-veif.onrender.com/api/books');
      const data = await res.json();
      set({ books: data.data });
    },
  
    getSpecBook: async (bid) => {
      const res = await fetch(`https://book-store-veif.onrender.com/api/books/${bid}`);
      const data = await res.json();
      set({ books: data });  // Set it as an array for consistency.
    },
  
    createBook: async (newBook) => {
      if (
        !newBook.title ||
        !newBook.author ||
        !newBook.publishYear ||
        !newBook.about ||
        !newBook.review
      ) {
        return { success: false, message: 'Please fill in all Fields.' };
      }
  
      const res = await fetch('https://book-store-veif.onrender.com/api/books', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newBook),
      });
  
      const data = await res.json();
      if (!data.success) return { success: false, message: data.message };
  
      set((state) => ({ books: [...state.books, data.data] }));
      return { success: true, message: 'Product successfully created.' };
    },
  
    deleteBooks: async (pid) => {
      const res = await fetch(`https://book-store-veif.onrender.com/api/books/${pid}`, {
        method: 'DELETE',
      });
  
      const data = await res.json();
      if (!data.success) return { success: false, message: data.message };
  
      set((state) => ({
        books: state.books.filter((book) => book._id !== pid),
      }));
      return { success: true, message: data.message };
    },
  
    updateBooks: async (bid, updatedBook) => {
      const res = await fetch(`https://book-store-veif.onrender.com/api/books/${bid}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedBook),
      });
  
      const data = await res.json();
      if (!data.success) return { success: false, message: data.message };
  
      set((state) => ({
        books: state.books.map((book) => (book._id === bid ? data.data : book)),
      }));
      return { success: true, message: data.message };
    },
  }));
  