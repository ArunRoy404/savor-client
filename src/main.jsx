import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router'
import './index.css'
import router from './routes/router.jsx'
import ProviderContainer from './providers_container/ProviderContainer.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ProviderContainer>
      <RouterProvider router={router} />
    </ProviderContainer>
  </StrictMode>,
)
