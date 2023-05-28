import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const EsectionTwo = () => {
    return (
        <div className='my-12'>
            <h2 data-aos="fade-up" className='text-3xl font-bold text-center '>Out Testimonial</h2>
            <hr data-aos="fade-up" className='w-6/12 md:w-2/12 h-1 rounded text-center mx-auto bg-sky-400 mb-6' />
            <div className='grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-4 p-3 
            ms-auto'>
                <div className="aos-init aos-animate" data-aos="fade-up">
                    <img className='rounded-full mx-auto mb-3' width={150} src="https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg" alt="" />
                    <p className='text-lg font-semibold'>Name: Miss Julias</p>
                    <p><span className='font-bold'>Opinion</span>: Toy cars and vehicles provide a fun source of entertainment, while building motor, cognitive, and social skills at the same time. </p>
                </div >
                <div className="aos-init aos-animate" data-aos="fade-up">
                    <img className='rounded-full mx-auto mb-3' width={150} src="https://img.freepik.com/free-photo/man-isolated-showing-emotions-end-gestures_1303-30095.jpg" alt="" />
                    <p className='text-lg font-semibold'>Name: Alex Goot</p>
                    <p><span className='font-bold'>Opinion</span>: Toy cars and vehicles provide a fun source of entertainment, while building motor, cognitive, and social skills at the same time. </p>
                </div>
                <div className="aos-init aos-animate" data-aos="fade-up">
                    <img className='rounded-full mx-auto mb-3' width={150} src="https://us.123rf.com/450wm/benzoix/benzoix2006/benzoix200604342/150144795-business-finance-and-employment-female-successful-entrepreneurs-concept-professional-confident.jpg?ver=6" alt="" />
                    <p className='text-lg font-semibold'>Name: Mania Hasi</p>
                    <p><span className='font-bold'>Opinion</span>: Toy cars and vehicles provide a fun source of entertainment, while building motor, cognitive, and social skills at the same time. </p>
                </div>
                <div className="aos-init aos-animate" data-aos="fade-up">
                    <img className='rounded-full mx-auto mb-3' width={150} src="https://img.freepik.com/free-photo/close-up-young-successful-man-smiling-camera-standing-casual-outfit-against-blue-background_1258-65479.jpg" alt="" />
                    <p className='text-lg font-semibold'>Name: Hakua Ala</p>
                    <p> <span className='font-bold'>Opinion</span> : Toy cars and vehicles provide a fun source of entertainment, while building motor, cognitive, and social skills at the same time. </p>
                </div>
            </div>
        </div>
    );
};

export default EsectionTwo;