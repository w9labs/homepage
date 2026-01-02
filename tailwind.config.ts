import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            background: "var(--bg)",
            foreground: "var(--fg)",
            accent: "var(--accent)",
            border: "var(--border)",
            muted: "#666666",
            warning: "#ff3333",
        },
    },
    plugins: [],
};
export default config;
