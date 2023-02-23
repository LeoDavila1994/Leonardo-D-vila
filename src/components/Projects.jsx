import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import BackProjects from './BackProjects';
import FrontProjects from './FrontProjects';

const Projects = () => {

    const swich = useSelector(state => state.swich);

    const [ proyects, setProyects ] = useState(true);

    const changeBackend = () => {
        setProyects(false)
    }

    const changeFrontend = () => {
        setProyects(true)
    }


    return (
        <div className='projects-container'>
            <div className="projects-title-container">
                <h2 style={{color: `${swich? "#f5f5f7":"#313132"}`}}><span onClick={changeFrontend} style={{color: `${proyects ? "salmon" : swich? "#f5f5f7":"#313132"}`, cursor: "pointer"}}>Frontend</span> / <span onClick={changeBackend}
                style={{color: `${proyects ? swich? "#f5f5f7":"#313132" : "salmon"}`, cursor: "pointer"}}
                >Backend</span></h2>
            </div>
            { proyects ? <FrontProjects /> : <BackProjects />}
        </div>
    );
};

export default Projects;
