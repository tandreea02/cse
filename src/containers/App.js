import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';

import Footer from '../components/Footer';
import TaxCalculation from '../components/TaxCalculation';
import AboutCars from '../components/AboutCars';

const App = () => {

  return (
    <div className="">
      <div className="page-container">
        <h1 className="display-2"> FIRST CAR </h1>
        <h2 className="display-2">Documentation</h2>
        <header className="">
          <BrowserRouter>
            <div className="page-container">
              <br />
              <Link to="../about-cars" target="" id="about-cars"><button className="about-cars-button">ABOUT CARS</button></Link>
              <br />
              <Link to="../tax-calculation" target=""><button className="tax-calculation-button">TAX CALCULATION</button></Link>
            </div>
            <Routes>
              <Route path="about-cars" element={<AboutCars />}></Route>
              <Route path="tax-calculation" element={<TaxCalculation />}></Route>
            </Routes>
          </BrowserRouter>
        </header>
      </div>
      <Footer />
    </div>
  );
}

export default App;