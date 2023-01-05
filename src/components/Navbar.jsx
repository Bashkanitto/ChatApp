import React, { useContext } from 'react'
import {signOut} from "firebase/auth"
import { auth } from '../firebase'
import { AuthContext } from '../context/AuthContext'
import logo from "../img/logo.png"

const Navbar = () => {
  const {currentUser} = useContext(AuthContext)

  return (
    <div className='navbar'>
      <div className="user">
        <img src={currentUser.photoURL} alt="" />
        <span>{currentUser.displayName}</span>
        <span className="online">Online</span>
      </div>
      {/* <a href="/">
      <span className="logo">
        <img src={logo} alt="" className="logoImg" />
      </span>
      </a> */}
    </div>
  )
}

export default Navbar