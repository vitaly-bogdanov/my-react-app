import React, { FC } from 'react';
import { Route, Switch, Redirect, BrowserRouter } from 'react-router-dom';

import { routes, defaultRedirectPath } from './router.root';

export const Router: FC = () => (
  <BrowserRouter>
    <Switch>
      {
        routes.map((route, index) => (
          <Route key={`${route.path}-${index}`} path={route.path} exact={route.exact}>
            <route.Page />
          </Route>
        ))
      }
      <Redirect to={defaultRedirectPath} />
    </Switch>
  </BrowserRouter>
);