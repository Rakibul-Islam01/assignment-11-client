import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import CarToyTabs from '../CarToyTabs/CarToyTabs';
import { AuthContext } from '../../Provider/AuthProvider/AuthProvider';
import CarRow from '../CarRow/CarRow';


let index = 0;
const AllToys = () => {
    const toys = useLoaderData()
    const {user, loading} = useContext(AuthContext)

        if(loading){
            return <progress className="progress w-56 block mx-auto h-3 my-12"> </progress>
        }
    
    // let index = 1;
    return (
        <div>
            {/* <h2>The number of toys: {toys.length}</h2> */}
            <h2 className='text-2xl font-semibold text-sky-900 text-center mt-10 mb-8'>ALL TOYS</h2>
            <div className="overflow-x-auto">
                <table className="table text-center w-full">
                    {/* head*/}
                    <thead>
                        <tr>
                            <th>NO</th>
                            <th>Seller</th>
                            <th>Toy Name</th>
                            <th>Sub-Category</th>
                            <th>Available Quantity</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            toys?.map((myToy, index) => <CarRow myToy={myToy} index={index+1}></CarRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllToys;