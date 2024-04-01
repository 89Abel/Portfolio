import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import './Gallery.css'

import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';
import Photo_1 from '../assets/images/photo_1.jpg'
import Photo_2 from '../assets/images/photo_2.jpg'
import Photo_3 from '../assets/images/photo_3.jpg'
import Photo_4 from '../assets/images/photo_4.jpg'
import Photo_5 from '../assets/images/photo_5.jpg'
import Photo_6 from '../assets/images/photo_6.jpg'
import Photo_7 from '../assets/images/photo_7.jpg'
const Gallery = () => {
    return (
        <>
            <main>
                <section id='Gallery'>
                    <div className="Gallery-info">
                        <h2 className='Gallery-title'>Explore My Captured Moments</h2>
                        <p className='Gallery-desc'>
                            Welcome to My Gallery, where every click tells a story !
                            Immerse yourself in a visual journey through our captured moments,
                            meticulously curated to evoke emotion, inspire creativity, and ignite wanderlust.
                        </p>
                    </div>
                    <Swiper
                        style={{
                            '--swiper-pagination-color': '#01C38D',
                        }}
                        direction={'vertical'}
                        slidesPerView={1}
                        spaceBetween={30}
                        pagination={{
                            clickable: true,
                        }}
                        loop={true}
                        modules={[Pagination]}
                        className="mySwiper"
                    >
                        <SwiperSlide><img src={Photo_1} alt="Photo_1" className='swiper-imgs' onContextMenu={(e) => e.preventDefault()} /></SwiperSlide>
                        <SwiperSlide><img src={Photo_2} alt="Photo_2" className='swiper-imgs' onContextMenu={(e) => e.preventDefault()} /></SwiperSlide>
                        <SwiperSlide><img src={Photo_3} alt="Photo_3" className='swiper-imgs' onContextMenu={(e) => e.preventDefault()} /></SwiperSlide>
                        <SwiperSlide><img src={Photo_4} alt="Photo_4" className='swiper-imgs' onContextMenu={(e) => e.preventDefault()} /></SwiperSlide>
                        <SwiperSlide><img src={Photo_5} alt="Photo_5" className='swiper-imgs' onContextMenu={(e) => e.preventDefault()} /></SwiperSlide>
                        <SwiperSlide><img src={Photo_6} alt="Photo_6" className='swiper-imgs' onContextMenu={(e) => e.preventDefault()} /></SwiperSlide>
                        <SwiperSlide><img src={Photo_7} alt="Photo_7" className='swiper-imgs' onContextMenu={(e) => e.preventDefault()} /></SwiperSlide>
                    </Swiper>
                </section>
            </main>
        </>
    )
}

export default Gallery