import React from 'react';

const Banner = () => {
    return (
        <div className="hero py-8 bg-sky-400">
            <div className="hero-content flex-col lg:flex-row justify-center items-center">
                <div className='md:w-1/2 '>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTePK_SB9hHETasIf327WbF4msHPCMRuCTNQd5Z1DzL0A5jlcs3emdTGkty4A1JUGUh8Qg&usqp=CAU" className="w-3/4 rounded-lg shadow-2xl" />
                </div>
                <div className='text-left md:w-1/2'>
                    <h1 className="text-5xl font-bold">Box Office News!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="bg-sky-700 text-white py-2 px-4 text-xl rounded hover:bg-sky-900">Explore More!</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;