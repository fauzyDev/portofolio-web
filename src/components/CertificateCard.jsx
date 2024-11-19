import React from 'react';
import Image from 'next/image';
import StarIcon from '@mui/icons-material/Star';

const rating = new Array(5)
rating.fill({
    icon: <StarIcon/>,
    style: { fontVariationSetting: '"FILL" 1' }
})
const CertificateCard = ({ content, name, imgSrc, company }) => {
    return (
        <div className="bg-zinc-800 p-5 rounded-xl min-w-[320px] flex flex-col lg:min-w-[420px]">
            <div className="flex items-center gap-1 mb-3">
                {rating.map(({ icon, style }, key) => (
                    <span key={key} className="material-symbols text-yellow-300 text-[18px]" style={style}>
                        {icon}
                    </span>
                ))}
            </div>
            <p className="text-zinc-500 mb-8 ">
                {content}
            </p>
            <div className="flex items-center gap-2 mt-auto">
                <figure className="img-box rounded-lg">
                    <Image src={imgSrc} width={44} height={44} loading="lazy" className="img-cover" alt={name}/>
                </figure>
                <div>
                    <p>{name}</p>
                    <p className="text-xs text-zinc-400 tracking-wider">
                        {company}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default CertificateCard;
