import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faHeart,faUser } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';


export default function Navbar() {
  return (
    <div className='nav'>
        <Link id='non-hover' to='/' className='title'><span>SHOELISTER</span></Link>
        <Link id='non-hover' to="Man" className='title-cate-men'><span>|&nbsp;&nbsp;&nbsp;&nbsp;MEN&nbsp;&nbsp;&nbsp;&nbsp;|</span></Link>
        <Link id='non-hover' to="Women" className='title-cate'><span>WOMEN&nbsp;&nbsp;&nbsp;&nbsp;|</span></Link>
        <Link id='non-hover' to="Kids" className='title-cate'><span>KIDS&nbsp;&nbsp;&nbsp;&nbsp;|</span></Link>
        <a href="#" id='heart' className='heart-icon'><FontAwesomeIcon icon={faHeart} /></a>
        <a id='non-hover' href="#" className='icon'><FontAwesomeIcon icon={faCartShopping} /></a>
        <a id='non-hover' href="#" className='icon'><FontAwesomeIcon icon={faUser} /></a>
      
    </div>
  )
}
