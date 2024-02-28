import React, { useEffect, useState } from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../../Context/ProviderContext';

const Footer = () => {
    const {dayMode, setDayMode} = useGlobalContext();
    
    return (
        <div className='footer-bg' data-aos='fade-up'>
           <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3654.5508100128977!2d90.4172057739666!3d23.656252492386905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755bbb5ec52284b%3A0xc8315a72fa981bd0!2zRGhhbGkgTW9uamlsIEFyZWEg4Kai4Ka-4Kay4KeAIOCmruCmnuCnjeCmnOCmv-Cmsg!5e0!3m2!1sen!2sbd!4v1709142394554!5m2!1sen!2sbd" className='w-full h-52'  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            <div className='lg:pb-10 pb-5 pt-3'>
                <div>
                    <h1 className='heading footerText'>Contact Us</h1>
                </div>
                <div className='bottom-section lg:flex lg:justify-between lg:mx-20 mx-5'>
                    <div className="logo">
                        <Link to='/'>
                            <img src={dayMode ? "logolight.png" : "logolnight.png"} alt="logo image" />
                        </Link>
                        <p className='text-sm footer-text'>A chef is a person who cooks food in a restaurant. They make tasty dishes for us to eat. They wear a special white coat and a tall hat. Chefs must wash their hands before they cook. They use many tools like knives, spoons, and pots.</p>
                    </div>
                    <div className='downloader-img'>
                        <Link to='https://play.google.com/store/apps?hl=en&gl=US'><img src="google_play.png" alt="" /></Link>
                        <Link to='https://www.apple.com/store'><img src="app_store.png" alt="" /></Link>
                    </div>
                </div>
            </div>
                        <hr />
                        <p className='text-center text-sm py-2'>&copy; Cooking Guru Reserved For 2024</p>
        </div>
    );
};

export default Footer;