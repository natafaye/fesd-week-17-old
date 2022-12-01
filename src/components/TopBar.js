import React from 'react'
import { Container, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function TopBar() {
  return (
    <Navbar bg="light">
      <Container>
        <Navbar.Brand as={Link} to="/">Crappy CMS</Navbar.Brand>
      </Container>
    </Navbar>
  )
}
