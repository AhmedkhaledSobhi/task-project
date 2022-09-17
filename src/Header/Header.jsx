import  Axios from 'axios'
import React, { useEffect, useState } from 'react'

import HeaderStyle from './Header.module.css'
export default function Header() {

    const [iphone, setIphone] = useState([]);


    useEffect(() => {
        getData();

    }, []);

    async function getData() {

       let {data} = await Axios.get(`https://63189f2cf6b281877c71eab0.mockapi.io/products`);
       setIphone(data);
        console.log(data)
        // console.log(iphone)

    }

  return (
    <>
        <section className='h-100 mb-5'>
            <h4 className='fw-bolder text-center my-4'>Explore Products</h4>

            <div id='containDisplayProduct' className="container mx-auto my-5 justify-content-center d-flex border border-1 rounded-pill ">
            <div id='row' className="row overflow-hidden ">
                {iphone.map((Phone , i)=> <div key={i} className="col-lg-3 g-0 flex-sm- border border-1 border-bottom-0 border-top-0 border-start-0 border-end-1  ">
                 <div className=' text-center'>
                    <img className='w-75' src={Phone.img.slice(0,1)} alt="" />
                    <hr />
                
                    <div className='d-flex flex-column mb-5'>
                    <h4 className='me-auto ps-3'> price : ${Phone.price}</h4>
                    <h5 className='me-auto ps-3'> price After discount : ${Phone.priceAfterdiscount}</h5>
                    <h5 className='me-auto ps-3 text-success'> inStock:{Phone.inStock}</h5>

                    </div>
                 </div>
                </div> )}
                
             </div>
            </div>
                
        </section>

    </>
  )
}
