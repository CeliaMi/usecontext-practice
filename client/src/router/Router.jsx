import { createBrowserRouter } from "react-router-dom"
import Wellcome from "../pages/Wellcome";
import LayoutPublic from "../layout/LayoutPublic";
import Home from "../pages/Home";
import { getAllBooks } from "../services/BookService";
import LayoutPrivate from "../layout/LayoutPrivates";

const router = createBrowserRouter([


    {
      path: '/',
      element: <LayoutPublic />,

      children: [
        {
          children:[
            {
              index: true,
              element:<Wellcome/>
            },
            {
              path: "/home",
              element: <LayoutPrivate />,
              children: [
                {
                  index: true,
                  element: <Home/>,
                  loader: getAllBooks ,
                }
              ]
            }
      ]}
  ]}
]);


  
export default router