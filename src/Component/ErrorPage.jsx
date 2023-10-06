import React from "react";
import { Link, useRouteError } from "react-router-dom";
import { FaceFrownIcon } from "@heroicons/react/24/solid";
const ErrorPage = () => {
  const { error, status } = useRouteError();
  // console.log(errormessage)
  return (
    <div className="flex flex-col items-center justify-center h-[100vh] py-3">
      <FaceFrownIcon className="w-60 h-60 text-red-700"></FaceFrownIcon>
      <h1 className="text-9xl font-extrabold ">{status}</h1>
      <p className="text-3xl mb-4 text-center">{error.message}</p>
      <Link className="me-3" to="/">
        <div className="bg-blue-400 inline-flex px-4 py-2 items-center rounded-md">
          <p className=" text-white font-semibold text-2xl">Back to homepage</p>
        </div>
      </Link>
    </div>
  );
};

export default ErrorPage;
