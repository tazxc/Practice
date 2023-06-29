import React, { useContext, useState } from 'react'
import Container from 'react-bootstrap/esm/Container'
import Form from 'react-bootstrap/Form'
import Card from 'react-bootstrap/Card'
import { BrowserRouter, NavLink, useLocation, useNavigate} from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row'
import { LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from '../utils/consts'
import { registration, login } from '../http/userAPI'
import {observer} from 'mobx-react-lite'
import { Context } from '../index'
import {passwordStrength} from 'check-password-strength'

const Auth = observer(() =>{
    const {user} = useContext(Context)
    const location = useLocation()
    const history = useNavigate()
    const isLogin = location.pathname === LOGIN_ROUTE
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    
    const click = async () => {
        try{
            let data
            if (isLogin) {
                data = await login(email, password)
            } else {
                data = await registration(email, password)
            }
            user.setUser(user)
            user.setIsAuth(true)
            history(SHOP_ROUTE)
        }catch(e){
            alert(e.response.data.message)
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
                            onClick={click}
                            className='mt-4 align-self-end'>
                            {isLogin ? "Войти" : 'Регистрация'}
                        </Button>
                    </Row>
                    
                </Form>
            </Card>
            
        </Container>
    )
})

export default Auth