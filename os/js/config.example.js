/* ═══════════════════════════════════════════════════════════════
   Capibara OS — Configuration
   ═══════════════════════════════════════════════════════════════
   COPY THIS FILE AS "config.js" IN THE SAME FOLDER (public/os/js/)
   AND FILL IN YOUR ACTUAL VALUES.
   config.js is in .gitignore — it will NEVER be uploaded to GitHub.
   ═══════════════════════════════════════════════════════════════ */
window.CAPY_CONFIG = {
  // ── Supabase (cloud storage for OS user data) ──
  SUPA_URL: "https://your-project-id.supabase.co",
  SUPA_KEY: "your_supabase_anon_key_here",

  // ── Arcade owner credentials ──
  OWNER_USERNAME: "admin",
  OWNER_PASSWORD: "your_secure_password",
  OWNER_SEC_ANSWERS: ["answer1", "answer2"],
  VERIFIED_USERS: ["admin"],
  VERIFIED_ACCOUNTS: {
    // "username": { password: "pass", requireSecQ: true, uid: "owner_001", role: "owner" }
  },

  // ── Wallpapers (opcional — usa los por defecto si no pones nada) ──
  // WALLPAPERS: [
  //   { id: 'mi_wp', name: 'Mi Wallpaper', type: 'image', price: 0, url: 'https://ejemplo.com/wp.jpg' },
  // ]
};