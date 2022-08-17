import React from 'react';
import html from "../images/html-5.svg";
import css from "../images/css-3.svg";
import js from "../images/javascript.svg";
import rc from "../images/react.svg";
import { useSelector } from 'react-redux';

const Skills = () => {

    const swich = useSelector(state => state.swich);

    return (
        <div className='skills-container' style={{backgroundColor: `${swich? "#414152":"#f5f5f7"}`}}>
            <div className='skills-img-container'></div>
            <div className='skills-title-container'>
                <h2 style={{color: `${swich? "#f5f5f7":"#313132"}`}}>HABILIDADES</h2>
            </div>
            <div className="skills-text-container">
                <div className="skills-icon-container">
                    <div className='skills-icon-subcontainer'>
                        <img src={html} className="skills-icon" />
                    </div>
                    <p style={{color: `${swich? "#f5f5f7":"#313132"}`}}>HTML 5</p>
                </div>
                <div className="skills-icon-container">
                    <div className='skills-icon-subcontainer'>
                        <img src={css} className="skills-icon" />
                    </div>
                    <p style={{color: `${swich? "#f5f5f7":"#313132"}`}}>CSS 3</p>
                </div>
                <div className="skills-icon-container">
                    <div className='skills-icon-subcontainer'>
                        <img src={js} className="skills-icon" />
                    </div>
                    <p style={{color: `${swich? "#f5f5f7":"#313132"}`}}>JAVA SCRIPT</p>
                </div>
                <div className="skills-icon-container">
                    <div className='skills-icon-subcontainer'>
                        <img src={rc} className="skills-icon" />
                    </div>
                    <p style={{color: `${swich? "#f5f5f7":"#313132"}`}}>REACT</p>
                </div>
            </div>
        </div>
    );
};

export default Skills;