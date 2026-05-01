import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const HomePage = () => {
  return (
    <div>
      <>
        <h1>This is the Home Page</h1>
        <div>
            <Link to="/">Home Hero</Link>
            <Link to="kitchen">HeroKitchen</Link>
        </div>
        <Outlet/>
        <h3>This is the end of Home Page</h3>
      </>
    </div>
  )
}

export default HomePage
HomePage