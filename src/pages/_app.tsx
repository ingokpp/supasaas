import { ChakraProvider } from "@chakra-ui/react";
import { supabaseClient } from "@supabase/supabase-auth-helpers/nextjs";
import { UserProvider } from "@supabase/supabase-auth-helpers/react";
import { NextPage } from "next";
import type { AppProps } from "next/app";
import { UserContextProvider } from "../context/User/userContextProvider";
import theme from "../theme";

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: React.ReactElement) => React.ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const MyApp = ({ Component, pageProps }: AppPropsWithLayout) => {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <ChakraProvider theme={theme}>
      <UserProvider supabaseClient={supabaseClient}>
        <UserContextProvider supabaseClient={supabaseClient}>
          {getLayout(<Component {...pageProps} />)}
        </UserContextProvider>
      </UserProvider>
    </ChakraProvider>
  );
};

export default MyApp;
