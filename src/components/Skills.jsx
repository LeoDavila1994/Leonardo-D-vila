import React from 'react';
import html from "../images/html-5.svg";
import css from "../images/css-3.svg";
import js from "../images/javascript.svg";
import rc from "../images/react.svg";

const Skills = () => {
    return (
        <div className='skills-container'>
            <div className='skills-img-container'></div>
            <div className='skills-title-container'>
                <h2>HABILIDADES</h2>
            </div>
            <div className="skills-text-container">
                <div className="skills-icon-container">
                    <div className='skills-icon-subcontainer'>
                        <img src={html} className="skills-icon" />
                    </div>
                    <p>HTML 5</p>
                    <p>91%</p>
                </div>
                <div className="skills-icon-container">
                    <div className='skills-icon-subcontainer'>
                        <img src={css} className="skills-icon" />
                    </div>
                    <p>CSS 3</p>
                    <p>93%</p>
                </div>
                <div className="skills-icon-container">
                    <div className='skills-icon-subcontainer'>
                        <img src={js} className="skills-icon" />
                    </div>
                    <p>JAVA SCRIPT</p>
                    <p>87%</p>
                </div>
                <div className="skills-icon-container">
                    <div className='skills-icon-subcontainer'>
                        <img src={rc} className="skills-icon" />
                    </div>
                    <p>REACT</p>
                    <p>89%</p>
                </div>
            </div>
        </div>
    );
};

export default Skills;