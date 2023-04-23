import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import rootReducer from './reducers/rootReducer';

import { Provider } from 'react-redux';
import './index.css';
import { configureStore } from '@reduxjs/toolkit';


const root = ReactDOM.createRoot(document.getElementById('root'));
// const composeEnhancers =
//   typeof window === 'object' &&
//     window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
//     window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
//       // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
//     }) : compose;

// const enhancer = composeEnhancers(applyMiddleware(thunk, logger))


//const store = createStore(rootReducer, enhancer);
const store = configureStore({
  reducer: rootReducer,
});

root.render(
  // <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  // </React.StrictMode>
);

