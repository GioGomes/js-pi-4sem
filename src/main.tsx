import React from 'react'
import ReactDOM from 'react-dom/client'
import './meu-app.css'
import { RouterProvider } from 'react-router-dom'
import router from './routes/routes'
import { ChakraProvider } from '@chakra-ui/react'


ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider>
    
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>,
)
