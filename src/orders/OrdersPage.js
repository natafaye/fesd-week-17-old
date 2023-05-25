import React from 'react'
import OrderItem from './OrderItem'

export default function OrdersPage({ orderList, productList, userList, onDelete }) {
  return (
    <div className="row">
      <div className="col">
        <ul className="list-group">
          {orderList.map(order => (
            <OrderItem key={order.id} order={order} productList={productList} userList={userList} onDelete={onDelete} />
          ))}
        </ul>
      </div>
    </div>
  )
}
