import React from "react";
import { Card, Col, Image } from "react-bootstrap";
import {useNavigate} from "react-router-dom"


const ProductItem = ({product}) => {
    const history = useNavigate()
    
    console.log(history)
    return(
        <Col md={3} className="mt-4">
            <Card style={{width: 150, cursor: 'pointer'}} border={"light"}>
                <Image width={150} height={150} src={product}/>
                <div className="mt-1">
                    <div>Название</div>
                </div>
            </Card>
        </Col>
    )
}

export default ProductItem