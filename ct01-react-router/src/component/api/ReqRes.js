import React from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'

const ReqRes = () => {
    const navigate = useNavigate()
    return (
        <>
            <div>ReqRes</div>

            <Link to='reqresLogin'>Login</Link>
            <button onClick={() => {
                { navigate('reqresLogin') }
            }}>reqres login</button>
            <Outlet></Outlet>
        </>
    )
}

export default ReqRes