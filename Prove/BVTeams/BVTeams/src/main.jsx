import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import FormPage from './pages/FormPage.jsx'
import PlayersPage from './pages/PlayersPage.jsx'
import MatchPage from './pages/MatchPage.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: 'form',
    element: <FormPage />
  },
  {
    path: 'players',
    element: <PlayersPage />
  },
  {
    path: 'match',
    element: <MatchPage />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
