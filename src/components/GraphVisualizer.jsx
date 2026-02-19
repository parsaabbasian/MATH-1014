import React from 'react';

const GraphVisualizer = ({ type, n = 3, domain = [0, 3], func = (x) => x * x + 2 }) => {
    // Canvas dimensions
    const width = 400;
    const height = 300;
    const padding = 40;
    const graphWidth = width - 2 * padding;
    const graphHeight = height - 2 * padding;

    // Scale helpers
    const xScale = (x) => padding + (x - domain[0]) / (domain[1] - domain[0]) * graphWidth;
    const yScale = (y) => height - padding - (y / 15) * graphHeight; // Max y approx 15

    // Generate points for smooth curve
    const points = [];
    for (let x = domain[0]; x <= domain[1]; x += 0.1) {
        points.push(`${xScale(x)},${yScale(func(x))}`);
    }
    const pathD = `M ${points.join(' L ')}`;

    // Generate rectangles
    const dx = (domain[1] - domain[0]) / n;
    const rects = [];
    for (let i = 0; i < n; i++) {
        let x = domain[0] + i * dx;
        let h_x;

        if (type === 'left') h_x = x;
        else if (type === 'right') h_x = x + dx;
        else if (type === 'mid') h_x = x + dx / 2;
        else h_x = x; // Fallback

        const rectHeight = height - padding - yScale(func(h_x));
        const rectY = yScale(func(h_x));

        rects.push(
            <g key={i}>
                <rect
                    x={xScale(x)}
                    y={rectY}
                    width={graphWidth / n}
                    height={rectHeight}
                    fill="rgba(147, 51, 234, 0.2)"
                    stroke="rgba(147, 51, 234, 0.5)"
                />
                {type === 'mid' && (
                    <line
                        x1={xScale(h_x)}
                        y1={rectY}
                        x2={xScale(h_x)}
                        y2={height - padding}
                        stroke="rgba(147, 51, 234, 0.4)"
                        strokeDasharray="4"
                    />
                )}
                <circle cx={xScale(h_x)} cy={rectY} r="3" fill="#9333ea" />
            </g>
        );
    }

    // Trapezoidal special case
    const traps = [];
    if (type === 'trap') {
        for (let i = 0; i < n; i++) {
            let x1 = domain[0] + i * dx;
            let x2 = x1 + dx;
            let y1 = func(x1);
            let y2 = func(x2);

            const points = `
                ${xScale(x1)},${height - padding} 
                ${xScale(x2)},${height - padding} 
                ${xScale(x2)},${yScale(y2)} 
                ${xScale(x1)},${yScale(y1)}
            `;

            traps.push(
                <polygon
                    key={i}
                    points={points}
                    fill="rgba(147, 51, 234, 0.2)"
                    stroke="rgba(147, 51, 234, 0.5)"
                />
            );
        }
    }

    return (
        <svg viewBox={`0 0 ${width} ${height}`} style={{ width: '100%', height: 'auto', background: 'var(--surface)', borderRadius: '12px', border: '1px solid var(--border)' }}>
            {/* Grid & Axes */}
            <line x1={padding} y1={height - padding} x2={width - padding} y2={height - padding} stroke="var(--text-muted)" strokeWidth="2" />
            <line x1={padding} y1={padding} x2={padding} y2={height - padding} stroke="var(--text-muted)" strokeWidth="2" />

            {/* Draw Rects or Traps */}
            {type === 'trap' ? traps : rects}

            {/* Function Curve */}
            <path d={pathD} fill="none" stroke="var(--primary-light)" strokeWidth="3" />

            {/* Labels */}
            <text x={width / 2} y={height - 10} textAnchor="middle" fill="var(--text-muted)" fontSize="12">x</text>
            <text x={10} y={height / 2} textAnchor="middle" fill="var(--text-muted)" fontSize="12" transform={`rotate(-90, 10, ${height / 2})`}>f(x)</text>

            {/* Title */}
            <text x={width / 2} y={25} textAnchor="middle" fill="var(--text)" fontSize="14" fontWeight="bold">
                {type === 'left' && `Left Endpoint (L${n})`}
                {type === 'right' && `Right Endpoint (R${n})`}
                {type === 'mid' && `Midpoint Rule (M${n})`}
                {type === 'trap' && `Trapezoidal Rule (T${n})`}
            </text>
        </svg>
    );
};

export default GraphVisualizer;
