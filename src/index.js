import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <div className='main'>
    <App />
    <div className="footer">
      <p>All Rights Reserved By NK &copy;</p>
    </div>
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();