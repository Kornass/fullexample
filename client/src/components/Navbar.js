import React from 'react'
import {Link} from 'react-router-dom'

function Navbar() {
  return (
    <ul className='nav'>
        <li><Link to='/addproduct'>Add product</Link></li>
        <li><Link to='/addcategory'>Add category</Link></li>
        <li><Link to='/display'>Display categories</Link></li>

    </ul>
  )
}

export default Navbar