import React from 'react';
import Reveal from './Reveal';
import {
    FaGithub,
    FaLinkedinIn,
    FaEnvelope,
    FaReact,
    FaNodeJs,
    FaPython,
    FaBriefcase,
    FaCode,
    FaFolder,
    FaAward,
    FaArrowRight,
    FaDownload
} from 'react-icons/fa';

// Dynamic typewriter roles
const ROLES = [
    'Full Stack Developer',
    'Frontend Specialist',
    'Data Analyst',
    'Python Developer'
];

export default function Hero() {
    const baseUrl = import.meta.env.BASE_URL || '/';
    const profileImgSrc = `${baseUrl.replace(/\/$/, '')}/profile.jpeg`;

    const [roleIndex, setRoleIndex] = React.useState(0);
    const [currentText, setCurrentText] = React.useState('');
    const [isDeleting, setIsDeleting] = React.useState(false);

    React.useEffect(() => {
        const fullText = ROLES[roleIndex];
        const typingSpeed = isDeleting ? 40 : 85;

        const timer = setTimeout(() => {
            if (!isDeleting) {
                setCurrentText(fullText.substring(0, currentText.length + 1));
                if (currentText === fullText) {
                    setTimeout(() => setIsDeleting(true), 2200);
                }
            } else {
                setCurrentText(fullText.substring(0, currentText.length - 1));
                if (currentText === '') {
                    setIsDeleting(false);
                    setRoleIndex((prev) => (prev + 1) % ROLES.length);
                }
            }
        }, typingSpeed);

        return () => clearTimeout(timer);
    }, [currentText, isDeleting, roleIndex]);

    const handleScrollTo = (id) => {
        const element = document.getElementById(id);
        if (element) {
            window.scrollTo({
                top: element.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    };

    const handleResumeDownload = (e) => {
        e.preventDefault();
        const resumeContent = `VISHAL
Frontend Developer | Full Stack Developer | Data Analyst
Phone: +91 6385475759  Email: vishal9932@mountzion.ac.in
Karaikudi, Tamil Nadu, India
GitHub: github.com/vishal9932

CAREER OBJECTIVE
Currently pursuing B.Tech in Information Technology and seeking opportunities to apply my frontend, full-stack development, and data analytics skills in real-world projects. Passionate about learning new technologies and building impactful software.

EDUCATION
Mount Zion College of Engineering and Technology
Bachelor of Technology (Information Technology), 3rd Year Student.

TECHNICAL SKILLS
- Frontend: HTML5, CSS3, JavaScript, React.js
- Backend: Node.js, Express.js
- Databases: MySQL, MongoDB
- Programming: Python
- Data Analytics: Python, Excel, Data Visualization
- Tools: Git, GitHub, VS Code

PROJECTS
1. VINIX Virtual Internship Platform: Comprehensive enterprise virtual internship ecosystem with real-world project tracking, progress analytics, and verified certification.
2. VINIX Digital Products Portal: High-conversion corporate agency and customer enquiry platform transforming business ideas into powerful web applications.
3. VR Music: Stream music online, responsive player, intuitive playlists.
4. Interior Website: Sleek design layout for home interiors and room configurations.
5. Jarvis AI: Voice assistant executing tasks and displaying futuristic UI elements.
6. Sastikeyan Construction: Modern construction website with responsive layout and animated components.

SERVICES
- Frontend Development & React.js Development
- Full Stack Development
- Responsive Web Design
- UI Development
- Data Analysis & Website Optimization`;

        const blob = new Blob([resumeContent], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'Vishal_Resume.txt';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    };

    return (
        <section id="home" className="hero-section">
            {/* Ambient Background & Layered Elements */}
            <div className="hero-bg-grid" aria-hidden="true"></div>
            <div className="hero-ambient-purple" aria-hidden="true"></div>
            <div className="hero-ambient-blue" aria-hidden="true"></div>
            <div className="hero-curved-waves" aria-hidden="true"></div>

            {/* Faint Background Code Snippet */}
            <div className="hero-bg-code" aria-hidden="true">
                <span className="code-bracket">&#123;</span>
                <div className="code-snippet-body">
                    <p><span className="code-kw">const</span> success =</p>
                    <p className="code-indent">hardWork +</p>
                    <p className="code-indent">consistency +</p>
                    <p className="code-indent">betterTomorrow;</p>
                </div>
            </div>

            {/* Flying Letters & Developer Glyphs in Atmosphere */}
            <div className="hero-flying-letters-layer" aria-hidden="true">
                <span className="flying-glyph glyph-1">&lt;/&gt;</span>
                <span className="flying-glyph glyph-2">&#123;&nbsp;&#125;</span>
                <span className="flying-glyph glyph-3">const</span>
                <span className="flying-glyph glyph-4">React</span>
                <span className="flying-glyph glyph-5">Python</span>
                <span className="flying-glyph glyph-6">=&gt;</span>
                <span className="flying-glyph glyph-7">01</span>
                <span className="flying-glyph glyph-8">Node</span>
                <span className="flying-glyph glyph-9">AI</span>
                <span className="flying-glyph glyph-10">JS</span>
            </div>

            {/* Glowing Accent Particles */}
            <div className="hero-particles" aria-hidden="true">
                <span className="particle p1"></span>
                <span className="particle p2"></span>
                <span className="particle p3"></span>
                <span className="particle p4"></span>
                <span className="particle p5"></span>
            </div>

            <div className="hero-container">
                {/* Main 2-Column Desktop Grid */}
                <div className="hero-columns-grid">
                    
                    {/* LEFT COLUMN */}
                    <div className="hero-left-content">
                        {/* Status Badge */}
                        <Reveal animationType="fade-up" delay={0.1}>
                            <div className="hero-status-pill">
                                <span className="status-dot"></span>
                                <span className="status-label">AVAILABLE FOR OPPORTUNITIES</span>
                            </div>
                        </Reveal>

                        {/* Greeting */}
                        <Reveal animationType="fade-up" delay={0.2}>
                            <p className="hero-salutation">Hello, I'm</p>
                        </Reveal>

                        {/* Huge Name Heading with Flying Letters */}
                        <Reveal animationType="fade-up" delay={0.3}>
                            <h1 className="hero-name-heading" aria-label="VISHAL">
                                {'VISHAL'.split('').map((letter, idx) => (
                                    <span
                                        key={idx}
                                        className="flying-letter"
                                        style={{ '--letter-index': idx }}
                                    >
                                        {letter}
                                    </span>
                                ))}
                                <span className="hero-name-gradient-dot flying-letter-dot">.</span>
                            </h1>
                        </Reveal>

                        {/* Gradient Role with Typing Effect & Blinking Cursor */}
                        <Reveal animationType="fade-up" delay={0.4}>
                            <div className="hero-role-wrapper">
                                <span className="hero-role-gradient">{currentText || 'Full Stack Developer'}</span>
                                <span className="hero-blinking-cursor">|</span>
                            </div>
                        </Reveal>

                        {/* Description */}
                        <Reveal animationType="fade-up" delay={0.5}>
                            <p className="hero-description">
                                I build modern, responsive and scalable web applications that combine clean design with powerful functionality.
                            </p>
                        </Reveal>

                        {/* CTA Buttons */}
                        <Reveal animationType="fade-up" delay={0.6}>
                            <div className="hero-cta-buttons">
                                <button
                                    onClick={() => handleScrollTo('projects')}
                                    className="hero-btn-primary"
                                    id="hero-view-work-btn"
                                >
                                    <span>View My Work</span>
                                    <FaArrowRight className="hero-btn-arrow" />
                                    <span className="hero-btn-shine"></span>
                                </button>

                                <button
                                    onClick={handleResumeDownload}
                                    className="hero-btn-secondary"
                                    id="hero-resume-btn"
                                >
                                    <FaDownload className="hero-btn-download-icon" />
                                    <span>Download Resume</span>
                                </button>
                            </div>
                        </Reveal>

                        {/* Social Links */}
                        <Reveal animationType="fade-up" delay={0.7}>
                            <div className="hero-social-links">
                                <a
                                    href="https://github.com/vishal9932"
                                    target="_blank"
                                    rel="noreferrer"
                                    aria-label="Vishal's GitHub"
                                    className="hero-social-btn"
                                >
                                    <FaGithub />
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/vishal"
                                    target="_blank"
                                    rel="noreferrer"
                                    aria-label="Vishal's LinkedIn"
                                    className="hero-social-btn"
                                >
                                    <FaLinkedinIn />
                                </a>
                                <a
                                    href="mailto:vishal9932@mountzion.ac.in"
                                    aria-label="Email Vishal"
                                    className="hero-social-btn"
                                >
                                    <FaEnvelope />
                                </a>
                            </div>
                        </Reveal>
                    </div>

                    {/* RIGHT COLUMN: Layered Futuristic Profile Visual */}
                    <div className="hero-right-visual">
                        <Reveal animationType="zoom" delay={0.3}>
                            <div className="hero-profile-composition">
                                
                                {/* Orbiting Curved Neon Rings */}
                                <div className="orbit-track-ring" aria-hidden="true">
                                    <span className="orbit-dot orbit-dot-1"></span>
                                    <span className="orbit-dot orbit-dot-2"></span>
                                    <span className="orbit-dot orbit-dot-3"></span>
                                </div>

                                {/* Floating Card 1: Upper-Left (Full Stack Developer) */}
                                <div className="hero-floating-card card-fullstack">
                                    <div className="floating-card-icon-box purple">
                                        <FaCode />
                                    </div>
                                    <div className="floating-card-texts">
                                        <span className="floating-card-heading">FULL STACK</span>
                                        <span className="floating-card-subheading">Developer</span>
                                    </div>
                                </div>

                                {/* Organic Futuristic Shield Container */}
                                <div className="hero-profile-shield-wrapper">
                                    {/* Ambient Glows around Shield */}
                                    <div className="shield-ambient-glow" aria-hidden="true"></div>
                                    <div className="shield-neon-border" aria-hidden="true"></div>

                                    {/* Inner image container */}
                                    <div className="shield-image-box">
                                        <div className="shield-cosmic-backdrop" aria-hidden="true"></div>
                                        <img
                                            src={profileImgSrc}
                                            alt="Vishal - Full Stack Developer"
                                            className="hero-profile-portrait"
                                            loading="eager"
                                        />
                                    </div>
                                </div>

                                {/* Floating Card 2: Upper-Right (Open to Work - sleek capsule) */}
                                <div className="hero-floating-card card-opentowork">
                                    <div className="card-open-icon-wrap">
                                        <span className="card-open-green-dot"></span>
                                        <FaBriefcase className="card-briefcase-icon" />
                                    </div>
                                    <span className="card-opentowork-title">OPEN TO WORK</span>
                                </div>

                                {/* Floating Card 3: Lower-Right (React, Node, Python) */}
                                <div className="hero-floating-card card-techstack">
                                    <div className="card-tech-icons">
                                        <FaReact className="tech-icon-brand react-cyan" title="React" />
                                        <FaNodeJs className="tech-icon-brand node-green" title="Node.js" />
                                        <FaPython className="tech-icon-brand python-gold" title="Python" />
                                    </div>
                                    <div className="card-tech-footer">
                                        <span className="card-tech-cyan-dot"></span>
                                        <span className="card-tech-label">REACT &bull; NODE &bull; PYTHON</span>
                                    </div>
                                </div>

                            </div>
                        </Reveal>
                    </div>

                </div>

                {/* BOTTOM STATISTICS PANEL (Matching Reference Image) */}
                <Reveal animationType="fade-up" delay={0.8}>
                    <div className="hero-stats-panel">
                        {/* Stat 1: 10+ Projects */}
                        <div
                            className="hero-stat-card"
                            onClick={() => handleScrollTo('projects')}
                            role="button"
                            tabIndex={0}
                            title="Click to view projects"
                        >
                            <div className="stat-card-icon-box cyan">
                                <FaFolder />
                            </div>
                            <div className="stat-card-details">
                                <span className="stat-card-number">10+</span>
                                <span className="stat-card-label">Projects</span>
                            </div>
                        </div>

                        <div className="hero-stat-separator" aria-hidden="true"></div>

                        {/* Stat 2: 5+ Technologies */}
                        <div
                            className="hero-stat-card"
                            onClick={() => handleScrollTo('skills')}
                            role="button"
                            tabIndex={0}
                            title="Click to view skills"
                        >
                            <div className="stat-card-icon-box purple">
                                <FaCode />
                            </div>
                            <div className="stat-card-details">
                                <span className="stat-card-number">5+</span>
                                <span className="stat-card-label">Technologies</span>
                            </div>
                        </div>

                        <div className="hero-stat-separator" aria-hidden="true"></div>

                        {/* Stat 3: Certificates Earned */}
                        <div
                            className="hero-stat-card"
                            onClick={() => handleScrollTo('certificates')}
                            role="button"
                            tabIndex={0}
                            title="Click to view certificates"
                        >
                            <div className="stat-card-icon-box cyan">
                                <FaAward />
                            </div>
                            <div className="stat-card-details">
                                <span className="stat-card-heading">Certificates</span>
                                <span className="stat-card-label">Earned</span>
                            </div>
                        </div>

                        <div className="hero-stat-separator" aria-hidden="true"></div>

                        {/* Stat 4: Open to Work - Let's Connect */}
                        <div
                            className="hero-stat-card"
                            onClick={() => handleScrollTo('contact')}
                            role="button"
                            tabIndex={0}
                            title="Click to contact Vishal"
                        >
                            <div className="stat-card-icon-box green">
                                <span className="stat-card-live-dot"></span>
                                <FaBriefcase />
                            </div>
                            <div className="stat-card-details">
                                <span className="stat-card-heading">Open to Work</span>
                                <span className="stat-card-label">Let's Connect</span>
                            </div>
                        </div>
                    </div>
                </Reveal>

            </div>
        </section>
    );
}
