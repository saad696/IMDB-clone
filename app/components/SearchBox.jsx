'use client';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

const SearchBox = () => {
    const [searchValue, setSearchValue] = useState('');
    const router = useRouter();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!searchValue) return;
        router.push(`/search/${searchValue}`);
    };

    return (
        <form
            action=''
            className='flex items-center max-w-6xl mx-auto justify-between px-5'
            onSubmit={handleSubmit}
        >
            <input
                value={searchValue}
                type='text'
                placeholder='Search Keywords...'
                className='w-full h-14 rounded-sm placeholder-gray-500 outline-none bg-transparent flex-1'
                onChange={(e) => setSearchValue(e.target.value)}
            />
            <button
                type='submit'
                disabled={!searchValue}
                className='text-amber-500 disabled:text-gray-400'
            >
                Search
            </button>
        </form>
    );
};

export default SearchBox;
