import React from 'react'
import { Link } from 'react-router-dom'
import {FaCoins} from 'react-icons/fa'
import "./navbar.css"
const Navbar = () => {
  return (
    <Link to='/'>
        <div className='navbar'>
          <  FaCoins className="icon"/>
          <h1>Coin <span className='purple'>search</span></h1>
        </div>
        </Link>
  )
}

export default Navbar