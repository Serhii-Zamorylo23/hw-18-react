import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {ProviderHW16} from "./hw-16/ContextHW16";
import {ProviderHW17} from "./HW-17/ContextHW17";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <ProviderHW16>
          <ProviderHW17>
              <App />
          </ProviderHW17>
      </ProviderHW16>
  </React.StrictMode>
);
