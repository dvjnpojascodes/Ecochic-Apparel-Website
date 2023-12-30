import React from "react";
import Bottom_Header from '../Assets/Bottoms-Header.png';
import { bottom_items } from "../Assets/all_products";
import Footer from '../Footer/footer';
import Item from '../Item/Categoryitem';

export default function Pants_Short() {
    return (
     <>    

        <div className="pb-6">
            <img src={Bottom_Header} alt="abc" height="auto" width="100%"/>
        </div>

        <div>
            <div className="mt-6">
                 <h1 className="font-semibold text-3xl lg:text-6xl text-center text-primary">PANTS & SHORTS COLLECTION</h1>
            </div>
  

            <div className="flex self-center h-full">
                <div className="flex flex-wrap items-center justify-evenly mt-16 gap-10">
                    {bottom_items.map((item, i) => {
                        return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
                    })}
                </div>
            </div>
        </div>

        <Footer/>
     </>
    )
}