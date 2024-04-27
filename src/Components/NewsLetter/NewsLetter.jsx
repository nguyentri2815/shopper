import React from 'react'
import './NewsLetter.css'

const NewsLetter = () => {
  return (
    <div className='newLetter'>
        <div className="container">
            <h2 >
                Get Exclusive Offers On Your Email
            </h2>
            <p>subcribe to our new letter and stay updated</p>
            <div className='newLetter-subscribe'>
                <input type="email" placeholder='Your email id'/>
                <button>Subscribe</button>
            </div>
        </div>
    </div>
  )
}

export default NewsLetter