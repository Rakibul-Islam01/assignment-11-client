import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CarToyTabs from '../CarToyTabs/CarToyTabs';

const AllToys = () => {
    const toys = useLoaderData()
    // console.log(toys)

    let index = 1;
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
                            toys.map(myToy => <>
                                <tr>
                                    <th>{index++}</th>
                                    <td>{myToy.sellerName}</td>
                                    <td>{myToy.toyName}</td>
                                    <td>{myToy.subCategory}</td>
                                    <td>{myToy.quantity}</td>
                                    <td>${myToy.price}</td>
                                    <td>
                                        <button className='btn btn-sm'>VIEW DETAILS</button>
                                    </td>
                                   
                                </tr>
                            </>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllToys;