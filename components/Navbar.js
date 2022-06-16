import React from 'react';
import Image from 'next/image'
import Router from 'next/router'


export default function () {


    const onClick = () => {
        //alert('🍁 Praise the Lord, this works ✨')
        const router = Router.push
        router('/')
    }

    return (
        <header className='sticky top-0 flex px-2 items-center justify-between  bg-gray-900'>
            <div class="py-3 px-2">
                <Image
                    onClick={onClick}
                    src="/navbar-logo.png"
                    width="128"
                    height="30"
                />
            </div>

            <div>
                <button type='button' class="block" onClick={onClick}>
                    <svg xmlns="http://www.w3.org/2000/svg"
                        class="h-6 w-6 block text-gray-500 hover:text-white"
                        fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>

        </header>
    );
}
