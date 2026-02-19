import React from 'react';
import { motion } from 'framer-motion';
import MathBlock from '../components/MathBlock';
import StepByStep from '../components/StepByStep';
import PracticeExercise from '../components/PracticeExercise';
import { MousePointer2, Zap, Layout, GraduationCap, Sparkles } from 'lucide-react';

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
                    <p style={{ fontSize: '1.2rem', marginBottom: '2.5rem' }}>Where does this sequence end up as n goes to infinity?</p>
                    <div style={{ marginBottom: '2.5rem' }}>
                        <MathBlock math="a_n = \frac{2n^3}{n^3 + 5}" block />
                    </div>

                    <StepByStep steps={[
                        <p>Let's simplify by dividing both top and bottom by the biggest power, <MathBlock math="n^3" inline />.</p>,
                        <MathBlock math="a_n = \frac{2}{1 + \frac{5}{n^3}}" block />,
                        <p>As n gets huge, any number divided by n (like <MathBlock math="\frac{5}{n^3}" inline />) becomes zero.</p>,
                        <MathBlock math="\lim_{n \to \infty} a_n = \frac{2}{1 + 0} = 2" block />,
                        <div className="result-banner">
                            Summary: The sequence converges to <strong>2</strong>.
                        </div>
                    ]} />
                </div>
            </motion.section>

            {/* Part 3: Quick Tests */}
            <motion.section variants={itemVariants} className="section-card glass-card">
                <div className="section-header">
                    <div className="section-icon-wrapper">
                        <MousePointer2 size={28} />
                    </div>
                    <h2 className="section-title">III. Quick Tests</h2>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '3rem' }}>
                    <div className="example-box" style={{ margin: 0 }}>
                        <div className="example-title">Option A</div>
                        <MathBlock math="a_n = \frac{n^2}{n + 4}" block />
                        <StepByStep steps={[
                            <p>Divide by n to simplify: <MathBlock math="a_n = \frac{n}{1 + \frac{4}{n}}" inline />.</p>,
                            <MathBlock math="\lim_{n \to \infty} a_n = \infty" block />,
                            <div className="result-banner">Verdict: <strong>Divergent</strong></div>
                        ]} />
                    </div>

                    <div className="example-box" style={{ margin: 0 }}>
                        <div className="example-title">Option B</div>
                        <MathBlock math="a_n = \frac{4^{n+1}}{7^n}" block />
                        <StepByStep steps={[
                            <p>Rewrite this as: <MathBlock math="a_n = 4 \cdot \left(\frac{4}{7}\right)^n" inline />.</p>,
                            <div className="result-banner">Verdict: <strong>Convergent</strong> to 0</div>
                        ]} />
                    </div>
                </div>
            </motion.section>

            {/* More Examples Section */}
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
                        question={<MathBlock math="a_n = \frac{n^2 - 1}{n^2 + 1}" inline />}
                        correctAnswer="1"
                        steps={[
                            "Divide the top and bottom by n².",
                            <span><MathBlock math="a_n = \frac{1 - 1/n^2}{1 + 1/n^2}" inline /></span>,
                            "As n approaches infinity, 1/n² becomes 0.",
                            "The result simplifies to 1/1 = 1."
                        ]}
                    />

                    <PracticeExercise
                        difficulty="Medium"
                        question={<MathBlock math="a_n = \frac{\ln(n)}{n}" inline />}
                        correctAnswer="0"
                        steps={[
                            "This is an ∞/∞ indeterminate form. Use L'Hopital's Rule.",
                            "Differentiate top: 1/n. Differentiate bottom: 1.",
                            <span>The limit becomes <MathBlock math="\lim \frac{1/n}{1}" inline />.</span>,
                            "As n grows, 1/n approaches 0."
                        ]}
                    />

                    <PracticeExercise
                        difficulty="Hard"
                        question={<MathBlock math="\sqrt{n^2 + n} - n" inline />}
                        correctAnswer="1/2"
                        steps={[
                            <span>Multiply by the conjugate: <MathBlock math="\frac{\sqrt{n^2+n} + n}{\sqrt{n^2+n} + n}" inline />.</span>,
                            <span>The top becomes <MathBlock math="(n^2+n) - n^2 = n" inline />.</span>,
                            <span>The bottom is <MathBlock math="\sqrt{n^2+n} + n" inline />.</span>,
                            <span>Divide top and bottom by <MathBlock math="n" inline />: <MathBlock math="\frac{1}{\sqrt{1 + 1/n} + 1}" inline />.</span>,
                            <span>As n goes to infinity, we get <MathBlock math="\frac{1}{\sqrt{1} + 1} = 1/2" inline />.</span>
                        ]}
                    />

                    <PracticeExercise
                        difficulty="VERY HARD"
                        question={<MathBlock math="\left(1 + \frac{1}{n}\right)^n" inline />}
                        correctAnswer="e"
                        steps={[
                            <span>Use the natural log trick: Let <MathBlock math="y = \lim (1 + 1/n)^n" inline />, so <MathBlock math="\ln(y) = \lim n \cdot \ln(1 + 1/n)" inline />.</span>,
                            <span>Rewrite as <MathBlock math="\lim \frac{\ln(1 + 1/n)}{1/n}" inline /> for L'Hopital's.</span>,
                            "The limit of ln(y) is 1.",
                            <span>Therefore, <MathBlock math="y = e^1 = e" inline />.</span>
                        ]}
                    />
                </div>
            </motion.section>

        </motion.div>
    );
};

export default Section11_1;
