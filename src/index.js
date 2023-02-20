import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import { appStore } from 'redux/appStore';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename='/react-homework-weekend-19.02.2023'>
    {/* <BrowserRouter> */}
      <Provider store={appStore}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
