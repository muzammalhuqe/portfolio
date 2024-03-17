import React from 'react';
import ProjectInfo from '../ProjectInfo/ProjectInfo';
import Fade from 'react-reveal/Fade';
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

const Projects = () => {
    return (
        <>
            <div className="bg-dark">
                <section id="projects" className='project-body'>
                    <div>
                        <Fade bottom duration={2500} distance="50px">
                            <h2 className="text-light fw-bold py-5 text-center ">MY PROJECTS</h2>
                        </Fade>
                        <div className="container">
                            <div className="row ">
                                {projectsData.map(project => <ProjectInfo
                                    key={project.name}
                                    project={project}
                                ></ProjectInfo>)}
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default Projects;