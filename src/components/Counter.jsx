import React, { useState } from 'react'

const Counter = () => {
    const [angka,setAngka] = useState(0)
    const handleIncrement =() => {
      setAngka(angka+1)
    }
    const handleDecrement =() => {
      setAngka(angka-1)
    }
  return (
    <div>
    <h1>{angka}</h1>
    <button className='btn btn-primary' onClick={handleIncrement}>increment :</button>
    <button className='btn btn-error' onClick={handleDecrement}>decrement :</button>
    </div>
  )
}

export default Counter
