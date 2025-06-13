import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCard from './SwiperCard';
import { sliderData } from '../../utilities/sliderData';
import { Autoplay } from 'swiper/modules';

import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";

import 'swiper/css';
import 'swiper/css/navigation';
import './Swiper.css';


export default function BannerSwiper() {
  const [activeIndex, setActiveIndex] = useState(0)
  const swiperRef = useRef(null)

  const handleSlideChange = direction =>{
    if(!swiperRef.current) return

    setActiveIndex(6)

    setTimeout(() => {
      if(direction === 'next'){
        swiperRef.current.slideNext()
      }else{
        swiperRef.current.slidePrev()
      }
    }, 500);
  }

  return (
    <div className='mt-15 md:mt-4 relative swiper-container'>
      <Swiper
        onSwiper={e => swiperRef.current = e}
        onSlideChange={e => { setActiveIndex(e.realIndex) }}
        loop={true}
        allowTouchMove={false}
        autoplay={{
          delay:5000
        }}
        modules={[Autoplay]}
        className="mySwiper h-[460px] md:h-[700px] xl:h-[500px]">
        {
          sliderData.map((data, index) => <SwiperSlide><SwiperCard data={data} key={index} isActive={index === activeIndex} activeIndex={activeIndex} /></SwiperSlide>)
        }
      </Swiper>
      <button className='button-next w-10 h-10 md:w-16 md:h-16 xl:opacity-0' onClick={()=>handleSlideChange('next')}><GrNext/></button>
      <button className='button-prev w-10 h-10 md:w-16 md:h-16 xl:opacity-0' onClick={()=>handleSlideChange('prev')}><GrPrevious/></button>
    </div>
  );
}
