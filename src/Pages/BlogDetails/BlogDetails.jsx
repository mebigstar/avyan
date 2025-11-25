import React from 'react';
import { useParams } from 'react-router';
import { blogs } from '../../../BlogData';
import Newsletter from './../../Components/Newsletter/Newsletter';

const BlogDetails = () => {
    const { id } = useParams();

    const blog = blogs?.find(blog => blog?.id === id);
    console.log('single blog: ', blog)
    return (
        <div>
            <div className='pt-10 pb-[100px] px-4'>
                <div className="lg:container mx-auto">
                    <div className='w-full h-auto'>

                        <div className="w-full flex justify-center ">
                            <div className="max-w-[1024px]w-full space-y-6">

                                <div className="flex items-center  gap-5">
                                    <h5 className="text-base text-primary-dark-gray font-bold font-roboto uppercase">{blog?.status}</h5>
                                    <span className=" text-sm text-secondary-dark-gray font-roboto font-semibold capitalize">{blog?.date}</span>
                                </div>

                                <h3 className='text-4xl text-primary-dark-gray font-raleway font-bold capitalize mb-10'>{blog?.title}</h3>
                            </div>


                        </div>


                        <div className='mb-10'>
                            <img src={blog?.image} className='w-full max-h-[608px] h-full object-cover rounded-2xl' alt={blog?.title} />
                        </div>

                        <div className='w-full flex items-center justify-center'>

                            <p className='text-base text-secondary-dark-gray font-roboto max-w-[1024px] w-full '>{blog?.description}</p>
                        </div>

                    </div>
                </div>
            </div>

            <Newsletter/>
        </div>
    );
};

export default BlogDetails;