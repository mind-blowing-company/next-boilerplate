const express = require("express");
const next = require("next");
const nextI18NextMiddleware = require("next-i18next/middleware").default;

const i18n = require("./src/i18n");

const port = process.env.PORT || 3000;
const app = next({ dev: process.env.NODE_ENV !== "production", dir: "./src" });
const requestHandler = app.getRequestHandler();

app.prepare().then(async () => {
    const server = express();

    await i18n.initPromise;
    server.use(nextI18NextMiddleware(i18n));

    server.get("*", (req, res) => requestHandler(req, res));

    server.listen(port);
    console.log(`> Ready on http://localhost:${port}`);
});