import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import Context from './context/Context';
import AuthContextprovider from './context/AuthContext';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthContextprovider>
      <Context>
        <App />
      </Context>
    </AuthContextprovider>

  </React.StrictMode>
);

