import React, { useState } from "react";
import { Link, useLoaderData, useNavigation } from "react-router-dom";
import LoadingSpinner from "./LoadingSpinner";


const BookDetails = () => {
  const navigation = useNavigation();
  if(navigation.state ==='loading'){
    return <LoadingSpinner></LoadingSpinner>
  }
  const details = useLoaderData();
  const [fold, setFold] = useState(true);
  
  
//   console.log(navigation.state)
  const { image, title, authors, publisher, year, pages, rating, price, desc } = details;

  return (
    <div className="md:w-4/5 mx-auto mt-20 p-4">
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <img className="w-full" src={image} alt="" />
        </div>
        <div className="my-auto">
          <div className="mb-6">
            <p className="bg-yellow-500 inline-block rounded-md text-black px-2 font-bold mb-6">
              BRAND NEW
            </p>
            <h1 className="text-4xl font-bold mb-4">{title}</h1>
            <p className="font-semibold">Authors : {authors}</p>
            <p className="font-semibold">Publisher : {publisher}</p>
            <p className="font-semibold">Pages : {pages}</p>
            <p className="font-semibold">Year : {year}</p>
            <p className="mb-5 font-semibold">Rating : {rating}</p>
            {fold ? (
              <>
                <p className="">
                  {desc.substring(0, 150)}.....{" "}
                  <span
                    onClick={() => setFold(false)}
                    className="text-blue-400 font-semibold cursor-pointer"
                  >
                    read more
                  </span>
                </p>
              </>
            ) : (
              <>
                <p className="">
                  {desc}
                  <span
                    onClick={() => setFold(true)}
                    className="text-blue-400 font-semibold cursor-pointer"
                  >
                    show less
                  </span>
                </p>
              </>
            )}
          </div>
          <Link className="me-3" to="">
            <div className="bg-blue-400 inline-flex px-4 py-2 items-center rounded-md">
              <p className=" text-white font-semibold">Buy Now</p>
            </div>
          </Link>
          <p className="inline-block font-bold">Price : {price}</p>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
