import React from 'react';
import crud from "../images/miniatura-crud.png";
import lp from "../images/miniatura-lp.png";
import pkdx from "../images/miniatura-pkdx.png";
import rym from "../images/miniatura-rym.png";
import wa from "../images/miniatura-wa.png";
import ec from "../images/miniatura-ec.png";

const Projects = () => {
    return (
        <div className='projects-container'>
            <div className="projects-title-container">
                <h2>PROYECTOS</h2>
            </div>
            <div className="grid">
                <div className="projects-img-container img-1">
                    <a href="https://sunnyshop.netlify.app/"><img src={ec} className="projects-img" /></a>
                </div>
                <div className="projects-img-container img-2">
                    <a href="https://crudtousers.netlify.app/"><img src={crud} className="projects-img"/></a>
                </div>
                <div className="projects-img-container img-3">
                    <a href="https://weatherappnow.netlify.app/"><img src={wa} className="projects-img"/></a>
                </div>
                <div className="projects-img-container img-4">
                    <a href="https://pokedextotrainers.netlify.app/"><img src={pkdx} className="projects-img" /></a>
                </div>
                <div className="projects-img-container img-5">
                    <a href="https://multiverserickandmorty.netlify.app/"><img src={rym} className="projects-img"/></a>
                </div>
                <div className="projects-img-container img-6">
                    <a href="https://landingpagefmh.netlify.app/"><img src={lp} className="projects-img"/></a>
                </div>
            </div>
        </div>
    );
};

export default Projects;
