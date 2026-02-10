import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import { homeSlides } from '../data/homeSlides';
import './Home.css'
const Home = () => {
  return (
    <section>
      <div className="inner">

        <h2>home</h2>
        <Swiper
          navigation={true}
          // autoplay={true}
          loop
          modules={[Navigation, Pagination, Autoplay]}
          pagination={true}
          className="mySwiper">
          {homeSlides.map(({ id, title, img, subtitle }) => (

            <SwiperSlide key={id} style={{ backgroundImage: `url(${img})`, height:500}}>

              <h4>
                {title}
              </h4>
              <p>{subtitle}</p>
            </SwiperSlide>
          ))}

        </Swiper>
      </div>
    </section>
  )
}

export default Home