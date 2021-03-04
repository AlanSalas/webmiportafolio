// Layout
import DefaultLayout from "../layouts/DefaultLayout";

// Pages
import Home from "../pages/Home";
import Login from "../pages/Login";
import Registro from "../pages/Registro";
import Dashboard from "../pages/Dashboard";
import Portfolio from "../pages/Portfolio";
import Profile from "../pages/Profile";
import Experiencies from "../pages/Experiencies";
import Projects from "../pages/Projects";

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
      {
        path: "/perfil",
        component: Profile,
        exact: true,
      },
      {
        path: "/experiencias",
        component: Experiencies,
        exact: true,
      },
      {
        path: "/proyectos",
        component: Projects,
        exact: true,
      },
      {
        path: "/:username",
        component: Portfolio,
        exact: true,
      },
    ],
  },
];

export default routes;
