import React from "react";
import App from "next/app";
import {Provider} from "react-redux";
import withRedux from "next-redux-wrapper";

import { appWithTranslation } from "../i18n";
import initStore from "../redux/store";

// This component is similar to create-react-app's <App /> component.
// Learn more: https://nextjs.org/docs/advanced-features/custom-app
class MyApp extends App {
    render() {
        const { Component, pageProps, store } = this.props;

        return (
            <Provider store={store}>
                <Component {...pageProps} />
            </Provider>
        );
    }
}

export default withRedux(initStore)(appWithTranslation(MyApp));
