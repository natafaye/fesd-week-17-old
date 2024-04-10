import { useState } from "react"
import { GOOGLE_BOOKS_API_KEY } from "./API_KEY"
import { useNavigate } from "react-router-dom"

export default function SearchBooks({ addBook }) {
    const [searchResults, setSearchResults] = useState([])
    const [searchTerm, setSearchTerm] = useState("")

    const navigate = useNavigate()

    const search = async () => {
        const response = await fetch(
            `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&apikey=${GOOGLE_BOOKS_API_KEY}`
        )
        const data = await response.json()
        setSearchResults(data.items)
    }

    const handleAddClick = (volumeId) => {
        addBook({ volume_id: volumeId, progress: 0 })
        navigate("/")
    }

    return (
        <div>
            <div className="d-flex gap-2">
                <input
                    type="text"
                    className="form-control"
                    value={searchTerm}
                    onChange={e => setSearchTerm(e.target.value)}
                />
                <button onClick={search} className="btn btn-success">Search</button>
            </div>
            <div>
                {searchResults.map(book => (
                    <div key={book.id} className="bg-light p-3 my-2">
                        <h5>{book.volumeInfo.title}</h5>
                        <p>{book.searchInfo?.textSnippet}</p>
                        <button className="btn btn-primary" onClick={() => handleAddClick(book.id)}>Add to Reading</button>
                    </div>
                ))}
            </div>
        </div>
    )
}