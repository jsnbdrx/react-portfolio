import React from "react";

function About () {
    return (
        <section>
            <div className="center" id="about">
                <h1 className="page-header">About Me</h1>
            </div>
            <div className="center">
                {/* <img
                src={require('../../assets.images/headshot.jpg')}
                alt="headshot"
                className="photo"
                >
                </img> */}
            </div>
            <about>
                <p>
                    This section is about me. Words go here. Lots of words.
                </p>
            </about>
        </section>
    );
}

export default About;