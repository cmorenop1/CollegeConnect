import React from 'react';
import Image from 'next/image'
import Router from 'next/router'
import IconAvatar from '../components/IconAvatar'


export default function () {
    const onClick = () => {
        const router = Router.push
        router('/')
    }

    const onClickShowAlert = () => {
        const alertMessage = `v1.1.1`
        alert(alertMessage)
    }

    return (
        <header className='sticky top-0 flex px-2 items-center justify-between  bg-gray-900  align-middle'>
            <div class="py-3 px-2 align-middle">
                <Image
                    onClick={onClick}
                    src="/navbar-logo.png"
                    width="128"
                    height="30"
                />
            </div>

            <div>
                <span class="inline-grid grid-cols-2 gap-4 align-middle">
                    <span><IconAvatar /></span>
                    <span><button type='button' onClick={onClickShowAlert}>
                        <svg xmlns="http://www.w3.org/2000/svg"
                            class="align-middle h-6 w-6 block text-gray-500 hover:text-white"
                            fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                    </span>
                </span>
            </div>
        </header >
    );
}
