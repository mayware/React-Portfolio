import '../styles/about.css'

const About = () => {
    return (
        <div className="content">
            <div className="about-box">
                <div className="brief-info">
                    <div className="brief-info-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. In laborum labore maiores ducimus quis quidem praesentium veritatis dolorum temporibus. Expedita magni rerum suscipit, et in, molestiae ducimus ea quibusdam deleniti cum, quo labore illum voluptates omnis qui neque eligendi officia cumque eos unde alias repudiandae nulla. Sunt, ducimus! Possimus, doloribus.</div>
                    <div className="brief-info-image"></div>
                </div>
                <div className="skills-box">
                    <div className="skills-icons">
                        <div className="skill-icon-box">
                            <i class="fa-brands fa-square-js js-icon"></i>
                        </div>
                        <div className="skill-icon-box">
                            <i class="fa-brands fa-react react-icon"></i>
                        </div>
                        <div className="skill-icon-box">
                            <i class="fa-brands fa-node node-icon"></i>
                        </div>
                        <div className="skill-icon-box">
                            <i class="fa-brands fa-html5 html-icon"></i>
                        </div>
                        <div className="skill-icon-box">
                            <i class="fa-brands fa-css3-alt css-icon"></i>
                        </div>
                        <div className="skill-icon-box">
                            <i class="fa-brands fa-sass scss-icon"></i>
                        </div>
                        <div className="skill-icon-box">
                            <i class="fa-brands fa-bootstrap bootstrap-icon"></i>
                        </div>
                        <div className="skill-icon-box">
                            <i class="fa-brands fa-square-git git-icon"></i>
                        </div>
                    </div>
                </div>
                <div className="commercial-experience-box">
                    <div className="comm-exp-position">
                        <div className="comm-exp-image"></div>
                        <div className="comm-exp-info"></div>
                    </div>
                    <div className="comm-exp-position">
                        <div className="comm-exp-image"></div>
                        <div className="comm-exp-info"></div>
                    </div>
                    <div className="comm-exp-position">
                        <div className="comm-exp-image"></div>
                        <div className="comm-exp-info"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;