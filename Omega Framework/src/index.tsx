import React from 'react';
import ReactDOM from 'react-dom';
import App from 'App';
import reportWebVitals from './reportWebVitals';
import 'rsuite/dist/rsuite.min.css';
import ErrorBoundary from 'components/errorBoundary';
import setupGlobalErrorHandler from './utils/errorHandler';
import { newRelicConfig } from 'config/newrelic.config';

// Set up New Relic
if (window.NREUM) {
  window.NREUM.info = newRelicConfig;
}

// Initialize global error handling
setupGlobalErrorHandler();

ReactDOM.render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
