import React from 'react';
import layer from 'assets/img/layer.png';
import { FaLock } from 'react-icons/fa';
import { MdThumbUpAlt } from 'react-icons/md';
import { VscArrowSwap } from 'react-icons/vsc';
import { SiBlockchaindotcom } from 'react-icons/si';

const HomeDetail = () => {
    return (
        <div className='px-20 py-20 bg-white font-futura'>
            <h1 className='text-5xl underline decoration-green-400 decoration-4 underline-offset-4'>The Breakthrough in the NFT's world</h1>
            <div className='pt-8 text-2xl'>NFT Trader lets you swap your NFTs simply and safely.</div>
            <div className='flex'>
                <div className='flex items-center justify-center flex-1'>
                    <img src={layer} alt='' />
                </div>
                <div className='flex flex-col flex-1 gap-10 py-10'>
                    <div className='flex items-start gap-5 pr-20'>
                        <div className='p-3 text-green-400 bg-black rounded-full'>
                            <FaLock size={30} />
                        </div>
                        <div>
                            <div className='text-4xl first-letter:text-green-400'>Secure</div>
                            <div className='font-sans'>Trade your Assets knowing that it is fully secured and easy to nullify if you decide.</div>
                        </div>
                    </div>
                    <div className='flex items-start gap-5 pr-20'>
                        <div className='p-3 text-green-400 bg-black rounded-full'>
                            <MdThumbUpAlt size={30} />
                        </div>
                        <div>
                            <div className='text-4xl first-letter:text-green-400'>Trade P2P</div>
                            <div className='font-sans'>Cross Asset Swap (ERC-721/ERC-1155/ERC-20) with another counterpart.</div>
                        </div>
                    </div>
                    <div className='flex items-start gap-5 pr-20'>
                        <div className='p-3 text-green-400 bg-black rounded-full'>
                            <VscArrowSwap size={30} />
                        </div>
                        <div>
                            <div className='text-4xl first-letter:text-green-400'>Super easy to use</div>
                            <div className='font-sans'>Only 1 simple step to create a trade and that's it!</div>
                        </div>
                    </div>
                    <div className='flex items-start gap-5 pr-20'>
                        <div className='p-3 text-green-400 bg-black rounded-full'>
                            <SiBlockchaindotcom size={30} />
                        </div>
                        <div>
                            <div className='text-4xl first-letter:text-green-400'>Decentralized</div>
                            <div className='font-sans'>Operating across the Ethereum blockchain</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeDetail;