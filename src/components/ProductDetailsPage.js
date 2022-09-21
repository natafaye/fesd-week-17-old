import React from 'react'
import { useParams } from 'react-router-dom'
import productImage from '../images/default-product-image.jpg'

export default function ProductDetailsPage(props) {
    const params = useParams();
    const productId = parseInt(params.productId);

    const product = props.products.find(p => p.id === productId)

    return (
        <div className="row">
            <div className="col">
                <img src={productImage} className="img-fluid"/>
            </div>
            <div className="col">
                <h3>{ product.name }</h3>
                <p>Price: ${product.price}</p>
                <button className="btn btn-primary">Edit</button>
            </div>
        </div>
    )
}
