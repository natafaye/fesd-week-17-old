import React, { useEffect, useState } from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import { Route, Routes, Link } from 'react-router-dom'
import LoginPage from './users/LoginPage'
import OrdersPage from './orders/OrdersPage'
import ProductPage from './products/ProductPage'
import ShoppingPage from './products/ShoppingPage'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'

export default function App() {
  const [productList, setProductList] = useState([]);
  const [orderList, setOrderList] = useState([]);
  const [userList, setUserList] = useState([]);
  const [loggedInUserId, setLoggedInUserId] = useState(1);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch("http://localhost:3001/users")
      const data = await response.json()
      setUserList(data)
    }
    const fetchProducts = async () => {
      const response = await fetch("http://localhost:3001/products")
      const data = await response.json()
      setProductList(data)
    }
    const fetchOrders = async () => {
      const response = await fetch("http://localhost:3001/orders")
      const data = await response.json()
      setOrderList(data)
    }
    fetchUsers()
    fetchProducts()
    fetchOrders()
  }, []) // empty array = no reason to run again = run once (aka twice in development mode for testing purposes)

  const createOrder = async (orderData) => {
    const response = await fetch("http://localhost:3001/orders", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(orderData)
    })
    const createdOrder = await response.json()

    setOrderList(orderList.concat(createdOrder))
  }

  const deleteOrder = async (orderId) => {
    await fetch("http://localhost:3001/orders/" + orderId, {
      method: "DELETE"
    })

    setOrderList(orderList.filter(order => order.id !== orderId))
  }

  const createProduct = (newProductData) => {
    setProductList(productList.concat({ ...newProductData, id: productList[productList.length - 1].id + 1 }))
  }

  const setLoggedInUser = (userId) => {
    setLoggedInUserId(userId)
  }

  const loggedInUser = userList.find(user => user.id === loggedInUserId)

  const numUserOrders = orderList.filter(order => order.userId === loggedInUserId).length

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <div className="container">
          <Navbar.Brand href="#home">Chairs R Us</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Shopping</Nav.Link>
            <Nav.Link as={Link} to="/orders">Orders</Nav.Link>
            <Nav.Link as={Link} to="/login">Login</Nav.Link>
          </Nav>
          <span className="navbar-text"><FontAwesomeIcon icon={faUser} /> {loggedInUser?.name || "Loading..."} | {numUserOrders} orders</span>
        </div>
      </Navbar>
      <div className="container mt-3">
        <Routes>
          <Route path="/" element={<ShoppingPage productList={productList} onOrder={createOrder} loggedInUserId={loggedInUserId} />} />
          <Route path="/products/:productId" element={<ProductPage productList={productList} onOrder={createOrder} loggedInUserId={loggedInUserId} />} />
          <Route path="/orders" element={<OrdersPage orderList={orderList} productList={productList} userList={userList} onDelete={deleteOrder} />} />
          <Route path="/login" element={<LoginPage userList={userList} onLogin={setLoggedInUser} />} />
        </Routes>
      </div>
    </>
  )
}
