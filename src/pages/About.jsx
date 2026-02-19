import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Target, Sparkles, GraduationCap } from 'lucide-react';

const About = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    const itemVariants = {
        hidden: { y: 25, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1]
            }
        }
    };

    return (
        <motion.div
            className="main-content"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            <header className="hero-header">
                <div className="hero-glow" />
                <motion.div variants={itemVariants} className="hero-badge">
                    <Sparkles size={16} />
                    <span>About MATH 1014</span>
                </motion.div>
                <motion.h1 variants={itemVariants} className="hero-title">
                    Mastering <span className="text-gradient">Calculus II</span>
                </motion.h1>
            </header>

            <motion.section variants={itemVariants} className="section-card glass-card">
                <div className="section-header">
                    <div className="section-icon-wrapper">
                        <Target size={28} />
                    </div>
                    <h2 className="section-title">Our Mission</h2>
                </div>
                <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', lineHeight: '1.8' }}>
                    MATH 1014 was built with a simple goal: to make complex mathematical concepts intuitive and accessible.
                    We believe that every student has the potential to master Calculus when given the right tools and a clear,
                    interactive path to discovery.
                </p>
            </motion.section>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                <motion.div variants={itemVariants} className="example-box" style={{ margin: 0 }}>
                    <div className="example-title">Interactive Learning</div>
                    <p style={{ color: 'var(--text-muted)' }}>
                        Instead of just showing answers, we walk you through the logic step-by-step,
                        allowing you to explore at your own pace.
                    </p>
                </motion.div>

                <motion.div variants={itemVariants} className="example-box" style={{ margin: 0 }}>
                    <div className="example-title">Premium Design</div>
                    <p style={{ color: 'var(--text-muted)' }}>
                        A clean, distraction-free environment designed to help you focus on what matters most:
                        learning and understanding.
                    </p>
                </motion.div>
            </div>

            <motion.section variants={itemVariants} className="section-card glass-card" style={{ marginTop: '2rem', textAlign: 'center' }}>
                <div style={{ marginBottom: '1rem', color: 'var(--text-muted)' }}>
                    Designed & Developed by
                </div>
                <a
                    href="https://parsaabbasian.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gradient"
                    style={{ fontSize: '1.5rem', textDecoration: 'none', fontWeight: '800' }}
                >
                    Parsa Abbasian
                </a>
            </motion.section>

        </motion.div>
    );
};

export default About;
