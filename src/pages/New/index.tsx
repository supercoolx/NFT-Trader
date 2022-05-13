import React, { Fragment, useState } from 'react';
import NewLeft from './NewLeft';
import NewRight from './NewRight';

const New = () => {
    const [ step, setStep ] = useState<number>(1);

    return (
        <Fragment>
            <div className='flex items-center justify-between px-5 py-3 border-t border-b'>
                <div>
                    <span className='pr-5 font-futura'>Step {step} of 2</span>
                    <span className='text-sm'>
                        {
                            step === 1 ?
                            'Select ERC721, ERC1155, ERC20 or Ethereum token from both parts' :
                            'Approve and pay to generate the trade for your counterparty'
                        }
                    </span>
                </div>
                <button onClick={() => setStep(3 - step)} className='px-10 py-3 bg-green-400 font-futura'>{step === 1 ? 'NEXT' : 'PREV'}</button>
            </div>
            <div className='flex h-screen divide-x'>
                <NewLeft />
                <NewRight />
            </div>
        </Fragment>
    )
}

export default New;