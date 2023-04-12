import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function SearchBar() {
    const [searchValue, setSearchValue] = useState("")

    const navigate = useNavigate()

    const submitSearch = () => {
        if(searchValue === "")
            navigate("/search/none")
        else
            navigate("/search/" + searchValue)
    }

    return (
        <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={searchValue} onChange={(event) => setSearchValue(event.target.value)}/>
            <button className="btn btn-outline-success" type="submit" onClick={submitSearch}>Search</button>
        </form>
    )
}
