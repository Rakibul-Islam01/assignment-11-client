import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CarDetails = () => {
    const toy = useLoaderData()
    const {toyPic, toyName, subCategory, sellerName, sellerEmail, rating, quantity, price, details} = toy;
    console.log(toy)
    return (
        <div>
            <h2 className='text-center text-2xl font-bold text-sky-900 mt-10'>The Details Of The Car</h2>
            <div className="w-full md:w-3/4 m-6 mx-auto rounded bg-base-100 shadow-xl">
                <figure className="px-10 pt-10 w-full mx-auto">
                    <img src={toyPic} alt="Shoes" className="rounded-xl w-4/3 mx-auto"  />
                </figure>
                <div className="card-body text-center">
                    <h2 className="font-bold text-lg">Toy Name: {toyName}</h2>
                    <p>Sub Category: {subCategory}</p>
                    <p>Seller Name: {sellerName}</p>
                    <p>Seller Email: {sellerEmail}</p>
                    <p>Price: {price}</p>
                    <p>Quantity: {quantity}</p>
                    <p>Rating: {rating}</p>
                    <p>Description: {details}</p>
                    <p></p>
                    
                </div>
            </div>
        </div>
    );
};

export default CarDetails;