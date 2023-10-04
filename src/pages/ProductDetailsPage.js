import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export default function ProductDetailsPage({ productList, loadingProducts, departmentList, loadingDepartments }) {
  let { productId } = useParams()
  productId = parseInt(productId) // because URL params are strings, and we want a number

  const product = productList.find(p => p.id === productId)

  if(loadingProducts) { // if we're still waiting for the products to be loaded in
    return <></>
  }

  if(!product) { // if the user put in a bad URL, like with "banana" in the id spot
    return <div>Couldn't find product</div>
  }

  const department = departmentList.find(d => d.id === product.department_id)

  return (
    <div>
      <h2>{product.name}</h2>
      <p>${product.price.toFixed(2)}</p>
      <p>{loadingDepartments ? "..." : department.name}</p>
    </div>
  )
}