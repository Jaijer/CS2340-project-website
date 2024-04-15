import React from 'react'
import Image from 'next/image';

function Header() {
  return (
    <div className='flex justify-between items-center p-4 bg-silvery'>
        <div className='flex gap-2 items-center'>
            <Image alt='logo' src={'/greenplate.png'} width={40} height={40} />
            <h1 className='font-bold'>GreenPlate</h1>
        </div>

        <div className='flex gap-3'>
            <a className='hover:scale-110 hover:text-bluish cursor-pointer transition-all' href='#introduction'>
                Introduction
            </a>
            <a className='hover:scale-110 hover:text-bluish cursor-pointer transition-all' href='#design'>
                Design
            </a>
            <a className='hover:scale-110 hover:text-bluish cursor-pointer transition-all' href='#ui'>
                UI
            </a>
            <a className='hover:scale-110 hover:text-bluish cursor-pointer transition-all' href='#functionality'>
                Functionality
            </a>
            <a className='hover:scale-110 hover:text-bluish cursor-pointer transition-all' href='#conclusion'>
                Conclusion
            </a>
            <a className='hover:scale-110 hover:text-bluish cursor-pointer transition-all' href='#contributors'>
                Contributors
            </a>
        </div>
    </div>
  )
}

export default Header