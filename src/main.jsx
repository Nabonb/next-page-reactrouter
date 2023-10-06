import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Component/Home.jsx';
import Books from './Component/Books.jsx';
import About from './Component/About.jsx';
import BookDetails from './Component/BookDetails.jsx';
import ErrorPage from './Component/ErrorPage.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/books",
        element: <Books></Books>,
        loader: ()=>fetch('https://api.itbook.store/1.0/new') 
      },
      {
        path: "/book/:id",
        element: <BookDetails></BookDetails>,
        loader: ({params})=>fetch(`https://api.itbook.store/1.0/books/${params.id}`) 
      },
      {
        path: "/about",
        element: <About></About>
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);