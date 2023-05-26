import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider/AuthProvider';

const MyToys = () => {
    const {user} = useContext(AuthContext)
    console.log(user)
    const [myToys, setMyToys] = useState([])

    let url = `http://localhost:5000/mytoys?sellerEmail=${user?.email}`
    useEffect(()=>{
        fetch(url)
        .then(res => res.json())
        .then(data => setMyToys(data))
    }, [url])
    console.log(myToys)
    return (
        
        <div>
            <h2>My Toys page: {myToys.length}</h2>
        </div>
    );
};

export default MyToys;