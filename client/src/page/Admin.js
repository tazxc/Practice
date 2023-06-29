import React, { useState } from 'react'
import { Button, Container } from 'react-bootstrap'
import { BrowserRouter, Router } from 'react-router-dom'
import CreateBrand from '../components/modals/CreateBrand'
import CreateType from '../components/modals/CreateType'
import CreateProduct from '../components/modals/CreateProduct'

const Admin = () =>{
        const [brandVisible, setBrandVisible] = useState(false);
        const [typeVisible, setTypeVisible] = useState(false);
        const [productVisible, setProductVisible] = useState(false);
    return(
        
        <Container className='d-flex flex-column'>
            <Button 
                variant='outline-dark' 
                className='mt-4 p-2'
                onClick={() => setTypeVisible(true)}
            >Добавить тип</Button>
            <Button 
                variant='outline-dark' 
                className='mt-4 p-2'
                onClick={() => setBrandVisible(true)}
            >Добавить бренд</Button>
            <Button 
                variant='outline-dark' 
                className='mt-4 p-2'
                onClick={() => setProductVisible(true)}
            >Добавить товар</Button>
            <CreateBrand show={brandVisible} onHide={() => setBrandVisible(false)}/>
            <CreateProduct show={productVisible} onHide={() => setProductVisible(false)}/>
            <CreateType show={typeVisible} onHide={() => setTypeVisible(false)}/>
            
        </Container>
    )
}

export default Admin