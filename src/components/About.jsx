import '../styles/about.css'

const About = () => {
    return (
        <div className="content">
            <div className="about-box">
                <div className="skills-box">
                    <div className="skills-header">
                        <span className="skills-header-title">Tech stack</span>
                    </div>
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
                    </div>
                </div>
                <div className="about-info"></div>

            </div>
        </div>
    );
}

export default About;