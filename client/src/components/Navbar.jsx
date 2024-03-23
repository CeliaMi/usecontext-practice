import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {

//codeamos aquí✍
  return (
    <nav className=" mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center text-gray-400 bg-gray-800" >
     <span className="ml-3 text-xl text-white"> <NavLink type="button" className="mr-5 hover:text-white " to="/">aprendiendo useContext🙋‍♀️</NavLink></span>
    </nav>
  )
}

export default Navbar