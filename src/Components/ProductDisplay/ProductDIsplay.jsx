import React from 'react'

import './ProductDIsplay.css'
import star_icon from '../Assets/star_icon.png'
import star_dull_icon from '../Assets/star_dull_icon.png'

const ProductDIsplay = (props) => {
  return (
    <div className='productDisplay'>
        <div className="productDisplay-left">
            <div className="productDisplay-left-listImg">
                <img src={props.product?.image} alt={props.product?.name} />
                <img src={props.product?.image} alt={props.product?.name} />
                <img src={props.product?.image} alt={props.product?.name} />
                <img src={props.product?.image} alt={props.product?.name} />
            </div>
            <div className="productDisplay-left-mainImg">
                <img src={props.product?.image} alt={props.product?.name} />
            </div>
        </div>
        <div className="productDisplay-right">
            <h2>{props.product?.name}</h2>
            <div className="productDisplay-right-star">
                <img src={star_icon} alt="star icon" />
                <img src={star_icon} alt="star icon" />
                <img src={star_icon} alt="star icon" />
                <img src={star_icon} alt="star icon" />
                <img src={star_dull_icon} alt="star dull" />
            </div>
            <div className="productDisplay-right-price">
                <span className="productDisplay-right-price-old">
                ${props.product?.old_price}
                </span>
                <span className="productDisplay-right-price-new">
                %{props.product?.new_price}
                </span>
            </div>
            <div className="productDisplay-right-description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
            </div>
            <h3>Select Size</h3>
            <div className="productDisplay-right-size">
                <span>S</span>
                <span>M</span>
                <span>L</span>
                <span>XL</span>
                <span>XXL</span>
            </div>
            <div className="productDisplay-right-add">
                ADD TO CART
            </div>
            <p><b>Category</b>: <span>Women, T-Shirt, Crop-Top</span></p>
            <p><b>Tags</b>: <span>Modern, Latest</span></p>
        </div>
    </div>
  )
}

export default ProductDIsplay