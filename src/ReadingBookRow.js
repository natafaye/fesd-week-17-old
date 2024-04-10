import { useEffect, useState } from "react"
import { ProgressBar } from "react-bootstrap"

// updateBook prop is a function from the App component that was passed down through HomePage to get it to ReadingBookRow
export default function ReadingBookRow({ book, updateBook }) {
    // A little piece of state that keeps track of if we're editing right now or not
    const [isEditing, setIsEditing] = useState(false)
    // A piece of state for holding the Google Books data for this book
    const [googleBooksData, setGoogleBooksData] = useState({})
    
    // Form piece of state
    const [progressSliderValue, setProgressSliderValue] = useState(book.progress)

    const handleSaveEdit = () => {
        // Use the form piece of state to tell the app component how to update the book
        updateBook({ progress: progressSliderValue}, book.id)
        setIsEditing(false)
    }

    useEffect(() => {
        const fetchBook = async () => {
            const response = await fetch(`https://www.googleapis.com/books/v1/volumes/${book.volume_id}`)
            const data = await response.json()
            setGoogleBooksData(data.volumeInfo)
        }
        fetchBook()
    }, [])

    return (
        <tr>
            <td><img src={googleBooksData?.imageLinks?.smallThumbnail}/></td>
            <td>{googleBooksData?.title}</td>
            <td>
                <div className="d-flex">
                    {/* Conditional rendering of the data or the form, depending on if we're editing right now */}
                    {!isEditing ? (
                        <>
                            <ProgressBar striped variant="success" now={book.progress} className="flex-grow-1" />
                            <button onClick={() => setIsEditing(true)} className="btn btn-outline-primary ms-3">Edit</button>
                        </>
                    ) : (
                        <>
                            {/* Form piece of state hooked up to input */}
                            <input type="range" value={progressSliderValue} onChange={(event) => setProgressSliderValue(event.target.value)}/>
                            <button onClick={handleSaveEdit} className="btn btn-outline-success ms-3">Save</button>
                            <button onClick={() => setIsEditing(false)} className="btn btn-outline-warning ms-3">Cancel</button>
                        </>
                    )}
                </div>
            </td>
        </tr>
    )
}