"use client"

import React from "react";
import { Divide as Hamburger } from 'hamburger-react';
import Navbar from "@/components/Navbar/Navbar";

const Header = () => {
    const [navOpen, setNavOpen] = React.useState(false)

    return (
        <header className="fixed top-0 left-0 w-full h-20 flex items-center z-40 bg-gradient-to-b from-zinc-900 to-zinc-900/0">
            <div className="max-w-screen-2xl w-full mx-auto px-4 flex justify-between items-center md:px-6 md:grid md:grid-cols-[1fr,3fr,1fr]">
                <div></div>
                <div className="relative md:justify-self-center">
                    <button className="menu-btn material-symbols md:hidden" aria-label="Opem nav" onClick={() => setNavOpen((prev) => !prev)}>
                        <Hamburger
                            toggled={navOpen}
                            size={25}
                            strokeWidth={2}
                            rotate={0}
                            color="#fff"
                            borderRadius={0}
                            animationDuration={0.3}
                            aria-label="Toggle navigation menu"
                        />
                    </button>
                    <Navbar navOpen={navOpen} />
                </div>
                <a href="#contact" className="btn btn-secondary hover:bg-slate-400 max-md:hidden md:justify-self-end">
                    Contact Me
                </a>
            </div>
        </header>
    );
}

export default Header;
