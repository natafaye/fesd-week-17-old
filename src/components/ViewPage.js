import React from 'react'
import { useParams } from 'react-router-dom'
import Section from './sections/Section';

export default function ViewPage({ pageList, sectionList }) {
  const params = useParams();
  const pageId = params.pageId;

  const page = pageList.find(page => page.id === pageId)
  const pageSections = sectionList.filter(section => section.pageId === pageId);

  return (
    <>
      <div className="row my-3">
        <div className="col">
          <h2>{ page.title }</h2>
        </div>
      </div>
      { pageSections.map(section => <Section section={section} key={section.id} isEdit={false}/> ) }
    </>
  )
}
