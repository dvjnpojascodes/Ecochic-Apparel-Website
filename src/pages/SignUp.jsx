import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Signup() {

    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
      };
    
      const handleConfirmPasswordChange = (event) => {
        setConfirmPassword(event.target.value);
      };
    
      const handleSignup = () => {
        if (password === confirmPassword) {
            navigate('/login');
        } else {
          setErrorMessage('Passwords do not match');
        }
      };

    return <div>
        <div className="loginSignup font-content w-[100%] bg-accent py-20">
        <div className="loginSignup-container bg-white w-[320px] sm:w-[480px] md:w-[580px] h-auto m-auto px-6 sm:px-10 py-6">
        <h1 className="mt-5 text-1xl md:text-3xl font-bold pb-5 font-title text-center">CREATE AN ACCOUNT</h1>

                <form>
                <div className="loginSign-upFields flex flex-col pt-1.5">
                    <input type="text" name="name" placeholder="Enter Your Name" required className="my-3 p-2 border text-sm md:text-base border-slate-400 rounded-md"/>
                    <input type="email" name="email" placeholder="Enter Your Email Address" required className="my-3 p-2 border text-sm md:text-base border-slate-400 rounded-md"/>
                    <input type="password" name="password" placeholder="Enter Your Password" value={password} onChange={handlePasswordChange} required className="my-3 p-2 text-sm md:text-base border border-slate-400 rounded-md"/> 
                    <input type="password" name="confirmPassword" placeholder="Confirm Your Password" value={confirmPassword} onChange={handleConfirmPasswordChange} required className="my-3 p-2  text-sm md:text-base border border-slate-400 rounded-md"/>
                    {errorMessage && <p className="text-red-500">{errorMessage}</p>}
                </div>

                <button onClick={handleSignup} type="submit" className="font-bold flex items-center justify-center mx-auto mt-4 cursor-pointer w-[100%] h-[45px] bg-primary text-white text-sm md:text-base py-2 px-1 rounded-md"> Sign Up</button>
                </form>

                <p className="loginSignup-login mt-10 text-slate-500 text-center text-sm md:text-base font-medium">Already have an account? <Link to='/login'><span className="text-red-400">Login in here</span></Link></p>

                <div className="loginsignup-agree flex pt-2 mb-8 items-center justify-center">
                    <input type="checkbox" name="" id="" className="mr-2"/>
                    <p className="text-slate-500 text-sm md:text-base">By Continuing, I agree to the terms of use</p>
                </div>
            </div>
        </div>
    </div>
}


