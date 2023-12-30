import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";
import { ShopContext } from "../../context/ShopContext";

export default function CartItem(){
    const {getTotalAmount, all_product, cartItems, removeFromCart} = useContext(ShopContext);

    return(
        <div className="cartItems md:mx-20 mx-4 my-10 font-content">
            <div className="grid grid-cols-cartGrid items-center justify-items-center gap-4 font-bold text-center lg:text-base text-sm">
                <p>Product</p>
                <p>Product Name</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>

            <hr className="h-[3px] bg-slate-50 border-0"/>

            {all_product.map((e)=>{
                if(cartItems[e.id]>0) {
                    return <div>
                            <div className="grid grid-cols-cartGrid items-center justify-items-center gap-4 pb-5 pt-2 border-b-2 border-slate-100 lg:text-base text-xs">
                                <img src={e.image} alt="" className="carticon-product-icon w-[90px] md:h-[105px] h-[55px] " />
                                <p>{e.name}</p>
                                <p>{e.new_price}</p>
                                <button className="cartitems-quantity py-1 md:w-[60px] w-[40px] border-2 border-slate-100">{cartItems[e.id]}</button>
                                <p>PHP {e.new_price*cartItems[e.id]}</p>
                                <FontAwesomeIcon icon="fa-solid fa-trash" className="text-red-600 cursor-pointer" onClick={()=>{removeFromCart(e.id)}} />
                            </div>
                        </div>
                }
                return null;
            })}

            <div className="totalItems flex mt-5 mb-20 md:w-[33%] w-[100%] md:float-right float-left">
                <div className="flex-1 flex flex-col gap-3">
                    <h1 className="font-bold uppercase md:text-2xl text-1xl">Cart Totals</h1>

                    <div className="lg:text-base text-sm">
                        <div className="flex pr-16 py-1 justify-between">
                            <p className="pr-12">Subtotal: </p>
                            <p>PHP {getTotalAmount()}</p>
                        </div>

                        <hr />

                        <div className="flex pr-16 py-1 justify-between">
                            <p className="pr-12">Shipping Fee: </p>
                            <p>Free</p>
                        </div>

                        <hr />
                        <div className="flex pr-16 py-1 justify-between font-bold ">
                            <h3 className="pr-12">Total: </h3>
                            <h3>PHP {getTotalAmount()}</h3>
                        </div>
                    </div>

                    <button className="cursor:pointer px-16 py-3 lg:text-base text-sm bg-primary text-white font-bold">CHECKOUT </button>
                </div>
            </div>
        </div>
    )
}