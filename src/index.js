import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
//getbyElementはindex.htmlに相当？だからdivの中が空でもAppが表示される。
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
