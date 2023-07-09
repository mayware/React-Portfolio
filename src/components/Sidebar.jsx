import '../styles/sidebar.css'
import { NavLink } from 'react-router-dom';

const Sidebar = ({ toggleSidebar }) => {
    return (
        <aside className="sidebar">
            <div className="sidebar-inner">
                <NavLink to="/" className="sidebar-link" onClick={toggleSidebar}>
                    <div className="sidebar-link-inner">
                        <span className='sidebar-link-icon'>
                            <i className="fa-solid fa-house"></i>
                        </span>
                        <span className="sidebar-link-title">Home</span>
                    </div>
                </NavLink>
                <NavLink to="/about" className="sidebar-link" onClick={toggleSidebar}>
                    <div className="sidebar-link-inner">
                        <span className='sidebar-link-icon'>
                            <i className="fa-solid fa-circle-question"></i>
                        </span>
                        <span className="sidebar-link-title">About</span>
                    </div>
                </NavLink>
                <NavLink to="/portfolio" className="sidebar-link" onClick={toggleSidebar}>
                    <div className="sidebar-link-inner">
                        <span className='sidebar-link-icon'>
                            <i className="fa-solid fa-diagram-project"></i>
                        </span>
                        <span className="sidebar-link-title">Projects</span>
                    </div>
                </NavLink>
                <NavLink to="/contact" className="sidebar-link" onClick={toggleSidebar}>
                    <div className="sidebar-link-inner">
                        <span className='sidebar-link-icon'>
                            <i className="fa-solid fa-envelope"></i>
                        </span>
                        <span className="sidebar-link-title">Contacts</span>
                    </div>
                </NavLink>
            </div>
        </aside>
    );
}

export default Sidebar;