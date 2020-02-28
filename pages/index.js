import React from "react";
import Head from "next/head";
import Link from "next/link";

import "./styles.css";
import {withTranslation} from "../i18n";

const IndexPage = (props) => {
    const {t} = props;

    return (
        <div className="app">
            <Head>
                <title>{t("app-title")}</title>
            </Head>
            <div className="app-container">
                <Link href={props.i18n.language === "en_US" ? "/fr" : "/en"}>
                    <button className="switch-locale">
                        {t("switch-locale")}
                    </button>
                </Link>
                <img src="/logo.svg" className="app-logo" alt="logo" />
                <p>
                    {t("edit")} <code>pages/index.js</code> {t("save-reload")}.
                </p>
                <a
                    className="app-link"
                    href="https://nextjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {t("learn")}
                </a>
            </div>
        </div>
    )
};

IndexPage.getInitialProps = async () => ({
    namespacesRequired: ["common"]
});

export default withTranslation("common")(IndexPage);
