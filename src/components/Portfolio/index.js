import React from 'react';
import Project from '../Project';

function Portfolio() {
    const projects = [
        {
            name: 'Memegram',
            description: 'This an a fun social media application to post you favorite memes.',
            image: 'memegram-screenshot.png',
            technologies: [
                'Bootstrap',
                'Handlebars',
                'Node',
                'Express',
                'MySQL',
                'Sequelize',
                'Multer',
            ],
            github: 'https://github.com/collin-beisel-tm/Memegram',
            deployed: 'https://memegram2022.herokuapp.com/',
        }
    ];

    return (
        <section>
            <div className="center">
                <h1 className="page-header">My Portfolio</h1>
            </div>
            <div>
                <ul className="flex-row mobile-row">
                    <li className="padding">
                        <Project projects={projects[0]}></Project>
                    </li>
                    <li className="padding">
                        <Project projects={projects[1]}></Project>
                    </li>
                </ul>
                <ul className="flex-row mobile-row">
                    <li className="padding">
                        <Project projects={projects[2]}></Project>
                    </li>
                    <li className="padding">
                        <Project projects={projects[3]}></Project>
                    </li>
                </ul>
                <ul className="flex-row mobile-row">
                    <li className="padding">
                        <Project projects={projects[4]}></Project>
                    </li>
                    <li className="padding">
                        <Project projects={projects[5]}></Project>
                    </li>
                </ul>
            </div>
        </section>
    );
}

export default Portfolio;