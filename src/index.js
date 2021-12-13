import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import CreateAuth from './context/AuthContextApi';
import ItemListAdd from "./context/AuthDataApi"
import SetPrice from './context/AuthPrice';

ReactDOM.render(
  <React.StrictMode>
    <ItemListAdd >
      <SetPrice>
    <BrowserRouter>
    <App />
    </BrowserRouter>
      </SetPrice>
    </ItemListAdd>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
