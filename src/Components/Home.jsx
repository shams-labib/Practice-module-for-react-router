import React from 'react';

import Homepage from './Homepage';
import { useLoaderData } from 'react-router';

const Home = () => {
  const users = useLoaderData();


    return (
        <div className='border-1 border-red-500 container mx-auto '>
            <h1 className='text-center text-2xl'>Welcome to Joy bangla page</h1>       
            
            <div className='mt-5 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 place-items-center '>
              {
               users.map(user => <Homepage user={user}></Homepage>)   
              }
            </div>         
        </div>

        
    );
};

export default Home;