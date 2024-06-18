import React, { useState, useEffect } from 'react';
import shoe1 from './shoe1.png'
import men from './men.jpg'
import women from './women.png'
import kids from './kids.png'
import { Link } from 'react-router-dom';

export default function Homepage() {

    return (
        <>

            <div class="row">
                <div class="column1">
                    <span className='n-desg'>New Designs</span>
                    <img src={shoe1} className='shoe1' alt="" />
                </div>
                <div class="column2">
                    <span className='lt-fs'>Latest Fashion</span>
                    
                </div>
            </div>
            <br />
            <br />
            <div className='main-cat'>
                <p className='categ'>Categories</p>
                <div className='cat-row'>
                    <div className='row1'>
                        <img src={men} alt="" className='men-cat' />
                        <Link to="Man" id='men-id-text' className='men-cat-text'><p>MEN</p></Link>
                    </div>
                    <div className='row1'>
                        <img src={women} alt="" className='men-cat' />
                        <Link to="Women" id='men-id-text' className='men-cat-text'><p>WOMEN</p></Link>
                    </div>
                    <div className='row1'>
                        <img src={kids} alt="" className='men-cat' />
                        <Link to="Kids" id='men-id-text' className='men-cat-text'><p>KIDS</p></Link>
                    </div>
                </div>

            </div>
        </>
    )
}
