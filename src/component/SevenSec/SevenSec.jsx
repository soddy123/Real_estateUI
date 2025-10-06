import React from 'react'

function SevenSec() {
  return (
    <section>
      <div className="content-bg flex flex-col gap-10 items-center justify-center">
         <h1 className='boxes text-white text-5xl text-center'>
            Learn more about <br/> investing with Binhoff
         </h1>
         <div className='boxes flex gap-4'>
            <input 
                className='bg-white sm:w-80 px-6 rounded-lg outline-none py-4'
                type="text" 
                placeholder='Enter your Email'
                name="" 
                id=""
            />
            <button className='boxes btn bg-black border border-gray-800 text-white px-[4vw] md:px-20'>
              Sign up
            </button>
         </div>
      </div>
    </section>
  )
}

export default SevenSec