import React from "react";
import { useData } from "../contexts/DataContext";
import Card from "../components/Card";

const Home = () => {
  const { currentlyReading, wantToRead, alreadyRead, loading } =
    useData();
  return (
    <>
      {loading ? (
        "Loading..."
      ) : (
        <div className="w-full md:w-[1280px] md:mx-auto">
          <div className="border-b-2 p-2 pb-5">
            <h1 className="text-2xl md:text-3xl font-semibold p-3 mt-5 ">
              Currently Reading
            </h1>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 md:gap-2 gap-5 w-auto">
              {currentlyReading &&
                currentlyReading.map((book) => (
                  <Card book={book} key={book.id} />
                ))}
            </div>
          </div>
          <div className="border-b-2 p-2 pb-5">
            <h1 className="text-2xl md:text-3xl font-semibold p-3 mt-5 ">
              Want to Read
            </h1>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-5 w-auto">
              {wantToRead &&
                wantToRead.map((book) => <Card book={book} key={book.id} />)}
            </div>
          </div>
          <div className="border-b-2 p-2 pb-5">
            <h1 className="text-2xl md:text-3xl font-semibold p-3 mt-5 ">
              Read
            </h1>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-5 w-auto">
              {alreadyRead &&
                alreadyRead.map((book) => <Card book={book} key={book.id} />)}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
