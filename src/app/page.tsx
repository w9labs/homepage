import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Image from 'next/image'

export default function Home() {
    return (
        <div className="app">
            <Header />
            <main className="page">
                <section className="box" style={{ textAlign: 'center' }}>
                    <h1>W9 Labs</h1>
                    <p className="subtitle" style={{ marginBottom: '1rem' }}>
                        <strong>Open Source. Community Driven. Non-Profit.</strong>
                    </p>
                    <div className="actions" style={{ justifyContent: 'center', marginBottom: '1.5rem' }}>
                        <a href="https://w9.se" className="button ghost" target="_blank" rel="noreferrer">HQ · w9.se</a>
                        <a href="https://w9.nu" className="button ghost" target="_blank" rel="noreferrer">Hub · w9.nu</a>
                        <a href="https://github.com/w9labs" className="button ghost" target="_blank" rel="noreferrer">GitHub · w9labs</a>
                    </div>
                    <p style={{ marginBottom: '1.5rem' }}>
                        <b>W9 Labs</b> is a non-profit collective dedicated to building accessible, transparent, and robust open-source software. We believe technology should be a commons, built by the community, for the community.
                    </p>
                </section>

                <section className="box">
                    <h2 className="section-title">Who We Are</h2>
                    <p className="justify">
                        We are a team of developers, designers, and enthusiasts working together to create tools that empower users. As a non-profit initiative, our primary stakeholders are our users and contributors, not shareholders.
                    </p>
                    <div style={{ marginTop: '1rem' }}>
                        <p><strong>Our Domains</strong></p>
                        <ul className="list">
                            <li><a href="https://w9.se" target="_blank" rel="noreferrer">w9.se</a>: Our organizational home, governance, and long-term documentation.</li>
                            <li><a href="https://w9.nu" target="_blank" rel="noreferrer">w9.nu</a>: Our release hub, community showcase, and "what's happening now."</li>
                        </ul>
                    </div>
                </section>

                <section className="box">
                    <h2 className="section-title">Our Mission</h2>
                    <ul className="list">
                        <li><strong>Openness:</strong> Every line of code we produce is open source and auditable.</li>
                        <li><strong>Community First:</strong> We prioritize user privacy, data sovereignty, and community feedback.</li>
                        <li><strong>Sustainability:</strong> We build software designed to last, focusing on stability and performance.</li>
                    </ul>
                </section>

                <section className="box">
                    <h2 className="section-title">What We Build</h2>
                    <p>We focus on developing solutions in the following areas:</p>
                    <ul className="list">
                        <li><strong>Core Infrastructure:</strong> Tools to help self-hosters and sysadmins.</li>
                        <li><strong>Privacy Tools:</strong> Utilities that protect user identity on the modern web.</li>
                        <li><strong>Community Utilities:</strong> Libraries and scripts to improve developer workflows.</li>
                    </ul>
                    <div className="actions" style={{ marginTop: '1rem' }}>
                        <a href="https://tools.w9.nu" className="button">W9 Tools</a>
                        <a href="https://w9.nu" className="button ghost" target="_blank" rel="noreferrer">W9 Mail</a>
                        <a href="https://github.com/orgs/w9-labs/repositories" className="button ghost" target="_blank" rel="noreferrer">View Repositories</a>
                    </div>
                </section>

                <section className="box">
                    <h2 className="section-title">Contributing</h2>
                    <p>
                        We welcome contributors of all skill levels! Whether you are fixing a typo, refactoring code, or designing a logo, your help is appreciated.
                    </p>
                    <p style={{ marginTop: '0.5rem' }}>
                        <strong>How to join the fun:</strong>
                    </p>
                    <ol style={{ listStyle: 'decimal', paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                        <li>Explore our repositories and look for the <code>good first issue</code> label.</li>
                        <li>Fork the repo and create a branch.</li>
                        <li>Submit a Pull Request (PR).</li>
                    </ol>
                </section>

                <section className="box sponsorship">
                    <h2 className="section-title">Sponsorship</h2>
                    <p className="sponsor-intro">
                        These organizations keep the lights on for the community build process. Their tooling and kindness help W9 Labs continue releasing open infrastructure.
                    </p>
                    <div className="sponsor-logos">
                        <div className="sponsor-card">
                            <div className="sponsor-logo" aria-label="1Password">
                                <a href="https://1password.com" target="_blank" rel="noreferrer">
                                    <Image src="/1password.svg" alt="1Password logo" width={180} height={50} style={{ width: '100%', height: 'auto' }} />
                                </a>
                            </div>
                            <p className="sponsor-credit">Courtesy of 1Password · secure storage partner.</p>
                        </div>
                        <div className="sponsor-card">
                            <div className="sponsor-logo" aria-label="Core sponsor">
                                <a href="https://sentry.io" target="_blank" rel="noreferrer">
                                    <svg
                                        className="css-lfbo6j e1igk8x04"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 222 66"
                                        width="220"
                                        height="66"
                                    >
                                        <path
                                            d="M29,2.26a4.67,4.67,0,0,0-8,0L14.42,13.53A32.21,32.21,0,0,1,32.17,40.19H27.55A27.68,27.68,0,0,0,12.09,17.47L6,28a15.92,15.92,0,0,1,9.23,12.17H4.62A.76.76,0,0,1,4,39.06l2.94-5a10.74,10.74,0,0,0-3.36-1.9l-2.91,5a4.54,4.54,0,0,0,1.69,6.24A4.66,4.66,0,0,0,4.62,44H19.15a19.4,19.4,0,0,0-8-17.31l2.31-4A23.87,23.87,0,0,1,23.76,44H36.07a35.88,35.88,0,0,0-16.41-31.8l4.67-8a.77.77,0,0,1,1.05-.27c.53.29,20.29,34.77,20.66,35.17a.76.76,0,0,1-.68,1.13H40.6q.09,1.91,0,3.81h4.78A4.59,4.59,0,0,0,50,39.43a4.49,4.49,0,0,0-.62-2.28Z M124.32,28.28,109.56,9.22h-3.68V34.77h3.73V15.19l15.18,19.58h3.26V9.22h-3.73ZM87.15,23.54h13.23V20.22H87.14V12.53h14.93V9.21H83.34V34.77h18.92V31.45H87.14ZM71.59,20.3h0C66.44,19.06,65,18.08,65,15.7c0-2.14,1.89-3.59,4.71-3.59a12.06,12.06,0,0,1,7.07,2.55l2-2.83a14.1,14.1,0,0,0-9-3c-5.06,0-8.59,3-8.59,7.27,0,4.6,3,6.19,8.46,7.52C74.51,24.74,76,25.78,76,28.11s-2,3.77-5.09,3.77a12.34,12.34,0,0,1-8.3-3.26l-2.25,2.69a15.94,15.94,0,0,0,10.42,3.85c5.48,0,9-2.95,9-7.51C79.75,23.79,77.47,21.72,71.59,20.3ZM195.7,9.22l-7.69,12-7.64-12h-4.46L186,24.67V34.78h3.84V24.55L200,9.22Zm-64.63,3.46h8.37v22.1h3.84V12.68h8.37V9.22H131.08ZM169.41,24.8c3.86-1.07,6-3.77,6-7.63,0-4.91-3.59-8-9.38-8H154.67V34.76h3.8V25.58h6.45l6.48,9.2h4.44l-7-9.82Zm-10.95-2.5V12.6h7.17c3.74,0,5.88,1.77,5.88,4.84s-2.29,4.86-5.84,4.86Z"
                                            transform="translate(11, 11)"
                                            fill="#ffffff"
                                        ></path>
                                    </svg>
                                </a>
                            </div>
                            <p className="sponsor-credit">
                                Sentry automatically detects and notifies you of critical performance issues so you can trace every slow transaction to a poor-performing API call or DB query.
                            </p>
                        </div>
                        <div className="sponsor-card">
                            <div className="sponsor-logo" aria-label="Algolia">
                                <a href="https://www.algolia.com/?utm_medium=AOS-referral" target="_blank" rel="noreferrer">
                                    <Image src="/algolia.png" alt="Algolia logo" width={180} height={50} style={{ width: '100%', height: 'auto' }} />
                                </a>
                            </div>
                            <p className="sponsor-credit">Algolia · provides search engines capable of delivering real-time results from the first keystroke.</p>
                        </div>
                        <div className="sponsor-card">
                            <div className="sponsor-logo" aria-label="FOSSVPS">
                                <a href="https://fossvps.org" target="_blank" rel="noreferrer">
                                    <Image src="/fossvps.png" alt="FOSSVPS logo" width={180} height={50} style={{ width: '100%', height: 'auto' }} />
                                </a>
                            </div>
                            <p className="sponsor-credit">FOSSVPS provides infrastructure for open-source developers.</p>
                        </div>
                        <div className="sponsor-card">
                            <div className="sponsor-logo" aria-label="Termius">
                                <a href="https://termius.com" target="_blank" rel="noreferrer">
                                    <Image src="/termius.png" alt="Termius logo" width={180} height={50} style={{ width: '100%', height: 'auto' }} />
                                </a>
                            </div>
                            <p className="sponsor-credit">
                                <a href="https://termius.com" target="_blank" rel="noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>Termius</a> provides a secure, reliable, and collaborative SSH client.
                            </p>
                        </div>
                        <div className="sponsor-card">
                            <div className="sponsor-logo" aria-label="CloudNest" style={{ background: '#ffffff' }}>
                                <a href="https://cloudnest.vn" target="_blank" rel="noreferrer">
                                    <Image src="/cloudnest.png" alt="CloudNest logo" width={180} height={50} style={{ width: '100%', height: 'auto' }} />
                                </a>
                            </div>
                            <p className="sponsor-credit">
                                <a href="https://cloudnest.vn" target="_blank" rel="noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>CloudNest</a> provides high-performance cloud infrastructure with Tier 3 data centers, NVMe SSD storage, and 100% uptime for tools, apps, and automation.
                            </p>
                        </div>
                        <div className="sponsor-card">
                            <div className="sponsor-logo" aria-label="Pollinations">
                                <a href="https://pollinations.ai" target="_blank" rel="noreferrer">
                                    <Image src="/pollinations.jpg" alt="Pollinations logo" width={180} height={50} style={{ width: '100%', height: 'auto' }} />
                                </a>
                            </div>
                            <p className="sponsor-credit">
                                <a href="https://pollinations.ai" target="_blank" rel="noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>Pollinations</a> is an open-source gen AI platform based in Berlin, powering 500+ community projects with accessible text and image generation APIs.
                            </p>
                        </div>
                    </div>
                    <p className="sponsor-footnote">Credits curated by W9 Labs · reach out via hi@w9.se to be listed here.</p>
                </section>
            </main>
            <Footer />
        </div>
    )
}
