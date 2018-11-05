import { combineReducers, applyMiddleware, createStore } from 'redux';
import { createBrowserHistory } from 'history';
import { routerMiddleware, connectRouter } from 'connected-react-router';
import thunk from 'redux-thunk';

import reducerRegistry from './reducerRegistry';
import global, { reducerName } from '../model/global';

export const history = createBrowserHistory();
// 注册全局 model
reducerRegistry.register(reducerName, global);
reducerRegistry.register('router', connectRouter(history));

const initialState = {};
const combine = (reducers) => {
  const reducerNames = Object.keys(reducers);
  // 维持仍未加载的 reducer 的初始化状态
  Object.keys(initialState).forEach(item => {
    if (reducerNames.indexOf(item) === -1) {
      reducers[item] = (state = null) => state;
    }
  });
  return combineReducers(reducers);
};
const reducer = combine(reducerRegistry.getReducers());
const store = createStore(reducer, initialState, applyMiddleware(routerMiddleware(history), thunk));

// 当一个新的 reducer 注册时，替换 store 的 reducer
reducerRegistry.setChangeListener(reducers => {
  store.replaceReducer(combine(reducers));
});

export default store;
