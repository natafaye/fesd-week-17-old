import { Link } from "react-router-dom";

export default function HomePage({ productList }) {
  return (
    <div>
        { productList.map(product => (
            <div>
                <Link to={"/products/details/" + product.id}>{product.name}</Link>
                <Link to={"/products/details/" + product.id + "/edit"}>Edit</Link>
            </div>
        ))}
    </div>
  )
}