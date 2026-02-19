import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, PlayCircle, Book, Code, Globe, MessageSquare } from 'lucide-react';

const Resources = () => {
    const categories = [
        {
            title: "Top Video Guides",
            icon: <PlayCircle className="text-gradient" size={24} />,
            items: [
                { name: "Professor Leonard", desc: "The gold standard for full-length Calculus lectures.", link: "https://www.youtube.com/user/professorleonard57" },
                { name: "3Blue1Brown", desc: "Visualizing calculus concepts through the Essence of Calculus series.", link: "https://www.youtube.com/@3blue1brown" },
                { name: "The Organic Chemistry Tutor", desc: "Great for quick, clear step-by-step problem solving.", link: "https://www.youtube.com/@TheOrganicChemistryTutor" }
            ]
        },
        {
            title: "Reference & Practice",
            icon: <Book className="text-gradient" size={24} />,
            items: [
                { name: "Paul's Online Math Notes", desc: "Incredibly detailed notes and practice problems for Calc II.", link: "https://tutorial.math.lamar.edu/" },
                { name: "Symbolab", desc: "Excellent step-by-step calculator for verifying your work.", link: "https://www.symbolab.com/" },
                { name: "WolframAlpha", desc: "The ultimate computational engine for complex integrals.", link: "https://www.wolframalpha.com/" }
            ]
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
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
                <motion.h1 variants={itemVariants} className="hero-title">
                    Learning <span className="text-gradient">Resources</span>
                </motion.h1>
                <motion.p variants={itemVariants} className="hero-description" style={{ maxWidth: '600px', margin: '0 auto' }}>
                    A curated list of tools, websites, and creators that make mastering Calculus II easier.
                </motion.p>
            </header>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2.5rem', marginTop: '2rem' }}>
                {categories.map((category, idx) => (
                    <motion.div key={idx} variants={itemVariants} className="section-card glass-card" style={{ height: 'fit-content' }}>
                        <div className="section-header" style={{ marginBottom: '1.5rem' }}>
                            <div className="section-icon-wrapper">
                                {category.icon}
                            </div>
                            <h2 className="section-title" style={{ fontSize: '1.5rem' }}>{category.title}</h2>
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                            {category.items.map((item, i) => (
                                <a
                                    key={i}
                                    href={item.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="example-box"
                                    style={{
                                        display: 'block',
                                        textDecoration: 'none',
                                        margin: 0,
                                        transition: 'transform 0.2s ease',
                                        cursor: 'pointer'
                                    }}
                                >
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                                        <h3 style={{ color: 'var(--text)', fontSize: '1.1rem', fontWeight: '800' }}>{item.name}</h3>
                                        <ExternalLink size={16} style={{ color: 'var(--primary-light)' }} />
                                    </div>
                                    <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.5' }}>{item.desc}</p>
                                </a>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
};

export default Resources;
