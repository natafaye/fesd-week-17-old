import React from 'react'
import { Container, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import SearchBar from './SearchBar'
import { faBook } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function TopBar() {
    return (
        <Navbar bg="light">
            <Container>
                <Navbar.Brand as={Link} to="/"><FontAwesomeIcon icon={faBook} /> Books R Us</Navbar.Brand>
                <SearchBar/>
            </Container>
        </Navbar>
    )
}
