import React, { useContext, useEffect, useState } from 'react';
import './Home.css';
import { CiCircleChevRight } from "react-icons/ci";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { Link, useLoaderData, useNavigation } from 'react-router-dom';
import BeatLoader from "react-spinners/BeatLoader";
import Chefs from '../Chefs/Chefs';
import { AuthContext } from '../AuthProvider/AuthProvider';

const Home = () => {
    const navigation = useNavigation();
    // const chefData = useLoaderData();

    const [chefData, setChefData] = useState([]);
     useEffect(()=>{
        fetch('https://chef-guru-recipe-server.vercel.app/chefs')
        .then(res=>res.json())
        .then(data=>setChefData(data))

        // .then(data=>console.log(data))
        .catch(error=>console.log(error))

    },[])
    // console.log(chefData);

    return (
        <div className=''>
            <div className='absolute top-1/2 right-1/2'>
                {
                    navigation.state === 'loading' ?  <BeatLoader color="#ef2853" size={20} /> : ''
                }

            </div>
      
            <div className='lg:grid flex flex-col-reverse grid-cols-reverse lg:grid-cols-2 lg:gap-8 pt-28'>
                    <div className='flex relative'>
                        {/* left side image  */}
                        <div className='left-img absolute z-1' data-aos="zoom-in-right">
                            <img src="front_left.png" alt="" />
                        </div>
                        {/* left text  */}
                        <div className='z-10 my-10 lg:my-28 lg:ml-20 md:mx-16 mx-10' data-aos="fade-right">
                            <h1 className='heading text-5xl'>Food Made With Love</h1>
                            <p className='secondary-text text-sm my-3 pb-2'>A chef is a person who cooks food in a restaurant. They make tasty dishes for us to eat. They wear a special white coat and a tall hat. Chefs must wash their hands before they cook. They use many tools like knives, spoons, and pots.</p>
                            <Link to='recipe'>
                            <button className='flex gap-1 items-center font-btn hover:gap-3 duration-100'>Recipes <CiCircleChevRight className='text-xl'/></button>
                            </Link>
                        </div>
                    </div>

                    <div>
                        <div className='right-img' data-aos="fade-left" data-aos-delay='500'>
                                <img src="front_right.png" className='absolute' alt="doodles desh" />
                            </div>
                        <div data-aos="fade-left">
                            <Carousel autoPlay infiniteLoop>
                                <div className='slider-img'>
                                    <img src="4.png" />      
                                </div>
                                <div className='slider-img'>
                                    <img src="1.png" />
                                </div>
                                <div className='slider-img'>
                                    <img src="2.png" />
                                </div>
                                <div className='slider-img'>
                                    <img src="3.png" />
                                </div>
                            </Carousel>

                        </div>
                    </div>
            </div>
              
              {/* chef experience data  */}
              <h1 data-aos='fade-right' className='heading text-center text-5xl mt-5'>Chefs</h1>
              <div className="chef-datas grid grid-cols-1 lg:grid-cols-2 gap-5 lg:mx-20 mx-5 my-10">
                {
                  
                    chefData.map(data=><Chefs
                        key={data.id}
                        data={data}
                    ></Chefs> )

                    
                }
              </div>
        </div>
    );
};

export default Home;