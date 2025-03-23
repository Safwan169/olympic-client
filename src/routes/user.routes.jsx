// src/routes/user.routes.jsx
import Home from "../pages/Home/Home";
import NotFound from "../pages/NotFound/NotFound";
import Register from "../pages/Register/Register";

const userRoutes = [
  {
    index: "/",
    element: <Home />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export default userRoutes;
