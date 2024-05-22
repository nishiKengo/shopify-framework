// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import AppHeader from './component/Header/App-header';
import AppFooter from './component/Footer/App-footer';

ReactDOM.render(<AppHeader />, document.getElementById('root-header'));
ReactDOM.render(<AppFooter />, document.getElementById('root-footer'));