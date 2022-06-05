import { User } from "@supabase/supabase-js";
import { createContext } from "react";
import { definitions } from "../../types/supabase";

interface UserContextProps {
  accessToken: string | null;
  user: User | null;
  userDetails: definitions["users"] | null;
  isLoading: boolean;
}

export const UserContext = createContext<UserContextProps | undefined>(
  undefined
);
