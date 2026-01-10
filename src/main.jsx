import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client';
// import "../node_modules/bootstrap/scss/bootstrap";
// import "../node_modules/bootstrap/scss/bootstrap";
// @import '../node_modules/bootstrap/scss/bootstrap.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.scss'

import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
