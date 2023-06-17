import { createContext, useContext, useEffect, useState } from "react";
import { fakeFetch } from "../api/fakeFetch";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [books, setBooks] = useState([]);
  const [currentlyReading, setCurrentlyReading] = useState([]);
  const [wantToRead, setWantToRead] = useState([]);
  const [alreadyRead, setAlreadyRead] = useState([]);
  const [loading, setLoading] = useState(false);

  const getData = async () => {
    try {
      const { status, data } = await fakeFetch("https://example.com/api/books");
      if (status === 200) {
        setBooks(data.books);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // Get currently reading books
  const getCurrentlyReadingBooks = () => {
    setLoading(true);
    const currentlyReadingBooks = books.filter(
      (book) => book.shelf === "currently reading"
    );
    setCurrentlyReading(currentlyReadingBooks);
    setLoading(false);
  };

  // Get want to read books
  const getWantToReadBooks = () => {
    setLoading(true);
    const wantToReadBooks = books.filter(
      (book) => book.shelf === "want to read"
    );
    setWantToRead(wantToReadBooks);
    setLoading(false);
  };

  // Get already read books
  const getAlreadyReadBooks = () => {
    setLoading(true);
    const alreadyReadBooks = books.filter((book) => book.shelf === "read");
    setAlreadyRead(alreadyReadBooks);
    setLoading(false);
  };

  // Update shelf for a book
  const setShelf = (bookId, newShelf) => {
    setBooks((prevBooks) =>
      prevBooks.map((book) =>
        book.id === bookId ? { ...book, shelf: newShelf } : book
      )
    );
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    getCurrentlyReadingBooks();
    getWantToReadBooks();
    getAlreadyReadBooks();
  }, [books]);

  return (
    <DataContext.Provider
      value={{
        currentlyReading,
        wantToRead,
        alreadyRead,
        books,
        loading,
        setShelf,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
