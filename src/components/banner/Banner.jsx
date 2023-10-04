import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import {Autoplay, Pagination ,Navigation} from 'swiper/modules';
import './banner.scss';
import { Container } from '../../utils/utils';



const Banner = () => {

  return (

 <Container>
       <div className='banner'  >
    <Swiper
     pagination={true} 
     navigation={true}
     spaceBetween={10}
     autoplay={{delay: 2000}}
     loop={true}
     draggable={true}
     slidesPerGroup={1}
     modules={[ Autoplay,Pagination,Navigation]} 

     className="BannerSwiper">
        <SwiperSlide>
          <img src="https://mold-components-14sxqbw1r-ijalalov69-gmailcom.vercel.app/static/media/1.f750064639be81611932305b288222c1.svg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://mold-components-14sxqbw1r-ijalalov69-gmailcom.vercel.app/static/media/2.988a32fc2cb5183ecf3d0abd56d8d4d7.svg" alt="" />
        </SwiperSlide>
     
      </Swiper>

    </div>
 </Container>
 
  )
}

export default Banner