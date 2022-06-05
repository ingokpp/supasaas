import { supabaseClient } from "@supabase/supabase-auth-helpers/nextjs";
import { AuthChangeEvent, Session } from "@supabase/supabase-js";
import { definitions } from "../types/supabase";

export const supabase = supabaseClient;

export const updateSupabaseCookie = async (
  event: AuthChangeEvent,
  session: Session | null
) => {
  await fetch("/api/auth", {
    method: "POST",
    headers: new Headers({ "Content-Type": "application/json" }),
    credentials: "same-origin",
    body: JSON.stringify({ event, session }),
  });
};

export const getRetrosByUserId = async (userId: string) => {
  return await supabase
    .from<definitions["retros"]>("retros")
    .select("*")
    .eq("created_by", userId);
};
