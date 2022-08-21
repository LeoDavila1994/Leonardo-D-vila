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

    const [enviado, setEnviado] = useState(false);
    const [emptyName, setEmptyName] = useState(false);
    const [emptyEmail, setEmptyEmail] = useState(false);
    const [emptyMensaje, setEmptyMensaje] = useState(false);

    const submit = e => {
        e.preventDefault();
        if (name != "" && email != "" && mensaje != "") {
            emailjs.sendForm("service_1jcabhh", "template_fqbxd3b", e.target, "WBQD4QTr00f6A6D7F")
                .then(response => setEnviado(true))
                .catch(error => console.log(error))

            setName("");
            setEmail("");
            setMensaje("");
            setEmptyName(false);
            setEmptyEmail(false);
            setEmptyMensaje(false);

            setTimeout(() => setEnviado(false), 3000);
        } else if (name === "" && email === "" && mensaje === ""){
            setEmptyName(true);
            setEmptyEmail(true);
            setEmptyMensaje(true);
        } else if(name != "" && email === "" && mensaje === ""){
            setEmptyEmail(true);
            setEmptyMensaje(true);
        } else if(name === "" && email != "" && mensaje === ""){
            setEmptyName(true);
            setEmptyMensaje(true);
        } else if(name === "" && email === "" && mensaje != ""){
            setEmptyName(true);
            setEmptyEmail(true);
        } else if(name === ""){
            setEmptyName(true);
        } else if (email === ""){
            setEmptyEmail(true);
        } else if (mensaje === ""){
            setEmptyMensaje(true);
        }
    }

    return (
        <div className='contact-container'>
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
                        <input type="text" id='name' className='form-input' value={name} onChange={e => setName(e.target.value)} name="user-name" placeholder={emptyName? "Campo Incorrecto" : undefined}/>
                        <label htmlFor='email'>Email:</label>
                        <input type="email" id='email' className='form-input' value={email} onChange={e => setEmail(e.target.value)} name="user-email" placeholder={emptyEmail? "Campo Incorrecto" : undefined}/>
                        <label htmlFor='mensaje'>Mensaje:</label>
                        <textarea className='form-area' id='mensaje' value={mensaje} onChange={e => setMensaje(e.target.value)} name="user-mensaje" placeholder={emptyMensaje? "Campo Incorrecto" : undefined}></textarea>
                    </div>
                    {enviado && (
                        <div className='succes'>
                            <p>Enviado con exito !</p>
                            <i className="fa-regular fa-circle-check"></i>
                        </div>
                    )}
                    <button className='btn-form'>Enviar</button>
                </form>
            </div>
        </div>
    );
};

export default Contact;