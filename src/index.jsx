import React from 'react';
import ReactDOM from 'react-dom';
import App from 'App.jsx';
import Interface from 'context/Interface';

ReactDOM.render(
  <React.StrictMode>
    <Interface>
      <App />
    </Interface>
  </React.StrictMode>,
  document.getElementById('root')
);
