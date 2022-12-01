import React from 'react'

export default function TextEdit({ section, onUpdate }) {
  return (
    <div className="row">
      <div className="col">
        <textarea value={section.content} onChange={(event) => onUpdate({ content: event.target.value })}/>
      </div>
    </div>
  )
}
