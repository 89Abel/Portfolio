import React, { useRef, useEffect, useState } from 'react'
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify'
import './Contact.css'

const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_ol7prkg', 'template_6pc889c', form.current, {
                publicKey: '-c0IakO_dvD6SMman',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                    toast.success("Message Sent Successfully !")
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };
    return (
        <>

            <main>
                <section id='contact'>
                    <div className="contact-left">
                        <h2 className='contact-left-title'>CONTACT ME</h2>
                        <h5 className='contact-left-subtitle'>I'd Love To Hear From You</h5>
                        <div className="contact-left-row">
                            <div className="contact-col">
                                <h3>Reach Through</h3>
                                <ul className='contact-col-lists'>
                                    <li><ion-icon name="location" id='icons'></ion-icon> Addis Ababa, Ethiopia</li>
                                    <li><ion-icon name="call" id='icons'></ion-icon> +251963032340</li>
                                    <li><ion-icon name="mail" id='icons'></ion-icon> Eyupics@gmail.com</li>
                                </ul>
                            </div>
                            <div className="contact-col">
                                <h3>Social Networks</h3>
                                <ul className='contact-col-lists'>
                                    <li><ion-icon name="logo-facebook" id='icons'></ion-icon> @Eyupics</li>
                                    <li><ion-icon name="logo-instagram" id='icons'></ion-icon> @Eyupics</li>
                                    <li><ion-icon name="logo-linkedin" id='icons'></ion-icon> @Eyupics</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="contact-right">
                        <h2 className='contact-right-title'>SEND A MESSAGE</h2>
                        <form ref={form} onSubmit={sendEmail}>
                            <div className="forms">
                                <div>
                                    <input type="text" name="user_name" placeholder='Your Name' />
                                </div>
                                <div>
                                    <input type="email" name="user_email" placeholder='someone@example.com' />
                                </div>
                                <div>
                                    <input type="text" name="user_subject" placeholder='Subject' />
                                </div>
                                <div>
                                    <textarea name="message" id="" cols="23" rows="5" placeholder='Message' />
                                </div>
                                <div>
                                    <button className='contact-btn' type='submit' value="Send">Send Message</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </section>
            </main>

        </>
    )
}

export default Contact