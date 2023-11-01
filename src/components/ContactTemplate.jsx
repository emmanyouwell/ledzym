import React, { useState } from 'react'
import $ from 'jquery'
import Toast from 'react-bootstrap/Toast'
import NavbarComponent from './Navbar'
import FooterBootstrap from './FooterBootstrap'
const ContactTemplate = () => {
    const [showA, setShowA] = useState(false)
    const toggleShowA = () => setShowA(!showA);
    const [state, setState] = React.useState({
        feedback: '',
        name: '',
        email: '',
        organization: ''
    })
    const { feedback, name, email, organization } = state
    const handleChange = event => {
        setState({ ...state, [event.target.name]: event.target.value })
    }
    const handleSubmit = event => {
        event.preventDefault()
        const templateId = 'template_u4g4a8q'
        sendFeedback(templateId, { 'message': feedback, 'from_name': name, 'reply_to': email, 'from_email': email, 'to_name': 'Ledzym Computer Trading' })
    }
    const sendFeedback = (templateId, variables) => {
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
        <>
            <NavbarComponent />
            <div className="toast-container" style={{ display: 'absolute', top: '100px', right: '5%' }}>
                <Toast show={showA} onClose={toggleShowA} bg='info'>
                    <Toast.Header>
                        <img
                            src="holder.js/20x20?text=%20"
                            className="rounded me-2"
                            alt=""
                        />
                        <strong className="me-auto">Email sent successfully!</strong>

                    </Toast.Header>
                    <Toast.Body>Thank you for your feedback! Have a nice day!</Toast.Body>
                </Toast>
            </div>
            <section className='p-lg-5 p-3'>
                <div style={{ minWidth: '40%' }}>
                    <form className="d-flex flex-column">
                        <h1 className='text-white fw-bold display-3 text-center mb-4'> <i className="fa-solid fa-phone fa-shake"></i> Contact Us</h1>
                        <div className="row">
                            <div className='form-group col-md-6'>
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
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="orgName" className='text-white form-label'>Organization <span style={{ fontSize: '0.7rem' }}>(optional)</span></label>
                                <input type="text"
                                    id='orgName'
                                    name='organization'
                                    onChange={handleChange}
                                    placeholder='Enter organization'
                                    required
                                    value={organization}
                                    style={{ width: '100%', lineHeight: '30px' }}
                                    className='form-control mb-4'
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12 form-group">
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
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="col-md-12 form-group">
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
                        </div>
                        <div className="row mb-3">
                            <div className="col-md-6 form-group">
                                <label htmlFor="service" className='text-white form-label'>Service</label>
                                <select name="service" id="service" className='form-select'>
                                    <option defaultValue='Choose'>Choose</option>
                                    <option value="CCTV Installation">CCTV Installation</option>
                                    <option value="Solar Street Lights Supplies and Installation">Solar Street Lights Supplies and Installation</option>
                                    <option value="Solar Power System Installation">Solar Power System Installation </option>
                                    <option value="Fiber Optics Cabling">Fiber Optics Cabling </option>
                                    <option value="Wireless Networks">Wireless Networks </option>
                                    <option value="Structural Cabling">Structural Cabling</option>
                                    <option value="Public Address System">Public Address System</option>
                                    <option value="Access Control Systems">Access Control Systems</option>
                                    <option value="Biometrics Systems">Biometrics Systems</option>
                                    <option value="Electric Fence">Electric Fence</option>
                                    <option value="Automatic Gates and Barriers">Automatic Gates and Barriers</option>
                                </select>
                            </div>
                        </div>

                        <input type="button" value="Submit" className="btn btn-outline-light mt-4 align-self-end" onClick={handleSubmit} />
                    </form>
                </div>


            </section>
            <FooterBootstrap />

            {/* <div className="content">

            <div className='container'>
                <div className='row'>
                    <div className='col-md-5 mr-auto'>
                        <h3 className='mb-3'>Let's work together</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae sequi, ipsa hic alias officia facilis
                            eveniet, neque laborum cumque maxime soluta. Neque atque necessitatibus ipsam sequi soluta magni, iste vero
                            fuga inventore, explicabo totam quis quia nemo possimus cupiditate doloribus?</p>
                        <p>Quasi optio numquam pariatur amet laudantium, dicta ullam obcaecati nihil eveniet et aperiam beatae illum
                            vitae in asperiores, a ex. Voluptates accusantium, beatae dolorem natus delectus nostrum, iusto nemo optio
                            quas eum, quis a in reprehenderit totam, sequi distinctio impedit.</p>
                        <p>Dolor aliquid, commodi vitae dolorum veniam amet error! Nemo nam quibusdam delectus dolore eveniet officia
                            harum eum sit magnam possimus. Eum optio dolores repellat ea impedit, in unde, rem ipsam rerum autem iusto
                            vero facilis blanditiis explicabo sapiente consequatur provident? <a href="info.com">info@mywebsite.com</a></p>

                    </div>

                    <div className="col-md-6">
                        <div className="box">
                            <h3 className="heading">How Can We Help?</h3>
                            <form className="mb-5" method="post" id="contactForm" name="contactForm">
                                <div className="row">

                                    <div className="col-md-6 form-group">
                                        <label htmlFor="name" className="col-form-label">Name *</label>
                                        <input type="text" className="form-control" name="name" id="name" placeholder="Your name" />
                                    </div>
                                    <div className="col-md-6 form-group">
                                        <label htmlFor="name" className="col-form-label">Organization</label>
                                        <input type="text" className="form-control" name="organization" id="organization"
                                            placeholder="Your organization" />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12 form-group">
                                        <label htmlFor="email" className="col-form-label">Email *</label>
                                        <input type="text" className="form-control" name="email" id="email" placeholder="Your email address" />
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-md-12 form-group">
                                        <label htmlFor="message" className="col-form-label">Project Description *</label>
                                        <textarea className="form-control" name="message" id="message" cols="30" rows="7"></textarea>
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <div className="col-md-6 form-group">
                                        <label htmlFor="budget" className="col-form-label">Budget</label>
                                        <select className="custom-select" id="budget" name="budget">
                                            <option defaultValue='Choose'>Choose...</option>
                                            <option value="$1000 below">&lt; $1,000</option>
                                            <option value="$2,000 - $5,000">$2,000 - $5,000</option>
                                            <option value="$5,000 - $15,000">$5,000 - $15,000</option>
                                            <option value="$15,000 - $25,000">$15,000 - $25,000</option>
                                            <option value="$25,000 >">$25,000 &gt;</option>
                                        </select>
                                    </div>
                                    <div className="col-md-6 form-group">
                                        <label htmlFor="message" className="col-form-label">Target Lunch</label>
                                        <input type="text" className="form-control" name="date" id="date" placeholder="Example: January 15th" />
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-md-12">
                                        <input type="submit" value="Send Message" className="btn btn-block btn-primary rounded-0 py-2 px-4" />
                                        <span className="submitting"></span>
                                    </div>
                                </div>
                            </form>

                            <div id="form-message-warning mt-4"></div>
                            <div id="form-message-success">
                                Your message was sent, thank you!
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div> */}
        </>
    )
}

export default ContactTemplate