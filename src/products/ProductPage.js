import React from 'react'
import { useParams } from 'react-router-dom';

export default function ProductPage({ productList, onOrder, loggedInUserId }) {
  let { productId } = useParams();
  productId = parseInt(productId);
  const product = productList.find( p => p.id === productId )

  const onOrderButtonClick = () => {
    onOrder({ productId, userId: loggedInUserId });
  }

  return (
    <div>
      <h2>{ product.name } - ${ product.price.toFixed(2) }</h2>
      <img src={product.image} className="w-50"/>
      <p>{ product.description}</p>
      <button className="btn btn-success" onClick={ onOrderButtonClick }>Order</button>
    </div>
  )
}
