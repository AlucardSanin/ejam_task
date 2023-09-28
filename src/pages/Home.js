import React from "react";
import Header from '../components/Header'
import Footer from '../components/Footer';
import './Home.css'
import clarifion from '../logos/Clarifion.svg'
import mcafee from '../logos/McAffe.svg'
import norton from '../logos/Norton.svg'
import Product from '../images/product.svg'
import Review from '../images/review.svg'
import OfferImg from '../images/offerimg.svg'
import Stars from '../images/stars.svg'
import Paymet from '../images/pay.svg'
import Guarantee from '../images/guarantee.svg'

function Landing() {
  return (
  <>
    <Header />
    <div className="topper">
      <div id="left">
        <img src={clarifion} alt="Clarifion Logo" />
      </div>
      <div id="rigth">
        <img src={mcafee} alt="McAfee Logo" />
        <img src={norton} alt="Norton Logo" />
      </div>
    </div>

    <div className="order">
      <p id="wait">Wait ! your order in progress.</p>
      <p id="aux-full">Lorem ipsum dolor sit amet, consectetur adipiscing </p>
      <p id="aux-short">Lorem ipsum dolor sit amet, consectetur</p>
    </div>

    <div className="steps">
      <ul>
        <li id="done-full">Step 1 : Cart Review</li>
        <li id="done-short">Cart Review</li>
        <li id="done-full">Step 2 : Checkout</li>
        <li id="done-short">Checkout</li>
        <li id="current-full">Step 3 : Special Offer</li>
        <li id="current-short">Special Offer</li>
        <li id="pending-full">Step 4 : Confirmation</li>
        <li id="pending-short">Confirmation</li>
      </ul>
    </div>
    <div className="offerFrame">
      <div>
      <p id="eol1-short"><span>ONE TIME ONLY</span> special price for 6 extra Clarifion for only <span>$14 each</span> ($84.00 total!)</p>
        <img id="specs" src={Product} alt="Clarifion product details" />
        <div id="review">
        <img src={Review} alt="5 stars review from Ken T. a verified customer" />
        <p>“As soon as the Clarifions arrived I put one in my bedroom. This was late in the afternoon. When I went to the bedroom in the evening it smelled clean. When I went to bed I felt I could breathe better. Wonderful.”</p>
      </div>
      </div>
      
      <div className="extraOffer">
        <p id="eol1-full"><span>ONE TIME ONLY</span> special price for 6 extra Clarifion for only <span>$14 each</span> ($84.00 total!)</p>
        <div id="detail">
        <img id="offerImg" src={OfferImg} alt="Clarifion Air Ionizer" />
          <div id="container">
            <div id="ptitle">
            <p>Clarifion Air Ionizer</p>
            <p><span id="pl1">$180</span><span id="rebate">$84</span></p>
            </div>
            <img id="stars" src={Stars} alt="Customers 5 Stars overall calification" />
            <ul>
              <li>12 left in Stock</li>
            </ul>
            <p id="full">Simply plug a Clarifion into any standard outlet and replace bulky, expensive air purifiers with a simple.</p>
          </div>
          </div>
          <p id="short-paux">Simply plug a Clarifion into any standard outlet and replace bulky, expensive air purifiers with a simple.</p>
          <ul id="char">
            <li>Negative Ion Technology may <span>help with allergens</span></li>
            <li>Designed for <span>air rejuvenation</span></li>
            <li><span>Perfect for every room</span> in all types of places.</li>
          </ul>
          <p id="pl2">Save <span>53%</span> and get <span>6 extra Clarifision</span> for only <span>$14 Each.</span></p>
        
        <button>Yes - Claim my discount <span className="material-symbols-outlined" id="arrow">arrow_right_alt</span></button>
        <div id="paymentDetails">
          <ul>
            <li>Free shipping</li>
            <li>Secure 256-bit SSL encryption.</li>
            <li><img src={Paymet} alt="Payment methods" /></li>
          </ul>
        </div>

        {/* this should be an a tag (<a>) but for this purpose I just added the pointer with a hover */}
        <p id="noThanks">No thanks, I don’t want this.</p>
        <div id="guarantee">
          <img src={Guarantee} alt="100% Guarantee Satifaction" />
          <p>If you are not completely thrilled with your Clarifion - We have a <span>30 day satisfaction guarantee</span>. Please refer to our return policy at the bottom of the page for more details. Happy Shopping!</p>
        </div>
      </div>
    </div>
    <Footer />
  </>
  )
}

export default Landing;