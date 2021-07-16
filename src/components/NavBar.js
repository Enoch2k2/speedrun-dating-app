import React from 'react'
import { NavLink } from 'react-router-dom';

const NavBar = ({ logoutUser }) => {

  const logout = (e) => {
    e.preventDefault();
    localStorage.removeItem('user_id');
    logoutUser()
  }

  return (
    <nav>
      <ul>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/signup">Signup</NavLink></li>
        <li><a href="#" onClick={logout}>Logout</a></li>
      </ul>
    </nav>
  )
}

export default NavBar
