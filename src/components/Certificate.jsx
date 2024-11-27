import React from 'react';
import CertificateCard from './CertificateCard';

const certificate = [
    {
      name: 'Belajar Dasar-Dasar DevOps',
      imgSrc: '/images/sertifikat-devops.png',
    },
    {
      name: 'Belajar Dasar Pemrograman JavaScript',
      imgSrc: '/images/',
    },
    {
      name: 'Belajar Membuat Aplikasi Back-End untuk Pemula',
      imgSrc: '/images/',
    },
    {
      name: 'Cloud Practitioner Essentials (Belajar Dasar AWS Cloud)',
      imgSrc: '/images/',
    },
    {
      name: 'Cooming soon',
      imgSrc: '/images/',
    },
  ];

const Certificate = () => {

    return (
        <section id="certificate" className="section overflow-hidden">
            <div className="container">
                <h2 className="headline-2 mb-8 reveal-up">
                  Certif<span className="headline-5">icate</span>
                </h2>
                <div className="scrub-slide flex items-stretch gap-3 w-fit">
                    {certificate.map(({
                        name, imgSrc
                    }, key) => (
                        <CertificateCard key={key} name={name} imgSrc={imgSrc}/>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Certificate;
