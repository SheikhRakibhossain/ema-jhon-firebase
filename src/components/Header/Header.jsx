import React, { useContext } from 'react';
import './Header.css';
import logo from '../../images/Logo.svg';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const Header = () => {
    const {logOut, user} = useContext(AuthContext);

    const handleLogOut =()=>{
        logOut()
        .then(result =>{})
        .catch(error =>console.error(error))
        console.log('logout')
    }
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                <Link to="/">Shop</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/login">Login</Link>
                <Link to="/signup">Sign Up</Link>
                {
                    user ? <div><span className='text-white px-2'>{user.email}</span> <button onClick={handleLogOut}>Log Out</button></div>
                    : ""
                }
            </div>
        </nav>
    );
};

export default Header;