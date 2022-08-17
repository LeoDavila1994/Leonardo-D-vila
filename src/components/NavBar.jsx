import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import Loader from './Loader';

const NavBar = () => {

    useEffect(() => {

        const loading = () =>{
            setIsLoading(false)
        }
        setTimeout(loading, 2000)
        navigate("/");
    },[]);

    const [isLoading, setIsLoading] = useState(true);
    const [ homeColor, setTextColor ] = useState(true);
    const [ aboutColor, setAboutColor ] = useState(false);
    const [ skillsColor, setSkillsColor ] = useState(false);
    const [ projectsColor, setProjectsColor ] = useState(false);
    const [ contactColor, setContactColor ] = useState(false);

    const navigate = useNavigate();

    const home = () => {
        navigate("/");
        setTextColor(true);
        setAboutColor(false);
        setSkillsColor(false);
        setProjectsColor(false);
        setContactColor(false);
    }

    const about = () => {
        navigate("/about");
        setTextColor(false);
        setAboutColor(true);
        setSkillsColor(false);
        setProjectsColor(false);
        setContactColor(false);
    }

    const skills = () => {
        navigate("/skills");
        setTextColor(false);
        setAboutColor(false);
        setSkillsColor(true);
        setProjectsColor(false);
        setContactColor(false);
    }

    const projects = () => {
        navigate("/projects");
        setTextColor(false);
        setAboutColor(false);
        setSkillsColor(false);
        setProjectsColor(true);
        setContactColor(false);
    }

    const contact = () => {
        navigate("/contact");
        setTextColor(false);
        setAboutColor(false);
        setSkillsColor(false);
        setProjectsColor(false);
        setContactColor(true);
    }


    return (
        <>
            {isLoading ? <Loader /> : (
                <>
                    <input type="checkbox" id='navbar' />
                    <div className='navbar-container'>
                        <label className='icon-container' htmlFor='navbar'>
                            <div className='icon-1'></div>
                            <div className="icon-2"></div>
                        </label>
                    </div>
                    <div className='menu'>
                        <label htmlFor="navbar"><p onClick={home} style={{color: `${homeColor? "salmon": "white"}`}}>Inicio</p></label>
                        <label htmlFor="navbar"><p onClick={about} style={{color: `${aboutColor? "salmon": "white"}`}}>Sobre mi</p></label>
                        <label htmlFor="navbar"><p onClick={skills} style={{color: `${skillsColor? "salmon": "white"}`}}>Habilidades</p></label>
                        <label htmlFor="navbar"><p onClick={projects} style={{color: `${projectsColor? "salmon": "white"}`}}>Proyectos</p></label>
                        <label htmlFor="navbar"><p onClick={contact} style={{color: `${contactColor? "salmon": "white"}`}}>Contacto</p></label>
                    </div>
                </>
            )}

        </>
    );
};

export default NavBar;