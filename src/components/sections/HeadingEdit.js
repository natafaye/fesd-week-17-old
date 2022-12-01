import React from 'react'

export default function HeadingEdit({ section, onUpdate }) {
  return (
    <div className="row">
      <div className="col">
        <input type="text" value={section.content} onChange={(event) => onUpdate({ content: event.target.value })}/>
      </div>
    </div>
  )
}
