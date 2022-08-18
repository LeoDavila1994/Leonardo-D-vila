import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import Loader from './Loader';
import { useSelector, useDispatch } from 'react-redux';
import { setSwich } from "../store/slices/swich.slice";

const NavBar = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const swich = useSelector(state => state.swich);

    useEffect(() => {

        const loading = () => {
            setIsLoading(false)
        }
        setTimeout(loading, 2000)
        navigate("/");
    }, []);

    const [isLoading, setIsLoading] = useState(true);
    const [homeColor, setHomeColor] = useState("salmon");
    const [aboutColor, setAboutColor] = useState("white");
    const [skillsColor, setSkillsColor] = useState("white");
    const [projectsColor, setProjectsColor] = useState("white");
    const [contactColor, setContactColor] = useState("white");
    const [position, setPositon] = useState("left");

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

    const changePosition = () => {
        if (position === "left") {
            setPositon("rigth")
        } else {
            setPositon("left")
        }
        dispatch(setSwich());
    };

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
                        <label htmlFor="navbar"><p onClick={home} mycustom={homeColor}>Inicio</p></label>
                        <label htmlFor="navbar"><p onClick={about} mycustom={aboutColor}>Sobre mi</p></label>
                        <label htmlFor="navbar"><p onClick={skills} mycustom={skillsColor}>Habilidades</p></label>
                        <label htmlFor="navbar"><p onClick={projects} mycustom={projectsColor}>Proyectos</p></label>
                        <label htmlFor="navbar"><p onClick={contact} mycustom={contactColor}>Contacto</p></label>
                    </div>
                    <div className='swich-container'>
                        <div className='swich' style={{ backgroundColor: `${swich ? "#6e6e73" : "#30303133"}` }}>
                            <div className='btn-mode' custombtn={position} onClick={changePosition}></div>
                        </div>
                    </div>
                </>
            )}

        </>
    );
};

export default NavBar;