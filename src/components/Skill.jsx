import React from 'react';
import SkillCard from './SkillCard';

const skillItem = [
    {
      imgSrc: '/images/figma.svg',
      label: 'Figma',
      desc: 'Design tool',
      className: 'fade-right'
    },
    {
      imgSrc: '/images/css3.svg',
      label: 'CSS',
      desc: 'User Interface',
      className: 'fade-left'
    },
    {
      imgSrc: '/images/javascript.svg',
      label: 'JavaScript',
      desc: 'Interaction',
      className: 'fade-right'
    },
    {
      imgSrc: '/images/nodejs.svg',
      label: 'NodeJS',
      desc: 'Web Server',
      className: 'fade-left'
    },
    {
      imgSrc: '/images/expressjs.svg',
      label: 'ExpressJS',
      desc: 'Node Framework',
      className: 'fade-right'
    },
    {
      imgSrc: '/images/mongodb.svg',
      label: 'MongoDB',
      desc: 'Database',
      className: 'fade-left'
    },
    {
      imgSrc: '/images/react.svg',
      label: 'React',
      desc: 'Framework',
      className: 'fade-right'
    },
    {
      imgSrc: '/images/tailwindcss.svg',
      label: 'TailwindCSS',
      desc: 'User Interface',
      className: 'fade-left'
    },
  ];

const Skill = () => {
    return (
        <section id="tools" className="section">
            <div className="container">
                <h2 className="headline-2 reveal-up">
                Essential Tools I use
                </h2>
                <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch]">
                Discover the powerful tools and technologies I use to create exceptional, 
                high-performing websites & applications.
                </p>
                <div className="grid gap-3 grid-cols-[repeat(auto+fill,_minmax(250px,_1fr))]">
                    {
                        skillItem.map(({
                            imgSrc, label, desc, className
                        }, key)=> (
                            <SkillCard key={key} imgSrc={imgSrc} label={label} desc={desc} classes={`reveal-up ${className}`}/>
                        ))
                    }
                </div>
            </div>
        </section>
    );
}

export default Skill;
