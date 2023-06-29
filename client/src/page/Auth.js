import React, { useState } from 'react'
import Container from 'react-bootstrap/esm/Container'
import Form from 'react-bootstrap/Form'
import Card from 'react-bootstrap/Card'
import { BrowserRouter, NavLink, useLocation} from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row'
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from '../utils/consts'
import { registration, login } from '../http/userAPI'

const Auth = () =>{
    const location = useLocation()
    const isLogin = location.pathname === LOGIN_ROUTE
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    
    const click = async () => {
        if(isLogin){
            const response = await login()
        }else{
            const response = await registration(email, password)
            console.log(response)
        }

        
    }



    return(
        <Container 
            className='d-flex justify-content-center align-items-center'
            style={{height: window.innerHeight - 54}}    
        >
            <Card style={{width: 600}} className='p-5'>
                <h2 className='m-auto'>{isLogin ? 'Авторизация' : 'Регистрация'}</h2>
                <Form className='d-flex flex-column'>
                    <Form.Control
                        className='mt-4'
                        placeholder='Введите email'
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <Form.Control
                        className='mt-4'
                        placeholder='Введите пароль'
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        type='password'
                    />
                    <Row>
                        {isLogin ? 
                        <div className='mt-2'>
                            <NavLink to={REGISTRATION_ROUTE} style={{textDecoration: 'none'}}>Зарегистрироваться</NavLink>
                        </div>
                        :
                        <div className='mt-2'>
                            <NavLink to={LOGIN_ROUTE} style={{textDecoration: 'none'}}>Войти</NavLink>
                        </div>
                        }
                        <Button 
                            
                            className='mt-4 align-self-end'>
                            {isLogin ? "Войти" : 'Регистрация'}
                        </Button>
                    </Row>
                    
                </Form>
            </Card>
            
        </Container>
    )
}

export default Auth