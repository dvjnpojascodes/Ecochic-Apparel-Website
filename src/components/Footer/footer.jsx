import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from "react";


export default function Footer() {

    return(
        <>
        <footer class="bg-gray-800 text-white font-title tracking-wider mt-16">
            <div class="container mx-auto pt-8 pb-4 px-4 lg:px-8 flex flex-wrap justify-evenly gap-3 lg:gap-10">
                {/* <!-- Logo Column --> */}
                <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 mb-4 mr-10">
                     <h1 className="text-lg sm:text-2xl">ECOCHIC APPAREL</h1> 

                     <p className="font-content  text-xs lg:text-sm text-justify font-extralight mt-4 "> Ecochic transforms plastic bottles into stylish, eco-friendly clothing while promoting ethical and sustainable practices that contribute to a greener, cleaner future. </p>
                </div>

                {/* <!-- Quick Links Column --> */}
                <div class="w-full sm:w-1/2 md:w-1/3 lg:w-48 mb-4">
                    <h2 class="lg:text-lg text-sm font-bold mb-4">QUICK LINKS</h2>
                    
                    <ul className='font-content font-extralight text-xs lg:text-sm'>
                        <li className='pb-2'><a href="/" className='hover:text-gray-400'>Home</a></li>
                        <li className='pb-2'><a href="/collection" className='hover:text-gray-400'>Collections</a></li>
                        <li className='pb-2'><a href="/aboutUs" className='hover:text-gray-400'>About Us</a></li>
                        <li className='pb-2'><a href="/" className='hover:text-gray-400'> Terms & Condition </a></li>
                        <li className='pb-2'><a href="/" className='hover:text-gray-400'> Privacy Policy </a></li>
                    </ul>
                </div>
                {/* <!-- Quick Links Column --> */}
                <div class="w-full sm:w-1/2 md:w-1/3 lg:w-56 mb-4">
                    <h2 class="lg:text-lg text-sm font-bold mb-4">KEEP CONNECTED</h2>
                    
                    <ul className='font-content font-extralight text-xs lg:text-sm'>
                        <li className='pb-3'> <i class="fab fa-facebook"></i> <a href="https://www.facebook.com/" class="text-white hover:text-gray-400 py-2"> &nbsp; Like us on Facebook</a> </li>
                        <li className='pb-3'> <i class="fab fa-twitter"></i> <a href="https://twitter.com/" class="text-white hover:text-gray-400 py-2 "> &nbsp; Follow us on Twitter</a> </li>
                        <li className='pb-3'> <i class="fab fa-instagram"></i> <a href="https://www.instagram.com/" class="text-white hover:text-gray-400 py-2 "> &nbsp; Follow us on Instagram</a> </li>
                        <li className='pb-3'> <i class="fa-brands fa-pinterest"></i> <a href="https://www.pinterest.com/" class="text-white hover:text-gray-400 py-2 "> &nbsp; Follow us on Pinterest</a> </li>
                    </ul>
                </div>


                {/* <!-- Social Media Column --> */}
                <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 mb-4 flex flex-col">

                    <h2 class="lg:text-lg text-sm font-bold mb-4 ">CONTACTS</h2>
                    
                    <div className='text-xs lg:text-sm'>
                        <p className='font-extralight font-content py-1'> <FontAwesomeIcon icon="fa-solid fa-house" />  &nbsp; 1119 Downtown Bulacan Jones Ave. Quezon City</p>
                        <p className='font-extralight font-content py-1'> <FontAwesomeIcon icon="fa-solid fa-phone" />  &nbsp; ecochicapparel.admin@gmail.com</p>
                        <p className='font-extralight font-content py-1'> <FontAwesomeIcon icon="fa-solid fa-envelope" />  &nbsp; +639 234 0933</p>
                        
                    </div>
                </div>
            </div>

            <div className='bg-black text-slate-100 font-content text-center py-6 text-xs lg:text-sm'>
                Copyright &copy; 2023 All Rights Reserved | Design by BBLE CODES
            </div>      
        </footer>
        </>
    )
}