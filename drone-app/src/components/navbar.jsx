import { useState } from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import PropTypes from 'prop-types';
import logo from '../assets/logo/kooma.png';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);
    const closeMenu = () => setIsOpen(false);

    CustomLink.propTypes = {
        to: PropTypes.string.isRequired,
        children: PropTypes.node.isRequired,
        onClick: PropTypes.func,
    };

    return (
        <>
            <nav className="nav">
                <div className="nav-container">
                    <img src={logo} alt="KOOMA logo" className="navbar-logo" />

                    {/* Hamburger */}
                    <div className="hamburger" onClick={toggleMenu}>
                        <div className="bar"></div>
                        <div className="bar"></div>
                        <div className="bar"></div>
                    </div>

                    {/* Nav Links */}
                    <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
                        <CustomLink to="/home" onClick={closeMenu}>Home</CustomLink>
                        <CustomLink to="/courses" onClick={closeMenu}>Courses</CustomLink>
                        <CustomLink to="/videography" onClick={closeMenu}>Videography</CustomLink>
                        <CustomLink to="/faq" onClick={closeMenu}>FAQ</CustomLink>
                    </ul>
                </div>
            </nav>

            {/* Backdrop for mobile */}
            {isOpen && (
                <div className="menu-backdrop" onClick={closeMenu}></div>
            )}
        </>
    );
}

function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({ path: resolvedPath.pathname, end: true });

    return (
        <li className={isActive ? 'active' : ''}>
            <Link to={to} {...props}>{children}</Link>
        </li>
    );
}