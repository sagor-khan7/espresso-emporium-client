import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../layouts/MainLayouts";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import AddCoffee from "../pages/AddCoffee";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "add-coffee",
        element: <AddCoffee />,
      },
    ],
  },
]);

export default router;
