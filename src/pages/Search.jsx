import React, { useState } from "react";
import { useData } from "../contexts/DataContext";
import Card from "../components/Card";
import { FiArrowLeft } from "react-icons/fi";
import { NavLink } from "react-router-dom";

const Search = () => {
  const [searchInput, setSearchInput] = useState("");
  const { books } = useData();

  const getSearchResults =
    searchInput.length > 0
      ? books.filter((book) => book.title.toLowerCase().includes(searchInput))
      : books;

  return (
    <div className="w-full md:w-[1280px] md:mx-auto">
      <div className="border-b-2 p-2 pb-5">
        <div className="max-w-full mx-auto p-10">
          <NavLink to="/" className="flex items-center text-lg py-3 font-bold gap-3">
            <FiArrowLeft size={20}/> Back Home
          </NavLink>
          <div className="relative flex items-center w-full h-12 rounded-lg focus-within:shadow-lg bg-white overflow-hidden border P-5">
            <div className="grid place-items-center h-full w-12 text-gray-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            <input
              className="h-full w-full outline-none text-sm text-gray-700 pr-2 P-5"
              type="text"
              id="search"
              placeholder="Search something.."
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
            />
          </div>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-5 w-auto">
          {getSearchResults.map((book) => (
            <Card book={book} key={book.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Search;
