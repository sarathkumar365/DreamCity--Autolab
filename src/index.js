import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';

import App from './App';
// import Services from './components/ServicesComp.jsx'
// import About from './components/AboutComp.jsx'
// import Contact from './components/ContactComp.jsx'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);
