import React, { useState, useEffect } from 'react';
import {
    FaGithub,
    FaLinkedin,
    FaEnvelope,
    FaArrowUp,
    FaPaperPlane,
    FaRocket,
    FaCode,
    FaMapMarkerAlt,
    FaHeart
} from 'react-icons/fa';

export default function Footer() {
    const [showScrollBtn, setShowScrollBtn] = useState(false);

    useEffect(() => {
        const checkScrollHeight = () => {
            if (window.scrollY > 400) {
                setShowScrollBtn(true);
            } else {
                setShowScrollBtn(false);
            }
        };

        window.addEventListener('scroll', checkScrollHeight, { passive: true });
        return () => window.removeEventListener('scroll', checkScrollHeight);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    const handleLinkClick = (e, targetId) => {
        e.preventDefault();
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            const navOffset = 80;
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - navOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth',
            });
        }
    };

    const quickLinks = [
        { name: 'Home', target: 'home' },
        { name: 'About', target: 'about' },
        { name: 'Skills', target: 'skills' },
        { name: 'Projects', target: 'projects' },
        { name: 'Services', target: 'services' },
        { name: 'Certificates', target: 'certificates' },
        { name: 'Contact', target: 'contact' },
    ];

    const techChips = [
        'React 19',
        'JavaScript ES6+',
        'Node.js',
        'Python',
        'SQL & Analytics',
        'Modern CSS3',
        'Git & GitHub',
        'Vite'
    ];

    return (
        <footer className="footer-panel">
            <div className="container">

                {/* Pre-Footer Spotlight CTA Banner */}
                <div className="footer-cta-card">
                    <div className="footer-cta-content">
                        <span className="footer-cta-eyebrow">
                            <FaRocket className="cta-rocket-icon" /> Ready to Collaborate?
                        </span>
                        <h3 className="footer-cta-title">
                            Let's Build Something <span className="gradient-text">Extraordinary</span> Together
                        </h3>
                        <p className="footer-cta-desc">
                            Looking for a high-performance frontend engineer, full stack developer, or data analyst? Let's discuss your next milestone.
                        </p>
                    </div>
                    <div className="footer-cta-actions">
                        <a
                            href="#contact"
                            onClick={(e) => handleLinkClick(e, 'contact')}
                            className="footer-btn-primary"
                        >
                            <span>Get In Touch</span>
                            <FaPaperPlane className="footer-btn-icon" />
                        </a>
                        <a
                            href="#projects"
                            onClick={(e) => handleLinkClick(e, 'projects')}
                            className="footer-btn-secondary"
                        >
                            <span>View Projects</span>
                            <FaCode className="footer-btn-icon" />
                        </a>
                    </div>
                </div>

                {/* Main 4-Column Footer Grid */}
                <div className="footer-main-grid">

                    {/* Column 1: Brand & Status */}
                    <div className="footer-col footer-col-brand">
                        <a href="#home" onClick={(e) => handleLinkClick(e, 'home')} className="footer-logo-link">
                            <h3 className="footer-logo">
                                VISHAL<span className="logo-dot">.</span>
                            </h3>
                        </a>
                        <div className="footer-role-badge">
                            Frontend Developer • Full Stack Developer • Data Analyst
                        </div>
                        <p className="footer-brand-statement">
                            Building fast, responsive, and aesthetically pleasing web interfaces with modern engineering practices.
                        </p>
                        <div className="footer-status-pill">
                            <span className="pulse-green-dot"></span>
                            <span>Available for Full-Time & Freelance</span>
                        </div>
                        <div className="footer-location-tag">
                            <FaMapMarkerAlt className="loc-icon" />
                            <span>Tamil Nadu, India • Working Worldwide</span>
                        </div>
                    </div>

                    {/* Column 2: Quick Navigation */}
                    <div className="footer-col footer-col-nav">
                        <h4 className="footer-col-heading">Quick Navigation</h4>
                        <ul className="footer-nav-list">
                            {quickLinks.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={`#${link.target}`}
                                        onClick={(e) => handleLinkClick(e, link.target)}
                                        className="footer-nav-anchor"
                                    >
                                        <span className="nav-bullet">›</span>
                                        <span>{link.name}</span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Tech Specializations */}
                    <div className="footer-col footer-col-tech">
                        <h4 className="footer-col-heading">Specialization</h4>
                        <p className="footer-tech-desc">Core tools & libraries in my daily workflow:</p>
                        <div className="footer-tech-chips-wrap">
                            {techChips.map((tech) => (
                                <span key={tech} className="footer-tech-chip">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Column 4: Channels & Socials */}
                    <div className="footer-col footer-col-social">
                        <h4 className="footer-col-heading">Channels</h4>
                        <p className="footer-social-desc">Connect with me across the web:</p>
                        <div className="footer-social-cards">
                            <a
                                href="https://github.com/vishal9932"
                                target="_blank"
                                rel="noreferrer"
                                className="footer-social-card github"
                                aria-label="GitHub Profile"
                            >
                                <div className="social-card-icon">
                                    <FaGithub />
                                </div>
                                <div className="social-card-info">
                                    <span className="social-card-name">GitHub</span>
                                    <span className="social-card-handle">@vishal9932</span>
                                </div>
                            </a>

                            <a
                                href="https://www.linkedin.com/in/vishal"
                                target="_blank"
                                rel="noreferrer"
                                className="footer-social-card linkedin"
                                aria-label="LinkedIn Profile"
                            >
                                <div className="social-card-icon">
                                    <FaLinkedin />
                                </div>
                                <div className="social-card-info">
                                    <span className="social-card-name">LinkedIn</span>
                                    <span className="social-card-handle">Vishal</span>
                                </div>
                            </a>

                            <a
                                href="mailto:vishal9932@mountzion.ac.in"
                                className="footer-social-card email"
                                aria-label="Send Direct Email"
                            >
                                <div className="social-card-icon">
                                    <FaEnvelope />
                                </div>
                                <div className="social-card-info">
                                    <span className="social-card-name">Email</span>
                                    <span className="social-card-handle">vishal9932@mountzion.ac.in</span>
                                </div>
                            </a>
                        </div>
                    </div>

                </div>

                {/* Divider Line */}
                <div className="footer-gradient-divider"></div>

                {/* Bottom Bar: Copyright & Tech */}
                <div className="footer-bottom-bar">
                    <div className="footer-bottom-left">
                        <p className="footer-copyright-text">
                            &copy; 2026 <strong>Vishal</strong>. All rights reserved.
                        </p>
                    </div>
                    <div className="footer-bottom-right">
                        <p className="footer-tech-credit">
                            Engineered with <FaHeart className="heart-icon" /> using React 19 & Pure CSS
                        </p>
                    </div>
                </div>

            </div>

            {/* Floating Back to Top Button */}
            <button
                onClick={scrollToTop}
                className={`back-to-top-btn ${showScrollBtn ? 'visible' : ''}`}
                aria-label="Back to Top"
                title="Scroll back to top"
            >
                <FaArrowUp className="top-arrow-icon" />
            </button>
        </footer>
    );
}
