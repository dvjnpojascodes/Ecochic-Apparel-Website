import React, { useContext, useState } from "react";
import { ShopContext } from "../../context/ShopContext";
import all_products from "../Assets/all_products"; // Import the product data


export default function ProductDetails(props) {
    const {product} = props;
    const {addToCart} = useContext(ShopContext);
    const [selectedVersion, setSelectedVersion] = useState(product.image);

    
    const versionImages = all_products.filter(
    (item) => item.category === product.category && item.name === product.name
    );

    const handleVersionClick = (image) => {
        setSelectedVersion(image);
      };
    

    return(
        <div className="flex md:flex-row flex-col my-10 px-10 ">
           
            <div className="flex px-5 py-3">
                <div className="productdiplay-img">
                    {/* this is the featured image */}
                    <img className="w-[900px] h-96 md:w-[190em] md:h-[550px] lg:w-[150em] lg:h-[40em]" src={selectedVersion} alt="" />
                </div>
            </div>


            <div className="productdisplay-right font-content my-3 flex flex-col">
                <h1 className="font-title text-2xl lg:text-4xl pb-3 font-bold md:text-left text-center">{product.name}</h1>

                <div className="productdisplay-right-prices flex my-2 gap-12 text-xl font-bold md:self-start self-center">
                   <div className="productdisplay-right-price-old lg:text-base text-sm text-slate-300 line-through"> PHP {product.old_price}</div>
                   <div className="productdisplay-right-price-new lg:text-base text-sm text-primary"> PHP {product.new_price}</div>
                </div>

                <div className="productdisplay-right-description mt-2 mb-5 lg:text-base text-sm w-[100%]">
                   <p className="text-justify">{product.description}</p>
                </div>

                <div className="productdiplay-img-list flex lg:flex-row ">
                    {versionImages.map((image, index) => (
                        <img key={index} src={image.image} onClick={() => handleVersionClick(image.image)} alt="product-version" className="lg:w-[7em] w-[5em] lg:h-[130px] h-[100px] pb-3 pr-2 cursor-pointer"/>
                    ))}
                </div>
                
                
                <div className="productdisplay-right-size lg:text-base text-sm">
                  <h1 className="mt-4 text-slate-500 font-semibold ">Select Size</h1>

                  <div className="flex gap-3 mt-2">
                    <div className="border-2 bg-slate-50 border-slate-200 rounded-sm px-3 py-1 cursor-pointer">S</div>
                    <div className="border-2 bg-slate-50 border-slate-200 rounded-sm px-3 py-1 cursor-pointer">M</div>
                    <div className="border-2 bg-slate-50 border-slate-200 rounded-sm px-3 py-1 cursor-pointer">L</div>
                    <div className="border-2 bg-slate-50 border-slate-200 rounded-sm px-3 py-1 cursor-pointer">XL</div>
                    <div className="border-2 bg-slate-50 border-slate-200 rounded-sm px-3 py-1 cursor-pointer">XXL</div>
                  </div>
                </div>

                <button onClick={()=>{addToCart(product.id)}} className="bg-primary w-[260px] text-white lg:text-base text-sm font-semibold px-4 py-2 rounded-sm my-6 cursor-pointer">ADD TO CART</button>

                <p className="lg:text-base text-sm mt-5"><span className="font-semibold">Category: </span> Women, T-shirt, croptop</p>
                <p className="lg:text-base text-sm"><span className="font-semibold">Tags: </span> {product.tags}</p>
            </div>

        </div>
    )
}
