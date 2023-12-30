import React from "react";
import { Link } from "react-router-dom";
 
const Item = (props) => {
    return (
        <div className="item w-[350px] hover:scale-105 delay-300 pb-10">
            <Link to={`/product/${props.id}`}>
                <img src={props.image} alt="" className="lg:h-[450px] h-[390px] lg:w-[350px] w-[380px]" />
            </Link>

            <p className="mt-6 mb-6 font-bold text-xl">{props.name}</p>

            <div className="item-prices flex gap-20">
                <div className="item-price-new text-gray-500 text-lg font-semibold">
                    PHP {props.new_price}
                </div>
                <div className="item-price-old text-slate-300 text-lg font-medium line-through">
                    PHP {props.old_price}
                </div>
            </div>
        </div>

        

    )
}

export default Item;