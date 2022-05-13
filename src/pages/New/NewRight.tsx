import React, { useState, useRef } from 'react';
import Moralis from 'moralis';
import Dialog from 'rc-dialog';
import { Jazzicon } from '@ukstv/jazzicon-react';
import { AiOutlinePlus } from 'react-icons/ai';
import { BsArrowLeft } from 'react-icons/bs';
import 'rc-dialog/assets/bootstrap.css';
import NFT from 'components/NFT';

const NewRight = () => {
    const addressInput = useRef<HTMLInputElement>(null);
    const [ nfts, setNfts ] = useState<any[]>([]);
    const [ selected, setSelected ] = useState<any[]>([]);
    const [ isOpen, setOpen ] = useState<boolean>(false);
    const [ isAddressOpen, setAddressOpen ] = useState<boolean>(false);
    const [ address, setAddress ] = useState<string>('');
    const openModal = () => {
        if(!address.length) return alert('Please input Counterparty address');
        Moralis.Web3API.account.getNFTs({
            chain: 'eth',
            address: address
        }).then(nfts => {
            nfts.result?.sort((a, b) => (a.name > b.name) ? 1 : -1)
            setNfts(nfts.result || []);
            window.console.log(nfts);
        });
        setOpen(true);
    };
    const openAddressModal = () => setAddressOpen(true);
    const closeModal = () => setOpen(false);
    const closeAddressModal = () => setAddressOpen(false);
    const onClickNFT = (i: number) => {
        return () => {
            selected.indexOf(nfts[i]) === -1 && setSelected([ ...selected, nfts[i]]);
        }
    }
    const onClickCard = (val: any) => {
        let index = selected.indexOf(val);
        index > -1 && setSelected(selected.slice(0, index).concat(selected.slice(index + 1, selected.length)));
    }
    const setCounterAddress = () => {
        setAddress(addressInput.current ? addressInput.current.value : '');
        setAddressOpen(false);
    }
    
    return (
        <div className='relative w-1/2 p-5'>
            <div className='flex items-center gap-3'>
                <div className='text-xl border-b-4 border-b-green-400 font-futura'>Counterparty Assets</div>
                <div className='flex items-center gap-3 px-5 bg-green-400 rounded-md'>
                    <BsArrowLeft color='white' size={25} />
                    <span className='text-lg font-bold text-white'>IN</span>
                </div>
            </div>
            {
                address ? <div className='flex items-center gap-3 pt-5'>
                    <Jazzicon address={address} className='w-8 h-8 border-2 border-black rounded-full' />
                    <span>{address}</span>
                </div> :
                <div className='pt-6'>Counterparty address not selected yet.</div>
            }
            <div className='flex flex-wrap items-start w-full gap-3 pt-5 overflow-y-auto'>
                { selected.map((val, key) => <NFT nft={val} onClick={onClickCard} key={key} />) }
            </div>
            <button onClick={openAddressModal} className='absolute w-10 h-10 text-sm text-white bg-green-400 rounded-full top-3 right-3'>0x</button>
            <AiOutlinePlus onClick={openModal} color='white' size={40} className='absolute p-2 bg-gray-300 rounded-full hover:bg-gray-400 hover:cursor-pointer top-16 right-3' />
            <Dialog title={<span className='text-lg font-futura'>Choose Assets</span>} visible={isOpen} onClose={closeModal} animation='slide-fade' maskAnimation='fade' className='w-[800px]'>
                <div className='flex divide-x h-[400px]'>
                    <div className='flex flex-col gap-3 pr-3 w-[300px]'>
                        <div>Choose a NFT assets.</div>
                        <div className='flex flex-col gap-3 p-2 overflow-y-auto bg-gray-200'>
                            {
                                nfts.length ?
                                nfts.map((nft, key) => (
                                    <div onClick={onClickNFT(key)} className='flex items-center gap-3 cursor-pointer' key={key}>
                                        {
                                            JSON.parse(nft.metadata)?.image ?
                                            <img src={JSON.parse(nft.metadata)?.image} alt="" className='w-10 h-10 rounded-full' style={{ imageRendering: '-webkit-optimize-contrast' }} /> :
                                            <div className='w-10 h-10 bg-gray-300 rounded-full' />
                                        }
                                        <div className='flex-1'>{nft.name}</div>
                                    </div>
                                )) :
                                <div>Counterparty don't have any NFT.</div>
                            }
                        </div>
                    </div>
                    <div className='flex flex-wrap items-start w-full gap-3 overflow-y-auto'>
                        { selected.map((val, key) => <NFT nft={val} onClick={onClickCard} key={key} />) }
                    </div>
                </div>
            </Dialog>
            <Dialog title={<span className='text-lg font-futura'>Counterparty Address</span>} visible={isAddressOpen} onClose={closeAddressModal} animation='slide-fade' maskAnimation='fade'>
                <input type='text' ref={addressInput} className='w-full px-2 py-1 bg-gray-200 rounded-md outline-none' placeholder='Input counterparty address.' />
                <button onClick={setCounterAddress} className='w-full py-1 mt-3 text-lg font-bold bg-green-400'>Confirm</button>
            </Dialog>
        </div>
    )
}

export default NewRight;