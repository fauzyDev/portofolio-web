import React from 'react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Buttons } from './Button';

const sitemap = [
    {
      label: 'Home',
      href: '#home'
    },
    {
      label: 'About',
      href: '#about'
    },
    {
      label: 'Tech Stack',
      href: '#tools'
    },
    {
      label: 'Certificate',
      href: '#certificate'
    },
    {
      label: 'Contact me',
      href: '#contact'
    }
  ];
  
  const socials = [
    {
      label: 'GitHub',
      href: 'https://github.com/fauzyDev'
    },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/halif-fauzy'
    },
    {
      label: 'Instagram',
      href: 'https://www.instagram.com/fz_code4fun'
    },
  ];

const Footer = () => {
    return (
        <footer className="section">
            <div className="container">
                <div className="lg:grid lg:grid-cols-2">
                    <div className="mb-10">
                        <h2 className="headline-2 mb-8 lg:max-w-[12ch] reveal-up">
                            Let&apos;s work <span className="headline-5">together today!</span>
                        </h2>
                        <Buttons href="mailto:haliffauzy45@gmail.com" label="Start project" icon={<ArrowForwardIcon/>} classes="reveal-up"/>
                    </div>
                    <div className="grid grid-cols-2 gap-4 lg:pl-20">
                        <div>
                            <p className="mb-2 reveal-up">Sitemap</p>
                            <ul>
                                {sitemap.map(({ label, href }, key) => (
                                    <li key={key}>
                                        <a href={href} className="block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200">
                                            {label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <p className="mb-2 reveal-up">Socials</p>
                            <ul>
                                {socials.map(({ label, href }, key) => (
                                    <li key={key}>
                                        <a href={href} rel="noopener noreferrer" target="_blank" className="block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200 reveal-up">
                                            {label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-between pt-10 mb-8">
                    <div className="w-16 h-16"></div>
                    <p className="text-zinc-300 text-sm reveal-up font-semibold">
                        &copy; 2024 <span className="text-zinc-50 font-bold">Fauzy</span>
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
