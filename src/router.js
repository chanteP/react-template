import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';

import dynamicWrapper from './dynamicWrapper';

const Home = dynamicWrapper(() => import('./route/Home'), ['version']);
const Page = dynamicWrapper(() => import('./route/Page'));

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