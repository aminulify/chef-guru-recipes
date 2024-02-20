import React, { useEffect, useState } from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../../Context/ProviderContext';

const Footer = () => {
    const {dayMode, setDayMode} = useGlobalContext();
    
    return (
        <div className='footer-bg' data-aos='fade-up'>
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