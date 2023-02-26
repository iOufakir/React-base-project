import { useRoutes } from "react-router-dom";
import TweetsDashboard from "components/TweetsDashboard";

export const AppRoutes = () =>
  useRoutes([
    { path: "/", element: <TweetsDashboard /> },
    {
      path: "/about",
      element:
        "THIS IS A TEST PAGE",
    },
  ]);
