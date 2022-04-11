import Genric from "../component/Generic";
import { Register } from "../component/Register";
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
    element: <Genric />,
    child: [],
  },
  {
    id: 1,
    path: "/signup",
    element: <Register />,
    child: [],
  },
];
