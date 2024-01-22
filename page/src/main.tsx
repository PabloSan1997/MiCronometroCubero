import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './styles/tailwind.css';
import { ProviderContext } from './Context.tsx';
import { CookiesProvider } from 'react-cookie';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <CookiesProvider>
      <ProviderContext>
        <App />
      </ProviderContext>
    </CookiesProvider>
  </React.StrictMode>,
)
