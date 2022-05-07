import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from 'assets/img/logo.png';

const Nav = () => {
    return (
        <div className='flex items-center justify-between px-5 py-3'>
            <Link to='/' className='flex items-center gap-3'>
                <img src={logo} alt='' className='w-10 h-10' />
                <div className='font-bold'>NFT Trader</div>
            </Link>
            <div className='flex gap-8 text-lg font-bold'>
                <NavLink to='/trade' className={({ isActive }) => (isActive ? 'border-b-4 border-b-teal-300' : 'border-b-4 border-b-transparent hover:border-b-teal-300')}>TradeSquads</NavLink>
                <NavLink to='/history' className={({ isActive }) => (isActive ? 'border-b-4 border-b-teal-300' : 'border-b-4 border-b-transparent hover:border-b-teal-300')}>Mint Trade Squad</NavLink>
            </div>
        </div>
    )
}

export default Nav;