import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Example from './route/Example';

function RouterConfig() {
  return (
      <Router>
        <Switch>
          <Route path="/" component={Example} />
        </Switch>
      </Router>
  );
}

export default RouterConfig;