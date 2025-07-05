import React from 'react';
import SkillCard from './SkillCard';

const skillItem = [
  {
    title: "Language Programming",
    items: [
      {
        imgSrc: '/images/javascript.svg',
        label: 'JavaScript',
        desc: 'Language Programming',
      },
            {
        imgSrc: '/images/typescript.svg',
        label: 'TypeScript',
        desc: 'Language Programming',
      }
    ]
  },
  {
    title: "Styling",
    items: [
      {
        imgSrc: '/images/tailwindcss.svg',
        label: 'TailwindCSS',
        desc: 'User Interface',
      }
    ]
  },
  {
    title: "Runtime",
    items: [
      {
        imgSrc: '/images/nodejs.svg',
        label: 'NodeJS',
        desc: 'Web Server',
      }
    ]
  },
  {
    title: "Framework",
    items: [
      {
        imgSrc: '/images/expressjs.svg',
        label: 'ExpressJS',
        desc: 'Node Framework',
      },
      {
        imgSrc: '/images/nextjs.svg',
        label: 'Next JS',
        desc: 'Framework',
      },
      {
        imgSrc: '/images/react.svg',
        label: 'React',
        desc: 'Framework',
      },
    ]
  },
  {
    title: "ORM/Database",
    items: [
      {
        imgSrc: '/images/prisma.svg',
        label: 'Prisma ORM',
        desc: 'Database',
      }
    ]
  },
  {
    title: "Cloud Service",
    items: [
      {
        imgSrc: '/images/supabase.svg',
        label: 'Supabase',
        desc: 'Cloud Service',
      }
    ]
  },
  {
    title: "Hosting Platform",
    items: [
      {
        imgSrc: '/images/vercel.svg',
        label: 'Vercel',
        desc: 'Hosting',
      }
    ]
  },
  {
    title: "Package Manager",
    items: [
      {
        imgSrc: '/images/npm.svg',
        label: 'Node Package Manager',
        desc: 'Package Manager',
      }
    ]
  },
];

const Skill = () => {
  return (
    <section id="tools" className="section">
      <div className="container">
        <h2 className="headline-2 reveal-up">
          Tech <span className="headline-5">Stack</span>
        </h2>
        <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch]">
          Advanced technology I use to create websites.
        </p>
        <div className="grid gap-3 grid-cols-[repeat(auto+fill,_minmax(250px,_1fr))]">
          {skillItem.map((data, key) => (
            <div key={key}>
              <h5 className="text-lg mb-1 reveal-up">{data.title}</h5>
              <ul>
                {data.items.map(({ imgSrc, label, desc, progress }, key) => (
                  <SkillCard key={key} imgSrc={imgSrc} label={label} desc={desc} progress={progress} classes="reveal-up" />
                ))}
              </ul>
            </div>
          ))
          }
        </div>
      </div>
    </section>
  );
}

export default Skill;
