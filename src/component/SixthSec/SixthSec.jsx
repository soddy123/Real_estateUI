import React from 'react'
import { FaStoreAlt } from "react-icons/fa";
import { MdRealEstateAgent } from "react-icons/md";
import { TbChartAreaLineFilled } from "react-icons/tb";


function SixthSec() {
  return (
    <section className='p-10'>
       <h1 className='text-6xl p-10 text-gray-800 text-center'>The unique investment opportunity</h1>
       <div className='flex gap-12 items-center flex-col md:flex-row justify-center p-12'>
         <div className='box'>
            <div className='image '> 
              <FaStoreAlt className=''/>
            </div>
            <h3>Private investors</h3>
            <p>
               Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate provident dolore ducimus, dolorem voluptatem eos placeat rem, debitis sapiente nobis delectus deleniti eligendi velit tempore modi nisi iure, quis vitae?
            </p>
            <button>View More</button>
         </div>
         <div className='box'>
            <div className='image'>
               <MdRealEstateAgent />
            </div>
            <h3>Private investors</h3>
            <p>
               Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate provident dolore ducimus, dolorem voluptatem eos placeat rem, debitis sapiente nobis delectus deleniti eligendi velit tempore modi nisi iure, quis vitae?
            </p>
            <button>View More</button>
         </div>
         <div className='box'>
            <div className='image'>
               <TbChartAreaLineFilled />
            </div>
            <h3>Private investors</h3>
            <p>
               Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate provident dolore ducimus, dolorem voluptatem eos placeat rem, debitis sapiente nobis delectus deleniti eligendi velit tempore modi nisi iure, quis vitae?
            </p>
            <button>View More</button>
         </div>
       </div>
    </section>
  )
}

export default SixthSec