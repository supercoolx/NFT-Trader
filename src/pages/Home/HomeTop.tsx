import React from 'react';
import { Link } from 'react-router-dom';
import home_img from "assets/img/home_img.png";
import nfttrader_logo_home from "assets/img/nfttrader-logo-home.png";

const HomeTop = () => {
    return (
        <div className='flex px-2 font-futura'>
            <div className='flex flex-col items-center flex-1'>
                <img src={nfttrader_logo_home} alt='' />
                <h1 className='px-20 pt-5 text-3xl text-center'>Swap Your NFTs & Crypto Securely and Easily</h1>
                <div className='flex flex-col items-center pt-12'>
                    <Link to="/new" className='py-4 text-xl text-center text-black bg-green-400 w-60'>Make a trade</Link>
                    <div className='text-2xl'>or</div>
                    <Link to="/trade" className='py-4 text-xl text-center text-green-400 bg-black w-60'>Check My Trades</Link>
                </div>
            </div>
            <div className='flex-1'>
                <img src={home_img} alt="" />
            </div>
        </div>
    )
}

export default HomeTop;