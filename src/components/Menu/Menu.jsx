import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
    return (
        <div className="navbar text-gray-700 bg-sky-600">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/">All Toys</Link></li>
                        <li><Link to="/">My Toys</Link></li>
                        <li><Link to="/">Add A Toy</Link></li>
                        <li><Link to="/">Blogs</Link></li>
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl"> <span> <img src="/src/assets/favicon.png" width={45} className='mr-3' alt="" /> </span> <span className='font-bold text-3xl text-orange-400'>Car Toys</span> </a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/">All Toys</Link></li>
                    <li><Link to="/">My Toys</Link></li>
                    <li><Link to="/">Add A Toy</Link></li>
                    <li><Link to="/">Blogs</Link></li>
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn">Get started</a>
            </div>
        </div>
    );
};

export default Menu;