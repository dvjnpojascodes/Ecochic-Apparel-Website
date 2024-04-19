import React from 'react';
import './CSS/button.css';

export default function Contact() {
    return (
        <>
            <div className="w-full grid lg:grid-cols-2 bg-accent text-white overflow-hidden">
                {/* <!-- contact form --> */}
                <div className="w-full px-20 pb-36 md:max-w-full mx-auto">
                    <h2 className="text-2xl lg:text-4xl font-title mt-10 mb-10 text-center lg:text-start tracking-wider">CONTACT US</h2>
        
                    <form method="POST" action="#" className="text-center lg:text-start">
                        <label className="block mb-10">
                            <span className="text-white">Your name</span>
                            <input type="text" name="name" className=" block w-full mt-1 text-center lg:text-start border-b border-gray-300 bg-transparent px-2 py-1 text-black focus:bg-white focus:outline-none" placeholder="Joe Bloggs" required/>
                        </label>

                        <label className="block mb-10">
                            <span className="text-white">Email address</span>
                            <input type="email" name="email" className=" block w-full mt-1 text-center lg:text-start border-b border-gray-300 bg-transparent px-2 py-1 text-black focus:bg-white focus:outline-none" placeholder="youremail@example.com" required/>
                        </label>

                        <label className="block mb-10">
                            <span className="text-white">Message</span>
                            <textarea name="message" className=" block w-full mt-1 text-center lg:text-start border-b border-gray-300 bg-transparent px-2 py-1 text-black focus:bg-white focus:outline-none resize-none" required rows="4" placeholder="Tell us what you're thinking about... "></textarea>
                        </label>


                        <div className="mb-6">
                        <button type="submit" class="button">Send Message <span><i className="fa-solid fa-arrow-right ml-7"></i></span></button>
                        </div>
        
                    </form>
                </div>
        

                {/* <!-- map section --> */}
                <div className=" bg-primary pt-14 pb-10 pl-10 pr-10 justify-center text-center">
                <div className="flex justify-center">
                <iframe title="Ecochic Location Map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3860.8425416831064!2d120.98509117465795!3d14.608044076895311!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c9ff89e26081%3A0xc1bfe4241e81b7b3!2sEloisa%20St%2C%20Sampaloc%2C%20Manila%2C%201008%20Metro%20Manila!5e0!3m2!1sen!2sph!4v1699781198832!5m2!1sen!2sph"width="600" height="350" style={{ border: '0' }} allowFullScreen="" loading="lazy" className="w-10/12" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>

                <p className="font-title text-3xl md:text-6xl text-center tracking-wider mt-10 pb-5">Visit our Shop!</p>

                <p className="font-content text-sm md:text-base">Don’t forget to bring a plastic bottle to earn ten points, which you can exchange for any clothing items made from recycled materials available in our collection.</p>
                </div>
            </div>
        </>
    )
}
