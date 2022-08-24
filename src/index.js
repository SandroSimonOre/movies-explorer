import React from 'react';
import ReactDOM from 'react-dom/client';

import Container from './components/Container';
//require('dotenv').config();
import {API_KEY} from './apiKey';
//import * as dotenv from 'dotenv';
//dotenv.config();
/*
const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
    <Container />   
);
*/
ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Container />
        <h1>{API_KEY}</h1>
    </React.StrictMode>
         
)