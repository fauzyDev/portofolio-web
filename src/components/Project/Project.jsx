import React from 'react';
import Image from 'next/image';
import LaunchSharpIcon from '@mui/icons-material/LaunchSharp';
import JsonViewer from '../json/JsonViewer';

const Project = ({ type, jsonResponse, imgSrc, title, tags, projectLink, classes }) => {
    return (
        <div className={`relative p-4 rounded-2xl bg-zinc-800 hover:bg-zinc-700/50 active:bg-zinc-700/60 ring-1 ring-inset ring-zinc-50/5 transition-colors ${classes}`}>
            <figure className="img-box w-full max-w-lg mx-auto rounded-lg mb-4">
                {type === 'image' && imgSrc && (
                    <Image src={imgSrc} loading="lazy" quality={75} className="img-cover w-full h-auto object-contain" alt="Project" />
                )}
            </figure>
            {type === 'json' && jsonResponse && (
                <div className="max-h-[330px] overflow-auto bg-zinc-900 text-sm rounded-md p-4 mb-4">
                    <JsonViewer json={jsonResponse} />
                </div>
            )}
            <div className="flex items-center justify-between gap-4">
                <div>
                    <h3 className="title-1 mb-3">
                        {title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-  2">
                        {tags.map((label, key) => (
                            <span key={key} className="h-8 text-sm text-zinc-400 bg-zinc-50/5 grid items-center px-3 rounded-lg ">
                                {label}
                            </span>
                        ))}
                    </div>
                </div>
                <div className="w-11 h-11 rounded-lg grid place-items-center bg-sky-500 hover:bg-sky-400 text-zinc-950 shrink-0">
                    <a href={projectLink} rel="noopener noreferrer" target="_blank" aria-label="project" className="inset-0">
                        <span aria-hidden="true">
                            {<LaunchSharpIcon />}
                        </span>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Project;
