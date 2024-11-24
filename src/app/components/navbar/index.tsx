"use client"

import Link from 'next/link';
import React from 'react'
import ThemeToggle from '../themeToogle';



// eslint-disable-next-line @typescript-eslint/no-explicit-any
function Navbar(props: any) {
   console.log(props);
    return (
        <div className="bg-light-background text-light-text dark:bg-slate-900 dark:text-dark-text">
            <div className='flex px-5 items-center justify-between container mx-auto h-16'>
            <div className='font-bold'>
                ZAMHADI
            </div>
            <div className='flex gap-3 items-center'>
                <ThemeToggle/>
                <Link href='/'>Hompage</Link>
                <Link href='/'>Contact</Link>
                <Link href='/'>About</Link>
            </div>
            </div>
           

        </div>
    )
}

export default Navbar
