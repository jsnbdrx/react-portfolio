import React from "react";

function Resume() {
	return (
		<section>
			<div className="center">
				<h1 className="page-header">My Resume</h1>
			</div>
			<div className="bottom-spacing">
				<a href={require("../../assets/files/Resume.docx.pdf")} download>
					<h4>Click Here to Download Resume</h4>
				</a>
			</div>
			<div>
				<h5>Front-End Technologies</h5>
				<ol>
					<li>HTML</li>
					<li>CSS</li>
					<li>JavaScript</li>
					<li>jQuery</li>
					<li>Bootstrap</li>
					<li>React</li>
				</ol>
				<br></br>
				<h5>Back-End Technologies</h5>
				<ol>
					<li>APIs</li>
					<li>Node</li>
					<li>Express</li>
					<li>Model View Controller (MVC)</li>
					<li>RESTful APIs</li>
					<li>Progressive Web Applications (PWA)</li>
				</ol>
				<br></br>
				<h5>Dev Tool Technologies</h5>
				<ol>
					<li>Git</li>
					<li>Jest</li>
					<li>Webpack</li>
				</ol>
				<br></br>
				<h5>Database Technologies</h5>
				<ol>
					<li>MySQL</li>
					<li>Sequelize</li>
					<li>NoSQL</li>
					<li>GraphQL</li>
					<li>MongoDB</li>
					<li>Mongoose</li>
				</ol>
			</div>
		</section>
	);
}

export default Resume;