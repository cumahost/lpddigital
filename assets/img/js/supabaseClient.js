// File: assets/js/supabaseClient.js

import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

// Ganti dengan project Supabase kamu sendiri
const SUPABASE_URL = 'https://zcafmwdsmcduhabrfqgj.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpjYWZtd2RzbWNkdWhhYnJmcWdqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg3MDU1NjMsImV4cCI6MjA2NDI4MTU2M30.YljYD90Zrxogyrj5vb2-DahqzmRB20-z0Ex2S1p6RL4';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
