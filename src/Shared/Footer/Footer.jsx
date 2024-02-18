import React, { useEffect, useState } from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
    // const [dayMode, setDayMode] = useState(false);
    // let mainRoot = document.querySelector(':root');
    // const propertyValue = window.getComputedStyle(mainRoot)
    // .getPropertyValue('--bgColor');
    // console.log(propertyValue);
    // useEffect(()=>{
    //     (propertyValue && 'hsl(60, 100%, 98%)') && setDayMode(!dayMode)
    // },[propertyValue])

    

    return (
        <div>
            <hr/>
            <div>
                <div>
                    <h1 className='heading footerText'>Contect Us</h1>
                </div>
                <div className='bottom-section'>
                    <div className="logo">
                        <Link to='/'>
                            {/* <img src={dayMode ? "logolight.png" : "logolnight.png"} alt="logo image" /> */}
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;