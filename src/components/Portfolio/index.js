import React from 'react';
import Project from '../Project';

function Portfolio() {
    const projects = [
        {
            name: 'Memegram',
            description: 'This is a fun social media application to post you favorite memes.',
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
        },
        {
            name: 'Budget Tracker',
            description: 'This is a progressive web application (PWA) that allows offline functionality through IndexedDB. A user can track their finances with this application.',
            image: 'budget-tracker-screenshot.png',
            technologies: [
                'Heroku',
                'MongoDB',
                'Mongoose',
                'Express',
                'IndexedDB'
            ],
            github: 'https://github.com/jsnbdrx/budget-tracker',
            deployed: 'https://budget-tracker-jsnbdrx.herokuapp.com/',
        },
        {
            name: 'Employee Tracker',
            description: 'Employee Vision is a Node.js console application that allows a user to interact with a MYSQL database that holds employee data. A company could use this application to keep track of their Employees, departments, and roles.',
            image: 'employee-tracker-screenshot.png',
            technologies: [
                'Node',
                'Express',
                'MySQL',
                'Inquirer',
                'JavaScript'
            ],
            github: 'https://github.com/jsnbdrx/employee-tracker',
            deployed: 'https://watch.screencastify.com/v/Kc8ir0oS64a1t8tQf5D5',
        },
        {
            name: 'Team Profile Generator',
            description: 'This is a node.js command line application that generates an HTML webpage based on your user input to build a team profile page.',
            image: 'team-profile-generator-screenshot.png',
            technologies: [
                'Node',
                'Jest',
                'Inquirer',
                'HTML',
                'JavaScript'
            ],
            github: 'https://github.com/jsnbdrx/team-profile-generator',
            deployed: 'https://watch.screencastify.com/v/Z2B98Ka4UrDJ1lqJEKk5',
        },
        {
            name: 'Note Taker',
            description: 'Note Taker is an application that allows users to create and save notes.',
            image: 'notes-home.png',
            technologies: [
                'Express',
                'Heroku',
                'HTML',
                'CSS',
                'JavaScript'
            ],
            github: 'https://github.com/jsnbdrx/note-taker',
            deployed: 'https://note-taker-jsnbdrx.herokuapp.com/',
        },
        {
            name: 'Work Day Scheduler',
            description: 'Simple day planner to help schedule your day. You can add events to the daily planner to manage your time more effectively.',
            image: 'work-day-scheduler-screenshot.png',
            technologies: [
                'HTML',
                'CSS',
                'JavaScript'
            ],
            github: 'https://github.com/jsnbdrx/work-day-scheduler',
            deployed: 'https://jsnbdrx.github.io/work-day-scheduler',
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