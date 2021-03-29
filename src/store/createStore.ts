import { createStore, applyMiddleware, Reducer, Middleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

export default (reducers: Reducer, middlewares: Middleware<any>[]) => {
  const enhancer = composeWithDevTools(applyMiddleware(...middlewares));

  return createStore(reducers, enhancer);
};
