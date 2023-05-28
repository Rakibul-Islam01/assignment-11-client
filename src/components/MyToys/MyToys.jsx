import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider/AuthProvider';
import ToyRow from '../ToyRow/ToyRow';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const MyToys = () => {
    const { user } = useContext(AuthContext)
    // console.log(user)
    const [myToys, setMyToys] = useState([])

    let url = `http://car-toys-server-pi.vercel.app/mytoys?sellerEmail=${user?.email}`
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setMyToys(data))
    }, [url])



    const handleDelete=(_id)=>{
        console.log(_id)
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
            
            console.log('confirmed')
            fetch(`http://car-toys-server-pi.vercel.app/toys/${_id}`, {
                method: "DELETE"
            })
            .then(res => res.json())
            .then(data =>{
                console.log(data)
                if(data.deletedCount > 0){
                    Swal.fire(
                        'Deleted!',
                        'Your car item has been deleted.',
                        'success'
                      )
                      const remaining = myToys.filter(myToy => myToy._id !== _id)
                      setMyToys(remaining)
                }
            })
            }
          })
    }


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
                                        <button onClick={()=>handleDelete(myToy._id)} className='btn btn-sm'>DELETE</button>
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