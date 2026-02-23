import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { BookOpen, ArrowRight, Zap, Target, Layout, Sparkles, Layers, Activity } from 'lucide-react';

const Topics = () => {
    const [activeChapter, setActiveChapter] = useState('All');

    const topics = [
        {
            id: "7.7",
            chapter: "7",
            title: "Approximate Integration",
            description: "Learn logical methods to estimate integrals when exact antiderivatives don't exist.",
            path: "/7-7",
            icon: <Layout size={24} />,
            status: "Available"
        },
        {
            id: "11.1",
            chapter: "11",
            title: "Infinite Sequences",
            description: "Learn about the building blocks of series and how numbers can go on forever.",
            path: "/11-1",
            icon: <Zap size={24} />,
            status: "Available"
        },
        {
            id: "11.2",
            chapter: "11",
            title: "Infinite Series",
            description: "What happens when you add up an infinite number of terms? Find out here.",
            path: "/11-2",
            icon: <Target size={24} />,
            status: "Available"
        },
        {
            id: "11.3",
            chapter: "11",
            title: "The Integral Test",
            description: "Use your integration skills to determine if a series converges or diverges.",
            path: "/11-3",
            icon: <Activity size={24} />,
            status: "Available"
        }
    ];

    const chapters = ['All', '7', '11'];
    const filteredTopics = activeChapter === 'All'
        ? topics
        : topics.filter(t => t.chapter === activeChapter);

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
            transition: {
                duration: 0.8,
                ease: [0.25, 1, 0.5, 1] // Smoother ease-out
            }
        },
        hover: {
            y: -8,
            scale: 1.02,
            transition: {
                duration: 0.4,
                ease: [0.25, 1, 0.5, 1]
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
                <motion.div variants={itemVariants} className="hero-badge" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <BookOpen size={16} />
                    <span>Curriculum Overview</span>
                </motion.div>
                <motion.h1 variants={itemVariants} className="hero-title">
                    Explore the <span className="text-gradient">MATH 1014</span> topics:
                </motion.h1>
                <motion.p variants={itemVariants} className="hero-description" style={{ maxWidth: '700px', margin: '0 auto 2.5rem' }}>
                    Interactive step-by-step guides for MATH 1014. Explore complex Calculus II concepts through modern, AI-powered discovery.
                </motion.p>

                {/* Chapter Filter */}
                <motion.div variants={itemVariants} style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginBottom: '3rem' }}>
                    {chapters.map((chapter) => (
                        <button
                            key={chapter}
                            onClick={() => setActiveChapter(chapter)}
                            className={activeChapter === chapter ? 'btn-reveal' : 'btn-reset'}
                            style={{
                                padding: '0.6rem 2rem',
                                fontSize: '0.9rem',
                                borderRadius: '12px',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '8px',
                                background: activeChapter === chapter ? 'var(--primary-gradient)' : 'var(--surface)',
                                color: activeChapter === chapter ? 'white' : 'var(--text-muted)',
                                border: activeChapter === chapter ? 'none' : '1.5px solid var(--border)',
                                boxShadow: activeChapter === chapter ? '0 10px 20px -5px var(--primary-glow)' : 'none'
                            }}
                        >
                            <Layers size={16} />
                            <span>{chapter === 'All' ? 'All Topics' : `Chapter ${chapter}`}</span>
                        </button>
                    ))}
                </motion.div>
            </header>

            <motion.div
                layout
                style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}
            >
                <AnimatePresence mode='popLayout'>
                    {filteredTopics.map((topic) => (
                        <motion.div
                            key={topic.id}
                            layout
                            variants={itemVariants}
                            initial="hidden"
                            animate="visible"
                            whileHover="hover"
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.3 }}
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
                                <div style={{ fontSize: '0.85rem', fontWeight: '800', color: 'var(--primary-light)', marginBottom: '0.5rem' }}>Topic {topic.id}</div>
                                <h3 style={{ fontSize: '1.5rem', fontWeight: '800', marginBottom: '0.75rem' }}>{topic.title}</h3>
                                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.6' }}>{topic.description}</p>
                            </div>

                            {topic.status === 'Available' ? (
                                <div style={{ display: 'flex', gap: '1rem', marginTop: 'auto', flexWrap: 'wrap' }}>
                                    <Link
                                        to={topic.path}
                                        className="btn-reveal"
                                        style={{ textDecoration: 'none', padding: '0.7rem 1.2rem', fontSize: '0.9rem' }}
                                    >
                                        <span>Study Now</span>
                                        <ArrowRight size={16} />
                                    </Link>
                                    <Link
                                        to={`${topic.path}#challenges`}
                                        className="btn-reset"
                                        style={{ textDecoration: 'none', padding: '0.7rem 1.2rem', fontSize: '0.9rem', width: 'auto', border: '1.5px solid var(--border)' }}
                                        onClick={() => {
                                            setTimeout(() => {
                                                const el = document.getElementById('challenges');
                                                if (el) el.scrollIntoView({ behavior: 'smooth' });
                                            }, 100);
                                        }}
                                    >
                                        <Sparkles size={16} />
                                        <span>Practice</span>
                                    </Link>
                                </div>
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
                </AnimatePresence>
            </motion.div>

        </motion.div>
    );
};

export default Topics;
