import Genric from "../component/Generic";
import { Login } from "../component/Login";
import Home from "../pages/Home";

export const data = [
  {
    id: 1,
    path: "/home",
    element: <Home />,
    child: [],
  },
  {
    id: 2,
    path: "/login",
    element: <Login />,
    child: [],
  },
  {
    id: 1,
    path: "/signup",
    element: <Genric />,
    child: [],
  },
];
