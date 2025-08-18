import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../layouts/MainLayouts";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import AddCoffee from "../pages/AddCoffee";
import UpdateCoffee from "../pages/UpdateCoffee";
import CoffeeDetails from "../pages/CoffeeDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("http://localhost:3000/coffees"),
      },
      {
        path: "add-coffee",
        element: <AddCoffee />,
      },
      {
        path: "update-coffee/:id",
        element: <UpdateCoffee />,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/coffee/${params.id}`),
      },
      {
        path: "coffee-details/:id",
        element: <CoffeeDetails />,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/coffee/${params.id}`),
      },
    ],
  },
]);

export default router;
