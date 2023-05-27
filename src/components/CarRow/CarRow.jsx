import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider/AuthProvider';
import { Link, Navigate, useParams } from 'react-router-dom';

let index = 0;
const CarRow = ({ myToy, index }) => {
    const { user, loading } = useContext(AuthContext)
    const { _id } = myToy;
    // const _id = useParams()

    if (loading) {
        return <progress className="progress w-56 block mx-auto h-3 my-12"> </progress>
    }


    // let index = 1;
    return (
        <tr >
            <td> {index++} </td>
            <td>{myToy.sellerName}</td>
            <td>{myToy.toyName}</td>
            <td>{myToy.subCategory}</td>
            <td>{myToy.quantity}</td>
            <td>${myToy.price}</td>
            <td>
                {
                    <Link to={`/toy/${_id}`}> <button className='btn btn-sm'>VIEW DETAILS</button> </Link> 
                }
                
            </td>

        </tr>
    );
};

export default CarRow;