import { Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import StatsPage from "./StatsPage";
import BookDetailsPage from "./BookDetailsPage";
import TopNavbar from "./TopNavbar";
import { Container } from "react-bootstrap";
import { useEffect, useState } from "react";
import LoginPage from "./LoginPage";
import SearchBooks from "./SearchBooks";

const MOCK_API_URL = "https://660cb1aa3a0766e85dbe784c.mockapi.io/api/reading/Book"
const JSON_SERVER_URL = "http://localhost:3005/books"

export default function App() {
  const [readingBooks, setReadingBooks] = useState([])

  useEffect(() => {
    const fetchReadingBooks = async () => {
      const response = await fetch(JSON_SERVER_URL)
      const fetchedBooks = await response.json() // unsmoosh (or unJSON) the data
      setReadingBooks(fetchedBooks)
    }
    fetchReadingBooks()
  }, []) // empty dependency array -> run once (or twice in development mode)

  const updateBook = (updatedData, idToUpdate) => {
    // Update the database
    // When we're doing an update, we need to put the id on the end of the URL so it knows which one to update
    fetch(JSON_SERVER_URL + "/" + idToUpdate, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      // In the body we send a smooshified version of our updated data
      body: JSON.stringify(updatedData)
    })

    // Update the state
    // When you're updating an object inside of an array, you have to make a copy of the array and of the object
    const indexToUpdate = readingBooks.findIndex(b => b.id === idToUpdate)
    const copyOfReadingBooks = [...readingBooks]
    // Set the index to a copy of the object, with the properties on updatedData overwriting the properties on the copy
    copyOfReadingBooks[indexToUpdate] = { ...copyOfReadingBooks[indexToUpdate], ...updatedData}
    // Set the state to the updated array with the updated object inside
    setReadingBooks(copyOfReadingBooks)
  }

  const addBook = async (newBookData) => {
    // add it to the database
    const response = await fetch(JSON_SERVER_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newBookData)
    })
    const createdReadingBookWithId = await response.json()
    // add it to the state
    setReadingBooks( [...readingBooks, createdReadingBookWithId] )
  }

  return (
    <div>
      <TopNavbar />
      <Container className="mt-3">
        <Routes>
          <Route path="/" element={
            <HomePage readingBooks={readingBooks} updateBook={updateBook} addBook={addBook} />
          } />
          <Route path="/login" element={<LoginPage/>}/>
          <Route path="/stats" element={<StatsPage />} />
          <Route path="/books/:id" element={<BookDetailsPage />} />
          <Route path="/search" element={<SearchBooks addBook={addBook}/>}/>
        </Routes>
      </Container>
    </div>
  )
}