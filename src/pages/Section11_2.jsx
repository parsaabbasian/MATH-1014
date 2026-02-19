import React from 'react';
import { motion } from 'framer-motion';
import MathBlock from '../components/MathBlock';
import StepByStep from '../components/StepByStep';
import PracticeExercise from '../components/PracticeExercise';
import { Sigma, Sparkles, Zap, Layout, GraduationCap, Target } from 'lucide-react';

const Section11_2 = () => {
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
                <motion.h1 variants={itemVariants} className="hero-title">
                    11.2 <span className="text-gradient">Infinite Series</span>
                </motion.h1>
                <motion.div variants={itemVariants} style={{ display: 'flex', gap: '1.5rem', marginTop: '2.5rem' }}>
                    <button
                        onClick={() => document.getElementById('challenges').scrollIntoView({ behavior: 'smooth' })}
                        className="btn-reveal"
                        style={{ padding: '0.8rem 1.8rem', fontSize: '1rem', cursor: 'pointer' }}
                    >
                        <Sparkles size={18} />
                        <span>Try Challenges</span>
                    </button>
                </motion.div>
            </header>

            {/* Intro Section */}
            <motion.section variants={itemVariants} className="section-card glass-card">
                <div className="section-header">
                    <div className="section-icon-wrapper">
                        <Sigma size={28} />
                    </div>
                    <h2 className="section-title">Definition of a Series</h2>
                </div>
                <div style={{ fontSize: '1.2rem', lineHeight: '1.8' }}>
                    <p>A series is what you get when you sum up the terms of a sequence <MathBlock math="a_n" inline />.</p>
                    <MathBlock math="a_1 + a_2 + a_3 + \dots = \sum_{n=1}^{\infty} a_n" block />
                </div>

                <div className="example-box">
                    <div className="example-title">Example 1: Sequence vs Series</div>
                    <p style={{ marginBottom: '1.5rem' }}>Let's see how sequences transform into their corresponding series:</p>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                        <div className="glass-card" style={{ padding: '1.5rem', background: 'rgba(0,0,0,0.1)' }}>
                            <div style={{ fontWeight: '800', color: 'var(--primary-light)', marginBottom: '0.5rem' }}>A. Exponential Growth</div>
                            <MathBlock math="\left\{ \frac{3}{5^n} \right\} \rightarrow \sum_{n=1}^{\infty} \frac{3}{5^n} = \frac{3}{5} + \frac{3}{25} + \dots" block />
                        </div>
                        <div className="glass-card" style={{ padding: '1.5rem', background: 'rgba(0,0,0,0.1)' }}>
                            <div style={{ fontWeight: '800', color: 'var(--primary-light)', marginBottom: '0.5rem' }}>B. Linear Terms</div>
                            <MathBlock math="\left\{ 2n \right\} \rightarrow \sum_{n=1}^{\infty} 2n = 2 + 4 + 6 + 8 + \dots" block />
                        </div>
                    </div>
                </div>

                <div className="example-box">
                    <div className="example-title">Partial Sums Concept</div>
                    <p style={{ marginBottom: '1rem' }}>How do we know if an infinite sum equals a specific number? We use the limit of <strong>Partial Sums</strong>:</p>
                    <MathBlock math="S_n = \sum_{i=1}^{n} a_i = a_1 + a_2 + \dots + a_n" block />
                    <div className="result-banner">
                        If <MathBlock math="\lim_{n \to \infty} S_n = S" inline /> exists, the series <strong>converges</strong> to S. Otherwise, it <strong>diverges</strong>.
                    </div>
                </div>
            </motion.section>

            {/* Geometric Series */}
            <motion.section variants={itemVariants} className="section-card glass-card">
                <div className="section-header">
                    <div className="section-icon-wrapper">
                        <Zap size={28} />
                    </div>
                    <h2 className="section-title">Geometric Series</h2>
                </div>
                <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem' }}>
                    A series of the form <MathBlock math="\sum_{n=1}^{\infty} ar^{n-1}" inline />.
                </p>
                <div className="result-banner" style={{ background: 'rgba(168, 85, 247, 0.05)', color: 'var(--text)', textAlign: 'left', padding: '1.5rem' }}>
                    <p>• Converges if <MathBlock math="|r| < 1" inline />. Sum is <MathBlock math="S = \frac{a}{1-r}" inline />.</p>
                    <p>• Diverges if <MathBlock math="|r| \ge 1" inline />.</p>
                </div>

                <div className="example-box">
                    <div className="example-title">Concept Example</div>
                    <MathBlock math="6 + 3 + \frac{3}{2} + \frac{3}{4} + \dots" block />
                    <StepByStep steps={[
                        <p>First term: <MathBlock math="a = 6" inline />. Ratio: <MathBlock math="r = \frac{3}{6} = \frac{1}{2}" inline />.</p>,
                        <p>Since <MathBlock math="|1/2| < 1" inline />, the series converges.</p>,
                        <MathBlock math="S = \frac{6}{1 - 1/2} = 12" block />,
                        <div className="result-banner">Verdict: <strong>Convergent</strong> to 12</div>
                    ]} />
                </div>
            </motion.section>

            {/* More Examples Section */}
            <motion.section id="challenges" variants={itemVariants} className="section-card glass-card" style={{ border: '2px solid var(--primary-light)' }}>
                <div className="section-header">
                    <div className="section-icon-wrapper" style={{ background: 'var(--text)' }}>
                        <Sparkles size={28} style={{ color: 'var(--primary)' }} />
                    </div>
                    <h2 className="section-title">Challenge: More Examples</h2>
                </div>

                <div style={{ display: 'grid', gap: '2rem' }}>
                    <PracticeExercise
                        difficulty="Simple"
                        question="\sum_{n=1}^{\infty} 5\left( -\frac{7}{4} \right)^{n-1}"
                        correctAnswer="divergent"
                        steps={[
                            "Identify the ratio r.",
                            "r = -7/4, so |r| = 1.75.",
                            "Since |r| > 1, the series diverges."
                        ]}
                    />

                    <PracticeExercise
                        difficulty="Medium"
                        question="\sum_{n=1}^{\infty} \frac{3}{10^n}"
                        correctAnswer="1/3"
                        steps={[
                            "Expand: 3/10 + 3/100 + 3/1000 + ...",
                            "First term a = 3/10. Ratio r = 1/10.",
                            "Sum formula: S = a / (1 - r) = (3/10) / (9/10).",
                            "S = 3/9 = 1/3."
                        ]}
                    />

                    <PracticeExercise
                        difficulty="Hard"
                        question="\sum_{n=1}^{\infty} \frac{2n}{n+1}"
                        correctAnswer="divergent"
                        steps={[
                            "Apply the Divergence Test: limit of individual terms.",
                            "lim (2n / (n + 1)) as n approaches infinity is 2.",
                            "Since the limit is not 0, the total sum must diverge."
                        ]}
                    />

                    <PracticeExercise
                        difficulty="VERY HARD"
                        question="\sum_{n=1}^{\infty} \frac{1}{n^2 + n}"
                        correctAnswer="1"
                        steps={[
                            "Use partial fractions: 1/(n(n+1)) = 1/n - 1/(n+1).",
                            "Write out partial sums Sn: (1 - 1/2) + (1/2 - 1/3) + ... + (1/n - 1/(n+1)).",
                            "This is a Telescoping Series. Most terms cancel out!",
                            "Sn = 1 - 1/(n+1).",
                            "As n approaches infinity, Sn approaches 1."
                        ]}
                    />
                </div>
            </motion.section>

        </motion.div>
    );
};

export default Section11_2;
