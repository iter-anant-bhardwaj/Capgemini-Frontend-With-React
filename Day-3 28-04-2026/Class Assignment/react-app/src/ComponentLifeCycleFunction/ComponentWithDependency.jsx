import React, { useEffect, useState } from 'react'

const ComponentWithDependency = () => {
    let [count2, setCount2] = useState({value:0, name:"Robinhood"})
    useEffect(()=>{
        console.log("This is coming from dependency");
    },[count2])
  return (
    <div>
      <h2>This is count 2 : {count2.value}</h2>
      <button onClick={()=>{setCount2(prev=>({...prev, value:count2.value+1}))}}>Increment</button>
    </div>
  )
}

export default ComponentWithDependency
