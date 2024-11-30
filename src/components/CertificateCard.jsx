import React from 'react';
import Image from 'next/image';

const CertificateCard = ({ name, imgSrc }) => {
    return (
        <div className="bg-zinc-800 p-4 rounded-xl w-full max-w-lg reveal-up">
          <div className="flex items-center gap-2">
            <figure className="img-box flex flex-col items-center gap-2 rounded-lg w-full relative">
                <Image src={imgSrc} alt={name} layout="responsive" width={800} height={600} className="img-cover rounded-lg" loading="lazy"/>
              <figcaption className="text-center font-semibold text-zinc-200 mt-2">
                {name}
              </figcaption>
            </figure>
          </div>
        </div>
    );
}

export default CertificateCard;
