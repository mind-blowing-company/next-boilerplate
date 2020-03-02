const UrlPrettifier = require("next-url-prettifier").default;

const routes = [
    {
        // We still have file-based routing here. But! As seen
        // from the library's name, it makes our URLs more pretty
        // by changing them. So we create a page as always and then
        // just add a pretty URL to it.
        // Read more: https://github.com/BDav24/next-url-prettifier
        page: "App",
        prettyUrl: "/"
    }
];

const router = new UrlPrettifier(routes);

exports.default = routes;
exports.Router = router;
