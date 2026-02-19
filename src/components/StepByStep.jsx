import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronRight, Eye, RotateCcw } from 'lucide-react';

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
            <div className="steps-list">
                {steps.map((step, index) => (
                    <AnimatePresence key={index}>
                        {index < visibleCount && (
                            <motion.div
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 10 }}
                                transition={{ duration: 0.3 }}
                                className="step-item"
                            >
                                <div className="step-number">{index + 1}</div>
                                <div className="step-content">
                                    {typeof step === 'string' ? <MathBlock math={step} inline /> : step}
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                ))}
            </div>

            <div className="step-controls">
                {visibleCount < steps.length ? (
                    <button className="btn-reveal" onClick={showNext}>
                        <Eye size={16} />
                        <span>{visibleCount === 0 ? 'Show Steps' : 'Next Step'}</span>
                    </button>
                ) : (
                    <button className="btn-reset" onClick={reset}>
                        <RotateCcw size={16} />
                        <span>Restart Solution</span>
                    </button>
                )}
            </div>
        </div>
    );
};

export default StepByStep;
