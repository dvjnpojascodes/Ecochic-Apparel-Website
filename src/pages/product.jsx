import React, { useContext } from "react";
import { useParams } from 'react-router-dom';
import Breadcrum from "../components/Breadcrumbs/breadcrumbs";
import { ShopContext } from "../context/ShopContext";
import ProductDisplay from '../components/ProductDisplay/ProductDisplay'
import DescriptionBox from "../components/DescriptionBox/DescriptionBox";

export default function Product(){

    const {all_product} = useContext(ShopContext);
    const {productId} = useParams();

    const product = all_product.find((e)=> e.id === Number(productId));

    return(
        <>  
        <Breadcrum product={product}/>
        <ProductDisplay product={product}/>
        <DescriptionBox/>
        </>
    )
}