import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';
import TextField from '@mui/material/TextField';
import Fade from 'react-reveal/Fade';
import { TextareaAutosize } from '@mui/material';
import Swal from 'sweetalert2';


const Contact = () => {
    const form = useRef();

    const handleSubmit = e => {
        e.preventDefault();

        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: 'btn btn-success px-3 rounded-pill ms-3',
                cancelButton: 'btn btn-danger px-3 rounded-pill'
            },
            buttonsStyling: false
        })

        swalWithBootstrapButtons.fire({
            title: 'Are you sure?',
            text: "You won't be send email for Mahir Faisal",
            icon: 'question',
            showCancelButton: true,
            confirmButtonText: 'Yes, send it!',
            cancelButtonText: 'No, cancel!',
            reverseButtons: true
        }).then((result) => {
            if (result.isConfirmed) {
                // emailjs.sendForm('searvice_mahir_faisal', 'template_gt9e74l', form.current, "user_UDxc57tbKbGOn46ILlwCB")
                //     .then((result) => {
                //         console.log(result.text);
                //         swalWithBootstrapButtons.fire(
                //             'Send ',
                //             'Your message has been send',
                //             'success'
                //         )
                //     }, (error) => {
                //         Swal.fire({
                //             icon: 'error',
                //             title: `${error.message}`,
                //             showConfirmButton: false,
                //             timer: 5000
                //         })
                //     });
                console.log(result.text);
                swalWithBootstrapButtons.fire(
                    'Send ',
                    'Your message has been send',
                    'success'
                )

            } else if (
                /* Read more about handling dismissals below */
                result.dismiss === Swal.DismissReason.cancel
            ) {
                swalWithBootstrapButtons.fire(
                    'Cancelled',
                    'Your message not send',
                    'error'
                )
            }
        })
        e.target.reset();
    }


    return (
        <>
            <div className="bg-dark">
                <Fade bottom duration={2500} distance="50px"><h2 className="fw-bold text-light text-center py-5">CONTACT ME</h2></Fade>
                <section id="contact">
                    <div className="contact-box">
                        <Fade left duration={2500} distance="50px">
                            <div className="contact-links" style={{ backgroundColor: '#6a9ac4' }}>
                                <h2 className='contact-h2'>CONTACT ME</h2>
                                <div className="links">
                                    <div className="link">
                                        <a href={`https://www.linkedin.com/in/md-muzammal-huqe`} target="_blank" rel="noopener noreferrer"><img className='contact-img' src="https://i.postimg.cc/m2mg2Hjm/linkedin.png" alt="linkedin" /></a>
                                    </div>
                                    <div className="link">
                                        <a href={`https://github.com/muzammalhuqe`} target="_blank" rel="noopener noreferrer"><img className='contact-img' src="https://i.postimg.cc/YCV2QBJg/github.png" alt="github" /></a>
                                    </div>
                                    <div className="link">
                                        <a href={`https://www.facebook.com/muzammalraj?mibextid=ZbWKwL`} target="_blank" rel="noopener noreferrer"><img className='contact-img' src="https://pngimg.com/uploads/facebook_logos/facebook_logos_PNG19750.png" alt="Fb icon" /></a>
                                    </div>
                                    <div className="link">
                                        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=muzammalraj@gmail.com" target="_blank" rel='noreferrer'><img className='contact-img' src="https://i.postimg.cc/NjLfyjPB/email.png" alt="email" /></a>
                                    </div>
                                </div>
                            </div>
                        </Fade>
                        <Fade right duration={2500} distance="50px">
                            <div className="contact-form-wrapper bg-light">
                                <h5 className='text-secondary text-center fw-bold'>SEND YOUR MESSAGE</h5>
                                <form ref={form} onSubmit={handleSubmit}>
                                    <div className="form-item">
                                        <TextField className="w-100 mb-2" variant="standard" label='Enter Your Name' type="text" name="client-name" required />
                                    </div>
                                    <div className="form-item">
                                        <TextField className="w-100 mb-4" variant="standard" label='Enter Your Email' type="email" name="email" required />
                                    </div>
                                    <div className="form-item">
                                        <TextareaAutosize style={{ width: '100%', padding: '5px' }} className="" label='Enter Your Message' placeholder='Enter Your Message' minRows={5} name="message" required></TextareaAutosize>
                                    </div>
                                    <button type='submit' className="submit-btn">Send</button>
                                </form>
                            </div>
                        </Fade>
                    </div>
                </section>

            </div>
        </>
    );
};

export default Contact;