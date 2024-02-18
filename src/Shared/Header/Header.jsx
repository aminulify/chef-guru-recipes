import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import { MdLight } from "react-icons/md";
import { MdLightMode } from "react-icons/md";
import { FiMenu } from "react-icons/fi";
import { IoClose } from "react-icons/io5";

const Header = () => {

    const [dayMode, setDayMode] = useState(true);
    const [menu, setMenu] = useState(true);
    const dayNightMode = () =>{
        setDayMode(!dayMode);
    }
    let root = document.querySelector(':root');
    if(dayMode){
        root.style.setProperty('--bgColor', 'hsl(60, 100%, 98%)')
        root.style.setProperty('--mainColor', '#ef2853')
        root.style.setProperty('--headingText', '#21040a')
        root.style.setProperty('--paraText', '#49373b')
        root.style.setProperty('--opacity', '30%')
    }
    else{
        root.style.setProperty('--bgColor', '#000000')
        root.style.setProperty('--mainColor', '#ef2853')
        root.style.setProperty('--headingText', '#ffffff')
        root.style.setProperty('--paraText', '#dedede')
        root.style.setProperty('--opacity', '100%')
    }

    const handleMenu = () =>{
        setMenu(!menu);
    }
    
    return (
           <div data-aos="fade-up" className='bgColor navbar-color fixed top-0 w-full'>
                <div className='flex justify-between px-10 md:px-16 lg:px-20 items-center navbar'>
                    <div className="logo">
                        <Link to='/'>
                            <img src={dayMode ? "logolight.png" : "logolnight.png"} alt="logo image" />
                        </Link>
                    </div>
                    <div>
                        <nav className={`nav-text flex lg:flex-row flex-col ${menu ? "hidden":"responsiveStyle"} lg:flex`}>
                            <li>
                                <Link to='/'>Home</Link>
                            </li>
                            <li>
                                <Link to='/recipe'>Recipe</Link>
                            </li>
                            <li>
                                <Link to='/blogs'>Blogs</Link>
                            </li>
                            
                        </nav>
                    </div>
                    <div className='flex gap-6 items-center'>
                            <div className="mode" onClick={dayNightMode}>
                                {
                                    dayMode ? <MdLightMode className='text-2xl'/> : <MdLight className='text-2xl'/> 
                                }
                            </div>
                        <button><Link to='/login'>Login</Link></button>
                    </div>
                    <div className='menu-bar hidden' onClick={handleMenu}>
                        {
                            menu ? <FiMenu className='text-xl'/> : <IoClose className='text-xl'/>
                        }
                    </div>
                </div>
                <hr />
           </div>
    );
};

export default Header;