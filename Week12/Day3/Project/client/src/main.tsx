import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import {Provider} from 'react-redux';
import store from './app/store.ts';

import './index.css'
import App from './App.tsx'
import { ThemeToggleProvider } from './app/theme/ThemeContext.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <ThemeToggleProvider>
        <App />
      </ThemeToggleProvider>
    </Provider>
  </StrictMode>,
)
