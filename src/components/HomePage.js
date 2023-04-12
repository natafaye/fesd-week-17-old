import React from 'react'
import BookCard from './BookCard'

export default function HomePage({ bookList }) {
  return (
    <div>
        { bookList.map(book => <BookCard book={book} key={book.id}/> ) }
    </div>
  )
}
