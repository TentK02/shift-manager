import { createClient } from '@supabase/supabase-js';

// ★ここをあなたの値に置き換える（Supabase → Project Settings → API）
const SUPABASE_URL = 'https://epukjhmpkfxbfckgojew.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVwdWtqaG1wa2Z4YmZja2dvamV3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTcwODIyMjIsImV4cCI6MjA3MjY1ODIyMn0.MxN0kWpMZPntR-u8umunVaZFsV5qYNlsN47q9JitFQg';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
