import React from "react";

function About() {
    return (
        <section>
            <div className="center" id="about">
                <h1 className="page-header">About Me</h1>
            </div>
            <div className="center">
                <img
                    src={require('../../assets/images/headshot.jpg')}
                    alt="headshot"
                    className="photo"
                >
                </img>
            </div>
            <section>
                <p>
                    I am currently a student at the SMU Full Stack Web Development Boot Camp.
                </p>
                <p>
                    Before I got into coding, I worked a few jobs that didn't seem to be going anywhere. I wasn't sure what it was that I wanted to do. From working as a Direct Support Professional in a group home to Customer Service for a makeup company to a Shipping Operator for a fragrance company, It seemed like I was stuck in a rut and wasn't going to be getting out. When speaking with my wife about not being happy with my work situation, my mind went back to a close friend of mine that wanted to convince me to learn to code years back. I heeded his advice and started to learn.
                </p>
                <p>
                    In a few short months, I have come such a long way, starting with ZERO coding knowledge/experience. I love to learn about coding and the languages involved in making an application look and work as we see it. In that time, I have learned HTML, CSS, JavaScript, Node.js, Express.js, mySQL, Bootstrap/CSS frameworks, Git/GitHub, Mongoose, MongoDB, and React.js. I am exited to be able to practice more of what I've learned and implement that into a future career.
                </p>
            </section>
        </section>
    );
}

export default About;