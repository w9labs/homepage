import React from 'react';

export default function Card({ children, className = '' }: { children: React.ReactNode, className?: string }) {
    return (
        <div className={`border border-border bg-black/40 backdrop-blur-md p-6 hover:border-accent/50 transition-colors duration-300 hover:shadow-[0_0_20px_rgba(0,0,0,0.5)] ${className}`}>
            {children}
        </div>
    );
}
