import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://kohbfkuaiugpbnavvxji.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtvaGJma3VhaXVncGJuYXZ2eGppIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc0ODMxNjEyMywiZXhwIjoyMDYzODkyMTIzfQ.8WFf1-dIj5avC-lOXG6PhiMju9oD_fuBcMVDXfZe6qY";
export const supabase = createClient(supabaseUrl, supabaseKey);
