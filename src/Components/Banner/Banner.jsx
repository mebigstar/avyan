import React from 'react';
import { Link } from 'react-router';

const Banner = () => {
    return (
        <div className='w-full min-h-[796px] h-full bg-purple-ton-blue banner_section flex items-center justify-center mb-[100px] md:py-0 py-14 px-4'>
            <div className="lg:container mx-auto ">
                <div className="md:flex items-center justify-between gap-8 space-y-8 md:space-y-0">
                    {/* text wrapper  */}
                    <div className='max-w-[580px] w-full'>
                        <h4 className='text-2xl text-white font-semibold capitalize font-raleway mb-6'>featured post</h4>
                        <h3 className='text-6xl text-white font-bold font-raleway mb-6'>How AI will <br /> Change the Future</h3>
                        <p className='text-base text-white font-roboto font-normal mb-14'>The future of Ai will se home robots having enhanced intelligence. increased capabilities, and becoming more personal and possible cute, for example home robots will overcome navigation, direction</p>
                        <Link to={'/blog'} className='text-base text-primary-dark-gray font-raleway font-bold capitalize px-10 py-4 bg-white rounded'>read more</Link>
                    </div>

                    {/* image wrapper  */}
                    <div>
                        <img src="/banner_image.jpg" className='max-w-[608px] w-full min-h-[576px] h-full object-cover rounded-2xl' alt="banner image" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;