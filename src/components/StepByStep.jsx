import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, RotateCcw } from 'lucide-react';
import MathBlock from './MathBlock';

const StepByStep = ({ steps }) => {
    const [visibleCount, setVisibleCount] = useState(0);

    const showNext = () => {
        if (visibleCount < steps.length) {
            setVisibleCount(prev => prev + 1);
        }
    };

    const reset = () => {
        setVisibleCount(0);
    };

    return (
        <div className="step-container">
            <div className="steps-list" style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1.5rem' }}>
                {steps.map((step, index) => (
                    <AnimatePresence key={index}>
                        {index < visibleCount && (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.4, ease: "easeOut" }}
                                className="step-item"
                            >
                                <div className="step-number-circle">{index + 1}</div>
                                <div className="step-content-box">
                                    {typeof step === 'string' ? <MathBlock math={step} inline /> : step}
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                ))}
            </div>

            <div className="step-controls" style={{ display: 'flex', gap: '1rem' }}>
                {visibleCount < steps.length ? (
                    <button className="btn-reveal" onClick={showNext}>
                        <Sparkles size={18} />
                        <span>{visibleCount === 0 ? 'Start Exploring' : 'See Next Step'}</span>
                    </button>
                ) : (
                    <button className="btn-reset" onClick={reset}>
                        <RotateCcw size={18} />
                        <span>Try Again</span>
                    </button>
                )}
            </div>
        </div>
    );
};

export default StepByStep;
