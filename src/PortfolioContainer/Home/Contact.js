
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Contact.css'

export default function Contact() {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_yqe170s', 'template_izdv2cz', form.current, 'Hbu6z8nAIuLaLbU_7')
            .then((result) => {
                console.log(result.text);
                toast("message sent")
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <div id="Contact" className='contact-me'>
            <h1>Contact Me</h1>

            <form ref={form} onSubmit={sendEmail}>
                <label>Name</label>
                <input type="text" name="user_name" placeholder='Enter Your Name...' />
                <label>Email</label>
                <input type="email" name="user_email" placeholder='Email Id...' />
                <label>Message</label>
                <textarea name="message" placeholder='Type Here...' />
                <input type="submit" value="Send" />
                <ToastContainer
                    position="top-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="dark"
                />
            </form>
        </div>
    )
}
