import { createBrowserClient } from "@supabase/ssr";

export const createClient = () =>
    createBrowserClient(
        'https://lkgesolebdfrrtuuivbm.supabase.co',
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxrZ2Vzb2xlYmRmcnJ0dXVpdmJtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDQ4NTI1MDksImV4cCI6MjAyMDQyODUwOX0.EX9_HCD9BD3MqN-WOHRfC6Q0tE152PuAkBWxKSTj4Y4',
    );
