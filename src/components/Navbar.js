import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { FaInstagram, FaFacebook, FaTwitter, FaPhone, FaBars, FaTimes } from 'react-icons/fa';

function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const handleMobileMenuToggle = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);

    };

    const handleNavLinkClick = () => {
        setIsMobileMenuOpen(false);
    };

    useEffect(() => {

        const handleResize = () => {
            // Close the mobile menu when the screen size is larger than 960px
            if (window.innerWidth > 960) {
                setIsMobileMenuOpen(false);
                // Make the website content scrollable again
                document.body.style.overflow = 'auto';
            }
        };

        // Add event listener for window resize
        window.addEventListener('resize', handleResize);

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        // Prevent scrolling when the mobile menu is open
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            // Make the website content scrollable again
            document.body.style.overflow = 'auto';
        }
    }, [isMobileMenuOpen]);
    return (
        <>
            <div className="small-navbar">
                <div className="small-navbar-container">
                    <div className="contact-info">
                        <div className="phone-icon">
                            <FaPhone size={16} />
                        </div>
                        <div className="phone-number">04.93.58.11.87</div>
                    </div>
                    <div className="social-icons">
                        <FaInstagram size={24} className="icon" />
                        <a className='social-color-href' href="https://www.facebook.com/profile.php?id=100009761925051"><FaFacebook size={24} className="icon" /></a>
                        {/* <FaTwitter size={24} className="icon" /> */}
                    </div>
                </div>
            </div>

            <nav className='navbar'>
                <div className='navbar-container'>
                    <Link to='/' className='navbar-logo' >
                        <img src="/images/logo.png" className='logo-img' alt="Logo" />
                    </Link>

                    <ul className={isMobileMenuOpen ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={handleNavLinkClick}>
                                PAGE D'ACCUEIL
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/about' className='nav-links' onClick={handleNavLinkClick}>
                                À PROPOS
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/collection' className='nav-links' onClick={handleNavLinkClick}>
                                VENTE
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/restoration' className='nav-links' onClick={handleNavLinkClick}>
                                RESTAURATION
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/contact' className='nav-links' onClick={handleNavLinkClick}>
                                CONTACTEZ-NOUS
                            </Link>
                        </li>




                    </ul>

                    <div className='menu-icon' onClick={handleMobileMenuToggle}>
                        {/* Use hamburger icon */}
                        {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;
