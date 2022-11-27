import React from 'react';

const Loading = () => {
    return (
        <div className='flex justify-center mt-20'>
            <div className="flex justify-center items-center">
                <div className="spinner-border text-yellow-500 animate-spin inline-block w-8 h-8 border-4 rounded-full" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        </div>
    );
};

export default Loading;