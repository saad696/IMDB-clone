import Link from 'next/link'
import React from 'react'

const MenuItem = ({title, address, Icon}) => {
  return (
    <>
    <Link href={address} className='mx-4 lg:mx-6 text-gray-600 hover:text-amber-600'>
        <Icon className="text-2xl sm:hidden inline" />
        <p className='hidden sm:inline my-2 text-lg font-semibold'>{title}</p>
    </Link>
    </>
  )
}

export default MenuItem