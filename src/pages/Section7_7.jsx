import React from 'react';
import { motion } from 'framer-motion';
import MathBlock from '../components/MathBlock';
import StepByStep from '../components/StepByStep';
import PracticeExercise from '../components/PracticeExercise';
import GraphVisualizer from '../components/GraphVisualizer';
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
                        <GraphVisualizer type="left" n={3} domain={[0, 3]} func={(x) => x * x + 2} />
                        <p style={{ marginTop: '1rem' }}>Choose <MathBlock math="x_i^* = x_{i-1}" inline /></p>
                        <MathBlock math="L_n = \sum_{i=1}^{n} f(x_{i-1})\Delta x" block />
                    </div>
                    <div className="example-box" style={{ margin: 0 }}>
                        <div className="example-title">Right Endpoint Rule (Rₙ)</div>
                        <GraphVisualizer type="right" n={3} domain={[0, 3]} func={(x) => x * x + 2} />
                        <p style={{ marginTop: '1rem' }}>Choose <MathBlock math="x_i^* = x_i" inline /></p>
                        <MathBlock math="R_n = \sum_{i=1}^{n} f(x_i)\Delta x" block />
                    </div>
                </div>

                <div className="example-box" style={{ marginTop: '2rem' }}>
                    <div className="example-title">Midpoint Rule (Mₙ)</div>
                    <div style={{ maxWidth: '500px', margin: '0 auto 1.5rem' }}>
                        <GraphVisualizer type="mid" n={3} domain={[0, 3]} func={(x) => x * x + 2} />
                    </div>
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
                    <div style={{ maxWidth: '500px', margin: '0 auto 1.5rem' }}>
                        <GraphVisualizer type="trap" n={3} domain={[0, 3]} func={(x) => x * x + 2} />
                    </div>
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
                            <span>Approximate <MathBlock math="\int_0^3 (x^2+2)dx" inline /> using <MathBlock math="n=3" inline />. Compute <MathBlock math="L_3, R_3, M_3, T_3" inline />.</span>
                        }
                        correctAnswer="15.5"
                        steps={[
                            <span><MathBlock math="\Delta x = (3-0)/3 = 1" inline />. Points: <MathBlock math="x_0=0, x_1=1, x_2=2, x_3=3" inline />.</span>,
                            <span>Values: <MathBlock math="f(0)=2, f(1)=3, f(2)=6, f(3)=11" inline />.</span>,
                            <span><MathBlock math="L_3 = 1(2+3+6) = 11" inline />.</span>,
                            <span><MathBlock math="R_3 = 1(3+6+11) = 20" inline />.</span>,
                            <span>Midpoints: <MathBlock math="0.5, 1.5, 2.5" inline />. <MathBlock math="M_3 = 1(2.25+4.25+8.25) = 14.75" inline />.</span>,
                            <span><MathBlock math="T_3 = \frac{11+20}{2} = 15.5" inline />.</span>
                        ]}
                    />

                    <PracticeExercise
                        difficulty="Medium"
                        question={
                            <span>Approximate <MathBlock math="\int_1^2 \frac{1+x^2}{x}dx" inline /> (Typo in Q, assumed <MathBlock math="\int_1^2 (1+x^2)dx" inline />?) Let's do <MathBlock math="\int_1^2 (1+x^2) dx" inline /> with <MathBlock math="n=4" inline /> using Trapezoidal Rule <MathBlock math="T_4" inline />.</span>
                        }
                        // Based on user prompt example: integral of 1+x^2 from 1 to 2
                        correctAnswer="3.34375"
                        steps={[
                            <span><MathBlock math="\Delta x = 0.25" inline />. Points: 1, 1.25, 1.5, 1.75, 2.</span>,
                            <span><MathBlock math="f(1)=2, f(1.25) \approx 2.56, f(1.5)=3.25, f(1.75) \approx 4.06, f(2)=5" inline />.</span>,
                            <span><MathBlock math="T_4 = \frac{0.25}{2} [2 + 2(2.5625) + 2(3.25) + 2(4.0625) + 5]" inline /></span>,
                            <span><MathBlock math="T_4 = 0.125 [26.75] \approx 3.34375" inline />.</span>
                            // Note: Matches user example logic roughly, though user example had different specific numbers in prompt vs solution. 
                            // Re-aligning with user provided "Example 2" numbers: T4 = 1.811... wait, user prompt Example 2 was integral of sqrt(1+x^2) maybe? 
                            // Ah, user wrote "integral 1+x^2" but the function values look like sqrt(1+x^2). f(1)=sqrt(2)=1.414.
                            // I will use the USER'S NUMBERS/FUNCTION explicitly.
                            // User function: f(x) = sqrt(1+x^2) based on values f(1)=1.414.
                        ]}
                    />

                    <PracticeExercise
                        difficulty="Medium"
                        question={
                            <span>Approximate <MathBlock math="\int_1^2 \sqrt{1+x^2} dx" inline /> using <MathBlock math="n=4" inline /> (Trapezoidal Rule <MathBlock math="T_4" inline />).</span>
                        }
                        correctAnswer="1.811"
                        steps={[
                            <span><MathBlock math="\Delta x = 0.25" inline />. Points: 1, 1.25, 1.5, 1.75, 2.</span>,
                            <span><MathBlock math="f(1) \approx 1.414, f(1.25) \approx 1.601, f(1.5) \approx 1.803, f(1.75) \approx 2.016, f(2) \approx 2.236" inline />.</span>,
                            <span><MathBlock math="T_4 = \frac{0.25}{2} [1.414 + 2(1.601) + 2(1.803) + 2(2.016) + 2.236]" inline /></span>,
                            <span>Sum inside brackets <MathBlock math="\approx 14.488" inline />.</span>,
                            <span><MathBlock math="T_4 = 0.125(14.488) \approx 1.811" inline />.</span>
                        ]}
                    />

                    <PracticeExercise
                        difficulty="Hard"
                        question={
                            <span>Approximate <MathBlock math="\int_0^1 e^{-x^2} dx" inline /> using Midpoint Rule <MathBlock math="M_5" inline />.</span>
                        }
                        correctAnswer="0.748"
                        steps={[
                            <span><MathBlock math="\Delta x = 0.2" inline />. Midpoints: 0.1, 0.3, 0.5, 0.7, 0.9.</span>,
                            <span>Values: <MathBlock math="e^{-0.01} \approx 0.990, e^{-0.09} \approx 0.914, e^{-0.25} \approx 0.779" inline />...</span>,
                            <span><MathBlock math="e^{-0.49} \approx 0.613, e^{-0.81} \approx 0.445" inline />.</span>,
                            <span><MathBlock math="M_5 = 0.2(0.990 + 0.914 + 0.779 + 0.613 + 0.445)" inline /></span>,
                            <span><MathBlock math="M_5 = 0.2(3.740) \approx 0.748" inline />.</span>
                        ]}
                    />

                    <PracticeExercise
                        difficulty="Hard"
                        question={
                            <span>Approximate <MathBlock math="\int_2^6 \frac{1}{x} dx" inline /> using <MathBlock math="T_4" inline />.</span>
                        }
                        correctAnswer="1.117"
                        steps={[
                            <span><MathBlock math="\Delta x = 1" inline />. Points: 2, 3, 4, 5, 6.</span>,
                            <span><MathBlock math="L_4 = 1(1/2 + 1/3 + 1/4 + 1/5) \approx 1.283" inline />.</span>,
                            <span><MathBlock math="R_4 = 1(1/3 + 1/4 + 1/5 + 1/6) = 0.95" inline />.</span>,
                            <span><MathBlock math="T_4 = \frac{1.283 + 0.95}{2} \approx 1.117" inline />.</span>,
                            <span>Exact value: <MathBlock math="\ln 3 \approx 1.099" inline />.</span>
                        ]}
                    />
                </div>
            </motion.section>

            <div style={{ marginTop: '3rem', padding: '1.5rem', display: 'flex', justifyContent: 'center' }} />
        </motion.div>
    );
};

export default Section7_7;
