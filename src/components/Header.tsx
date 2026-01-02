import NetworkBar from './NetworkBar'

export default function Header() {
    return (
        <header className="sticky top-0 z-50 w-full border-b border-border bg-black/85 backdrop-blur-md supports-[backdrop-filter]:bg-black/60">
            <div className="mx-auto max-w-5xl px-6">
                <NetworkBar active="home" />
                <div className="flex flex-col py-8">
                    <p className="text-xs uppercase tracking-[0.25em] text-muted mb-3 font-bold">Developed by W9 Labs</p>
                    <div className="flex items-center justify-between">
                        <div>
                            <h1 className="text-4xl font-bold tracking-tighter text-foreground mb-1">
                                W9 Labs<span className="text-accent animate-pulse">_</span>
                            </h1>
                            <span className="text-sm font-medium tracking-widest text-muted/80 uppercase">Open Source • Community • Non-Profit</span>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}
