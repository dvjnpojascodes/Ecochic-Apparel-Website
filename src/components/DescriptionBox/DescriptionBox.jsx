import React from "react";

export default function DescriptionBox() {
    return(
        <div className="mx-14 my-4 ">
            <div className="flex">
                <div className="flex align-middle justify-center font-semibold border-2 border-slate-200 p-3 cursor-pointer">Description</div>
                <div className="border-2 p-3 font-semibold bg-slate-50 cursor-pointer">Reviews(30)</div>
            </div>

            <div className=" flex flex-col gap-10 border-2 border-slate-200 p-10 lg:text-base text-sm">
                <p>
                    Their classic combination of a white top and pants coordinates creates a seamless blend of style and conscience, offering a refreshing take on modern fashion.
                    <br />
                    The sleeveless top, crafted from a breathable and soft organic cotton blend, exemplifies the brand's commitment to sustainable materials without compromising on comfort. The minimalist design allows for versatile styling, making it suitable for various occasions. The top's impeccable tailoring ensures a flattering fit, accentuating the natural curves while providing a relaxed and airy feel.
                    <br />
                    The pants boast a lightweight and durable construction, that you wouldn't think it was made from recycled polyester! The wide-leg silhouette not only adds a touch of sophistication but also enhances mobility, making them suitable for both formal and casual settings.
                </p>
            </div>
        </div>
    )
}