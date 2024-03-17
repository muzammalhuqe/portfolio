import React from 'react';
import './Blogs.css';
import Flip from 'react-reveal/Flip';


const Blogs = () => {
    return (
        <section id="blogs" className="blogs-section" style={{}}>
            <div className="container" style={{ paddingTop: '200px' }}>
                <div className="">
                    <Flip top duration={2000}>
                        <h1 className="fw-bold text-info bg-light py-3 rounded">BLOGS COMING SOON</h1>
                    </Flip>
                </div>
            </div>
        </section>
    );
};

export default Blogs;