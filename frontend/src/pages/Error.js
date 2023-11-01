import { useRouteError } from "react-router-dom";
import PageContent from "../components/PageContent";
import MainNavigation from "../components/MainNavigation";

export const ErrorPage = () => {
  const error = useRouteError();
  let title = "An error occured";
  let message = "SMth is wrong";

  if (error.status === 500) {
    message = JSON.parse(error.data).message;
  }

  if (error.status === 404) {
    title = "Not found";
    message = "Could not find resourse of page";
  }
  return (
    <>
      <MainNavigation />
      <PageContent title={title}>{message}</PageContent>;
    </>
  );
};
