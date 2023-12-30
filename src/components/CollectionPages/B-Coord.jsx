import React from "react";
import Coord_Header from '../Assets/Coords-Header.png';
import { coord_items } from "../Assets/all_products";
import Footer from '../Footer/footer';
import Item from '../Item/Categoryitem';

export default function Coord() {

    return (
        <>    

        <div className="pb-6">
            <img src={Coord_Header} alt="abc" height="auto" width="100%"/>
        </div>

        <div>
            <div className="mt-6">
                 <h1 className="font-semibold text-3xl lg:text-6xl text-center text-primary">COORDS COLLECTION</h1>
            </div>
  

            <div className="flex self-center h-full">
                <div className="flex flex-wrap items-center justify-evenly mt-16 gap-10">
                    {coord_items.map((item, i) => {
                        return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
                    })}
                </div>
            </div>
        </div>


      <Footer/>

     </>
    )
}