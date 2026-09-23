import React, { useState, useEffect } from 'react';

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeTab, setActiveTab] = useState('home');

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Projects', href: '#projects' },
        { name: 'Education', href: '#education' },
        { name: 'Certificates', href: '#certificates' },
        { name: 'Services', href: '#services' },
        { name: 'Contact', href: '#contact' },
    ];

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 40) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }

            const scrollPosition = window.scrollY + 160;

            for (let i = 0; i < navLinks.length; i++) {
                const link = navLinks[i];
                const sectionId = link.href.slice(1);
                const section = document.getElementById(sectionId);
                if (section) {
                    const offsetTop = section.offsetTop;
                    const offsetHeight = section.offsetHeight;

                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setActiveTab(sectionId);
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleNavClick = (e, targetId) => {
        e.preventDefault();
        setMobileMenuOpen(false);

        const targetElement = document.getElementById(targetId.slice(1));
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 85,
                behavior: 'smooth',
            });
            setActiveTab(targetId.slice(1));
        }
    };

    return (
        <header className={`navbar-wrapper ${isScrolled ? 'is-scrolled' : ''}`}>
            <nav className="navbar-pill">
                {/* Logo */}
                <a href="#home" onClick={(e) => handleNavClick(e, '#home')} className="nav-logo">
                    VISHAL<span className="nav-logo-dot">.</span>
                </a>

                {/* Desktop Menu */}
                <ul className="nav-menu">
                    {navLinks.map((link) => {
                        const isActive = activeTab === link.href.slice(1);
                        return (
                            <li key={link.name} className="nav-item">
                                <a
                                    href={link.href}
                                    onClick={(e) => handleNavClick(e, link.href)}
                                    className={`nav-link ${isActive ? 'active' : ''}`}
                                >
                                    <span className="nav-link-text">{link.name}</span>
                                    {isActive && <span className="nav-active-glow"></span>}
                                </a>
                            </li>
                        );
                    })}
                </ul>

                {/* Hamburger Toggle */}
                <button
                    className={`hamburger ${mobileMenuOpen ? 'active' : ''}`}
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    aria-label="Toggle navigation menu"
                >
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </button>
            </nav>

            {/* Mobile Drawer */}
            <div className={`mobile-nav ${mobileMenuOpen ? 'open' : ''}`}>
                <div className="mobile-nav-backdrop" onClick={() => setMobileMenuOpen(false)}></div>
                <div className="mobile-nav-content">
                    <ul className="mobile-menu-list">
                        {navLinks.map((link, idx) => {
                            const isActive = activeTab === link.href.slice(1);
                            return (
                                <li
                                    key={link.name}
                                    className="mobile-nav-item"
                                    style={{ transitionDelay: `${idx * 0.05}s` }}
                                >
                                    <a
                                        href={link.href}
                                        onClick={(e) => handleNavClick(e, link.href)}
                                        className={`mobile-nav-link ${isActive ? 'active' : ''}`}
                                    >
                                        <span>{link.name}</span>
                                        {isActive && <span className="mobile-active-indicator"></span>}
                                    </a>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </header>
    );
}
