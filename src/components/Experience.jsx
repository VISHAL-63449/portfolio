import React from 'react';
import Reveal from './Reveal';

export default function Experience() {
    const objectiveMilestones = [
        {
            period: '2025 - Present',
            role: 'Company Project Developer',
            organization: 'VINIX Web Platforms & Client Solutions',
            desc: 'Designed and engineered production web applications for VINIX, including the Virtual Internship Platform (progress tracking milestones, certification verification, mentor dashboard) and the Digital Products & Customer Enquiry portal.',
            skills: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'REST APIs', 'UI/UX Engineering']
        },
        {
            period: '2024 - 2025',
            role: 'Application Development Phase',
            organization: 'Full Stack & AI Development',
            desc: 'Developed Jarvis AI voice companion, integrated Python scripting with responsive web wrappers, created custom stream mechanisms for VR Music, and coded architectural layout websites.',
            skills: ['Python Integration', 'Voice Automation', 'Responsive Assets', 'Client-side Engineering']
        },
        {
            period: '2023 - 2024',
            role: 'Foundational Phase',
            organization: 'Technical Engineering Roots',
            desc: 'Acquired strong problem-solving skills, deep understanding of relational databases (MySQL, MongoDB), basic scripting, and styling semantics (HTML5, CSS3, ES6+ Javascript).',
            skills: ['MySQL', 'Data Visualization', 'Core Programming', 'Algorithms']
        }
    ];

    return (
        <section id="experience" className="experience-section">
            <div className="container">

                {/* Section Title */}
                <Reveal animationType="fade-up">
                    <div className="section-header">
                        <span className="section-subtitle">Professional Path</span>
                        <h2 className="section-title">Career Objective</h2>
                        <div className="title-bar"></div>
                    </div>
                </Reveal>

                {/* Career Timeline */}
                <div className="timeline-container">
                    <div className="timeline-line"></div>

                    {objectiveMilestones.map((item, idx) => (
                        <div key={item.role} className="timeline-item">
                            {/* Timeline Indicator Dot */}
                            <div className="timeline-dot-wrapper">
                                <div className="timeline-dot"></div>
                                <div className="timeline-dot-glow"></div>
                            </div>

                            {/* Timeline Content Block */}
                            <Reveal
                                animationType={idx % 2 === 0 ? 'slide-left' : 'slide-right'}
                                delay={0.1}
                                width="100%"
                            >
                                <div className="timeline-content glass-panel">
                                    <span className="timeline-period">{item.period}</span>
                                    <h3 className="timeline-role">{item.role}</h3>
                                    <h4 className="timeline-org">{item.organization}</h4>
                                    <p className="timeline-desc">{item.desc}</p>

                                    <div className="timeline-skills">
                                        {item.skills.map((skill) => (
                                            <span key={skill} className="timeline-skill-tag">
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </Reveal>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
