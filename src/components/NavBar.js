// src/components/NavBar.js
import { useState, useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import logo from '../assets/img/logo-a.svg';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/tiktok-logo.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';

export const NavBar = ({ onNavClick }) => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const handleNavClick = (page) => {
        setActiveLink(page);
        onNavClick(page);
    };

    const handleWhatsAppClick = () => {
        window.open("https://wa.me/6285186866256", "_blank");
    };
    return (
        <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
            <Container>
                <Navbar.Brand href="#home">
                    <img src={logo} alt="Alpha-Media" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link 
                            href="#" 
                            className={`navbar-link ${activeLink === 'home' ? 'active' : ''}`} 
                            onClick={(e) => { e.preventDefault(); handleNavClick('home'); }}>
                            Home
                        </Nav.Link>
                        <Nav.Link 
                            href="#" 
                            className={`navbar-link ${activeLink === 'company' ? 'active' : ''}`} 
                            onClick={(e) => { e.preventDefault(); handleNavClick('company'); }}>
                            Company
                        </Nav.Link>
                        <Nav.Link 
                            href="#" 
                            className={`navbar-link ${activeLink === 'projects' ? 'active' : ''}`} 
                            onClick={(e) => { e.preventDefault(); handleNavClick('projects'); }}>
                            Projects
                        </Nav.Link>
                    </Nav>
                    <span className="navbar-text">
                        <div className="social-icon">
                            <a href="https://www.linkedin.com/in/alpha-media-460588314" target="_blank" rel="noopener noreferrer"><img src={navIcon1} alt="Linkedin Alpha-Media" /></a>
                            <a href="https://www.tiktok.com/@alphamedia.creative" target="_blank" rel="noopener noreferrer"><img src={navIcon2} alt="TikTok Alpha-Media" /></a>
                            <a href="https://www.instagram.com/alphamedia.creative" target="_blank" rel="noopener noreferrer"><img src={navIcon3} alt="Instagram Alpha-Media" /></a>
                        </div>
                        <button className="vvd" onClick={handleWhatsAppClick}><span>Let's Connect</span></button>
                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};
