import React from 'react';
import Project from './Project';
import response from "data/response.json"
import project1 from "@/assets/images/project1.webp";
import project2 from "@/assets/images/project2.webp";
import project3 from "@/assets/images/project3.webp";
import project4 from "@/assets/images/cooming.webp";

const project = [
  {
    type: "image",
    imgSrc: project2,
    title: 'Spotify Clone',
    tags: ['API', 'MVC', 'Development'],
    projectLink: 'https://github.com/fauzyDev/Spotify-Clone'
  },
  {
    type: "image",
    imgSrc: project1,
    title: 'Fananime list',
    tags: ['API', 'SPA'],
    projectLink: 'https://github.com/fauzyDev/Fananime-List'
  },
  {
    type: "image",
    imgSrc: project3,
    title: 'Miko Ai | Chat ai',
    tags: ['Development', 'API'],
    projectLink: 'https://github.com/fauzyDev/MIKOCHAT-AI'
  },
  {
    type: "image",
    imgSrc: project4,
    title: 'Album foto & video online',
    tags: ['Development', 'API'],
    projectLink: 'https://github.com/fauzyDev/Frontend-Web-album'
  },
  {
    type: "json",
    title: 'Cek Ongkir API',
    tags: ['Express.js', 'API'],
    jsonResponse: response,
    projectLink: 'https://github.com/fauzyDev/cek-ongkir'
  },
];

const ProjectCard = () => {
  return (
    <section id="project" className="section">
      <div className="container">
        <h2 className="headline-2 mb-8 reveal-up">
          My <span className="headline-5">portfolio</span> highlights
        </h2>
        <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
          {project.map(({
            type, jsonResponse, imgSrc, title, tags, projectLink
          }, key) => (
            <Project key={key} type={type} jsonResponse={jsonResponse} imgSrc={imgSrc} title={title} tags={tags} projectLink={projectLink} classes="reveal-up" />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectCard;
