import NetworkBar from './NetworkBar'

export default function Header() {
    return (
        <header className="header">
            <NetworkBar active="home" />
            <div className="brand">
                <div>
                    <p className="eyebrow">Developed by W9 Labs</p>
                    <h1>W9 Labs</h1>
                    <span>Open Source • Community • Non-Profit</span>
                </div>
            </div>
        </header>
    )
}
