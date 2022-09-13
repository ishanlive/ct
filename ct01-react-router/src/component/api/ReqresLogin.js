import React, { useEffect, useState } from 'react'
import './styles.css'

const ReqresLogin = () => {
    const [users, setUsers] = useState([])
    const usersAPI = 'https://reqres.in/api/users'
    const f = async () => {
        const res = await fetch(usersAPI)
        const json = await res.json()
        setUsers(json.data)
    }

    useEffect(() => {
        f()
    }, [])

    return (
        <>
            <div className='users'>
                <div className='flex'>
                    {
                        users.length && users.map((user) => {
                            return (
                                <div key={user.id}>
                                    <p><strong>{user.first_name}</strong></p>
                                    <p>{user.email}</p>
                                    <img alt={user.first_name} src={user.avatar} />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default ReqresLogin

