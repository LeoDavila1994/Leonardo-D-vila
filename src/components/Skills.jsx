import React from 'react';
import html from "../images/html-5.svg";
import css from "../images/css-3.svg";
import js from "../images/javascript.svg";
import rc from "../images/react.svg";
import nd from "../images/node.svg";
import exp from "../images/express.jpg";
import post from "../images/postgresql.png";
import { useSelector } from 'react-redux';

const Skills = () => {

    const swich = useSelector(state => state.swich);

    return (
        <div className='skills-container'>
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
                    <p style={{color: `${swich? "#f5f5f7":"#313132"}`}}>REACT JS</p>
                </div>
                <div className="skills-icon-container">
                    <div className='skills-icon-subcontainer' style={{transform: "scale(1.3"}}>
                        <img src={nd} className="skills-icon" />
                    </div>
                    <p style={{color: `${swich? "#f5f5f7":"#313132"}`}} >NODE JS</p>
                </div>
                <div className="skills-icon-container">
                    <div className='skills-icon-subcontainer' style={{transform: "scale(1.4"}}>
                        <img src={exp} className="skills-icon" />
                    </div>
                    <p style={{color: `${swich? "#f5f5f7":"#313132"}`}}>EXPRESS</p>
                </div>
                <div className="skills-icon-container">
                    <div className='skills-icon-subcontainer'>
                        <img src={post} className="skills-icon" />
                    </div>
                    <p style={{color: `${swich? "#f5f5f7":"#313132"}`}}>POSTGRESQL</p>
                </div>
            </div>
        </div>
    );
};

export default Skills;