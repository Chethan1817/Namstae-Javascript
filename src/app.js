import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Headers";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";

const Applayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

// const approuter = createBrowserRouter([
//   {
//     path: "/",
//     element: <Applayout />,
//   },
//   {
//     path: "/about",
//     element: <About />,
//   },
//   {
//     path: "/contact",
//     element: <Contact />,
//   },
// ]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Applayout/>);
