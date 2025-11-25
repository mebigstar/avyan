import { useEffect } from "react";
import React from 'react';
import { blogs } from '../../../BlogData';
import SectionHeader from '../../../SectionHeader/SectionHeader';
import Card from '../../Components/Card/Card';
import Newsletter from '../../Components/Newsletter/Newsletter';

const Blog = () => {

    useEffect(() => {
    document.title = "Blog";
  }, []);
    
    return (





        <div>
            <div className="w-full flex items-center justify-center bg-[#e2e2e2] pb-[100px] pt-10 px-4">
                <div className="lg:container mx-auto">

                    <div className="flex flex-col items-center justify-between gap-10">

                        {/* section Header  */}
                        <SectionHeader title={'Find our all blogs from here'} subtitle={'our blogs'} description={'Our blogs are written from very research and well known writers so that we can provide you the best blogs and articles for you to read them all along'} style={'flex flex-col items-center justify-star'} />

                    </div>

                    {/* blogs wrapper  */}
                    <div className="grid md:grid-cols-3 gap-8 mt-10">
                        {
                            blogs?.map(blog => (

                                <Card blog={blog} key={blog?.id} />
                            ))
                        }
                    </div>
                </div>
            </div>

            <Newsletter />
        </div>
    );
};

export default Blog;