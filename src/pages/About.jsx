import React from 'react';
import abtImg1 from '../components/Assets/about-1.jpg';
import abtImg2 from '../components/Assets/about-2.jpg';
import abtImg3 from '../components/Assets/about-3.jpg';
import '../styles/about.css';

export default function AboutUs(){
    return (
      <>
        <main className="text-white">
          {/* About Us Section */}
          <div className="bg-primary py-12">
            <div className="text-center">
              <h1 className="font-title text-4xl md:text-6xl tracking-wider">ABOUT US</h1>
              <h4 className="font-content font-thin text-base md:text-2xl tracking-wider mt-4 md:mt-9">"Turning Plastic Bottles into Fashionable Eco-Friendly Clothing"</h4>
            </div>
          </div>
  
          {/* Intro Section */}
          <div className="bg-primary">
            <div className="flex pt-14 border-t-2 border-lime-800 mx-10">
              <p className="text-white tracking-wider font-content font-thin text-sm lg:px-36 leading-relaxed text-center">
                Welcome to Ecochic Apparel, where fashion meets sustainability! At Ecochic, we are passionate about creating a positive impact on the environment and fashion industry by transforming plastic bottles into stylish, eco-friendly clothing. Our mission is to redefine the way we perceive fashion by promoting ethical and sustainable practices that contribute to a greener, cleaner future.
              </p>
            </div>
  
            {/* Image Grid */}
            <div className="grid md:grid-cols-3 mt-10">
              <img src={abtImg1} alt="" className="w-full h-80 md:h-72" />
              <img src={abtImg2} alt="" className="w-full h-80 md:h-72" />
              <img src={abtImg3} alt="" className="w-full h-80 md:h-72" />
            </div>
          </div>
  
          {/* VISION SECTION */}
          <div className="grid lg:grid-cols-2 bg-accent py-20">
            <div className="order-2 lg:order-1">
              <p className="text-white tracking-wider font-content font-thin text-sm px-14 lg:px-28 leading-relaxed text-justify">
                Welcome to Ecochic Apparel, where fashion meets sustainability! At Ecochic, we are passionate about creating a positive impact on the environment and fashion industry by transforming plastic bottles into stylish, eco-friendly clothing. Our mission is to redefine the way we perceive fashion by promoting ethical and sustainable practices that contribute to a greener, cleaner future.
              </p>
            </div>
  
            <div className="flex justify-center items-center order-1 lg:order-2">
              <h4 className="text-3xl md:text-6xl font-title mb-5 lg:mb-0">VISION</h4>
            </div>
          </div>
  
          {/* PLASTIC REVOLUTION */}
          <div className="grid lg:grid-cols-2 bg-primary py-20">
            <div className="flex justify-center items-center">
              <h4 className="text-3xl md:text-6xl font-title mb-5 lg:mb-0 px-5 md:px-8 lg:px-20 text-center leading-relaxed uppercase">The Plastic Revolution</h4>
            </div>
  
            <div>
              <p className="text-white tracking-wider font-content font-thin text-sm px-14 lg:px-28 leading-relaxed text-justify">
                Plastic pollution is one of the most pressing environmental challenges of our time. Millions of plastic bottles end up in landfills and oceans every day, contributing to the degradation of ecosystems and harming wildlife. At Ecochic, we saw an opportunity to make a difference and turn this environmental crisis into a solution.
              </p>
            </div>
          </div>
  
          {/* Innovative Technology SECTION */}
          <div className="grid lg:grid-cols-2 bg-accent py-20">
            <div className="order-2 lg:order-1">
              <p className="text-white tracking-wider font-content font-thin text-sm px-14 lg:px-28 leading-relaxed text-justify">
                We have embraced cutting-edge technology and innovation to bring our vision to life. Through an eco-conscious process, we collect and transform discarded plastic bottles into soft, durable, and stylish fabrics. Our team of skilled designers then carefully craft these fabrics into chic, contemporary clothing that aligns with the latest fashion trends.
              </p>
            </div>
  
            <div className="flex justify-center items-center order-1 lg:order-2">
              <h4 className="text-3xl md:text-6xl font-title mb-5 lg:mb-0 px-5 md:px-8 lg:px-20 text-center leading-relaxed uppercase">Innovative Technology</h4>
            </div>
          </div>
  
          {/* Fashion with a Conscience REVOLUTION */}
          <div className="grid lg:grid-cols-2 bg-primary py-20">
            <div className="flex justify-center items-center">
              <h4 className="text-3xl md:text-6xl font-title mb-5 lg:mb-0 px-5 md:px-8 lg:px-20 text-center leading-relaxed uppercase">Fashion with a Conscience</h4>
            </div>
  
            <div>
              <p className="text-white tracking-wider font-content font-thin text-sm px-14 lg:px-28 leading-relaxed text-justify">
                At Ecochic Apparel, sustainability is at the core of everything we do. We prioritize ethical practices throughout our supply chain, ensuring fair wages and safe working conditions for all our artisans and partners. By making a conscious effort to minimize our environmental footprint, we strive to be a force for good within the fashion industry.
              </p>
            </div>
          </div>
  
          {/* Join the Ecochic Movement Technology SECTION */}
          <div className="grid lg:grid-cols-2 bg-accent py-20">
            <div className="order-2 lg:order-1">
              <p className="text-white tracking-wider font-content font-thin text-sm px-14 lg:px-28 leading-relaxed text-justify">
                We invite you to be a part of the Ecochic movement. Together, we can reshape the fashion industry and make a positive impact on our environment. Browse our collection of trendy and sustainable clothing and discover how fashion can be both stylish and eco-friendly.
              </p>
            </div>
  
            <div className="flex justify-center items-center order-1 lg:order-2">
              <h4 className="text-3xl md:text-6xl font-title mb-5 lg:mb-0 px-5 md:px-8 lg:px-20 text-center leading-relaxed uppercase">Join the Ecochic Movement</h4>
            </div>
          </div>
  
          {/* Our Commitment Section */}
          <div className="grid lg:grid-cols-2 bg-primary py-20">
            <div className="flex justify-center items-center">
              <h4 className="text-3xl md:text-6xl font-title mb-5 lg:mb-0 px-5 md:px-8 lg:px-20 text-center leading-relaxed uppercase">Our Commitment</h4>
            </div>
  
            <div>
              <p className="text-white tracking-wider font-content font-thin text-sm px-14 lg:px-28 leading-relaxed text-justify">
                Ecochic Apparel is committed to continually exploring new avenues for sustainability and environmental responsibility. We promise to keep pushing the boundaries of innovation, design, and ethical practices to create a more sustainable and fashionable world. Thank you for joining us on this exciting journey towards a brighter, greener future. Together, we can change the world—one plastic bottle at a time.
              </p>
            </div>
          </div>
  
          {/* Footer */}
          <div>
            <h2 className="font-title italic text-center text-3xl lg:text-7xl py-16 text-white bg-footer">Be Chic. Be Eco. Be Ecochic Apparel.</h2>
          </div>
        </main>
      </>
    );
  }