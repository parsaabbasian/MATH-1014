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
                    <GraduationCap size={16} />
                    <span>MATH 1014 | Welcome to Calculus II</span>
                </motion.div>
                <motion.h1 variants={itemVariants} className="hero-title">
                    11.1 <span className="text-gradient">Infinite Sequences</span>
                </motion.h1>
            </header>

            {/* Part 1: Finding a formula */}
            <motion.section variants={itemVariants} className="section-card glass-card">
                <div className="section-header">
                    <div className="section-icon-wrapper">
                        <Layout size={28} />
                    </div>
                    <h2 className="section-title">I. Pattern Recognition</h2>
                </div>

                <div className="example-box">
                    <div className="example-title">Example 1.1</div>
                    <p style={{ marginBottom: '2rem', fontSize: '1.2rem' }}>
                        Let's find the formula <MathBlock math="a_n" inline /> for these sequences and check if they settle down to a value.
                    </p>

                    <div style={{ marginTop: '2rem' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', background: 'var(--bg)', padding: '1.75rem', borderRadius: '22px', border: '1.5px solid var(--border)' }}>
                            <span style={{ fontWeight: '900', color: 'var(--primary-light)', fontSize: '1.2rem' }}>A</span>
                            <MathBlock math="\left\{ 2, \frac{1}{2}, \frac{1}{8}, \frac{1}{32}, \frac{1}{128}, \dots \right\}" block />
                        </div>

                        <StepByStep steps={[
                            <p>First, notice that each step divides the previous number by 4 (or multiplies by <MathBlock math="\frac{1}{4}" inline />).</p>,
                            <p>This is a <strong>Geometric Sequence</strong>. We start with <MathBlock math="a_1 = 2" inline /> and our ratio is <MathBlock math="r = \frac{1}{4}" inline />.</p>,
                            <div>
                                <p>Plug these into the pattern <MathBlock math="a_n = a_1 r^{n-1}" inline /> to get:</p>
                                <MathBlock math="a_n = 2\left(\frac{1}{4}\right)^{n-1}" block />
                            </div>,
                            <div className="result-banner">
                                Verdict: Since the numbers keep getting smaller, they converge to <strong>0</strong>.
                            </div>
                        ]} />
                    </div>

                    <div style={{ marginTop: '5rem', paddingTop: '3rem', borderTop: '2px dashed var(--border)' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', background: 'var(--bg)', padding: '1.75rem', borderRadius: '22px', border: '1.5px solid var(--border)' }}>
                            <span style={{ fontWeight: '900', color: 'var(--primary-light)', fontSize: '1.2rem' }}>B</span>
                            <MathBlock math="\left\{ \frac{1}{9}, -\frac{2}{16}, \frac{3}{25}, -\frac{4}{36}, \frac{5}{49}, \dots \right\}" block />
                        </div>

                        <StepByStep steps={[
                            <p>The tops are just <MathBlock math="n" inline /> (1, 2, 3...), and the bottoms are squares starting from <MathBlock math="3^2" inline />, which is <MathBlock math="(n+2)^2" inline />.</p>,
                            <p>The signs switch back and forth. Since we start with a plus, we use <MathBlock math="(-1)^{n+1}" inline />.</p>,
                            <div>
                                <p>Putting it all together:</p>
                                <MathBlock math="a_n = (-1)^{n+1} \frac{n}{(n+2)^2}" block />
                            </div>,
                            <div className="result-banner">
                                Verdict: Even though it bounces between plus and minus, it still converges to <strong>0</strong>.
                            </div>
                        ]} />
                    </div>
                </div>
            </motion.section>

            {/* Part 2: Finding a limit */}
            <motion.section variants={itemVariants} className="section-card glass-card">
                <div className="section-header">
                    <div className="section-icon-wrapper">
                        <Zap size={28} />
                    </div>
                    <h2 className="section-title">II. Solving for Limits</h2>
                </div>

                <div className="example-box">
                    <div className="example-title">Example 1.2</div>
                    <p style={{ fontSize: '1.2rem', marginBottom: '2.5rem' }}>Where does this sequence end up as $n$ goes to infinity?</p>
                    <div style={{ marginBottom: '2.5rem' }}>
                        <MathBlock math="a_n = \frac{2n^3}{n^3 + 5}" block />
                    </div>

                    <StepByStep steps={[
                        <p>Let's simplify by dividing both top and bottom by the biggest power, <MathBlock math="n^3" inline />.</p>,
                        <MathBlock math="a_n = \frac{2}{1 + \frac{5}{n^3}}" block />,
                        <p>As $n$ gets huge, any number divided by $n$ (like <MathBlock math="\frac{5}{n^3}" inline />) becomes zero.</p>,
                        <MathBlock math="\lim_{n \to \infty} a_n = \frac{2}{1 + 0} = 2" block />,
                        <div className="result-banner">
                            Summary: The sequence converges to <strong>2</strong>.
                        </div>
                    ]} />
                </div>
            </motion.section>

            {/* Part 3: Determine convergence */}
            <motion.section variants={itemVariants} className="section-card glass-card">
                <div className="section-header">
                    <div className="section-icon-wrapper">
                        <MousePointer2 size={28} />
                    </div>
                    <h2 className="section-title">III. Quick Tests</h2>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '3rem' }}>
                    {/* Test A */}
                    <div className="example-box" style={{ margin: 0 }}>
                        <div className="example-title">Option A</div>
                        <MathBlock math="a_n = \frac{n^2}{n + 4}" block />
                        <StepByStep steps={[
                            <p>Divide by $n$ to simplify: <MathBlock math="a_n = \frac{n}{1 + \frac{4}{n}}" inline />.</p>,
                            <p>The top keeps growing while the bottom stays near 1.</p>,
                            <MathBlock math="\lim_{n \to \infty} a_n = \infty" block />,
                            <div className="result-banner">Verdict: <strong>Divergent</strong> (Never stops growing!)</div>
                        ]} />
                    </div>

                    {/* Test B */}
                    <div className="example-box" style={{ margin: 0 }}>
                        <div className="example-title">Option B</div>
                        <MathBlock math="a_n = \frac{4^{n+1}}{7^n}" block />
                        <StepByStep steps={[
                            <p>Rewrite this as: <MathBlock math="a_n = 4 \cdot \left(\frac{4}{7}\right)^n" inline />.</p>,
                            <p>Since the fraction <MathBlock math="\frac{4}{7}" inline /> is less than 1, it will shrink to zero.</p>,
                            <MathBlock math="\lim_{n \to \infty} a_n = 0" block />,
                            <div className="result-banner">Verdict: <strong>Convergent</strong></div>
                        ]} />
                    </div>

                    {/* Test C */}
                    <div className="example-box" style={{ margin: 0 }}>
                        <div className="example-title">Option C</div>
                        <MathBlock math="a_n = \frac{(-1)^n n^3}{n^4 + 6}" block />
                        <StepByStep steps={[
                            <p>Let's ignore the +/- for a second: <MathBlock math="\left| a_n \right| = \frac{n^3}{n^4+6}" inline />.</p>,
                            <p>The power on the bottom (4) is bigger than the top (3), so it goes to 0.</p>,
                            <div className="result-banner">Verdict: <strong>Convergent</strong></div>
                        ]} />
                    </div>

                    {/* Test D */}
                    <div className="example-box" style={{ margin: 0 }}>
                        <div className="example-title">Option D</div>
                        <MathBlock math="a_n = \sin\left(\frac{3}{n}\right)" block />
                        <StepByStep steps={[
                            <p>As $n$ gets huge, the inside <MathBlock math="\frac{3}{n}" inline /> goes to 0.</p>,
                            <p>The sine of 0 is just 0.</p>,
                            <MathBlock math="\lim_{n \to \infty} \sin\left(\frac{3}{n}\right) = \sin(0) = 0" block />,
                            <div className="result-banner">Verdict: <strong>Convergent</strong></div>
                        ]} />
                    </div>
                </div>
            </motion.section>

            <footer style={{ marginTop: '5rem', textAlign: 'center', padding: '3rem 2rem' }}>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', fontWeight: '600' }}>
                    © 2026 MATH 1014 | Practice & Learn
                </p>
            </footer>
        </motion.div>
    );
};

export default Home;
