import React from 'react'
import {Route, Redirect, Routes} from 'react-router-dom'
import { authRoutes } from '../routes'
import { publicRoutes } from '../routes'

const AppRouter= () =>{
    const isAuth = false    
    return(
        <Routes>
            {isAuth && authRoutes.map(({path, Component}) => 
                <Route key={path} path={path} Component={Component} exact/>
            )}
            {publicRoutes.map(({path, Component}) => 
                <Route key={path} path={path} Component={Component} exact/>
            )}
        </Routes>
    )
}

export default AppRouter