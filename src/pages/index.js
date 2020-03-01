import React, {useEffect} from "react";
import Head from "next/head";
import Link from "next/link";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";

import {startClock} from "../redux/clock/actions";
import "./styles.css";
import {withTranslation} from "../i18n";

const IndexPage = (props) => {
    const {t} = props;

    useEffect(() => {
        const timer = props.startClock();

        return () => {
            clearInterval(timer);
        };
    }, [props]);

    const formatTime = t => {
        return `${padNumber(t.getHours())}:${padNumber(t.getMinutes())}:${padNumber(t.getSeconds())}`;
    };

    const padNumber = num => {
        return String(num).padStart(2, 0);
    };

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
                <img alt="logo" className="app-logo" src={"/logo.svg"} />
                <p>
                    {t("edit")} <code>pages/index.js</code> {t("save-reload")}.
                </p>
                <p>{formatTime(new Date(props.clock.lastUpdate))}</p>
                <a
                    className="app-link"
                    href="https://nextjs.org"
                    rel="noopener noreferrer"
                    target="_blank"
                >
                    {t("learn")}
                </a>
            </div>
        </div>
    );
};

IndexPage.getInitialProps = async () => ({
    // The `namespacesRequired` prop tells next-i18next
    // which namespaces to load for this particular page.
    // Read more: https://github.com/isaachinman/next-i18next#4-declaring-namespace-dependencies
    namespacesRequired: ["common"]
});

const mapStateToProps = state => ({
    clock: state.clock
});

const mapDispatchToProps = dispatch => {
    return {
        startClock: bindActionCreators(startClock, dispatch)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(withTranslation("common")(IndexPage));
