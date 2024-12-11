import React,{lazy,Suspense} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Headers";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter, RouterProvider,Outlet } from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu";

const Applayout = () => {
  return (
    <div className="app">
      <Header />
      < Outlet/>
    </div>
  );
};

const Grocery =lazy(()=>import("./components/Grocery"))


const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Applayout />,
      children:[
        {
          path:"/",
          element:<Body/>
        },
        {
          path: "/about",
        element: <About />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/grocery",
          element: <Suspense fallback={<h1>Loading............</h1>}><Grocery /></Suspense>,
        },
        {
          path: "/restaurants/:resid",
          element: <RestaurantMenu />,
        }
      ],
      errorElement:<Error/>
    },
    
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);
