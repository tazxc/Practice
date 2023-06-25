import React from 'react'
import { Button, Card, Col, Container, Image, Row } from 'react-bootstrap'
import { BrowserRouter } from 'react-router-dom'

const ProductPage = () =>{
    const product = {id: 1, name: 'Капучино', price: 120, img: 'https://img.freepik.com/premium-photo/paper-cup-mockup-isolated-on-white-background-empty-white-disposable-paper-cup-with-black-plastic-lid-3d-rendering_120871-423.jpg'}
    const description = [
        {id: 1, title: 'Ккал', description: '100'},
        {id: 2, title: 'Сахар', description: '100'},
    ]
    
    return(
        <Container className='mt-4'>
            <Row>
                <Col md={4}>
                    <Image width={300} height={300} src={product.img} />
                </Col>

                <Col md={4}>
                    <Row className='d-flex flex-column align-items-center'>
                        <h2>{product.name}</h2>
                        <Row className='mt-3'>
                            {description.map(info =>
                                <Row key={info.id}>
                                    {info.title}: {info.description}
                                </Row>
                            )}
                        </Row>
                    </Row>
                </Col>

                <Col md={4}>
                    <Card
                        className='d-flex flex-column align-items-center justify-content-around'
                        style={{width: 300, height: 300, fontSize: 32, border: '5px solid lightgray'}}
                    >
                        <h3>{product.price}</h3>
                        <Button variant={"outline-dark"}>Добавить в корзину</Button>
                    </Card>
                </Col>
            </Row>
            
        </Container>
    )
}

export default ProductPage