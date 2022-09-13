import React from 'react'
import { Link } from 'react-router-dom'
const UserHome = () => {
  return (
    <div>
      <p>User Home</p>      
      <Link to='/userDashboard'>User Dashboard</Link>
      <Link to='/userLogin'>User Login</Link>

    </div>
  )
}

export default UserHome