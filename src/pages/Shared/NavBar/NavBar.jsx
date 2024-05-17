import { Link } from "react-router-dom";


const NavBar = () => {
    const navItems = <>
        <li className="border-[#23BE0A] rounded-lg text-xl font-semibold text-[#23BE0A]"><Link to='/'>Home</Link></li>
        <li className="text-xl text-[#131313cc]"><Link to='/listedbook'>Listed Books</Link></li>
        <li className="text-xl text-[#131313cc]"><Link to='/pagestoread'>Pages to Read</Link></li>
    </>

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navItems}
                    </ul>
                </div>
                <a className="btn btn-ghost text-3xl font-bold">Book Verse</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItems}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn bg-[#23BE0A] rounded-xl text-white px-4">Sign In</a>
                <a className="btn bg-[#59C6D2] rounded-xl text-white px-4">Sign Up</a>
            </div>
        </div>
    );
};

export default NavBar;