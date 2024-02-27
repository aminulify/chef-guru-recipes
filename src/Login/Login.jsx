import React, { useContext, useState } from 'react';
import './Login.css';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import useTitle from '../TitleHooks/useTitle';

const Login = () => {
    // dynamic title 
    useTitle('Login')
    const {loginUser} = useContext(AuthContext);
    const [success,setSuccess] = useState();
    const navigate = useNavigate();

    const handleLogin = (e) =>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        
        loginUser(email, password)
        .then(result=>{
            console.log(result.user);
            setSuccess('*Congratulation! Go and explore.')
            navigate('/');
        })
        .catch(error=>{
            console.log(error)
            setSuccess('*Wrong email or password! Try again...')

        })

    }
    return (
        <div>
            <div className='login_doodles'>
                    <img src="front_right.png" data-aos='fade-left' alt="" />
                    <img src="front_left.png" data-aos='fade-right' alt="" />
                </div>

            <h1 className='text-center heading login-heading'>Login</h1>
            <form onSubmit={handleLogin} className='mx-auto login-form pt-5 pb-16'>
                <div className='grid pb-3'>
                    <label>Email</label>
                    <input type="text" name='email' placeholder='example@gmail.com'className='secondary-text'/>
                </div>
                <div className='grid pb-3'>
                    <label>Password</label>
                    <input type="password" name='password' placeholder='Password'className='secondary-text'/>
                </div>
                <p><small className='text-green-500'>{success}</small></p>
                <p><small>Are you new user? <Link to='/registration'><span className='text-red-500 underline'>Registration!</span></Link></small></p>
                <button>Login</button>
            </form>

        </div>
    );
};

export default Login;