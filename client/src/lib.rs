use leptos::*;
use leptos_meta::*;
use leptos_router::*;

mod components;
mod pages;
use components::{Header, Footer};

use pages::HomePage;

#[component]
pub fn App() -> impl IntoView {
    view! {
        <Title text="W9 Labs"/>
        <Meta name="viewport" content="width=device-width, initial-scale=1"/>
        <Stylesheet id="voxel" href="/pkg/w9-homepage-client.css"/>
        <Router>
            <div class="app-container">
                <Header/>
                <main class="main-content">
                    <Routes>
                        <Route path="home" view=HomePage/>
                    </Routes>
                </main>
                <Footer/>
            </div>
        </Router>
    }
}
