import { useState } from 'react';
import { BrowserRouter, Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';


function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route >
            <Route path='/' element={<Home />} />
            <Route path='/chi-siamo' element={<About />} />
            <Route path='/products' element={<Products />} />
          </Route>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App;