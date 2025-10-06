import React from 'react'
import { TiSocialFacebook } from "react-icons/ti";
import { TiSocialInstagram } from "react-icons/ti";
import { TiSocialTwitter } from "react-icons/ti";

function Footer() {
  return (
    <section className='p-20 flex items-center justify-around flex-col gap-10 text-center md:flex-row'>
      <div className='text-logo font-bold text-2xl'>
         BInhoff.co
      </div>
      <ul className='Menu space-y-5'>
         <li>Product</li>
         <li>Install</li>
         <li>Quickstart</li>
      </ul>
      <ul className='Menu space-y-5'>
         <li>Blog</li>
         <li>Carere</li>
         <li>About</li>
      </ul>
      <div className='social flex items-center gap-8'>
         <div className='icon'>
            <TiSocialFacebook />
         </div>
         <div className='icon'>
            <TiSocialInstagram />
         </div>
         <div className='icon'>
            <TiSocialTwitter />

         </div>
      </div>
      
    </section>
  )
}

export default Footer