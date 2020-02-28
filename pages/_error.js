import React from "react";
import Error from "next/error";

const ErrorPage = ({statusCode}) => {
    return (
        <Error statusCode={statusCode}/>
    );
};

ErrorPage.getInitialProps = async () => ({
    namespacesRequired: ["common"]
});

export default ErrorPage;
