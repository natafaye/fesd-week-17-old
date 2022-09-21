import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import AllProductsPage from "./components/AllProductsPage";
import ProductDetailsPage from "./components/ProductDetailsPage";

const API = "http://localhost:3001"

function App() {
  const [productList, setProductList] = useState([])

  const deleteProduct = (idToDelete) => {
    // also tell the backend
    fetch(API + "/products/" + idToDelete, { method: "DELETE" })
    
    setProductList(currList => currList.filter(p => p.id !== idToDelete))
  }

  useEffect(() => {
    console.log('productListUpdated:', productList)
  }, [productList])

  useEffect(() => {
    const refreshProducts = async () => {
      console.log("refreshing")
      const response = await fetch(API + "/products");
      const allProducts = await response.json();
      setProductList(allProducts);
    }
    refreshProducts();
  }, []) // empty dependency array says to run this once when the page first loads (or in dev mode, it runs twice)

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h1 className="display-5 mt-2">My Etsy Store</h1>
        </div>
        <div className="col text-end">
          <button className="btn btn-primary mt-3">New Product</button>
        </div>
      </div>
      <hr/>
      <Routes>
        <Route path="/" element={<AllProductsPage products={productList} onDelete={deleteProduct}/>}/>
        <Route path="/products/:productId" element={<ProductDetailsPage products={productList}/>}/>
      </Routes>
    </div>
  );
}

export default App;
