import React from 'react';
import Image from 'next/image';

const Project = ({ imgSrc, title, tags, projectLink }) => {
    return (
        <div className="">
            <figure className="">
                <Image src={imgSrc} width={32} height={32} loading="lazy" className="img-cover" alt=""/> 
            </figure>
            <div className="">
                <div>
                    <h3 className="title-1">
                        {title}
                    </h3>
                    <div className="">
                        {tags.map((label, key) => null)}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Project;
