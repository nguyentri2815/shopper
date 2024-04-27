import React from 'react'
import './Offers.css';
import exclusive_image from '../Assets/exclusive_image.png'

const Offers = () => {
  return (
    <div className='offers'>
      <div className="container">
        <div className="offers-left">
           <h2>Exclusive</h2>
           <h2>Offers for you</h2>
           <h3>ONLY ON BEST SELLERS PRODUCTS</h3>
           <button>Check now</button>
        </div>
        <div className="offers-right">
            <img src={exclusive_image} alt="exclusive" />
        </div>
      </div>
    </div>
  )
}

export default Offers