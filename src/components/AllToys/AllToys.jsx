import React from 'react';
import { useLoaderData } from 'react-router-dom';

const AllToys = () => {
    const toys = useLoaderData()

    console.log(toys)
    let index = 1;
    return (
        <div>
            <h2>The number of toys: {toys.length}</h2>
            <div className="overflow-x-auto">
                <table className="table text-center w-full">
                    {/* head*/}
                    <thead>
                        <tr>
                            <th>NO</th>
                            <th>Picture</th>
                            <th>Name</th>
                            <th>Sub-Category</th>
                            <th>Available Quantity</th>
                            <th>Price</th>
                            <th>Action</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            toys.map(myToy => <>
                                <tr>
                                    <th>{index++}</th>
                                    <td>
                                        <div><img className='' height={50} width={50} src={myToy.toyPic} alt="" /></div>
                                    </td>
                                    <td>{myToy.toyName}</td>
                                    <td>{myToy.subCategory}</td>
                                    <td>{myToy.quantity}</td>
                                    <td>${myToy.price}</td>
                                    <td>
                                        <button className='btn btn-sm'>UPDATE</button>
                                    </td>
                                    <td>
                                        <button className='btn btn-sm'>DELETE</button>
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