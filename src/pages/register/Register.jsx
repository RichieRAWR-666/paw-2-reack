import React from 'react'
import { NavLink } from 'react-router'

const Register = () => {
  return (
    <div>
        <NavLink to='/about' className='btn btn-primary'>GO TO ABOUT PAGE</NavLink>

        <div>
          <NavLink to='/' className='btn btn-primary'>GO TO HOME PAGE</NavLink>

        </div>
    </div>
  )
}

export default Register