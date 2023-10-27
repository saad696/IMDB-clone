import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import React from 'react';

const NavbarItem = ({ title, param }) => {
    const genre = useSearchParams().get('genre');

    return (
        <div>
            <Link
                className={`m-4 hover:text-amber-600 transition-all font-semibold p-2 ${
                    genre && genre === param
                        ? 'text-amber-600 underline underline-offset-8 decoration-4 decoration-amber-500 rounded-lg'
                        : 'text-gray-400'
                }`}
                href={`/?genre=${param}`}
            >
                {title}
            </Link>
        </div>
    );
};

export default NavbarItem;
