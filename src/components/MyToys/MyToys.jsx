import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider/AuthProvider';
import ToyRow from '../ToyRow/ToyRow';
import { Link } from 'react-router-dom';

const MyToys = () => {
    const { user } = useContext(AuthContext)
    // console.log(user)
    const [myToys, setMyToys] = useState([])

    let url = `http://localhost:5000/mytoys?sellerEmail=${user?.email}`
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setMyToys(data))
    }, [url])
    // console.log(myToys)
    let index = 1;
    return (

        <div>
            {/* <h2>My Toys page: {myToys.length}</h2> */}

            <h2 className='text-2xl font-semibold text-sky-900 text-center mt-12 mb-8'>MY TOYS</h2>
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
                            myToys.map(myToy => <>
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
                                        <Link to={`/updatecar/${myToy._id}`}><button className='btn btn-sm'>UPDATE</button></Link>
                                        
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

export default MyToys;