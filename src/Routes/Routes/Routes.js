import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import DisplayError from "../../Shared/DisplayError/DisplayError";
import Home from "../../pages/Home/Home/Home";
import AllProducts from "../../pages/AllProducts/AllProducts";
import SignUp from "../../pages/SignUp/SignUp";
import Login from "../../pages/Login/Login";
import ProductDetailsPage from "../../pages/ProductDetailsPage/ProductDetailsPage";
import Cart from "../../pages/Cart/Cart";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <DisplayError></DisplayError>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "allProducts",
        element: <AllProducts></AllProducts>,
      },
      {
        path: "signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "cart",
        element: <Cart></Cart>,
      },
      {
        path: "productDetails/:id",
        element: <ProductDetailsPage></ProductDetailsPage>,
        loader: ({ params }) =>
          fetch(`https://my-shop-server-phi.vercel.app/product/${params.id}`),
      },
    ],
  },
]);
