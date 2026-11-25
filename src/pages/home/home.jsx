import React from 'react'
import { NavLink } from 'react-router'

const home = () => {
  return (
    <div>
        <h1>HOME PAGE</h1>

        <NavLink to='/about' className='btn btn-primary'>GO TO ABOUT PAGE</NavLink>

        <div>
          <NavLink to='/register' className='btn btn-primary'>GO TO REGISTER PAGE</NavLink>

        </div>
    </div>
  )
}

export default home