import React from 'react';
import './Gallery.css'

const Gallery = () => {
    return (
        <div className='my-10 px-4'>
            <h2 className='text-4xl text-center font-bold pb-1 '>Gallery</h2>
            <hr className='w-6/12 md:w-2/12 h-1 rounded text-center mx-auto bg-sky-400 mb-6' />
            <div className='gallery grid gap-4 my-6 grid-cols-1 md:grid-cols-3 lg:grid-cols-4'>
                <img className='w-full' src="https://i.postimg.cc/3xvC948n/g1.jpg" alt="img1" />
                <img src="https://i.postimg.cc/Bv559r1F/g2.jpg" alt="img2" />
                <img src="https://i.postimg.cc/SNXWN2Mk/g3.jpg" alt="img3" />
                <img src="https://i.postimg.cc/wMMDN345/g4.jpg" alt="img4" />
                <img src="https://i.postimg.cc/BQd28STD/g5.jpg" alt="img5" />
                <img src="https://i.postimg.cc/0yDDDTn4/g6.jpg" alt="img6" />
                <img src="https://i.postimg.cc/J0FZ5mSf/g7.jpg" alt="img7" />
                <img src="https://i.postimg.cc/0Qcpr7n2/g8.jpg" alt="img8" />
            </div>
        </div>
    );
};

export default Gallery;