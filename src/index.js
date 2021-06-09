import React from 'react';
// eslint-disable-next-lin
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';

import './global.css';
import App from './components/App'

const container = document.getElementById('app');

ReactDOM.render(<App />, container);