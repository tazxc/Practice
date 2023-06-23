import React from 'react'
import Col from 'react-bootstrap/esm/Col'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import { BrowserRouter } from 'react-router-dom'
import TypeBar from '../components/TypeBar'

const Shop = () =>{
    return(
        <Container>
            <Row className='mt-3'>
                <Col md={3}>
                    <TypeBar />
                </Col>
                <Col md={9}>
                    
                </Col>
            </Row>
        </Container>
    )
}

export default Shop