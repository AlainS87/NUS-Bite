import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
export const supabase = createClient(
    "https://lsxkhirzevyvuelpgapn.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxzeGtoaXJ6ZXZ5dnVlbHBnYXBuIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODQ5OTQwNjEsImV4cCI6MjAwMDU3MDA2MX0.r0d99ZnuuKHXngR8BUcc_eLBvy-Ueksg8njiuIiYy94")