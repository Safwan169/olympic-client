// src/routes/user.routes.jsx
import Home from "../pages/Home/Home";
import NotFound from "../pages/NotFound/NotFound";

const userRoutes = [
  {
    index: "/",
    element: <Home />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export default userRoutes;
