import React from 'react';

const Banner = () => {
    return (
        <div className="hero py-8 bg-sky-400">
            <div className="hero-content flex-col lg:flex-row justify-center items-center">
                <div className='md:w-1/2 '>
                    <img className='w-3/4 mx-auto rounded ' src="https://www.littleriders.com.au/assets/full/QY-1588-BK.jpg?20200710031024" />
                </div>
                <div className='text-left md:w-1/2'>
                    <h1 className="text-5xl font-bold">You will see the car toy update here</h1>
                    <p className="py-6">Buy toy cars, toy bikes, and toy trains for kids at the lowest prices on Flipkart.com. Get the best deals & offers on cars, trains & bikes toys.</p>
                    <button className="bg-sky-700 text-white py-2 px-4 text-xl rounded hover:bg-sky-900">Explore Our Toy Hub!</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;