// Layout
import DefaultLayout from "../layouts/DefaultLayout";

// Pages
import Home from "../pages/Home";
import Login from "../pages/Login";
import Registro from "../pages/Registro";
import Activation from "../pages/Activation";
import ForgotPassword from "../pages/ForgotPassword";
import ResetPassword from "../pages/ResetPassword";
import Dashboard from "../pages/Dashboard";
import Portfolio from "../pages/Portfolio";
import Profile from "../pages/Profile";
import Experiencies from "../pages/Experiencies";
import Projects from "../pages/Projects";
import NotFound from "../pages/NotFound";
import ServerError from "../pages/ServerError";

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
        path: "/activacion/:token",
        component: Activation,
        exact: true,
      },
      {
        path: "/recuperar-contrasena",
        component: ForgotPassword,
        exact: true,
      },
      {
        path: "/reestablecer-contrasena/:token",
        component: ResetPassword,
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
      {
        path: "/error/500",
        component: ServerError,
        exact: true,
      },
      {
        component: NotFound,
      },
    ],
  },
];

export default routes;
