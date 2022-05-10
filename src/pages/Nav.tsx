import React, { Fragment, useEffect, useState } from 'react';
import { useMetaMask } from 'metamask-react';
import { Link, NavLink } from 'react-router-dom';
import logo from 'assets/img/logo.svg';

const Nav = () => {
    const [connectButtonText, setText] = useState<string>('CONNECT WALLET');
    const { status, connect, account } = useMetaMask();
    const connectWallet = () => {
        // if(status !== 'notConnected') return;
        connect();
    }
    useEffect(() => {
        status === 'initializing' && setText('INITIALIZING');
        status === 'unavailable' && setText('UNAVAILABLE');
        status === 'notConnected' && setText('CONNECT WALLET');
        status === 'connecting' && setText('CONNECTING...');
        status === 'connected' && setText(account.slice(0, 6) + '...' + account.slice(account.length - 4, account.length));
    }, [status, account])

    return (
        <Fragment>
            <div className='flex justify-between px-3 py-1 bg-zinc-800'>
                <div></div>
                <div onClick={connectWallet} className='font-sans text-green-400 cursor-pointer hover:underline'>{connectButtonText}</div>
            </div>
            <div className='flex items-center justify-between px-5 py-3'>
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