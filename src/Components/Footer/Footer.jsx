import { Link, NavLink } from "react-router";

const Footer = () => {

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
        {
            name: 'Contact',
            url: '/contact'
        },
    ]

    return (
        <div className="w-full min-h-[397px] h-full bg-white py-12 ">
            <div className="lg:container mx-auto">
                <div className="flex items-center justify-center flex-col gap-6">
                    {/* logo wrapper  */}
                    <div>
                        <Link to={'/'}><img src="/Logo.png" alt="logo" /></Link>
                    </div>

                    {/* footer menu  */}
                    <nav className="flex items-center gap-12">

                        {
                            navLinks?.map((page, index) => (
                                <NavLink key={index} to={page?.url} className={({ isActive }) => isActive ? 'text-base text-purple-ton-blue font-raleway font-medium capitalize underline' : 'text-base text-primary-dark-gray font-raleway font-medium capitalize'}>{page?.name}</NavLink>
                            ))
                        }
                    </nav>

                    {/* social media  */}
                    <div className="flex items-center gap-3">
                        <Link className="w-[40px] h-[40px] flex items-center justify-center bg-purple-ton-blue rounded-full text-base text-white font-bold font-raleway uppercase">FB</Link>
                        <Link className="w-[40px] h-[40px] flex items-center justify-center bg-purple-ton-blue rounded-full text-base text-white font-bold font-raleway uppercase">Ig</Link>
                        <Link className="w-[40px] h-[40px] flex items-center justify-center bg-purple-ton-blue rounded-full text-base text-white font-bold font-raleway uppercase">ln</Link>
                        <Link className="w-[40px] h-[40px] flex items-center justify-center bg-purple-ton-blue rounded-full text-base text-white font-bold font-raleway uppercase">yt</Link>
                    </div>

                    {/* copyright text  */}
                    <div className="w-full mt-6 border-t border-purple-ton-blue flex items-center justify-center">
                        <p className="text-base text-secondary-dark-gray font-raleway font-normal pt-8">Copyright idea peel Inc &copy;. All Right Reserved</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;