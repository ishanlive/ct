import React from 'react'
import { useDispatch } from 'react-redux'
import { authActions } from '../store/auth-slice'

const Auth = () => {
    const dispatch = useDispatch()
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(authActions.login())
    }
    return (
        <div>Auth</div>
    )
}

export default Auth