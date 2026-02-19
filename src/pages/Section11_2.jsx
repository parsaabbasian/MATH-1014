import React from 'react';
import { motion } from 'framer-motion';
import MathBlock from '../components/MathBlock';
import StepByStep from '../components/StepByStep';
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
                <motion.div variants={itemVariants} className="hero-badge">
                    <GraduationCap size={16} />
                    <span>MATH 1014 | Calculus II</span>
                </motion.div>
                <motion.h1 variants={itemVariants} className="hero-title">
                    11.2 <span className="text-gradient">Infinite Series</span>
                </motion.h1>
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
                            <MathBlock math="\left\{ \frac{3}{5^n} \right\} \rightarrow \sum_{n=1}^{\infty} \frac{3}{5^n} = \frac{3}{5} + \frac{3}{25} + \frac{3}{125} + \dots" block />
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
                    <div className="example-title">Option A</div>
                    <MathBlock math="6 + 3 + \frac{3}{2} + \frac{3}{4} + \dots" block />
                    <StepByStep steps={[
                        <p>First term: <MathBlock math="a = 6" inline />. Ratio: <MathBlock math="r = \frac{3}{6} = \frac{1}{2}" inline />.</p>,
                        <p>Since <MathBlock math="|1/2| < 1" inline />, the series converges.</p>,
                        <MathBlock math="S = \frac{6}{1 - 1/2} = 12" block />,
                        <div className="result-banner">Verdict: <strong>Convergent</strong> to 12</div>
                    ]} />
                </div>

                <div className="example-box">
                    <div className="example-title">Option B</div>
                    <MathBlock math="\sum_{n=1}^{\infty} 5\left( -\frac{7}{4} \right)^{n-1}" block />
                    <StepByStep steps={[
                        <p>Here <MathBlock math="a = 5" inline /> and <MathBlock math="r = -7/4" inline />.</p>,
                        <p>Check the ratio: <MathBlock math="|r| = \frac{7}{4} = 1.75" inline />.</p>,
                        <p>Since <MathBlock math="1.75 > 1" inline />, the sum never settles down.</p>,
                        <div className="result-banner">Verdict: <strong>Divergent</strong></div>
                    ]} />
                </div>

                <div className="example-box">
                    <div className="example-title">Option C</div>
                    <MathBlock math="\sum_{n=1}^{\infty} \frac{3^n}{2^{n-1}}" block />
                    <StepByStep steps={[
                        <p>Rewrite to see the pattern: <MathBlock math="\sum_{n=1}^{\infty} 3 \cdot \left(\frac{3}{2}\right)^{n-1}" inline />.</p>,
                        <p>The ratio <MathBlock math="r = \frac{3}{2}" inline /> is greater than 1.</p>,
                        <div className="result-banner">Verdict: <strong>Divergent</strong></div>
                    ]} />
                </div>
            </motion.section>

            {/* Divergence Test */}
            <motion.section variants={itemVariants} className="section-card glass-card">
                <div className="section-header">
                    <div className="section-icon-wrapper">
                        <Target size={28} />
                    </div>
                    <h2 className="section-title">The Divergence Test</h2>
                </div>
                <div className="example-box" style={{ background: 'var(--surface)' }}>
                    <p style={{ fontWeight: '800', color: 'var(--primary-light)' }}>The Shortcut:</p>
                    <p>If <MathBlock math="\lim_{n \to \infty} a_n \neq 0" inline />, the series <strong>MUST</strong> diverge.</p>
                </div>

                <div className="example-box">
                    <div className="example-title">Option D</div>
                    <MathBlock math="\sum_{n=1}^{\infty} \frac{2n}{n+1}" block />
                    <StepByStep steps={[
                        <p>Check the limit of the terms: <MathBlock math="\lim_{n \to \infty} \frac{2n}{n+1}" inline />.</p>,
                        <p>As n goes to infinity, the terms approach <strong>2</strong>.</p>,
                        <p>Since <MathBlock math="2 \neq 0" inline />, the sum will keep adding ~2 forever.</p>,
                        <div className="result-banner">Verdict: <strong>Divergent</strong></div>
                    ]} />
                </div>

                <div className="example-box">
                    <div className="example-title">Option E</div>
                    <MathBlock math="\sum_{n=1}^{\infty} \frac{1}{2n} = \frac{1}{2} + \frac{1}{4} + \frac{1}{6} + \dots" block />
                    <StepByStep steps={[
                        <p>This is <MathBlock math="\frac{1}{2}" inline /> times the <strong>Harmonic Series</strong> (<MathBlock math="\sum \frac{1}{n}" inline />).</p>,
                        <p>We know the Harmonic Series grows to infinity (even if slowly!).</p>,
                        <div className="result-banner">Verdict: <strong>Divergent</strong></div>
                    ]} />
                </div>
            </motion.section>

            <div style={{ marginTop: '3rem', padding: '1.5rem', display: 'flex', justifyContent: 'center' }}>
                <div className="glass-card" style={{ padding: '0.6rem 2rem', borderRadius: '100px', fontSize: '0.85rem', color: 'var(--text-muted)', border: '1px solid var(--border)' }}>
                    © 2026 MATH 1014 | Practice & Mastery
                </div>
            </div>
        </motion.div>
    );
};

export default Section11_2;
