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
                        <label htmlFor="navbar"><p onClick={home}>Home</p></label>
                        <label htmlFor="navbar"><p onClick={about}>About</p></label>
                        <label htmlFor="navbar"><p onClick={skills}>Skills</p></label>
                        <label htmlFor="navbar"><p onClick={projects}>Projects</p></label>
                        <label htmlFor="navbar"><p onClick={contact}>Contact</p></label>
                    </div>
                </>
            )}

        </>
    );
};

export default NavBar;