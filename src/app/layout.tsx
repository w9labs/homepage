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
            <body>{children}</body>
        </html>
    );
}
