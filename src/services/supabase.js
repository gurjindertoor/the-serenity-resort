import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://ntsvstzncacggqrmxzru.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im50c3ZzdHpuY2FjZ2dxcm14enJ1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODg2ODMxNjAsImV4cCI6MjAwNDI1OTE2MH0.lOSImXy50oCmiVGugOR1KoJwYbeKXA6cLDiEL8oDVS4";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
