import ProductForm from "./ProductForm";

export default function AddProductPage({ addProduct, departmentList, loadingDepartments }) {
  return (
    <div>
        <h2>New Product</h2>
        <ProductForm onSubmit={addProduct} departmentList={departmentList} loadingDepartments={loadingDepartments}/>
    </div>
  )
}