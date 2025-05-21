import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Blog from './BlogApp'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Blog />
  </StrictMode>,
)