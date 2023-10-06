import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCartIcon } from "@heroicons/react/24/solid";
import Lottie from "lottie-react";
import groovyWalkAnimation from "../../public/Gv1Bwts4cg.json";
const Home = () => {
  return (
    <div className="mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl mt-20 grid md:grid-cols-2 sm:grid-cols-1 gap-4 ps-5">
      <div className="my-auto py-16">
        <div>
          <p className="bg-orange-500 inline-block rounded-md text-black px-2 font-bold mb-6">
            ON SALE !
          </p>
          <div className="mb-6">
            <h1 className="text-5xl font-semibold">
              A readers lives a thousand lives{" "}
              <span className="text-blue-400">before he dies</span>
            </h1>
          </div>
          <p className="mb-6">
            Books are a uniquely portable magic. Books serve to show a man that
            those original thoughts of his aren’t very new after all. The man
            who does not read good books is no better than the man who can’t.
          </p>
          <Link className="me-3" to="/books">
            <div className="bg-blue-400 inline-flex px-4 py-2 items-center">
              <p className=" text-white font-semibold">Visit Store</p>
              <ShoppingCartIcon className="w-5 text-gray-100"></ShoppingCartIcon>
            </div>
          </Link>
          <Link to="">
            <div className="inline-flex px-4 py-2 r">
              <p className=" text-black font-semibold">Learn More</p>
            </div>
          </Link>
        </div>
      </div>
      <div className="w-full lg:w-4/5 lg:ml-auto h-56 sm:h-96">
        <Lottie animationData={groovyWalkAnimation} loop={true} />;
      </div>
    </div>
  );
};

export default Home;
