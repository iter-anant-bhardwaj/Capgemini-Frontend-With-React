import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div style={{
        backgroundColor: "#f1f1f1",
        padding: "15px",
        display: "flex",
        justifyContent: "center",
        gap: "30px",
        boxShadow: "2px 2px 10px gray"
      }}>
      <Link to={"/"}>Home</Link>
      <Link to={"/about"}>About</Link>
      <Link to={"/service"}>Service</Link>
      <Link to={"/contact"}>Contact</Link>
    </div>
  )
}

export default Navbar
