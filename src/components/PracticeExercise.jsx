import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, XCircle, Sparkles, RotateCcw, ChevronDown } from 'lucide-react';
import MathBlock from './MathBlock';

const PracticeExercise = ({ question, correctAnswer, steps, difficulty }) => {
    const [userAnswer, setUserAnswer] = useState('');
    const [status, setStatus] = useState('idle'); // idle, correct, wrong
    const [showSolution, setShowSolution] = useState(false);
    const [visibleStepCount, setVisibleStepCount] = useState(0);

    const checkAnswer = () => {
        // Simple normalization for basic math answers
        const normalizedUser = userAnswer.trim().toLowerCase();
        const normalizedCorrect = correctAnswer.toString().toLowerCase().trim();

        if (normalizedUser === normalizedCorrect) {
            setStatus('correct');
        } else {
            setStatus('wrong');
        }
    };

    const handleReset = () => {
        setUserAnswer('');
        setStatus('idle');
        setShowSolution(false);
        setVisibleStepCount(0);
    };

    const revealNextStep = () => {
        if (visibleStepCount < steps.length) {
            setVisibleStepCount(prev => prev + 1);
        }
    };

    const difficultyColors = {
        Simple: 'var(--success)',
        Medium: '#fbbf24',
        Hard: '#f87171',
        'VERY HARD': '#ef4444'
    };

    return (
        <div className="example-box practice-box" style={{
            border: status === 'correct' ? '2px solid var(--success)' :
                status === 'wrong' ? '2px solid var(--error)' : '1px solid var(--border)',
            background: 'var(--card-bg)'
        }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                <div className="example-title" style={{ color: difficultyColors[difficulty], margin: 0, letterSpacing: '0.15em', fontSize: '0.75rem' }}>
                    LEVEL: {difficulty}
                </div>
                {status === 'correct' && (
                    <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} style={{ color: 'var(--success)', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', fontWeight: '800' }}>
                        <CheckCircle2 size={18} />
                        CONGRATULATIONS!
                    </motion.div>
                )}
                {status === 'wrong' && (
                    <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} style={{ color: 'var(--error)', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', fontWeight: '800' }}>
                        <XCircle size={18} />
                        CHECK THE ANSWER
                    </motion.div>
                )}
            </div>

            <div style={{ marginBottom: '2rem' }}>
                {question}
            </div>

            <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
                <div style={{ flex: 1, minWidth: '200px', position: 'relative' }}>
                    <input
                        type="text"
                        placeholder="Your answer..."
                        value={userAnswer}
                        onChange={(e) => setUserAnswer(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && checkAnswer()}
                        className="practice-input"
                        disabled={status === 'correct'}
                    />
                </div>
                <button
                    className="btn-reveal"
                    onClick={checkAnswer}
                    disabled={status === 'correct' || !userAnswer.trim()}
                    style={{ padding: '0 2rem' }}
                >
                    Check
                </button>
                {(status !== 'idle' || showSolution) && (
                    <button className="btn-reset" onClick={handleReset} style={{ width: 'auto', padding: '0 1.25rem' }}>
                        <RotateCcw size={18} />
                    </button>
                )}
            </div>

            {!showSolution && status !== 'correct' && (
                <button
                    style={{
                        background: 'none',
                        border: 'none',
                        color: 'var(--text-muted)',
                        fontSize: '0.85rem',
                        cursor: 'pointer',
                        textDecoration: 'underline',
                        padding: 0,
                        opacity: 0.7
                    }}
                    onClick={() => setShowSolution(true)}
                >
                    Stuck? Show Solution
                </button>
            )}

            <AnimatePresence>
                {(showSolution || status === 'correct') && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                        style={{ overflow: 'hidden' }}
                    >
                        <div style={{ paddingTop: '2rem', borderTop: '1px border var(--border)', marginTop: '1rem' }}>
                            <div style={{ fontWeight: '800', fontSize: '0.9rem', marginBottom: '1.5rem', color: 'var(--primary-light)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <Sparkles size={16} />
                                STEP-BY-STEP SOLUTION
                            </div>

                            <div className="steps-list" style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1.5rem' }}>
                                {steps.map((step, index) => {
                                    const isStepVisible = status === 'correct' || index < visibleStepCount;
                                    return (
                                        <AnimatePresence key={index}>
                                            {isStepVisible && (
                                                <motion.div
                                                    initial={{ opacity: 0, y: 10 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    transition={{ duration: 0.4 }}
                                                    className="step-item"
                                                    style={{ background: 'rgba(255,255,255,0.03)' }}
                                                >
                                                    <div className="step-number-circle" style={{ width: '24px', height: '24px', fontSize: '0.75rem' }}>{index + 1}</div>
                                                    <div className="step-content-box" style={{ fontSize: '0.95rem' }}>
                                                        {step}
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    );
                                })}
                            </div>

                            {status !== 'correct' && visibleStepCount < steps.length && (
                                <button className="btn-reveal" onClick={revealNextStep} style={{ padding: '0.5rem 1.5rem', fontSize: '0.9rem' }}>
                                    <span>Next Step</span>
                                    <ChevronDown size={16} />
                                </button>
                            )}

                            {(status === 'correct' || visibleStepCount === steps.length) && (
                                <div className="result-banner" style={{ marginTop: '1rem' }}>
                                    Final Answer: <strong>{correctAnswer}</strong>
                                </div>
                            )}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default PracticeExercise;
