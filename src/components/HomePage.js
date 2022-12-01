import React from 'react'
import PageRow from './PageRow'

export default function HomePage({ pageList, onCreate, onDelete }) {
  return (
    <>
      <div className="row my-3">
        <div className="col">
          <h2>Pages</h2>
        </div>
        <div className="col text-end">
          <button className="btn btn-success" onClick={onCreate}>Create Page</button>
        </div>
      </div>
      { pageList.map(page => <PageRow key={page.id} page={page} onDelete={onDelete} />)}
    </>
  )
}
