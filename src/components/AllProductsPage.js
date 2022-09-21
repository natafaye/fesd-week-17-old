import ProductCard from "./ProductCard";

export default function AllProductsPage(props) {
    return (
        <div className="row mt-4">
            { props.products.map(p => (
                <ProductCard product={p} onDelete={props.onDelete} key={p.id}/>
            )) }
        </div>
    )
}

//export default AllProductsPage;