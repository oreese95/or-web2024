import React, { useEffect, useRef } from 'react'
import DefaultLayout from '../components/DefaultLayout'
import juana from "../assets/juana.png"
import egg from "../assets/eggroll.png"
import rora from "../assets/roraMain.png"
import ot from "../assets/OTLogo.png"
import cld from "../assets/cloudy.png"
import UT from "../assets/Texas-Longhorns-logo.png"
import reel from "../assets/reel.png"
import { Button, Divider } from 'antd'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination } from 'swiper/modules';

function Work() {

  return (
    <DefaultLayout>
      <Divider />
      <h1 className='myWorkTitle'>Past Work</h1>
      <div className='container myWork'>
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: false,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className='bxs p-3'>
              <img className='pt-2 pb-2' src={UT} width="250" />
              <h3>UT Athletics</h3>
              <p>Univeristy of Texas sports teams website</p>
              <Button style={{ backgroundColor: "dodgerblue", color: "whitesmoke" }} href="https://www.texassports.com/" target="_blank">Visit</Button>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='bxs p-3 pb-3'>
              <img className='pt-4 pb-3' src={rora} width="300" />
              <h3 className='p-2'>Rora</h3>
              <p className='p-2'>Vehicle Rental and Ride Share Web App</p>
              <Button style={{ backgroundColor: "dodgerblue", color: "whitesmoke" }} href="https://www.roraoftexas.com" target="_blank">Visit</Button>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='bxs p-3'>
              <img src={ot} width="200" />
              <h3>OpenTable</h3>
              <p>Case Study</p>
              <Link to='/casestudy'><Button style={{ backgroundColor: "dodgerblue", color: "whitesmoke" }}>View</Button></Link>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='bxs p-3'>
              <img className='pt-2 pb-2' src={reel} width="150" />
              <h3>O'Cinema</h3>
              <p>React Movie Search App</p>
              <Button style={{ backgroundColor: "dodgerblue", color: "whitesmoke" }} href="http://odis-react-movie-app.s3-website.us-east-2.amazonaws.com" target="_blank">View</Button>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='bxs p-3'>
              <img src={cld} width="170" />
              <h3>Weather App</h3>
              <p>Google's 90min Coding Challenge</p>
              <Button style={{ backgroundColor: "dodgerblue", color: "whitesmoke" }} href="https://odis-react-weather-app.s3.amazonaws.com/index.html" target="_blank">View</Button>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='bxs p-3'>
              <img src={egg} width="250" />
              <h3>Eggroll Express</h3>
              <Button style={{ backgroundColor: "dodgerblue", color: "whitesmoke" }} href="http://www.eggrollexpressaustin.com/" target="_blank">Visit</Button>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </DefaultLayout>
  )
}

export default Work