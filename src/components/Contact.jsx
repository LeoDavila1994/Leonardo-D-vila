import React, { useState } from 'react';
import { useSelector } from 'react-redux';

const Contact = () => {

    const swich = useSelector(state => state.swich);

    const submit = e => {
        e.preventDefault();
    }

    return (
        <div className='contact-container' style={{backgroundColor: `${swich? "#414152":"#f5f5f7"}`}}>
            <div className="contact-card">
                <div className='contact-title-container'>
                    <h2 style={{color: `${swich? "#f5f5f7":"#313132"}`}}>CONTACTO</h2>
                </div>
                <div className='contact-text-container'>
                    <p style={{color: `${swich? "#f5f5f7":"#313132"}`}}>¿Tienes algo en mente?</p>
                    <p style={{color: `${swich? "#f5f5f7":"#313132"}`}}>Bueno, ¡Hagamoslo realidad!</p>
                </div>
                <form className='form' onSubmit={submit} name="contacto" netlify>
                    <div className='form-container'>
                        <p>Nombre:</p>
                        <input type="text" className='form-input'/>
                        <p>Email:</p>
                        <input type="email"className='form-input'/>
                        <p>Mensaje:</p>
                        <textarea className='form-area'></textarea>
                    </div>
                    <button className='btn-form'>Enviar</button>
                </form>
            </div>
        </div>
    );
};

export default Contact;