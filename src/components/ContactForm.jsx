import React, { useState, useEffect } from 'react'
import axios from 'axios'
import $ from 'jquery'
const ContactForm = () => {
    const [state, setState] = useState({
        feedback: '',
        name: '',
        email: '',
    })
    const { feedback, name, email } = state
    const handleChange = event => {
        setState({ ...state, [event.target.name]: event.target.value })
    }
    const handleSubmit = event => {
        event.preventDefault()
        const templateId = 'template_u4g4a8q'
        sendFeedback(templateId, { 'message': feedback, 'from_name': name, 'reply_to': email, 'from_email': email })
    }


    function sendFeedback(templateId, variables) {
        const data = {
            service_id: 'service_fktj4re',
            template_id: templateId,
            user_id: 'ogLXnKGK9Toq-0ATz',
            template_params: variables,
        }
     
        $.ajax('https://api.emailjs.com/api/v1.0/email/send', {
            type: 'POST',
            data: JSON.stringify(data),
            contentType: 'application/json'
        }).done(function () {
            alert('Your mail is sent!');
        }).fail(function (error) {
            alert('Oops... ' + JSON.stringify(error));
        });


        // window.emailjs.send(
        //     'service_fktj4re',
        //     templateId,
        //     variables
        // ).then(res => {
        //     console.log('Email successfully sent!')
        // })
        //     // Handle errors here however you like, or use a React error boundary
        //     .catch(err => console.error('Oh well, you failed. Here some thoughts on the error that occured:', err))
    }

    return (
        <>
            <form className="test-mailing">
                <h1>Contact Us</h1>
                <div>
                    <input type='text'
                        id='name'
                        name='name'
                        onChange={handleChange}
                        placeholder="Enter name"
                        required
                        value={name}
                        style={{width: '100%', lineHeight: '50px'}}
                        className='form-control mb-4'
                    />
                    <input type='text'
                        id='email'
                        name='email'
                        onChange={handleChange}
                        placeholder="Enter email"
                        required
                        value={email}
                        style={{width: '100%', lineHeight: '50px'}}
                        className='form-control mb-4'
                    />
                    <textarea
                        id="test-mailing"
                        name="feedback"
                        onChange={handleChange}
                        placeholder="Enter message"
                        required
                        value={feedback}
                        className='form-control'
                        style={{ width: '100%', height: '150px' }}
                    />
                </div>
                <input type="button" value="Submit" className="btn btn-outline-light mt-4" onClick={handleSubmit} />
            </form>
        </>
    )
}

export default ContactForm