import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router } from "react-router-dom"
import App from './App';
import 'antd/dist/antd.css';
// import '@/assets/css/reset.css'

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);


