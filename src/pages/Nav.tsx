import React, { Fragment, useEffect, useState } from 'react';
import { useMetaMask } from 'metamask-react';
import { Link, NavLink } from 'react-router-dom';
import logo from 'assets/img/logo.png';

const Nav = () => {
    const [connectButtonText, setText] = useState<string>('');
    const { status, connect, account } = useMetaMask();
    const connectWallet = () => {
        if(status !== 'notConnected') return;
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
                <div onClick={connectWallet} className='text-green-500 cursor-pointer hover:underline'>{connectButtonText}</div>
            </div>
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
        </Fragment>
    )
}

export default Nav;