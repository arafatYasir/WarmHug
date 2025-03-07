import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.webp";

const Navbar = () => {
    const links = <>
        <li className="text-white hover:text-[#93C5FD] transition-all duration-200">
            <NavLink to="/">Home</NavLink>
        </li>
        <li className="text-white hover:text-[#93C5FD] transition-all duration-200">
            <NavLink to="/campaigns">Campaigns</NavLink>
        </li>
        <li className="text-white hover:text-[#93C5FD] transition-all duration-200">
            <NavLink to="/how_to_help">How to Help</NavLink>
        </li>
        <li className="text-white hover:text-[#93C5FD] transition-all duration-200">
            <NavLink to="/dashboard">Dashboard</NavLink>
        </li>
    </>;

    return (
        <nav className="navbar bg-[#1E3A8A] md:px-5">
            {/* Navbar Start */}
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-[#E0F2FE] text-[#1E3A8A] rounded-box z-10 mt-3 w-52 p-2 shadow gap-2 text-lg">
                        {links}
                    </ul>
                </div>
                <Link to="/">
                    <img className="w-[200px]" src={logo} alt="Website Logo" />
                </Link>
            </div>

            {/* Navbar Center */}
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal text-lg px-1 gap-5">
                    {links}
                </ul>
            </div>

            {/* Navbar End */}
            <div className="navbar-end">
                <Link to="/login" className="bg-[#93C5FD] text-[#1E3A8A] px-4 py-2 rounded-lg text-[16px] font-semibold tracking-wider transition-all duration-300 hover:bg-[#60A5FA]">
                    Login
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;