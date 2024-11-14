"use client"

import React from "react";
import Image from "next/image";
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import Navbar from "./Navbar";

const Header = () => {
    const [navOpen, setNavOpen] = React.useState(false)

    return (
        <header className="fixed top-0 left-0 w-full h-20 flex items-center z-40 bg-gradient-to-b from-zinc-900 to-zinc-900/0">
            <div className="max-w-screen-2xl w-full mx-auto px-4 flex justify-between items-center md:px-6 md:grid md:grid-cols-[1fr,3fr,1fr]">
                <h1>
                    <a className="logo">
                        <Image src="/images/logo.webp" width={40} height={40} alt="image" /> 
                    </a>
                </h1>
                <div className="relative md:justify-self-center">
                  <button className="w-10 h-10 grid place-items-center bg-zinc-50/10 rounded-xl ring-inset ring-1 ring-zinc-50/[0.02] backdrop-blur-2xl hover:bg-zinc-50/15 transition-[transform,background-color] active:scale-95 md:hidden" onClick={() => setNavOpen((prev) => !prev)}>
                    {navOpen ? <CloseRoundedIcon/> : <MenuRoundedIcon/> }
                  </button>
                    <Navbar navOpen={navOpen}/>
                </div>
                <a href="#contact" className="btn btn-secondary max-md:hidden md:justify-self-end">
                    Contact Me
                </a>
            </div>
        </header>
    );
}

export default Header;
