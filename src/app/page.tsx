import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Image from 'next/image'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import { Terminal, Shield, Users, ArrowRight, Github, ExternalLink, Code2, Server, Globe } from 'lucide-react'
import Link from 'next/link'

export default function Home() {
    return (
        <div className="app flex min-h-screen flex-col items-center bg-background" style={{
            backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)',
            backgroundSize: '40px 40px'
        }}>
            <Header />
            <main className="page w-full max-w-5xl px-6 py-12 flex flex-col gap-12 text-foreground">

                {/* Hero Section */}
                <section className="flex flex-col items-center text-center gap-6 py-16 animate-in fade-in slide-in-from-bottom-8 duration-1000">
                    <div className="relative">
                        <div className="absolute -inset-1 rounded-lg bg-accent opacity-20 blur"></div>
                        <h1 className="relative text-6xl md:text-8xl font-black tracking-tighter uppercase mb-4">
                            W9 Labs<span className="text-accent animate-flicker">_</span>
                        </h1>
                    </div>
                    <p className="text-xl md:text-2xl text-muted font-light tracking-wide max-w-2xl">
                        Open-Source Infrastructure<br />for <span className="text-white font-medium">Independent Teams</span>
                    </p>

                    <div className="flex flex-wrap gap-4 mt-8 justify-center">
                        <Link href="https://w9.se" target="_blank">
                            <Button variant="primary">
                                <Globe className="w-4 h-4" /> HQ · w9.se
                            </Button>
                        </Link>
                        <Link href="https://github.com/w9labs" target="_blank">
                            <Button variant="ghost">
                                <Github className="w-4 h-4" /> GitHub
                                <ArrowRight className="w-4 h-4 ml-1 opacity-50" />
                            </Button>
                        </Link>
                    </div>

                    <div className="mt-12 w-full max-w-3xl p-6 border border-white/10 bg-black/50 backdrop-blur rounded-sm text-left font-mono text-sm leading-relaxed text-muted">
                        <p>
                            <span className="text-accent">root@w9:~#</span> ./mission_statement.sh<br />
                            <span className="text-white">Executing...</span><br /><br />
                            W9 Labs is a non-profit collective building accessible, transparent software.
                            We believe technology should be a commons—built by the community, for the community,
                            prioritizing data sovereignty over shareholder value.
                        </p>
                    </div>
                </section>

                {/* Mission Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <Card className="flex flex-col gap-4">
                        <div className="p-3 bg-white/5 w-fit rounded-sm border border-white/10">
                            <Terminal className="w-6 h-6 text-accent" />
                        </div>
                        <h3 className="text-xl font-bold uppercase tracking-wider">Openness</h3>
                        <p className="text-sm text-muted leading-relaxed">
                            Every line of code we produce is open source and auditable. No black boxes, no hidden tracking.
                        </p>
                    </Card>
                    <Card className="flex flex-col gap-4">
                        <div className="p-3 bg-white/5 w-fit rounded-sm border border-white/10">
                            <Users className="w-6 h-6 text-accent" />
                        </div>
                        <h3 className="text-xl font-bold uppercase tracking-wider">Community First</h3>
                        <p className="text-sm text-muted leading-relaxed">
                            We prioritize user privacy and community feedback. Our roadmap is driven by needs, not profits.
                        </p>
                    </Card>
                    <Card className="flex flex-col gap-4">
                        <div className="p-3 bg-white/5 w-fit rounded-sm border border-white/10">
                            <Shield className="w-6 h-6 text-accent" />
                        </div>
                        <h3 className="text-xl font-bold uppercase tracking-wider">Sustainability</h3>
                        <p className="text-sm text-muted leading-relaxed">
                            Software designed to last. We focus on stability, performance, and long-term maintenance.
                        </p>
                    </Card>
                </div>

                {/* Products Section */}
                <section className="flex flex-col gap-8 py-12 border-t border-white/10">
                    <div className="flex flex-col md:flex-row justify-between items-baseline">
                        <h2 className="text-3xl font-bold uppercase tracking-tight">Active Deployments</h2>
                        <Link href="https://github.com/orgs/w9-labs/repositories" className="text-sm text-muted hover:text-accent flex items-center gap-1 mt-2 md:mt-0 transition-colors">
                            View all repositories <ArrowRight className="w-3 h-3" />
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <Card className="group relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                <Server className="w-32 h-32" />
                            </div>
                            <h3 className="text-2xl font-bold mb-2 group-hover:text-accent transition-colors">W9 Tools</h3>
                            <p className="text-muted mb-6 max-w-sm">
                                Core infrastructure utilities for self-hosters. DNS helpers, standard libraries, and maintenance scripts.
                            </p>
                            <Link href="https://tools.w9.nu" target="_blank">
                                <Button variant="ghost" className="pl-0 hover:pl-2">
                                    Launch Tools <ExternalLink className="w-4 h-4" />
                                </Button>
                            </Link>
                        </Card>

                        <Card className="group relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                <Code2 className="w-32 h-32" />
                            </div>
                            <h3 className="text-2xl font-bold mb-2 group-hover:text-accent transition-colors">W9 Mail</h3>
                            <p className="text-muted mb-6 max-w-sm">
                                Transactional email infrastructure built for reliability and high deliverability.
                            </p>
                            <Link href="https://w9.nu" target="_blank">
                                <Button variant="ghost" className="pl-0 hover:pl-2">
                                    Visit Hub <ExternalLink className="w-4 h-4" />
                                </Button>
                            </Link>
                        </Card>
                    </div>
                </section>

                {/* Contributing */}
                <section className="bg-white/5 border border-white/10 p-8 md:p-12 relative overflow-hidden">
                    <div className="absolute inset-0 bg-[url('/scanline.png')] mix-blend-overlay opacity-10"></div>
                    <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                        <div className="flex flex-col gap-4">
                            <h2 className="text-3xl font-bold uppercase">Join the Collective</h2>
                            <p className="text-muted max-w-lg">
                                Whether you're fixing a typo or refactoring core logic, your contributions define us.
                                Find the <code className="bg-accent/10 text-accent px-1 py-0.5 text-xs border border-accent/20">good first issue</code> label on GitHub.
                            </p>
                        </div>
                        <div className="flex flex-col gap-3 min-w-[200px]">
                            <Link href="https://github.com/w9labs" target="_blank">
                                <Button variant="accent" className="w-full text-center justify-center">
                                    Start Contributing
                                </Button>
                            </Link>
                            <p className="text-xs text-center text-muted">Open to all skill levels</p>
                        </div>
                    </div>
                </section>

                {/* Sponsorship */}
                <section className="py-12 border-t border-white/10">
                    <h2 className="text-xl font-bold uppercase text-muted mb-8 text-center tracking-widest">Powered By</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center justify-items-center opacity-70 hover:opacity-100 transition-opacity duration-500 max-w-5xl mx-auto">
                        <SponsorLogo src="/1password.svg" alt="1Password" href="https://1password.com" />
                        <SponsorLogo src="/sentry.svg" alt="Sentry" href="https://sentry.io" />
                        <SponsorLogo src="/algolia.png" alt="Algolia" href="https://algolia.com" />
                        <SponsorLogo src="/termius.png" alt="Termius" href="https://termius.com" />
                        <SponsorLogo src="/cloudnest.png" alt="CloudNest" href="https://cloudnest.vn" />
                        <SponsorLogo src="/pollinations.jpg" alt="Pollinations" href="https://pollinations.ai" />
                    </div>
                    <p className="text-xs text-center text-muted mt-12 font-mono">
                        Credits curated by W9 Labs · reach out via hi@w9.se to be listed here.
                    </p>
                </section>

            </main>
            <Footer />
        </div>
    )
}

