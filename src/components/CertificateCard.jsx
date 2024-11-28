import React from 'react';
import Image from 'next/image';

const CertificateCard = ({ name, imgSrc }) => {
    return (
        <div className="bg-zinc-800 p-5 rounded-xl min-w-[320px] grid-cols-1 lg:min-w-[420px]">
            <div className="flex flex-col items-center gap-2 mt-auto">
                <figure className="img-box flex flex-col items-center gap-2 rounded-lg">
                    <Image src={imgSrc} width={350} height={350} loading="lazy" className="img-cover" alt={name}/>
                <figcaption className="text-center font-semibold text-zinc-200 mt-2">
                    {name}
                </figcaption>
                </figure>
            </div>
        </div>
    );
}

export default CertificateCard;
