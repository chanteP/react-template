import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';

import Home from './route/Home';
import Page from './route/Page';

function RouterConfig({ history }) {
  return (
      <ConnectedRouter history={history}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/another" component={Page} />
        </Switch>
      </ConnectedRouter>
  );
}

export default RouterConfig;