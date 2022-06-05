import { Button } from "@chakra-ui/react";
import React from "react";

import AppLayout from "../layouts/AppLayout";
import { supabase } from "../utils/supabaseClient";
import { NextPageWithLayout } from "./_app";

const HomePage: NextPageWithLayout = () => {
  return (
    <section>
      hello world
      <Button
        onClick={() => {
          supabase.auth.signOut();
        }}
      >
        Logout
      </Button>
    </section>
  );
};

HomePage.getLayout = (page: React.ReactElement) => <AppLayout page={page} />;

export default HomePage;
