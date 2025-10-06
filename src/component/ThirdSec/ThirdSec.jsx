import React, { useState } from 'react';
import img1 from '../../assets/img1.jpg';
import img2 from '../../assets/img2.jpg';
import img3 from '../../assets/img3.jpg';
import img4 from '../../assets/img4.jpg';
import img5 from '../../assets/img5.jpg';
// Import Swiper core and required modules
import { Navigation, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { FaArrowCircleRight } from 'react-icons/fa';
import { FaArrowCircleLeft } from 'react-icons/fa';

function ThirdSec() {
  const [swiper, setSwiper]=useState();
  const [activeSlide, setActiveSlide]=useState(1);
  const imgs = [
    { id: 1, img: img1 },
    { id: 2, img: img2 },
    { id: 3, img: img3 },
    { id: 4, img: img4 },
    { id: 5, img: img5 },
  ];

  return (
    <section className="p-20 overflow-hidden">
      <div className='flex justify-between'>
        <h1 className='text-xl'>BInhoff Services</h1>
        <div className="custom-navigation flex gap-4">
          <button className="custom-prev text-3xl">
            <FaArrowCircleLeft />
          </button>
          <span>{activeSlide}/{imgs.length}</span>
          <button className="custom-next text-3xl">
            <FaArrowCircleRight />
          </button>
        </div>
      </div>
      <div className='swiper-container-wrapper'>
        <Swiper
          className="h-[500px] px-20 ml-40 "
          modules={[Navigation, A11y]}
          spaceBetween={50}
          slidesPerView={1}
          slidesPerGroup={1} // Only move 1 slide at a time
          navigation={{
            prevEl: '.custom-prev',
            nextEl: '.custom-next',
          }}
          onSwiper={setSwiper}
          onSlideChange={(swiper)=>{
            setActiveSlide(swiper.activeIndex+1)
         }}
        >
          {imgs.map((slide) => (
            <SwiperSlide key={slide.id}>
              <img
                className="h-full object-cover w-[90%] rounded-xl"
                src={slide.img}
                alt={`Slide ${slide.id}`}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default ThirdSec;
