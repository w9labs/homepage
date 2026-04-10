FROM rust:1.83-slim AS builder
WORKDIR /app
RUN apt-get update && apt-get install -y pkg-config libssl-dev cmake && rm -rf /var/lib/apt/lists/*
COPY Cargo.toml ./
COPY server/Cargo.toml ./server/
COPY client/Cargo.toml ./client/
RUN mkdir -p server/src client/src && echo "fn main(){}" > server/src/main.rs && echo "" > client/src/lib.rs
RUN cargo fetch || true
COPY server/src ./server/src
COPY client/src ./client/src
RUN cd server && cargo build --release && cp target/release/w9-homepage-server /app/app

FROM debian:bookworm-slim
RUN apt-get update && apt-get install -y ca-certificates libssl3 wget && rm -rf /var/lib/apt/lists/*
RUN useradd -m -s /bin/bash w9homepage
WORKDIR /app
COPY --from=builder /app/app /usr/local/bin/w9-homepage-server
COPY public/ ./public/ 2>/dev/null || true
RUN chown -R w9homepage:w9homepage /app
USER w9homepage
EXPOSE 3000
HEALTHCHECK --interval=30s --timeout=10s --retries=3 CMD wget --quiet --tries=1 --spider http://localhost:3000/api/health || exit 1
ENV HOST=0.0.0.0 PORT=3000
CMD ["w9-homepage-server"]
