import React from 'react';
import Image from 'next/image';
import bannerImg from "@/assets/images/banner.webp"
import DownloadSharpIcon from '@mui/icons-material/DownloadSharp';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import { Buttons, ButtonExtend } from '../ui/Button';

const link = [
    {
        link: "https://www.linkedin.com/in/halif-fauzy"
    }
]

const linkDownload = [
    {
        download: "Halif_Fullstack_Developer.pdf",
        linkDownload: "https://drive.google.com/file/d/1-c-LYxXKS69d3GFVZHgmcEFUlruodQRN/view?usp=drivesdk"
    }
]

const Hero = () => {
    return (
        <section id="home" className="pt-28 lg:pt-36">
            <div className="container lg:grid lg:grid-cols-2 items-center lg:gap-10">
                <div>
                    <div className="flex items-center gap-3">
                        <div className="flex items-center gap-1.5 text-zinc-400 text-sm tracking-wide ">
                            <span className="relative w-2 h-2 rounded-full bg-emerald-400">
                                <span className="absolute inset-0 w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                            </span>
                            Available for work
                        </div>
                    </div>
                    <h2 className="font-sans headline-1">
                        Hello, My Name <span className="headline-3 font-sans">is Fauzy,</span> I&apos;am a Full<span className="headline-4 font-sans">Stack Web Developer</span>
                    </h2>
                    <div className="flex items-center gap-3 ">
                        {linkDownload.map(({ linkDownload, download }, key) => (
                            <Buttons key={key} href={linkDownload} download={download} label="Download CV" icon={<DownloadSharpIcon />} />
                        ))}

                        {link.map(({ link }, key) => (
                            <ButtonExtend key={key} href={link} label="Connect to Me" icon={<ArrowOutwardIcon />} />
                        ))}
                    </div>
                </div>
                <div className="hidden lg:block">
                    <figure className="w-full max-w-[480px] ml-auto bg-gradient-to-t from-sky-400 via-25% via-sky-400/40 to-65% rounded-[60px] overflow-hidden">
                        <Image src={bannerImg} priority fetchPriority="high" quality={75} alt="banner" />
                    </figure>
                </div>
            </div>
        </section>
    );
}

export default Hero;
