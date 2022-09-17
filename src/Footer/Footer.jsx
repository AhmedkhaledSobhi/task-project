import React from 'react'

import FoterStyle from './Foter.module.css';


import FoAuthorisedReseller from '../image/Group 729@2x.png'
import  FoAuthorised from '../image/Group 730@2x.png'
import FoGroupser from '../image/Group 731@2x.png'
import FoPremiuemReseller from '../image/Group 732@2x.png'




export default function Footer() {
  return (
    <>
        <footer className='fixed-bottom bg-dark'>
            <div id='Fot' className='mx-auto w-50 bg-ligh   '>
                <div className='container bg-dange w-100'>
                    <div className='row mt-2 justify-content-between flex-nowrap mx-auto'>
                        <div className='col-md-2  '>
                            <div>
                                <img src={FoPremiuemReseller} id='fotImg' className='w-50' alt="" />
                            </div>
                        </div>
                        <div className='col-md-2'>
                            <div>
                                <img src={FoAuthorisedReseller} id='foterimg' alt="" />
                            </div>
                        </div>
                        <div className='col-md-2'>
                            <div>
                                <img src={FoGroupser}id='fotImg' className='w-75' alt="" />
                            </div>
                        </div>
                        <div className='col-md-2'>
                            <div>
                                <img src={FoAuthorised} id='fotImg' className='w-75' alt="" />
                            </div>
                        </div>
                        
                    </div>
                    <span className='text-bg-dark fs-6 d-flex justify-content-center my-0'>Copyright © 2022 - All rights reserved</span>
                </div>
            </div>
        </footer>
    </>
  )
}
