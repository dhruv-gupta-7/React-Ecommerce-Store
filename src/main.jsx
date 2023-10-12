import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ProductProvider } from './Components/ProductsProvider.jsx'
import SortingProvider from './Components/SortingProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <ProductProvider>
     <SortingProvider>
    <App />
    </SortingProvider>
    </ProductProvider>
  </React.StrictMode>,
)
