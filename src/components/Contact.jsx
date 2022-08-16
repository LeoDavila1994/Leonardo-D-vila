import React from 'react';

const Contact = () => {
    return (
        <div className='contact-container'>
            <div className="contact-card">
                <div className='contact-title-container'>
                    <h2>CONTACTO</h2>
                </div>
                <div className='contact-text-container'>
                    <p>¿Tienes algo en mente?</p>
                    <p>Bueno, ¡hagamoslo realidad!</p>
                </div>
                <div className="home-icons-container">
                    <a href="https://wa.me/524495921411"><i className="fa-brands fa-square-whatsapp"></i></a>
                    <a href="https://www.linkedin.com/in/leodavila/"><i className="fa-brands fa-linkedin"></i></a>
                    <a href="https://www.facebook.com/profile.php?id=1783522575"><i className="fa-brands fa-square-facebook"></i></a>
                    <a href="https://www.instagram.com/liodavila1/"><i className="fa-brands fa-square-instagram"></i></a>
                </div>
            </div>
        </div>
    );
};

export default Contact;