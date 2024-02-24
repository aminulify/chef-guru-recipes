import React from 'react';
import Header from '../Shared/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';
import { useNavigation } from 'react-router-dom';
import BeatLoader from "react-spinners/BeatLoader";

const Main = () => {
    const navigation = useNavigation();
    return (
        <div>
            <div className='absolute top-1/2 right-1/2'>
                {
                    navigation.state === 'loading' ?  <BeatLoader color="#ef2853" size={20} /> : ''
                }

            </div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;