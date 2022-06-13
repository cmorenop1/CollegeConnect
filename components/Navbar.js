import React from 'react';

export default function () {


    const onClick = () => {
        console.log('clic')
    }

    return (
        <header className='flex px-2 items-center justify-between  bg-gray-900'>
            <div class="py-2">
                <img class="h-8" src='navbar-logo.png' alt='Lorem-Ipsum' />
            </div>

            <div>
                <button type='button' class="block" >
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
