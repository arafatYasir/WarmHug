import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.webp"

const Navbar = () => {
    const links = <>
        <li className="hover:text-[#6B8E23]"><NavLink to="/">Home</NavLink></li>
        <li className="hover:text-[#6B8E23]"><NavLink to="/campaigns">Campaigns</NavLink></li>
        <li className="hover:text-[#6B8E23]"><NavLink to="/how_to_help">How to Help</NavLink></li>
        <li className="hover:text-[#6B8E23]"><NavLink to="/dashboard">Dashboard</NavLink></li>
    </>
    return (
        <nav className="navbar">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow gap-2 text-lg">
                        {links}
                    </ul>
                </div>
                <Link to="/">
                    <img className="w-[200px]" src={logo} alt="Website Logo" />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal text-lg px-1 gap-5">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn">Login</a>
            </div>
        </nav>
    );
};

export default Navbar;