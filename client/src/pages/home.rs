use leptos::*;
#[component] pub fn HomePage() -> impl IntoView {
    view! {
        <div class="page home-page">
            <section class="hero-section">
                <h2 class="hero-title">"W9 LABS"</h2>
                <p class="hero-subtitle">"OPEN SOURCE INFRASTRUCTURE"</p>
                <div class="hero-actions">
                    <a href="https://tools.w9.nu" class="voxel-button">"EXPLORE"</a>
                </div>
            </section>
            <section class="features-section">
                <h2 class="section-title">"MISSION"</h2>
                <div class="card-grid">
                    <div class="voxel-card"><h3 class="card-title">"OPENNESS"</h3><p>"All tools open source."</p></div>
                    <div class="voxel-card"><h3 class="card-title">"COMMUNITY"</h3><p>"Built by the community."</p></div>
                    <div class="voxel-card"><h3 class="card-title">"SUSTAINABILITY"</h3><p>"Long-term thinking."</p></div>
                </div>
            </section>
            <section class="sponsors-section">
                <h2 class="section-title">"POWERED BY"</h2>
                <div class="sponsors-grid">
                    <div class="sponsor-logo">"1Password"</div>
                    <div class="sponsor-logo">"Sentry"</div>
                    <div class="sponsor-logo">"Algolia"</div>
                    <div class="sponsor-logo">"Termius"</div>
                    <div class="sponsor-logo">"CloudNest"</div>
                    <div class="sponsor-logo">"Pollinations"</div>
                </div>
            </section>
        </div>
    }
}
