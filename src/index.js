import { StoreProvider } from 'easy-peasy';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { setAuthToken } from './service';
import Store from './store';


const root = ReactDOM.createRoot(document.getElementById('root'));


const authToken = localStorage.getItem('authToken')
if (authToken) {
  setAuthToken(authToken)
}


root.render(
  <React.StrictMode>
    <StoreProvider store={Store}>
      <App />
    </StoreProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
