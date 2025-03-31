import { useState } from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import logo from '../pages/logo/kooma.png';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false); // State to toggle the menu visibility

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    return (
        <nav className="nav">
            <img src={logo} alt="logo" />
            <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
                <CustomLink to="/home" onClick={closeMenu}>Home</CustomLink>
                <CustomLink to="/courses" onClick={closeMenu}>Courses</CustomLink>
                <CustomLink to="/faq" onClick={closeMenu}>FAQ</CustomLink>
                <CustomLink to="/techsupport" onClick={closeMenu}>Tech Support</CustomLink>
            </ul>
            <div className="hamburger" onClick={toggleMenu}>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>
        </nav>
    );
}

function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({ path: resolvedPath.pathname, end: true });
    return (
        <li className={isActive ? 'active' : ''}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    );
}