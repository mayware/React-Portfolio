import '../styles/navbar.css';
import { NavLink } from 'react-router-dom';
const Navbar = ({ toggleSidebar, sidebarBtnIcon }) => {

    return (
        <nav className="navbar">
            <div className="nav-left">
                <div className="nav-title">
                    <NavLink to="/" className="nav-link nav-host-name">Tofig Valiyev</NavLink>
                </div>
            </div>
            <div className="nav-right">
                <div className="social-links">
                    <a href="https://www.linkedin.com/in/tofig-valiyev" target='_blank' className="nav-social-link"><i className="fa-brands fa-linkedin-in"></i></a>
                    <a href="https://github.com/tofa93" target='_blank' className="nav-social-link"><i className="fa-brands fa-github"></i></a>
                    <a href="https://t.me/quanticco" target='_blank' className="nav-social-link"><i className="fa-brands fa-telegram"></i></a>
                </div>
                <div className="nav-menu">
                    <button className="sidebar-btn" onClick={toggleSidebar}>
                        {!sidebarBtnIcon && <i className="fa-solid fa-bars"></i>}
                        {sidebarBtnIcon && <i class="fa-solid fa-xmark"></i>}
                    </button>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;