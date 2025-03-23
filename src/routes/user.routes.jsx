// src/routes/user.routes.jsx
import Home from "../pages/Home/Home";
import LoginPage from "../pages/Login/Login";
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
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export default userRoutes;
