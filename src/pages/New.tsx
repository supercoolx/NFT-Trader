import React, { Fragment } from 'react';
import { Jazzicon } from '@ukstv/jazzicon-react';
import { useMetaMask } from 'metamask-react';
import { AiOutlinePlus } from 'react-icons/ai';
import { BsArrowRight, BsArrowLeft } from 'react-icons/bs';

const New = () => {
    const { account } = useMetaMask();

    return (
        <Fragment>
            <div className='flex items-center justify-between px-5 py-3 border-t border-b'>
                <div>
                    <span className='pr-5'>Sten 1 of 2</span>
                    <span className='font-sans text-sm'>Select ERC721, ERC1155, ERC20 or Ethereum token from both parts</span>
                </div>
                <button className='px-10 py-3 bg-green-400'>NEXT</button>
            </div>
            <div className='flex h-screen divide-x'>
                <div className='relative w-1/2 p-5'>
                    <div className='flex items-center gap-3'>
                        <div className='text-xl border-b-4 border-b-green-400'>My Wallet Assets</div>
                        <div className='flex items-center gap-3 px-5 bg-red-500 rounded-md'>
                            <span className='font-sans text-lg font-bold text-white'>OUT</span>
                            <BsArrowRight color='white' size={25} />
                        </div>
                    </div>
                    {
                        account && <div className='flex items-center gap-3 pt-5'>
                            <Jazzicon address={account} className='w-8 h-8 border-2 border-black rounded-full' />
                            <span className='font-sans'>{account}</span>
                        </div>
                    }
                    <AiOutlinePlus color='white' size={40} className='absolute p-2 bg-gray-300 rounded-full hover:bg-gray-400 hover:cursor-pointer top-3 right-3' />
                </div>
                <div className='w-1/2 p-5'>
                    <div className='flex items-center gap-3'>
                        <div className='text-xl border-b-4 border-b-green-400'>My Wallet Assets</div>
                        <div className='flex items-center gap-3 px-5 bg-green-400 rounded-md'>
                            <BsArrowLeft color='white' size={25} />
                            <span className='font-sans text-lg font-bold text-white'>IN</span>
                        </div>
                    </div>
                    <div className='pt-6 font-sans'>Counterparly address not selected yet.</div>
                </div>
            </div>
        </Fragment>
    )
}

export default New;