import { GetServerSideProps } from "next";
import { supabase } from "./supabaseClient";

const enforceNotAuthenticated: (
  redirectURL?: string,
  inner?: GetServerSideProps
) => GetServerSideProps = (redirectUrl, inner) => {
  return async (context) => {
    const { req } = context;
    const { user } = await supabase.auth.api.getUserByCookie(req);

    if (user) {
      return {
        props: {},
        redirect: { destination: redirectUrl ? redirectUrl : "/" },
      };
    }

    if (inner) {
      return inner(context);
    }

    return { props: {} };
  };
};

export default enforceNotAuthenticated;
