import React from 'react';
import CertificateCard from './CertificateCard';

import jaringanImg from '@/assets/images/sertifikat-jaringan.webp';
import devopsImg from '@/assets/images/sertifikat-devops.webp';
import jsImg from '@/assets/images/sertifikat-js.webp';
import beImg from '@/assets/images/sertifikat-be.webp';
import cldImg from '@/assets/images/sertifikat-cld.webp';

const certificate = [
  {
    name: 'Belajar Jaringan Komputer untuk Pemula',
    imgSrc: jaringanImg,
  },
  {
    name: 'Belajar Dasar-Dasar DevOps',
    imgSrc: devopsImg,
  },
  {
    name: 'Belajar Dasar Pemrograman JavaScript',
    imgSrc: jsImg,
  },
  {
    name: 'Belajar Membuat Aplikasi Back-End untuk Pemula',
    imgSrc: beImg,
  },
  {
    name: 'Cloud Practitioner Essentials (Belajar Dasar AWS Cloud)',
    imgSrc: cldImg,
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
