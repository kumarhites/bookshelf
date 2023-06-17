import React from "react";

const Card = ({ book }) => {
  const { id, title, author, image, year, shelf } = book; // Destructure the properties from the book object
  console.log(book);

  return (
    <>
      <div
        class="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl"
        key={id}
      >
        <img
          src={image}
          alt={title}
          class="h-80 w-72 object-cover rounded-t-xl"
        />
        <div class="px-4 py-3 w-72">
          <span class="text-gray-400 mr-3 uppercase text-xs">{author}</span>
          <p class="text-2xl font-bold text-black truncate block capitalize">
            {title}
          </p>
          <div class="flex flex-col">
            <p class="text-sm font-semibold text-black">
              {year}
            </p>
            <p class="text-sm text-gray-600 font-bold">Shelf: {shelf}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
