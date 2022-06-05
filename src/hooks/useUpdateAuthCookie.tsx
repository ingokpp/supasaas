import { useEffect } from "react";
import { supabase, updateSupabaseCookie } from "../utils/supabaseClient";

const useUpdateAuthCookie = () => {
  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        updateSupabaseCookie(event, session);
      }
    );

    return () => {
      authListener?.unsubscribe();
    };
  }, []);

  return updateSupabaseCookie;
};

export default useUpdateAuthCookie;
