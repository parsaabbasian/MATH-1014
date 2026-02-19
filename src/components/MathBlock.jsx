import React, { useEffect, useRef } from 'react';
import katex from 'katex';

const MathBlock = ({ math, block = false, inline = false }) => {
    const containerRef = useRef(null);

    useEffect(() => {
        if (containerRef.current) {
            katex.render(math, containerRef.current, {
                throwOnError: false,
                displayMode: block,
            });
        }
    }, [math, block]);

    if (inline) {
        return <span ref={containerRef} />;
    }

    return (
        <div className={block ? 'math-block-container' : 'math-inline-container'}>
            <div ref={containerRef} />
        </div>
    );
};

export default MathBlock;
