import React, { useState } from 'react';
import Reveal from './Reveal';

// Import images from assets/projects
import vinixInternshipImg from '../assets/projects/vinix-internship.png';
import vinixEnquiryImg from '../assets/projects/vinix-enquiry.png';
import musicImg from '../assets/projects/music website.png';
import interiorImg from '../assets/projects/interior work.png';
import jarvisImg from '../assets/projects/jarvis ai.png';
import constImg from '../assets/projects/construction.png';

export default function Projects() {
    const [activeCategory, setActiveCategory] = useState('all');

    const projectsData = [
        {
            title: 'VINIX Virtual Internship Platform',
            category: 'company',
            isCompany: true,
            badge: 'Company Project',
            companyName: 'VINIX',
            description: 'A comprehensive enterprise virtual internship ecosystem developed for VINIX. Features real-world project tracking, progress analytics milestones, student dashboard, mentor guidance, and verified digital certificates.',
            technology: ['React', 'Node.js', 'Express.js', 'MongoDB', 'REST APIs', 'Dashboard UI'],
            image: vinixInternshipImg,
            liveLink: 'https://vinix.com',
            codeLink: null,
            glowColor: 'cyan'
        },
        {
            title: 'VINIX Digital Products & Project Enquiry',
            category: 'company',
            isCompany: true,
            badge: 'Company Project',
            companyName: 'VINIX',
            description: 'A modern high-conversion corporate agency portal designed and built for VINIX to transform business ideas into powerful digital solutions. Features interactive client inquiry flows, dynamic project showcases, and responsive dark/light components.',
            technology: ['React', 'JavaScript', 'Tailwind CSS', 'Framer Motion', 'Node.js'],
            image: vinixEnquiryImg,
            liveLink: 'https://vinix.com',
            codeLink: null,
            glowColor: 'purple'
        },
        {
            title: 'Sastikeyan Construction',
            category: 'client',
            isCompany: false,
            description: 'A premium, modern construction website featuring a responsive layout, dynamic services, animated components, and professional styling tailored for an Indian construction firm.',
            technology: ['React', 'Tailwind CSS', 'Framer Motion', 'LightGallery', 'Swiper'],
            image: constImg,
            liveLink: 'https://vishal9932-maker.github.io/sk-construction/',
            codeLink: 'https://github.com/vishal9932-maker/sk-construction',
            glowColor: 'orange'
        },
        {
            title: 'Jarvis AI',
            category: 'personal',
            isCompany: false,
            description: "An AI assistant inspired by Iron Man's Jarvis that performs voice-based interactions, automates simple tasks, and demonstrates AI concepts with a futuristic interface.",
            technology: ['HTML', 'CSS', 'JavaScript', 'React', 'Python'],
            image: jarvisImg,
            liveLink: 'https://github.com/vishal9932-maker',
            codeLink: 'https://github.com/vishal9932-maker',
            glowColor: 'purple'
        },
        {
            title: 'VR Music',
            category: 'personal',
            isCompany: false,
            description: 'A modern music streaming website featuring a clean user interface, responsive design, playlists, and an engaging music experience.',
            technology: ['HTML', 'CSS', 'JavaScript', 'React'],
            image: musicImg,
            liveLink: 'https://vishal9932-maker.github.io/vr-music/',
            codeLink: 'https://github.com/vishal9932-maker/vr-music',
            glowColor: 'blue'
        },
        {
            title: 'Interior Website',
            category: 'personal',
            isCompany: false,
            description: 'A stylish home interior website showcasing furniture, room designs, modern layouts, image galleries, and responsive pages.',
            technology: ['HTML', 'CSS', 'JavaScript'],
            image: interiorImg,
            liveLink: 'https://vishal9932-maker.github.io/sk-interior/',
            codeLink: 'https://github.com/vishal9932-maker/sk-interior',
            glowColor: 'blue'
        }
    ];

    const filteredProjects = activeCategory === 'all'
        ? projectsData
        : activeCategory === 'company'
            ? projectsData.filter((p) => p.isCompany)
            : projectsData.filter((p) => !p.isCompany);

    return (
        <section id="projects" className="projects-section">
            <div className="container">

                {/* Section Title */}
                <Reveal animationType="fade-up">
                    <div className="section-header">
                        <span className="section-subtitle">Scope Of My Work</span>
                        <h2 className="section-title">Featured Projects</h2>
                        <div className="title-bar"></div>
                    </div>
                </Reveal>

                {/* Interactive Category Filter Bar */}
                <Reveal animationType="fade-up" delay={0.1}>
                    <div className="projects-filter-bar">
                        <button
                            type="button"
                            className={`project-filter-btn ${activeCategory === 'all' ? 'active' : ''}`}
                            onClick={() => setActiveCategory('all')}
                        >
                            All Projects ({projectsData.length})
                        </button>
                        <button
                            type="button"
                            className={`project-filter-btn ${activeCategory === 'company' ? 'active' : ''}`}
                            onClick={() => setActiveCategory('company')}
                        >
                            🏢 Company Projects (2)
                        </button>
                        <button
                            type="button"
                            className={`project-filter-btn ${activeCategory === 'personal' ? 'active' : ''}`}
                            onClick={() => setActiveCategory('personal')}
                        >
                            🚀 Client & Open Source (4)
                        </button>
                    </div>
                </Reveal>

                {/* Projects Grid */}
                <div className="projects-grid">
                    {filteredProjects.map((project, idx) => (
                        <Reveal
                            key={project.title}
                            animationType="fade-up"
                            delay={0.15 * (idx + 1)}
                        >
                            <div
                                className={`project-card glass-panel glow-${project.glowColor}`}
                                onClick={() => window.open(project.liveLink, '_blank')}
                                style={{ cursor: 'pointer' }}
                            >

                                {/* Visual Image container with zoom overlay */}
                                <div className="project-img-container">
                                    <img
                                        src={project.image}
                                        alt={`${project.title} Preview`}
                                        className="project-image"
                                        loading="lazy"
                                    />
                                    <div className="project-image-overlay">
                                        {project.isCompany ? (
                                            <span className="overlay-company-pill">
                                                <span className="live-dot-pulse"></span>
                                                🏢 Company Project
                                            </span>
                                        ) : (
                                            <span className="overlay-tech-count">{project.technology.length} Tech Stack</span>
                                        )}
                                    </div>
                                </div>

                                {/* Details block */}
                                <div className="project-details">
                                    <div className="project-title-header">
                                        <h3 className="project-title">{project.title}</h3>
                                    </div>
                                    <p className="project-description">{project.description}</p>

                                    {/* Tech stack items tags */}
                                    <div className="project-tech-tags">
                                        {project.technology.map((tech) => (
                                            <span key={tech} className="tech-tag">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Buttons */}
                                    <div className="project-actions">
                                        <a
                                            href={project.liveLink}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="btn-project btn-project-primary"
                                            onClick={(e) => e.stopPropagation()}
                                        >
                                            {project.isCompany ? 'Visit Platform' : 'Live Demo'}
                                            <svg className="btn-project-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                                                <path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                            </svg>
                                        </a>

                                        {project.codeLink ? (
                                            <a
                                                href={project.codeLink}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="btn-project btn-project-secondary"
                                                onClick={(e) => e.stopPropagation()}
                                            >
                                                GitHub
                                                <svg className="btn-project-icon-github" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                                                </svg>
                                            </a>
                                        ) : (
                                            <span className="btn-project btn-project-company">
                                                🔒 Company Project
                                            </span>
                                        )}
                                    </div>
                                </div>

                            </div>
                        </Reveal>
                    ))}
                </div>

            </div>
        </section>
    );
}
