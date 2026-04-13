use leptos::*;
#[component] pub fn Header() -> impl IntoView {
    view! { <header class="voxel-header"><div class="header-content"><img src="/w9-logo/logo-wordmark.svg" alt="W9 Labs" class="logo-img"/><nav class="header-nav"><a href="/">"HOME"</a></nav></div></header> }
}
#[component] pub fn Footer() -> impl IntoView {
    view! { <footer class="voxel-footer"><div class="footer-content"><div class="footer-section"><img src="/w9-logo/wordmark-dark.svg" alt="W9 Labs" class="footer-logo"/><p>"Open source infrastructure"</p></div><div class="footer-section"><p>"© 2026 W9 Labs"</p></div></div></footer> }
}
