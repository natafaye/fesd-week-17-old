import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function PageRow({ page, onDelete }) {
  const navigate = useNavigate();

  return (
    <div className="row border my-3 py-3 align-items-center">
      <div className="col">
        { page.title }
      </div>
      <div className="col text-end">
        <button className="btn btn-danger me-2" onClick={() => onDelete(page.id)}>Delete</button>
        <button className="btn btn-primary me-2" onClick={() => navigate(`/pages/${page.id}/edit`)}>Edit</button>
        <button className="btn btn-success" onClick={() => navigate(`/pages/${page.id}`)}>View</button>
      </div>
    </div>
  )
}
