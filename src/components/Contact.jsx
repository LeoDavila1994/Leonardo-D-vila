import React from 'react';
import { useSelector } from 'react-redux';

const Contact = () => {

    const swich = useSelector(state => state.swich);

    return (
        <div className='contact-container' style={{backgroundColor: `${swich? "#414152":"#f5f5f7"}`}}>
            <div className="contact-card" style={{backgroundColor: `${swich? "#6e6e73":"white"}`}}>
                <div className='contact-title-container'>
                    <h2 style={{color: `${swich? "#f5f5f7":"#313132"}`}}>CONTACTO</h2>
                </div>
                <div className='contact-text-container'>
                    <p style={{color: `${swich? "#f5f5f7":"#313132"}`}}>¿Tienes algo en mente?</p>
                    <p style={{color: `${swich? "#f5f5f7":"#313132"}`}}>Bueno, ¡hagamoslo realidad!</p>
                </div>
                <div className="home-icons-container">
                    <a href="https://wa.me/524495921411" style={{color: `${swich? "pink":"salmon"}`}}><i className="fa-brands fa-square-whatsapp"></i></a>
                    <a href="https://www.linkedin.com/in/leodavila/" style={{color: `${swich? "pink":"salmon"}`}}><i className="fa-brands fa-linkedin"></i></a>
                    <a href="https://www.facebook.com/profile.php?id=1783522575" style={{color: `${swich? "pink":"salmon"}`}}><i className="fa-brands fa-square-facebook"></i></a>
                    <a href="https://www.instagram.com/liodavila1/" style={{color: `${swich? "pink":"salmon"}`}}><i className="fa-brands fa-square-instagram"></i></a>
                </div>
            </div>
        </div>
    );
};

export default Contact;