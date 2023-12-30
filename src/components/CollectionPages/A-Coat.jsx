import React from "react";
import Coat_Header from '../Assets/Coat-Header.png';
import Footer from '../Footer/footer';

export default function Coat() {
    return (
     <>    

        <div className="pb-6">
            <img src={Coat_Header} alt="abc" height="auto" width="100%"/>
        </div>

        <div className="mt-6">
            <h1 className="font-semibold text-3xl lg:text-6xl text-center text-primary"> COATS COLLECTION</h1>
        </div>
    
        <div className="h-[80vh] w-full flex flex-col items-center justify-center ">
            <h1 className="text-3xl font-title">NO PRODUCTS DISPLAYED</h1> 
            <h3 className="text-1xl font-content italic mt-6"> Please Check New Arrivals Next Time </h3>
        </div>

        <Footer/>
     </>
    )
}