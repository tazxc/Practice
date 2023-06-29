import React, { useContext, useEffect } from 'react'
import Col from 'react-bootstrap/esm/Col'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import { BrowserRouter } from 'react-router-dom'
import TypeBar from '../components/TypeBar'
import ProductBar from '../components/ProductBar'
import ProductList from '../components/ProductList'
import { observer } from 'mobx-react-lite'
import { Context } from '../index'
import { fetchTypes } from '../http/deviceApi'

const Shop = observer(() =>{
    const {product} = useContext(Context)

    useEffect(() => {
        fetchTypes().then(data => product.setTypes(data))
    }, [])


    return(
        <Container>
            <Row className='mt-3'>
                <Col md={3}>
                    <TypeBar />
                </Col>
                <Col md={9}>
                    <ProductBar/>
                    <ProductList/>
                </Col>
            </Row>
        </Container>
    )
})

export default Shop