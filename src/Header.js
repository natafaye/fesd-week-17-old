import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <>
            <h1>BE HEALTHY</h1>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <Link to="/" className="nav-link">All Logs</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/steps" className="nav-link">Steps</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}
