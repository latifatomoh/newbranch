import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement,reset } from './redux/CounterSlice'

const Counter = () => {
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()
  return (
    <div>
     <h1>introduction to Redux</h1>
     <h2>counter:{count}</h2>
     <button onClick={() => dispatch(increment())}>imcrement</button>
     <button onClick={() => dispatch(reset())}>reset</button>
     <button onClick={() => dispatch(decrement())}>decrement</button>
    </div>
  )
}

export default Counter