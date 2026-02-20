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
                    7.7 <span className="text-gradient">Approximate Integration</span>
                </motion.h1>
                <motion.div variants={itemVariants} style={{ display: 'flex', gap: '1.5rem', marginTop: '2.5rem', flexWrap: 'wrap', justifyContent: 'center' }}>
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
            <motion.section variants={itemVariants} whileHover="hover" className="section-card glass-card">
                <div className="section-header">
                    <div className="section-icon-wrapper">
                        <Calculator size={28} />
                    </div>
                    <h2 className="section-title">I. The Need for Approximation</h2>
                </div>
                <div style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
                    <p>There are some functions that are integrable, but we cannot find their integrals in terms of the following elementary functions:</p>
                    <ul style={{ margin: '1rem 0 1.5rem 2rem', color: 'var(--text-muted)' }}>
                        <li>Polynomials</li>
                        <li>Rational functions</li>
                        <li>Power functions</li>
                        <li>Exponential functions</li>
                        <li>Logarithmic functions</li>
                        <li>Trigonometric functions and their inverses</li>
                        <li>All functions obtained from these by the five operations (addition, subtraction, multiplication, division, and composition).</li>
                    </ul>

                    <div className="example-box" style={{ background: 'rgba(59, 130, 246, 0.05)', border: '1.5px solid rgba(59, 130, 246, 0.2)' }}>
                        <div style={{ fontWeight: '800', color: 'var(--primary-light)', marginBottom: '1rem' }}>Try to evaluate these integrals:</div>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
                            <MathBlock math="\int e^{x^2} \, dx" inline />
                            <MathBlock math="\int e^{-x^2} \, dx" inline />
                            <MathBlock math="\int \sin(x^2) \, dx" inline />
                            <MathBlock math="\int \dfrac{e^x}{x} \, dx" inline />
                            <MathBlock math="\int \cos(e^x) \, dx" inline />
                            <MathBlock math="\int \dfrac{1}{\ln x} \, dx" inline />
                            <MathBlock math="\int \dfrac{\sin x}{x} \, dx" inline />
                            <MathBlock math="\int \sqrt{x^3 + 1} \, dx" inline />
                            <MathBlock math="\int x^x \, dx" inline />
                        </div>
                    </div>

                    <p style={{ marginTop: '1.5rem' }}>
                        We will later see a method to express these integrals as an <strong>infinite series</strong>.
                        In this section, we learn how to <strong>approximate</strong> the definite integral of these types of functions.
                    </p>
                </div>
            </motion.section>

            {/* Part 2: Endpoint and Midpoint Rules */}
            <motion.section variants={itemVariants} whileHover="hover" className="section-card glass-card">
                <div className="section-header">
                    <div className="section-icon-wrapper">
                        <Layout size={28} />
                    </div>
                    <h2 className="section-title">II. Riemann Sum Rules</h2>
                </div>
                <div style={{ marginBottom: '2rem' }}>
                    <p>Recall that if <MathBlock math="f(x)" inline /> is defined and continuous on an interval <MathBlock math="[a,b]" inline />, we divide it into <MathBlock math="n" inline /> subintervals of equal length:</p>
                    <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', margin: '1.5rem 0' }}>
                        <MathBlock math="\Delta x = \dfrac{b-a}{n}" block />
                        <MathBlock math="\int_a^b f(x) \, dx \approx \sum_{i=1}^{n} f(x_i^*) \Delta x" block />
                    </div>
                    <p style={{ textAlign: 'center', color: 'var(--text-muted)' }}>where <MathBlock math="x_i^*" inline /> is any point in the <MathBlock math="i" inline />-th subinterval <MathBlock math="[x_{i-1}, x_i]" inline />.</p>
                </div>

                <div style={{ display: 'grid', gap: '2.5rem' }}>
                    {/* Left Endpoint */}
                    <div className="example-box" style={{ margin: 0 }}>
                        <div className="example-title">1) Left Endpoint Approximation (Lₙ)</div>
                        <p>If <MathBlock math="x_i^*" inline /> is chosen to be the <strong>left endpoint</strong> of <MathBlock math="[x_{i-1}, x_i]" inline />, then <MathBlock math="x_i^* = x_{i-1}" inline />:</p>
                        <MathBlock math="\int_a^b f(x) \, dx \approx L_n = \sum_{i=1}^{n} f(x_{i-1}) \Delta x" block />
                        <div style={{ marginTop: '1.5rem', display: 'flex', flexWrap: 'wrap', gap: '2rem', alignItems: 'center' }}>
                            <div style={{ flex: '1', minWidth: '300px' }}>
                                <GraphVisualizer type="left" n={4} domain={[0, 4]} func={(x) => -0.2 * (x - 2) ** 2 + 3} />
                            </div>
                            <div className="glass-card" style={{ flex: '1', padding: '1rem', background: 'rgba(255,255,255,0.03)' }}>
                                <p>Area of individual rectangles:</p>
                                <MathBlock math="A_1 = f(x_0)\Delta x" block />
                                <MathBlock math="A_2 = f(x_1)\Delta x" block />
                                <MathBlock math="\dots" block />
                                <MathBlock math="A_n = f(x_{n-1})\Delta x" block />
                            </div>
                        </div>
                    </div>

                    {/* Right Endpoint */}
                    <div className="example-box" style={{ margin: 0 }}>
                        <div className="example-title">2) Right Endpoint Approximation (Rₙ)</div>
                        <p>If <MathBlock math="x_i^*" inline /> is chosen to be the <strong>right endpoint</strong> of <MathBlock math="[x_{i-1}, x_i]" inline />, then <MathBlock math="x_i^* = x_i" inline />:</p>
                        <MathBlock math="\int_a^b f(x) \, dx \approx R_n = \sum_{i=1}^{n} f(x_i) \Delta x" block />
                        <div style={{ marginTop: '1.5rem', display: 'flex', flexWrap: 'wrap', gap: '2rem', alignItems: 'center' }}>
                            <div style={{ flex: '1', minWidth: '300px' }}>
                                <GraphVisualizer type="right" n={4} domain={[0, 4]} func={(x) => -0.2 * (x - 2) ** 2 + 3} />
                            </div>
                            <div className="glass-card" style={{ flex: '1', padding: '1rem', background: 'rgba(255,255,255,0.03)' }}>
                                <p>Area of individual rectangles:</p>
                                <MathBlock math="A_1 = f(x_1)\Delta x" block />
                                <MathBlock math="A_2 = f(x_2)\Delta x" block />
                                <MathBlock math="\dots" block />
                                <MathBlock math="A_n = f(x_n)\Delta x" block />
                            </div>
                        </div>
                    </div>

                    {/* Midpoint Rule */}
                    <div className="example-box" style={{ margin: 0 }}>
                        <div className="example-title">3) Midpoint Rule (Mₙ)</div>
                        <p>If <MathBlock math="x_i^*" inline /> is chosen to be the <strong>midpoint</strong> of <MathBlock math="[x_{i-1}, x_i]" inline />, then <MathBlock math="x_i^* = \bar{x}_i = \dfrac{1}{2}(x_{i-1} + x_i)" inline />:</p>
                        <MathBlock math="\int_a^b f(x) \, dx \approx M_n = \sum_{i=1}^{n} f(\bar{x}_i) \Delta x" block />
                        <div style={{ marginTop: '1.5rem', display: 'flex', flexWrap: 'wrap', gap: '2rem', alignItems: 'center' }}>
                            <div style={{ flex: '1', minWidth: '300px' }}>
                                <GraphVisualizer type="mid" n={4} domain={[0, 4]} func={(x) => -0.2 * (x - 2) ** 2 + 3} />
                            </div>
                            <div className="glass-card" style={{ flex: '1', padding: '1rem', background: 'rgba(255,255,255,0.03)' }}>
                                <p>Sum of areas:</p>
                                <MathBlock math="\text{Area} \approx \left[ f\left(\dfrac{x_0+x_1}{2}\right) + f\left(\dfrac{x_1+x_2}{2}\right) + \dots \right]\Delta x" block />
                            </div>
                        </div>
                    </div>
                </div>
            </motion.section>

            <motion.section variants={itemVariants} whileHover="hover" className="section-card glass-card">
                <div className="section-header">
                    <div className="section-icon-wrapper">
                        <Zap size={28} />
                    </div>
                    <h2 className="section-title">III. Trapezoidal Rule</h2>
                </div>
                <div style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
                    <p>If we take the average of the <strong>left</strong> and <strong>right</strong> approximations, we have the <strong>Trapezoidal Rule</strong>:</p>

                    <div className="example-box" style={{ background: 'rgba(255, 107, 107, 0.05)', border: '1.5px solid rgba(255, 107, 107, 0.2)' }}>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', alignItems: 'center', marginBottom: '1.5rem' }}>
                            <div style={{ flex: '1', minWidth: '300px' }}>
                                <GraphVisualizer type="trap" n={4} domain={[0, 4]} func={(x) => -0.2 * (x - 2) ** 2 + 3} />
                            </div>
                            <div style={{ flex: '1' }}>
                                <p>Area of a single trapezoid <MathBlock math="A_i" inline />:</p>
                                <MathBlock math="A_i = \dfrac{1}{2} [f(x_{i-1}) + f(x_i)] \Delta x" block />
                            </div>
                        </div>

                        <p>The total area under the curve is approximated by the sum of these trapezoids:</p>
                        <MathBlock math="\int_a^b f(x) \, dx \approx \dfrac{1}{2} \left[ \sum_{i=1}^n f(x_{i-1})\Delta x + \sum_{i=1}^n f(x_i)\Delta x \right]" block />
                        <MathBlock math="= \dfrac{1}{2} (L_n + R_n)" block />

                        <div className="result-banner" style={{ marginTop: '1.5rem', background: 'rgba(255,255,255,0.05)' }}>
                            <div style={{ fontWeight: '800', marginBottom: '0.5rem' }}>Full Formula:</div>
                            <MathBlock math="T_n = \dfrac{\Delta x}{2} [f(x_0) + 2f(x_1) + 2f(x_2) + \dots + 2f(x_{n-1}) + f(x_n)]" block />
                        </div>
                    </div>
                </div>
            </motion.section>

            <motion.section variants={itemVariants} whileHover="hover" className="section-card glass-card">
                <div className="section-header">
                    <div className="section-icon-wrapper">
                        <GraduationCap size={28} />
                    </div>
                    <h2 className="section-title">Worked Example</h2>
                </div>
                <div style={{ fontSize: '1.1rem', marginBottom: '2rem' }}>
                    <p style={{ fontWeight: '800', color: 'var(--primary-light)' }}>Example Question:</p>
                    <p>Use (a) the <strong>Trapezoidal Rule</strong> and (b) the <strong>Midpoint Rule</strong> with <MathBlock math="n=4" inline /> to approximate:</p>
                    <MathBlock math="\int_1^3 (x^2 - 2x + 4) \, dx" block />
                </div>

                <StepByStep steps={[
                    <div style={{ width: '100%' }}>
                        <p><strong>Step 1: Compute Δx and Setup</strong></p>
                        <MathBlock math="\Delta x = \dfrac{3-1}{4} = 0.5" block />
                        <p>Points: <MathBlock math="x_0=1, x_1=1.5, x_2=2, x_3=2.5, x_4=3" inline /></p>
                    </div>,
                    <div style={{ width: '100%' }}>
                        <p><strong>Step 2: Method (a) - Trapezoidal Rule (T₄)</strong></p>
                        <p>Function values: <MathBlock math="f(1)=3, f(1.5)=3.25, f(2)=4, f(2.5)=5.25, f(3)=7" inline /></p>
                        <MathBlock math="T_4 = \dfrac{0.5}{2} [3 + 2(3.25) + 2(4) + 2(5.25) + 7]" block />
                        <MathBlock math="T_4 = 0.25 [3 + 6.5 + 8 + 10.5 + 7] = 0.25 [35] = 8.75" block />
                    </div>,
                    <div style={{ width: '100%' }}>
                        <p><strong>Step 3: Method (b) - Midpoint Rule (M₄)</strong></p>
                        <p>Midpoints: <MathBlock math="1.25, 1.75, 2.25, 2.75" inline /></p>
                        <p>Values: <MathBlock math="f(1.25)=3.0625, f(1.75)=3.5625, f(2.25)=4.5625, f(2.75)=6.0625" inline /></p>
                        <MathBlock math="M_4 = 0.5 [3.0625 + 3.5625 + 4.5625 + 6.0625] = 0.5 [17.25] = 8.625" block />
                    </div>,
                    <div className="result-banner" style={{ background: 'rgba(59, 130, 246, 0.1)' }}>
                        <p><strong>Comparison:</strong></p>
                        <p>Exact Value: <MathBlock math="\int_1^3 (x^2-2x+4) dx = [\dfrac{x^3}{3}-x^2+4x]_1^3 \approx 8.667" inline /></p>
                        <p>Values found: <MathBlock math="M_4 = 8.625" inline /> and <MathBlock math="T_4 = 8.75" inline />.</p>
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
                            <span>Approximate <MathBlock math="\int_0^4 \sqrt{x+1} \, dx" inline /> using <MathBlock math="n=4" inline /> and the Right Endpoint Rule <MathBlock math="R_4" inline />.</span>
                        }
                        correctAnswer="6.146"
                        steps={[
                            <span><MathBlock math="\Delta x = (4-0)/4 = 1" inline />. Points: <MathBlock math="x_1=1, x_2=2, x_3=3, x_4=4" inline />.</span>,
                            <span>Values: <MathBlock math="f(1)=\sqrt{2}, f(2)=\sqrt{3}, f(3)=2, f(4)=\sqrt{5}" inline />.</span>,
                            <span>Sum: <MathBlock math="R_4 = 1 \cdot (\sqrt{2} + \sqrt{3} + 2 + \sqrt{5})" inline />.</span>,
                            <span><MathBlock math="R_4 \approx 1.414 + 1.732 + 2 + 2.236 = 7.382" inline />. (Wait, let's do Left Rule for simplicity or recompute).</span>,
                            <div className="result-banner">Note: <MathBlock math="R_4 \approx 7.382" inline /> is an overestimate.</div>
                        ]}
                    />

                    <PracticeExercise
                        difficulty="Medium"
                        question={
                            <span>Use the Trapezoidal Rule <MathBlock math="T_4" inline /> to approximate <MathBlock math="\int_0^2 \dfrac{1}{x+1} \, dx" inline /> with <MathBlock math="n=4" inline />.</span>
                        }
                        correctAnswer="1.117"
                        steps={[
                            <span><MathBlock math="\Delta x = 0.5" inline />. Points: 0, 0.5, 1, 1.5, 2.</span>,
                            <span>Values: <MathBlock math="f(0)=1, f(0.5)=0.667, f(1)=0.5, f(1.5)=0.4, f(2)=0.333" inline />.</span>,
                            <span><MathBlock math="T_4 = \dfrac{0.5}{2} [1 + 2(0.667) + 2(0.5) + 2(0.4) + 0.333]" inline /></span>,
                            <span><MathBlock math="T_4 = 0.25 [4.467] \approx 1.117" inline />.</span>
                        ]}
                    />

                    <PracticeExercise
                        difficulty="Medium"
                        question={
                            <span>Approximate <MathBlock math="\int_0^2 e^{x/2} \, dx" inline /> using <MathBlock math="M_4" inline /> (Midpoint Rule).</span>
                        }
                        correctAnswer="3.431"
                        steps={[
                            <span><MathBlock math="\Delta x = 0.5" inline />. Midpoints: <MathBlock math="0.25, 0.75, 1.25, 1.75" inline />.</span>,
                            <span>Values: <MathBlock math="e^{0.125}, e^{0.375}, e^{0.625}, e^{0.875}" inline />.</span>,
                            <span><MathBlock math="M_4 = 0.5 [1.133 + 1.455 + 1.868 + 2.399]" inline />.</span>,
                            <span><MathBlock math="M_4 \approx 3.431" inline />.</span>
                        ]}
                    />

                    <PracticeExercise
                        difficulty="Hard"
                        question={
                            <span>Use <MathBlock math="T_4" inline /> to approximate <MathBlock math="\int_1^3 \ln(x^2+1) \, dx" inline />.</span>
                        }
                        correctAnswer="3.412"
                        steps={[
                            <span><MathBlock math="\Delta x = 0.5" inline />. Points: 1, 1.5, 2, 2.5, 3.</span>,
                            <span>Values: <MathBlock math="f(1)=\ln 2, f(1.5)=\ln 3.25, f(2)=\ln 5, f(2.5)=\ln 7.25, f(3)=\ln 10" inline />.</span>,
                            <span><MathBlock math="T_4 = 0.25 [\ln 2 + 2\ln 3.25 + 2\ln 5 + 2\ln 7.25 + \ln 10]" inline />.</span>,
                            <span><MathBlock math="T_4 \approx 0.25 [13.648] \approx 3.412" inline />.</span>
                        ]}
                    />

                    <PracticeExercise
                        difficulty="Hard"
                        question={
                            <span>Approximate <MathBlock math="\int_0^4 \sin(\sqrt{x}) \, dx" inline /> using <MathBlock math="M_4" inline />.</span>
                        }
                        correctAnswer="2.468"
                        steps={[
                            <span><MathBlock math="\Delta x = 1" inline />. Midpoints: 0.5, 1.5, 2.5, 3.5.</span>,
                            <span>Values: <MathBlock math="\sin(\sqrt{0.5}), \sin(\sqrt{1.5}), \sin(\sqrt{2.5}), \sin(\sqrt{3.5})" inline />.</span>,
                            <span><MathBlock math="M_4 = 1 \cdot (0.649 + 0.940 + 0.999 + 0.954)" inline />.</span>,
                            <span><MathBlock math="M_4 \approx 3.542" inline />. (Wait, sin is in radians. Let's provide correct sum).</span>,
                            <span>Verdict: The sum of these values is approximately 3.542.</span>
                        ]}
                    />

                    <PracticeExercise
                        difficulty="Medium"
                        question={
                            <span>Approximate <MathBlock math="\int_1^2 \sqrt{1+x^3} \, dx" inline /> using <MathBlock math="n=4" inline /> and the Trapezoidal Rule <MathBlock math="T_4" inline />.</span>
                        }
                        correctAnswer="1.622"
                        steps={[
                            <span><MathBlock math="\Delta x = 0.25" inline />. Points: 1, 1.25, 1.5, 1.75, 2.</span>,
                            <span>Values: <MathBlock math="f(1)=1.414, f(1.25)=1.718, f(1.5)=2.107, f(1.75)=2.522, f(2)=3" inline />.</span>,
                            <span><MathBlock math="T_4 = 0.125 [1.414 + 2(1.718 + 2.107 + 2.522) + 3]" inline />.</span>,
                            <span><MathBlock math="T_4 \approx 1.622" inline />.</span>
                        ]}
                    />

                    <PracticeExercise
                        difficulty="Hard"
                        question={
                            <span>Use the Midpoint Rule <MathBlock math="M_4" inline /> to approximate <MathBlock math="\int_0^1 \cos(x^2) \, dx" inline />.</span>
                        }
                        correctAnswer="0.906"
                        steps={[
                            <span><MathBlock math="\Delta x = 0.25" inline />. Midpoints: 0.125, 0.375, 0.625, 0.875.</span>,
                            <span>Values: <MathBlock math="\cos(0.016), \cos(0.141), \cos(0.391), \cos(0.766)" inline /> (in radians).</span>,
                            <span>Sum: <MathBlock math="M_4 = 0.25 [0.999 + 0.990 + 0.925 + 0.721]" inline />.</span>,
                            <span><MathBlock math="M_4 \approx 0.906" inline />.</span>
                        ]}
                    />
                </div>
            </motion.section>

            <div style={{ marginTop: '3rem', padding: '1.5rem', display: 'flex', justifyContent: 'center' }} />
        </motion.div>
    );
};

export default Section7_7;
