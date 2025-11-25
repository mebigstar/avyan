import React from 'react';
import { Link } from 'react-router';

const Card = ({ blog }) => {
    return (
        <div className=' space-y-5'>
            <div className='w-full max-h-[360px] h-full'>
                <img src={blog?.image} className='w-full h-full object-cover rounded-2xl' alt={blog?.title} />
            </div>

            <div className="flex items-center gap-5">
                <h5 className="text-base text-primary-dark-gray font-bold font-roboto uppercase">{blog?.status}</h5>
                <span className=" text-sm text-secondary-dark-gray font-roboto font-semibold capitalize">{blog?.date}</span>
            </div>
            <h3 className='text-2xl text-primary-dark-gray font-raleway font-bold capitalize'>{blog?.title}</h3>
            <p className='text-base text-secondary-dark-gray font-roboto'>{blog?.description.slice(0, 100)}</p>
            <Link to={`/details/${blog?.id}`} className='text-lg text-purple-ton-blue font-raleway font-bold capitalize underline'>read more</Link>
        </div>
    );
};

export default Card;