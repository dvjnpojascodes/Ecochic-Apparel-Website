import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from "react";
import { Link } from 'react-router-dom';

const Breadcrum = (props) => {

    const {product} = props;

    return(
        <div className="font-content bg-slate-200 flex flex-wrap align-middle gap-4 text-gray-500 lg:text-base text-sm  font-semibold mx-16 py-3 px-5 mt-10 uppercase ">
            <Link to='/'> Home </Link><FontAwesomeIcon icon="fa-solid fa-arrow-right" className='my-1'/> <Link to='/collection'>Collection</Link> <FontAwesomeIcon icon="fa-solid fa-arrow-right" className='my-1'/>  <Link to={`/${product.category}`}>{product.category}</Link> <FontAwesomeIcon icon="fa-solid fa-arrow-right" className='my-1'/> {product.name}
        </div>
    )
}

export default Breadcrum;