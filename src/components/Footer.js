import React from 'react';
import "./Footer.css";
import firstcarquizlogo from '../media/firstcarquizlogo.png';

function Footer() {
  return (
    <div className="main-footer">
      <div className="row">
        <p className="col-sm">
          &copy;{new Date().getFullYear()} FIRST CAR DOCUMENTATION
        </p>
      </div>
      <img
            src={firstcarquizlogo}
            width="10"
            height="10  "
            className="row"
            alt="First Car Doc logo"
          />
    </div>
  );
}

export default Footer;