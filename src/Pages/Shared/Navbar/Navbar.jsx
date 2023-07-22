import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const location = useLocation()
    // console.log(location.pathname);
    return (
        <div className="navbar bg-cyan-500 md:px-10">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 font-semibold shadow-2xl bg-base-300 rounded-box">
                        <li><Link className={`hover:text-white ${location.pathname == '/' && 'text-white'}`} to='/'>Home</Link></li>
                        <li><Link className={`hover:text-white ${location.pathname == '/colleges' && 'text-white'}`} to='/colleges'>Colleges</Link></li>
                        <li><Link className={`hover:text-white ${location.pathname == '/admission' && 'text-white'}`} to='/admission'>Admission</Link></li>
                        <li><Link className={`hover:text-white ${location.pathname == '/my-colleges' && 'text-white'}`} to='/my-colleges'>My Colleges</Link></li>
                        <li><Link className={`hover:text-white ${location.pathname == '/login' && 'text-white'}`} to='/login'>Login</Link></li>
                        {/* <li><Link to='/'>Home</Link></li>
                        {currentUser.role === 'admin' && <li><Link to="/upload-papers">Upload Papers</Link></li>}
                        {currentUser.role === 'student' && <li><Link to="/my-papers">My Papers</Link></li>}
                        {user && (
                            <div className="flex items-center">
                                <li><Link onClick={handleSignOut}>Sign Out</Link></li>
                                {currentUser?.image ? (
                                    <img className='w-5 h-5 rounded-full' src={currentUser?.image} alt="" />
                                ) : (
                                    <FaUser className="w-5 h-5" />
                                )}
                            </div>
                        )}
                        {!user && <li><Link to="/log-in">Login</Link></li>} */}
                    </ul>
                </div>
                <Link to='/' className="md:text-2xl text-xl font-bold">Campus Hive</Link>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal px-1 font-bold">
                    <li className={`hover:text-white ${location.pathname == '/' && 'text-white'}`}><Link to='/'>Home</Link></li>
                    <li className={`hover:text-white ${location.pathname == '/colleges' && 'text-white'}`}><Link to='/colleges'>Colleges</Link></li>
                    <li className={`hover:text-white ${location.pathname == '/admission' && 'text-white'}`} ><Link to='/admission'>Admission</Link></li>
                    <li className={`hover:text-white ${location.pathname == '/my-colleges' && 'text-white'}`}><Link to='/my-colleges'>My Colleges</Link></li>
                    <li className={`hover:text-white ${location.pathname == '/login' && 'text-white'}`}><Link to='/login'>Login</Link></li>
                    {/* {currentUser.role === 'admin' && <li><Link to="/upload-papers">Upload Papers</Link></li>}
                    {currentUser.role === 'student' && <li><Link to="/my-papers">My Papers</Link></li>}
                    {user && (
                        <div className="flex items-center">
                            <li><Link onClick={handleSignOut}>Sign Out</Link></li>
                            {currentUser?.image ? (
                                <img className='w-5 h-5 rounded-full' src={currentUser?.image} alt="" />
                            ) : (
                                <FaUser className="w-5 h-5" />
                            )}
                        </div>
                    )}
                    {!user && <li><Link to="/log-in">Login</Link></li>} */}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;