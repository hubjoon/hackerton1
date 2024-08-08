import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 답변 from './답변';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <답변 />
  </React.StrictMode>
);

// If you want to start measuring performance in your 답변, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
