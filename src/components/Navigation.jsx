import React from "react";
import { NavLink } from "react-router-dom";
import { BsSearch } from "react-icons/bs";

const Navigation = () => {
  return (
    <>
      <header className="w-full h-[80px] md:h-[100px] mx-auto flex justify-center items-center shadow-sm">
        <div className="w-full h-[60px] md:h-[70px] md:w-[1280px] flex justify-between items-center font-semibold text-lg p-10">
          <div className="text-2xl">
            <NavLink to="/">Bookshelf</NavLink>
          </div>
          <div>
            <NavLink to="/search" className="flex items-center justify-center gap-4">
              Search
              <BsSearch size={20}/>
            </NavLink>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navigation;
