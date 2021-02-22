import React from "react";
import { Route, Switch } from "react-router-dom";

const LoadRoute = ({ routes }) => {
  return (
    <Switch>
      {routes.map((route, index) => (
        <Route key={index} path={route.path} exact={route.exact} component={route.component} />
      ))}
    </Switch>
  );
};

export default LoadRoute;
