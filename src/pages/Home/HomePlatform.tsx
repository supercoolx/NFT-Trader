import React from 'react';
import tradesquads_title from 'assets/img/tradesquads-title.svg';
import tradesquads_marketplace from 'assets/img/tradesquads-marketplace.png';

const HomePlatform = () => {
    return (
        <div className='px-20 py-20 bg-teal-100 font-futura'>
            <h1 className='text-5xl underline decoration-green-400 decoration-4 underline-offset-4'>
                Platform NFT with an utility
            </h1>
            <div className='flex pt-20'>
                <div className='flex items-center justify-center flex-1 px-20'>
                    <img src={tradesquads_marketplace} alt='' />
                </div>
                <div className='flex-1'>
                    <img src={tradesquads_title} alt='' />
                    <p className='pt-12 text-xl text-center'>0.1 ETH is the price (gas fee not included).</p>
                    <p className='pt-3 text-xl text-center'>No bonding curve strategy.</p>
                    <p className='pt-3 text-xl text-center'>Everyonecould mint an ultra rare NFT.</p>
                    <p className='pt-3 text-xl text-center'>No additional fee with our Cross assets swap.</p>
                </div>
            </div>
            <div className='pt-20 text-center'>
                <button className='px-20 py-3 text-2xl text-green-400 bg-black'>See more</button>
            </div>
        </div>
    )
}

export default HomePlatform;