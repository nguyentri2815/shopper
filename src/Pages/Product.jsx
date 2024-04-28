import React, { useContext, useEffect } from 'react'
import BreadCrums from '../Components/BreadCrums/BreadCrums'
import { useParams } from 'react-router-dom';
import { ShopContext } from '../Context/ShopContext';
import ProductDIsplay from '../Components/ProductDisplay/ProductDIsplay';
import DescriptionBox from '../Components/DescriptionBox/DescriptionBox';
import RelatedProducts from '../Components/RelatedProducts/RelatedProducts';

const Product = (props) => {
  let { productId } = useParams();
  const {all_product,setCategory} = useContext(ShopContext)
  const product = all_product.find(item => item.id === Number(productId));
  useEffect(() => {
    setCategory(product.category)
  }, [product]);
  return (
    <div className="product">
      <div className='container'>
        <BreadCrums category={product.category} name={product.name}/>
        <ProductDIsplay product={product}/>
        <DescriptionBox/>
        <RelatedProducts/>
      </div>
    </div>
  )
}

export default Product