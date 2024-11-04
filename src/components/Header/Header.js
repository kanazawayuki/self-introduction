import React from 'react';
import { Navbar } from 'react-bootstrap';
import './Header.css';

const Header = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div>
            <Navbar fixed="top" variant="dark" expand="lg" className="navbar">
                <Navbar.Brand onClick={scrollToTop} className="brand">
                    Self-Introduction-Site
                </Navbar.Brand>
            </Navbar>
        </div>
    );
};

export default Header;