import React, { useState, useEffect } from 'react'
import User from '../assets/user.jpg'
import Person from '../assets/photographer.svg'
import Photo from '../assets/photo_1.jpg'
import Wedding from '../assets/wedding.svg'
import Fashion from '../assets/fashion.svg'
import Ocassion from '../assets/special_event.svg'
import Product from '../assets/product.svg'
import './Home.css'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import { Parallax, Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import slide_image from '../assets/images/photo_1.jpg';



const Home = () => {

    const [isVisible, setIsVisible] = useState(false);

    // Function to handle scroll event
    const handleScroll = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    // Function to handle click event for scroll-up button
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    // Add scroll event listener when component mounts
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <>

            <main>
                {/* Home Section */}
                <section id="home">
                    <div className="home-left">
                        <h3 className='name'>I'm Eyuel Getahun</h3>
                        <h1 className='career'>PHOTOGRAPHER & <br /><span>CAMERAMAN</span></h1>
                        <p className='decription'>Based in Addis Ababa, I specialize in various kinds of photography.</p>
                        <Link to='/Contact' className='btn-portfolio'>Say Hello ! <ion-icon name="hand-right" className='btn-icon'></ion-icon></Link>
                    </div>
                    <div className="home-right">
                        <img src={Person} alt="" />
                    </div>
                </section>
                {/* About Section */}
                <section id="about">
                    <div className="about-left">
                        <h5 className='about-title'>About Me</h5>
                        <p className='about-decription1'>Hello! I'm Eyuel, a passionate photographer based in Addis Ababa,
                            Ethiopia. Ever since I picked up my first camera, I've been captivated by the art of photography and
                            the ability to freeze moments in time.</p>
                        <h4 className='about-decription2'>I look forward to the opportunity</h4>
                        <ul className='about-contact'>
                            <li className='abt-lists'><ion-icon name="call"></ion-icon> +251963032340</li>
                            <li className='abt-lists'><ion-icon name="mail"></ion-icon> Eyupics@gmail.com</li>
                            <li className='abt-lists'><ion-icon name="location"></ion-icon> Addis Ababa, Ethiopia</li>
                        </ul>
                        <div className="about-social">
                            <ion-icon id='about-icon' name="logo-facebook"></ion-icon>
                            <ion-icon id='about-icon' name="logo-instagram"></ion-icon>
                            <ion-icon id='about-icon' name="logo-twitter"></ion-icon>
                            <ion-icon id='about-icon' name="logo-linkedin"></ion-icon>
                        </div>
                    </div>
                    <div className="about-right">
                        <img src={Photo} alt="Photo" />
                    </div>
                </section>
                {/* Services Section */}
                <section id="services">
                    <h1 className='services-title'>Services</h1>
                    <h2 className='services-subtitle'>Create memories that will last a lifetime.</h2>
                    <div className="services-cards">
                        <div className="services-card">
                            <img src={Wedding} alt="" />
                            <h2 className='services-card-title'>Wedding Photography.</h2>

                        </div>
                        <div className="services-card">
                            <img src={Fashion} alt="" />
                            <h2 className='services-card-title'>Fashion Photography.</h2>

                        </div>
                        <div className="services-card">
                            <img src={Ocassion} alt="" />
                            <h2 className='services-card-title'>Ocassions Photography.</h2>

                        </div>
                        <div className="services-card">
                            <img src={Product} alt="" />
                            <h2 className='services-card-title'>Product Photography.</h2>

                        </div>
                    </div>
                </section>
                {/* Services Section */}
                <section id="packages">
                    <h1>Packages & Plans</h1>
                    <div className="pacages-cards">
                        <div className="plans">
                            <h4 className='plans-title'>BASIC</h4>
                            <h1 className='plans-price'>Ideal for small events or personal portraits.</h1>
                            <ul>
                                <li className='plan-lists'><ion-icon name="checkmark" className='plan-icon'></ion-icon><p>Up to 2 hours of photography coverage.</p> </li>
                                <li className='plan-lists'><ion-icon name="checkmark"></ion-icon> <p>1 photographer.</p></li>
                                <li className='plan-lists'><ion-icon name="checkmark"></ion-icon> <p>Basic editing and retouching.</p></li>
                                <li className='plan-lists'><ion-icon name="checkmark"></ion-icon> <p>Online gallery for viewing and sharing.</p></li>
                                <li className='plan-lists'><ion-icon name="checkmark"></ion-icon> <p>Digital download of high-resolution images.</p></li>
                            </ul>
                        </div>
                        <div className="plans">
                            <h4 className='plans-title'>STANDARD</h4>
                            <h1 className='plans-price'>Perfect for weddings, family gatherings, or corporate events.</h1>
                            <ul>
                                <li className='plan-lists'><ion-icon name="checkmark"></ion-icon> Up to 4 hours of photography coverage</li>
                                <li className='plan-lists'><ion-icon name="checkmark"></ion-icon> 1 photographer and 1 assistant.</li>
                                <li className='plan-lists'><ion-icon name="checkmark"></ion-icon> 1 photographer and 1 assistant.</li>
                                <li className='plan-lists'><ion-icon name="checkmark"></ion-icon> Online gallery with password protection.</li>
                                <li className='plan-lists'><ion-icon name="checkmark"></ion-icon> Custom USB drive with high-resolution images.</li>
                                <li className='plan-lists'><ion-icon name="checkmark"></ion-icon> 1 printed photo album (10x10 inches).</li>
                            </ul>
                        </div>
                        <div className="plans">
                            <h4 className='plans-title'>PREMIUM</h4>
                            <h1 className='plans-price'>Tailored for large events, destination weddings, or special occasions.</h1>
                            <ul>
                                <li className='plan-lists'><ion-icon name="checkmark"></ion-icon> Full-day photography coverage (up to 8 hours).</li>
                                <li className='plan-lists'><ion-icon name="checkmark"></ion-icon> 2 photographers and 1 assistant.</li>
                                <li className='plan-lists'><ion-icon name="checkmark"></ion-icon> Extensive editing and retouching.</li>
                                <li className='plan-lists'><ion-icon name="checkmark"></ion-icon> Online gallery with premium features (e.g., slideshow, social media sharing).</li>
                                <li className='plan-lists'><ion-icon name="checkmark"></ion-icon> Custom USB drive with high-resolution images and video highlights.</li>
                                <li className='plan-lists'><ion-icon name="checkmark"></ion-icon> 2 printed photo albums (12x12 inches) with premium leather covers.</li>
                                <li className='plan-lists'><ion-icon name="checkmark"></ion-icon> Engagement or pre-wedding photo session.</li>
                            </ul>
                        </div>
                    </div>

                </section>
                <section id="testimonial">
                    <h1>What My Clients Say</h1>
                    <Swiper
                        style={{
                            '--swiper-navigation-color': '#01C38D',
                            '--swiper-pagination-color': '#01C38D',
                        }}
                        speed={600}
                        parallax={true}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Parallax, Pagination, Navigation]}
                        className="mySwiper"
                    >
                        <div
                            slot="container-start"
                            className="parallax-bg"
                            style={{
                                'background':
                                    '#fff',
                            }}
                            data-swiper-parallax="-23%"
                        ></div>
                        <SwiperSlide>
                            <div className="title" data-swiper-parallax="-300">
                                <img src={User} alt="" />
                            </div>
                            <div className="text" data-swiper-parallax="-100">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                                    dictum mattis velit.
                                </p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="title" data-swiper-parallax="-300">
                                <img src={User} alt="" />
                            </div>
                            <div className="text" data-swiper-parallax="-100">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                                    dictum mattis velit.
                                </p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="title" data-swiper-parallax="-300">
                                <img src={User} alt="" />
                            </div>
                            <div className="text" data-swiper-parallax="-100">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                                    dictum mattis velit.
                                </p>
                            </div>
                        </SwiperSlide>
                    </Swiper>

                </section>
                <button
                    className={isVisible ? 'scroll-up-button show' : 'scroll-up-button'}
                    onClick={scrollToTop}
                >
                    <ion-icon name="arrow-up"></ion-icon>
                </button>
            </main>


        </>
    )
}

export default Home