import React, { useState } from 'react'
import { Button, Col, Modal, Row, Stack } from 'react-bootstrap'
import SearchBar from './SearchBar'
import BookCard from './BookCard';
import { useParams } from 'react-router-dom';

export default function SearchResultsPage({ bookList }) {
    const [showFilterModal, setShowFilterModal] = useState(false)

    // In Progress Form Data
    const [paidValue, setPaidValue] = useState("true")

    // Actual search and filter data
    let { searchQuery } = useParams()
    const [paidFilter, setPaidFilter] = useState(null)

    const searchResults = bookList.filter(book => 
        (book.title.toLowerCase().includes(searchQuery) || searchQuery === "none") 
        && (book.paid === paidFilter || paidFilter === null) 
    );

    const updateFilters = () => {
        setPaidFilter(paidValue === "true")
        setShowFilterModal(false)
    }

    return (
        <>
            <Row className="my-3">
                <Col>
                    <Stack direction="horizontal">
                        <SearchBar />
                        <Button variant="success" onClick={() => setShowFilterModal(true)}>Filters</Button>
                    </Stack>
                </Col>
            </Row>
            <Row>
                {searchResults.map(book => <BookCard book={book} key={book.id} />)}
            </Row>
            <Modal show={showFilterModal} onHide={() => setShowFilterModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Filters</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <select value={paidValue} onChange={(event) => setPaidValue(event.target.value)}>
                        <option value="true">Paid</option>
                        <option value="false">Free</option>
                    </select>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowFilterModal(false)}>
                        Cancel
                    </Button>
                    <Button variant="primary" onClick={updateFilters}>
                        Save
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}
