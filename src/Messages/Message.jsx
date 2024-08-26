import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { gmAction, geAction } from '../redux/Messages/message.action'
function Message() {
  let dispatch = useDispatch()
  let message = useSelector((state)=>{
    return state
  })

  let gmHandler = ()=>{
    dispatch(gmAction())
  }

  let geHandler = ()=>{
    dispatch(geAction())
  }
  
  return (
    <div>
      <pre>{JSON.stringify(message)}</pre>
      <button onClick={gmHandler}>GM</button>
      <button onClick={geHandler}>GE</button>
    </div>
  )
}

export default Message