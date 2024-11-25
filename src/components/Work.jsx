import React from 'react';
import Project from './Project';

const works = [
    {
      imgSrc: '/images/',
      title: 'Spotify Clone',
      tags: ['API', 'MVC', 'Development'],
      projectLink: ''
    },
    {
      imgSrc: '/images/',
      title: 'Fananime list',
      tags: ['API', 'SPA'],
      projectLink: ''
    },
    {
      imgSrc: '/images/',
      title: 'Album foto & video online',
      tags: ['Development', 'API'],
      projectLink: ''
    },
  ];

const Work = () => {
    return (
        <section id="project" className="section">
            <div className="container">
              <h2 className="headline-2 mb-8 reveal-up">
                My <span className="headline-5">portfolio</span> highlights
              </h2>
              <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
                {works.map(({
                  imgSrc, title, tags, projectLink
                }, key) => (
                    <Project key={key} imgSrc={imgSrc} title={title} tags={tags} projectLink={projectLink} classes="reveal-up"/>
                ))}
              </div>
            </div>
        </section>
    );
}

export default Work;
