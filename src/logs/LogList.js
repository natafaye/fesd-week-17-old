import React from 'react'

export default function LogList({ logList }) {
  return (
    <ul className="list-group">
      { logList.map(log => (
        <li className="list-group-item" key={log.id}>
          { log.date } : { log.type } - { log.amount }
        </li>
      ))}
    </ul>
  )
}
