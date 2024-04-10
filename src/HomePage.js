import AddBookForm from "./AddBookForm";
import ReadingBookRow from "./ReadingBookRow";

export default function HomePage({ readingBooks, updateBook, addBook }) {
  return (
    <div>
        <h3>My Current Reading</h3>
        <AddBookForm addBook={addBook}/>
        <table className="table">
            <thead>
                <tr>
                    <th></th>
                    {/* TODO: Sort by ID or Progress when clicked on */}
                    <th>Title</th>
                    <th>Progress</th>
                </tr>
            </thead>
            <tbody>
                { readingBooks.map(book => (
                    <ReadingBookRow key={book.id} book={book} updateBook={updateBook}/>
                ))}
            </tbody>
        </table>
    </div>
  )
}