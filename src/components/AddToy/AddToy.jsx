import React, { useContext, useEffect } from 'react';
import './AddToy.css'
import { AuthContext } from '../../Provider/AuthProvider/AuthProvider';
import Swal from 'sweetalert2'

const AddToy = () => {
    const {user} = useContext(AuthContext)

    const handleSubmit = (event) => {
        event.preventDefault();

        const form = event.target;

        const toyPic = form.toy_pic.value;
        const toyName = form.toy_name.value;
        const subCategory = form.selection.value;
        const sellerName = form.seller_name.value;
        const sellerEmail = form.seller_email.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const quantity = form.quantity.value;
        const details = form.description.value;

        const addToy = {toyPic, toyName, subCategory, sellerName, sellerEmail, price, rating, quantity, details}

        console.log(addToy)


       fetch('http://localhost:5000/toys', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(addToy)
       })
       .then(res => res.json())
       .then(data => {
        console.log(data)
        if(data.insertedId){
             Swal.fire({
            title: 'Added',
            // text: 'Do you want to continue',
            icon: 'success',
            confirmButtonText: 'OK'
          })
        }
        // Swal.fire({
        //     title: 'Error!',
        //     text: 'Do you want to continue',
        //     icon: 'error',
        //     confirmButtonText: 'Cool'
        //   })
       })

    };

    return (
        <div>
            <form className='form' onSubmit={handleSubmit}>

                {/* toy picture and name  */}
                <div className='flex flex-col md:flex-row gap-4 mb-7'>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Toy Picture</span>
                        </label>
                        <label className="input-group ">
                            <input type="text" placeholder="Toy Picture" name='toy_pic' className="input input-bordered w-full" required/>
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Toy Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" placeholder="toy name" name='toy_name' className="input input-bordered w-full" required/>
                        </label>
                    </div>
                </div>

                {/* sub-category and seller name */}
                <div className='flex flex-col md:flex-row gap-4 mb-7'>
                    <div className="form-control md:w-1/2">
                        <label for="selection" className="label">
                            <span className="label-text">Sub-Category</span>
                        </label>
                        <label className="input-group ">
                            {/* <input type="text" placeholder="Sub-Category" name='sub_category' className="input input-bordered w-full" /> */}
                            <select className='py-3 px-3 w-full' id="selection" name="selection">
                                <option value="remoteControl">Remote Control</option>
                                <option value="sportsCar">Sports Car</option>
                                <option value="truck">Truck</option>
                            </select>
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Seller Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" placeholder="Seller Name" name='seller_name' defaultValue={user?.displayName} className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>

                {/* seller email and price */}
                <div className='flex flex-col md:flex-row gap-4 mb-7'>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Seller Email</span>
                        </label>
                        <label className="input-group ">
                            <input type="email" placeholder="Seller Email" name='seller_email' defaultValue={user.email} className="input input-bordered w-full"/>
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <label className="input-group">
                            <input type='number' placeholder="$" name='price' className="input input-bordered w-full" required/>
                        </label>
                    </div>
                </div>

                {/* rating and available quantity */}
                <div className='flex flex-col md:flex-row gap-4 mb-7'>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Rating</span>
                        </label>
                        <label className="input-group ">
                            <input type="text" placeholder="Rating" name='rating' className="input input-bordered w-full" required/>
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Avalable Quantity</span>
                        </label>
                        <label className="input-group">
                            <input type="number" placeholder="Avalable Quantity" name='quantity' className="input input-bordered w-full" required/>
                        </label>
                    </div>
                </div>

                {/* details description */}
                <div className='mb-7'>
                    <div className="form-control md:w-full">
                        <label className="label">
                            <span className="label-text">Detail Description</span>
                        </label>
                        <label className="input-group ">
                            <textarea className='w-full' name='description' rows={4} required></textarea>
                        </label>
                    </div>
                </div>

                {/* add button */}
                <input type="submit" className='btn btn-block bg-sky-700 hover:bg-sky-900' value="Add A Toy" />
            </form>
        </div>
    );
};

export default AddToy;