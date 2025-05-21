import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Contact from './ContactApp';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Contact />
  </StrictMode>,
)