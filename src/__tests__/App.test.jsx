import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";

import App from "../pages/App";
import initStore from "../redux/store";

jest.mock("../i18n", () => ({
    withTranslation: () => (component) => component
}));

test("works with snapshot", () => {
    const component = renderer.create(
        <Provider store={initStore()}>
            <App i18n={{language: "en_US"}} t={key => key}/>
        </Provider>
    );
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
});
