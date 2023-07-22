import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../../../Hooks/useAuth';
import { toast } from 'react-hot-toast';

const Navbar = () => {
    const { user, signOutUser, setLoading } = useAuth()
    const location = useLocation()

    const handleSignOut = () => {
        signOutUser()
        .then(()=>{
            setLoading(false)
            toast.success('Sign out successfully')
        })
        .catch(error =>{
            console.log(error.message)
        })
    }
    // console.log(location.pathname);
    return (
        <div className="navbar bg-cyan-500 md:px-10">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 font-semibold shadow-2xl bg-cyan-500 rounded-md">
                        <li><Link className={`hover:text-white hover:bg-transparent ${location.pathname == '/' && 'text-white'}`} to='/'>Home</Link></li>
                        <li><Link className={`hover:text-white hover:bg-transparent ${location.pathname == '/colleges' && 'text-white'}`} to='/colleges'>Colleges</Link></li>
                        <li><Link className={`hover:text-white hover:bg-transparent ${location.pathname == '/admission' && 'text-white'}`} to='/admission'>Admission</Link></li>
                        <li><Link className={`hover:text-white hover:bg-transparent ${location.pathname == '/my-colleges' && 'text-white'}`} to='/my-colleges'>My Colleges</Link></li>
                        {
                            user && <li><Link onClick={handleSignOut} className={`hover:text-white hover:bg-transparent`}>Sign Out</Link></li>
                        }
                        {
                            user && <li><Link className={`hover:text-white hover:bg-transparent`} to='/profile'>{user.displayName}</Link></li>
                        }
                        {
                            !user && <li><Link className={`hover:text-white hover:bg-transparent ${location.pathname == '/login' && 'text-white'}`} to='/login'>Login</Link></li>
                        }
                    </ul>
                </div>
                <Link to='/' className="md:text-2xl text-xl font-bold">Campus Hive</Link>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal px-1 font-bold">
                    <li><Link className={`hover:text-white hover:bg-transparent ${location.pathname == '/' && 'text-white'}`} to='/'>Home</Link></li>
                    <li><Link className={`hover:text-white hover:bg-transparent ${location.pathname == '/colleges' && 'text-white'}`} to='/colleges'>Colleges</Link></li>
                    <li><Link className={`hover:text-white hover:bg-transparent ${location.pathname == '/admission' && 'text-white'}`} to='/admission'>Admission</Link></li>
                    <li><Link className={`hover:text-white hover:bg-transparent ${location.pathname == '/my-colleges' && 'text-white'}`} to='/my-colleges'>My Colleges</Link></li>
                    {
                        user && <li><Link onClick={handleSignOut} className={`hover:text-white hover:bg-transparent`}>Sign Out</Link></li>
                    }
                    {
                        user && <li><Link className={`hover:text-white hover:bg-transparent`} to='/profile'>{user.displayName}</Link></li>
                    }
                    {
                        !user && <li><Link className={`hover:text-white hover:bg-transparent ${location.pathname == '/login' && 'text-white'}`} to='/login'>Login</Link></li>
                    }
                </ul>
            </div>
        </div>
    );
};

export default Navbar;