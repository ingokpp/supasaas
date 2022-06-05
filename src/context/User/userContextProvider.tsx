import { SupabaseClient } from "@supabase/supabase-auth-helpers/nextjs";
import { useUser as useSupaUser } from "@supabase/supabase-auth-helpers/react";
import { useEffect, useState } from "react";
import { definitions } from "../../types/supabase";
import { UserContext } from "./userContext";

export interface UserContextProviderProps {
  supabaseClient: SupabaseClient;
  [propName: string]: any;
}

export const UserContextProvider = (props: UserContextProviderProps) => {
  const { supabaseClient: supabase } = props;

  const { user, accessToken, isLoading: isLoadingUser } = useSupaUser();
  const [isLoadingData, setIsloadingData] = useState(false);
  const [userDetails, setUserDetails] = useState<definitions["users"] | null>(
    null
  );

  const getUserDetails = () =>
    supabase.from<definitions["users"]>("users").select("*").single();

  useEffect(() => {
    if (user && !isLoadingData && !userDetails) {
      setIsloadingData(true);
      Promise.allSettled([getUserDetails()]).then((results) => {
        const userDetailsPromise = results[0];

        if (userDetailsPromise.status === "fulfilled")
          setUserDetails(userDetailsPromise.value.data);

        setIsloadingData(false);
      });
    } else if (!user && !isLoadingUser && !isLoadingData) {
      setUserDetails(null);
    }
  }, [user, isLoadingUser]);

  const value = {
    accessToken,
    user,
    userDetails,
    isLoading: isLoadingUser || isLoadingData,
  };

  return <UserContext.Provider value={value} {...props} />;
};
