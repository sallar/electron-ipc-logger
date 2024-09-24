import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { Renderer } from './renderer';

import './reset-v2.css';
import './style.scss';

createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <Renderer />
  </StrictMode>
);
