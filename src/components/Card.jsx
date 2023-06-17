import React from "react";
import { useData } from "../contexts/DataContext";

const Card = ({ book }) => {
  const shelfCategory = [
    { id: 1, shelf: "currently reading" },
    { id: 2, shelf: "want to read" },
    { id: 3, shelf: "read" },
    { id: 4, shelf: "none" },
  ];
  const { id, title, author, image, year, shelf } = book;
  const { setShelf } = useData();

  const handleShelfChange = (e) => {
    const newShelf = e.target.value;
    setShelf(book.id, newShelf);
  };

  return (
    <>
      <div
        className="w-72 bg-white shadow-md rounded-xl hover:shadow-xl"
        key={id}
      >
        <img
          src={image}
          alt={title}
          className="h-80 w-72 object-cover rounded-t-xl"
        />
        <div className="px-4 py-3 w-72">
          <span className="text-gray-400 mr-3 uppercase text-xs">{author}</span>
          <p className="text-2xl font-bold text-black truncate block capitalize">
            {title}
          </p>
          <div className="flex flex-col">
            <p className="text-sm font-semibold text-black">{year}</p>
            <p className="text-sm text-gray-600 font-bold">Shelf: {shelf}</p>
          </div>
          <select onChange={handleShelfChange}>
            {shelfCategory?.map(({ id, shelf }) => (
              <option key={id} value={shelf} selected={book.shelf === shelf}>
                {shelf}
              </option>
            ))}
          </select>
        </div>
      </div>
    </>
  );
};

export default Card;
