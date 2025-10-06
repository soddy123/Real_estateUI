import './App.css'
import Nav from './component/Headernav'
import FirstSec from './component/section/FirstSec'
import SecondSec from './component/secondSec/SecondSec'
import ThirdSec from './component/ThirdSec/ThirdSec'
import SectionFour from './component/sectionFour/SectionFour'
import FifthSection from './component/FIfthSection/FifthSection'
import SixthSec from './component/SixthSec/SixthSec'
import SevenSec from './component/SevenSec/SevenSec'
import Footer from './component/Footer/Footer'
import gsap from 'gsap';
import {useGSAP} from "@gsap/react";
import { ScrollTrigger } from 'gsap/all'

gsap.registerPlugin(ScrollTrigger);
function App() {

  // gsap.registerPlugin(ScrollTrigger);
  
  useGSAP(()=>{
    gsap.from(".img-container",{
      xPercent:100,
      duration:2,
    });
    gsap.utils.toArray(".img-container img").forEach((img,index)=>{
      gsap.fromTo(
        img,
        {
          scaleY:1* index + 1,
          translateY:0,

        },
        {
          scaleY:1,
          translateY:(index +1)% 2 ==0 ? 15 * index + 1 : 0,
          duration:1.5
        }
      )
    });
    gsap.fromTo(
      '.text-content >*',
      { opacity: 0, y: 300 }, // Starting state (from)
      {
        opacity: 1,
        y: 0, // Ending state (to)
        duration: 2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.text-content',
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      }
    );
    gsap.fromTo(
      '.swiper-container-wrapper',
      { opacity: 0, y: 100 }, // Starting state (from)
      {
        opacity: 1,
        y: 0, // Ending state (to)
        duration: 2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.swiper-container-wrapper',
          start: 'top 80%',
          end: 'bottom top',
          scrub: true, // Smooth transition based on scroll
          toggleActions: 'play none none reverse',
        },
      }
    );
    // Background text animation
    gsap.fromTo(
      '.bg-text',
      { opacity: 0, y: 100 }, // Starting state (from)
      {
        opacity: 1,
        y: 0, // Ending state (to)
        duration: 2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.bg-text',
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      }
    );
    // Article animation
    gsap.fromTo(
      '.artical',
      { opacity: 0, y: 100 }, // Starting state (from)
      {
        opacity: 1,
        y: 0, // Ending state (to)
        duration: 2,
        stagger: { amount: 2 }, // Delay between each animation
        scrollTrigger: {
          trigger: '.artical',
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      }
    );
     // Box animation
     gsap.fromTo(
      '.box',
      { opacity: 0, scale: 0.5 }, // Starting state (from)
      {
        opacity: 1,
        scale: 1, // Ending state (to)
        duration: 1.5,
        stagger: { amount: 1 }, // Delay between each box
        scrollTrigger: {
          trigger: '.box',
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      }
    );
    gsap.fromTo(
      '.boxes',
      { opacity: 0, scale: 0.5 }, // Starting state (from)
      {
        opacity: 1,
        scale: 1, // Ending state (to)
        duration: 0.5,
        stagger: { amount: 1 }, // Delay between each box
        scrollTrigger: {
          trigger: '.boxes',
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      }
    );
    gsap.fromTo(
      '.icon',
      { opacity: 0, scale: 0.5 }, // Starting state (from)
      {
        opacity: 1,
        scale: 1, // Ending state (to)
        duration: 0.5,
        stagger: { amount: 1.5 }, // Delay between each box
        scrollTrigger: {
          trigger: '.icon',
          start: 'top 90%',
          toggleActions: 'play none none reverse',
        },
      }
    );
    gsap.fromTo(
      '.Menu ',
      { opacity: 0, y: 100 }, // Starting state (from)
      {
        opacity: 1,
        y: 0, // Ending state (to)
        duration: 2,
        stagger: { amount: 0 }, // Delay between each animation
        scrollTrigger: {
          trigger: '.Menu',
          start: 'top 100%',
          toggleActions: 'play none none reverse',
        },
      }
    );
    gsap.fromTo(
      '.text-logo ',
      { opacity: 0, y: 100 }, // Starting state (from)
      {
        opacity: 1,
        y: 0, // Ending state (to)
        duration: 2,
        stagger: { amount: 0 }, // Delay between each animation
        scrollTrigger: {
          trigger: '.text-logo',
          start: 'top 100%',
          toggleActions: 'play none none reverse',
        },
      }
    );
    
  }, []);

  return (
    <>
      <Nav/>
      <FirstSec/>
      <SecondSec/>
      <ThirdSec/>
      <SectionFour/>
      <FifthSection/>
      <SixthSec/>
      <SevenSec/>
      <Footer/>
    </>
  )
}

export default App
