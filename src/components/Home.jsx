import '../styles/home.css'
import { Link } from 'react-router-dom';

const Home = ({ toggleSidebar }) => {
    return (
        <div className="content">
            <div className="brief-card">
                <div className="brief-card-info">
                    <div className="brief-card-text">
                        <div className="brief-info-welcome-text">Hello, I'm a</div>
                        <div className="typewriter">
                            <div className="typed-out">Front-end React JS Developer</div>
                        </div>
                    </div>
                    <div className="contact-link-area">
                        <Link to="/contact" className='contact-link'>Contact me</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;