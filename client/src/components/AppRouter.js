import React, { useContext } from 'react'
import { Route, Routes, Router } from 'react-router-dom'
import { authRoutes } from '../routes'
import { publicRoutes } from '../routes'
import { Context } from '../index'


const AppRouter = () => {
    const {user} = useContext(Context)
    const isAuth = false
    console.log(user)
    return (

        <Routes>
            {user._isAuth && authRoutes.map(({ path, element }) =>
                <Route key={path} path={path} element={element} />
            )}
            {publicRoutes.map(({ path, element }) =>
                <Route key={path} path={path} element={element} />
                
            )}
        </Routes>

    )
}

export default AppRouter