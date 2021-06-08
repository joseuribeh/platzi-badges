import React from 'react';
// eslint-disable-next-lin
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';

import './global.css';
import Badges from './pages/Badges';

const container = document.getElementById('app');

ReactDOM.render(<Badges />, container);