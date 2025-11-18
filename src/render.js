import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter} from 'react-router-dom';
import { addComment } from './redux/state';





const root = ReactDOM.createRoot(document.getElementById('root'));


export let rerendrerEntireTree = (state) => {
root.render(
  <React.StrictMode>
     <BrowserRouter>
    <App state={state} addComment={addComment} />
    </BrowserRouter>
  </React.StrictMode>
);
}



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
