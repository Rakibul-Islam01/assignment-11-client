import React from 'react';

const NotFound = () => {
    return (
        <div className="not-found-page text-center py-12">
            <h1>404 - Page Not Found</h1>
            <img className='mx-auto' height={200} width={200} src="https://static.vecteezy.com/system/resources/previews/009/687/647/original/yellow-sad-face-emoji-file-png.png" alt="404 Not Found" />
            <p>We're sorry, but the page you are looking for does not exist.</p>
        </div>
    );
};

export default NotFound;