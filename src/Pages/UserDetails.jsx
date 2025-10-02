import React from 'react';
import { useLoaderData } from 'react-router';

const UserDetails = () => {

    const user = useLoaderData();
    

    return (
        <div className='mt-5 space-y-8'>
            <h1 className='text-center text-4xl font-semibold'>Information Of This Users</h1>
            <div className='w-1/2  mx-auto border-1 border-gray-300 flex justify-start items-start p-8 rounded-2xl shadow-xl  flex-col space-y-3 '>
            <h1>Name : {user.name}</h1>
            <p>Email : {user.email}</p>
            <p>Phone : {user.phone}</p>
            <p>Website : {user.website}</p>
        </div>
        </div>
    );
};

export default UserDetails;