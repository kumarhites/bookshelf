import { createContext, useContext, useEffect, useState } from "react";
import { fakeFetch } from "../api/fakeFetch";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [books, setBooks] = useState([]);
  const [currentlyReading, setCurrentlyReading] = useState([]);
  const [wantToRead, setWantToRead] = useState([]);
  const [alreadyRead, setAlreadyRead] = useState([]);
  const [loading, setLoading] = useState(false)
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

  //get currently reading books
  const getCurrentlyReadingBooks = () => {
    setLoading(true);
    const currentlyReadingBooks = books.filter(
      (book) => book.shelf === "currently reading"
    );
    setCurrentlyReading(currentlyReadingBooks);
    setLoading(false)
  };

  // get want to read books
  const getWantToReadBooks = () => {
    setLoading(true);
    const wantToReadBooks = books.filter((book) => book.shelf === "want to read");
    setWantToRead(wantToReadBooks)
    setLoading(false);
  }

  //get already read books
  const getAlreadyReadBooks = () => {
    setLoading(true);
    const alreadReadBooks = books.filter((book) => book.shelf === "read")
    setAlreadyRead(alreadReadBooks)
    setLoading(false);
  }
  

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    getCurrentlyReadingBooks();
    getWantToReadBooks();
    getAlreadyReadBooks();
  }, [books]);

  return <DataContext.Provider value={{currentlyReading, wantToRead, alreadyRead, books, loading}}>{children}</DataContext.Provider>;
};

export const useData = () => useContext(DataContext);
