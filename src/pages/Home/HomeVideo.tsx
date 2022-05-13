import React from 'react';
import { BsFillPlayFill } from 'react-icons/bs';
import swap_preview from 'assets/img/swap-preview.jpg';

const HomeVideo = () => {
    return (
        <div className='px-20 py-20 bg-neutral-800 font-futura'>
            <h1 className='text-5xl text-right text-white underline decoration-green-400 decoration-4 underline-offset-4'>
                Swap your Assets in <span className='text-green-400'>1 step</span>
            </h1>
            <p className='pt-8 text-2xl text-right text-white'>Choose your assets from your wallet.</p>
            <p className='text-2xl text-right text-white'>Do the same with the counterparty wallet.</p>
            <p className='text-2xl text-right text-white'>Pay a small transaction to create the trading link.</p>
            <p className='text-2xl text-right text-green-400'>That's all.</p>
            <div className='relative pt-10'>
                <img src={swap_preview} alt='' className='opacity-80' />
                <button className='absolute p-2 pl-3 top-[50%] left-[50%] bg-green-400 rounded-full'>
                    <BsFillPlayFill color='white' size={40} />
                </button>
            </div>
        </div>
    )
}

export default HomeVideo;