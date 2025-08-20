import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../layouts/MainLayouts";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import AddCoffee from "../pages/AddCoffee";
import UpdateCoffee from "../pages/UpdateCoffee";
import CoffeeDetails from "../pages/CoffeeDetails";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import Users from "../pages/Users";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () =>
          fetch("https://espresso-emporium-server-bice.vercel.app/coffees"),
      },
      {
        path: "add-coffee",
        element: <AddCoffee />,
      },
      {
        path: "update-coffee/:id",
        element: <UpdateCoffee />,
        loader: ({ params }) =>
          fetch(
            `https://espresso-emporium-server-bice.vercel.app/coffee/${params.id}`
          ),
      },
      {
        path: "coffee-details/:id",
        element: <CoffeeDetails />,
        loader: ({ params }) =>
          fetch(
            `https://espresso-emporium-server-bice.vercel.app/coffee/${params.id}`
          ),
      },
      {
        path: "signin",
        element: <SignIn />,
      },
      {
        path: "signup",
        element: <SignUp />,
      },
      {
        path: "users",
        element: <Users />,
        loader: () =>
          fetch("https://espresso-emporium-server-bice.vercel.app/users"),
      },
    ],
  },
]);

export default router;
