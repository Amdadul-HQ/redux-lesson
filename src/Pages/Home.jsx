import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment,decrement,incrementByAmount,decrementByAmount } from '../redux/feature/CounterSlice'
const Home = () => {
  const count = useSelector((state)=>state.counter.value)
  const dispatch = useDispatch()
  return (
    <>
    <div className='flex items-center justify-center flex-col h-screen'>
    <p className='text-3xl font-medium p-6 my-4 bg-slate-400 rounded-2xl text-white'>{count}</p>

    <div className='flex gap-4'>
    <button className='px-6 py-3 bg-green-400 rounded-lg text-white font-medium' onClick={()=>dispatch(increment())}>Increment</button>
    <button className='px-6 py-3 bg-red-400 rounded-lg text-white font-medium' onClick={()=>dispatch(decrement())}>Decrement</button>
    <button className='px-6 py-3 bg-green-400 rounded-lg text-white font-medium' onClick={()=>dispatch(incrementByAmount(5))}>Increment By 5</button>
    <button className='px-6 py-3 bg-red-400 rounded-lg text-white font-medium' onClick={()=>dispatch(decrementByAmount(5))}>Increment By 5</button>
    </div>
    </div>
    </>
  )
}

export default Home
