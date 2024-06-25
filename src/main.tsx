import React from 'react';
import ReactDOM from 'react-dom/client';

import { ContextProvider } from './context.tsx';
import App from './App.tsx';
import './index.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ContextProvider>
      <App />
    </ContextProvider>
  </React.StrictMode>,
);
