import React, { useState } from 'react';
import Moralis from 'moralis';
import { useMoralis } from 'react-moralis';
import Dialog from 'rc-dialog';
import { Jazzicon } from '@ukstv/jazzicon-react';
import { AiOutlinePlus } from 'react-icons/ai';
import { BsArrowRight } from 'react-icons/bs';
import 'rc-dialog/assets/bootstrap.css';
import NFT from 'components/NFT';


const NewLeft = () => {
    const { isAuthenticated, user } = useMoralis();
    const [ nfts, setNfts ] = useState<any[]>([]);
    const [ selected, setSelected ] = useState<any[]>([]);
    const [ isOpen, setOpen ] = useState<boolean>(false);
    const openModal = () => {
        Moralis.Web3API.account.getNFTs({
            chain: 'eth',
            address: user?.get('ethAddress')
        }).then(nfts => {
            nfts.result?.sort((a, b) => (a.name > b.name) ? 1 : -1)
            setNfts(nfts.result || []);
            window.console.log(nfts);
        });
        setOpen(true);
    };
    const closeModal = () => setOpen(false);
    const onClickNFT = (i: number) => {
        return () => {
            selected.indexOf(nfts[i]) === -1 && setSelected([ ...selected, nfts[i]]);
        }
    }
    const onClickCard = (val: any) => {
        let index = selected.indexOf(val);
        index > -1 && setSelected(selected.slice(0, index).concat(selected.slice(index + 1, selected.length)));
    }
    
    return (
        <div className='relative w-1/2 p-5'>
            <div className='flex items-center gap-3'>
                <div className='text-xl border-b-4 border-b-green-400 font-futura'>My Wallet Assets</div>
                <div className='flex items-center gap-3 px-5 bg-red-500 rounded-md'>
                    <span className='text-lg font-bold text-white'>OUT</span>
                    <BsArrowRight color='white' size={25} />
                </div>
            </div>
            {
                isAuthenticated && <div className='flex items-center gap-3 pt-5'>
                    <Jazzicon address={user?.get('ethAddress')} className='w-8 h-8 border-2 border-black rounded-full' />
                    <span>{user?.get('ethAddress')}</span>
                </div>
            }
            <div className='flex flex-wrap items-start w-full gap-3 pt-5 overflow-y-auto'>
                { selected.map((val, key) => <NFT nft={val} onClick={onClickCard} key={key} />) }
            </div>
            <AiOutlinePlus onClick={openModal} color='white' size={40} className='absolute p-2 bg-gray-300 rounded-full hover:bg-gray-400 hover:cursor-pointer top-3 right-3' />
            <Dialog title={<span className='text-lg font-futura'>Choose Assets</span>} visible={isOpen} onClose={closeModal} animation='slide-fade' maskAnimation='fade' className='w-[800px]'>
                <div className='flex divide-x h-[75vh]'>
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
                                        {nft.name}
                                    </div>
                                )) :
                                <div>You don't have any NFT.</div>
                            }
                        </div>
                    </div>
                    <div className='flex flex-wrap items-start w-full gap-3 overflow-y-auto'>
                        { selected.map((val, key) => <NFT nft={val} onClick={onClickCard} key={key} />) }
                    </div>
                </div>
            </Dialog>
        </div>
    )
}

export default NewLeft;