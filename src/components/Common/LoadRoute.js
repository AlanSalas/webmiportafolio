import React from "react";
import { Route, Switch } from "react-router-dom";

const LoadRoute = ({ routes, reload, setReload }) => {
  return (
    <Switch>
      {routes.map((route, index) => (
        <Route
          key={index}
          path={route.path}
          exact={route.exact}
          render={() => <route.component reload={reload} setReload={setReload} />}
        />
      ))}
    </Switch>
  );
};

export default LoadRoute;
