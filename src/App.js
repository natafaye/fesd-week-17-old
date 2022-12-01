import React, { useState } from 'react'
import { TEST_PAGES, TEST_SECTIONS } from './TEST_DATA'
import { v4 as uuid } from 'uuid'
import { Route, Routes } from 'react-router-dom'
import TopBar from './components/TopBar'
import HomePage from './components/HomePage'
import EditPage from './components/EditPage'
import ViewPage from './components/ViewPage'

export default function App() {
  const [pageList, setPageList] = useState(TEST_PAGES)
  const [sectionList, setSectionList] = useState(TEST_SECTIONS)

  const createPage = () => {
    const newPage = {
      id: uuid(), // generates a big old string id that's unique
      title: "Untitled"
    }
    setPageList([...pageList, newPage])
  }

  const deletePage = (idToDelete) => {
    setPageList(pageList.filter(page => page.id !== idToDelete))
  }

  const updatePage = (newPageData) => {

  }

  const createSection = (pageId) => {
    const newSection = {
      id: uuid(), // generates a big old string id that's unique
      type: "text",
      pageId: pageId,
      content: ""
    }
    setSectionList([...sectionList, newSection])
  }

  const deleteSection = (idToDelete) => {
    setSectionList(sectionList.filter(s => s.id !== idToDelete))
  }

  const updateSection = (newSectionData) => { // newSectionData = { content: event.target.value }

  }

  return (
    <div>
      <TopBar />
      <div className="container">
        <Routes>
          <Route path="/" element={<HomePage pageList={pageList} onCreate={createPage} onDelete={deletePage}/>} />
          <Route path="/pages/:pageId/edit" element={<EditPage pageList={pageList} sectionList={sectionList} onUpdatePage={updatePage} onCreateSection={createSection} onUpdateSection={updateSection} />} />
          <Route path="/pages/:pageId" element={<ViewPage pageList={pageList} sectionList={sectionList}/>} />
        </Routes>
      </div>
    </div>
  )
}
