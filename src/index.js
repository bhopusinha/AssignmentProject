import React from 'react';
import AlertMessagesProvider from 'react-alert-messages';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AlertMessagesProvider position="top-right" timeout={10000}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </AlertMessagesProvider>
);

reportWebVitals();
