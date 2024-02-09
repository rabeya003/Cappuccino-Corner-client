import React from "react";
import ReactDOM from "react-dom/client";
import { Toaster } from "react-hot-toast";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import App from "./App";
import UpdateCoffee from "./Component/UpdateCoffee";
import AddCoffee from "./Component/AddCoffee";
import Signup from "./Component/Signup";
import Login from "./Component/Login";
import AuthProvider from "./Provider/AuthProvider";
import User from "./Component/User";
import Root from "./Layout/Root";
import Errorpage from "./Component/Errorpage";
import Home from "./Component/Home";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Errorpage />,
    children: [
      // {
      //   path: "/",
      //   element: <App></App>,
      //   loader: () => fetch("https://coffee-store-server-eight-psi.vercel.app/coffee"),
      // },
      {
        path: "/",
        element: <Home></Home>,
        loader: () =>
          fetch("https://coffee-store-server-eight-psi.vercel.app/coffee"),
      },
      {
        path: "/addCoffee",
        element: <AddCoffee></AddCoffee>,
      },
      {
        path: "/updateCoffee/:id",
        element: <UpdateCoffee></UpdateCoffee>,
        loader: ({ params }) =>
          fetch(
            `https://coffee-store-server-eight-psi.vercel.app/coffee/${params.id}`
          ),
      },
      {
        path: "/signup",
        element: <Signup></Signup>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/users",
        element: <User></User>,
        loader: () =>
          fetch("https://coffee-store-server-eight-psi.vercel.app/users"),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <Toaster />
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
