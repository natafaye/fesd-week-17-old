import React from 'react'
import HeadingEdit from './HeadingEdit'
import TextEdit from './TextEdit'
import TextView from './TextView'
import HeadingView from './HeadingView'

export default function Section({ section, isEdit, onUpdate }) {
    if (section.type === "text" && isEdit) {
        return <TextEdit section={section} onUpdate={onUpdate} />
    }
    else if(section.type === "text" && !isEdit) {
        return <TextView section={section}/>
    }
    else if(section.type === "heading" && isEdit) {
        return <HeadingEdit section={section} onUpdate={onUpdate}/>
    }
    else {
        return <HeadingView section={section}/>
    }
}
