// Layout
import DefaultLayout from "../layouts/DefaultLayout";

// Pages
import Home from "../pages/Home";

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
    ],
  },
];

export default routes;
