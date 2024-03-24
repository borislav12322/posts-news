import { RouterProvider } from "react-router-dom";
import { routesList } from "./routesList";

const Router = () => {
  return <RouterProvider router={routesList} />;
};

export default Router;
