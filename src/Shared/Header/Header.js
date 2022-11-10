import React, { useContext, useState } from 'react';
import { FaUser } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/logo/png-transparent-health-coaching-health-fitness-and-wellness-naturally-belle-health-angle-leaf-logo-thumbnail.png';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const Header = () => {
    const { user,logOut } = useContext(AuthContext)
    

  const handleSignOut = () => {
    logOut()
    .then(()=> {})
    .catch(error => {})
}

    // const navLinkStyle = ({isActive}) => {
    //     return {
    //         fontWeight: isActive? 'bold' : 'normal'

    //     }
    // }



    const menu = <>
        <li className='font-semibold'><NavLink   to='/'>Home</NavLink></li>
        <li className='font-semibold'><NavLink to='/about'>About us</NavLink></li>
        <li className='font-semibold'><Link to='/services'>Services</Link></li>  
        <li className='font-semibold'><NavLink to='/blogs'>Blogs</NavLink></li>
        <li className='font-semibold'><NavLink to='/contact'>Contact Us</NavLink></li>
        <li className='font-semibold'>< >
        {user?.uid ?
            <>  
              <li>   {user?.photoURL ? 
              <img className='h-12'  src={user?.photoURL} alt="userImage" />
              : <FaUser></FaUser>  }</li>
                <span ><p>{user?.displayName}</p></span>
              <li className='font-semibold'><NavLink to='/reviews'>My Reviews</NavLink></li>
              <li className='font-semibold'><NavLink to='/reviews'>Added Services</NavLink></li>
                <NavLink className='font-semibold'><button className='btn-ghost' onClick={handleSignOut} >SignOut</button></NavLink>

            </> :
            <li className='font-semibold'><NavLink to='/login'>Login</NavLink></li>
        }
            
            
            
            </></li>
       
        

    </>

    return (
        <div className="navbar mb-5 rounded-lg  text-natural md:text-white bg-secondary sticky top-0 z-50 ">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-primary lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menu}
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost text-bold normal-case sm:text-xl md:text-4xl" alt=""> <img src={logo} alt="" className='rounded mr-1' width={40} /> <span className='text-white'>Health</span>  <span className='text-primary'>Coach</span> </Link>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menu}
                </ul>
            </div>
           
        </div>
    );
};

export default Header;