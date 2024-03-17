import React from 'react';
import './Footer.css'
import { Nav } from 'react-bootstrap';


const Footer = () => {
    return (
        <div className="footer-section ">
            <footer>
                <div className="top_header">
                    <section>
                        <span><i className="fa fa-map-marker"></i></span>

                        <span> <a className='click-footer' href="https://www.google.com/maps/search/Developers+Area/@24.4282908,88.6065141,21z/data=!4m7!2m6!3m5!1sDevelopers+Area!2s24.428376,+88.606569!4m2!1d88.6065689!2d24.428376" target="_blank" rel='noreferrer'>Baya Bazar Rajshahi, Bangladesh</a></span>
                    </section>
                    <section>
                        <span><i className="fa fa-phone"></i></span>
                        <span><a className='click-footer' href="tel:+8801722202101">+8801722202101</a></span>
                    </section>
                    <section>
                        <span><i className="fa fa-envelope"></i></span>
                        <span><a className='click-footer' href="https://mail.google.com/mail/?view=cm&fs=1&to=muzammalraj@gmail.com" target="_blank" rel="noopener noreferrer">muzammalraj@gmail.com</a></span>

                    </section>
                </div>
                <span className="border-shape"></span>
                <div className="bottom_content">
                    <section>
                        <Nav.Link as="a" href={`https://www.facebook.com/muzammalraj?mibextid=ZbWKwL`} target="_blank" rel="noopener noreferrer" className="foot-link" ><i className="fab fa-facebook footer-icon"></i></Nav.Link>

                        <Nav.Link as="a" href={`https://github.com/muzammalhuqe`} target="_blank" rel="noopener noreferrer" className="foot-link" ><i className="fab fa-github footer-icon"></i></Nav.Link>

                        <Nav.Link as="a" href={`https://drive.google.com/file/d/12dH894qE9m6muIiPWxtnIIVJC4PWG8kQ/view`} target="_blank" rel="noopener noreferrer" className="foot-link" ><i className="fab fa-google footer-icon"></i></Nav.Link>

                        <Nav.Link as="a" href={`https://www.linkedin.com/in/md-muzammal-huqe`} target="_blank" rel="noopener noreferrer" className="foot-link" ><i className="fab fa-linkedin-in footer-icon"></i></Nav.Link>

                    </section>
                    <section>
                        <a className='foot-link' href="/home#home">Home</a>
                        <a className='foot-link' href="/home#about">About Me</a>
                        <a className='foot-link' href="/home#projects">Projects</a>
                        <a className='foot-link' href="/home#contact">Contact</a>
                        <a className='foot-link' href="/blogs">Blogs</a>
                        <a className='foot-link' href={`https://drive.google.com/file/d/12dH894qE9m6muIiPWxtnIIVJC4PWG8kQ/view`} target="_blank" rel="noopener noreferrer">Resume</a>
                    </section>
                </div>
                <div className="copyright">
                    Copyright © 2021  All rights reserved
                </div>
            </footer>
        </div>
    );
};

export default Footer;