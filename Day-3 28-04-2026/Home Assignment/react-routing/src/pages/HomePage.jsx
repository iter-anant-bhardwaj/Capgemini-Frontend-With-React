import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const HomePage = () => {
  return (
    <div style={{
        padding: "30px",
        textAlign: "center"
      }}>
      <h1 style={{
          fontSize: "35px",
          fontWeight: "bold"
        }}>This is Home Page</h1>

      <Outlet />

      <h3>This is the end of Home Page</h3>
    </div>
  )
}

export default HomePage