import React from 'react'
import { Route, Redirect, Routes, Router } from 'react-router-dom'
import { authRoutes } from '../routes'
import { publicRoutes } from '../routes'

const AppRouter = () => {
    const isAuth = false
    return (
        <Router>
            <Routes>
                {isAuth && authRoutes.map(({ path, element }) =>
                    <Route key={path} path={path} element={<element/>} exact/>
                )}
                {publicRoutes.map(({ path, element }) =>
                    <Route key={path} path={path} element={<element/>} exact/>
                )}
            </Routes>
        </Router>
    )
}

export default AppRouter