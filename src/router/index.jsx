import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layout";
import ErrorPage from "../ErrorPage";
import Root from "../pages/Root";
import Cart from "../pages/Cart";
import About from "../pages/About";

export const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout/>,
      errorElement: <ErrorPage />,
      children: [
        {
          path: '/',
          element: <Root/>, 
          index: true,
        },
        {
          path:'/cart',
          element:<Cart/>
        },
        {
          path: '/about',
          element:<About/>
        }
      ]
    }
  ])

