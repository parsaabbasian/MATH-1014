import React from 'react';
import { motion } from 'framer-motion';
import MathBlock from '../components/MathBlock';
import StepByStep from '../components/StepByStep';
import PracticeExercise from '../components/PracticeExercise';
import { MousePointer2, Zap, Layout, GraduationCap, Sparkles, Activity } from 'lucide-react';

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
                            <div style={{ fontWeight: '800', color: 'var(--primary-light)', marginBottom: '1rem' }}>A. Powers of 1/3</div>
                            <MathBlock math="\left\{ 1, \frac{1}{3}, \frac{1}{9}, \frac{1}{27}, \dots \right\}" block />
                            <StepByStep steps={[
                                <span>Look for a pattern: <MathBlock math="a_1 = 1/3^0, a_2 = 1/3^1, a_3 = 1/3^2" inline />.</span>,
                                <div className="result-banner">Formula: <MathBlock math="a_n = \frac{1}{3^{n-1}}" inline /></div>
                            ]} />
                        </div>

                        <div className="glass-card" style={{ padding: '1.5rem' }}>
                            <div style={{ fontWeight: '800', color: 'var(--primary-light)', marginBottom: '1rem' }}>B. Alternating Fraction</div>
                            <MathBlock math="\left\{ -\frac{1}{4}, \frac{2}{9}, -\frac{3}{16}, \frac{4}{25}, \dots \right\}" block />
                            <StepByStep steps={[
                                <span>Numerator is <MathBlock math="n" inline />.</span>,
                                <span>Denominator is <MathBlock math="(n+1)^2" inline /> (from <MathBlock math="2^2, 3^2, 4^2 \dots" inline />).</span>,
                                <span>Signs switch: use <MathBlock math="(-1)^n" inline />.</span>,
                                <div className="result-banner">Formula: <MathBlock math="a_n = \frac{(-1)^n n}{(n+1)^2}" inline /></div>
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
                    <p>Find the limit of <MathBlock math="a_n = \frac{n^3}{n^3 + 1}" inline />.</p>
                    <StepByStep steps={[
                        <span>Divide top and bottom by <MathBlock math="n^3" inline />.</span>,
                        <MathBlock math="\lim_{n \to \infty} \frac{1}{1 + 1/n^3} = \frac{1}{1 + 0} = 1" block />,
                        <div className="result-banner">Verdict: Converges to <strong>1</strong></div>
                    ]} />
                </div>

                <div className="example-box" style={{ marginTop: '3rem' }}>
                    <div className="example-title">Example 1.3: Geometric Growth</div>
                    <p>Find the limit of <MathBlock math="a_n = \frac{3^{n+2}}{5^n}" inline />.</p>
                    <StepByStep steps={[
                        <span>Simplify the exponent: <MathBlock math="3^{n+2} = 3^n \cdot 3^2 = 9 \cdot 3^n" inline />.</span>,
                        <span>Rewrite as a geometric term: <MathBlock math="9 \cdot \left(\frac{3}{5}\right)^n" inline />.</span>,
                        <span>Since <MathBlock math="3/5 < 1" inline />, the limit of the exponent part is 0.</span>,
                        <MathBlock math="9 \cdot 0 = 0" block />,
                        <div className="result-banner">Verdict: Converges to <strong>0</strong></div>
                    ]} />
                </div>

                <div className="example-box" style={{ marginTop: '3rem' }}>
                    <div className="example-title">Example 1.4: Alternating Sequences</div>
                    <p>Determine whether the sequence <MathBlock math="a_n = \frac{(-1)^n n^2}{n^3 + 2n^2 + 1}" inline /> converges or diverges.</p>
                    <StepByStep steps={[
                        <span>Apply the <strong>Absolute Value Theorem</strong>. First, evaluate <MathBlock math="\lim_{n\to\infty} |a_n|" inline />.</span>,
                        <MathBlock math="\lim_{n\to\infty} \frac{n^2}{n^3 + 2n^2 + 1} = \lim_{n\to\infty} \frac{1/n}{1 + 2/n + 1/n^3}" block />,
                        <span>The limit is <MathBlock math="\frac{0}{1 + 0 + 0} = 0" inline />.</span>,
                        <div className="result-banner">Since <MathBlock math="\lim |a_n| = 0" inline />, then <MathBlock math="\lim a_n = 0" inline />. The sequence converges to 0.</div>
                    ]} />
                </div>

                <div className="example-box" style={{ marginTop: '3rem' }}>
                    <div className="example-title">Example 1.5: Continuous Functions</div>
                    <p>Find the limit of <MathBlock math="a_n = \cos\left(\frac{2}{n}\right)" inline />.</p>
                    <StepByStep steps={[
                        <span>Since cosine is a <strong>continuous function</strong>, we can move the limit inside.</span>,
                        <MathBlock math="\lim_{n \to \infty} \cos\left(\frac{2}{n}\right) = \cos\left( \lim_{n \to \infty} \frac{2}{n} \right)" block />,
                        <span>The inside limit is 0, so <MathBlock math="\cos(0) = 1" inline />.</span>,
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
                        question={<MathBlock math="a_n = \frac{n^3}{n+1}" inline />}
                        correctAnswer="divergent"
                        steps={[
                            "Divide top and bottom by n.",
                            <span><MathBlock math="a_n = \frac{n^2}{1 + 1/n}" inline /></span>,
                            <span>As n goes to infinity, the top grows square-wise while bottom stays 1.</span>,
                            "The limit is ∞, so it diverges."
                        ]}
                    />

                    <PracticeExercise
                        difficulty="Medium"
                        question={<MathBlock math="a_n = \frac{(-1)^n n^2}{n^3 + 2n^2 + 1}" inline />}
                        correctAnswer="0"
                        steps={[
                            "Use the Squeeze Theorem / Absolute Value Theorem.",
                            <span>Evaluate <MathBlock math="\lim |a_n| = \lim \frac{n^2}{n^3 + 2n^2 + 1}" inline />.</span>,
                            <span>Divide by <MathBlock math="n^3" inline /> to get <MathBlock math="\lim \frac{1/n}{1 + 2/n + 1/n^3} = 0" inline />.</span>,
                            "Since the absolute value goes to 0, the alternating sequence also goes to 0."
                        ]}
                    />

                    <PracticeExercise
                        difficulty="Hard"
                        question={<MathBlock math="a_n = \cos\left(\frac{2}{n}\right)" inline />}
                        correctAnswer="1"
                        steps={[
                            "Apply the Continuous Function Theorem.",
                            <span>Move the limit inside: <MathBlock math="\cos\left( \lim_{n \to \infty} \frac{2}{n} \right)" inline />.</span>,
                            <span>The inside limit is 0.</span>,
                            <span><MathBlock math="\cos(0) = 1" inline />.</span>
                        ]}
                    />

                    <PracticeExercise
                        difficulty="PRO"
                        question={<MathBlock math="a_n = \frac{\ln(n)}{n}" inline />}
                        correctAnswer="0"
                        steps={[
                            "This is an ∞/∞ form. Use the Function Theorem + L'Hopital's Rule.",
                            <span>Differentiate: <MathBlock math="\frac{d}{dx}\ln(x) = 1/x" inline /> and <MathBlock math="\frac{d}{dx}x = 1" inline />.</span>,
                            <span>New limit: <MathBlock math="\lim_{x \to \infty} \frac{1/x}{1} = 0" inline />.</span>
                        ]}
                    />
                </div>
            </motion.section>

        </motion.div>
    );
};

export default Section11_1;
