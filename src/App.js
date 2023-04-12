import React, { useEffect, useState } from 'react'
import TopBar from './components/TopBar'
import { Container } from 'react-bootstrap'
import { Route, Routes } from 'react-router-dom'
import HomePage from './components/HomePage'
import SearchResultsPage from './components/SearchResultsPage'
import BookDetailsPage from './components/BookDetailsPage'
import { TEST_BOOKS } from './FAKE_DATA'

export default function App() {
  const [bookList, setBookList] = useState([])

  useEffect(() => {
    setBookList(TEST_BOOKS)
  }, []) // [] = once (twice in dev), nothing = every time, [something] = when that something changes

  return (
    <>
      <TopBar/>
      <Container>
        <Routes>
          <Route path="/" element={ <HomePage bookList={bookList}/> }/>
          <Route path="/search/:searchQuery" element={ <SearchResultsPage bookList={bookList}/> }/>
          <Route path="/book/:bookId" element={ <BookDetailsPage bookList={bookList}/> }/>
        </Routes>
      </Container>
    </>
  )
}
