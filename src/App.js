import { Route, Routes } from "react-router-dom";
import DepartmentPage from "./pages/DepartmentPage";
import Header from "./components/Header";
import ShoppingCartPage from "./pages/ShoppingCartPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";
import { Container } from "react-bootstrap";
import { useEffect, useState } from "react";
import EditProductPage from "./pages/EditProductPage";
import AddProductPage from "./pages/AddProductPage";

export default function App() {
  const [productList, setProductList] = useState([])
  const [loadingProducts, setLoadingProducts] = useState(true)
  const [errorMessageProducts, setErrorMessageProducts] = useState(null)
  
  const [departmentList, setDepartmentList] = useState([])
  const [loadingDepartments, setLoadingDepartments] = useState(true)
  const [errorMessageDepartments, setErrorMessageDepartments] = useState(null)

  useEffect(() => {

    async function fetchProduct() {
      setLoadingProducts(true)
      const response = await fetch("http://localhost:3005/products")
      if(!response.ok) {
        setProductList(null)
        setErrorMessageProducts(response.statusText)
        setLoadingProducts(false)
        return
      }
      const data = await response.json()
      setProductList(data)
      setErrorMessageProducts(null)
      setLoadingProducts(false)
    }
    
    async function fetchDepartments() {
      setLoadingDepartments(true)
      const response = await fetch("http://localhost:3005/departments")
      if(!response.ok) {
        setDepartmentList(null)
        setErrorMessageDepartments(response.statusText)
        setLoadingDepartments(false)
        return
      }
      const data = await response.json()
      setDepartmentList(data)
      setErrorMessageDepartments(null)
      setLoadingDepartments(false)
    }

    fetchProduct()
    fetchDepartments()
  }, [])

  const addProduct = (newProductData) => {
    setLoadingProducts(true)
    // add on the backend

    setLoadingProducts(false)
    // add on the frontend
  }

  const updateProduct = async (updatedProductData) => {
    setLoadingProducts(true)
    // update on the backend
    const response = await fetch("http://localhost:3005/products/" + updatedProductData.id, {
      method: "PUT", 
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedProductData)
    })
    if(!response.ok) {
      // It went bad
      setErrorMessageProducts(response.statusText)
      setLoadingDepartments(false)
      return  // emergency exit from a function
    }

    // It went good
    setLoadingProducts(false)
    setErrorMessageProducts(null)
    // update on the frontend
    setProductList(productList.map(product => 
      (product.id === updatedProductData.id) ?
        { ...product, ...updatedProductData } :
        product
    ))    
  }

  return (
    <div>
      <Header/>
      <Container className="mt-4">
        { errorMessageProducts ? <div className="text-danger">Error with Products: {errorMessageProducts}</div> : null }
        { loadingProducts ? <div className="text-body-tertiary">Loading Products...</div> : null }
        { errorMessageDepartments ? <div className="text-danger">Error with Departments: {errorMessageProducts}</div> : null }
        { loadingDepartments ? <div className="text-body-tertiary">Loading Departments...</div> : null }
        <Routes>
          <Route path="/" element={<HomePage productList={productList}/>}/>{/* This matches nothing */}
          <Route path="/department" element={<DepartmentPage/>}/>
          <Route path="/shopping-cart" element={<ShoppingCartPage/>}/>
          <Route path="/products/details/:productId" element={
            <ProductDetailsPage 
              productList={productList} 
              loadingProducts={loadingProducts}
              departmentList={departmentList}
              loadingDepartments={loadingDepartments}
            />
          }/>
          <Route path="/products/details/:productId/edit" element={
            <EditProductPage 
              updateProduct={updateProduct} 
              productList={productList} 
              departmentList={departmentList} 
              loadingDepartments={loadingDepartments}
              loadingProducts={loadingProducts}
            />
            }/>
          <Route path="/products/new" element={<AddProductPage addProduct={addProduct} departmentList={departmentList} loadingDepartments={loadingDepartments} />}/>
          <Route path="*" element={<NotFound/>}/>{/* This matches everything else */}
        </Routes>
      </Container>
    </div>
  )
}