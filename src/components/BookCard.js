import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function BookCard({ book }) {
    return (
        <Link to={"/book/" + book.id} className="text-reset text-decoration-none">
            <Card className="my-2">
                <Card.Body>
                    <Card.Title>
                        {book.title}
                    </Card.Title>
                    <p>Is it free? {book.paid ? "No" : "Yes"}</p>
                </Card.Body>
            </Card>
        </Link>
    )
}
