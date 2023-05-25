import React from 'react'
import { Link } from 'react-router-dom'

function ProductCard({ product, onOrder, loggedInUserId }) {
  return (
    <div className="col">
      <div className="card">
        <img className="card-img-top" src={product.image}/>
        <div className="card-body">
          <h5 className="card-title"><Link to={"/products/" + product.id}>{product.name}</Link></h5>
          <button className="btn btn-success" onClick={() => onOrder({ productId: product.id, userId: loggedInUserId })}>Order</button>
        </div>
      </div>
    </div>
  )
}

export default function ShoppingPage({ productList, onOrder, loggedInUserId }) {
  return (
    <div className="row">
      {productList.map(product => <ProductCard product={product} onOrder={onOrder} loggedInUserId={loggedInUserId} key={product.id} />)}
    </div>
  )
}
