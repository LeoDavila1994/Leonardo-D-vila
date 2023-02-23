import React from 'react';
import { useSelector } from 'react-redux';
import beach from "../images/Playa.jpg";
import office from "../images/Oficina.jpg";
import computer from "../images/Computadora.jpg";
import family from "../images/Familia.jpg";
import code from "../images/Codigo2.jpg";

const About = () => {

    const swich = useSelector(state => state.swich);

    return (
        <div className='about-container'>
            <div className="about-img-container">
                <div className="picture general-shadow" style={{backgroundImage: `url(${beach})`}}></div>
                <div className="picture two" style={{backgroundImage: `url(${office})`}}></div>
                <div className="picture thre" style={{backgroundImage: `url(${computer})`}}></div>
                <div className="picture four" style={{backgroundImage: `url(${family})`}}></div>
                <div className="picture general-shadow" style={{backgroundImage: `url(${code})`}}></div>
            </div>
            <div className='about-title-container'>
                <h2 style={{color: `${swich? "#f5f5f7":"#313132"}`}}>SOBRE MI</h2>
            </div>
            <div className="about-text-container">
                <p style={{color: `${swich? "#f5f5f7":"#6e6e73"}`}}>
                La programación es algo que me ha deslumbrado completamente ya que va muy acorde a mi personalidad y mis gustos, siempre he tenido una gran afición por las computadoras y la tecnología y ahora que me encuentro en este camino estoy tan satisfecho de poder aprender día con día, me gusta pasar tiempo con mi familia y amigos, los videojuegos y de ves en cuando salir a conocer nuevos lugares.
                </p>
            </div>
        </div>
    );
};

export default About;