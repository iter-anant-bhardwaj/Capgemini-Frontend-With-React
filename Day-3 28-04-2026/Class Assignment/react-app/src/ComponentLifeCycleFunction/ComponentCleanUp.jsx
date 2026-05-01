import React, { useEffect } from 'react'

const ComponentCleanUp = () => {
    useEffect(()=>{
        return ()=>{
            console.log("We are cleaning up the GC");
        }
    },[])
  return (
    <div style={{backgroundColor:"navy", color:"white"}}>
      Component Clean Up
    </div>
  )
}

export default ComponentCleanUp
