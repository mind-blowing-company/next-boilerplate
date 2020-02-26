import React from "react";
import Head from "next/head";
import "./styles.css";

const IndexPage = () => {
    return (
        <div className="app">
            <Head>
                <title>Next JS App</title>
            </Head>
            <div className="app-container">
                <img src="/logo.svg" className="app-logo" alt="logo" />
                <p>
                    Edit <code>pages/index.js</code> and save to reload.
                </p>
                <a
                    className="app-link"
                    href="https://nextjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn Next JS
                </a>
            </div>
        </div>
    )
};

export default IndexPage;
