import React from 'react';
import Navbar from './subc/Navbar';

export default function Header() {
    return (
        <>
            <header className='py-6 shadow-sm'>
                <div className='maxW flex justify-between items-center'>
                    <a href="/">
                    <img className='w-[130px]' src="/logo.png" alt="" /></a>
                    <Navbar />
                </div>
            </header>
        </>
    );
}