import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { BookOpen, ArrowRight, Zap, Target, Layout } from 'lucide-react';

const Topics = () => {
    const topics = [
        {
            id: "11.1",
            title: "Infinite Sequences",
            description: "Learn about the building blocks of series and how numbers can go on forever.",
            path: "/",
            icon: <Zap size={24} />,
            status: "Available"
        },
        {
            id: "11.2",
            title: "Infinite Series",
            description: "What happens when you add up an infinite number of terms? Find out here.",
            path: "/11-2",
            icon: <Target size={24} />,
            status: "Coming Soon"
        },
        {
            id: "11.3",
            title: "The Integral Test",
            description: "Using integration to determine the convergence of positive series.",
            path: "/11-3",
            icon: <Layout size={24} />,
            status: "Coming Soon"
        },
        {
            id: "11.4",
            title: "Comparison Tests",
            description: "Compare series to known ones to determine their behavior.",
            path: "/11-4",
            icon: <BookOpen size={24} />,
            status: "Coming Soon"
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
            transition: { duration: 0.5, ease: 'easeOut' }
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
                    <BookOpen size={16} />
                    <span>Curriculum Overview</span>
                </motion.div>
                <motion.h1 variants={itemVariants} className="hero-title">
                    Explore <span className="text-gradient">Topics</span>
                </motion.h1>
            </header>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
                {topics.map((topic, index) => (
                    <motion.div
                        key={topic.id}
                        variants={itemVariants}
                        className="glass-card"
                        style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1.5rem', position: 'relative', overflow: 'hidden' }}
                    >
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                            <div className="section-icon-wrapper" style={{ padding: '0.75rem', borderRadius: '14px' }}>
                                {topic.icon}
                            </div>
                            <span style={{
                                fontSize: '0.7rem',
                                fontWeight: '800',
                                background: topic.status === 'Available' ? 'rgba(168, 85, 247, 0.2)' : 'rgba(255, 255, 255, 0.05)',
                                color: topic.status === 'Available' ? 'var(--primary-light)' : 'var(--text-muted)',
                                padding: '0.4rem 0.8rem',
                                borderRadius: '100px',
                                textTransform: 'uppercase',
                                letterSpacing: '0.05em'
                            }}>
                                {topic.status}
                            </span>
                        </div>

                        <div>
                            <div style={{ fontSize: '0.85rem', fontWeight: '800', color: 'var(--primary-light)', marginBottom: '0.5rem' }}>{topic.id}</div>
                            <h3 style={{ fontSize: '1.5rem', fontWeight: '800', marginBottom: '0.75rem' }}>{topic.title}</h3>
                            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.6' }}>{topic.description}</p>
                        </div>

                        {topic.status === 'Available' ? (
                            <Link
                                to={topic.path}
                                className="btn-reveal"
                                style={{ width: 'fit-content', marginTop: 'auto', textDecoration: 'none', padding: '0.7rem 1.5rem' }}
                            >
                                <span>Study Now</span>
                                <ArrowRight size={18} />
                            </Link>
                        ) : (
                            <div
                                className="btn-reset"
                                style={{ width: 'fit-content', marginTop: 'auto', padding: '0.7rem 1.5rem', cursor: 'default', opacity: 0.5 }}
                            >
                                <span>Locked</span>
                            </div>
                        )}
                    </motion.div>
                ))}
            </div>

            <footer style={{ marginTop: '2rem', textAlign: 'center', padding: '2rem' }}>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', opacity: 0.6 }}>
                    New topics are added weekly. Stay tuned!
                </p>
            </footer>
        </motion.div>
    );
};

export default Topics;
