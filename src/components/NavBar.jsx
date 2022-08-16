import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import Loader from './Loader';

const NavBar = () => {

    useEffect(() => {

        const loading = () =>{
            setIsLoading(false)
        }
        setTimeout(loading, 2000)
    },[]);

    const [isLoading, setIsLoading] = useState(true);

    const navigate = useNavigate();

    const home = () => {
        navigate("/");
    }

    const about = () => {
        navigate("/about");
    }

    const skills = () => {
        navigate("/skills");
    }

    const projects = () => {
        navigate("/projects");
    }

    const contact = () => {
        navigate("/contact");
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
                        <label htmlFor="navbar"><p onClick={home}>Inicio</p></label>
                        <label htmlFor="navbar"><p onClick={about}>Sobre mi</p></label>
                        <label htmlFor="navbar"><p onClick={skills}>Habilidades</p></label>
                        <label htmlFor="navbar"><p onClick={projects}>Proyectos</p></label>
                        <label htmlFor="navbar"><p onClick={contact}>Contacto</p></label>
                    </div>
                </>
            )}

        </>
    );
};

export default NavBar;