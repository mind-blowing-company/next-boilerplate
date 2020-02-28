const express = require("express");
const next = require("next");
const nextI18NextMiddleware = require("next-i18next/middleware").default;

const i18n = require("./i18n");

const port = process.env.PORT || 3000;
const app = next({ dev: process.env.NODE_ENV !== "production" });
const requestHandler = app.getRequestHandler();

(async () => {
    await app.prepare();
    const server = express();

    await i18n.initPromise;
    server.use(nextI18NextMiddleware(i18n));

    server.get("*", (req, res) => requestHandler(req, res));

    await server.listen(port);
    console.log(`> Ready on http://localhost:${port}`);
})();