function SponsorLogo({ src, alt, href }: { src: string, alt: string, href: string }) {
    // Sentry logo was inline SVG in original, for robustness let's just handle image or fallback
    // Since I don't have the SVG asset handy as a file for Sentry, and the original code had a huge SVG, 
    // I will use a simple placeholder if src is 'sentry.svg' and it doesn't exist, but actually
    // the previous code had an Inline SVG for Sentry. 
    // To match previous functionality, if src is sentry, I'll render the SVG.

    if (alt === "Sentry") {
        return (
            <a href={href} target="_blank" rel="noreferrer" className="grayscale hover:grayscale-0 transition-all hover:scale-105 duration-300">
                <svg className="h-8 w-auto fill-current text-white" viewBox="0 0 222 66" width="110" height="33">
                    <path d="M29,2.26a4.67,4.67,0,0,0-8,0L14.42,13.53A32.21,32.21,0,0,1,32.17,40.19H27.55A27.68,27.68,0,0,0,12.09,17.47L6,28a15.92,15.92,0,0,1,9.23,12.17H4.62A.76.76,0,0,1,4,39.06l2.94-5a10.74,10.74,0,0,0-3.36-1.9l-2.91,5a4.54,4.54,0,0,0,1.69,6.24A4.66,4.66,0,0,0,4.62,44H19.15a19.4,19.4,0,0,0-8-17.31l2.31-4A23.87,23.87,0,0,1,23.76,44H36.07a35.88,35.88,0,0,0-16.41-31.8l4.67-8a.77.77,0,0,1,1.05-.27c.53.29,20.29,34.77,20.66,35.17a.76.76,0,0,1-.68,1.13H40.6q.09,1.91,0,3.81h4.78A4.59,4.59,0,0,0,50,39.43a4.49,4.49,0,0,0-.62-2.28Z M124.32,28.28,109.56,9.22h-3.68V34.77h3.73V15.19l15.18,19.58h3.26V9.22h-3.73ZM87.15,23.54h13.23V20.22H87.14V12.53h14.93V9.21H83.34V34.77h18.92V31.45H87.14ZM71.59,20.3h0C66.44,19.06,65,18.08,65,15.7c0-2.14,1.89-3.59,4.71-3.59a12.06,12.06,0,0,1,7.07,2.55l2-2.83a14.1,14.1,0,0,0-9-3c-5.06,0-8.59,3-8.59,7.27,0,4.6,3,6.19,8.46,7.52C74.51,24.74,76,25.78,76,28.11s-2,3.77-5.09,3.77a12.34,12.34,0,0,1-8.3-3.26l-2.25,2.69a15.94,15.94,0,0,0,10.42,3.85c5.48,0,9-2.95,9-7.51C79.75,23.79,77.47,21.72,71.59,20.3ZM195.7,9.22l-7.69,12-7.64-12h-4.46L186,24.67V34.78h3.84V24.55L200,9.22Zm-64.63,3.46h8.37v22.1h3.84V12.68h8.37V9.22H131.08ZM169.41,24.8c3.86-1.07,6-3.77,6-7.63,0-4.91-3.59-8-9.38-8H154.67V34.76h3.8V25.58h6.45l6.48,9.2h4.44l-7-9.82Zm-10.95-2.5V12.6h7.17c3.74,0,5.88,1.77,5.88,4.84s-2.29,4.86-5.84,4.86Z" fill="currentColor"></path>
                </svg>
            </a>
        );
    }

    return (
        <a href={href} target="_blank" rel="noreferrer" className="grayscale hover:grayscale-0 transition-all hover:scale-105 duration-300 relative h-8 w-32 flex items-center justify-center">
            <Image
                src={src}
                alt={alt}
                width={120}
                height={40}
                className="object-contain max-h-8 w-auto"
                style={{ width: 'auto', height: '100%' }}
            />
        </a>
    )
}
