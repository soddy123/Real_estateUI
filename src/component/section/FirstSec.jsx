
import { useEffect } from 'react'
import React from 'react'
import img1 from "../../assets/img1.jpg"
import img2 from "../../assets/img2.jpg"
import img3 from "../../assets/img3.jpg"
import img4 from "../../assets/img4.jpg"
import img5 from "../../assets/img5.jpg"
import { MenuButton } from '../menu/Menu'
import gsap from 'gsap';
import { CustomEase } from 'gsap/all';

gsap.registerPlugin(CustomEase);
CustomEase.create('cubic-text', '0.25, 1, 0.5, 1');

function FirstSec() {
  useEffect(() => {
    // Select all the span elements to animate
    const textSpans = document.querySelectorAll('.animate-text span span');

    // GSAP timeline for animating the text spans
    gsap.timeline()
      .to(textSpans, {
        y: 0, // Moves the text back to its normal position
        duration: 2,
        ease: 'cubic-text',
        stagger: 0.2, // Delays between each animation
      });
  }, []);
  return (
    <section className='h-screen overflow-hidden'>
       <div className='flex items-center justify-between h-full'>
         <div className='p-20 flex-1'>
         <div className='relative'>
            {/* The text that will be animated */}
            <span className='text-[20vw] md:text-[9rem] font-bold leading-none md-10 animate-text'>
              {/* Wrap each word in span and apply translate-y-full */}
              <span className='-mb-1.5 -mt-6 inline-block overflow-hidden align-bottom'>
                <span className='inline-block translate-y-full pb-1.5 pt-6 will-change-transform'>
                  Invest <br />
                </span>
              </span>
              <span className='-mb-1.5 -mt-6 inline-block overflow-hidden align-bottom'>
                <span className='inline-block translate-y-full pb-1.5 pt-6 will-change-transform'>
                  in real
                </span>
              </span>
              <span className='-mb-1.5 -mt-6 inline-block overflow-hidden align-bottom'>
                <span className='inline-block translate-y-full pb-1.5 pt-6 will-change-transform'>
                  Estate
                </span>
              </span>
            </span>
          </div>
             <div className='flex gap-4'>
                <button className='btn bg-green-500 text-white'><MenuButton>Request a Call</MenuButton></button>
                <button className='btn border border-gray-600 font-medium'><MenuButton>To Get The Consultation</MenuButton></button>
             </div>
         </div>
         <div className="img-container lg:flex hidden flex-1 pt-16 gap-4 justify-end">            <img className="img" src={img1} alt="First_Image"/>
            <img className="img" src={img2} alt="First_Image"/>
            <img className="img" src={img3} alt="First_Image"/>
            <img className="img" src={img4} alt="First_Image"/>
            <img className="img" src={img5} alt="First_Image"/>
            <img className="img" src={img1} alt="First_Image"/>
         </div>
       </div>
    </section>
  )
}

export default FirstSec