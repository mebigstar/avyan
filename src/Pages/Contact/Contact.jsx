import React from 'react';
import SectionHeader from '../../../SectionHeader/SectionHeader';
import { RiHomeOfficeFill } from "react-icons/ri";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import GoogleMap from '../../Components/GoogleMap/GoogleMap';
import Newsletter from '../../Components/Newsletter/Newsletter';

const contactInfo = [
    {
        title: 'Office Address',
        description: '1234 Street Name, City, State, 12345',
        icon: <RiHomeOfficeFill size={'1.5rem'} color='white' />
    },
    {
        title: 'email',
        description: 'hollo@gmail.com',
        icon: <MdOutlineMarkEmailUnread size={'1.5rem'} color='white' />
    },
    {
        title: 'phone',
        description: '(001) 234-567-890',
        icon: <FaPhone size={'1.5rem'} color='white' />
    },
]

const Contact = () => {
    return (
        <div>
            <div className="pt-10 mb-[100px] md:px-0 px-4">
                <div className="lg:container mx-auto">
                    <SectionHeader title={'Get in Touch'} description={'Contact us to publish your content and show ads to our website adn get a good reach'} style={'flex items-center flex-col justify-center'} />

                    <div className="grid md:grid-cols-3 grid-cols-1 gap-8 mt-14 mb-14">
                        {
                            contactInfo?.map((info, index) => (
                                <div key={index} className="flex flex-col justify-center items-center p-6 bg-white rounded-xl shadow-lg space-y-4">
                                    <button className='w-[70px] h-[70px] rounded-full bg-purple-ton-blue flex items-center justify-center bg-none border-none cursor-pointer'>{info?.icon}</button>
                                    <h3 className="text-2xl text-primary-dark-gray font-raleway font-bold capitalize">{info?.title}</h3>
                                    <p className="text-lg text-gray-600 font-roboto font-normal">{info?.description}</p>

                                </div>
                            ))
                        }
                    </div>



                </div>



                {/* map  */}
                <div className='mb-[100px]'>
                    <GoogleMap />
                </div>

                {/* form container  */}
                <div className='flex items-center justify-center w-full'>
                    <div className="max-w-[768px] w-full p-12 rounded-2xl bg-white shadow-2xl">
                        <form action="#" className='w-full space-y-6'>

                            {/* name and email box */}
                            <div className="md:flex items-center gap-6 md:space-y-0 space-y-6">
                                <div className='flex flex-col gap-4'>
                                    <label htmlFor="name" className='text-base text-[#4c4c4c] font-raleway font-semibold capitalize'>Name</label>
                                    <input className='md:min-w-[311px] w-full h-[54px] rounded border-[#c4c4c4] border pl-3' type="text" placeholder='Name' id='name' />
                                </div>
                                {/* email box  */}
                                <div className='flex flex-col gap-4'>
                                    <label htmlFor="email" className='text-base text-[#4c4c4c] font-raleway font-semibold capitalize'>Email</label>
                                    <input type="email" className='md:min-w-[311px] w-full h-[54px] rounded border-[#c4c4c4] border pl-3' placeholder='email' id='email' />
                                </div>
                            </div>
                            {/* phone and subject box */}
                            <div className="md:flex items-center gap-6 md:space-y-0 space-y-6">
                                <div className='flex flex-col gap-4'>
                                    <label htmlFor="phone" className='text-base text-[#4c4c4c] font-raleway font-semibold capitalize'>Phone</label>
                                    <input type="text" className='md:min-w-[311px] w-full h-[54px] rounded border-[#c4c4c4] border pl-3' placeholder='Phone' id='phone' />
                                </div>
                                {/* subject box  */}
                                <div className='flex flex-col gap-4'>
                                    <label htmlFor="subject" className='text-base text-[#4c4c4c] font-raleway font-semibold capitalize'>Subject</label>
                                    <input type="text" className='md:min-w-[311px] w-full h-[54px] rounded border-[#c4c4c4] border pl-3' placeholder='subject' id='Subject' />
                                </div>
                            </div>

                            {/* message box  */}
                            <div className='flex flex-col gap-4'>
                                <label htmlFor="message">Message</label>
                                <textarea className='max-w-[643px] w-full min-h-[209px] h-full border-[#c4c4c4] border rounded pl-3 pt-3' id='message' placeholder='Your message...' rows={5} />
                            </div>

                            <div className='flex items-center justify-center w-full'>

                                <button type='submit' className='max-w-[177px] w-full h-[60px] rounded bg-purple-ton-blue flex items-center justify-center cursor-pointer text-xl text-white font-raleway font-bold capitalize'>send message</button>
                            </div>

                        </form>
                    </div>
                </div>


            </div>
            <Newsletter />
        </div>
    );
};

export default Contact;