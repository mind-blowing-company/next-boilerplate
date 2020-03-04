import React from "react";
import Error from "next/error";

// This is default Next JS' error page. It's been added
// in order to declare `namespacesRequired` for next-i18next.
// However, it can be modified.
// Learn how to do it here: https://nextjs.org/docs/advanced-features/custom-error-page
const ErrorPage = ({statusCode}) => {
    return (
        <Error statusCode={statusCode}/>
    );
};

ErrorPage.getInitialProps = async () => ({
    namespacesRequired: ["common"]
});

export default ErrorPage;
