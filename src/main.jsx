import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Cartpage from './components/Cartpage.jsx'
import Products from './components/Products.jsx'
import Dashboard from './components/Dashboard.jsx'
import { Provider } from 'react-redux'
import store from './store/store.js'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {
        path: "",
        element: <Products/>
      },
      {
        path: "cartpage",
        element: <Cartpage/>
      },
      {
        path: 'dashboard',
        element: <Dashboard/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>
)
