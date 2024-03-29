import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './Menu.css'
import { AuthContext } from '../../Provider/AuthProvider/AuthProvider';

const Menu = () => {

    const { user, logOut } = useContext(AuthContext)

    const handleLogOut = () => {
        logOut();
    }

    return (
        <div className="navbar text-gray-700 bg-sky-600">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/alltoy">All Toys</Link></li>
                        {
                            user && <li><Link to="/mytoy">My Toys</Link></li>
                        }
                        {
                            user && <li><Link to="/addtoy">Add A Toy</Link></li>
                        }
                        <li><Link to="/">Blogs</Link></li>
                     

                    </ul>
                </div>
                <Link to="/" className="btn btn-ghost normal-case text-xl"> <span> <img src="https://i.postimg.cc/1tpdRFRv/car.png" width={45} className='mr-3' alt="" /> </span> <span className='font-bold text-3xl text-white car-name'>Toy <span className='text-orange-900'>Hub</span> </span> </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/alltoy">All Toys</Link></li>
                    {
                        user && <li><Link to="/mytoy">My Toys</Link></li>
                    }
                    {
                        user && <li><Link to="/addtoy">Add A Toy</Link></li>
                    }

                    <li><Link to="/blog">Blogs</Link></li>
                   

                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ? <> <button className='bg-sky-700 text-white py-2 px-4 text-xl rounded hover:bg-sky-900' onClick={handleLogOut}>Logout</button>  <img className='photoUrl ms-2 cursor-pointer' title={`${user.displayName}`} src={user.photoURL} alt="" /></> : <Link to="/login"><button className='bg-sky-700 text-white py-2 px-4 text-xl rounded hover:bg-sky-900'>Login</button></Link>
                }
            </div>
        </div>
    );
};

export default Menu;