import '../styles/portfolio.css'

const Portfolio = () => {
    return (
        <div className="content">
            <div className="portfolio-box">
                <div className="portfolio-intro">
                    <div className='portfolio-intro-title'>
                        <span>My</span>
                        <span>portfolio</span>
                    </div>
                </div>
                <div className="portfolio-projects">
                    <div className="wave">
                        <svg viewBox="0 0 500 200">
                            <path d="M 0 50 C 150 150 300 0 500 80 L 500 0 L 0 0" fill="rgb(0, 32, 175)"></path>
                            <path d="M 0 50 C 150 150 330 -30 500 50 L 500 0 L 0 0" fill="#001848" opacity="0.8"></path>
                            <path d="M 0 50 C 215 150 250 0 500 100 L 500 0 L 0 0" fill="#001524" opacity="0.5"></path>
                        </svg>
                    </div>
                    <div className="projects-section">
                        <div className="main-projects">
                            <div className="projects-title">Main project</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>);
}

export default Portfolio;