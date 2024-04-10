import { useState } from "react"

export default function AddBookForm({ addBook }) {
    // Make pieces of state for each of our form inputs
    const [volumeIdValue, setVolumeIdValue] = useState("")
    const [progressValue, setProgressValue] = useState(0)

    const handleAddBookClick = () => {
        // tell app component to update the state and the backend
        addBook({ volume_id: volumeIdValue, progress: progressValue })
        // clear the form
        setVolumeIdValue("")
        setProgressValue(0)
    }

    return (
        <div className="d-flex align-items-center gap-3">
            <input 
                type="text" 
                className="form-control" 
                value={volumeIdValue} 
                onChange={e => setVolumeIdValue(e.target.value)} 
            />
            <input 
                type="range" 
                value={progressValue}
                onChange={e => setProgressValue(e.target.value)}
            />
            <button className="btn btn-success btn-lg" onClick={handleAddBookClick}>Add Book</button>
        </div>
    )
}