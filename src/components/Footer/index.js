import React from "react";

function Footer() {
    return (
        <footer className="footer">
            <div>
                <a
                    href="https://github.com/jsnbdrx"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img
                        src={require("../../assets/logos/github-logo.png")}
                        alt="GitHub"
                        className="logo"
                    ></img>
                </a>
            </div>
            <div>
                <a
                    href="https://www.linkedin.com/in/jsnbdrx/"
                    terget="blank"
                    rel="noopener noreferrer"
                >
                    <img
                        src={require("../../assets/logos/linkedin-logo.png")}
                        alt="LinkedIn"
                        className="logo"
                    ></img>
                </a>
            </div>
        </footer>
    )
}

export default Footer;