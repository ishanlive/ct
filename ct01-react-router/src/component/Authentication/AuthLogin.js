import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

function authenticateUser(userName, password) {

}

const AuthLogin = (props) => {

    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [authUser, setAuthUser] = useState()
    const [token, setToken] = useState()

    const navigate = useNavigate()

    const handleClick = () => {
        authenticateUser(userName, password)
        sendLoginRequest()
        setAuthUser(userName)
        setTimeout(() => {
            navigate(`/profile/${userName}`)
        }, 1000)
    }

    const sendLoginRequest = () => {
        const userData = {
            "email": "eve.holt@reqres.in",
            "password": "cityslicka"
        }
        const login_API_URL = 'https://reqres.in/api/login'
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(userData)
        }
        fetch(login_API_URL, requestOptions)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setToken(data)
            })
    }

    return (
        <>
            {
                authUser ? (
                    <p>Welcome {authUser}</p>
                ) : (
                    <>
                        <p>Welcome Guest</p>
                        <form>
                            <input
                                type='text'
                                placeholder='Username'
                                value={userName}
                                required={true}
                                onChange={(e) => setUserName(e.target.value)}
                            />
                            <input
                                type='password'
                                placeholder='Password'
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <button type='submit' onClick={handleClick}>Login</button>
                        </form>
                    </>
                )}
        </>
    )
}

export default AuthLogin