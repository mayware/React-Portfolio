import '../styles/home.css'
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="content">
            <div className="brief-card">
                <div className="brief-card-info">
                    <div className="brief-card-text">
                        <div className="brief-info-welcome-text">hello, I'm</div>
                        <div className="typewriter">
                            <div class="typed-out">Front-end React JS Developer</div>
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