import React from 'react'
import Image from 'next/image'

export default function Header() {
    return (
        <div className="fixed top-0 left-0 right-0 z-50 w-full max-w-3xl mx-auto mt-6 rounded-full bg-white/5 backdrop-blur-md border border-white/10 px-7 py-3 flex items-center justify-between shadow-md">
            <div className="flex items-center gap-3">
                <Image src={'/assets/logopreto.svg'} alt="logo" width={32} height={32} />
                <span className="text-white text-base font-normal">Space Vision</span>
            </div>
            <nav className="flex items-center gap-6">
                <a href="/" className="text-white font-normal text-xs hover:underline transition pr-10">Home</a>
            </nav>
        </div>
    );
}