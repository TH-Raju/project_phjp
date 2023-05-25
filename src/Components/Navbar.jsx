import React from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {

    const menuItems = <React.Fragment>
        <li className='font-bold text-lg'><Link to="/">HOME</Link></li>
        <li className='font-bold text-lg'><Link to="/">WOOCMERCE</Link></li>
        <li className='font-bold text-lg'><Link to="/">PAGES</Link></li>
        <li className='font-bold text-lg'><Link to="/">SERVICE</Link></li>
        <li className='font-bold text-lg'><Link to="/">TEAM</Link></li>
        <li className='font-bold text-lg'><Link to="/">BLOG</Link></li>


    </React.Fragment>
    return (
        <div className="navbar bg-inherit">
            <div className="navbar-start">
                <img src={require("../assests/logo.png")} className='h-7 w-16' alt="" />
            </div>
            <div className="navbar-start hidden lg:flex ">
                <ul className="menu menu-horizontal px-1">
                    {menuItems}
                </ul>
            </div>
            <div className="navbar-end lg:hidden">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3  shadow bg-base-100 rounded-box text-start -ml-16">
                        {menuItems}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;