import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {Link, Routes, Route, BrowserRouter as Router} from "react-router-dom";
import Gust from "./personalPages/Gust";


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);


// Anything written here will be shown on all pages since we render index
// and after that render the components that we are routing to in here
root.render(
  <React.StrictMode>
    <Router>
			<Routes>
        {/*Routing to "/" allows us to render a page in the case of an empty url
          that will not be loaded if we go into subpages*/}
        <Route path="/" element={<App />} />
        {/*By adding * we make sure we can nest routes in /Gust*/}
				<Route path="/Gust/*" element={<Gust />} />
			</Routes>
		</Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
