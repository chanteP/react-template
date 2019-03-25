import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

// import * as serviceWorker from './serviceWorker';
import router from './router';
import store, { history } from './redux/configureStore';

function getRootComponent(router) {
  return props => (
      <Provider store={store}>
        {router({ history, ...props })}
      </Provider>
  );
}

ReactDOM.render(React.createElement(getRootComponent(router)), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();
