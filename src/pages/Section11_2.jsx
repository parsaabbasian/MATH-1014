import React from 'react';
import { motion } from 'framer-motion';
import MathBlock from '../components/MathBlock';
import StepByStep from '../components/StepByStep';
import PracticeExercise from '../components/PracticeExercise';
import { Sigma, Sparkles, Zap, Layout, GraduationCap, Target, Braces } from 'lucide-react';

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

            {/* I. Definition of a Series */}
            <motion.section variants={itemVariants} className="section-card glass-card">
                <div className="section-header">
                    <div className="section-icon-wrapper">
                        <Sigma size={28} />
                    </div>
                    <h2 className="section-title">I. Definition of a Series</h2>
                </div>
                <div style={{ fontSize: '1.2rem', lineHeight: '1.8' }}>
                    <div className="example-box" style={{ background: 'rgba(255, 107, 107, 0.05)', border: '1.5px solid rgba(255, 107, 107, 0.2)' }}>
                        <p>If we add the terms of a sequence <MathBlock math="\{a_n\}" inline />, we get an expression of the form:</p>
                        <MathBlock math="a_1 + a_2 + a_3 + \dots + a_n + \dots" block />
                        <p>which we show by <MathBlock math="\sum_{n=1}^{\infty} a_n" inline /> and call it a <strong>series</strong>.</p>
                    </div>

                    <div className="example-box" style={{ marginTop: '2rem' }}>
                        <div className="example-title">Example 1.1: Expanding Sequences</div>
                        <p style={{ marginBottom: '1.5rem' }}>Consider the following sequences and their resulting series:</p>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                            <div className="glass-card" style={{ padding: '1.5rem', background: 'rgba(0,0,0,0.1)' }}>
                                <div style={{ fontWeight: '800', color: 'var(--primary-light)', marginBottom: '0.5rem' }}>A. Exponential Sequence</div>
                                <MathBlock math="\left\{ \frac{1}{2^n} \right\}_{n=1}^{\infty} \Rightarrow \frac{1}{2} + \frac{1}{2^2} + \frac{1}{2^3} + \dots = \sum_{n=1}^{\infty} \frac{1}{2^n}" block />
                            </div>
                            <div className="glass-card" style={{ padding: '1.5rem', background: 'rgba(0,0,0,0.1)' }}>
                                <div style={{ fontWeight: '800', color: 'var(--primary-light)', marginBottom: '0.5rem' }}>B. Natural Numbers</div>
                                <MathBlock math="\left\{ n \right\}_{n=1}^{\infty} \Rightarrow 1 + 2 + 3 + \dots + n + \dots = \sum_{n=1}^{\infty} n" block />
                            </div>
                        </div>
                    </div>
                </div>
            </motion.section>

            {/* II. Partial Sums & Convergence */}
            <motion.section variants={itemVariants} className="section-card glass-card">
                <div className="section-header">
                    <div className="section-icon-wrapper">
                        <Braces size={28} />
                    </div>
                    <h2 className="section-title">II. Partial Sums & Convergence</h2>
                </div>
                <div className="example-box" style={{ background: 'rgba(251, 191, 36, 0.05)', border: '1.5px solid rgba(251, 191, 36, 0.2)' }}>
                    <p>Given a series <MathBlock math="\sum_{n=1}^{\infty} a_n = a_1 + a_2 + \dots" inline />, let <MathBlock math="s_n" inline /> denote its <strong>nth partial sum</strong>:</p>
                    <MathBlock math="s_n = \sum_{i=1}^{n} a_i = a_1 + a_2 + \dots + a_n" block />
                    <p style={{ marginTop: '1.5rem' }}>
                        If the sequence <MathBlock math="\{s_n\}" inline /> is convergent and <MathBlock math="\lim_{n \to \infty} s_n = s" inline /> exists as a real number, then the series <MathBlock math="\sum a_n" inline /> is called <strong>convergent</strong> and we write:
                    </p>
                    <MathBlock math="\sum_{n=1}^{\infty} a_n = s" block />
                    <p style={{ marginTop: '1.5rem' }}>
                        The number <MathBlock math="s" inline /> is called the <strong>sum</strong> of the series. If the sequence <MathBlock math="\{s_n\}" inline /> is divergent, then the series is called <strong>divergent</strong>.
                    </p>
                </div>
            </motion.section>

            {/* III. Geometric Series */}
            <motion.section variants={itemVariants} className="section-card glass-card">
                <div className="section-header">
                    <div className="section-icon-wrapper">
                        <Zap size={28} />
                    </div>
                    <h2 className="section-title">III. Geometric Series</h2>
                </div>
                <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem' }}>
                    Consider the following series in which <MathBlock math="r" inline /> and <MathBlock math="a" inline /> are nonzero real numbers:
                </p>
                <MathBlock math="a + ar + ar^2 + ar^3 + \dots + ar^{n-1} + \dots = \sum_{n=1}^{\infty} ar^{n-1}" block />

                <div className="example-box">
                    <div className="example-title">Case 1: r = 1</div>
                    <p>If <MathBlock math="r = 1" inline />, the series becomes:</p>
                    <MathBlock math="\sum_{n=1}^{\infty} a(1)^{n-1} = a + a + a + \dots" block />
                    <MathBlock math="s_n = \sum_{i=1}^{n} a = na" block />
                    <div className="result-banner">
                        Since <MathBlock math="\lim_{n \to \infty} na = \infty" inline />, the series <strong>diverges</strong>.
                    </div>
                </div>

                <div className="example-box" style={{ marginTop: '2.5rem' }}>
                    <div className="example-title">Case 2: r ≠ 1</div>
                    <p>Using the partial sum formula derivation:</p>
                    <StepByStep steps={[
                        <span><MathBlock math="s_n = a + ar + ar^2 + \dots + ar^{n-1}" inline /> (1)</span>,
                        <span>Multiply by r: <MathBlock math="rs_n = ar + ar^2 + ar^3 + \dots + ar^n" inline /> (2)</span>,
                        <span>Subtract (2) from (1): <MathBlock math="s_n - rs_n = a - ar^n" inline /></span>,
                        <span>Factor: <MathBlock math="s_n(1 - r) = a(1 - r^n)" inline /></span>,
                        <MathBlock math="s_n = \frac{a(1 - r^n)}{1 - r}" block />
                    ]} />

                    <div style={{ marginTop: '2rem' }}>
                        <p>Now, let's take the limit as <MathBlock math="n \to \infty" inline />:</p>
                        <ul style={{ listStyleType: 'none', padding: 0 }}>
                            <li style={{ marginBottom: '1.5rem', background: 'var(--bg)', padding: '1rem', borderRadius: '12px', borderLeft: '4px solid var(--success)' }}>
                                <strong>If |r| &lt; 1:</strong> <MathBlock math="\lim_{n\to\infty} r^n = 0" inline />, so <MathBlock math="\lim_{n\to\infty} s_n = \frac{a}{1 - r}" inline />.
                            </li>
                            <li style={{ background: 'var(--bg)', padding: '1rem', borderRadius: '12px', borderLeft: '4px solid var(--primary-light)' }}>
                                <strong>If |r| ≥ 1:</strong> <MathBlock math="\lim_{n\to\infty} r^n" inline /> does not exist (or is ∞), so the series <strong>diverges</strong>.
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="example-box" style={{ background: 'rgba(168, 85, 247, 0.05)', border: '1.5px solid rgba(168, 85, 247, 0.2)', marginTop: '2.5rem' }}>
                    <div className="example-title" style={{ color: 'var(--primary-light)' }}>Geometric Series Summary</div>
                    <p>The geometric series <MathBlock math="\sum_{n=1}^{\infty} ar^{n-1}" inline /> is:</p>
                    <p>• <strong>Convergent</strong> if <MathBlock math="|r| < 1" inline />, with sum <MathBlock math="S = \frac{a}{1-r}" inline />.</p>
                    <p>• <strong>Divergent</strong> if <MathBlock math="|r| \ge 1" inline />.</p>
                </div>
            </motion.section>

            {/* IV. Divergence Test & Harmonic Series */}
            <motion.section variants={itemVariants} className="section-card glass-card">
                <div className="section-header">
                    <div className="section-icon-wrapper">
                        <Target size={28} />
                    </div>
                    <h2 className="section-title">IV. Test for Divergence</h2>
                </div>
                <div className="example-box" style={{ background: 'rgba(239, 68, 68, 0.05)', border: '1.5px solid rgba(239, 68, 68, 0.2)' }}>
                    <p>If <MathBlock math="\lim_{n \to \infty} a_n" inline /> does not exist or if <MathBlock math="\lim_{n \to \infty} a_n \neq 0" inline />, then the series <MathBlock math="\sum_{n=1}^{\infty} a_n" inline /> is <strong>divergent</strong>.</p>
                </div>

                <div className="example-box" style={{ marginTop: '2.5rem' }}>
                    <div className="example-title">The Harmonic Series</div>
                    <p>Show that the <strong>harmonic series</strong> <MathBlock math="\sum_{n=1}^{\infty} \frac{1}{n}" inline /> is divergent.</p>
                    <MathBlock math="\sum_{n=1}^{\infty} \frac{1}{n} = 1 + \frac{1}{2} + \frac{1}{3} + \frac{1}{4} + \dots" block />
                    <StepByStep steps={[
                        <span><MathBlock math="s_2 = 1 + \frac{1}{2}" inline /></span>,
                        <span><MathBlock math="s_4 = 1 + \frac{1}{2} + \left(\frac{1}{3} + \frac{1}{4}\right) > 1 + \frac{1}{2} + \left(\frac{1}{4} + \frac{1}{4}\right) = 1 + \frac{2}{2}" inline /></span>,
                        <span><MathBlock math="s_8 = s_4 + \left(\frac{1}{5} + \dots + \frac{1}{8}\right) > 1 + \frac{2}{2} + \left(\frac{1}{8} + \dots + \frac{1}{8}\right) = 1 + \frac{3}{2}" inline /></span>,
                        <span>In general, <MathBlock math="s_{2^n} > 1 + \frac{n}{2}" inline />.</span>,
                        <div className="result-banner">
                            Since <MathBlock math="\lim_{n \to \infty} s_{2^n} = \infty" inline />, the harmonic series <strong>diverges</strong>.
                        </div>
                    ]} />
                </div>
            </motion.section>

            {/* More Examples Section */}
            <motion.section id="challenges" variants={itemVariants} className="section-card glass-card" style={{ border: '2px solid var(--primary-light)' }}>
                <div className="section-header">
                    <div className="section-icon-wrapper" style={{ background: 'var(--text)' }}>
                        <Sparkles size={28} style={{ color: 'var(--primary)' }} />
                    </div>
                    <h2 className="section-title">Challenge: Practice Exercises</h2>
                </div>

                <div style={{ display: 'grid', gap: '2rem' }}>
                    <PracticeExercise
                        difficulty="Simple"
                        question={<MathBlock math="4 + 3 + \frac{9}{4} + \frac{27}{16} + \dots" inline />}
                        correctAnswer="16"
                        steps={[
                            "Identify a and r.",
                            <span>First term <MathBlock math="a = 4" inline />.</span>,
                            <span>Ratio <MathBlock math="r = 3/4" inline />.</span>,
                            <span>Since <MathBlock math="|3/4| < 1" inline />, it converges.</span>,
                            <span><MathBlock math="S = \frac{4}{1 - 3/4} = \frac{4}{1/4} = 16" inline />.</span>
                        ]}
                    />

                    <PracticeExercise
                        difficulty="Medium"
                        question={<MathBlock math="\sum_{n=1}^{\infty} \frac{10^n}{(-9)^{n-1}}" inline />}
                        correctAnswer="divergent"
                        steps={[
                            <span>Expand the sum: <MathBlock math="\frac{10^1}{(-9)^0} + \frac{10^2}{(-9)^1} + \dots = 10 - \frac{100}{9} + \dots" inline /></span>,
                            <span><MathBlock math="a = 10" inline /> and <MathBlock math="r = -10/9" inline />.</span>,
                            <span>Since <MathBlock math="|r| = |-10/9| > 1" inline />, the series diverges.</span>
                        ]}
                    />

                    <PracticeExercise
                        difficulty="Hard"
                        question={<MathBlock math="\sum_{n=1}^{\infty} 2^{2n} 3^{1-n}" inline />}
                        correctAnswer="divergent"
                        steps={[
                            <span>Simplify the term: <MathBlock math="a_n = 4^n \cdot 3 \cdot 3^{-n} = 3 \cdot \left(\frac{4}{3}\right)^n" inline />.</span>,
                            <span>Rewrite as <MathBlock math="ar^{n-1}" inline />: <MathBlock math="3 \cdot \frac{4}{3} \cdot \left(\frac{4}{3}\right)^{n-1} = 4 \cdot \left(\frac{4}{3}\right)^{n-1}" inline />.</span>,
                            <span><MathBlock math="a = 4, r = 4/3" inline />.</span>,
                            <span>Since <MathBlock math="r > 1" inline />, the series diverges.</span>
                        ]}
                    />

                    <PracticeExercise
                        difficulty="VERY HARD"
                        question={<MathBlock math="\sum_{n=1}^{\infty} \left( \frac{1}{n} - \frac{1}{n+1} \right)" inline />}
                        correctAnswer="1"
                        steps={[
                            "This is a telescoping series.",
                            <span>Write out partial sums: <MathBlock math="s_n = (1 - 1/2) + (1/2 - 1/3) + \dots + (1/n - 1/(n+1))" inline />.</span>,
                            <span>All intermediate terms cancel, leaving <MathBlock math="s_n = 1 - \frac{1}{n+1}" inline />.</span>,
                            <span>Take the limit as <MathBlock math="n \to \infty" inline />: <MathBlock math="\lim s_n = 1 - 0 = 1" inline />.</span>
                        ]}
                    />
                </div>
            </motion.section>

        </motion.div>
    );
};

export default Section11_2;
