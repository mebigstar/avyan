import { Link } from "react-router";
import SectionHeader from "../../../SectionHeader/SectionHeader";
import { useState } from "react";
import { blogs } from "../../../BlogData";
import Card from "../Card/Card";

const RecentPost = () => {

    const [view, setView] = useState(false);

    const filteringBlogs = view ? blogs : blogs.slice(0, 3);

    console.log(filteringBlogs)

    return (
        <div className="w-full flex items-center justify-center bg-white pb-[100px] px-4">
            <div className="lg:container mx-auto">

                <div className="md:flex items-center justify-between gap-10 space-y-5 md:space-y-0">

                    {/* section Header  */}
                    <SectionHeader title={'Our Recent Post'} style={'flex items-center justify-star'} />

                    {
                        !view && (
                            <button onClick={() => setView(true)} className="text-base text-white bg-purple-ton-blue py-4 px-11 rounded-xl cursor-pointer font-roboto font-bold capitalize">view all</button>
                        )
                    }
                </div>

                <div className="md:flex items-center justify-between gap-12 md:space-y-0 space-y-8 mt-10">

                    {/* recent post left wrapper  */}
                    <div className="max-w-[712px] min-h-[456px] h-full w-full overflow-hidden">
                        <img src="/technology_image.jpg" className="h-full w-full object-cover rounded-2xl" alt="recent image" />
                    </div>

                    {/* recent post right wrapper  */}
                    <div className="min-w-[470px] w-full">
                        <div className="flex items-center gap-5 mb-6">
                            <h5 className="text-base text-primary-dark-gray font-bold font-roboto uppercase">development</h5>
                            <span className=" text-sm text-secondary-dark-gray font-roboto font-semibold capitalize">28 june 2025</span>
                        </div>
                        <h3 className="text-3xl text-primary-dark-gray font-raleway font-bold mb-5">How to make a Game look more attractive with New VR & AI Technology</h3>

                        <p className="text-base text-secondary-dark-gray font-roboto font-normal mb-6">Google has been investing in AI for many years and bringing its benefits to individuals, business and communities. Whether it's publishing state-of-the-art research, building helpful products ir developing tools and resources that enable others, we're committed to make AI accessible to everyone.</p>

                        <Link to={'/blog'} className='text-base text-primary-dark-gray font-raleway font-bold capitalize px-10 py-4 bg-white rounded-2xl border border-purple-ton-blue inline-block'>read more</Link>
                    </div>

                </div>

                {/* blogs wrapper  */}
                <div className="grid md:grid-cols-3 gap-8 mt-10">
                    {
                        filteringBlogs?.map(blog => (

                            <Card blog={blog} />
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default RecentPost;