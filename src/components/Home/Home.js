import * as React from 'react';
import './Home.css';
import Banner from '../Banner/Banner'
import About from '../About/About';
import Projects from '../Projects/Projects';
import Footer from '../Footer/Footer';
import Contact from '../Contact/Contact';
import ParticlesBg from 'particles-bg'



const Home = () => {
    let config = {
        num: [4, 7],
        rps: 0.1,
        radius: [5, 40],
        life: [1.5, 3],
        v: [2, 3],
        tha: [-40, 40],
        // body: "./img/icon.png", // Whether to render pictures
        // rotate: [0, 20],
        alpha: [0.6, 0],
        scale: [1, 0.1],
        position: "center", // all or center or {x:1,y:1,width:100,height:100}
        color: ["random", "#ff0000"],
        cross: "dead", // cross or bround
        random: 15,  // or null,
        g: 5,    // gravity
        // f: [2, -1], // force
        onParticleUpdate: (ctx, particle) => {
            ctx.beginPath();
            ctx.rect(particle.p.x, particle.p.y, particle.radius * 2, particle.radius * 2);
            ctx.fillStyle = particle.color;
            ctx.fill();
            ctx.closePath();
        }
    };



    return (
        <div className="home-">
            <Banner></Banner>
            <About></About>
            <Projects></Projects>
            <Contact></Contact>
            <Footer></Footer>

            <ParticlesBg color="#b33939" num={170} type="cobweb" config={config} bg={true} />
        </div>
    );
};

export default Home;