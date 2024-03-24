import { createBrowserRouter, Navigate } from "react-router-dom";
import routeNames from "./routeNames.json";
import { Wrapper } from "../../shared/ui/wrapper";
import { Posts } from "../../pages/posts";
import { PostItem } from "../../pages/postItem/ui";

export const routesList = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to={routeNames.posts} />,
  },
  {
    element: <Wrapper />,
    children: [
      {
        path: routeNames.posts,
        element: <Posts />,
      },
      {
        path: `${routeNames.posts}/:id`,
        element: <PostItem />,
      },
    ],
  },
  {
    path: "*",
    element: <>404 not found</>,
  },
]);
