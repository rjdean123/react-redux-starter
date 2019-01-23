import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createEpicMiddleware } from 'redux-observable';
import App from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { appInit, RootAction } from './state/root.actions';
import { rootEpic } from './state/root.epic';
import { IRootState, rootReducer } from './state/root.reducer';

/**
 * Initialize redux
 */
const epicMiddleware = createEpicMiddleware<
  RootAction,
  RootAction,
  IRootState
>(/* inject deps here */);
export const store = createStore<IRootState, RootAction, {}, {}>(
  rootReducer,
  composeWithDevTools(applyMiddleware(epicMiddleware)),
);
epicMiddleware.run(rootEpic);
store.dispatch(appInit());

/**
 * Render the application
 */
ReactDOM.render(
  <App />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
