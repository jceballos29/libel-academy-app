import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
// import axios from 'axios'
import './styles/index.scss';
// import '~video-react/dist/video-react.css';
import store from './store';

import App from './App';

// const API_URL = process.env.REACT_APP_API_URL
// axios.defaults.baseURL = API_URL;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

