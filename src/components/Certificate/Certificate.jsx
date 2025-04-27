import React from 'react';
import CertificateCard from './CertificateCard';

const certificate = [
  {
    name: 'Belajar Jaringan Komputer untuk Pemula',
    imgSrc: '/images/sertifikat-jaringan.webp',
  },
  {
    name: 'Belajar Dasar-Dasar DevOps',
    imgSrc: '/images/sertifikat-devops.webp',
  },
  {
    name: 'Belajar Dasar Pemrograman JavaScript',
    imgSrc: '/images/sertifikat-js.webp',
  },
  {
    name: 'Belajar Membuat Aplikasi Back-End untuk Pemula',
    imgSrc: '/images/sertifikat-be.webp',
  },
  {
    name: 'Cloud Practitioner Essentials (Belajar Dasar AWS Cloud)',
    imgSrc: '/images/sertifikat-cld.webp',
  },
];

const Certificate = () => {
  return (
    <section id="certificate" className="section overflow-hidden">
      <div className="container">
        <h2 className="headline-2 mb-8 reveal-up">
          Certif<span className="headline-5">icate</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4 p-4">
          {certificate.map(({
            name, imgSrc
          }, key) => (
            <CertificateCard key={key} name={name} imgSrc={imgSrc} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certificate;
