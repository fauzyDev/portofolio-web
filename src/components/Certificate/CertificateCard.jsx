import React from 'react';
import Image from 'next/image';

const CertificateCard = ({ name, imgSrc }) => {
  return (
    <div className="bg-zinc-800 p-4 rounded-xl w-full max-w-lg reveal-up">
      <div className="flex items-center gap-2">
        <figure className="img-box flex flex-col items-center gap-2 rounded-lg w-full max-w-lg mx-auto relative">
          <Image src={imgSrc} loading="lazy" alt="Certificate" quality={75} className="img-cover w-full h-auto rounded-lg" />
          <figcaption className="text-center font-semibold text-zinc-200 mt-2">
            {name}
          </figcaption>
        </figure>
      </div>
    </div>
  );
}

export default CertificateCard;
