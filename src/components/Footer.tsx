import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

export default function Footer() {
    return (
        <footer className="relative w-full border-t border-border/50 bg-black/40 backdrop-blur-md mt-auto">
            <div className="mx-auto max-w-5xl px-6 py-12 md:py-16">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    <div className="col-span-1 md:col-span-2">
                        <div className="text-xs font-bold uppercase tracking-widest text-muted mb-4">Developed by W9 Labs</div>
                        <p className="text-muted leading-relaxed max-w-sm mb-6">
                            W9 Labs is a non-profit collective dedicated to building accessible, transparent, and robust open-source software.
                        </p>
                        <a href="mailto:hi@w9.se" className="text-accent hover:underline decoration-accent/50 underline-offset-4 transition-all">hi@w9.se</a>
                    </div>

                    <div>
                        <div className="text-xs font-bold uppercase tracking-widest text-muted mb-6">Network</div>
                        <ul className="flex flex-col gap-3 text-sm">
                            <li>
                                <a href="https://tools.w9.nu" target="_blank" rel="noreferrer" className="group flex items-center text-muted hover:text-accent transition-colors">
                                    W9 Tools <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                                </a>
                            </li>
                            <li>
                                <a href="https://w9.nu" target="_blank" rel="noreferrer" className="group flex items-center text-muted hover:text-accent transition-colors">
                                    W9 Mail <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                                </a>
                            </li>
                            <li>
                                <a href="https://reminder.w9.nu" target="_blank" rel="noreferrer" className="group flex items-center text-muted hover:text-accent transition-colors">
                                    W9 Daily Reminders <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <div className="text-xs font-bold uppercase tracking-widest text-muted mb-6">Legal</div>
                        <ul className="flex flex-col gap-3 text-sm">
                            <li><Link href="/terms" className="text-muted hover:text-foreground transition-colors">Terms of Service</Link></li>
                            <li><Link href="/privacy" className="text-muted hover:text-foreground transition-colors">Privacy Notice</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between text-xs text-muted/60 gap-4">
                    <p>© {new Date().getFullYear()} W9 Labs</p>
                    <p className="font-mono tracking-tight">Open infrastructure for independent teams.</p>
                </div>
            </div>
        </footer>
    )
}
