import React from 'react';

const Logo = ({ size = 32, color = 'var(--primary-light)' }) => {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ filter: 'drop-shadow(0 0 10px rgba(168, 85, 247, 0.4))' }}
        >
            <rect width="100" height="100" rx="20" fill="url(#logo-gradient)" />
            <path
                d="M30 70 L50 30 L70 70"
                stroke="white"
                strokeWidth="8"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <circle cx="50" cy="45" r="5" fill="white" />
            <defs>
                <linearGradient id="logo-gradient" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#9333ea" />
                    <stop offset="1" stopColor="#a855f7" />
                </linearGradient>
            </defs>
        </svg>
    );
};

export default Logo;
