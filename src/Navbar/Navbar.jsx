import React from 'react'

import NavStyle from'./Navbar.module.css'
import logoNav from '../image/Group 732@2x.png';
import searchNav from '../image/search-normal.svg';
import profileNav from '../image/profile.svg';
import vuesaxlinearNav from '../image/vuesax-linear-bag-2.svg';

export default function Navbar() {
  return (

    <>
      
    <nav className={`navbar navbar-expand-lg fixed-top   ${NavStyle.naaa} `}>
      <div className={`container justify-content-between  ${NavStyle.nasaa} `}>
        <a className="navbar-brand" href="#"> <img id='imgLogo' className='w-50' src={logoNav} alt="" /></a>
        <button className="navbar-toggler bg-white " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon  text-dark"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
          
            <li className="nav-item px-lg-2">
              <a className="nav-link text-white" href="#">Mac</a>
            </li>

            <li className="nav-item px-lg-2">
              <a className="nav-link text-white" href="#">iPad</a>
            </li>

            <li className="nav-item px-lg-2">
              <a className="nav-link text-white" href="#">iPhone</a>
            </li>

            <li className="nav-item px-lg-2">
              <a className="nav-link text-white" href="#">Watch</a>
            </li>

            <li className="nav-item px-lg-2">
              <a className="nav-link text-white" href="#">Tv</a>
            </li>

            <li className="nav-item px-lg-2">
              <a className="nav-link text-white" href="#">Accessories</a>
            </li>

            <li className="nav-item px-lg-2">
              <a className="nav-link text-white" href="#">Offers</a>
            </li>

          <div className=' ps-4 ms-4  d-flex border border-bottom-0 border-end-0 border-top-0 border-opacity-10'>
          </div>
            <li className="nav-item px-lg-2">
              <a className="nav-link text-white" href="#">Support</a>
            </li>

            <li className="nav-item px-lg-2">
              <a className="nav-link text-white" href="#">Services</a>
            </li>

            <li className="nav-item px-lg-2">
              <a className="nav-link text-white" href="#">Locations</a>
            </li>
          </ul>

          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item px-lg-1">
              <a className="nav-link " href="#"><img className='' src={searchNav} alt="searchNav" /></a>
            </li>

            <li className="nav-item px-lg-1">
              <a className="nav-link" href="#"><img src={profileNav} alt="profileNav" /></a>
            </li>

            <li className="nav-item px-lg-1">
              <a className="nav-link" href="#"><img src={vuesaxlinearNav} alt="" /></a>
            </li>
          </ul>
        
        </div>
      </div>
    </nav>

    </>
  )
}
