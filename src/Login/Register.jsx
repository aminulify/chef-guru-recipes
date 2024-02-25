import React, { useContext, useState } from 'react';
import './Register.css'
import Header from '../Shared/Header/Header';
import Footer from '../Shared/Footer/Footer';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';

const Register = () => {
    const {user} = useContext(AuthContext);
    const [success, setSuccess] = useState();
    const navigate = useNavigate();
    const [userData, setUserData] = useState({
        email:'',
        name:'',
        contact:'',
        password:'',
        imgURL:'',

    });
    let name, value;
    const handleData = (event)=>{
        name = event.target.name;
        value = event.target.value;
        console.log(name,value);
        setUserData({...userData, [name]:value})
    }
    const {createUser,useMoreInfo} = useContext(AuthContext);
    const handleSubmit = async (e) =>{
        e.preventDefault();
        const {email,name,contact,password,imgURL} = userData;

        const form = e.target;
        const yourEmail = form.email.value;
        const yourPassword = form.password.value;
        const yourImgURL = form.imgURL.value;
        const displayName = form.name.value;
        console.log(yourImgURL,displayName)

        createUser(yourEmail, yourPassword)
        .then(result=>{
            console.log(result.user);

                useMoreInfo(displayName, yourImgURL)
            .then(result=>{
                setSuccess('*Congratulations! Your registration done.')
                alert('Go explore us!')
                navigate('/')
                console.log(result.user);
            })
            .catch(error=>{
                setSuccess();
                console.log(error);
                setError('*Try again!');
            })
        })
        .catch(error=>{
            setSuccess('Try Again!');
            console.log(error);
        })


        

        
        if(email && name && contact && password && imgURL){
            const res= fetch('https://chef-guru-recipes-default-rtdb.firebaseio.com/userDataRecords.json',{
            method:"POST",
            headers:{
                "Content-type": "application/json",
        },
        body:JSON.stringify({
            email,
            name,
            contact,
            password,
            imgURL,
        })
        })

        if(res){
            setUserData({
                email:'',
                name:'',
                contact:'',
                password:'',
                imgURL:'',
            })
        }
        }
        else{
            console.log('please fill the data')
        }
        
    }
    return (
        <div>
            <div className='login_doodles'>
                    <img src="front_right.png" data-aos='fade-left' alt="" />
                    <img src="front_left.png" data-aos='fade-right' alt="" />
                </div>
            {/* <Header></Header> */}
            <h1 className='text-center heading signup-heading'>Enroll User</h1>
            <form onSubmit={handleSubmit} method='POST' className='mx-auto signup-form pt-5 pb-16'>
                <div className='grid pb-3'>
                    <label>Email</label>
                    <input type="text" name='email' placeholder='example@gmail.com' onChange={handleData} value={userData.email} required/>
                </div>
                <div className='grid pb-3'>
                    <label>Your name</label>
                    <input type="text" name='name' placeholder='Your Name' onChange={handleData} value={userData.name} required/>
                </div>
                <div className='grid pb-3'>
                    <label>Contact Number</label>
                    <input type="text" name='contact' placeholder='Contact Number' onChange={handleData} value={userData.contact} required/>
                </div>
                <div className='grid pb-3'>
                    <label>Password</label>
                    <input type="password" name='password' placeholder='Password' onChange={handleData} value={userData.password} required/>
                </div>
                <div className='grid pb-3'>
                    <label>Profile</label>
                    <input type="text" name='imgURL' placeholder='Your Image URL (Optional)' onChange={handleData} value={userData.imgURL} />
                </div>
                {
                    <p>
                        <small className='text-green-500'>{success}</small> 
                    </p>
                }
                <p><small>Already do you have an account? <Link to='/login'><span className='text-red-500 underline'>Login!</span></Link></small></p>
                <button>Enroll</button>
              
            </form>

         
        </div>
    );
};

export default Register;