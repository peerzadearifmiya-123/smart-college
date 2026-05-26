const SUPABASE_URL =
"https://xkxigeeurilphlduawex.supabase.co";

const SUPABASE_ANON_KEY =
"YOUR_REAL_SUPABASE_KEY";

const supabaseClient =
window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_ANON_KEY
);

console.log("Supabase Connected");