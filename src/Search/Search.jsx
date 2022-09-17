import React from 'react'
import SearchStyle from './Search.module.css';

export default function Search() {
  return (
    <>
    
    <div id='search' className=' py-5 text-center my-5'>
    <h5>Subscribe our newsletter to be notified when it’ll be live.</h5>
        <div id='inputSearch' class="form-floating mt-5  w-50 mx-auto">
            <input type="email" class="form-control position-relative" id="floatingInput" placeholder="Email address"/>
            <label for="floatingInput">Email address</label>
            <button className='btn btn-dark h-100 px- position-absolute end-0 top-0 '>Subscribe</button>     

        </div>
    </div>
    </>
  )
}
