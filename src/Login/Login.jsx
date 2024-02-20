import React from 'react';
import './Login.css';
import Header from '../Shared/Header/Header';
import Footer from '../Shared/Footer/Footer';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div>
            <div className='login_doodles'>
                    <img src="front_right.png" data-aos='fade-left' alt="" />
                    <img src="front_left.png" data-aos='fade-right' alt="" />
                </div>

            <h1 className='text-center heading login-heading'>Login</h1>
            <form className='mx-auto login-form pt-5 pb-16'>
                <div className='grid pb-3'>
                    <label>Email</label>
                    <input type="text" name='email' placeholder='example@gmail.com'/>
                </div>
                <div className='grid pb-3'>
                    <label>Password</label>
                    <input type="password" name='password' placeholder='Password'/>
                </div>
                <p><small>Are you new user? <Link to='/registration'><span className='text-red-500 underline'>Registration!</span></Link></small></p>
                <button>Login</button>
            </form>

            {/* <Footer></Footer> */}
        </div>
    );
};

export default Login;