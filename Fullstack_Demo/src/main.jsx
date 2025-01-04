import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)

// Rendering is the process of generating and updating the UI based on the component's code, state, and props. 
// React optimizes this process with the Virtual DOM, ensuring efficient updates to the actual DOM.