import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Collapse, } from '@mui/material';
import './ProjectInfo.css';
import { Carousel } from 'react-bootstrap';
import { useHistory } from 'react-router';
import Fade from 'react-reveal/Fade';


const ProjectInfo = ({ project }) => {
    const { name, details, img1, img2, img3, id } = project;

    const [expanded, setExpanded] = React.useState(false);
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const history = useHistory()
    const handleDetails = (detailId) => {
        const url = `/details/${detailId}`;
        history.push(url);
    }

    return (
        <>
            <Fade bottom duration={2500} distance="50px">
                <div className="col-md-6">
                    <Card className="shadow mb-4" sx={{ borderRadius: '20px' }}>
                        <CardActionArea>
                            <CardContent
                            >
                                <Carousel fade>
                                    <Carousel.Item interval={2800}>
                                        <img style={{ maxHeight: '270px' }}
                                            className="d-block w-100"
                                            src={img1}
                                            alt="First slide"
                                        />

                                    </Carousel.Item>
                                    <Carousel.Item interval={3500}>
                                        <img style={{ maxHeight: '270px' }}
                                            className="d-block w-100"
                                            src={img2}
                                            alt="Second slide"
                                        />

                                    </Carousel.Item>
                                    <Carousel.Item interval={4000}>
                                        <img style={{ maxHeight: '270px' }}
                                            className="d-block w-100"
                                            src={img3}
                                            alt="Third slide"
                                        />

                                    </Carousel.Item>
                                </Carousel>


                            </CardContent>
                            <CardContent className='p-2 pb-0 text-start'>
                                <div className="text-center">
                                    <h5>{name}.</h5>
                                </div>
                            </CardContent>
                            <CardActions disableSpacing>

                                <CardContent className='row w-100 '>
                                    <div className="col-6">
                                        <Button onClick={() => handleDetails(id)} variant='contained' className='w-100'>SHOW DETAILS</Button>
                                    </div>
                                    <div className="col-6">
                                        <Typography
                                            expand={expanded}
                                            onClick={handleExpandClick}
                                            aria-expanded={expanded}
                                            aria-label="show more"
                                            paragraph
                                            style={{ fontSize: '13px', cursor: 'pointer' }} className='text-dark text-start fs-5 text-end'>See... <span className=''>{expanded ? "less" : "more"}</span>
                                        </Typography>
                                    </div>
                                </CardContent>

                            </CardActions>
                            <Collapse in={expanded} timeout="auto" unmountOnExit>
                                <CardContent>
                                    <p>{details}</p>

                                </CardContent>
                            </Collapse>
                        </CardActionArea>
                    </Card>
                </div>
            </Fade>
        </>
    );
};

export default ProjectInfo;