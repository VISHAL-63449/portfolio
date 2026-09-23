import React, { useState } from 'react';
import Reveal from './Reveal';
import {
    FaUser,
    FaEnvelope,
    FaTag,
    FaCommentDots,
    FaPaperPlane,
    FaPhoneAlt,
    FaMapMarkerAlt,
    FaClock,
    FaGithub,
    FaLinkedin,
    FaCheckCircle,
    FaCopy,
    FaCheck,
    FaBolt
} from 'react-icons/fa';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [copiedField, setCopiedField] = useState(null);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });

        // Clear field error on change
        if (errors[name]) {
            setErrors({ ...errors, [name]: '' });
        }
    };

    const copyToClipboard = (text, field) => {
        navigator.clipboard.writeText(text);
        setCopiedField(field);
        setTimeout(() => setCopiedField(null), 2000);
    };

    const validateForm = () => {
        const tempErrors = {};

        if (!formData.name.trim()) {
            tempErrors.name = 'Full name is required';
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formData.email.trim()) {
            tempErrors.email = 'Email address is required';
        } else if (!emailRegex.test(formData.email)) {
            tempErrors.email = 'Please enter a valid email address';
        }

        if (!formData.subject.trim()) {
            tempErrors.subject = 'Subject is required';
        }

        if (!formData.message.trim()) {
            tempErrors.message = 'Message content is required';
        } else if (formData.message.trim().length < 10) {
            tempErrors.message = 'Message must be at least 10 characters long';
        }

        setErrors(tempErrors);
        return Object.keys(tempErrors).length === 0;
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();

        if (validateForm()) {
            setIsSubmitting(true);

            // Simulate sending delay
            setTimeout(() => {
                setIsSubmitting(false);
                setIsSubmitted(true);
                setFormData({ name: '', email: '', subject: '', message: '' });

                // Reset success banner after 6 seconds
                setTimeout(() => {
                    setIsSubmitted(false);
                }, 6000);
            }, 1200);
        }
    };

    return (
        <section id="contact" className="contact-section">
            <div className="container">

                {/* Section Header */}
                <Reveal animationType="fade-up">
                    <div className="section-header">
                        <span className="section-subtitle">Get In Touch</span>
                        <h2 className="section-title">Let's Connect</h2>
                        <div className="title-bar"></div>
                        <p className="section-description">
                            Have an opportunity, a project proposal, or just want to discuss modern web development? Reach out anytime!
                        </p>
                    </div>
                </Reveal>

                <div className="contact-grid">

                    {/* Left Panel: Contact Information & Interactive Cards */}
                    <Reveal animationType="fade-up" delay={0.2}>
                        <div className="contact-info-panel">
                            {/* Live Availability Card */}
                            <div className="contact-status-card">
                                <span className="status-pulse-dot"></span>
                                <div>
                                    <div className="status-title">Open for Opportunities</div>
                                    <div className="status-desc">Available for Full-Time Roles, Internships & Freelance</div>
                                </div>
                            </div>

                            <h3 className="info-panel-title">Contact Information</h3>
                            <p className="info-panel-desc">
                                I typically respond within 24 hours. Feel free to connect directly via email, phone, or LinkedIn.
                            </p>

                            <div className="info-items-container">
                                {/* Email Card */}
                                <div className="info-card-item">
                                    <div className="info-card-icon-wrap email">
                                        <FaEnvelope />
                                    </div>
                                    <div className="info-card-content">
                                        <span className="info-card-label">Email Address</span>
                                        <a href="mailto:vishal9932@mountzion.ac.in" className="info-card-value">
                                            vishal9932@mountzion.ac.in
                                        </a>
                                    </div>
                                    <button
                                        type="button"
                                        onClick={() => copyToClipboard('vishal9932@mountzion.ac.in', 'email')}
                                        className="info-copy-btn"
                                        title="Copy Email"
                                        aria-label="Copy Email"
                                    >
                                        {copiedField === 'email' ? <FaCheck className="copied-icon" /> : <FaCopy />}
                                    </button>
                                </div>

                                {/* Phone Card */}
                                <div className="info-card-item">
                                    <div className="info-card-icon-wrap phone">
                                        <FaPhoneAlt />
                                    </div>
                                    <div className="info-card-content">
                                        <span className="info-card-label">Direct Phone</span>
                                        <a href="tel:+916385475759" className="info-card-value">
                                            +91 6385475759
                                        </a>
                                    </div>
                                    <button
                                        type="button"
                                        onClick={() => copyToClipboard('+916385475759', 'phone')}
                                        className="info-copy-btn"
                                        title="Copy Phone Number"
                                        aria-label="Copy Phone Number"
                                    >
                                        {copiedField === 'phone' ? <FaCheck className="copied-icon" /> : <FaCopy />}
                                    </button>
                                </div>

                                {/* Location Card */}
                                <div className="info-card-item">
                                    <div className="info-card-icon-wrap location">
                                        <FaMapMarkerAlt />
                                    </div>
                                    <div className="info-card-content">
                                        <span className="info-card-label">Location</span>
                                        <span className="info-card-value">Karaikudi, Tamil Nadu, India</span>
                                    </div>
                                    <span className="info-tag">IST (UTC+5:30)</span>
                                </div>

                                {/* Working Hours Card */}
                                <div className="info-card-item">
                                    <div className="info-card-icon-wrap time">
                                        <FaClock />
                                    </div>
                                    <div className="info-card-content">
                                        <span className="info-card-label">Working Hours</span>
                                        <span className="info-card-value">Mon – Sat • 9:00 AM – 8:00 PM IST</span>
                                    </div>
                                </div>
                            </div>

                            {/* Social Profiles Row */}
                            <div className="info-social-block">
                                <span className="social-block-title">Follow & Connect</span>
                                <div className="contact-social-row">
                                    <a
                                        href="https://github.com/vishal9932"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="contact-social-pill"
                                        aria-label="GitHub"
                                    >
                                        <FaGithub />
                                        <span>GitHub</span>
                                    </a>
                                    <a
                                        href="https://www.linkedin.com/in/vishal"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="contact-social-pill"
                                        aria-label="LinkedIn"
                                    >
                                        <FaLinkedin />
                                        <span>LinkedIn</span>
                                    </a>
                                    <a
                                        href="mailto:vishal9932@mountzion.ac.in"
                                        className="contact-social-pill"
                                        aria-label="Email"
                                    >
                                        <FaEnvelope />
                                        <span>Email</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </Reveal>

                    {/* Right Panel: Sleek Cyber Form Card */}
                    <Reveal animationType="fade-up" delay={0.3}>
                        <div className="contact-form-panel">
                            {/* Form Header */}
                            <div className="form-panel-header">
                                <div className="form-header-badge">
                                    <FaBolt className="badge-sparkle-icon" />
                                    <span>Direct Message</span>
                                </div>
                                <h3 className="form-panel-title">Send a Direct Message</h3>
                                <p className="form-panel-subtitle">
                                    Got a project or opportunity? Send details and I will get back to you promptly.
                                </p>
                            </div>

                            {/* Success Toast */}
                            {isSubmitted && (
                                <div className="contact-success-banner">
                                    <FaCheckCircle className="success-icon" />
                                    <div className="success-text">
                                        <strong>Message Sent Successfully!</strong>
                                        <span>Thank you for reaching out. I will respond to your message shortly.</span>
                                    </div>
                                </div>
                            )}

                            <form onSubmit={handleFormSubmit} className="contact-form-styled" noValidate>

                                {/* Full Name */}
                                <div className="form-field-group">
                                    <label htmlFor="name" className="field-label">
                                        Full Name <span className="req-star">*</span>
                                    </label>
                                    <div className={`input-shell ${errors.name ? 'has-error' : ''}`}>
                                        <span className="input-icon-slot">
                                            <FaUser />
                                        </span>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            className="field-input"
                                            placeholder="e.g. John Doe"
                                            disabled={isSubmitting}
                                            autoComplete="name"
                                        />
                                    </div>
                                    {errors.name && <span className="field-error-msg">{errors.name}</span>}
                                </div>

                                {/* Email Address */}
                                <div className="form-field-group">
                                    <label htmlFor="email" className="field-label">
                                        Email Address <span className="req-star">*</span>
                                    </label>
                                    <div className={`input-shell ${errors.email ? 'has-error' : ''}`}>
                                        <span className="input-icon-slot">
                                            <FaEnvelope />
                                        </span>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            className="field-input"
                                            placeholder="e.g. john@company.com"
                                            disabled={isSubmitting}
                                            autoComplete="email"
                                        />
                                    </div>
                                    {errors.email && <span className="field-error-msg">{errors.email}</span>}
                                </div>

                                {/* Subject */}
                                <div className="form-field-group">
                                    <label htmlFor="subject" className="field-label">
                                        Subject <span className="req-star">*</span>
                                    </label>
                                    <div className={`input-shell ${errors.subject ? 'has-error' : ''}`}>
                                        <span className="input-icon-slot">
                                            <FaTag />
                                        </span>
                                        <input
                                            type="text"
                                            id="subject"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleInputChange}
                                            className="field-input"
                                            placeholder="e.g. Internship or Project Discussion"
                                            disabled={isSubmitting}
                                        />
                                    </div>
                                    {errors.subject && <span className="field-error-msg">{errors.subject}</span>}
                                </div>

                                {/* Message */}
                                <div className="form-field-group">
                                    <label htmlFor="message" className="field-label">
                                        Message <span className="req-star">*</span>
                                    </label>
                                    <div className={`input-shell textarea-shell ${errors.message ? 'has-error' : ''}`}>
                                        <span className="input-icon-slot textarea-icon-slot">
                                            <FaCommentDots />
                                        </span>
                                        <textarea
                                            id="message"
                                            name="message"
                                            rows="5"
                                            value={formData.message}
                                            onChange={handleInputChange}
                                            className="field-input field-textarea"
                                            placeholder="Please describe your project, requirements, or terms..."
                                            disabled={isSubmitting}
                                        />
                                    </div>
                                    {errors.message && <span className="field-error-msg">{errors.message}</span>}
                                </div>

                                {/* High-End Submit Action Button */}
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className={`contact-submit-btn ${isSubmitting ? 'submitting' : ''}`}
                                >
                                    <span className="btn-shine-sweep"></span>
                                    {isSubmitting ? (
                                        <div className="submit-loader-wrap">
                                            <div className="submit-spinner-ring"></div>
                                            <span>Sending Message...</span>
                                        </div>
                                    ) : (
                                        <div className="submit-content-wrap">
                                            <span>Send Message</span>
                                            <FaPaperPlane className="submit-arrow-icon" />
                                        </div>
                                    )}
                                </button>

                            </form>
                        </div>
                    </Reveal>

                </div>

            </div>
        </section>
    );
}
