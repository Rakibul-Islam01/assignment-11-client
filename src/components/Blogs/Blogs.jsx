import React from 'react';

const Blogs = () => {
    return (
        <div>
            <h2 className='text-3xl font-bold text-center my-8'>Read and know some Questions and Answers</h2>

            <div className='my-6 mx-3 md:mx-10'>
                <h3 className='font-bold text-xl mb-3'>Q: What is an access token and refresh token? How do they work and where should we store them on the client-side?</h3>

                <p><span className='text-sky-600 font-semibold text-lg'>Ans:</span> A refresh token just helps you re-validate a user without them having to re-enter their login credentials multiple times. The access token is re-issued, provided the refresh token is a valid one requesting permission to access confidential resources.</p>

                <p>You can store the access token and refresh token in the server-side session. The application can use web sessions to communicate with the server. The token is then available for any requests originating from server-side code</p>
            </div>

            <div className='my-6 mx-3 md:mx-10'>
                <h3 className='font-bold text-xl mb-3'>Compare SQL and NoSQL databases...</h3>

                <p><span className='text-sky-600 font-semibold text-lg'>Ans:</span>SQL databases use a structured query language and have a defined schema. NoSQL databases use dynamic schemas for unstructured data. NoSQL databases scale horizontally, whereas SQL databases scale vertically. Whereas SQL databases are table-based, NoSQL databases are document, key-value, graph, or wide-column stores.</p>
            </div>

            <div className='my-6 mx-3 md:mx-10'>
                <h3 className='font-bold text-xl mb-3'>What is express js? What is Nest JS?</h3>

                <p><span className='text-sky-600 font-semibold text-lg'>Ans:</span>Express is a node js web application framework that provides broad features for building web and mobile applications. It is used to build a single page, multipage, and hybrid web application. <br /> It's a layer built on the top of the Node js that helps manage servers and routes.</p>

                <p>Nest. js is one of the fastest-growing Node. js frameworks for building efficient, scalable, and enterprise-grade backend applications using Node. js. It is known for producing highly testable, maintainable, and scalable applications using modern JavaScript and TypeScript.</p>
            </div>

            <div className='my-6 mx-3 md:mx-10'>
                <h3 className='font-bold text-xl mb-3'>What is MongoDB aggregate and how does it work</h3>

                <p><span className='text-sky-600 font-semibold text-lg'>Ans:</span>In MongoDB, aggregation operations process the data records/documents and return computed results. It collects values from various documents and groups them together and then performs different types of operations on that grouped data like sum, average, minimum, maximum, etc to return a computed result. It is similar to the aggregate function of SQL.</p>
            </div>


        </div>
    );
};

export default Blogs;