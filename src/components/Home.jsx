import React from 'react';
import { useSelector } from 'react-redux';
import cv from "../pdf/cv.pdf";

const Home = () => {

    const swich = useSelector(state => state.swich);

    return (
        <div className='home-container'>
            <div className="home-card-container" style={{ backgroundColor: `${swich ? "#6e6e73" : "white"}` }}>
                <div className="home-front-page"></div>
                <div className="home-img-container"></div>
                <div className='home-text-container'>
                    <h1 style={{ color: `${swich ? "#f5f5f7" : "#313132"}` }}>Hola soy Leo</h1>
                    <p style={{ color: `${swich ? "pink" : "salmon"}` }}>Desarrollador Frontend</p>
                    <div className='btn-resumen'>
                        <a href={cv} target="_blank" download="Leonardo_Dávila_FrontendDev"><i className="fa-solid fa-file"></i></a>
                    </div>
                </div>
                <div className="home-icons-container">
                    <a href="https://wa.me/524495921411" style={{ color: `${swich ? "pink" : "salmon"}` }}><i className="fa-brands fa-square-whatsapp"></i></a>
                    <a href="https://www.linkedin.com/in/leodavila/" style={{ color: `${swich ? "pink" : "salmon"}` }}><i className="fa-brands fa-linkedin"></i></a>
                    <a href="https://www.facebook.com/profile.php?id=1783522575" style={{ color: `${swich ? "pink" : "salmon"}` }}><i className="fa-brands fa-square-facebook"></i></a>
                    <a href="https://www.instagram.com/liodavila1/" style={{ color: `${swich ? "pink" : "salmon"}` }}><i className="fa-brands fa-square-instagram"></i></a>
                </div>
            </div>
        </div>
    );
};

export default Home;