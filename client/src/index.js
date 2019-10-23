import React from 'react';
import ReactDOM from 'react-dom';
import './tailwind-bundle.css';
import App from './App';
import {UserProvider} from "./user-context";

ReactDOM.render(<UserProvider><App /></UserProvider>, document.getElementById('root'));
