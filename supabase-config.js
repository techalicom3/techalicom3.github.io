/*
 * Tech Ali - Supabase browser configuration
 *
 * IMPORTANT:
 * - Use your Supabase Project URL here.
 * - Use the project's publishable/anon key here.
 * - NEVER put the service_role/secret key in this file or in GitHub Pages.
 */
const SUPABASE_URL = 'https://ktxxzpqnnkfznjpbrrpa.supabase.co';
const SUPABASE_PUBLISHABLE_KEY = 'sb_publishable_X-8DKNeHvNOLurc8F_TFmQ_VsF3uYdi';

let techAliSupabase = null;

function initSupabase() {
  if (SUPABASE_URL.startsWith('YOUR_') || SUPABASE_PUBLISHABLE_KEY.startsWith('YOUR_')) {
    return null;
  }

  if (!window.supabase || typeof window.supabase.createClient !== 'function') {
    console.error('Supabase client library is not loaded.');
    return null;
  }

  techAliSupabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);
  return techAliSupabase;
}

initSupabase();
