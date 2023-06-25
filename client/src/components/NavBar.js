import React, { useContext } from "react";
import { Context } from '../index'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from "../utils/consts";
import { NavLink } from "react-router-dom";
import {observer} from 'mobx-react-lite'
import UserStore from "../store/UserStore";
import { useNavigate } from "react-router-dom";


const NavBar = observer(() => {
    const {user} = useContext(Context);
    const history = useNavigate()
    return (
        <Navbar bg="dark" data-bs-theme="dark">
            <Container>
                <NavLink style={{ color: 'white', textDecoration: 'none' }} to={SHOP_ROUTE}>Coffee</NavLink>
                {user.IsAuth?
                    <Nav className="ml-auto" style={{ color: 'white' }}>
                        <Button
                            variant={"outline-light"} 
                            onClick={() => history(ADMIN_ROUTE)}
                        >Админ панель</Button>
                        <Button 
                            variant={"outline-light"} 
                            onClick={() => history(LOGIN_ROUTE)} 
                            className="ms-2"
                        >Выйти</Button>
                        
                    </Nav>
                    :
                    <Nav className="ml-auto" style={{ color: 'white' }}>
                        <Button variant={"outline-light"} onClick={() => user.setIsAuth(true)}>Авторизация</Button>
                    </Nav>
                }
            </Container>
        </Navbar>
    );
});

export default NavBar;