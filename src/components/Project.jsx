import React from 'react';
import Image from 'next/image';

const Project = ({ imgSrc, title, tags, projectLink, classes }) => {
    return (
        <div className={`relative p-4 rounded-2xl bg-zinc-800 hover:bg-zinc-700/50 active:bg-zinc-700/60 ring-1 ring-inset ring-zinc-50/5 transition-colors ${classes}`}>
            <figure className="img-box aspect-square rounded-lg mb-4">
                <Image src={imgSrc} width={10} height={10} loading="lazy" className="img-cover" alt="image"/> 
            </figure>
            <div className="flex items-center justify-between gap-4">
                <div>
                    <h3 className="title-1 mb-3">
                        {title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-2">
                        {tags.map((label, key) => (
                            <span key={key} className="h-8 text-sm text-zinc-400 bg-zinc-50/5 grid items-center px-3 rounded-lg ">
                                {label}
                            </span>
                        ))}
                    </div>
                </div>
                <div className="w-11 h-11 rounded-lg grid place-items-center bg-sky-400 text-zinc-950 shrink-0">
                    <span className="material-symbols" aria-hidden="true">
                        {/* icon */}
                    </span>
                </div>
            </div>
            <a href={projectLink} target="_blank" className="absolute inset-0">
                {/* icon */}
            </a>
        </div>
    );
}

export default Project;