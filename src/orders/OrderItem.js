import React from 'react'

export default function OrderItem({ order, productList, userList, onDelete }) {
  const user = userList.find(user => user.id === order.userId);
  const product = productList.find(product => product.id === order.productId);
  return (
    <li className="list-group-item">
      <button className="btn btn-danger me-2" onClick={() => onDelete(order.id)}>Delete</button>
      { user.name } bought { product.name } for ${ product.price }
    </li>
  )
}
