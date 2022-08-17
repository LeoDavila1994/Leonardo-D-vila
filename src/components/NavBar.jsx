import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import Loader from './Loader';

const NavBar = () => {

    const navigate = useNavigate();

    useEffect(() => {

        const loading = () =>{
            setIsLoading(false)
        }
        setTimeout(loading, 2000)
        navigate("/");
    },[]);

    const [isLoading, setIsLoading] = useState(true);
    const [ homeColor, setHomeColor ] = useState("salmon");
    const [ aboutColor, setAboutColor ] = useState("white");
    const [ skillsColor, setSkillsColor ] = useState("white");
    const [ projectsColor, setProjectsColor ] = useState("white");
    const [ contactColor, setContactColor ] = useState("white");

    const home = () => {
        navigate("/");
        setHomeColor("salmon");
        setAboutColor("white");
        setSkillsColor("white");
        setProjectsColor("white");
        setContactColor("white");
    }

    const about = () => {
        navigate("/about");
        setHomeColor("white");
        setAboutColor("salmon");
        setSkillsColor("white");
        setProjectsColor("white");
        setContactColor("white");
    }

    const skills = () => {
        navigate("/skills");
        setHomeColor("white");
        setAboutColor("white");
        setSkillsColor("salmon");
        setProjectsColor("white");
        setContactColor("white");
    }

    const projects = () => {
        navigate("/projects");
        setHomeColor("white");
        setAboutColor("white");
        setSkillsColor("white");
        setProjectsColor("salmon");
        setContactColor("white");
    }

    const contact = () => {
        navigate("/contact");
        setHomeColor("white");
        setAboutColor("white");
        setSkillsColor("white");
        setProjectsColor("white");
        setContactColor("salmon");
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
                        <label htmlFor="navbar"><p onClick={home}  mycustom={homeColor}>Inicio</p></label>
                        <label htmlFor="navbar"><p onClick={about} mycustom={aboutColor}>Sobre mi</p></label>
                        <label htmlFor="navbar"><p onClick={skills} mycustom={skillsColor}>Habilidades</p></label>
                        <label htmlFor="navbar"><p onClick={projects} mycustom={projectsColor}>Proyectos</p></label>
                        <label htmlFor="navbar"><p onClick={contact} mycustom={contactColor}>Contacto</p></label>
                    </div>
                </>
            )}

        </>
    );
};

export default NavBar;