import React from "react";
import { Link } from "react-router-dom";

const Book = ({ book }) => {
  const { title, image, price, subtitle, isbn13 } = book;
  return (
    <Link to={`../book/${isbn13}`}>
      <div className="relative transition duration-400 transform hover:-translate-y-6 shadow-md rounded-md bg-white ">
        <div className="">
          <img className="w-full" src={image} alt="" />
        </div>
        <div className="p-6 absolute opacity-0 top-0 bg-black hover:opacity-100 text-white font-bold inset-0 transition-opacity flex flex-col bg-opacity-75">
          <p>{title}</p>
          <br />
          <p>{subtitle.substring(0, 50)}...</p>
          <p className="mt-auto">Price : {price}</p>
        </div>
      </div>
      
    </Link>
  );
};

export default Book;
