import React, { useState } from 'react'
import $ from 'jquery'
const ContactForm = ({showA}) => {
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
        sendFeedback(templateId, { 'message': feedback, 'from_name': name, 'reply_to': email, 'from_email': email, 'to_name': 'Ledzym Computer Trading' })
    }
    function sendFeedback(templateId, variables) {
        const data = {
            service_id: 'service_yz6mgm7',
            template_id: templateId,
            user_id: 'ogLXnKGK9Toq-0ATz',
            template_params: variables,
        }
        $.ajax('https://api.emailjs.com/api/v1.0/email/send', {
            type: 'POST',
            data: JSON.stringify(data),
            contentType: 'application/json'
        }).done(function () {
            showA()
        }).fail(function (error) {
            alert('Oops... ' + JSON.stringify(error));
        });
    }
   
    return (
        <div style={{minWidth: '30%'}}>

            

            <form className="d-flex flex-column">
                <h1 className='text-white fw-bold display-3 text-center mb-4'> <i className="fa-solid fa-phone fa-shake"></i> Contact Us</h1>
                <div className='form-group'>
                    <label htmlFor='name' className='text-white form-label'>Name</label>
                    <input type='text'
                        id='name'
                        name='name'
                        onChange={handleChange}
                        placeholder="Enter name"
                        required
                        value={name}
                        style={{ width: '100%', lineHeight: '30px' }}
                        className='form-control mb-4'
                    />
                    <label htmlFor="email" className='text-white form-label'>Email</label>
                    <input type='text'
                        id='email'
                        name='email'
                        onChange={handleChange}
                        placeholder="Enter email"
                        required
                        value={email}
                        style={{ width: '100%', lineHeight: '30px' }}
                        className='form-control mb-4'
                    />
                    <label htmlFor="feedback" className='text-white form-label'>Feedback</label>
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
                <input type="button" value="Submit" className="btn btn-outline-light mt-4 align-self-end" onClick={handleSubmit} />
            </form>
        </div>
    )
}

export default ContactForm