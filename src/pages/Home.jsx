import React from 'react';
import { motion } from 'framer-motion';
import MathBlock from '../components/MathBlock';
import StepByStep from '../components/StepByStep';
import { MousePointer2, Zap, Layout, GraduationCap } from 'lucide-react';

const Home = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15 }
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
                    <GraduationCap size={16} />
                    <span>MATH 1014 | Calculus II Mastery</span>
                </motion.div>
                <motion.h1 variants={itemVariants} className="hero-title">
                    11.1 <span className="text-gradient">Infinite Sequences</span>
                </motion.h1>
                <motion.p variants={itemVariants} className="hero-description">
                    "A sequence can be thought of as a function whose domain is the set of positive integers."
                </motion.p>
            </header>

            {/* Part 1: Finding a formula */}
            <motion.section variants={itemVariants} className="section-card glass-card">
                <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', marginBottom: '3rem' }}>
                    <div style={{ background: 'var(--primary)', padding: '0.8rem', borderRadius: '16px', boxShadow: '0 8px 24px var(--primary-glow)' }}>
                        <Layout style={{ color: 'white' }} size={28} />
                    </div>
                    <h2 style={{ fontSize: '2.4rem', fontWeight: '800' }}>I. General Term Discovery</h2>
                </div>

                <div className="example-box">
                    <div className="example-title">Concept 1.1</div>
                    <p style={{ marginBottom: '2rem' }}>Determine the general term formula <MathBlock math="a_n" inline /> and evaluate long-term convergence properties.</p>

                    <div style={{ marginTop: '2rem' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', background: 'var(--surface)', padding: '1.5rem', borderRadius: '16px', border: '1px solid var(--border)' }}>
                            <span style={{ fontWeight: '900', color: 'var(--primary)' }}>A</span>
                            <MathBlock math="\left\{ 2, \frac{1}{2}, \frac{1}{8}, \frac{1}{32}, \frac{1}{128}, \dots \right\}" block />
                        </div>

                        <StepByStep steps={[
                            <p>Identify the common ratio by comparing terms: <MathBlock math="\frac{a_{n+1}}{a_n} = \frac{1/2}{2} = \frac{1}{4}" inline />.</p>,
                            <p>This is a <strong>Geometric Sequence</strong> with initial term <MathBlock math="a_1 = 2" inline /> and ratio <MathBlock math="r = \frac{1}{4}" inline />.</p>,
                            <div>
                                <p>Apply the general formula <MathBlock math="a_n = a_1 r^{n-1}" inline />:</p>
                                <MathBlock math="a_n = 2\left(\frac{1}{4}\right)^{n-1}" block />
                            </div>,
                            <div style={{ background: 'rgba(34, 197, 94, 0.1)', padding: '1.5rem', borderRadius: '16px', borderLeft: '5px solid var(--success)', marginTop: '1.5rem' }}>
                                <span style={{ color: 'var(--success)', fontWeight: '800' }}>Asymptotics:</span> Since <MathBlock math="\left| r \right| < 1" inline />, the sequence decays.
                                <MathBlock math="\lim_{n \to \infty} a_n = 0 \implies \text{Convergent}" block />
                            </div>
                        ]} />
                    </div>

                    <div style={{ marginTop: '5rem', paddingTop: '3rem', borderTop: '2px dashed var(--border)' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', background: 'var(--surface)', padding: '1.5rem', borderRadius: '16px', border: '1px solid var(--border)' }}>
                            <span style={{ fontWeight: '900', color: 'var(--secondary)' }}>B</span>
                            <MathBlock math="\left\{ \frac{1}{9}, -\frac{2}{16}, \frac{3}{25}, -\frac{4}{36}, \frac{5}{49}, \dots \right\}" block />
                        </div>

                        <StepByStep steps={[
                            <p>Observe independent patterns: Numerators are simply <MathBlock math="n" inline />, while denominators grow as <MathBlock math="(n+2)^2" inline />.</p>,
                            <p>The sequence alternates signs starting with positive, requiring the factor <MathBlock math="(-1)^{n+1}" inline />.</p>,
                            <div>
                                <p>Synthesize the explicit formula:</p>
                                <MathBlock math="a_n = (-1)^{n+1} \frac{n}{(n+2)^2}" block />
                            </div>,
                            <div style={{ background: 'rgba(34, 197, 94, 0.1)', padding: '1.5rem', borderRadius: '16px', borderLeft: '5px solid var(--success)', marginTop: '1.5rem' }}>
                                <span style={{ color: 'var(--success)', fontWeight: '800' }}>Stability Analysis:</span> The magnitude vanishes as the denominator outpaces the numerator.
                                <MathBlock math="\lim_{n \to \infty} \left| a_n \right| = \lim_{n \to \infty} \frac{n}{n^2+4n+4} = 0 \implies \text{Convergent}" block />
                            </div>
                        ]} />
                    </div>
                </div>
            </motion.section>

            {/* Part 2: Finding a limit */}
            <motion.section variants={itemVariants} className="section-card glass-card">
                <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', marginBottom: '3rem' }}>
                    <div style={{ background: 'var(--secondary)', padding: '0.8rem', borderRadius: '16px', boxShadow: '0 8px 24px rgba(168, 85, 247, 0.4)' }}>
                        <Zap style={{ color: 'white' }} size={28} />
                    </div>
                    <h2 style={{ fontSize: '2.4rem', fontWeight: '800' }}>II. Analytical Limits</h2>
                </div>

                <div className="example-box">
                    <div className="example-title">Proposition 1.2</div>
                    <p style={{ fontSize: '1.2rem', marginBottom: '2.5rem' }}>Evaluate the rigorous limit for the rational sequence:</p>
                    <div style={{ marginBottom: '2.5rem' }}>
                        <MathBlock math="a_n = \frac{2n^3}{n^3 + 5}" block />
                    </div>

                    <StepByStep steps={[
                        <p>Divide through by the dominant term in the denominator, <MathBlock math="n^3" inline />:</p>,
                        <MathBlock math="a_n = \frac{2}{1 + \frac{5}{n^3}}" block />,
                        <p>Utilize the fundamental limit law: <MathBlock math="\lim_{n \to \infty} \frac{k}{n^p} = 0" inline /> for <MathBlock math="p > 0" inline />.</p>,
                        <MathBlock math="\lim_{n \to \infty} a_n = \frac{2}{1 + 0} = 2" block />,
                        <div style={{ background: 'var(--success)', color: 'white', padding: '1rem', borderRadius: '12px', fontWeight: 'bold', textAlign: 'center' }}>
                            Conclusion: The sequence converges to the limit $L = 2$.
                        </div>
                    ]} />
                </div>
            </motion.section>

            {/* Part 3: Determine convergence */}
            <motion.section variants={itemVariants} className="section-card glass-card">
                <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', marginBottom: '4rem' }}>
                    <div style={{ background: 'var(--primary)', padding: '0.8rem', borderRadius: '16px', boxShadow: '0 8px 24px var(--primary-glow)' }}>
                        <MousePointer2 style={{ color: 'white' }} size={28} />
                    </div>
                    <h2 style={{ fontSize: '2.4rem', fontWeight: '800' }}>III. Convergence Classification</h2>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(450px, 1fr))', gap: '3rem' }}>
                    {/* Growth */}
                    <div className="example-box" style={{ margin: 0, borderTop: '6px solid var(--error)', borderLeft: 'none' }}>
                        <div className="example-title" style={{ color: 'var(--error)' }}>Polynomial Growth</div>
                        <MathBlock math="a_n = \frac{n^2}{n + 4}" block />
                        <StepByStep steps={[
                            <p>Rewrite via division: <MathBlock math="a_n = \frac{n}{1 + \frac{4}{n}}" inline />.</p>,
                            <p>The numerator grows unboundedly while the denominator approaches unity.</p>,
                            <MathBlock math="\lim_{n \to \infty} a_n = \infty" block />,
                            <div style={{ color: 'var(--error)', fontWeight: '900', textAlign: 'center', fontSize: '1.4rem', border: '2px solid var(--error)', padding: '0.5rem', borderRadius: '10px' }}>DIVERGENT</div>
                        ]} />
                    </div>

                    {/* Exponential */}
                    <div className="example-box" style={{ margin: 0, borderTop: '6px solid var(--success)', borderLeft: 'none' }}>
                        <div className="example-title" style={{ color: 'var(--success)' }}>Exponential Decay</div>
                        <MathBlock math="a_n = \frac{4^{n+1}}{7^n}" block />
                        <StepByStep steps={[
                            <p>Express in geometric form: <MathBlock math="a_n = 4 \cdot \left(\frac{4}{7}\right)^n" inline />.</p>,
                            <p>Since the base <MathBlock math="\left| 4/7 \right| < 1" inline />, the geometric series property holds.</p>,
                            <MathBlock math="\lim_{n \to \infty} a_n = 4 \cdot 0 = 0" block />,
                            <div style={{ color: 'var(--success)', fontWeight: '900', textAlign: 'center', fontSize: '1.4rem', border: '2px solid var(--success)', padding: '0.5rem', borderRadius: '10px' }}>CONVERGENT</div>
                        ]} />
                    </div>

                    {/* Abs Val */}
                    <div className="example-box" style={{ margin: 0, borderTop: '6px solid var(--primary)', borderLeft: 'none' }}>
                        <div className="example-title" style={{ color: 'var(--primary)' }}>Absolute Value Theorem</div>
                        <MathBlock math="a_n = \frac{(-1)^n n^3}{n^4 + 6}" block />
                        <StepByStep steps={[
                            <p>Evaluate the absolute limit: <MathBlock math="\left| a_n \right| = \frac{n^3}{n^4+6}" inline />.</p>,
                            <p>As <MathBlock math="n \to \infty" inline />, the degree of the denominator dominates.</p>,
                            <p>Recall: If <MathBlock math="\lim \left| a_n \right| = 0" inline />, then <MathBlock math="\lim a_n = 0" inline />.</p>,
                            <div style={{ color: 'var(--primary)', fontWeight: '900', textAlign: 'center' }}>CONVERGES TO 0</div>
                        ]} />
                    </div>

                    {/* Continuity */}
                    <div className="example-box" style={{ margin: 0, borderTop: '6px solid var(--secondary)', borderLeft: 'none' }}>
                        <div className="example-title" style={{ color: 'var(--secondary)' }}>Continuity Principle</div>
                        <MathBlock math="a_n = \sin\left(\frac{3}{n}\right)" block />
                        <StepByStep steps={[
                            <p>Input analysis: <MathBlock math="\lim_{n \to \infty} \frac{3}{n} = 0" inline />.</p>,
                            <p>Due to the continuity of the sine function at the origin:</p>,
                            <MathBlock math="\lim_{n \to \infty} \sin\left(\frac{3}{n}\right) = \sin(0) = 0" block />,
                            <div style={{ color: 'var(--secondary)', fontWeight: '900', textAlign: 'center' }}>CONVERGENT</div>
                        ]} />
                    </div>
                </div>
            </motion.section>

            <footer style={{ marginTop: '10rem', textAlign: 'center', padding: '6rem 2rem', borderTop: '1px solid var(--border)', background: 'var(--surface)' }}>
                <p style={{ color: 'var(--text)', fontWeight: '800', fontSize: '1.2rem', marginBottom: '0.75rem' }}>MATH 1014: Calculus II</p>
                <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', fontFamily: 'var(--font-serif)', fontStyle: 'italic', maxWidth: '600px', margin: '0 auto' }}>
                    "The laws of nature are but the mathematical thoughts of God." — Johannes Kepler
                </p>
            </footer>
        </motion.div>
    );
};

export default Home;
