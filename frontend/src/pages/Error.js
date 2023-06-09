import React from "react";
import PageContent from "./../components/PageContent";
import { useRouteError } from "react-router-dom";

function ErrorPages() {
  const error = useRouteError();

  let title = "An Error Ocured";
  let message = "Something went wrong!";
  if (error.status === 500) {
    message = error.data.message;
  }

  if (error.status === 404) {
    title = "Page not found";
    message = "Look like you search we dont have";
  }
  return <PageContent title={title}>{message}</PageContent>;
}

export default ErrorPages;
