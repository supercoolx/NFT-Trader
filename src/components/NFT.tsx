import React from 'react';

const NFT = ({ nft, onClick }: { nft: any, onClick?: (val: any) => void }) => {
    const metadata = JSON.parse(nft.metadata);
    const onClickCard = (val: any) => {
        if(onClick) return () => onClick(val);
        else return () => void(0);
    }

    return (
        <div onClick={onClickCard(nft)} className='w-40 p-2 overflow-y-hidden text-sm bg-gray-300 rounded-md cursor-pointer' >
            {
                metadata?.image ?
                <img src={metadata?.image} alt="" className='object-cover w-full h-40 rounded-md' style={{ imageRendering: '-webkit-optimize-contrast' }} /> :
                <div className='h-40 bg-gray-200 rounded-md w-36' />
            }
            <div className='pt-2 break-words'>Name: {nft.name}</div>
            <div className='break-words'>ID: {nft.token_id}</div>
        </div>
    )
}

export default NFT;