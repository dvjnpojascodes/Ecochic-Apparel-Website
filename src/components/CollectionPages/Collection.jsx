import React from "react";
import { Link } from 'react-router-dom';
import Footer from '../Footer/footer';
import CollectionHeader from '../Header/Collection-Header';

export default function Collection() {

    return(
        <>
        <CollectionHeader/>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full my-5 pt-10 ">
            {/* <!-- Card 1 --> */}
            <div className="group relative w-auto h-[20em] lg:h-[30em] bg-slate-600 bg-coats bg-no-repeat bg-cover bg-top brightness-90 overflow-hidden flex flex-col items-center justify-center">
                <p className="font-title text-3xl lg:text-5xl text-white font-bold z-10">COATS</p>
                <Link to='/coat' className="bg-primary py-2 px-10 text-white rounded-md mt-12 md:2xl text-sm z-20 cursor-pointer"> Browse Collection </Link>
                <div className="bg-opacity bg-black bg-opacity-0 group-hover:bg-opacity-50 absolute inset-0 w-full h-full transition-opacity duration-300 z-0"></div>
            </div>


            {/* <!-- Card 2 --> */}
            <div className="group relative w-auto h-[20em] lg:h-[30em] bg-slate-600 bg-coop bg-no-repeat bg-cover bg-top brightness-90 overflow-hidden flex flex-col items-center justify-center">
                <p className="font-title text-3xl lg:text-5xl text-white font-bold z-10">COORDINATES</p>
                <Link to='/coords' className="bg-primary py-2 px-10 text-white rounded-md mt-12 md:2xl text-sm z-20 cursor-pointer"> Browse Collection </Link>
                <div className="bg-opacity bg-black bg-opacity-0 group-hover:bg-opacity-50 absolute inset-0 w-full h-full transition-opacity duration-300 z-0"></div>
            </div>

            {/* <!-- Card 3 --> */}
            <div className="group relative w-auto h-[20em] lg:h-[30em] bg-sate-600 bg-topdress bg-no-repeat bg-cover bg-top brightness-90 overflow-hidden flex flex-col items-center justify-center">
                <p className="font-title text-3xl lg:text-5xl text-white font-bold z-10">SHIRT & DRESS</p>
                <Link to='/tops' className="bg-primary py-2 px-10 text-white rounded-md mt-12 md:2xl text-sm z-20 cursor-pointer"> Browse Collection </Link>
                <div className="bg-opacity bg-black bg-opacity-0 group-hover:bg-opacity-50 absolute inset-0 w-full h-full transition-opacity duration-300 z-0"></div>
            </div>


            {/* <!-- Card 4--> */}
            <div className="group relative w-auto h-[20em] lg:h-[30em] bg-slate-600 bg-pants bg-no-repeat bg-cover bg-top brightness-90 overflow-hidden flex flex-col items-center justify-center">
                <p className="font-title text-3xl lg:text-5xl text-white font-bold z-10">PANTS & SHORTS</p>
                <Link to='/bottoms' className="bg-primary py-2 px-10 text-white rounded-md mt-12 md:2xl text-sm z-20 cursor-pointer"> Browse Collection </Link>
                <div className="bg-opacity bg-black bg-opacity-0 group-hover:bg-opacity-50 absolute inset-0 w-full h-full transition-opacity duration-300 z-0"></div>
            
            </div>
        </div>

        <Footer/>
        </>
    )
}