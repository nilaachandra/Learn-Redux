


import { Outlet } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Products from './components/Products'

function App() {

  return (
    <>
      <Navbar/>

        <Outlet/>
      <Footer/>
    </>
  )
}

export default App
