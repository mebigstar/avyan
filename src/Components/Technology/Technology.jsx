import { Link } from "react-router";

const Technology = () => {
    return (
        <div className='w-ful flex items-center justify-center mb-[100px] md:mb-[150px]'>
            <div className="lg:container mx-auto">
                <div className="technology_container md:relative w-full min-h-[576px] rounded-2xl md:p-0 p-8">
                    <div className="max-w-[920px] w-full bg-white rounded-2xl p-5 md:absolute -bottom-16 right-0 shadow">
                        <div className="flex items-center gap-5 mb-6">
                            <h5 className="text-base text-primary-dark-gray font-bold font-roboto uppercase">development</h5>
                            <span className=" text-sm text-secondary-dark-gray font-roboto font-semibold capitalize">28 june 2025</span>
                        </div>
                        <h3 className="text-3xl text-primary-dark-gray font-raleway font-bold mb-5">How to make a Game look more attractive with New VR & AI Technology</h3>

                        <p className="text-base text-secondary-dark-gray font-roboto font-normal mb-6">Google has been investing in AI for many years and bringing its benefits to individuals, business and communities. Whether it's publishing state-of-the-art research, building helpful products ir developing tools and resources that enable others, we're committed to make AI accessible to everyone.</p>

                        <Link to={'/blog'} className='text-base text-primary-dark-gray font-raleway font-bold capitalize px-10 py-4 bg-white rounded-2xl border border-purple-ton-blue inline-block'>read more</Link>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Technology;