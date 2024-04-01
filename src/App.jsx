import React, { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HashLoader from "react-spinners/HashLoader";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './Pages/Home';
import Gallery from './Pages/Gallery';
import Contact from './Pages/Contact';
import Nav from './components/Nav';
import Footer from './components/Footer';

function App() {
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)

    }, 3000)
  }, [])

  return (
    <div className='App'>
      {
        loading ?
          <div className="loading-container">
            <HashLoader
            color={'#01C38D'}
            loading={loading}
            size={50}
            className='loader'
            speedMultiplier={1}
          />
          <p className='loading-text'>Welcome to Eyu Pics</p>
          </div>
          
          
          :
          <BrowserRouter>
            <Nav />
            <Routes>
              <Route index element={<Home />}></Route>
              <Route path='/gallery' element={<Gallery />}></Route>
              <Route path='/contact' element={<Contact />}></Route>
            </Routes>
            <Footer />
          </BrowserRouter>
      }
<ToastContainer/>
    </div>
  )
}

export default App
