import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createHashRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import CartContent from './components/CartContent/CartContent.jsx'
import {ContextProvider} from './Context/Context.jsx'

const router = createHashRouter([
  {
    path: '/',
    element:<App />
  },
  {
    path: '/cart',
    element: <CartContent />
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ContextProvider>
      <RouterProvider router={router} />
    </ContextProvider>
    
  </StrictMode>,
)
