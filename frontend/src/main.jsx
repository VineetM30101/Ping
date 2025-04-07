import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import {QueryClient, QueryClientProvider} from "@tanstack/react-query"

const queryClient = new QueryClient({
  // we can delete this, he said something we can do live multi task i am not sure
  defaultOptions:{
    queries: {
      refetchOnWindowFocus: false,
    }
  }
})

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
     <QueryClientProvider client={queryClient}>
        <App />
     </QueryClientProvider>
    </BrowserRouter>
  </StrictMode>,
)
