import React from "react";
import { Link, useNavigate } from 'react-router-dom';


export default function Login() {
    const navigate = useNavigate();

    const login = () => {
            navigate('/');
      };

    return <div>
        <div className="loginSignup font-content w-[100%] bg-accent py-20">
            <div className="loginSignup-container bg-white w-[320px] sm:w-[480px] md:w-[580px] h-auto m-auto px-6 sm:px-10 py-9">
                <h1 className="mt-5 text-1xl md:text-3xl font-bold pb-5 font-title text-center">LOGIN TO YOUR ACCOUNT</h1>
                <h5 className="text-center text-sm md:text-base">Welcome Back! Browse Ecochic Apparel's new collection by loggin to your account.</h5>

                <form action="">
                <div className="loginSign-upFields flex flex-col pt-4">
                    <input type="text" name="email" placeholder="Enter Your Email Address" required className="my-3 p-2 text-sm md:text-base border border-slate-400 rounded-md"/>
                    <input type="password" name="password" placeholder="Enter Your Password" required className="my-3 p-2 text-sm md:text-base border border-slate-400 rounded-md"/>
                </div>

                <button onClick={login} className="font-bold flex text-sm md:text-base items-center justify-center mx-auto mt-6 cursor-pointer w-[100%] h-[45px] bg-primary text-white py-2 px-1 rounded-md"> Login </button>
                </form>

                <p className="loginSignup-login mt-10 text-slate-500 text-center font-medium text-sm md:text-base">Don't have an account?
                <Link to='/signup'><span className="text-red-400"> Create an account here.</span></Link> </p>
            </div>
        </div>
    </div>
}