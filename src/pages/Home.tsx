import React from 'react';
import { Link } from 'react-router-dom';
import nfttrader_logo_home from "assets/img/nfttrader-logo-home.svg";

const Home = () => {
    return (
        <div className='px-2'>
            <div className='flex flex-col items-center pt-12'>
                <img src={nfttrader_logo_home} alt='' className='h-40' />
                <h1 className='pt-10 text-3xl'>Swap Your NFTs & Crypto Securely and Easily</h1>
                <div className='flex items-center gap-5 pt-20'>
                    <Link to="/new" className='px-12 py-4 text-2xl text-black bg-green-400'>Make a trade</Link>
                    <span className='text-xl'>or</span>
                    <Link to="/trade" className='px-12 py-4 text-2xl text-green-400 bg-black'>Check My Trades</Link>
                </div>
            </div>
        </div>
    )
}

export default Home;