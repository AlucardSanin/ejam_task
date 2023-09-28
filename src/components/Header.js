import React, { useState } from "react";
import './Header.css'


function Header() {
  return (   
      <div className="Header">
        <ul>
          <span className="material-symbols-outlined" id="arrow">chevron_left</span>
          <li id="hp1">30-DAY SATISFACTION GUARANTEE</li>
          <li id="hp2">FREE DELIVERY ON ORDERS OVER $40.00</li>
          <li id="hp3">50.000+ HAPPY CUSTOMERS</li>
          <li id="hp4">100% MONEY BACK GUARANTEE</li>
          <span className="material-symbols-outlined" id="arrow">chevron_right</span>
        </ul>
      </div>
  )
}

export default Header;