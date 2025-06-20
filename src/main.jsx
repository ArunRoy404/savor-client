import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router'
import './index.css'
import router from './routes/router.jsx'
import ProviderContainer from './providers_container/ProviderContainer.jsx'
import { Toaster } from 'react-hot-toast'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ProviderContainer>
      <Toaster position="top-center" reverseOrder={false}></Toaster>
      <RouterProvider router={router} />
    </ProviderContainer>
  </StrictMode>,
)
