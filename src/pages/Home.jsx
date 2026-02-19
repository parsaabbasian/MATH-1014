import React from 'react';
import { motion } from 'framer-motion';
import MathBlock from '../components/MathBlock';
import StepByStep from '../components/StepByStep';
import { MousePointer2, Zap, Layout, Sparkles, GraduationCap } from 'lucide-react';

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
            <header className="hero-header" style={{ textAlign: 'center' }}>
                <div className="hero-bg" />
                <motion.div variants={itemVariants} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(99, 102, 241, 0.1)', padding: '0.5rem 1rem', borderRadius: '20px', color: 'var(--primary)', fontWeight: '600', fontSize: '0.9rem', marginBottom: '1.5rem', fontFamily: 'var(--font-sans)' }}>
                    <GraduationCap size={16} />
                    <span>Calculus II Mastery Series</span>
                </motion.div>
                <motion.h1 variants={itemVariants} style={{ fontSize: '4.5rem', marginBottom: '1.5rem', fontWeight: '800', letterSpacing: '-0.03em', fontFamily: 'var(--font-sans)' }}>
                    11.1 <span className="text-gradient">Infinite Sequences</span>
                </motion.h1>
                <motion.p variants={itemVariants} style={{ color: 'var(--text-muted)', fontSize: '1.3rem', maxWidth: '800px', margin: '0 auto', lineHeight: '1.8', fontFamily: 'var(--font-serif)', fontStyle: 'italic' }}>
                    "A sequence can be thought of as a function whose domain is the set of positive integers."
                </motion.p>
            </header>

            {/* Part 1: Finding a formula */}
            <motion.section variants={itemVariants} className="section-card glass-card">
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2.5rem' }}>
                    <div style={{ background: 'var(--primary)', padding: '0.8rem', borderRadius: '14px', boxShadow: '0 8px 16px var(--primary-glow)' }}>
                        <Layout style={{ color: 'white' }} size={26} />
                    </div>
                    <h2 style={{ fontSize: '2.2rem', fontWeight: '700', fontFamily: 'var(--font-sans)' }}>I. The General Term Formula</h2>
                </div>

                <div className="example-box">
                    <div className="example-title">Example 1.1</div>
                    <p style={{ marginBottom: '1.5rem' }}>Find the general term formula <MathBlock math="a_n" inline /> for each sequence and describe its convergence behavior.</p>

                    <div style={{ marginTop: '1.5rem' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', background: 'rgba(99, 102, 241, 0.05)', padding: '1.25rem', borderRadius: '12px', border: '1px solid rgba(99, 102, 241, 0.1)' }}>
                            <span style={{ fontWeight: 'bold' }}>A)</span> <MathBlock math="\{ 2, 1/2, 1/8, 1/32, 1/128, \dots \}" block />
                        </div>

                        <StepByStep steps={[
                            <p>Observe the ratio between consecutive terms: <MathBlock math="\frac{a_{n+1}}{a_n} = \frac{1/2}{2} = \frac{1}{4}" inline />.</p>,
                            <p>Identify this as a <strong>geometric sequence</strong> with initial term <MathBlock math="a_1 = 2" inline /> and common ratio <MathBlock math="r = 1/4" inline />.</p>,
                            <div>
                                <p>Construct the general formula using <MathBlock math="a_n = a_1 r^{n-1}" inline />:</p>
                                <MathBlock math="a_n = 2\left(\frac{1}{4}\right)^{n-1}" block />
                            </div>,
                            <div style={{ background: 'rgba(34, 197, 94, 0.1)', padding: '1.25rem', borderRadius: '12px', borderLeft: '4px solid var(--success)', marginTop: '1rem' }}>
                                <span style={{ color: 'var(--success)', fontWeight: 'bold' }}>Behavior:</span> Since <MathBlock math="|r| < 1" inline />, the terms approach zero.
                                <MathBlock math="\lim_{n \to \infty} a_n = 0 \implies \text{Convergent}" block />
                            </div>
                        ]} />
                    </div>

                    <div style={{ marginTop: '4rem', paddingTop: '2.5rem', borderTop: '1px solid var(--border)' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', background: 'rgba(168, 85, 247, 0.05)', padding: '1.25rem', borderRadius: '12px', border: '1px solid rgba(168, 85, 247, 0.1)' }}>
                            <span style={{ fontWeight: 'bold' }}>B)</span> <MathBlock math="\{ \frac{1}{9}, -\frac{2}{16}, \frac{3}{25}, -\frac{4}{36}, \frac{5}{49}, \dots \}" block />
                        </div>

                        <StepByStep steps={[
                            <p>Analyze the components: Numerators follow <MathBlock math="n" inline />, Denominators follow <MathBlock math="(n+2)^2" inline />.</p>,
                            <p>Account for the alternating signs starting with positive: <MathBlock math="(-1)^{n+1}" inline />.</p>,
                            <div>
                                <p>Synthesize the general term:</p>
                                <MathBlock math="a_n = (-1)^{n+1} \frac{n}{(n+2)^2}" block />
                            </div>,
                            <div style={{ background: 'rgba(34, 197, 94, 0.1)', padding: '1.25rem', borderRadius: '12px', borderLeft: '4px solid var(--success)', marginTop: '1rem' }}>
                                <span style={{ color: 'var(--success)', fontWeight: 'bold' }}>Behavior:</span> The alternating values oscillate but their magnitude vanishes.
                                <MathBlock math="\lim_{n \to \infty} |a_n| = \lim_{n \to \infty} \frac{n}{n^2+4n+4} = 0 \implies \text{Convergent}" block />
                            </div>
                        ]} />
                    </div>
                </div>
            </motion.section>

            {/* Part 2: Finding a limit */}
            <motion.section variants={itemVariants} className="section-card glass-card">
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2.5rem' }}>
                    <div style={{ background: 'var(--secondary)', padding: '0.8rem', borderRadius: '14px', boxShadow: '0 8px 16px rgba(168, 85, 247, 0.4)' }}>
                        <Zap style={{ color: 'white' }} size={26} />
                    </div>
                    <h2 style={{ fontSize: '2.2rem', fontWeight: '700', fontFamily: 'var(--font-sans)' }}>II. Limit Evaluation</h2>
                </div>

                <div className="example-box">
                    <div className="example-title">Example 1.2</div>
                    <p style={{ fontSize: '1.15rem', marginBottom: '2rem' }}>Calculate the limit of the sequence defined by:</p>
                    <div style={{ marginBottom: '2rem' }}>
                        <MathBlock math="a_n = \frac{2n^3}{n^3 + 5}" block />
                    </div>

                    <StepByStep steps={[
                        <p>Divide numerator and denominator by the dominant term <MathBlock math="n^3" inline />:</p>,
                        <MathBlock math="a_n = \frac{\frac{2n^3}{n^3}}{\frac{n^3}{n^3} + \frac{5}{n^3}} = \frac{2}{1 + \frac{5}{n^3}}" block />,
                        <p>Apply the limit laws. Since <MathBlock math="\lim_{n \to \infty} \frac{c}{n^p} = 0" inline /> for <MathBlock math="p > 0" inline />:</p>,
                        <MathBlock math="\lim_{n \to \infty} a_n = \frac{2}{1 + 0} = 2" block />,
                        <div style={{ background: 'rgba(34, 197, 94, 0.1)', padding: '1rem', borderRadius: '10px', color: 'var(--success)', fontWeight: 'bold' }}>Result: The sequence converges to 2.</div>
                    ]} />
                </div>
            </motion.section>

            {/* Part 3: Determine convergence */}
            <motion.section variants={itemVariants} className="section-card glass-card">
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '3rem' }}>
                    <div style={{ background: 'var(--primary)', padding: '0.8rem', borderRadius: '14px', boxShadow: '0 8px 16px var(--primary-glow)' }}>
                        <MousePointer2 style={{ color: 'white' }} size={26} />
                    </div>
                    <h2 style={{ fontSize: '2.2rem', fontWeight: '700', fontFamily: 'var(--font-sans)' }}>III. Convergence Tests</h2>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '2.5rem' }}>
                    {/* Test 1 */}
                    <div className="example-box" style={{ margin: 0, borderTop: '4px solid var(--error)', borderLeft: 'none' }}>
                        <div className="example-title" style={{ color: 'var(--error)' }}>Growth Analysis</div>
                        <MathBlock math="a_n = \frac{n^2}{n + 4}" block />
                        <StepByStep steps={[
                            <p>Simplify by division: <MathBlock math="a_n = \frac{n}{1 + 4/n}" inline />.</p>,
                            <p>Observe the behavior as <MathBlock math="n \to \infty" inline />: Numerator <MathBlock math="\to \infty" inline /> while denominator <MathBlock math="\to 1" inline />.</p>,
                            <MathBlock math="\lim_{n \to \infty} a_n = \infty" block />,
                            <div style={{ color: 'var(--error)', fontWeight: '800', textAlign: 'center', fontSize: '1.2rem', letterSpacing: '2px' }}>DIVERGENT</div>
                        ]} />
                    </div>

                    {/* Test 2 */}
                    <div className="example-box" style={{ margin: 0, borderTop: '4px solid var(--success)', borderLeft: 'none' }}>
                        <div className="example-title" style={{ color: 'var(--success)' }}>Exponential Decay</div>
                        <MathBlock math="a_n = \frac{4^{n+1}}{7^n}" block />
                        <StepByStep steps={[
                            <p>Rewrite as a standard geometric form: <MathBlock math="a_n = 4 \cdot \left(\frac{4}{7}\right)^n" inline />.</p>,
                            <p>Note that the base <MathBlock math="4/7 < 1" inline />, implying a vanishing limit.</p>,
                            <MathBlock math="\lim_{n \to \infty} a_n = 4 \cdot 0 = 0" block />,
                            <div style={{ color: 'var(--success)', fontWeight: '800', textAlign: 'center', fontSize: '1.2rem', letterSpacing: '2px' }}>CONVERGENT</div>
                        ]} />
                    </div>

                    {/* Test 3 */}
                    <div className="example-box" style={{ margin: 0, borderTop: '4px solid var(--primary)', borderLeft: 'none' }}>
                        <div className="example-title" style={{ color: 'var(--primary)' }}>Absolute Value Test</div>
                        <MathBlock math="a_n = \frac{(-1)^n n^3}{n^4 + 6}" block />
                        <StepByStep steps={[
                            <p>Consider the absolute sequence: <MathBlock math="|a_n| = \frac{n^3}{n^4+6}" inline />.</p>,
                            <p>Using leading coefficients: <MathBlock math="\lim_{n \to \infty} \frac{n^3}{n^4} = \lim_{n \to \infty} \frac{1}{n} = 0" inline />.</p>,
                            <p>By the Theorem: If <MathBlock math="\lim |a_n| = 0" inline />, then <MathBlock math="\lim a_n = 0" inline />.</p>,
                            <div style={{ color: 'var(--success)', fontWeight: '800', textAlign: 'center' }}>CONVERGENT TO 0</div>
                        ]} />
                    </div>

                    {/* Test 4 */}
                    <div className="example-box" style={{ margin: 0, borderTop: '4px solid var(--secondary)', borderLeft: 'none' }}>
                        <div className="example-title" style={{ color: 'var(--secondary)' }}>Continuity Test</div>
                        <MathBlock math="a_n = \sin(3/n)" block />
                        <StepByStep steps={[
                            <p>Evaluate the inner limit first: <MathBlock math="\lim_{n \to \infty} \frac{3}{n} = 0" inline />.</p>,
                            <p>Since sine is continuous at 0, we can evaluate the function at the limit.</p>,
                            <MathBlock math="\lim_{n \to \infty} \sin(3/n) = \sin(0) = 0" block />,
                            <div style={{ color: 'var(--success)', fontWeight: '800', textAlign: 'center' }}>CONVERGENT</div>
                        ]} />
                    </div>
                </div>
            </motion.section>

            <footer style={{ marginTop: '8rem', textAlign: 'center', padding: '4rem 2rem', borderTop: '1px solid var(--border)', background: 'rgba(255,255,255,0.01)' }}>
                <p style={{ color: 'var(--text)', fontWeight: '600', marginBottom: '0.5rem', fontFamily: 'var(--font-sans)' }}>CalcMaster Academic Series</p>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', fontFamily: 'var(--font-serif)', fontStyle: 'italic' }}>
                    "Mathematics is the most beautiful and most powerful creation of the human spirit." — Stefan Banach
                </p>
            </footer>
        </motion.div>
    );
};

export default Home;
