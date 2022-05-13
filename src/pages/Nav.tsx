import React, { Fragment, useEffect, useState } from 'react';
import { useMoralis } from 'react-moralis';
import { Link, NavLink } from 'react-router-dom';
import { BsDiscord, BsTwitter } from 'react-icons/bs';
import logo from 'assets/img/logo.svg';

const Nav = () => {
    const [text, setText] = useState<string>('CONNECT WALLET');
    const { authenticate, isAuthenticated, user } = useMoralis();
    const connectWallet = () => {
        !isAuthenticated && authenticate();
    }
    useEffect(() => {
        setText(isAuthenticated ? user?.get('ethAddress') : 'CONNECT WALLET');
    }, [isAuthenticated, user]);
    
    return (
        <Fragment>
            <div className='py-2 font-bold text-center text-white bg-purple-700 cursor-pointer hover:underline'>
                Trade Squad NFT owners pay no trading fees! Mint now
            </div>
            <div className='flex justify-between px-3 py-1 bg-zinc-800'>
                <div className='flex items-center gap-3'>
                    <BsDiscord size={20} color='white' />
                    <BsTwitter size={20} color='white' />
                </div>
                <div onClick={connectWallet} className='font-sans text-green-400 cursor-pointer hover:underline'>{text}</div>
            </div>
            <div className='flex items-center justify-between px-5 py-3 font-futura'>
                <Link to='/'>
                    <img src={logo} alt='' className='h-10' />
                </Link>
                <div className='flex gap-5 text-xl font-bold'>
                    <NavLink to='/new' className={({ isActive }) => (isActive ? 'border-b-4 border-b-green-400' : 'border-b-4 border-b-transparent hover:border-b-green-400')}>Make a trade</NavLink>
                    <NavLink to='/trade' className={({ isActive }) => (isActive ? 'border-b-4 border-b-green-400' : 'border-b-4 border-b-transparent hover:border-b-green-400')}>My Trades</NavLink>
                    <NavLink to='/history' className={({ isActive }) => (isActive ? 'border-b-4 border-b-green-400' : 'border-b-4 border-b-transparent hover:border-b-green-400')}>Deals History</NavLink>
                </div>
            </div>
        </Fragment>
    )
}

export default Nav;