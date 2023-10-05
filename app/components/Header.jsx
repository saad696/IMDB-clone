import React from 'react';

import { AiOutlineHome, AiOutlineInfoCircle } from 'react-icons/ai';
import { MenuItem } from '.';
import Link from 'next/link';

const Header = () => {
    return (
        <div className='flex justify-between items-center mx-2 max-w-6xl sm:mx-auto py-6'>
            <div>
                <MenuItem title={'Home'} address={'/'} Icon={AiOutlineHome} />
                <MenuItem
                    title={'About'}
                    address={'/about'}
                    Icon={AiOutlineInfoCircle}
                />
            </div>
            <div>
                <Link href='/'>
                    <h2 className='text-2xl'>
                        <span className='font-bold bg-amber-500 p-1 rounded-s-md'>
                            Cine
                        </span>
                        <span className='font-bold bg-gray-300 text-gray-600 p-1 rounded-e-md'>
                            Buff
                        </span>
                    </h2>
                </Link>
            </div>
        </div>
    );
};

export default Header;
