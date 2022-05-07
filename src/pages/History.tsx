import React, { useState } from 'react';
import { MdCancel } from 'react-icons/md';
import { BiFilterAlt } from 'react-icons/bi';
import { BsSearch, BsCheckCircle } from 'react-icons/bs';

const History = () => {
    const [filter, setFilter] = useState<boolean>(false);
    const onClickFilter = () => setFilter(!filter);
    
    return (
        <div className='px-20 py-10'>
            <div className='flex'>
                <div className='text-xl font-bold border-b-4 border-teal-300'>All the swaps in one place.</div>
            </div>
            <div className='flex gap-5 mt-10'>
                <div className='flex flex-col gap-3'>
                    <div className='flex items-center w-40 gap-2 px-3 py-4 text-white rounded-md shadow-md cursor-pointer bg-zinc-600 shadow-zinc-600'>
                        <BsCheckCircle size={25} color='#00ff00' />
                        <div className='text-lg font-bold'>Completed</div>
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

export default History;