import React from 'react';
import { useLoaderData } from 'react-router-dom';

const AllToys = () => {
    const toys = useLoaderData()

    console.log(toys)
    return (
        <div>
            <h2>The number of toys: {toys.length}</h2>
        </div>
    );
};

export default AllToys;