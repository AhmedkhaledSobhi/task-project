import React from 'react';

import HomSt from './Home.module.css';

import rightSlide from '../image/vuesax-linear-arrow-right.png';
import leftSlide from '../image/7b25160f-ce4f-463e-8f18-eb6938665a8d.png'


export default function Home() {
  return (
    <> 
        <div  className='w-100 mt-5 mt-md-5 '>
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true">
                <div className={`carousel-indicators mb-1 rounded-pill m-auto ${HomSt.carouselIndicators}`}>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className={`active  rounded-circle ${HomSt.slideButton}`} aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" className={`rounded-circle ${HomSt.slideButton}`} aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" className={`rounded-circle ${HomSt.slideButton}`} aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" className={`rounded-circle ${HomSt.slideButton}`} aria-label="Slide 4"></button>
                </div>
                <div className="carousel-inner ">
                    <div  className="carousel-item active"  data-bs-interval="3000">
                    <img id='Homeslide' src="http://preview.bit68.com/bit68Task/slider.png" className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item"  data-bs-interval="3000">
                    <img id='Homeslide' src="http://preview.bit68.com/bit68Task/slider.png" className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item"  data-bs-interval="3000">
                    <img id='Homeslide' src="http://preview.bit68.com/bit68Task/slider.png" className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item" data-bs-interval="3000">
                    <img id='Homeslide' src="http://preview.bit68.com/bit68Task/slider.png" className="d-block w-100" alt="..."/>
                    </div>
                </div>
                <button id='btnslid'  className="carousel-control-prev w-25 ms-md-5 ps-md-5 d-flex justify-content-center m-auto " type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className={`carousel-control-prev-icon text-bg-lig rounded-circle  ${HomSt.slidecontrol} `} aria-hidden="true"> <img src={leftSlide} alt="" /></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button id='btnslid' className={`carousel-control-next w-25 me-md-5 pe-md-5 ${HomSt.slidecontr} `} type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className={`carousel-control-next-icon text-bg-ligh rounded-circle  ${HomSt.slidecontrol}  `} aria-hidden="true"> <img src={rightSlide} alt="" /></span>
                    <span className="visually-hidden text-black ">Next</span>
                </button>
            </div>
        </div>

        {/* ===========  ============ */}

        
    </>
  )
}
