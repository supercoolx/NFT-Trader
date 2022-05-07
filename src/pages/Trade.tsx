import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { VscTrash } from 'react-icons/vsc';
import { BiFilterAlt } from 'react-icons/bi';
import { MdCancel } from 'react-icons/md';
import { BsSearch, BsCheckCircle, BsGearWideConnected } from 'react-icons/bs';

const Trade = () => {
    const [filter, setFilter] = useState<boolean>(false);
    const [searchParams, setSearchParams] = useSearchParams();
    const onClickTab = (tab: string) => {
        return () => setSearchParams({ tab });
    }
    const onClickFilter = () => setFilter(!filter);
    const isActive = (tab: string) => (tab === searchParams.get('tab') ? ' shadow-md text-white bg-zinc-600 shadow-zinc-600' : '');

    return (
        <div className='px-20 py-10'>
            <div className='flex'>
                <div className='text-xl font-bold border-b-4 border-teal-300'>My Trades. All your swaps in one place.</div>
            </div>
            <div className='flex gap-5 mt-10'>
                <div className='flex flex-col gap-3'>
                    <div onClick={onClickTab('completed')} className={'flex items-center w-40 gap-2 px-3 py-4 rounded-md cursor-pointer transition-all duration-200 hover:shadow-md hover:text-white hover:bg-zinc-600 hover:shadow-zinc-600' + isActive('completed')}>
                        <BsCheckCircle size={25} color='#00ff00' />
                        <div className='text-lg font-bold'>Completed</div>
                    </div>
                    <div onClick={onClickTab('pending')} className={'flex items-center w-40 gap-2 px-3 py-4 rounded-md cursor-pointer transition-all duration-200 hover:shadow-md hover:text-white hover:bg-zinc-600 hover:shadow-zinc-600' + isActive('pending')}>
                        <BsGearWideConnected size={25} color='#cfcf0a' />
                        <div className='text-lg font-bold'>Pending</div>
                    </div>
                    <div onClick={onClickTab('canceled')} className={'flex items-center w-40 gap-2 px-3 py-4 rounded-md cursor-pointer transition-all duration-200 hover:shadow-md hover:text-white hover:bg-zinc-600 hover:shadow-zinc-600' + isActive('canceled')}>
                        <VscTrash size={25} color='#ff0000' />
                        <div className='text-lg font-bold'>Canceled</div>
                    </div>
                </div>
                <div className='w-full px-8 py-4 bg-white rounded-md'>
                    {
                        filter ?
                        <>
                            <div onClick={onClickFilter} className='flex items-center gap-1 cursor-pointer text-zinc-600 hover:text-zinc-500'>
                                <div className='font-bold'>CLOSE FILTERS</div>
                                <MdCancel size={20} />
                            </div>
                            <div className='flex gap-3 py-4'>
                                <div className='flex flex-col gap-2'>
                                    <div className='font-bold'>From date</div>
                                    <input type="date" className='px-2 py-2 rounded-md outline-none bg-neutral-100' />
                                </div>
                                <div className='flex flex-col gap-2'>
                                    <div className='font-bold'>To date</div>
                                    <input type="date" className='px-2 py-2 rounded-md outline-none bg-neutral-100' />
                                </div>
                                <div className='flex flex-col flex-1 gap-2'>
                                    <div className='font-bold'>Counterpart address</div>
                                    <input type="text" className='px-2 py-2 rounded-md outline-none bg-neutral-100' placeholder='0x000000000000000000000000000000000000' />
                                </div>
                            </div>
                            <button className='w-40 py-3 text-xl font-bold bg-lime-500'>Apply</button>
                        </> :
                        <div onClick={onClickFilter} className='flex items-center gap-1 cursor-pointer text-zinc-600 hover:text-zinc-500'>
                            <div className='font-bold'>FILTERS</div>
                            <BiFilterAlt size={20} />
                        </div>
                    }
                    <div className='flex py-8'>
                        <input type='text' placeholder='Type or paste address here' className='px-2 py-4 outline-none rounded-l-md bg-neutral-100 w-80' />
                        <div className='flex items-center px-2 bg-neutral-100 rounded-r-md'><BsSearch size={20} /></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Trade;