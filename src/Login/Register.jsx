import React from 'react';
import './Register.css'
import Header from '../Shared/Header/Header';
import Footer from '../Shared/Footer/Footer';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div>
            <div className='login_doodles'>
                    <img src="front_right.png" data-aos='fade-left' alt="" />
                    <img src="front_left.png" data-aos='fade-right' alt="" />
                </div>
            {/* <Header></Header> */}
            <h1 className='text-center heading signup-heading'>Enroll User</h1>
            <form className='mx-auto signup-form pt-5 pb-16'>
                <div className='grid pb-3'>
                    <label>Email</label>
                    <input type="text" name='email' placeholder='example@gmail.com' required/>
                </div>
                <div className='grid pb-3'>
                    <label>Your name</label>
                    <input type="text" name='name' placeholder='Your Name' required/>
                </div>
                <div className='grid pb-3'>
                    <label>Password</label>
                    <input type="password" name='password' placeholder='Password' required/>
                </div>
                <div className='grid pb-3'>
                    <label>Confirm Password</label>
                    <input type="password" name='confirmPassword' placeholder='Confirm Password' required/>
                </div>
                <div className='grid pb-3'>
                    <label>Profile</label>
                    <input type="text" name='imgUrl' placeholder='Your Image URL (Optional)'/>
                </div>
                <p><small>Already do you have an account? <Link to='/login'><span className='text-red-500 underline'>Login!</span></Link></small></p>
                <button>Enroll</button>
            </form>

            {/* <Footer></Footer> */}
        </div>
    );
};

export default Register;