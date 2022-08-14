import React, { useContext } from 'react'
import movieContext from '../context/Movie/movieContext'
import { Navigate } from 'react-router-dom'
import SignIn from '../components/Signin/SignIn'

const SignInRoute = ({ children }) => {
    const context = useContext(movieContext)
    const { isAuthenticated } = context;
    if (isAuthenticated) {
        <Navigate to='/explore' />
    }
    return (
        children
    )
}

export default SignInRoute