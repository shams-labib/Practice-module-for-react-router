import React from 'react';

const Contact = () => {
    return (
        <div className='flex flex-col items-center justify-center mt-5 '>
            <h2 className='text-3xl'> Contact Me</h2>

            <div className='w-1/2 h-[30vh] border-1 border-gray-300  mt-5 flex flex-col justify-center items-center shadow-xl rounded-2xl p-5 space-y-2'>
                 <h1 className='text-xl font-bold '>Name : Kodbel</h1>
                 <p>Email : kodbelbaba@gmail.com </p>
                 <p>Phone : 017000000</p>
            </div>
        </div>
    );
};

export default Contact;