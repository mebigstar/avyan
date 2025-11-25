import { Link, NavLink } from "react-router";
import { CiSearch } from "react-icons/ci";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);
    console.log(isOpen)

    const navLinks = [
        {
            name: 'Home',
            url: '/'
        },
        {
            name: 'Blog',
            url: '/blog'
        },
        {
            name: 'About',
            url: '/about'
        },
    ]
    return (
        <div className="w-full flex items-center justify-center min-h-[98px] bg-white sticky top-0 left-0 z-50">
            <div className="lg:container mx-auto w-full px-4">
                <div className="flex items-center justify-between w-full">
                    {/* logo wrapper  */}
                    <div>
                        <Link to={'/'}><img src="/Logo.png" alt="logo" /></Link>
                    </div>

                    {/* menu wrapper  */}
                    <nav className="hidden md:flex items-center gap-12">

                        {
                            navLinks?.map((page, index) => (
                                <NavLink key={index} to={page?.url} className={({ isActive }) => isActive ? 'text-lg text-purple-ton-blue font-raleway font-medium capitalize' : 'text-lg text-primary-dark-gray font-raleway font-medium capitalize'}>{page?.name}</NavLink>
                            ))
                        }

                        {/* search button */}
                        <button className="bg-none border-0 cursor-pointer"> <CiSearch size={'1.8rem'} className="text-purple-ton-blue" /></button>
                        <Link to={'/contact'} className="text-lg text-white font-raleway font-medium capitalize min-w-[180px] w-full h-[56px] rounded bg-purple-ton-blue flex items-center justify-center">contact</Link>
                    </nav>

                    {/* menu icon  */}
                    <div className="md:hidden block">

                        <button onClick={() => setIsOpen(!isOpen)} className="bg-none border-0 cursor-pointer">
                            {
                                isOpen ? <IoMdClose size={'1.8rem'} className="text-purple-ton-blue" /> :
                                    <FaBars size={'1.8rem'} className="text-purple-ton-blue" />
                            }
                        </button>
                    </div>
                </div>
            </div>

            {/* mobile menu  */}

            {
                isOpen && (

                    <div className={`md:hidden`}>
                        <div className={`mobile_menu`}>

                            {/* menu wrapper  */}
                            <nav className="flex flex-col justify-center items-center gap-6">

                                {
                                    navLinks?.map((page, index) => (
                                        <NavLink key={index} to={page?.url} className={({ isActive }) => isActive ? 'text-lg text-purple-ton-blue font-raleway font-medium capitalize' : 'text-lg text-white font-raleway font-medium capitalize'}>{page?.name}</NavLink>
                                    ))
                                }

                                {/* search button */}
                                <button className="bg-none border-0 cursor-pointer"> <CiSearch size={'1.8rem'} className="text-purple-ton-blue" /></button>
                                <Link to={'/contact'} className="text-lg text-white font-raleway font-medium capitalize min-w-[180px] w-full h-[56px] rounded bg-purple-ton-blue flex items-center justify-center">contact</Link>
                            </nav>
                        </div>
                    </div>
                )
            }

        </div>
    );
};

export default Navbar;