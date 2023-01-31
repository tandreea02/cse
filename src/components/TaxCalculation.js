import React from 'react';
import CarTax from './CarTax';
import { Link } from 'react-router-dom';

function TaxCalculation() {
    return (
        <div className="page-container">
            <h2 className="display-3">Tax Calculation.</h2>
            <CarTax/>
            <Link to="../documentation" target=""><button>GO BACK</button></Link>
        </div>
    );
}

export default TaxCalculation;