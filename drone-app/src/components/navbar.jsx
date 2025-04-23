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
            <nav className="sticky top-0 z-50 w-full bg-[#002a57] px-6 py-4 text-white md:px-8">
                <div className="flex items-center justify-between lg:pl-[100px] lg:py-5">
                    <img src={logo} alt="KOOMA logo" className="navbar-logo h-12" />

                    {/* Hamburger Menu */}
                    <div className="md:hidden" onClick={toggleMenu}>
                        <div className="cursor-pointer space-y-1">
                            <div className="h-1 w-8 bg-white"></div>
                            <div className="h-1 w-8 bg-white"></div>
                            <div className="h-1 w-8 bg-white"></div>
                        </div>
                    </div>

                    {/* Navigation Links */}
                    <ul
                        className={`navbar-links absolute md:static top-[70px] right-6 bg-[#002a57] p-4 md:p-0 md:bg-transparent flex-col md:flex-row md:flex gap-4 rounded-lg shadow-lg transition-all duration-300 ease-in-out z-50 ${isOpen ? 'flex' : 'hidden'
                            } md:mr-[100px]`}
                    >
                        <CustomLink to="/home" onClick={closeMenu}>Home</CustomLink>
                        <CustomLink to="/courses" onClick={closeMenu}>Courses</CustomLink>
                        <CustomLink to="/videography" onClick={closeMenu}>Videography</CustomLink>
                        <CustomLink to="/faq" onClick={closeMenu}>FAQ</CustomLink>
                    </ul>
                </div>
            </nav>


            {/* Backdrop when menu is open */}
            {isOpen && (
                <div
                    onClick={closeMenu}
                    className="fixed inset-0 z-40 bg-black bg-opacity-50 md:hidden"
                />
            )}
        </>
    );
}

function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({ path: resolvedPath.pathname, end: true });

    return (
        <li className={isActive ? 'active' : ''}>
            <Link
                to={to}
                className="text-[18px] md:text-[18px]"
                {...props}
            >
                {children}
            </Link>
        </li>
    );
}
