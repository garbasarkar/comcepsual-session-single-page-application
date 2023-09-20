import { createBrowserRouter } from "react-router-dom";
import Control from "../AllComponent/Control";
import About from "../AllComponent/About";
import Product from "../AllComponent/Product";
import Dashboard from "../AllComponent/Dashboard";
import Home from "../AllComponent/Home";
import SinProItem from "../AllComponent/SinProItem";
import NastedDash from "../NastedComponent/NastedDash";
import DetailsShow from "../AllComponent/DetailsShow";
import Profile from "../NastedComponent/Profile";
import EditProfile from "../NastedComponent/EditProfile";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Control></Control>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/product",
        loader: () => fetch(`https://dummyjson.com/products`),
        element: <Product></Product>,
      },
      {
        path: "/props/:userId",
        loader: ({ params }) =>
          fetch(`https://dummyjson.com/products/${params.userId}`),
        element: <SinProItem></SinProItem>,
      },
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
        children: [
          
          {
            path: "/dashboard",
            element: <NastedDash></NastedDash>,
          },
          {
            path: "profile",
            element: <Profile></Profile>,
          },
          {
            path: 'editProfile',
            element: <EditProfile></EditProfile>
          }
        ],
      },
    ],
  },
]);

export default Router;
