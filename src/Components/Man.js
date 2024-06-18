import React from 'react'
import shoe1 from './shoe1.png'
import men from './men.jpg'
import sandal from './sandal.jpg'
import chapple from './chapple.jpg'
import mojadi from './mojadi.webp'
import funkey from './Funkey.jpg'
import { Link } from 'react-router-dom';
import Mens_category from './Mens_Category.jpg'
// import Coming_soon from './Coming_soon'

export default function Man() {
  return (
    <>
      <div className='men-cate-div'>
        <img src={Mens_category} alt="" className='men-cate-img' />
      </div>

      <div className='men-cont'>
        <Link to='Coming_soon' className='men-cat-text'><img src={men} className='men-shoe-cat' alt="" /><br /><span>LOAFER</span></Link>

        <Link to='Coming_soon' className='men-cat-text'><img src={shoe1} className='men-shoe-cat' alt="" /><br /><span>SPORTS</span></Link>

        <Link to='Coming_soon' className='men-cat-text'><img src={sandal} className='men-shoe-cat' alt="" /><br /><span>SANDALS</span></Link>

        <Link to='Coming_soon' className='men-cat-text'><img src={chapple} className='men-shoe-cat' alt="" /><br /><span>CHAPPLE</span></Link>

        <Link to='Coming_soon' className='men-cat-text'><img src={mojadi} className='men-shoe-cat' alt="" /><br /><span>MOJADI</span></Link>

        <Link to='Coming_soon' className='men-cat-text'><img src={funkey} className='men-shoe-cat' alt="" /><br /><span>FUNKEY</span></Link>
      </div>

    </>
  )
}
