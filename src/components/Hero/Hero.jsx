import React from "react";

export default function Hero() {
    return (
        <>    
            <div className="relative top-0 h-[300px] md:h-[500px] lg:h-[600px] mb-20 w-full bg-hero bg-no-repeat bg-opacity-50 bg-cover bg-top flex items-center justify-center">
                <div className="absolute">
                    <h1 className="text-white font-semibold text-4xl md:text-6xl text-center">ECOCHIC APPAREL COLLECTION</h1>
                </div>

                <div className="absolute inset-0 w-full h-full bg-slate-400 bg-opacity-50"></div>
            </div>
     </>
    )
}