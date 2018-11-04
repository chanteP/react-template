import { combineReducers, applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';

import reducerRegistry from './reducerRegistry';
import global, { reducerName } from '../model/global';

// 注册全局 model
reducerRegistry.register(reducerName, global);

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
const store = createStore(reducer, initialState, applyMiddleware(thunk));

// 当一个新的 reducer 注册时，替换 store 的 reducer
reducerRegistry.setChangeListener(reducers => {
  store.replaceReducer(combine(reducers));
});

export default store;
