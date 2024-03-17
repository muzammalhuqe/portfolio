import React from 'react';
import './NotFound.css';
import Navigation from '../Navigaton/Navigation';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <>
            <Navigation></Navigation>
            <section className="not-found-section">
                <div className="container">
                    <h1 className="text-primary fw-bold py-5 mb-3 bg-light" >404</h1>
                    <div className="card h-100">
                        <img src='https://i.ibb.co/W5wdZS0/3804918.jpg' className="img-fluid" style={{ maxHeight: '600px' }} alt="" />
                        <div className="card-body">
                            <h2 className="card-title">Page Not Found</h2>

                            <Link to="/home"><button className="btn btn-danger rounded-pill fw-bold w-100">Back to home</button></Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default NotFound;