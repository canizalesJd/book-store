import { useState, useEffect } from 'react';

import Header from "./components/Header"
import Sidebar from "./components/Sidebar"
import ProductCard from "./components/ProductCard"
import { getAllBooks } from "../utils/functions";

export default function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      const books = await getAllBooks();
      setBooks(books);
    };
    fetchBooks();
  }, []);

  return (
    <div className="grid grid-rows-[auto_1fr] h-screen">
      <Header className="col-span-2" /> {/* Header spans across both columns */}
      <div className="grid grid-cols-[250px_1fr] gap-10">
        <Sidebar className="bg-gray-200" /> {/* Sidebar takes a fixed width of 250px */}
        <div className="container mx-auto p-10">
          <div className="grid md:grid-cols-2 sm:grid-cols-1 xl:grid-cols-5 lg:grid-cols-4 gap-10">
            {books["travel"] && books["travel"].slice(0, 6).map((book, index) => (
              <ProductCard key={index} book={book} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}