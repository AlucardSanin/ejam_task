import React, { useState } from "react";
import './Header.css'

function Header() {

  const [currentIndex, setCurrentIndex] = useState(0);
  const items = [
    "30-DAY SATISFACTION GUARANTEE",
    "FREE DELIVERY ON ORDERS OVER $40.00",
    "50,000+ HAPPY CUSTOMERS",
    "100% MONEY BACK GUARANTEE"
  ];

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
  };

  return (
    <div className="Header">
      <ul>
        <span className="material-symbols-outlined" id="arrow" onClick={handlePrev}>chevron_left</span>
        <li id={`hp${items.indexOf(items[currentIndex])+1}`}>{items[currentIndex]}</li>
        <span className="material-symbols-outlined" id="arrow" onClick={handleNext}>chevron_right</span>
      </ul>
    </div>
  );
}

export default Header;
