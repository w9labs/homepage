import Link from 'next/link'

const NETWORK_LINKS = [
    { id: 'home', label: 'W9 Labs', description: 'w9.se · HQ & Docs', href: 'https://w9.se', external: false },
    { id: 'tools', label: 'W9 Tools', description: 'tools.w9.nu · Links & drops', href: 'https://tools.w9.nu', external: true },
    { id: 'mail', label: 'W9 Mail', description: 'w9.nu · Transactional rail', href: 'https://w9.nu', external: true },
    { id: 'reminders', label: 'W9 Daily Reminders', description: 'reminder.w9.nu · Calendar digest', href: 'https://reminder.w9.nu', external: true },
] as const

export default function NetworkBar({ active }: { active: string }) {
    return (
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between py-3 border-b border-white/10 text-xs tracking-wider">
            <div className="flex flex-col mb-3 md:mb-0">
                <span className="font-bold text-muted uppercase tracking-widest">W9 Labs Network</span>
            </div>
            <nav className="flex flex-wrap gap-6">
                {NETWORK_LINKS.map((link) => {
                    const isActive = active === link.id
                    return (
                        <a
                            key={link.id}
                            href={link.href}
                            target={link.external ? "_blank" : undefined}
                            rel={link.external ? "noreferrer" : undefined}
                            className={`group flex flex-col md:flex-row md:items-baseline gap-1 transition-all duration-200 ${isActive ? 'text-accent' : 'text-muted hover:text-foreground'
                                }`}
                        >
                            <span className="font-bold uppercase">{link.label}</span>
                            <span className="hidden md:inline text-white/20 group-hover:text-white/40">/</span>
                            <small className="opacity-60 group-hover:opacity-100">{link.description}</small>
                        </a>
                    )
                })}
            </nav>
        </div>
    )
}
