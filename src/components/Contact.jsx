import { useState } from 'react';
import { useSelector } from 'react-redux';
import emailjs from '@emailjs/browser';
import React, { useRef } from 'react';


const Contact = () => {

    const swich = useSelector(state => state.swich);

    const form = useRef();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [mensaje, setMensaje] = useState("");

    const submit = e => {
        e.preventDefault();

        emailjs.sendForm("service_1jcabhh", "template_fqbxd3b", e.target, "WBQD4QTr00f6A6D7F")
            .then(response => console.log(response))
            .catch(error => console.log(error))
    }


    return (
        <div className='contact-container' style={{ backgroundColor: `${swich ? "#414152" : "#f5f5f7"}` }}>
            <div className="contact-card">
                <div className='contact-title-container'>
                    <h2 style={{ color: `${swich ? "#f5f5f7" : "#313132"}` }}>CONTACTO</h2>
                </div>
                <div className='contact-text-container'>
                    <p style={{ color: `${swich ? "#f5f5f7" : "#313132"}` }}>¿Tienes algo en mente?</p>
                    <p style={{ color: `${swich ? "#f5f5f7" : "#313132"}` }}>Bueno, ¡Hagamoslo realidad!</p>
                </div>
                <form className='form' onSubmit={submit} ref={form}>
                    <div className='form-container'>
                        <label htmlFor='name'>Nombre:</label>
                        <input type="text" id='name' className='form-input' value={name} onChange={e => setName(e.target.value)} name="user-name"/>
                        <label htmlFor='email'>Email:</label>
                        <input type="email" id='email' className='form-input' value={email} onChange={e => setEmail(e.target.value)} name="user-email"/>
                        <label htmlFor='mensaje'>Mensaje:</label>
                        <textarea className='form-area' id='mensaje' value={mensaje} onChange={e => setMensaje(e.target.value)} name="user-mensaje"></textarea>
                    </div>
                    <button className='btn-form'>Enviar</button>
                </form>
            </div>
        </div>
    );
};

export default Contact;