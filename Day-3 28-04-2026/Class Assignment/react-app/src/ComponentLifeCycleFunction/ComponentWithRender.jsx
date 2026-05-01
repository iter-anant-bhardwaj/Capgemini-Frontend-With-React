import React, { useEffect } from 'react'

const ComponentWithRender = () => {
    useEffect(()=>{
        console.log("This is useEffect");
    })
    console.log("This is Normal Statement");
  return (
    <div>
      ComponentWithRender
    </div>
  )
}

export default ComponentWithRender
