import React, { useState } from 'react';
import './Chefs.css';
import { FaRegEye } from "react-icons/fa";
import ReactStars from "react-rating-stars-component"
import { FaRegHeart } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { BsBookmarkCheckFill } from "react-icons/bs";
import { FaRegStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import { FaStar } from "react-icons/fa";

const Chefs = ({data}) => {
    const {chefName, country, chefImg, chefDescription, rating, view} = data;

    const [bookedmarkView, setBookedmarkView] = useState(null);
    const [bookedmark, setBookedmark] = useState(false);
    // bookmarked icon 
    const handleBookMarked = () =>{
        setBookedmarkView(1);
        setBookedmark(!bookedmark);
    }
    return (
        <div data-aos='fade-right' className='flex p-4 border rounded-lg gap-5 chef-sections'>
               <div>
                    <img src={chefImg} alt="" />
                </div>

                <div className='chef-text'>
                    <h1 className='heading text-2xl'>{chefName}</h1>
                    <p><small>{chefDescription}</small></p>
                    <div className='flex justify-between'>
                        <div className='lg:flex items-center gap-5'>
                            <div>
                                <p><small>{country}</small></p>
                            </div>
                            <div>
                        <p className='flex items-center gap-1'><FaRegEye /> <small>{view + bookedmarkView}</small></p>
                            </div>
                        </div>

                        <div className='flex items-center gap-2'>
                        <ReactStars
                                count={5}
                                size={24}
                                value={rating * 1}
                                // * 1 means it works like parseInt "make integer"

                                emptyIcon={<FaRegStar/>}
                                halfIcon={<FaStarHalfAlt />}
                                fulledIcon={<FaStar/>}
                                edit={false}
                                isHalf={true}
                                
                                activeColor="#ffd700"
                            /> <p><small>({rating})</small></p>
                        </div>
                    </div>
                    <div className='chef-section-btn flex items-center gap-3'>
                        <Link to='/recipe'>View Recipes</Link>
                        <div className={`btn-wishlist ${bookedmark ? 'booked':'unbooked'}`}  onClick={handleBookMarked}><BsBookmarkCheckFill /></div>
                    </div>
                </div>     
        </div>
    );
};

export default Chefs;