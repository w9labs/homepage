FROM ghcr.io/w9labs/homepage:latest
EXPOSE 3000
ENV PORT=3000
CMD ["node", "server.js"]