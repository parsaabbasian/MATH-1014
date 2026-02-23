import React from 'react';
import { motion } from 'framer-motion';
import MathBlock from '../components/MathBlock';
import StepByStep from '../components/StepByStep';
import PracticeExercise from '../components/PracticeExercise';
import { Sigma, Sparkles, Zap, Layout, GraduationCap, Target, Braces, Activity } from 'lucide-react';

const Section11_3 = () => {
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
                ease: [0.25, 1, 0.5, 1]
            }
        },
        hover: {
            y: -5,
            transition: { duration: 0.3 }
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
                    11.3 <span className="text-gradient">The Integral Test</span>
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

            {/* I. The Integral Test Definition */}
            <motion.section variants={itemVariants} className="section-card glass-card">
                <div className="section-header">
                    <div className="section-icon-wrapper">
                        <Activity size={28} />
                    </div>
                    <h2 className="section-title">I. The Integral Test</h2>
                </div>
                <div style={{ fontSize: '1.2rem', lineHeight: '1.8' }}>
                    <div className="example-box" style={{ background: 'rgba(239, 68, 68, 0.05)', border: '1.5px solid rgba(239, 68, 68, 0.2)' }}>
                        <p style={{ fontWeight: 'bold', marginBottom: '1rem' }}>The Integral Test:</p>
                        <p>Suppose <MathBlock math="f" inline /> is a <strong>continuous, positive, decreasing</strong> function on <MathBlock math="[1, \infty)" inline /> and let <MathBlock math="a_n = f(n)" inline />. Then the series <MathBlock math="\sum_{n=1}^{\infty} a_n" inline /> is convergent if and only if the improper integral is convergent:</p>
                        <MathBlock math="\sum_{n=1}^{\infty} a_n \text{ converges } \iff \int_{1}^{\infty} f(x) \, dx \text{ converges}" block />
                        <p style={{ marginTop: '1rem', fontSize: '1rem', color: 'var(--text-muted)' }}>
                            <em>Note: In the case of convergence, the value of the integral is NOT necessarily equal to the sum of the series.</em>
                        </p>
                    </div>

                    <div className="example-box" style={{ marginTop: '2rem' }}>
                        <div className="example-title">Concept Verification</div>
                        <p>For the Integral Test to be applicable, the function must satisfy three criteria:</p>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem', marginTop: '1rem' }}>
                            <div className="glass-card" style={{ padding: '1rem', textAlign: 'center' }}>
                                <div style={{ color: 'var(--primary-light)', fontWeight: '800' }}>1. Continuous</div>
                                <p style={{ fontSize: '0.9rem' }}>No breaks or jumps on [1, ∞)</p>
                            </div>
                            <div className="glass-card" style={{ padding: '1rem', textAlign: 'center' }}>
                                <div style={{ color: 'var(--primary-light)', fontWeight: '800' }}>2. Positive</div>
                                <p style={{ fontSize: '0.9rem' }}>f(x) &gt; 0 for all x ≥ 1</p>
                            </div>
                            <div className="glass-card" style={{ padding: '1rem', textAlign: 'center' }}>
                                <div style={{ color: 'var(--primary-light)', fontWeight: '800' }}>3. Decreasing</div>
                                <p style={{ fontSize: '0.9rem' }}>f'(x) &lt; 0 for all x ≥ 1</p>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.section>

            {/* II. The p-Series Test */}
            <motion.section variants={itemVariants} whileHover="hover" className="section-card glass-card">
                <div className="section-header">
                    <div className="section-icon-wrapper">
                        <Zap size={28} />
                    </div>
                    <h2 className="section-title">II. The p-Series Test</h2>
                </div>
                <div className="example-box" style={{ background: 'rgba(168, 85, 247, 0.05)', border: '1.5px solid rgba(168, 85, 247, 0.2)' }}>
                    <p>The <strong>p-series</strong> <MathBlock math="\sum_{n=1}^{\infty} \dfrac{1}{n^p}" inline /> is:</p>
                    <ul style={{ marginTop: '1rem' }}>
                        <li><strong>Convergent</strong> if <MathBlock math="p > 1" inline /></li>
                        <li><strong>Divergent</strong> if <MathBlock math="p \le 1" inline /></li>
                    </ul>
                </div>

                <div className="example-box" style={{ marginTop: '2rem' }}>
                    <div className="example-title">Special Case: The Harmonic Series</div>
                    <p>When <MathBlock math="p = 1" inline />, we get the harmonic series:</p>
                    <MathBlock math="\sum_{n=1}^{\infty} \dfrac{1}{n} = 1 + \dfrac{1}{2} + \dfrac{1}{3} + \dots" block />
                    <p>Since <MathBlock math="p = 1" inline />, the harmonic series <strong>diverges</strong>.</p>
                </div>
            </motion.section>

            {/* III. Error Estimation (Reminders) */}
            <motion.section variants={itemVariants} whileHover="hover" className="section-card glass-card">
                <div className="section-header">
                    <div className="section-icon-wrapper">
                        <Target size={28} />
                    </div>
                    <h2 className="section-title">III. Remainder Estimate</h2>
                </div>
                <div className="example-box">
                    <p>Suppose <MathBlock math="f" inline /> is positive, continuous and decreasing for <MathBlock math="x \ge n" inline /> and <MathBlock math="\sum a_n" inline /> converges. Let <MathBlock math="R_n = s - s_n" inline /> be the remainder. Then:</p>
                    <MathBlock math="\int_{n+1}^{\infty} f(x) \, dx \le R_n \le \int_{n}^{\infty} f(x) \, dx" block />
                </div>
            </motion.section>

            {/* Practice Section */}
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
                        question={<MathBlock math="\sum_{n=1}^{\infty} \dfrac{1}{n^4}" inline />}
                        correctAnswer="Convergent"
                        steps={[
                            <span>Identify this as a p-series: <MathBlock math="p = 4" inline />.</span>,
                            <span>Since <MathBlock math="4 > 1" inline />, the series converges by the p-series test.</span>
                        ]}
                    />

                    <PracticeExercise
                        difficulty="Medium"
                        question={<MathBlock math="\sum_{n=1}^{\infty} \dfrac{1}{n^2 + 1}" inline />}
                        correctAnswer="Convergent"
                        steps={[
                            <span>Use the Integral Test with <MathBlock math="f(x) = \dfrac{1}{x^2 + 1}" inline />.</span>,
                            <span>Evaluate <MathBlock math="\int_{1}^{\infty} \dfrac{1}{x^2 + 1} \, dx = \lim_{t \to \infty} [\arctan(x)]_1^t" inline />.</span>,
                            <span><MathBlock math="\lim_{t \to \infty} (\arctan(t) - \arctan(1)) = \dfrac{\pi}{2} - \dfrac{\pi}{4} = \dfrac{\pi}{4}" inline />.</span>,
                            <span>Since the integral converges, the series converges.</span>
                        ]}
                    />

                    <PracticeExercise
                        difficulty="Medium"
                        question={<MathBlock math="\sum_{n=1}^{\infty} \dfrac{\ln n}{n}" inline />}
                        correctAnswer="Divergent"
                        steps={[
                            <span>Use the Integral Test with <MathBlock math="f(x) = \dfrac{\ln x}{x}" inline /> (decreasing for x &gt; e).</span>,
                            <span>Evaluate <MathBlock math="\int_{1}^{\infty} \dfrac{\ln x}{x} \, dx" inline />.</span>,
                            <span>Use substitution <MathBlock math="u = \ln x, du = \dfrac{1}{x}dx" inline />.</span>,
                            <span><MathBlock math="\int u \, du = \dfrac{u^2}{2} = \dfrac{(\ln x)^2}{2}" inline />.</span>,
                            <span><MathBlock math="\lim_{t \to \infty} [\dfrac{(\ln x)^2}{2}]_1^t = \infty" inline />.</span>,
                            <span>Since the integral diverges, the series diverges.</span>
                        ]}
                    />

                    <PracticeExercise
                        difficulty="Hard"
                        question={<MathBlock math="\sum_{n=1}^{\infty} n e^{-n^2}" inline />}
                        correctAnswer="Convergent"
                        steps={[
                            <span>Apply Integral Test: <MathBlock math="\int_{1}^{\infty} x e^{-x^2} \, dx" inline />.</span>,
                            <span>Let <MathBlock math="u = -x^2, du = -2x \, dx \Rightarrow x \, dx = -\dfrac{1}{2} du" inline />.</span>,
                            <span>Integral becomes <MathBlock math="-\dfrac{1}{2} \int e^u \, du = -\dfrac{1}{2} e^{-x^2}" inline />.</span>,
                            <span>Evaluate limits: <MathBlock math="\lim_{t \to \infty} [-\dfrac{1}{2} e^{-x^2}]_1^t = 0 - (-\dfrac{1}{2} e^{-1}) = \dfrac{1}{2e}" inline />.</span>,
                            <span>Converges.</span>
                        ]}
                    />

                    <PracticeExercise
                        difficulty="Hard"
                        question={<MathBlock math="\sum_{n=2}^{\infty} \dfrac{1}{n (\ln n)^2}" inline />}
                        correctAnswer="Convergent"
                        steps={[
                            <span>Integral Test: <MathBlock math="\int_{2}^{\infty} \dfrac{1}{x (\ln x)^2} \, dx" inline />.</span>,
                            <span>Sub <MathBlock math="u = \ln x, du = \dfrac{1}{x} dx" inline />.</span>,
                            <span>Integral becomes <MathBlock math="\int \dfrac{1}{u^2} \, du = -\dfrac{1}{u} = -\dfrac{1}{\ln x}" inline />.</span>,
                            <span>Evaluate: <MathBlock math="\lim_{t \to \infty} [-\dfrac{1}{\ln x}]_2^t = 0 - (-\dfrac{1}{\ln 2}) = \dfrac{1}{\ln 2}" inline />.</span>,
                            <span>Converges.</span>
                        ]}
                    />
                </div>
            </motion.section>

        </motion.div>
    );
};

export default Section11_3;
