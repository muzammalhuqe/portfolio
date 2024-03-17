import React from 'react';
import './About.css';
import myImg from './img/muzammel.png';
import Fade from 'react-reveal/Fade';

const About = () => {
    return (
        <>
            <div className="bg-dark">
                <section id="about" className="about-section" style={{}}>
                    <div className="container">
                        <div className="row d-md-flex align-items-center">
                            <Fade left duration={2500} distance="50px">
                                <div className="col-12 col-md-6">
                                    <div>
                                        <img className="img-fluid" src={myImg} alt="Faisal" />
                                    </div>
                                </div>
                            </Fade>
                            <Fade right duration={2500} distance="50px">
                                <div className="col-12 col-md-6">
                                    <div className="about-text  text-start">
                                        <h1 className=" text-start  "><span className='border-bottom border-danger'>About</span> Me</h1>
                                        <p className="  text-start" style={{ fontSize: '16px' }}><i>
                                            As a Junior Django Developer, my objective is to contribute my skills and to a dynamic team, leveraging my knowledge of
                                            Django framework and passion for web development. With a strong foundation in Python programming.
                                            <br />
                                            <span className='border-bottom'>Here are a few technologies I've been working with recently :</span>
                                        </i></p>

                                        <h5 className='my-0 py-0 text-danger'>Technical Skills</h5>
                                        <p>C++, Python, Django, Rest API, HTML5, CSS, Bootstrap5, Github, VS Code.</p>

                                        <h5 className='my-0 py-0 text-danger'>Tools</h5>
                                        <p> VS Code, Git, On Render, Vercel Chrome Dev Tool etc.</p>
                                    </div>
                                </div>
                            </Fade>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default About;