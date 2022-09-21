import React from 'react'
import { Link } from 'react-router-dom'

export default function ProductCard({ product, onDelete }) {
  return (
    <div className="col-4 mt-3">
        <div className="card">
            <div className="card-body">
                <h4 className="card-title">
                    <Link to={"/products/" + product.id}>{ product.name }</Link>
                </h4>
                <button 
                    className='btn btn-warning'
                    onClick={() => onDelete(product.id)}>
                        Delete
                </button>
            </div>
        </div>
    </div>
  )
}
