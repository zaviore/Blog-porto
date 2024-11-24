"use client"
import { useThemeContext } from '@/context/themeContext';
import Image from 'next/image';
import React from 'react'


// eslint-disable-next-line @typescript-eslint/no-explicit-any
function ThemeToggle(props: any) {
   console.log(props);
   const { toggleTheme } = useThemeContext()
   

    return (
        <div className='bg-black text-light-text dark:bg-white dark:text-dark-text cursor-pointer relative justify-between rounded-xl flex w-11 items-center p-1' onClick={toggleTheme}>
        <Image src="/moon.png" alt="moon" width={14} height={14}/>
        <div className={`absolute w-4 h-4 rounded-[50%] bg-white dark:bg-black transition dark:left-1 right-1`} />
        <Image src="/sun.png" alt="moon" width={14} height={14}/>
        </div>
    )
}

export default ThemeToggle
