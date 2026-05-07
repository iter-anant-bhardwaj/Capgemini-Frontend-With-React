import React, { Fragment } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrementCount, getOneUser, getUser, increaseCount } from './feature/UserSlice'

const CounterComponent = () => {
    let data = useSelector(prev=>prev.user)
    let dispatch = useDispatch()
    console.log(data);
    
  return (
    <div>
      {data.count}
      <button onClick={()=>{dispatch(increaseCount())}}>Increment</button>
      <button onClick={()=>{dispatch(decrementCount())}}>Decrement</button>
      <button onClick={()=>{dispatch(getUser())}}>Get User</button>
      <hr />
      {
        data.oneUser && <>
        <p>{data.oneUser.name}</p>
        </>
      }
      <hr />
      {
        data.user.map(v=>{
            return <Fragment key={v.id}>
                <p>{v.login}</p>
                <button onClick={()=>{
                    dispatch(getOneUser(v.id))
                }}>Get One User</button>
            </Fragment>
        })
      }
    </div>
  )
}

export default CounterComponent
