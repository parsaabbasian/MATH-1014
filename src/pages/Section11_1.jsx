import React from 'react';
import { motion } from 'framer-motion';
import MathBlock from '../components/MathBlock';
import StepByStep from '../components/StepByStep';
import PracticeExercise from '../components/PracticeExercise';
import { Zap, Layout, GraduationCap, Sparkles } from 'lucide-react';

const Section11_1 = () => {
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
                    11.1 <span className="text-gradient">Infinite Sequences</span>
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

            {/* I. Introduction to Sequences */}
            <motion.section variants={itemVariants} className="section-card glass-card">
                <div className="section-header">
                    <div className="section-icon-wrapper">
                        <Layout size={28} />
                    </div>
                    <h2 className="section-title">I. Definition of a Sequence</h2>
                </div>

                <div className="example-box" style={{ background: 'rgba(59, 130, 246, 0.05)', border: '1.5px solid rgba(59, 130, 246, 0.2)' }}>
                    <p style={{ fontSize: '1.1rem' }}>
                        A <strong>sequence</strong> is a set of numbers written in a definite order:
                    </p>
                    <MathBlock math="a_1, a_2, a_3, \dots, a_n, \dots" block />
                    <p style={{ marginTop: '1rem' }}>
                        The sequence <MathBlock math="\{a_1, a_2, a_3, \dots, a_n, \dots\}" inline /> is also denoted by <MathBlock math="\{a_n\}" inline /> or <MathBlock math="\{a_n\}_{n=1}^{\infty}" inline />.
                    </p>
                </div>

                <div className="example-box" style={{ marginTop: '2.5rem' }}>
                    <div className="example-title">Example 1.1: General Terms</div>
                    <p style={{ marginBottom: '2rem' }}>Let's find the general term <MathBlock math="a_n" inline /> for these sequences:</p>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem' }}>
                        <div className="glass-card" style={{ padding: '1.5rem' }}>
                            <div style={{ fontWeight: '800', color: 'var(--primary-light)', marginBottom: '1rem' }}>A. Geometric Decay</div>
                            <MathBlock math="\left\{ 2, 1, \frac{1}{2}, \frac{1}{4}, \dots \right\}" block />
                            <StepByStep steps={[
                                <span>Starting term <MathBlock math="a = 2" inline />, each term is multiplied by <MathBlock math="1/2" inline />.</span>,
                                <div className="result-banner">Formula: <MathBlock math="a_n = 2 \left( \frac{1}{2} \right)^{n-1} = \frac{1}{2^{n-2}}" inline /></div>
                            ]} />
                        </div>

                        <div className="glass-card" style={{ padding: '1.5rem' }}>
                            <div style={{ fontWeight: '800', color: 'var(--primary-light)', marginBottom: '1rem' }}>B. Alternating Rationals</div>
                            <MathBlock math="\left\{ \frac{1}{4}, -\frac{2}{9}, \frac{3}{16}, -\frac{4}{25}, \dots \right\}" block />
                            <StepByStep steps={[
                                <span>Numerator is <MathBlock math="n" inline />.</span>,
                                <span>Denominator follows the square pattern <MathBlock math="(n+1)^2" inline />.</span>,
                                <span>The sign is positive for <MathBlock math="n=1" inline />, so we use <MathBlock math="(-1)^{n+1}" inline />.</span>,
                                <div className="result-banner">Formula: <MathBlock math="a_n = \frac{(-1)^{n+1} n}{(n+1)^2}" inline /></div>
                            ]} />
                        </div>
                    </div>
                </div>
            </motion.section>

            {/* II. Convergence & Core Theorems */}
            <motion.section variants={itemVariants} className="section-card glass-card">
                <div className="section-header">
                    <div className="section-icon-wrapper">
                        <GraduationCap size={28} />
                    </div>
                    <h2 className="section-title">II. Limits & Core Theorems</h2>
                </div>

                <div className="example-box" style={{ background: 'rgba(168, 85, 247, 0.05)', border: '1.5px solid rgba(168, 85, 247, 0.2)' }}>
                    <p style={{ fontSize: '1.1rem' }}>
                        A sequence <MathBlock math="\{a_n\}" inline /> has the limit <MathBlock math="L" inline /> if <MathBlock math="\lim_{n\to\infty} a_n = L" inline />.
                    </p>
                    <p>• If the limit exists, the sequence is <strong>convergent</strong>.</p>
                    <p>• If it doesn't exist, it is <strong>divergent</strong>.</p>
                </div>

                <div className="example-box" style={{ marginTop: '2.5rem' }}>
                    <div className="example-title">Limit Laws for Sequences</div>
                    <p style={{ marginBottom: '1.5rem', color: 'var(--text-muted)' }}>If <MathBlock math="\{a_n\}" inline /> and <MathBlock math="\{b_n\}" inline /> are convergent and <MathBlock math="c" inline /> is a constant:</p>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
                        <div className="glass-card" style={{ padding: '1rem', border: '1px solid rgba(255,255,255,0.1)' }}>
                            <MathBlock math="\lim_{n\to\infty} (a_n \pm b_n) = \lim_{n\to\infty} a_n \pm \lim_{n\to\infty} b_n" block />
                        </div>
                        <div className="glass-card" style={{ padding: '1rem', border: '1px solid rgba(255,255,255,0.1)' }}>
                            <MathBlock math="\lim_{n\to\infty} c a_n = c \lim_{n\to\infty} a_n" block />
                        </div>
                        <div className="glass-card" style={{ padding: '1rem', border: '1px solid rgba(255,255,255,0.1)' }}>
                            <MathBlock math="\lim_{n\to\infty} (a_n b_n) = \lim_{n\to\infty} a_n \cdot \lim_{n\to\infty} b_n" block />
                        </div>
                        <div className="glass-card" style={{ padding: '1rem', border: '1px solid rgba(255,255,255,0.1)' }}>
                            <MathBlock math="\lim_{n\to\infty} \frac{a_n}{b_n} = \frac{\lim a_n}{\lim b_n} \text{ (if } \lim b_n \neq 0)" block />
                        </div>
                        <div className="glass-card" style={{ padding: '1rem', border: '1px solid rgba(255,255,255,0.1)' }}>
                            <MathBlock math="\lim_{n\to\infty} a_n^p = (\lim_{n\to\infty} a_n)^p \text{ (if } p > 0, a_n > 0)" block />
                        </div>
                    </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '2rem', marginTop: '2.5rem' }}>
                    <div className="example-box" style={{ margin: 0 }}>
                        <div className="example-title">Function Theorem</div>
                        <p style={{ fontSize: '1rem', color: 'var(--text-muted)' }}>
                            If <MathBlock math="\lim_{x \to \infty} f(x) = L" inline /> and <MathBlock math="f(n) = a_n" inline />, then:
                        </p>
                        <MathBlock math="\lim_{n \to \infty} a_n = L" block />
                    </div>

                    <div className="example-box" style={{ margin: 0 }}>
                        <div className="example-title">Absolute Value Theorem</div>
                        <p style={{ fontSize: '1rem', color: 'var(--text-muted)' }}>
                            If <MathBlock math="\lim_{n\to\infty} |a_n| = 0" inline />, then:
                        </p>
                        <MathBlock math="\lim_{n\to\infty} a_n = 0" block />
                    </div>

                    <div className="example-box" style={{ margin: 0 }}>
                        <div className="example-title">Continuous Function Theorem</div>
                        <p style={{ fontSize: '1rem', color: 'var(--text-muted)' }}>
                            If <MathBlock math="\lim_{n\to\infty} a_n = L" inline /> and <MathBlock math="f" inline /> is continuous at <MathBlock math="L" inline />:
                        </p>
                        <MathBlock math="\lim_{n \to \infty} f(a_n) = f(L)" block />
                    </div>
                </div>
            </motion.section>

            {/* III. Solving Limits */}
            <motion.section variants={itemVariants} className="section-card glass-card">
                <div className="section-header">
                    <div className="section-icon-wrapper">
                        <Zap size={28} />
                    </div>
                    <h2 className="section-title">III. Solving Limit Examples</h2>
                </div>

                <div className="example-box">
                    <div className="example-title">Example 1.2: Rational Forms</div>
                    <p>Find the limit of <MathBlock math="a_n = \frac{3n^2 - 1}{2n^2 + 5}" inline />.</p>
                    <StepByStep steps={[
                        <span>Divide top and bottom by the highest power, <MathBlock math="n^2" inline />.</span>,
                        <MathBlock math="\lim_{n \to \infty} \frac{3 - 1/n^2}{2 + 5/n^2}" block />,
                        <span>As <MathBlock math="n" inline /> approaches infinity, <MathBlock math="1/n^2" inline /> and <MathBlock math="5/n^2" inline /> become 0.</span>,
                        <div className="result-banner">Verdict: The sequence converges to <strong>3/2</strong>.</div>
                    ]} />
                </div>

                <div className="example-box" style={{ marginTop: '3rem' }}>
                    <div className="example-title">Example 1.3: Geometric Fractions</div>
                    <p>Find the limit of <MathBlock math="a_n = \frac{4^{n+1}}{7^n}" inline />.</p>
                    <StepByStep steps={[
                        <span>Rewrite <MathBlock math="4^{n + 1}" inline /> as <MathBlock math="4 \cdot 4^n" inline />.</span>,
                        <span>Factor out the constant: <MathBlock math="4 \cdot (4/7)^n" inline />.</span>,
                        <span>Since <MathBlock math="|4/7| < 1" inline />, the geometric part <MathBlock math="(4/7)^n" inline /> approaches 0.</span>,
                        <div className="result-banner">Verdict: Converges to <strong>0</strong>.</div>
                    ]} />
                </div>

                <div className="example-box" style={{ marginTop: '3rem' }}>
                    <div className="example-title">Example 1.4: Alternating Decay</div>
                    <p>Determine the limit of <MathBlock math="a_n = \frac{(-1)^n n}{n^2 + 10}" inline />.</p>
                    <StepByStep steps={[
                        <span>Use the <strong>Absolute Value Theorem</strong>: evaluate <MathBlock math="\lim |a_n|" inline />.</span>,
                        <MathBlock math="\lim_{n\to\infty} \frac{n}{n^2 + 10} = \lim_{n\to\infty} \frac{1/n}{1 + 10/n^2} = 0" block />,
                        <div className="result-banner">Since <MathBlock math="\lim |a_n| = 0" inline />, then <MathBlock math="\lim a_n = 0" inline />. Convergent.</div>
                    ]} />
                </div>

                <div className="example-box" style={{ marginTop: '3rem' }}>
                    <div className="example-title">Example 1.5: Continuous Functions</div>
                    <p>Find the limit of <MathBlock math="a_n = e^{-1/n^2}" inline />.</p>
                    <StepByStep steps={[
                        <span>Because <MathBlock math="f(x) = e^x" inline /> is continuous, move the limit inside the exponent.</span>,
                        <MathBlock math="e^{\lim_{n\to\infty} (-1/n^2)} = e^0" block />,
                        <div className="result-banner">Verdict: The sequence converges to <strong>1</strong>.</div>
                    ]} />
                </div>
            </motion.section>

            {/* Challenges Section */}
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
                        question={<MathBlock math="a_n = \frac{n^2 + 1}{n}" inline />}
                        correctAnswer="divergent"
                        steps={[
                            "Simplify the fraction to n + 1/n.",
                            "As n approaches infinity, the term grows without bound.",
                            "Therefore, the sequence is divergent."
                        ]}
                    />

                    <PracticeExercise
                        difficulty="Medium"
                        question={<MathBlock math="a_n = \frac{(-1)^n}{\sqrt{n}}" inline />}
                        correctAnswer="0"
                        steps={[
                            "Apply the Absolute Value Theorem.",
                            <span>Evaluate <MathBlock math="\lim_{n \to \infty} 1/\sqrt{n}" inline />.</span>,
                            "The denominator grows to infinity, so the fraction approaches 0.",
                            "The alternating sequence also converges to 0."
                        ]}
                    />

                    <PracticeExercise
                        difficulty="Hard"
                        question={<MathBlock math="a_n = \arctan(2n)" inline />}
                        correctAnswer="\pi/2"
                        steps={[
                            "Recall the horizontal asymptote of the arctangent function.",
                            <span>As <MathBlock math="x \to \infty" inline />, <MathBlock math="\arctan(x) \to \pi/2" inline />.</span>,
                            "Multiply the argument by any positive constant (like 2) doesn't change the limit at infinity.",
                            "Verdict: Converges to π/2."
                        ]}
                    />

                    <PracticeExercise
                        difficulty="PRO"
                        question={<MathBlock math="a_n = n \sin(1/n)" inline />}
                        correctAnswer="1"
                        steps={[
                            <span>Rewrite as <MathBlock math="\frac{\sin(1/n)}{1/n}" inline />.</span>,
                            <span>Let <MathBlock math="x = 1/n" inline />. As <MathBlock math="n\to\infty" inline />, <MathBlock math="x\to 0" inline />.</span>,
                            <span>The problem becomes <MathBlock math="\lim_{x \to 0} \frac{\sin(x)}{x}" inline />.</span>,
                            "Using L'Hopital's or the Squeeze Theorem, this limit is 1."
                        ]}
                    />
                </div>
            </motion.section>

        </motion.div>
    );
};

export default Section11_1;
