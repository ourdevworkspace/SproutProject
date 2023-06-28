import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layout";
import ErrorPage from "../ErrorPage";
import MainPage from "../pages/MainPage";
import CartPage from "../pages/Cart";
import AboutPage from "../pages/About";

export const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout/>,
      errorElement: <ErrorPage />,
      children: [
        {
          path: '/',
          element: <MainPage/>, 
          index: true,
        },
        {
          path:'/cart',
          element:<CartPage/>
        },
        {
          path: '/about',
          element:<AboutPage/>
        }
      ]
    }
  ])

