import { Heading } from "@chakra-ui/react";
import { Fragment } from "react";
import LogInForm from "../components/forms/auth/LogInForm";
import AuthLayout from "../layouts/AuthLayout";
import enforceNotAuthenticated from "../utils/enforceNotAuthenticated";

const LogInPage = () => {
  return (
    <Fragment>
      <Heading as="h1" size="sm" color="gray.700">
        Log in to SupaRetro
      </Heading>
      <LogInForm />
    </Fragment>
  );
};

LogInPage.getLayout = (page: React.ReactElement) => <AuthLayout page={page} />;
export const getServerSideProps = enforceNotAuthenticated();

export default LogInPage;
