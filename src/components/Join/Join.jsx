import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'
import './join.css'

const Join = () => {
    const form = useRef()
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_xj396jd', 'template_9k6isdn', form.current, 'Zlkm1XT-qigX9tN8Y')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };


    return (
        <div className="join" id="join-us">

            <div className="left-j">
                <hr />
                <div>
                    <span className='stroke-text'>ready to </span>
                    <span>level up</span>
                </div>
                <div>
                    <span>your body </span>
                    <span className='stroke-text' >with us</span>
                </div>
            </div>
            <div className="right-j">
                <form action="" ref={form} className="email-container" onSubmit={sendEmail}>

                    <input type="email" placeholder='Enter your email' name='user_email' />
                    <button type='submit' className="btn btn-join">Join Now</button>
                </form>
            </div>

        </div>
    )
}

export default Join