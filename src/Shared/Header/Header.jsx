import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css';
import { MdLight } from "react-icons/md";
import { MdLightMode } from "react-icons/md";
import { FiMenu } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import { useGlobalContext } from '../../Context/ProviderContext';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const Header = () => {
    const {dayMode, setDayMode} = useGlobalContext();
    // const [dayMode, setDayMode] = useState(true);
    const [menu, setMenu] = useState(true);
    const {user, logOut} = useContext(AuthContext);
    console.log(user);

    const dayNightMode = () =>{
        setDayMode(!dayMode);
    }

    const handleLogout = () =>{
        logOut();
    }
    let root = document.querySelector(':root');
    if(dayMode){
        root.style.setProperty('--bgColor', 'hsl(60, 100%, 98%)')
        root.style.setProperty('--mainColor', '#ef2853')
        root.style.setProperty('--headingText', '#21040a')
        root.style.setProperty('--paraText', '#49373b')
        root.style.setProperty('--opacity', '30%')
        root.style.setProperty('--footerBg', '#ef285320')
    }
    else{
        root.style.setProperty('--bgColor', '#000000')
        root.style.setProperty('--mainColor', '#ef2853')
        root.style.setProperty('--headingText', '#ffffff')
        root.style.setProperty('--paraText', '#dedede')
        root.style.setProperty('--opacity', '100%')
        root.style.setProperty('--footerBg', '#ef285320')
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
                            <li className=''>
                                <NavLink to='/'>Home</NavLink>
                            </li>
                            <li>
                                <NavLink to='/recipe'>Recipe</NavLink>
                            </li>
                            <li>
                                <NavLink to='/blog'>Blog</NavLink>
                            </li>
                            
                        </nav>
                    </div>
                    <div className='flex gap-6 items-center'>
                            <div className="mode" onClick={dayNightMode}>
                                {
                                    dayMode ? <MdLightMode className='text-2xl'/> : <MdLight className='text-2xl'/> 
                                }
                            </div>
                        {
                            user ? <button onClick={handleLogout}>Logout</button> : <button><Link to='/login'>Login</Link></button>
                        }
                        
                        
                            {
                                user ? <div className='header-img w-8 h-8 tooltip tooltip-left tooltip-warning' data-tip={user?.displayName}  ><img src={user?.photoURL} alt="" /></div>:''
                            }
                        
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