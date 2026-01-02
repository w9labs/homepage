import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'ghost' | 'accent';
    children: React.ReactNode;
}

export default function Button({ variant = 'primary', className = '', ...props }: ButtonProps) {
    // Base styles: upscale, tracking, font
    const baseStyles = "uppercase tracking-widest px-6 py-2 text-sm transition-all duration-300 border font-bold flex items-center justify-center gap-2 relative overflow-hidden group";

    // Variants mapping
    const variants = {
        primary: "bg-transparent text-foreground border-foreground hover:bg-foreground hover:text-background",
        ghost: "bg-transparent border-transparent text-muted hover:text-accent hover:shadow-[0_0_10px_rgba(0,255,65,0.2)]",
        accent: "bg-transparent text-accent border-accent hover:bg-accent hover:text-black hover:shadow-[0_0_15px_rgba(0,255,65,0.5)]"
    };

    return (
        <button
            className={`${baseStyles} ${variants[variant]} ${className}`}
            {...props}
        >
            <span className="relative z-10 flex items-center gap-2">{props.children}</span>
        </button>
    );
}
