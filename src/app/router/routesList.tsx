import { createBrowserRouter, Navigate } from "react-router-dom";
import routeNames from "./routeNames.json";
import { Wrapper } from "Shared/ui/wrapper";
import { Posts } from "Pages/posts";
import { PostItem } from "Pages/postItem/ui";
import { NotFound } from "Widgets/notFound/ui/notFound";

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
    element: <NotFound />,
  },
]);
