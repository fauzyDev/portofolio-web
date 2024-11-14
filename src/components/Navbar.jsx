"use client"

import React from "react";

const Navbar = ({ navOpen }) => {
    const lastActiveLink = React.useRef()
    const activeBox = React.useRef()
    const initActiveBox = () => {
      activeBox.current.style.top = lastActiveLink.current.offsetTop + 'px'
      activeBox.current.style.left = lastActiveLink.current.offsetleft + 'px'
      activeBox.current.style.width = lastActiveLink.current.offsetWidth + 'px'
      activeBox.current.style.heigh = lastActiveLink.current.offsetHeigh + 'px'
    }

    React.useEffect(initActiveBox, [])

    const activeLink = (event) => {
      lastActiveLink.current?.classList.remove('text-zinc-900 duration-500')
      event.target.classList.add('text-zinc-900 duration-500')
    }

    const navItems = [
        {
          label: 'Home',
          link: '#home',
          className: 'grid items-center h-9 px-4 text-sm font-medium tracking-wide text-zinc-50/50 hover:text-zinc-50 transition-colors text-zinc-900 duration-500',
          ref: lastActiveLink
        },
        {
          label: 'About',
          link: '#about',
          className: 'grid items-center h-9 px-4 text-sm font-medium tracking-wide text-zinc-50/50 hover:text-zinc-50 transition-colors'
        },
        {
          label: 'Work',
          link: '#work',
          className: 'grid items-center h-9 px-4 text-sm font-medium tracking-wide text-zinc-50/50 hover:text-zinc-50 transition-colors'
        },
        {
          label: 'Reviews',
          link: '#reviews',
          className: 'grid items-center h-9 px-4 text-sm font-medium tracking-wide text-zinc-50/50 hover:text-zinc-50 transition-colors'
        },
        {
          label: 'Contact',
          link: '#contact',
          className: 'grid items-center h-9 px-4 text-sm font-medium tracking-wide text-zinc-50/50 hover:text-zinc-50 transition-colors md:hidden'
        }
      ];

    return (
        <nav className={`absolute top-full mt-2 right-0 min-w-40 p-2 bg-zinc-50/10 rounded-2xl ring-inset ring-1 ring-zinc-50/5 transition-[opacity,transform,filter] ${
          navOpen ? 'opacity-100 scale-100 blur-0 visible' : 'scale-90 isolate blur-sm opacity-0 invisible'
        }`}>
            {navItems.map(({
                label, link, className, ref
            }, key) => (
                <a href={link} key={key} ref={ref} className={className} onClick={activeLink}>
                    {label}
                </a>
            ))}
            <div className="absolute top-2 left-2 right-2 h-9 bg-zinc-50 rounded-lg -z-10 transition-[top,left] duration-500" ref={activeBox}>

            </div>
        </nav>
    );
}

export default Navbar;
