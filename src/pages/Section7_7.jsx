import React from 'react';
import { motion } from 'framer-motion';
import MathBlock from '../components/MathBlock';
import StepByStep from '../components/StepByStep';
import PracticeExercise from '../components/PracticeExercise';
import { Calculator, Sparkles, Zap, Layout, GraduationCap, ArrowRight } from 'lucide-react';

const Section7_7 = () => {
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
                    7.7 <span className="text-gradient">Approximate Integration</span>
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

            {/* Part 1: Functions Without Elementary Antiderivatives */}
            <motion.section variants={itemVariants} className="section-card glass-card">
                <div className="section-header">
                    <div className="section-icon-wrapper">
                        <Calculator size={28} />
                    </div>
                    <h2 className="section-title">I. The Need for Approximation</h2>
                </div>
                <div style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
                    <p>Some functions are integrable, but their antiderivatives cannot be written using <strong>elementary functions</strong> (polynomials, rational, exponential, logs, or trig).</p>
                    <div className="example-box" style={{ background: 'rgba(0,0,0,0.1)', marginTop: '1.5rem' }}>
                        <div style={{ fontWeight: '800', color: 'var(--primary-light)', marginBottom: '1rem' }}>Famous Examples:</div>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
                            <MathBlock math="\int e^{-x^2} dx" inline />
                            <MathBlock math="\int \sin(x^3) dx" inline />
                            <MathBlock math="\int \frac{e^x}{x} dx" inline />
                            <MathBlock math="\int \frac{\cos x}{x} dx" inline />
                            <MathBlock math="\int \sqrt{x^4+1} dx" inline />
                        </div>
                    </div>
                    <p style={{ marginTop: '1.5rem' }}>To approximate definite integrals of this type, we use <strong>numerical methods</strong>.</p>
                </div>
            </motion.section>

            {/* Part 2: Endpoint and Midpoint Rules */}
            <motion.section variants={itemVariants} className="section-card glass-card">
                <div className="section-header">
                    <div className="section-icon-wrapper">
                        <Layout size={28} />
                    </div>
                    <h2 className="section-title">II. Basic Riemann Rules</h2>
                </div>
                <div style={{ marginBottom: '2rem' }}>
                    <p>Divide the interval <MathBlock math="[a,b]" inline /> into <MathBlock math="n" inline /> equal parts:</p>
                    <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', margin: '1.5rem 0' }}>
                        <MathBlock math="\Delta x = \frac{b-a}{n}" block />
                        <MathBlock math="x_i = a + i\Delta x" block />
                    </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                    <div className="example-box" style={{ margin: 0 }}>
                        <div className="example-title">Left Endpoint Rule (Lₙ)</div>
                        <p>Choose <MathBlock math="x_i^* = x_{i-1}" inline /></p>
                        <MathBlock math="L_n = \sum_{i=1}^{n} f(x_{i-1})\Delta x" block />
                    </div>
                    <div className="example-box" style={{ margin: 0 }}>
                        <div className="example-title">Right Endpoint Rule (Rₙ)</div>
                        <p>Choose <MathBlock math="x_i^* = x_i" inline /></p>
                        <MathBlock math="R_n = \sum_{i=1}^{n} f(x_i)\Delta x" block />
                    </div>
                </div>

                <div className="example-box" style={{ marginTop: '2rem' }}>
                    <div className="example-title">Midpoint Rule (Mₙ)</div>
                    <p>Choose midpoints <MathBlock math="\bar{x}_i = \frac{x_{i-1} + x_i}{2}" inline /></p>
                    <MathBlock math="M_n = \sum_{i=1}^{n} f(\bar{x}_i)\Delta x" block />
                </div>
            </motion.section>

            {/* Part 3: Trapezoidal Rule */}
            <motion.section variants={itemVariants} className="section-card glass-card">
                <div className="section-header">
                    <div className="section-icon-wrapper">
                        <Zap size={28} />
                    </div>
                    <h2 className="section-title">III. Trapezoidal Rule</h2>
                </div>
                <p style={{ marginBottom: '1.5rem' }}>The trapezoidal rule is the average of the left and right rules:</p>
                <MathBlock math="T_n = \frac{1}{2}(L_n + R_n)" block />
                <div className="example-box">
                    <div className="example-title">Computational Formula</div>
                    <MathBlock math="T_n = \frac{\Delta x}{2} [f(x_0) + 2f(x_1) + 2f(x_2) + \dots + 2f(x_{n-1}) + f(x_n)]" block />
                </div>
            </motion.section>

            {/* Part 4: Worked Example */}
            <motion.section variants={itemVariants} className="section-card glass-card">
                <div className="section-header">
                    <div className="section-icon-wrapper">
                        <GraduationCap size={28} />
                    </div>
                    <h2 className="section-title">Worked Example</h2>
                </div>
                <p style={{ fontSize: '1.1rem', marginBottom: '2rem' }}>
                    Use <MathBlock math="n=4" inline /> to approximate <MathBlock math="\int_0^2 (x^2 + 1) dx" inline />.
                </p>

                <StepByStep steps={[
                    <div>
                        <p><strong>Step 1: Compute Δx and Setup</strong></p>
                        <MathBlock math="\Delta x = \frac{2-0}{4} = 0.5" block />
                        <p>Subintervals: 0, 0.5, 1, 1.5, 2</p>
                    </div>,
                    <div>
                        <p><strong>Step 2: Compute Function Values</strong></p>
                        <p>f(0)=1, f(0.5)=1.25, f(1)=2, f(1.5)=3.25, f(2)=5</p>
                    </div>,
                    <div>
                        <p><strong>Step 3: Apply Trapezoidal Rule (T₄)</strong></p>
                        <MathBlock math="T_4 = \frac{0.5}{2} [1 + 2(1.25) + 2(2) + 2(3.25) + 5]" block />
                        <MathBlock math="T_4 = 0.25 [1 + 2.5 + 4 + 6.5 + 5] = 4.75" block />
                    </div>,
                    <div>
                        <p><strong>Step 4: Apply Midpoint Rule (M₄)</strong></p>
                        <p>Midpoints: 0.25, 0.75, 1.25, 1.75</p>
                        <p>f(0.25)=1.0625, f(0.75)=1.5625, f(1.25)=2.5625, f(1.75)=4.0625</p>
                        <MathBlock math="M_4 = 0.5(1.0625 + 1.5625 + 2.5625 + 4.0625) = 4.625" block />
                    </div>,
                    <div className="result-banner">
                        <p><strong>Comparison:</strong></p>
                        <p>Exact Value: <MathBlock math="\int_0^2 (x^2+1)dx = [\frac{x^3}{3} + x]_0^2 = \frac{14}{3} \approx 4.667" inline /></p>
                        <p>M₄ ≈ 4.625 | T₄ ≈ 4.75</p>
                    </div>
                ]} />
            </motion.section>

            {/* Challenges Section */}
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
                        question={
                            <span>Use Midpoint Rule with <MathBlock math="n=1" inline /> to approximate <MathBlock math="\int_0^2 (x^2+1)dx" inline />.</span>
                        }
                        correctAnswer="4"
                        steps={[
                            "Δx = (2-0)/1 = 2.",
                            "The midpoint of [0,2] is x = 1.",
                            "f(1) = 1² + 1 = 2.",
                            "M₁ = f(1) * Δx = 2 * 2 = 4."
                        ]}
                    />
                    <PracticeExercise
                        difficulty="Medium"
                        question={
                            <span>For <MathBlock math="\int_0^1 x^2 dx" inline /> with <MathBlock math="n=2" inline />, find <MathBlock math="T_2" inline />.</span>
                        }
                        correctAnswer="0.375"
                        steps={[
                            "Δx = (1-0)/2 = 0.5.",
                            "Points: x₀=0, x₁=0.5, x₂=1.",
                            "f(0)=0, f(0.5)=0.25, f(1)=1.",
                            "T₂ = (0.5/2) * [f(0) + 2f(0.5) + f(1)]",
                            "T₂ = 0.25 * [0 + 0.5 + 1] = 0.375."
                        ]}
                    />
                </div>
            </motion.section>

            <div style={{ marginTop: '3rem', padding: '1.5rem', display: 'flex', justifyContent: 'center' }} />
        </motion.div>
    );
};

export default Section7_7;
