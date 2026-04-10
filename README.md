# W9 Labs Homepage

The main landing page for W9 Labs - Open Source Infrastructure for Independent Teams.

## Tech Stack

- **Backend**: Rust + Axum
- **Frontend**: Leptos (Full-stack SSR)
- **Styling**: 8-Bit Voxel Arcade Theme

## Features

- Beautiful retro 8-bit voxel aesthetic
- Links to all W9 network services
- Mission statement and values
- Active deployments showcase
- Sponsors section (1Password, Sentry, Algolia, Termius, CloudNest, Pollinations)
- Contributing call-to-action

## Quick Start

```bash
cargo run --package w9-homepage-server
```

## Deployment

```bash
docker-compose up -d
```

## Sponsors

To add or update sponsor logos, place SVG files in `public/sponsors/` and update the component list in `client/src/pages/home.rs`.

## License

GPL v3.0
