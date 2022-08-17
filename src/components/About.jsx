import React from 'react';
import { useSelector } from 'react-redux';

const About = () => {

    const swich = useSelector(state => state.swich);

    return (
        <div className='about-container' style={{backgroundColor: `${swich? "#414152":"#f5f5f7"}`}}>
            <div className="about-img-container">
                <div className="picture one"></div>
                <div className="picture two"></div>
                <div className="picture thre"></div>
                <div className="picture four"></div>
                <div className="picture five"></div>
            </div>
            <div className='about-title-container'>
                <h2 style={{color: `${swich? "#f5f5f7":"#313132"}`}}>SOBRE MI</h2>
            </div>
            <div className="about-text-container">
                <p style={{color: `${swich? "#f5f5f7":"#6e6e73"}`}}>La programación es algo que me ha deslumbrado completamente ya que va muy acorde a mi personalidad y mis gustos, siempre he tenido una gran afición por las computadoras y la tecnología y ahora que me encuentro en este camino estoy tan satisfecho de poder aprender día con día y estoy muy emocionado de poder encontrar a la empresa que me de mi primera oportunidad de desempeñarme y crecer ya que estoy dispuesto a dar lo mejor de mi para así poder cumplir mis metas y demostrar que soy capaz.
                </p>
            </div>
        </div>
    );
};

export default About;