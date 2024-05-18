import {
  createBrowserRouter,
} from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import Listedbooks from "../pages/ListedBooks/Listedbooks";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: '/listedbooks',
          element: <Listedbooks></Listedbooks>
        }
      ]
    },
  ]);