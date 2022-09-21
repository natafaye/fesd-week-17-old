import React from 'react'
import LogList from '../logs/LogList'

export default function AllLogsPage({ logList }) {
  return (
    <>
      <div className="row">
        <div className="col">
          <h2>All Logs</h2>
        </div>
        <div className="col text-end">
          <button className="btn btn-success">New Log</button>
        </div>
      </div>
      <div className="row">
        <LogList logList={logList}/>
      </div>
    </>
  )
}
