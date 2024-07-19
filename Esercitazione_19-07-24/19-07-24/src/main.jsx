import React from 'react'
import ReactDOM from 'react-dom/client'
import ArticlesProvide from './providers/ProviderContex.jsx'
import LayoutDefault from './Layout/LayoutDefault.jsx'
import App from './App.jsx'
import Cart from './pages/Cart.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <LayoutDefault />,
      children: [
        {
          path: '/',
          element: <App />
        },
        {
          path: 'cart',
          element: <Cart />
        }
      ]
    }
  ]
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ArticlesProvide>
      <RouterProvider router={router} />
    </ArticlesProvide>
  </React.StrictMode>
)
