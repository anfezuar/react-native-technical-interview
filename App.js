import React, {Component} from 'react';
import Router from './App/Config/Router';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {store, persistor} from './App/Core';
import ErrorBoundary from './ErrorBoundary';


export default function App() {

  return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ErrorBoundary>
            <Router />
          </ErrorBoundary>
        </PersistGate>
      </Provider>
  );
}

