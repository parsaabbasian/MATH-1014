import React from 'react';
import { motion } from 'framer-motion';
import MathBlock from '../components/MathBlock';
import { Zap, Activity, Scissors, TrendingUp, Anchor } from 'lucide-react';

const CheatSheet = () => {
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
            transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
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
                    MATH 1013 <span className="text-gradient">Cheat Sheet</span>
                </motion.h1>
                <motion.p variants={itemVariants} className="hero-description" style={{ maxWidth: '600px', margin: '0 auto' }}>
                    Essential formulas, rules, and concepts from Calculus I to help you refresh for MATH 1014.
                </motion.p>
            </header>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem', marginTop: '3rem' }}>
                {/* Derivatives */}
                <motion.section variants={itemVariants} className="section-card glass-card">
                    <div className="section-header">
                        <div className="section-icon-wrapper">
                            <Zap size={24} />
                        </div>
                        <h2 className="section-title">Common Derivatives</h2>
                    </div>
                    <div style={{ display: 'grid', gap: '1rem', fontSize: '1.1rem' }}>
                        <MathBlock math="\frac{d}{dx}(x^n) = nx^{n-1}" block />
                        <MathBlock math="\frac{d}{dx}(\sin x) = \cos x" block />
                        <MathBlock math="\frac{d}{dx}(\cos x) = -\sin x" block />
                        <MathBlock math="\frac{d}{dx}(\tan x) = \sec^2 x" block />
                        <MathBlock math="\frac{d}{dx}(e^x) = e^x" block />
                        <MathBlock math="\frac{d}{dx}(\ln x) = \frac{1}{x}" block />
                    </div>
                </motion.section>

                {/* Differentiation Rules */}
                <motion.section variants={itemVariants} className="section-card glass-card">
                    <div className="section-header">
                        <div className="section-icon-wrapper">
                            <Activity size={24} />
                        </div>
                        <h2 className="section-title">Derivative Rules</h2>
                    </div>
                    <div style={{ display: 'grid', gap: '1.5rem' }}>
                        <div>
                            <div style={{ fontWeight: '800', color: 'var(--primary-light)', marginBottom: '0.5rem' }}>Product Rule</div>
                            <MathBlock math="(fg)' = f'g + fg'" block />
                        </div>
                        <div>
                            <div style={{ fontWeight: '800', color: 'var(--primary-light)', marginBottom: '0.5rem' }}>Quotient Rule</div>
                            <MathBlock math="(\frac{f}{g})' = \frac{f'g - fg'}{g^2}" block />
                        </div>
                        <div>
                            <div style={{ fontWeight: '800', color: 'var(--primary-light)', marginBottom: '0.5rem' }}>Chain Rule</div>
                            <MathBlock math="\frac{dy}{dx} = \frac{dy}{du} \cdot \frac{du}{dx}" block />
                        </div>
                    </div>
                </motion.section>

                {/* Integration Basics */}
                <motion.section variants={itemVariants} className="section-card glass-card">
                    <div className="section-header">
                        <div className="section-icon-wrapper">
                            <Anchor size={24} />
                        </div>
                        <h2 className="section-title">Standard Integrals</h2>
                    </div>
                    <div style={{ display: 'grid', gap: '1rem', fontSize: '1.1rem' }}>
                        <MathBlock math="\int x^n dx = \frac{x^{n+1}}{n+1} + C" block />
                        <MathBlock math="\int \frac{1}{x} dx = \ln|x| + C" block />
                        <MathBlock math="\int e^x dx = e^x + C" block />
                        <MathBlock math="\int \sin x dx = -\cos x + C" block />
                        <MathBlock math="\int \cos x dx = \sin x + C" block />
                        <MathBlock math="\int \sec^2 x dx = \tan x + C" block />
                    </div>
                </motion.section>

                {/* Trig Identities */}
                <motion.section variants={itemVariants} className="section-card glass-card">
                    <div className="section-header">
                        <div className="section-icon-wrapper">
                            <Scissors size={24} />
                        </div>
                        <h2 className="section-title">Trig Identities</h2>
                    </div>
                    <div style={{ display: 'grid', gap: '1rem', fontSize: '1.1rem' }}>
                        <MathBlock math="\sin^2 x + \cos^2 x = 1" block />
                        <MathBlock math="\tan^2 x + 1 = \sec^2 x" block />
                        <MathBlock math="\sin(2x) = 2\sin x \cos x" block />
                        <MathBlock math="\cos(2x) = \cos^2 x - \sin^2 x" block />
                        <MathBlock math="\sin^2 x = \frac{1 - \cos(2x)}{2}" block />
                        <MathBlock math="\cos^2 x = \frac{1 + \cos(2x)}{2}" block />
                    </div>
                </motion.section>
            </div>
        </motion.div>
    );
};

export default CheatSheet;
