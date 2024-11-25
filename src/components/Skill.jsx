import React from 'react';
import SkillCard from './SkillCard';

const skillItem = [
    {
      imgSrc: '/images/javascript.svg',
      label: 'JavaScript',
      desc: 'Language Programming',
      progress: '52'
    },
    {
      imgSrc: '/images/nodejs.svg',
      label: 'NodeJS',
      desc: 'Web Server',
      progress: '15'
    },
    {
      imgSrc: '/images/expressjs.svg',
      label: 'ExpressJS',
      desc: 'Node Framework',
      progress: '20'
    },
    {
      imgSrc: '/images/nextjs.svg',
      label: 'Next JS',
      desc: 'Framework',
      progress: '40'
    },
    {
      imgSrc: '/images/react.svg',
      label: 'React',
      desc: 'Framework',
      progress: '40'
    },
    {
      imgSrc: '/images/tailwindcss.svg',
      label: 'TailwindCSS',
      desc: 'User Interface',
      progress: '27'
    },
  ];

const Skill = () => {
    return (
        <section id="tools" className="section">
            <div className="container">
                <h2 className="headline-2 reveal-up">
                Tech Stack
                </h2>
                <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch]">                
                   Advanced technology I use to create websites.
                </p>
                <div className="grid gap-3 grid-cols-[repeat(auto+fill,_minmax(250px,_1fr))]">
                    {
                        skillItem.map(({
                            imgSrc, label, desc, progress
                        }, key)=> (
                            <SkillCard key={key} imgSrc={imgSrc} label={label} desc={desc} progress={progress} classes="reveal-up"/>
                        ))
                    }
                </div>
            </div>
        </section>
    );
}

export default Skill;
