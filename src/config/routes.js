// Layout
import DefaultLayout from "../layouts/DefaultLayout";

// Pages
import Home from "../pages/Home";
import Login from "../pages/Login";
import Registro from "../pages/Registro";
import Dashboard from "../pages/Dashboard";

const routes = [
  {
    path: "/",
    component: DefaultLayout,
    exact: false,
    routes: [
      {
        path: "/",
        component: Home,
        exact: true,
      },
      {
        path: "/login",
        component: Login,
        exact: true,
      },
      {
        path: "/registro",
        component: Registro,
        exact: true,
      },
      {
        path: "/dashboard",
        component: Dashboard,
        exact: true,
      },
    ],
  },
];

export default routes;
