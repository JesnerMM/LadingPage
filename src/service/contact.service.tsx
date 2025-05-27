import { supabase } from "../client/clientSupaBase";
import { User } from "../interface/User";

export const insertUser = async (user: User): Promise<boolean> => {
  const { error } = await supabase.from("usuarios").insert([user]);
  return !error;
};
