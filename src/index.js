import React from 'react';
import AlertMessagesProvider from 'react-alert-messages';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <AlertMessagesProvider position="top-right" timeout={10000}>
      <App />
    </AlertMessagesProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
