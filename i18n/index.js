const NextI18Next = require("next-i18next").default;

module.exports = new NextI18Next({
    defaultLanguage: "en_US",
    otherLanguages: ["fr_FR"],
    localePath: "/i18n/locales",
    localeSubpaths: {
        en_US: "en",
        fr_FR: "fr"
    }
});
