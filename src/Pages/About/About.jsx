import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router";
import Newsletter from "../../Components/Newsletter/Newsletter";


const works = [
    {
        title: 'brainstorming',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem, ipsa. Enim eaque corrupti obcaecati quidem exercitationem, nam, sunt tempora debitis explicabo aliquam libero, quisquam delectus!'
    },
    {
        title: 'analyzing',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem, ipsa. Enim eaque corrupti obcaecati quidem exercitationem, nam, sunt tempora debitis explicabo aliquam libero, quisquam delectus!'
    },
    {
        title: 'news publishing',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem, ipsa. Enim eaque corrupti obcaecati quidem exercitationem, nam, sunt tempora debitis explicabo aliquam libero, quisquam delectus!'
    },
]

const About = () => {


    useEffect(() => {
    document.title = "About";
  }, []);

    const [activeWork, setWork] = useState(0); //initial 0

    return (
        <div className='pt-10'>
            <div className='w-ful mb-[100px] md:mb-[150px] px-4'>
                <div className="lg:container mx-auto">
                    <div className='mb-[100px]'>
                        <img src="/about_image.jpg" className='w-full max-h-[608px] h-full object-cover rounded-2xl' alt="about image" />
                    </div>


                    {/* how we work section  */}
                    <div>
                        <div className="mb-14 flex flex-col gap-6">
                            <h4 className="text-base text-[#66666] font-bold font-raleway uppercase">how we work</h4>
                            <h3 className="text-4xl text-primary-dark-gray font-raleway font-bold capitalize max-w-[500px] w-full">I will show you how our team works</h3>
                        </div>

                        <div className="grid md:grid-cols-3 grid-cols-1 gap-6">
                            {
                                works?.map((work, index) => (
                                    <div onClick={() => setWork(index)} key={index} className={`p-6  ${activeWork === index ? 'bg-purple-ton-blue' : 'bg-[#a9adb3]' } rounded-xl space-y-5 cursor-pointer`}>
                                        <h3 className="text-5xl text-white font-raleway font-bold">00{index+1}</h3>
                                        <h4 className="text-2xl text-white font-raleway font-bold capitalize">{work?.title}</h4>
                                        <p className="text-lg text-white font-roboto font-normal">{work?.description}</p>
                                        <Link className="text-xl text-white font-raleway font-bold capitalize underline">learn more</Link>
                                    </div>
                                ))
                            }
                        </div>

                    </div>

                </div>
            </div>

            <Newsletter/>
        </div>
    );
};

export default About;