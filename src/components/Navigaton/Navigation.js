import * as React from 'react';
import './Navigation.css';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import useMediaQuery from '../useMediaQuery/useMediaQuery';
import myImage from '../About/img/muzammel.png'

const Navigation = () => {

    const [isSticky, setSticky] = React.useState(false);
    const isMobile = useMediaQuery('(max-width: 768px)');


    React.useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 50) {
                setSticky(true)
            } else {
                setSticky(false)
            }
        })
    }, []);

    return (
        <>
            <header >
                <Navbar
                    collapseOnSelect
                    expand="lg"
                    variant="light"
                    fixed="top"
                    className={(isSticky) ? "shadow-sm text-light bg-dark py-2" : "py-4 text-light"}>
                    <Container>
                        <Navbar.Brand
                            as={HashLink} to="/"
                            style={{ color: "#3a4256", fontSize: "1rem" }}>

                            <strong className='text-light' style={{ fontSize: '24px' }}>Md. Muzammal Huqe</strong>
                        </Navbar.Brand>
                        <Nav>
                            <a href="#;" className="ic menu" tabIndex="1">
                                <span className="line"></span>
                                <span className="line"></span>
                                <span className="line"></span>
                            </a>
                            <Nav.Link href="" className="ic close"></Nav.Link>



                            <ul className="main-nav">
                                <h1 className="text-center mt-5">
                                    <img style={{ width: '120px', height: '120px', borderRadius: '50%', }} src={myImage} alt="Faisal" />
                                </h1>
                                <div className="navLink text-center d-flex flex-column">
                                    <Nav.Link className='text-light fs-3' as={HashLink} to="/home#home">Home</Nav.Link>
                                    <Nav.Link className='text-light fs-3' as={HashLink} to="/home#about">About</Nav.Link>
                                    <Nav.Link className='text-light fs-3' as={HashLink} to="/home#projects">Projects</Nav.Link>
                                    <Nav.Link className='text-light fs-3' as={HashLink} to="/home#contact">Contact</Nav.Link>
                                    <Nav.Link className='text-light fs-3' as={HashLink} to="/blogs">Blogs</Nav.Link>
                                </div>
                            </ul>
                        </Nav>

                        <Nav className='ms-auto'>
                            <Nav.Link className="fs-5 ms-2" as="a" href={`https://drive.google.com/file/d/12dH894qE9m6muIiPWxtnIIVJC4PWG8kQ/view?usp=sharing`} target="_blank" rel="noopener noreferrer"><button className={isSticky ? "btn btn-dark py-1 w-100" : "btn btn-danger py-1 w-100"}>Resume</button></Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>
            </header>
        </>
    );
};

export default Navigation;