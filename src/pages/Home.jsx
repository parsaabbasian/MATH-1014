import React from 'react';
import { motion } from 'framer-motion';
import MathBlock from '../components/MathBlock';
import { MousePointer2, Zap, Layout, ArrowRight } from 'lucide-react';

const Home = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15
            }
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
            <header style={{ marginBottom: '4rem', textAlign: 'center' }}>
                <motion.h1 variants={itemVariants} style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>
                    11.1 <span className="text-gradient">Infinite Sequences and Series</span>
                </motion.h1>
                <motion.p variants={itemVariants} style={{ color: 'var(--text-muted)', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto' }}>
                    Master the fundamentals of calculus through interactive examples and clear visualizations.
                </motion.p>
            </header>

            {/* Part 1: Finding a formula */}
            <motion.section variants={itemVariants} className="section-card glass-card">
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
                    <Layout className="logo-icon" size={24} />
                    <h2 style={{ fontSize: '1.8rem' }}>PART 1. Finding a formula for a sequence</h2>
                </div>

                <div className="example-box">
                    <div className="example-title">Example A</div>
                    <p>Find a formula for the general term and describe the graph.</p>

                    <div style={{ marginTop: '1.5rem' }}>
                        <strong>a)</strong> <MathBlock math="\{ 2, 1/2, 1/8, 1/32, 1/128, \dots \}" inline />
                        <p style={{ marginTop: '0.5rem', color: 'var(--text-muted)' }}>Each term is multiplied by <MathBlock math="1/4" inline />.</p>
                        <MathBlock math="a_1 = 2 \quad \text{and} \quad r = 1/4" block />
                        <p><strong>General term:</strong></p>
                        <MathBlock math="a_n = 2(1/4)^{n-1}" block />
                        <div style={{ background: 'rgba(99, 102, 241, 0.1)', padding: '1rem', borderRadius: '8px', marginTop: '1rem' }}>
                            <strong>Graph behavior:</strong> Points decrease toward 0 as <MathBlock math="n \to \infty" inline />. The sequence <strong>converges to 0</strong>.
                        </div>
                    </div>

                    <div style={{ marginTop: '2.5rem', paddingTop: '1.5rem', borderTop: '1px solid var(--border)' }}>
                        <strong>b)</strong> <MathBlock math="\{ 1/9, -2/16, 3/25, -4/36, 5/49, \dots \}" inline />
                        <div style={{ marginTop: '1rem' }}>
                            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', color: 'var(--text-muted)' }}>
                                <li>• Numerator increases by 1 each time.</li>
                                <li>• Denominator follows <MathBlock math="(n + 2)^2" inline />.</li>
                                <li>• Signs alternate.</li>
                            </ul>
                        </div>
                        <p style={{ marginTop: '1rem' }}><strong>General term:</strong></p>
                        <MathBlock math="a_n = (-1)^{n+1} \cdot \frac{n}{(n+2)^2}" block />
                        <div style={{ background: 'rgba(99, 102, 241, 0.1)', padding: '1rem', borderRadius: '8px', marginTop: '1rem' }}>
                            <strong>Graph behavior:</strong> Values alternate positive and negative. Size shrinks toward 0. The sequence <strong>converges to 0</strong>.
                        </div>
                    </div>
                </div>
            </motion.section>

            {/* Part 2: Finding a limit */}
            <motion.section variants={itemVariants} className="section-card glass-card">
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
                    <Zap className="logo-icon" size={24} />
                    <h2 style={{ fontSize: '1.8rem' }}>PART 2. Finding a limit</h2>
                </div>

                <div className="example-box">
                    <div className="example-title">Example B</div>
                    <p>Find the limit of:</p>
                    <MathBlock math="a_n = \frac{2n^3}{n^3 + 5}" block />
                    <p>Divide top and bottom by <MathBlock math="n^3" inline />:</p>
                    <MathBlock math="a_n = \frac{2}{1 + 5/n^3}" block />
                    <p>As <MathBlock math="n \to \infty" inline />, <MathBlock math="5/n^3 \to 0" inline />.</p>
                    <p style={{ marginTop: '1rem' }}><strong>Limit:</strong></p>
                    <MathBlock math="\lim_{n \to \infty} a_n = 2" block />
                    <div style={{ color: 'var(--success)', fontWeight: '600' }}>The sequence converges to 2.</div>
                </div>
            </motion.section>

            {/* Part 3: Determine convergence */}
            <motion.section variants={itemVariants} className="section-card glass-card">
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
                    <MousePointer2 className="logo-icon" size={24} />
                    <h2 style={{ fontSize: '1.8rem' }}>PART 3. Determine convergence or divergence</h2>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
                    <div className="example-box" style={{ margin: 0 }}>
                        <MathBlock math="a_n = \frac{n^2}{n + 4}" block />
                        <MathBlock math="a_n = \frac{n}{1 + 4/n}" block />
                        <p>As <MathBlock math="n \to \infty" inline />, numerator grows without bound.</p>
                        <MathBlock math="\lim_{n \to \infty} a_n = \infty" block />
                        <div style={{ color: 'var(--error)', fontWeight: '600' }}>The sequence diverges.</div>
                    </div>

                    <div className="example-box" style={{ margin: 0 }}>
                        <MathBlock math="a_n = \frac{4^{n+1}}{7^n}" block />
                        <MathBlock math="a_n = 4 \cdot \left(\frac{4}{7}\right)^n" block />
                        <p>Since <MathBlock math="4/7 < 1" inline />, <MathBlock math="(4/7)^n \to 0" inline />.</p>
                        <MathBlock math="\lim_{n \to \infty} a_n = 0" block />
                        <div style={{ color: 'var(--success)', fontWeight: '600' }}>The sequence converges to 0.</div>
                    </div>

                    <div className="example-box" style={{ margin: 0 }}>
                        <MathBlock math="a_n = \frac{(-1)^n n^3}{n^4 + 6}" block />
                        <p>Check absolute value:</p>
                        <MathBlock math="|a_n| = \frac{n^3}{n^4 + 6} = \frac{1/n}{1 + 6/n^4}" block />
                        <p>As <MathBlock math="n \to \infty" inline />, <MathBlock math="1/n \to 0" inline />.</p>
                        <MathBlock math="\lim_{n \to \infty} |a_n| = 0 \implies \lim_{n \to \infty} a_n = 0" block />
                        <div style={{ color: 'var(--success)', fontWeight: '600' }}>The sequence converges.</div>
                    </div>

                    <div className="example-box" style={{ margin: 0 }}>
                        <MathBlock math="a_n = \sin(3/n)" block />
                        <p>As <MathBlock math="n \to \infty" inline />, <MathBlock math="3/n \to 0" inline />.</p>
                        <p>Since sine is continuous:</p>
                        <MathBlock math="\lim_{n \to \infty} a_n = \sin(0) = 0" block />
                        <div style={{ color: 'var(--success)', fontWeight: '600' }}>The sequence converges to 0.</div>
                    </div>
                </div>
            </motion.section>

            <footer style={{ marginTop: '4rem', textAlign: 'center', padding: '2rem', color: 'var(--text-muted)' }}>
                <p>© 2026 CalcMaster Instruction. All rights reserved.</p>
            </footer>
        </motion.div>
    );
};

export default Home;
