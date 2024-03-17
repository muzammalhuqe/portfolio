import React from 'react';
import './ProjectDetails.css';
import { useParams } from 'react-router';
import { Card, Carousel, Nav } from 'react-bootstrap';
import { Button } from '@mui/material';
import library_1 from './project-image/library_1.PNG';
import library_2 from './project-image/library_2.PNG';
import library_3 from './project-image/library_3.PNG';
import tuition_1 from './project-image/tuition_1.PNG';
import tuition_2 from './project-image/tuition_2.PNG';
import tuition_3 from './project-image/tuition_3.PNG';

const projectsData = [
    {
        name: 'Tuition Media BD',
        id: 1,
        img1: tuition_1,
        img2: tuition_2,
        img3: tuition_3,
        details: `After login or registration, User can access the dashboard and the user can apply for tuition. Admins will be able to CRUD operation and also make admin and make a poll. Users can read tuition details and users can apply for tuition. And users can review Tuition.`,
        live: 'https://tutormediabd.onrender.com',
        code: 'https://github.com/muzammalhuqe/TutorMediaBD'
    },
    {
        name: 'Our Library',
        id: 2,
        img1: library_1,
        img2: library_2,
        img3: library_3,
        details: `After login or registration, User can access the dashboard and the user can borrow and return
        the book. Admins will be able to CRUD operation and also make admin and make a poll. Users can read book details and users can borrow books. And users can comment, Books.`,
        live: 'https://our-library-omv9.onrender.com',
        code: 'https://github.com/muzammalhuqe/Library_Management_System'
    },
];


const ProjectDetails = () => {
    const { projectId } = useParams()

    const singleProject = projectsData.filter(proData => proData.id == projectId);
    const { name, img1, img2, img3, details, live, code } = singleProject[0];

    return (
        <section className="detail-body bg-dark">
            <div className="container " style={{ padding: '100px 0' }}>
                <Card className=" border-0  shadow  detail-card" >
                    <Carousel fade>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={img1}
                                alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={img2}
                                alt="Second slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={img3}
                                alt="Third slide"
                            />
                        </Carousel.Item>
                    </Carousel>
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                            {details}
                        </Card.Text>

                        <div className="row">
                            <div className="col-md-6">
                                <Nav.Link as="a" href={`${live}`} target="_blank" rel="noopener noreferrer"><Button variant='contained' className=" py-1 w-100 ">Live Site</Button></Nav.Link>


                            </div>
                            <div className="col-md-6">
                                <Nav.Link as="a" href={`${code}`} target="_blank" rel="noopener noreferrer"><Button variant='contained' className=" py-1 w-100 ">Github Code</Button></Nav.Link>
                            </div>
                        </div>

                    </Card.Body>
                </Card>
            </div>

        </section>
    );
};

export default ProjectDetails;