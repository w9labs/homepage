import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "W9 Labs",
    description: "Open Source Infrastructure for Independent Teams",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className="antialiased min-h-screen relative selection:bg-accent selection:text-black scroll-smooth">
                {/* CRT Scanline Overlay */}
                <div className="fixed inset-0 pointer-events-none z-50 mix-blend-overlay opacity-20"
                    style={{
                        background: 'linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06))',
                        backgroundSize: '100% 3px, 3px 100%'
                    }}
                />
                <div className="fixed inset-0 pointer-events-none z-[51] bg-black/10 animate-flicker"></div>
                {children}
            </body>
        </html>
    );
}
