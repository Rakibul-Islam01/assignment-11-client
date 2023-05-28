import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const EsectionOne = () => {
    useEffect(() => {
        AOS.init();
      }, []);
    return (
        <div className=''>
            <h2 data-aos="fade-up" className='text-3xl text-center font-bold '>Our Latest Product</h2>
            <hr data-aos="fade-up" className='w-6/12 md:w-2/12 h-1 rounded text-center mx-auto bg-sky-400 mb-6' />
            <div className='grid grid-cols-1 md:grid-cols-4 gap-3 my-6'>
                <div className='mx-auto rounded aos-init aos-animate' data-aos="fade-up">
                    <img src="https://kidsparadise.com.bd/wp-content/uploads/2022/10/TOMY-John-Deere-Sit-N-Scoot-Tractor-Toy.jpg" className='rounded shadow-sm' width={220} height={200} alt="" />
                    <p className='font-semibold mt-2'>Name: Tructor</p>
                    <p>Price: $30</p>
                </div>
                <div data-aos="fade-up" className='mx-auto rounded'>
                    <img src="https://p7014794.vo.llnwd.net/e1/media/catalog/product/cache/0d20016c3cc1e67d02d0cc11108fe39c/f/a/fagus-handmade-wooden-classic-tractor-toy.jpg" className='rounded shadow-sm' width={220} height={200} alt="" />
                    <p className='font-semibold mt-2'>Name: Tructor</p>
                    <p>Price: $30</p>
                </div>
                <div data-aos="fade-up" className='mx-auto rounded'>
                    <img src="https://5.imimg.com/data5/UL/GK/MY-42366547/plastic-truck-toy-500x500.jpg" className='rounded shadow-sm' width={220} height={200} alt="" />
                    <p className='font-semibold mt-2'>Name: Tructor</p>
                    <p>Price: $30</p>
                </div>
                <div data-aos="fade-up" className='mx-auto rounded'>
                    <img src="https://m.media-amazon.com/images/I/71Y3efArTcL._AC_SL1500_.jpg" className='rounded shadow-sm' width={220} height={200} alt="" />
                    <p className='font-semibold mt-2'>Name: Tructor</p>
                    <p>Price: $30</p>
                </div>
            </div>
        </div>
    );
};

export default EsectionOne;