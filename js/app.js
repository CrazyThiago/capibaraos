/* ========================================
   Capibara OS — Main Application
   ======================================== */

/* --- block (orig 6031-10256) --- */

    const WALLPAPERS = [
      // Gratis
      { id: 'gta_rain',  name: 'GTA V Rain',     type: 'gif',   price: 0,  url: 'assets/wallpapers/gta_rain.gif' },
      { id: 'manga',     name: 'Manga Wallpaper',type: 'gif',   price: 0,  url: 'assets/wallpapers/manga.gif' },
      // De pago (antes secretos)
      { id: 'blackhole', name: 'Black Hole',           type: 'video', price: 520, url: 'https://raw.githubusercontent.com/alexis2003martinezz-blip/komaos-wallpapers-code/main/black-hole.3840x2160.mp4' },
      { id: 'mc_fox',    name: 'Minecraft Fox',        type: 'gif',   price: 495, url: 'https://raw.githubusercontent.com/alexis2003martinezz-blip/komaos-wallpapers-code/main/Wallpaper%20GIF.gif' },
      { id: 'death_roots', name: 'Death Roots',        type: 'video', price: 540, url: 'https://raw.githubusercontent.com/alexis2003martinezz-blip/komaos-wallpapers-code/main/hunt-showdown-death-roots3840x21%20(1).mp4' },
      { id: 'hollow',    name: 'Hollow Knight',        type: 'gif',   price: 515, url: 'https://raw.githubusercontent.com/alexis2003martinezz-blip/komaos-wallpapers-code/main/Wallpaper%20GIF%20(3).gif' },
      { id: 'arknights', name: 'Arknights',            type: 'video', price: 520, url: 'https://raw.githubusercontent.com/alexis2003martinezz-blip/komaos-wallpapers-code/main/platinum-arknights.1920x1080.mp4' },
      { id: 'mikami',    name: 'Mikami — Death Note',  type: 'video', price: 560, url: 'https://raw.githubusercontent.com/alexis2003martinezz-blip/komaos-wallpapers-code/main/mikami-death-note3840x2160.mp4' },
      { id: 'supra',     name: 'Supra Edit',           type: 'video', price: 530, url: 'https://raw.githubusercontent.com/alexis2003martinezz-blip/komaos-wallpapers-code/main/ssstik.io_%40drvnx1_1774939471973.mp4' },
      { id: 'rx7',       name: 'Mazda RX-7',           type: 'video', price: 525, url: 'https://raw.githubusercontent.com/alexis2003martinezz-blip/komaos-wallpapers-code/main/ssstik.io_%40moren_228_1774939403411.mp4' },
      { id: 'supercars', name: 'Superautos',           type: 'video', price: 540, url: 'https://raw.githubusercontent.com/alexis2003martinezz-blip/komaos-wallpapers-code/main/ssstik.io_%40micrpt_1774939563415.mp4' },
      { id: 'sunset_pink', name: 'Cielo Rosa', type: 'image', price: 498, url: 'https://raw.githubusercontent.com/alexis2003martinezz-blip/Miku-station-images-/main/IMG_1092.webp' },
      { id: 'sunset_orange', name: 'Atardecer Fuego',    type: 'image', price: 505, url: 'https://raw.githubusercontent.com/alexis2003martinezz-blip/Miku-station-images-/main/IMG_1083.jpg' },
      { id: 'vid_axiqz', name: 'Anime Nocturno',        type: 'video', price: 512, url: 'https://raw.githubusercontent.com/alexis2003martinezz-blip/Miku-station-images-/main/ssstik.io_%40axiqz.1_1775349584939.mp4' },
      { id: 'vid_maisamu', name: 'Anime Amanecer',      type: 'video', price: 518, url: 'https://raw.githubusercontent.com/alexis2003martinezz-blip/Miku-station-images-/main/ssstik.io_%40.maisamu_1775349460277.mp4' },
      { id: 'teto',      name: 'Teto Dancing',         type: 'video', price: 555, url: 'https://raw.githubusercontent.com/alexis2003martinezz-blip/Miku-station-music-storage1/main/teto-dancing-wallpaper.mp4' },
      { id: 'miku',      name: 'Hatsune Miku Dancing', type: 'video', price: 580, url: 'https://raw.githubusercontent.com/alexis2003martinezz-blip/Miku-station-music-storage1/main/miku-dancing-wallpaper.mp4' },
      { id: 'yuta_calm', name: 'Yuta — Calm Danger',   type: 'video', price: 560, url: 'https://raw.githubusercontent.com/alexis2003martinezz-blip/Miku-station-music-storage1/main/yuta-okkotsu-calm-danger.3840x2160.mp4' },
      { id: 'yuta_curse',name: 'Yuta — Curse Spirit',  type: 'video', price: 565, url: 'https://raw.githubusercontent.com/alexis2003martinezz-blip/Miku-station-music-storage1/main/yuta-okkotsu-curse-spirit.1920x1080.mp4' },
      { id: 'miku_star', name: 'Miku — Star Eyes',     type: 'video', price: 570, url: 'https://raw.githubusercontent.com/alexis2003martinezz-blip/Miku-station-music-storage1/main/hatsune-miku-star-eyes.1920x1080.mp4' },
      { id: 'honey_pie', name: 'Honey Pie',            type: 'video', price: 540, url: 'https://raw.githubusercontent.com/alexis2003martinezz-blip/Miku-station-music-storage1/main/honey-pie-wallpaper.mov' },
      { id: 'gojo',      name: 'Me voy al sol — Gojo', type: 'video', price: 575, url: 'https://raw.githubusercontent.com/alexis2003martinezz-blip/Miku-station-music-storage1/main/gojo-wallpaper.mov' },
      { id: 'mama_coco', name: 'Mama Coco — KN',       type: 'video', price: 550, url: 'https://raw.githubusercontent.com/alexis2003martinezz-blip/Miku-station-music-storage1/main/mama-coco-kn-nasir.mov' },
      { id: 'mku_game',  name: 'MKU Game Sign',        type: 'video', price: 545, url: 'https://raw.githubusercontent.com/alexis2003martinezz-blip/Miku-station-music-storage1/main/mku-game-wallpaper.mov' },
      { id: 'kira',      name: 'Kira — Death Note',    type: 'video', price: 590, url: 'https://raw.githubusercontent.com/alexis2003martinezz-blip/Miku-station-music-storage1/main/kira-deathnote-edit-wallpaper.mov' },
     { id: 'minecraft',      name: 'Shaders Naturaleza',    type: 'video', price: 800, url: 'https://raw.githubusercontent.com/emilia-goat/Vvb/main/ssstik.io_%40lovephotowallpaper_1779949577775.mp4' },
       { id: 'dark_night_soldier',      name: 'Soldado Nocturno',    type: 'video', price: 840, url: 'https://raw.githubusercontent.com/emilia-goat/Vvb/main/ssstik.io_%40thzinn_wllpprs_1779949605043.mp4' },
      { id: 'tqq_wallpaper', name: 'Tqq Dinamico', type: 'video', price: 870, url: 'https://raw.githubusercontent.com/emilia-goat/Dududdu/main/ssstik.io_1778629842588%20(1).mp4' },
      { id: 'miku_nakano',   name: 'Miku Nakano', type: 'video', price: 950, url: 'https://raw.githubusercontent.com/emilia-goat/Dududdu/main/ssstik.io_%40zodiac_aep_1779966493455.mp4' },
    ];

    const THEMES_DATA = [
      { id: 'amber', name: 'Ambar Nativo', hex: '#ff9f43', price: 0 },
      { id: 'cyber', name: 'Circuito Neon', hex: '#00f5ff', price: 17 },
      { id: 'sakura', name: 'Sakura Digital', hex: '#e8658a', price: 33 },
      { id: 'matrix', name: 'Consola Matrix', hex: '#4ade80', price: 47 },
      { id: 'royal', name: 'Realeza Violeta', hex: '#a78bfa', price: 38 },
      { id: 'sun', name: 'Dorado Atardecer', hex: '#fbbf24', price: 27 },
      { id: 'rose', name: 'Rosa Bengal', hex: '#ff6b6b', price: 23 },
      { id: 'ocean', name: 'Azul Abismo', hex: '#5dade2', price: 22 },
      { id: 'mint', name: 'Menta Polar', hex: '#00d9a3', price: 18 },
      { id: 'lava', name: 'Volcan Rojo', hex: '#ff4757', price: 29 },
      { id: 'sky', name: 'Cielo Bruma', hex: '#74b9ff', price: 19 },
      { id: 'mono', name: 'Blanco y Negro', hex: '#dfe4ea', price: 42 },
      { id: 'fuchsia', name: 'Fucsia Explosion', hex: '#e056fd', price: 37 },
      { id: 'tangerine', name: 'Mandarina Pop', hex: '#ff6348', price: 26 },
      { id: 'lime', name: 'Lima Voltio', hex: '#c8ff00', price: 34 },
    ];


    let gems = 0; // cargado por usuario al login
    let unlockedWallpapers = JSON.parse(localStorage.getItem('capios_unlocked_wp')) || WALLPAPERS.filter(w => w.price === 0).map(w => w.id);
    let unlockedThemes = JSON.parse(localStorage.getItem('capios_unlocked_themes')) || ['amber'];
    let currentStoreTab = 'wp';
    let cpState = { wifi: true, mute: false, dnd: false, sound: true };
    let authMode = 'login';
    let currentUser = null;
    let gamesInitialized = false;
    let notes = []; // cargado por usuario al login
    let calcExpr = '';
    let petStats = JSON.parse(localStorage.getItem('capios_pet') || 'null') || { hunger: 100, happy: 100, energy: 100 };
    let currentLang = localStorage.getItem('capios_lang') || 'es';


    const LANGS = {
      es: {
        // arranque
        boot_subtitle: 'Cargando paquetes del sistema...',
        // autenticación
        auth_welcome: 'Bienvenido',
        auth_login_sub: 'Inicia sesión para entrar a Capibara OS',
        auth_register_sub: 'Crea tu cuenta en Capibara OS',
        auth_user_placeholder: 'Nombre de usuario',
        auth_pass_placeholder: 'Contraseña',
        auth_submit_login: 'Entrar',
        auth_submit_register: 'Crear cuenta',
        auth_switch_no_account: '¿No tienes cuenta?',
        auth_switch_have_account: '¿Ya tienes cuenta?',
        auth_switch_create: 'Crear una',
        auth_switch_login: 'Inicia sesión',
        auth_bday_label: 'Fecha de cumpleaños (opcional)',
        auth_bday_day: 'Día',
        auth_bday_month: 'Mes',
        // pantalla de bloqueo
        lock_hint: 'Toca para desbloquear',
        // barra de estado
        // panel de control
        cp_title: 'Panel de control',
        cp_wifi: 'Wi-Fi',
        cp_sound: 'Sonido',
        cp_dnd: 'No molestar',
        cp_lock: 'Bloquear',
        cp_bonus: 'Bonus',
        cp_logout: 'Salir',
        cp_brightness: 'Brillo',
        cp_blur: 'Desenfoque fondo',
        cp_accent: 'Color de acento',
        // barra de tareas
        tb_search: 'Buscar…',
        tb_gallery: 'Galería',
        tb_shop: 'Shop',
        tb_games: 'Juegos',
        tb_leaderboard: 'Ranking',
        tb_weather: 'Clima',
        tb_pet: 'Capi Pet',
        tb_notes: 'Notas',
        tb_settings: 'Ajustes',
        // buscador
        sp_placeholder: 'Busca apps, wallpapers, notas, comandos…',
        sp_esc: 'ESC para cerrar',
        sp_apps: 'Apps',
        sp_wallpapers: 'Wallpapers',
        sp_notes_label: 'Notas',
        sp_actions: 'Acciones rápidas',
        sp_calc: 'Calculadora',
        sp_calc_sub: 'Resultado instantáneo',
        sp_empty: '🔍 Sin resultados para',
        sp_apply_wp: 'Aplicar fondo',
        sp_locked_wp: 'Bloqueado',
        sp_note_saved: 'Nota guardada',
        // notificaciones
        notif_title: 'Notificaciones',
        notif_clear: 'Limpiar',
        notif_tab_all: 'Todo',
        notif_tab_system: 'Sistema',
        notif_tab_gems: 'Gemas',
        notif_tab_app: 'Apps',
        notif_empty: 'Sin notificaciones nuevas 🦫',
        // configuración sidebar
        set_account: 'Cuenta',
        set_appear: 'Apariencia',
        set_notif: 'Notificaciones',
        set_system: 'Sistema',
        set_about: 'Acerca de',
        // configuración - Account
        set_rank_loading: 'Cargando…',
        set_gems_lbl: 'Gemas',
        set_wp_lbl: 'Wallpapers',
        set_themes_lbl: 'Temas',
        set_session_lbl: 'Sesión actual',
        set_usage_title: 'Estadísticas de uso',
        set_avatar_title: 'Avatar personalizable',
        set_avatar_desc: 'Elige tu capibara y accesorio',
        set_avatar_base: 'Base',
        set_avatar_acc: 'Accesorio',
        set_bday_title: 'Cumpleaños',
        set_bday_none: 'Sin cumpleaños guardado',
        set_bday_desc: 'El OS te celebrará al iniciar',
        set_bday_save: 'Guardar cumpleaños',
        set_actions_title: 'Acciones de cuenta',
        set_logout: 'Cerrar sesión',
        set_logout_desc: 'Volver a la pantalla de acceso',
        set_logout_btn: 'Salir',
        // configuración - Appearance
        set_quick_controls: 'Controles rápidos',
        set_dnd: 'No molestar',
        set_dnd_desc: 'Silenciar notificaciones',
        set_wifi: 'Wi-Fi',
        set_wifi_desc: 'Simular conexión activa',
        set_sound: 'Sonido en wallpapers',
        set_sound_desc: 'Reproducir audio de fondos animados',
        set_accent_title: 'Color de acento',
        set_lang_title: 'Idioma',
        set_lang_desc: 'Cambia el idioma de toda la interfaz',
        set_lang_es: '🇪🇸 Español',
        set_lang_en: '🇺🇸 English',
        // configuración - Notif
        set_notif_prefs: 'Preferencias de notificación',
        set_notif_show: 'Mostrar notificaciones',
        set_notif_show_desc: 'Toast en esquina superior',
        set_notif_bonus: 'Bonus diario',
        set_notif_bonus_desc: 'Recordatorio al iniciar sesión',
        set_notif_capi: 'Mensajes de Capi',
        set_notif_capi_desc: 'Alertas del asistente IA',
        set_notif_anim: 'Animaciones',
        set_notif_anim_desc: 'Efectos visuales del sistema',
        set_notif_test_title: 'Probar notificación',
        set_notif_test: 'Enviar toast de prueba',
        set_notif_test_btn: 'Probar',
        set_notif_test_msg_title: '¡Capibara OS!',
        set_notif_test_msg: 'Notificaciones funcionando 🐾',
        // configuración - System
        set_sysinfo: 'Información del sistema',
        set_version_lbl: 'Versión',
        set_kernel_lbl: 'Núcleo',
        set_ai_lbl: 'IA integrada',
        set_res_lbl: 'Resolución',
        set_platform_lbl: 'Plataforma',
        set_danger: '⚠️ Zona peligrosa',
        set_reset: 'Reiniciar todos los datos',
        set_reset_desc: 'Borra gemas, wallpapers y preferencias',
        set_reset_btn: 'Borrar todo',
        // configuración - About
        set_about_desc: 'Un escritorio web con lo que nos gusta: wallpapers animados, juegos, un chat, una mascota y otras cosas que fuimos agregando.',
        set_credits: 'Créditos',
        set_credits_owner: 'Dueño',
        set_credits_dev: 'Dev',
        set_credits_dev2: 'Dev',
        set_credits_engine: 'Motor',
        set_credits_tester: 'Tester',
        set_credits_mascot: 'Mascota',
        // Account pane
        acc_upload_title: 'Sube tu foto',
        acc_upload_desc: 'Acepta JPG, PNG, GIF o WebP. Se recortará en círculo.',
        acc_upload_btn: 'Subir foto',
        acc_remove_btn: 'Quitar',
        acc_emoji_label: 'O elige un emoji como avatar',
        acc_bday_title: 'Cumpleaños',
        acc_bday_desc: 'El OS te celebrará al iniciar',
        acc_bday_save: 'Guardar cumpleaños',
        acc_actions_title: 'Acciones de cuenta',
        acc_logout_lbl: 'Cerrar sesión',
        acc_logout_desc: 'Volver a la pantalla de acceso',
        acc_logout_btn: 'Salir',
        acc_delete_lbl: 'Borrar cuenta',
        acc_delete_desc: 'Elimina tu cuenta y todos tus datos permanentemente',
        acc_delete_btn: 'Borrar',
        // Appear pane
        appear_quick_title: 'Controles rápidos',
        appear_dnd_lbl: 'No molestar',
        appear_dnd_desc: 'Silenciar notificaciones',
        appear_wifi_lbl: 'Wi-Fi',
        appear_wifi_desc: 'Simular conexión activa',
        appear_sound_lbl: 'Sonido en wallpapers',
        appear_sound_desc: 'Reproducir audio de fondos animados',
        appear_accent_title: 'Color de acento',
        appear_color_lbl: 'Color actual:',
        appear_lang_title: 'Idioma',
        appear_lang_lbl: 'Idioma',
        appear_lang_desc: 'Cambia el idioma de toda la interfaz',
        // Notif pane
        notif_pref_title: 'Preferencias de notificación',
        notif_show_lbl: 'Mostrar notificaciones',
        notif_show_desc: 'Toast en esquina superior',
        notif_bonus_lbl: 'Bonus diario',
        notif_bonus_desc: 'Recordatorio al iniciar sesión',
        notif_capi_lbl: 'Mensajes de Capi',
        notif_capi_desc: 'Alertas del asistente IA',
        notif_anim_lbl: 'Animaciones',
        notif_anim_desc: 'Efectos visuales del sistema',
        notif_test_title: 'Probar notificación',
        notif_test_lbl: 'Enviar toast de prueba',
        notif_test_btn: 'Probar',
        // pantalla de bloqueoscreen pane
        lock_title: 'Personalizar Lock Screen',
        lock_quote_lbl: 'Frase motivacional',
        lock_quote_desc: 'Se muestra en la pantalla de bloqueo',
        lock_quote_ph: 'Escribe tu frase…',
        lock_emoji_title: 'Emoji del Lock Screen',
        lock_accent_title: 'Color de acento del Lock Screen',
        lock_weather_lbl: 'Mostrar clima',
        lock_weather_desc: 'Temperatura en la pantalla de bloqueo',
        lock_notifs_lbl: 'Mostrar notificaciones',
        lock_notifs_desc: 'Pill de notificaciones pendientes',
        // Accessibility pane
        acc_title: 'Accesibilidad',
        acc_reduce_lbl: 'Reducir movimiento',
        acc_reduce_desc: 'Desactiva animaciones de apertura/cierre',
        acc_large_lbl: 'Texto grande',
        acc_large_desc: 'Aumenta el tamaño de fuente base',
        acc_contrast_lbl: 'Alto contraste',
        acc_contrast_desc: 'Aumenta el contraste de la interfaz',
        acc_colorblind_lbl: 'Modo daltónico',
        acc_colorblind_desc: 'Cambia colores para daltonismo',
        acc_underline_lbl: 'Subrayar links',
        acc_underline_desc: 'Facilita identificar elementos clicables',
        acc_cursor_title: 'Tamaño de cursor',
        acc_cursor_normal: 'Normal',
        acc_cursor_large: 'Grande',
        acc_cursor_xl: 'XL',
        acc_font_title: 'Tamaño de fuente',
        // System pane
        sys_info_title: 'Información del sistema',
        sys_version_lbl: 'Versión',
        sys_kernel_lbl: 'Núcleo',
        // autenticación errors
        auth_err_fill: 'Completa todos los campos.',
        auth_err_exists: 'Ese usuario ya existe.',
        auth_err_creds: 'Credenciales incorrectas.',
        auth_err_suspended: '🚫 Tu cuenta está suspendida. Contacta al administrador.',
        auth_err_mismatch: '❌ El usuario no coincide. Inténtalo de nuevo.',
        auth_deleting: 'Borrando cuenta...',
        auth_err_pass: '❌ Contraseña incorrecta',
        // amigos
        friends_title: 'Amigos',
        friends_requests: '📩 Solicitudes',
        friends_sent: '⏳ Enviadas',
        friends_list: '👥 Amigos',
        // editor
        codelab_loading: 'Cargando Pyodide…',
        codelab_ready: 'Listo',
        codelab_running: 'Ejecutando…',
        codelab_ok: '✓ OK',
        codelab_error: '✗ Error',
        codelab_clear: 'Limpiar',
        // barra de tareas/status
        status_notif_none: 'Sin notificaciones nuevas',
        // panel de control tiles
        cp_tile_notif: 'Notificaciones',
        cp_tile_cp: 'Panel de control',
        // Apps windows
        app_store: 'Capibara Shop',
        app_gallery: 'Galería',
        app_games: 'Capibara Games',
        app_settings: 'Ajustes',
        app_capi_ai: 'Capi AI',
        app_notes: 'Notas',
        app_calc: 'Calculadora',
        app_pet: 'Capi Pet',
        app_leaderboard: 'Leaderboard',
        app_weather: 'Clima',
        // Extra apps (dock/desktop)
        app_music: 'Música',
        app_draw: 'Dibujar',
        app_calendar: 'Calendario',
        app_todo: 'Tareas',
        app_timer: 'Pomodoro',
        app_browser: 'CapiBrowser',
        app_chat: 'Chat Global',
        app_codelab: 'CodeLab',
        // About
        about_engine_lbl: 'Motor web',
        // System - missing keys
        set_plat_lbl: 'Plataforma',
        set_build_lbl: 'Compilación',
        set_storage_lbl: 'Almacenamiento',
        set_theme_active_lbl: 'Tema activo',
        // Daily tasks
        daily_header: 'Tareas del día',
        // Danger zone
        set_del_acc: 'Borrar cuenta',
        set_del_acc_desc: 'Elimina tu cuenta y todos tus datos permanentemente',
        // Pomodoro
        timer_session: 'Sesión de enfoque',
        timer_break: 'Descanso',
        timer_start: 'Iniciar',
        timer_pause: 'Pausar',
        timer_reset: 'Reiniciar',
        // calendario
        cal_today: 'Hoy',
        // pendientes
        todo_placeholder: 'Nueva tarea...',
        todo_add: 'Añadir',
        todo_empty: 'Sin tareas pendientes 🦫',
        // tienda

        store_wp_tab: 'Wallpapers',
        store_themes_tab: 'Temas',
        store_search: 'Buscar...',
        store_buy: 'Comprar',
        store_apply: 'Aplicar',
        store_owned: 'Tuyo',
        // galería
        gallery_desc: 'Tus wallpapers desbloqueados. Toca uno para aplicarlo.',
        // mascota
        pet_hunger: 'Hambre',
        pet_happy: 'Felicidad',
        pet_energy: 'Energía',
        pet_feed: 'Alimentar',
        pet_play: 'Jugar',
        pet_sleep: 'Dormir',
        // notas
        notes_placeholder: 'Escribe una nota...',
        // clima
        weather_humidity: 'Humedad',
        weather_wind: 'Viento',
        weather_feels: 'Sensación',
        weather_uv: 'Índice UV',
        // cumpleaños
        bday_title: '¡Feliz Cumpleaños!',
        bday_sub: 'El capibara te desea un día increíble 🦫🎉',
        bday_btn: '¡Gracias Capi! 🐾',
        // ranking
        lb_strong: 'Top Capibaras',
        lb_desc: 'Personas con más gemas en Capibara OS',
        // notificaciones
        notif_profile_rank_default: 'Capibara Novato · Nv.1',
        // Rank xp
        rank_xp_next_prefix: ' XP para siguiente nivel',
        // Rank loading
        rank_loading: 'Cargando…',
        // capi ai
        // Misc
        min_tooltip: 'Minimizar',
        max_tooltip: 'Maximizar',
        capi_discord_label: 'Capibara OS Discord',
        capi_discord_title: 'ᴄᴀᴘɪʙᴀʀᴀ-ᴏꜱ-ᴅɪꜱᴄᴏʀᴅ',
        capi_discord_sub: 'Únete a la comunidad oficial',
        capi_discord_btn: 'Unirse al Discord',
        partners_label: 'Partners',
        partners_sub: 'Proyectos aliados de Capibara OS',
        extras_label: 'Extras Capibara',
        extras_sub: 'Ajustes adicionales y herramientas',
        close_tooltip: 'Cerrar',
        // Extra keys (hardcoded fixes)
        wid_gems: 'Tus gemas',
        weather_refresh: 'Actualizar',
        bonus_used: 'Bonus agotado',
        bonus_come_back: 'Vuelve en',
        bonus_title: '¡Bonus!',
        bonus_gems: 'gemas',
        bonus_remaining: 'restantes hoy',
        store_no_results: 'Sin resultados',
        store_no_wallpapers: 'Sin wallpapers todavía. Visita la tienda 🛍️',
        store_wp_changed: 'Fondo cambiado',
        store_no_gems: 'Gemas insuficientes',
        store_earn_gems: 'Acumula más gemas.',
        store_purchase_ok: 'Compra exitosa',
        store_unlocked: 'desbloqueado',
        store_purchase: 'Compra',
        store_theme: 'Tema',
        store_activated: 'activado',
        reset_confirm: 'Esto borrará TODOS tus datos (gemas, compras, notas, pet, cuentas). ¿Continuar?',
        notes_empty: 'Sin notas. Empieza a escribir.',
        pet_feed_toast: '¡Ñam ñam! 🍎',
        pet_play_toast: '¡Qué divertido! +1 💎',
        cmd_have: 'Tienes',
        cmd_gems: 'gemas',
        cmd_guest: 'invitado',
        cmd_themes: 'temas',
        cmd_bonus_ok: '🎁 Bonus procesado.',
        cmd_locking: '🔒 Bloqueando…',
        cmd_opening: 'Abriendo',
        cmd_no_app: 'App no encontrada. Apps:',
        cmd_wp_use: 'Usa: /wallpaper <nombre>',
        cmd_wp_nf: '❌ Wallpaper no encontrado.',
        cmd_locked: 'Bloqueado. Cuesta',
        cmd_wp_changed: 'Fondo cambiado:',
        cmd_theme_use: 'Usa: /theme #ff9f43',
        cmd_color: 'Color:',
        cmd_unknown: 'Comando desconocido:',
        cmd_use_help: 'Usa /help',
        cmd_help: '🐾 Comandos Capi:\n/help — esta lista\n/gems — ver gemas\n/bonus — reclamar bonus diario\n/open <app> — abrir app (store, gallery, pet, notes, calc, settings, games, leaderboard, weather, browser)\n/wallpaper <nombre> — cambiar fondo\n/theme <#hex> — color de acento\n/lock — bloquear sistema\n/clear — limpiar chat\n/me — ver tu perfil',
        lb_you: 'Tú',
      },
      en: {
        // arranque
        boot_subtitle: 'Loading core packages...',
        // autenticación
        auth_welcome: 'Welcome',
        auth_login_sub: 'Sign in to enter Capibara OS',
        auth_register_sub: 'Create your Capibara OS account',
        auth_user_placeholder: 'Username',
        auth_pass_placeholder: 'Password',
        auth_submit_login: 'Sign In',
        auth_submit_register: 'Create Account',
        auth_switch_no_account: "Don't have an account?",
        auth_switch_have_account: 'Already have an account?',
        auth_switch_create: 'Create one',
        auth_switch_login: 'Sign in',
        auth_bday_label: '🎂 Birthday (optional)',
        auth_bday_day: 'Day',
        auth_bday_month: 'Month',
        // pantalla de bloqueo
        lock_hint: 'Tap to unlock',
        // panel de control
        cp_title: 'Control Panel',
        cp_wifi: 'Wi-Fi',
        cp_sound: 'Sound',
        cp_dnd: 'Do Not Disturb',
        cp_lock: 'Lock',
        cp_bonus: 'Bonus',
        cp_logout: 'Log Out',
        cp_brightness: 'Brightness',
        cp_blur: 'Background Blur',
        cp_accent: 'Accent Color',
        // barra de tareas
        tb_search: 'Search…',
        tb_gallery: 'Gallery',
        tb_shop: 'Shop',
        tb_games: 'Games',
        tb_leaderboard: 'Ranking',
        tb_weather: 'Weather',
        tb_pet: 'Capi Pet',
        tb_notes: 'Notes',
        tb_settings: 'Settings',
        // buscador
        sp_placeholder: 'Search apps, wallpapers, notes, commands…',
        sp_esc: 'ESC to close',
        sp_apps: 'Apps',
        sp_wallpapers: 'Wallpapers',
        sp_notes_label: 'Notes',
        sp_actions: 'Quick Actions',
        sp_calc: 'Calculator',
        sp_calc_sub: 'Instant result',
        sp_empty: '🔍 No results for',
        sp_apply_wp: 'Apply wallpaper',
        sp_locked_wp: 'Locked',
        sp_note_saved: 'Saved note',
        // notificaciones
        notif_title: 'Notifications',
        notif_clear: 'Clear',
        notif_tab_all: 'All',
        notif_tab_system: 'System',
        notif_tab_gems: 'Gems',
        notif_tab_app: 'Apps',
        notif_empty: 'No new notifications 🦫',
        // configuración sidebar
        set_account: 'Account',
        set_appear: 'Appearance',
        set_notif: 'Notifications',
        set_system: 'System',
        set_about: 'About',
        // configuración - Account
        set_rank_loading: 'Loading…',
        set_gems_lbl: 'Gems',
        set_wp_lbl: 'Wallpapers',
        set_themes_lbl: 'Themes',
        set_session_lbl: 'Current session',
        set_usage_title: 'Usage Statistics',
        set_avatar_title: 'Custom Avatar',
        set_avatar_desc: 'Choose your capybara and accessory',
        set_avatar_base: 'Base',
        set_avatar_acc: 'Accessory',
        set_bday_title: 'Birthday',
        set_bday_none: 'No birthday saved',
        set_bday_desc: 'The OS will celebrate you on startup',
        set_bday_save: 'Save birthday',
        set_actions_title: 'Account Actions',
        set_logout: 'Log Out',
        set_logout_desc: 'Return to the login screen',
        set_logout_btn: 'Log Out',
        // configuración - Appearance
        set_quick_controls: 'Quick Controls',
        set_dnd: 'Do Not Disturb',
        set_dnd_desc: 'Silence notifications',
        set_wifi: 'Wi-Fi',
        set_wifi_desc: 'Simulate active connection',
        set_sound: 'Wallpaper sound',
        set_sound_desc: 'Play audio from animated wallpapers',
        set_accent_title: 'Accent Color',
        set_lang_title: 'Language',
        set_lang_desc: 'Change the language of the entire interface',
        set_lang_es: '🇪🇸 Español',
        set_lang_en: '🇺🇸 English',
        // configuración - Notif
        set_notif_prefs: 'Notification Preferences',
        set_notif_show: 'Show notifications',
        set_notif_show_desc: 'Toast in top corner',
        set_notif_bonus: 'Daily bonus',
        set_notif_bonus_desc: 'Reminder on login',
        set_notif_capi: 'Capi messages',
        set_notif_capi_desc: 'AI assistant alerts',
        set_notif_anim: 'Animations',
        set_notif_anim_desc: 'System visual effects',
        set_notif_test_title: 'Test notification',
        set_notif_test: 'Send test toast',
        set_notif_test_btn: 'Test',
        set_notif_test_msg_title: 'Capibara OS!',
        set_notif_test_msg: 'Notifications working 🐾',
        // configuración - System
        set_sysinfo: 'System Info',
        set_version_lbl: 'Version',
        set_kernel_lbl: 'Kernel',
        set_ai_lbl: 'Built-in AI',
        set_res_lbl: 'Resolution',
        set_platform_lbl: 'Platform',
        set_danger: '⚠️ Danger Zone',
        set_reset: 'Reset all data',
        set_reset_desc: 'Deletes gems, wallpapers and preferences',
        set_reset_btn: 'Delete all',
        // configuración - About
        set_about_desc: 'Web desktop system inspired by the capybara\'s charm. With animated wallpapers, games, built-in AI, virtual pet and much more.',
        set_credits: 'Credits',
        set_credits_owner: 'Dueño',
        set_credits_dev: 'Dev',
        set_credits_dev2: 'Dev',
        set_credits_engine: 'Motor',
        set_credits_tester: 'Tester',
        set_credits_mascot: 'Official Mascot',
        // Account pane
        acc_upload_title: 'Upload your photo',
        acc_upload_desc: 'Accepts JPG, PNG, GIF or WebP. Will be cropped to circle.',
        acc_upload_btn: 'Upload photo',
        acc_remove_btn: 'Remove',
        acc_emoji_label: 'Or choose an emoji as avatar',
        acc_bday_title: 'Birthday',
        acc_bday_desc: 'The OS will celebrate you when you log in',
        acc_bday_save: 'Save birthday',
        acc_actions_title: 'Account actions',
        acc_logout_lbl: 'Log out',
        acc_logout_desc: 'Return to the login screen',
        acc_logout_btn: 'Log out',
        acc_delete_lbl: 'Delete account',
        acc_delete_desc: 'Permanently deletes your account and all data',
        acc_delete_btn: 'Delete',
        // Appear pane
        appear_quick_title: 'Quick controls',
        appear_dnd_lbl: 'Do Not Disturb',
        appear_dnd_desc: 'Silence notifications',
        appear_wifi_lbl: 'Wi-Fi',
        appear_wifi_desc: 'Simulate active connection',
        appear_sound_lbl: 'Wallpaper sound',
        appear_sound_desc: 'Play audio for animated wallpapers',
        appear_accent_title: 'Accent color',
        appear_color_lbl: 'Current color:',
        appear_lang_title: 'Language',
        appear_lang_lbl: 'Language',
        appear_lang_desc: 'Change the interface language',
        // Notif pane
        notif_pref_title: 'Notification preferences',
        notif_show_lbl: 'Show notifications',
        notif_show_desc: 'Toast in upper corner',
        notif_bonus_lbl: 'Daily bonus',
        notif_bonus_desc: 'Reminder on login',
        notif_capi_lbl: 'Capi messages',
        notif_capi_desc: 'AI assistant alerts',
        notif_anim_lbl: 'Animations',
        notif_anim_desc: 'Visual system effects',
        notif_test_title: 'Test notification',
        notif_test_lbl: 'Send test toast',
        notif_test_btn: 'Test',
        // pantalla de bloqueoscreen pane
        lock_title: 'Customize Lock Screen',
        lock_quote_lbl: 'Motivational quote',
        lock_quote_desc: 'Displayed on the lock screen',
        lock_quote_ph: 'Write your quote…',
        lock_emoji_title: 'Lock Screen Emoji',
        lock_accent_title: 'Lock Screen Accent Color',
        lock_weather_lbl: 'Show weather',
        lock_weather_desc: 'Temperature on the lock screen',
        lock_notifs_lbl: 'Show notifications',
        lock_notifs_desc: 'Pending notifications pill',
        // Accessibility pane
        acc_title: 'Accessibility',
        acc_reduce_lbl: 'Reduce motion',
        acc_reduce_desc: 'Disables open/close animations',
        acc_large_lbl: 'Large text',
        acc_large_desc: 'Increases base font size',
        acc_contrast_lbl: 'High contrast',
        acc_contrast_desc: 'Increases interface contrast',
        acc_colorblind_lbl: 'Color blind mode',
        acc_colorblind_desc: 'Changes colors for color blindness',
        acc_underline_lbl: 'Underline links',
        acc_underline_desc: 'Makes clickable elements easier to identify',
        acc_cursor_title: 'Cursor size',
        acc_cursor_normal: 'Normal',
        acc_cursor_large: 'Large',
        acc_cursor_xl: 'XL',
        acc_font_title: 'Font size',
        // System pane
        sys_info_title: 'System information',
        sys_version_lbl: 'Version',
        sys_kernel_lbl: 'Kernel',
        // autenticación errors
        auth_err_fill: 'Please fill in all fields.',
        auth_err_exists: 'That username already exists.',
        auth_err_creds: 'Incorrect credentials.',
        auth_err_suspended: '🚫 Your account is suspended. Contact an administrator.',
        auth_err_mismatch: '❌ Username does not match. Try again.',
        auth_deleting: 'Deleting account...',
        auth_err_pass: '❌ Incorrect password',
        // amigos
        friends_title: 'Friends',
        friends_requests: '📩 Requests',
        friends_sent: '⏳ Sent',
        friends_list: '👥 Friends',
        // editor
        codelab_loading: 'Loading Pyodide…',
        codelab_ready: 'Ready',
        codelab_running: 'Running…',
        codelab_ok: '✓ OK',
        codelab_error: '✗ Error',
        codelab_clear: 'Clear',
        // barra de tareas/status
        status_notif_none: 'No new notifications',
        // panel de control tiles
        cp_tile_notif: 'Notifications',
        cp_tile_cp: 'Control Panel',
        // Apps windows
        app_store: 'Capibara Shop',
        app_gallery: 'Gallery',
        app_games: 'Capibara Games',
        app_settings: 'Settings',
        app_capi_ai: 'Capi AI',
        app_notes: 'Notes',
        app_calc: 'Calculator',
        app_pet: 'Capi Pet',
        app_leaderboard: 'Leaderboard',
        app_weather: 'Weather',
        // Extra apps (dock/desktop)
        app_music: 'Music',
        app_draw: 'Draw',
        app_calendar: 'Calendar',
        app_todo: 'Tasks',
        app_timer: 'Pomodoro',
        app_browser: 'CapiBrowser',
        app_chat: 'Global Chat',
        app_codelab: 'CodeLab',
        // About
        about_engine_lbl: 'Web Engine',
        // System - missing keys
        set_plat_lbl: 'Platform',
        set_build_lbl: 'Build',
        set_storage_lbl: 'Storage',
        set_theme_active_lbl: 'Active Theme',
        // Daily tasks
        daily_header: 'Daily Tasks',
        // Danger zone
        set_del_acc: 'Delete Account',
        set_del_acc_desc: 'Permanently deletes your account and all data',
        // Pomodoro
        timer_session: 'Focus Session',
        timer_break: 'Break',
        timer_start: 'Start',
        timer_pause: 'Pause',
        timer_reset: 'Reset',
        // calendario
        cal_today: 'Today',
        // pendientes
        todo_placeholder: 'New task...',
        todo_add: 'Add',
        todo_empty: 'No pending tasks 🦫',
        // tienda

        store_wp_tab: 'Wallpapers',
        store_themes_tab: 'Themes',
        store_search: 'Search...',
        store_buy: 'Buy',
        store_apply: 'Apply',
        store_owned: 'Owned',
        // galería
        gallery_desc: 'Your unlocked wallpapers. Tap one to apply it.',
        // mascota
        pet_hunger: 'Hunger',
        pet_happy: 'Happiness',
        pet_energy: 'Energy',
        pet_feed: 'Feed',
        pet_play: 'Play',
        pet_sleep: 'Sleep',
        // notas
        notes_placeholder: 'Write a note...',
        // clima
        weather_humidity: 'Humidity',
        weather_wind: 'Wind',
        weather_feels: 'Feels like',
        weather_uv: 'UV Index',
        // cumpleaños
        bday_title: 'Happy Birthday!',
        bday_sub: 'The capybara wishes you an amazing day 🦫🎉',
        bday_btn: 'Thanks Capi! 🐾',
        // ranking
        lb_strong: 'Top Capibaras',
        lb_desc: 'People with the most gems in Capibara OS',
        // notificaciones
        notif_profile_rank_default: 'Novice Capybara · Lv.1',
        // Rank xp
        rank_xp_next_prefix: ' XP to next level',
        // Rank loading
        rank_loading: 'Loading…',
        // capi ai
        // Misc
        min_tooltip: 'Minimize',
        max_tooltip: 'Maximize',
        capi_discord_label: 'Capibara OS Discord',
        capi_discord_title: 'ᴄᴀᴘɪʙᴀʀᴀ-ᴏꜱ-ᴅɪꜱᴄᴏʀᴅ',
        capi_discord_sub: 'Join the official community',
        capi_discord_btn: 'Join Discord',
        partners_label: 'Partners',
        partners_sub: 'Capibara OS allied projects',
        extras_label: 'Capibara Extras',
        extras_sub: 'Additional settings and tools',
        close_tooltip: 'Close',
        // Extra keys (hardcoded fixes)
        wid_gems: 'Your gems',
        weather_refresh: 'Refresh',
        bonus_used: 'Bonus used up',
        bonus_come_back: 'Come back in',
        bonus_title: 'Bonus!',
        bonus_gems: 'gems',
        bonus_remaining: 'remaining today',
        store_no_results: 'No results',
        store_no_wallpapers: 'No wallpapers yet. Visit the shop 🛍️',
        store_wp_changed: 'Wallpaper changed',
        store_no_gems: 'Not enough gems',
        store_earn_gems: 'Earn more gems.',
        store_purchase_ok: 'Purchase successful',
        store_unlocked: 'unlocked',
        store_purchase: 'Purchase',
        store_theme: 'Theme',
        store_activated: 'activated',
        reset_confirm: 'This will delete ALL your data (gems, purchases, notes, pet, accounts). Continue?',
        notes_empty: 'No notes. Start writing.',
        pet_feed_toast: 'Nom nom! 🍎',
        pet_play_toast: 'So fun! +1 💎',
        cmd_have: 'You have',
        cmd_gems: 'gems',
        cmd_guest: 'guest',
        cmd_themes: 'themes',
        cmd_bonus_ok: '🎁 Bonus processed.',
        cmd_locking: '🔒 Locking…',
        cmd_opening: 'Opening',
        cmd_no_app: 'App not found. Apps:',
        cmd_wp_use: 'Use: /wallpaper <name>',
        cmd_wp_nf: '❌ Wallpaper not found.',
        cmd_locked: 'Locked. Costs',
        cmd_wp_changed: 'Wallpaper changed:',
        cmd_theme_use: 'Use: /theme #ff9f43',
        cmd_color: 'Color:',
        cmd_unknown: 'Unknown command:',
        cmd_use_help: 'Use /help',
        cmd_help: '🐾 Capi Commands:\n/help — this list\n/gems — view gems\n/bonus — claim daily bonus\n/open <app> — open app (store, gallery, pet, notes, calc, settings, games, leaderboard, weather, browser)\n/wallpaper <name> — change wallpaper\n/theme <#hex> — accent color\n/lock — lock system\n/clear — clear chat\n/me — view your profile',
        lb_you: 'You',
      }
    };

    function t(key) {
      return (LANGS[currentLang] && LANGS[currentLang][key]) || (LANGS['es'][key]) || key;
    }

    function setLang(lang) {
      currentLang = lang;
      localStorage.setItem('capios_lang', lang);
      applyLang();
      dailyTaskEvent('change_language');
      // actualizar botones de idioma
      document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
      });
    }

    function applyLang() {
      const L = LANGS[currentLang] || LANGS['es'];
      const set = (id, val) => { const el = document.getElementById(id); if (el) el.textContent = val; };
      const setAttr = (id, attr, val) => { const el = document.getElementById(id); if (el) el.setAttribute(attr, val); };
      const setHTML = (id, val) => { const el = document.getElementById(id); if (el) el.innerHTML = val; };

      // arranque
      const bootSub = document.querySelector('.boot-subtitle'); if (bootSub) bootSub.textContent = L.boot_subtitle;

      // autenticación
      set('auth-title', L.auth_welcome);
      set('auth-sub', authMode === 'login' ? L.auth_login_sub : L.auth_register_sub);
      setAttr('auth-user', 'placeholder', L.auth_user_placeholder);
      setAttr('auth-pass', 'placeholder', L.auth_pass_placeholder);
      const authSubmit = document.getElementById('auth-submit');
      if (authSubmit) authSubmit.textContent = authMode === 'login' ? L.auth_submit_login : L.auth_submit_register;
      set('auth-switch-text', authMode === 'login' ? L.auth_switch_no_account : L.auth_switch_have_account);
      set('auth-switch-link', authMode === 'login' ? L.auth_switch_create : L.auth_switch_login);
      const bdayLabel = document.querySelector('#auth-birthday-wrap > div:first-child'); if (bdayLabel) bdayLabel.textContent = L.auth_bday_label;
      const authBdayDay = document.querySelector('#auth-bday-day option:first-child'); if (authBdayDay) authBdayDay.textContent = L.auth_bday_day;
      const authBdayMonth = document.querySelector('#auth-bday-month option:first-child'); if (authBdayMonth) authBdayMonth.textContent = L.auth_bday_month;

      // pantalla de bloqueo
      const lockHint = document.querySelector('.lock-hint'); if (lockHint) lockHint.innerHTML = `<i class="fa-solid fa-hand-pointer"></i> ${L.lock_hint}`;

      // panel de control
      const cpTitle = document.querySelector('#control-panel .cp-title'); if (cpTitle) cpTitle.textContent = L.cp_title;
      const cpTiles = document.querySelectorAll('#control-panel .cp-tile .cp-tile-label');
      const cpLabels = [L.cp_wifi, L.cp_sound, L.cp_dnd, L.cp_lock];
      cpTiles.forEach((el, i) => { if (i < cpLabels.length) el.textContent = cpLabels[i]; });
      // bonus y logout
      const bonusTile = document.getElementById('cp-bonus'); if (bonusTile) { const lbl = bonusTile.querySelector('.cp-tile-label'); if (lbl) lbl.innerHTML = `${L.cp_bonus} <span id="bonus-left">${document.getElementById('bonus-left')?.textContent||'3'}</span>/3`; }
      const cpBright = document.querySelector('#cp-bright + span') || document.querySelector('.cp-slider-block .cp-slider-label span:first-child');
      document.querySelectorAll('.cp-slider-block').forEach((block, i) => {
        const label = block.querySelector('.cp-slider-label span:first-child');
        if (label) label.innerHTML = i === 0 ? `<i class="fa-solid fa-sun"></i> ${L.cp_brightness}` : `<i class="fa-solid fa-droplet"></i> ${L.cp_blur}`;
      });
      const cpAccentTitle = document.querySelector('#control-panel .cp-title:last-of-type');
      document.querySelectorAll('#control-panel .cp-title').forEach((el, i) => { if (i === 1) el.textContent = L.cp_accent; });

      // barra de tareas
      const tbSearch = document.querySelector('.taskbar-search-label'); if (tbSearch) tbSearch.textContent = L.tb_search;
      setAttr('spotlight-input', 'placeholder', L.sp_placeholder);
      const spHint = document.querySelector('.spotlight-shortcut-hint'); if (spHint) spHint.textContent = L.sp_esc;

      // tooltips del dock
      const tooltips = {
        'dock-gallery': L.tb_gallery,
        'dock-store': L.tb_shop,
        'dock-games': L.tb_games,
        'dock-leaderboard': L.tb_leaderboard,
        'dock-weather': L.tb_weather,
        'dock-pet': L.tb_pet,
        'dock-notes': L.tb_notes,
        'dock-settings': L.tb_settings,
      };
      Object.entries(tooltips).forEach(([id, label]) => {
        const el = document.getElementById(id);
        if (el) { const tip = el.querySelector('.dock-tooltip'); if (tip) tip.textContent = label; }
      });

      // notificaciones
      const notifTitle = document.querySelector('.notif-panel-title');
      if (notifTitle) notifTitle.innerHTML = `<i class="fa-solid fa-bell" style="color:var(--accent-color)"></i> ${L.notif_title} <span class="notif-badge" id="notif-badge">${document.getElementById('notif-badge')?.textContent||'0'}</span>`;
      const notifClear = document.querySelector('.notif-clear-btn'); if (notifClear) notifClear.innerHTML = `<i class="fa-solid fa-trash"></i> ${L.notif_clear}`;
      set('ntab-all', L.notif_tab_all);
      set('ntab-system', L.notif_tab_system);
      set('ntab-gems', L.notif_tab_gems);
      set('ntab-app', L.notif_tab_app);

      // configuración sidebar
      document.querySelectorAll('.settings-sidebar-btn').forEach(btn => {
        const pane = btn.dataset.pane;
        const icons = { account: 'fa-user', appear: 'fa-palette', notif: 'fa-bell', system: 'fa-microchip', about: 'fa-circle-info' };
        const labels = { account: L.set_account, appear: L.set_appear, notif: L.set_notif, system: L.set_system, about: L.set_about };
        if (labels[pane]) btn.innerHTML = `<i class="fa-solid ${icons[pane]}"></i> ${labels[pane]}`;
        if (pane === 'partners') btn.innerHTML = `📜 ${L.partners_label || 'Partners'}`;
        if (pane === 'extras') btn.innerHTML = `<i class="fa-solid fa-wand-magic-sparkles"></i> ${L.extras_label || 'Extras Capibara'}`;
        if (pane === 'capidiscord') btn.innerHTML = `<i class="fa-brands fa-discord" style="color:#5865F2"></i> ${L.capi_discord_label || 'Capibara OS Discord'}`;
      });
      // panel de discord
      const cdTitle = document.querySelector('#pane-capidiscord .capi-discord-title'); if (cdTitle) cdTitle.textContent = L.capi_discord_title || 'ᴄᴀᴘɪʙᴀʀᴀ-ᴏꜱ-ᴅɪꜱᴄᴏʀᴅ';
      const cdSub = document.querySelector('#pane-capidiscord .capi-discord-sub'); if (cdSub) cdSub.textContent = L.capi_discord_sub || 'Únete a la comunidad oficial';
      const cdBtn = document.querySelector('#pane-capidiscord .capi-discord-btn span'); if (cdBtn) cdBtn.textContent = L.capi_discord_btn || 'Unirse al Discord';
      // subtítulo de partners
      const pPaneSub = document.querySelector('#pane-partners .settings-group:first-child div:last-child'); if (pPaneSub && pPaneSub.style.color) pPaneSub.textContent = L.partners_sub || 'Proyectos aliados de Capibara OS';
      const ePaneSub = document.querySelector('#pane-extras .settings-group:first-child div:last-child'); if (ePaneSub && ePaneSub.style.color) ePaneSub.textContent = L.extras_sub || 'Ajustes adicionales y herramientas';

      // configuración window title
      const setWinTitle = document.querySelector('#app-settings .window-title');
      if (setWinTitle) setWinTitle.innerHTML = `<i class="fa-solid fa-gear" style="color:#67e8f9;"></i> ${L.app_settings}`;

      // configuración - Account pane
      const rankBadge = document.getElementById('settings-rank-badge');
      // etiquetas de stats
      document.querySelectorAll('#pane-account .settings-stat-lbl').forEach((el, i) => {
        const labels = [L.set_gems_lbl, L.set_wp_lbl, L.set_themes_lbl, L.set_session_lbl];
        if (labels[i]) el.textContent = labels[i];
      });
      const usageTitle = document.querySelector('#pane-account .settings-group:nth-child(4) .settings-title'); if (usageTitle) usageTitle.textContent = L.set_usage_title;
      const avatarTitle = document.querySelector('#pane-avatar .settings-title'); if (avatarTitle) avatarTitle.textContent = L.set_avatar_title;
      const avatarDesc = document.querySelector('#pane-avatar > div:first-of-type + div');
      document.querySelectorAll('#pane-avatar div').forEach(el => { if (el.textContent.trim() === 'Elige tu capibara y accesorio' || el.textContent.trim() === 'Choose your capybara and accessory') el.textContent = L.set_avatar_desc; });
      // cumpleaños
      const bdayGroupTitle = document.querySelector('#pane-account .settings-group:nth-last-child(2) .settings-title'); if (bdayGroupTitle) bdayGroupTitle.textContent = L.set_bday_title;
      const bdayDisplay = document.getElementById('settings-bday-display');
      if (bdayDisplay && (bdayDisplay.textContent === 'Sin cumpleaños guardado' || bdayDisplay.textContent === 'No birthday saved')) bdayDisplay.textContent = L.set_bday_none;
      const bdayRowDesc = document.querySelector('#pane-account .settings-group:nth-last-child(2) .settings-row-desc'); if (bdayRowDesc) bdayRowDesc.textContent = L.set_bday_desc;
      const bdaySaveBtn = document.querySelector('#bday-edit-wrap .auth-btn'); if (bdaySaveBtn) bdaySaveBtn.textContent = L.set_bday_save;
      // acciones de cuenta
      const actTitle = document.querySelector('#pane-account .settings-group:last-child .settings-title'); if (actTitle) actTitle.textContent = L.set_actions_title;
      const logoutSpan = document.querySelector('#pane-account .settings-group:last-child .settings-row-label span:first-child'); if (logoutSpan) logoutSpan.textContent = L.set_logout;
      const logoutDesc = document.querySelector('#pane-account .settings-group:last-child .settings-row-desc'); if (logoutDesc) logoutDesc.textContent = L.set_logout_desc;
      const logoutBtn = document.querySelector('#pane-account .danger-btn'); if (logoutBtn) logoutBtn.innerHTML = `<i class="fa-solid fa-right-from-bracket"></i> ${L.set_logout_btn}`;

      // configuración - Appearance
      const appearRows = document.querySelectorAll('#pane-appear .settings-row');
      if (appearRows[0]) {
        const lbl = appearRows[0].querySelector('.settings-row-label span:first-child'); if (lbl) lbl.textContent = L.set_dnd;
        const desc = appearRows[0].querySelector('.settings-row-desc'); if (desc) desc.textContent = L.set_dnd_desc;
      }
      if (appearRows[1]) {
        const lbl = appearRows[1].querySelector('.settings-row-label span:first-child'); if (lbl) lbl.textContent = L.set_wifi;
        const desc = appearRows[1].querySelector('.settings-row-desc'); if (desc) desc.textContent = L.set_wifi_desc;
      }
      if (appearRows[2]) {
        const lbl = appearRows[2].querySelector('.settings-row-label span:first-child'); if (lbl) lbl.textContent = L.set_sound;
        const desc = appearRows[2].querySelector('.settings-row-desc'); if (desc) desc.textContent = L.set_sound_desc;
      }
      const appearTitles = document.querySelectorAll('#pane-appear .settings-title');
      if (appearTitles[0]) appearTitles[0].textContent = L.set_quick_controls;
      if (appearTitles[1]) appearTitles[1].textContent = L.set_accent_title;
      // sección de idioma
      const langTitle = document.querySelector('#lang-settings-group .settings-title'); if (langTitle) langTitle.textContent = L.set_lang_title;
      const langDesc = document.querySelector('#lang-settings-group .settings-row-desc'); if (langDesc) langDesc.textContent = L.set_lang_desc;
      const langBtns = document.querySelectorAll('.lang-btn');
      langBtns.forEach(btn => {
        if (btn.dataset.lang === 'es') btn.textContent = L.set_lang_es;
        if (btn.dataset.lang === 'en') btn.textContent = L.set_lang_en;
        btn.classList.toggle('active', btn.dataset.lang === currentLang);
      });

      // configuración - Notifications
      const notifPrefsTitle = document.querySelector('#pane-notif .settings-title:first-of-type'); if (notifPrefsTitle) notifPrefsTitle.textContent = L.set_notif_prefs;
      const notifRows = document.querySelectorAll('#pane-notif .settings-group:first-child .settings-row');
      const notifLabels = [[L.set_notif_show, L.set_notif_show_desc],[L.set_notif_bonus, L.set_notif_bonus_desc],[L.set_notif_capi, L.set_notif_capi_desc],[L.set_notif_anim, L.set_notif_anim_desc]];
      notifRows.forEach((row, i) => {
        if (notifLabels[i]) {
          const lbl = row.querySelector('.settings-row-label span:first-child'); if (lbl) lbl.textContent = notifLabels[i][0];
          const desc = row.querySelector('.settings-row-desc'); if (desc) desc.textContent = notifLabels[i][1];
        }
      });
      const notifTestTitle = document.querySelector('#pane-notif .settings-group:last-child .settings-title'); if (notifTestTitle) notifTestTitle.textContent = L.set_notif_test_title;
      const notifTestSpan = document.querySelector('#pane-notif .settings-group:last-child .settings-row > span'); if (notifTestSpan) notifTestSpan.textContent = L.set_notif_test;
      const notifTestBtn = document.querySelector('#pane-notif .store-btn');
      if (notifTestBtn) notifTestBtn.innerHTML = `<i class="fa-solid fa-bell"></i> ${L.set_notif_test_btn}`;
      if (notifTestBtn) notifTestBtn.setAttribute('onclick', `showToast('${L.set_notif_test_msg_title}','${L.set_notif_test_msg}')`);

      // configuración - System
      const sysTitles = document.querySelectorAll('#pane-system .settings-title');
      if (sysTitles[0]) sysTitles[0].textContent = L.set_sysinfo;
      if (sysTitles[1]) sysTitles[1].textContent = L.set_danger;
      const sysRows = document.querySelectorAll('#pane-system .settings-group:first-child .settings-row');
      const sysLabels = [L.set_version_lbl, L.set_kernel_lbl, L.set_ai_lbl, L.set_res_lbl, L.set_platform_lbl];
      sysRows.forEach((row, i) => { const sp = row.querySelector('span:first-child'); if (sp && sysLabels[i]) sp.textContent = sysLabels[i]; });
      const resetSpan = document.querySelector('#pane-system .settings-group:last-child .settings-row-label span:first-child'); if (resetSpan) resetSpan.textContent = L.set_reset;
      const resetDesc = document.querySelector('#pane-system .settings-group:last-child .settings-row-desc'); if (resetDesc) resetDesc.textContent = L.set_reset_desc;
      const resetBtn = document.querySelector('#pane-system .danger-btn'); if (resetBtn) resetBtn.innerHTML = `<i class="fa-solid fa-trash"></i> ${L.set_reset_btn}`;

      // configuración - About
      const aboutP = document.querySelector('#pane-about p'); if (aboutP) aboutP.textContent = L.set_about_desc;
      const creditsTitle = document.querySelector('#pane-about .settings-title'); if (creditsTitle) creditsTitle.textContent = L.set_credits;
      const creditRows = document.querySelectorAll('#pane-about .settings-row');
      const creditLabels = [L.set_credits_owner, L.set_credits_owner, L.set_credits_dev, L.set_credits_engine, L.set_credits_tester, L.set_credits_mascot];
      creditRows.forEach((row, i) => { const sp = row.querySelector('span:first-child'); if (sp && creditLabels[i]) sp.textContent = creditLabels[i]; });

      // títulos de ventanas
      const winTitles = {
        'app-store': `<i class="fa-solid fa-bag-shopping" style="color:#e8658a;"></i> ${L.app_store}`,
        'app-gallery': `<i class="fa-solid fa-images" style="color:#a78bfa;"></i> ${L.app_gallery}`,
        'app-games': `<i class="fa-solid fa-gamepad" style="color:#4ade80;"></i> ${L.app_games}`,
        'app-notes': `<i class="fa-solid fa-note-sticky" style="color:#fbbf24;"></i> ${L.app_notes}`,
        'app-calc': `<i class="fa-solid fa-calculator" style="color:#67e8f9;"></i> ${L.app_calc}`,
        'app-weather': `<i class="fa-solid fa-cloud-sun" style="color:#74b9ff;"></i> ${L.app_weather}`,
        'app-music': `<i class="fa-solid fa-music" style="color:#a78bfa;"></i> ${L.app_music}`,
        'app-draw': `<i class="fa-solid fa-paintbrush" style="color:#e8658a;"></i> ${L.app_draw}`,
        'app-calendar': `<i class="fa-solid fa-calendar" style="color:#ff9f43;"></i> ${L.app_calendar}`,
        'app-todo': `<i class="fa-solid fa-list-check" style="color:#4ade80;"></i> ${L.app_todo}`,
        'app-timer': `<i class="fa-solid fa-stopwatch" style="color:#ff6b6b;"></i> ${L.app_timer}`,
        'app-browser': `<i class="fa-solid fa-globe" style="color:#67e8f9;"></i> ${L.app_browser}`,
        'app-chat': `<i class="fa-solid fa-comments" style="color:#4ade80;"></i> ${L.app_chat}`,
        'app-codelab': `<i class="fa-solid fa-code" style="color:#67e8f9;"></i> ${L.app_codelab}`,
      };
      Object.entries(winTitles).forEach(([id, html]) => {
        const el = document.querySelector(`#${id} .window-title`); if (el) el.innerHTML = html;
      });

      // galería desc
      const galleryDesc = document.querySelector('#app-gallery .window-body > div:first-child'); if (galleryDesc && galleryDesc.tagName !== 'DIV') {} else if (galleryDesc) galleryDesc.textContent = L.gallery_desc;

      // mascota
      document.querySelectorAll('.pet-stat-label').forEach((el, i) => {
        const labels = [L.pet_hunger, L.pet_happy, L.pet_energy];
        const icons = ['fa-drumstick-bite', 'fa-face-smile', 'fa-bolt'];
        const sp = el.querySelector('span:first-child');
        if (sp && labels[i]) sp.innerHTML = `<i class="fa-solid ${icons[i]}"></i> ${labels[i]}`;
      });
      const petActions = document.querySelectorAll('.pet-action');
      if (petActions[0]) petActions[0].innerHTML = `<i class="fa-solid fa-bowl-food"></i> ${L.pet_feed}`;
      if (petActions[1]) petActions[1].innerHTML = `<i class="fa-solid fa-baseball"></i> ${L.pet_play}`;
      if (petActions[2]) petActions[2].innerHTML = `<i class="fa-solid fa-bed"></i> ${L.pet_sleep}`;

      // notas placeholder
      setAttr('note-input', 'placeholder', L.notes_placeholder);

      // tienda tabs
      const storeTab1 = document.getElementById('tab-wp'); if (storeTab1) storeTab1.innerHTML = `<i class="fa-solid fa-image"></i> ${L.store_wp_tab}`;
      const storeTab2 = document.getElementById('tab-themes'); if (storeTab2) storeTab2.innerHTML = `<i class="fa-solid fa-palette"></i> ${L.store_themes_tab}`;
      setAttr('store-search', 'placeholder', L.store_search);

      // ranking
      const lbHeader = document.querySelector('.lb-header > div');
      if (lbHeader) lbHeader.innerHTML = `<strong>${L.lb_strong}</strong>${L.lb_desc}`;

      // cumpleaños
      set('birthday-title', L.bday_title);
      set('birthday-sub', L.bday_sub);
      const bdayBtnEl = document.querySelector('.birthday-btn'); if (bdayBtnEl) bdayBtnEl.textContent = L.bday_btn;

      // tooltips del dock
      const dockTooltips = {
        'dock-chat':        L.app_chat,
        'dock-gallery':     L.tb_gallery,
        'dock-store':       L.tb_shop,
        'dock-games':       L.tb_games,
        'dock-leaderboard': L.tb_leaderboard,
        'dock-weather':     L.app_weather,
        'dock-notes':       L.tb_notes,
        'dock-settings':    L.tb_settings,
        'dock-music':       L.app_music,
        'dock-draw':        L.app_draw,
        'dock-calendar':    L.app_calendar,
        'dock-todo':        L.app_todo,
        'dock-timer':       L.app_timer,
        'dock-codelab':     L.app_codelab,
        'dock-browser':     L.app_browser,
      };
      Object.entries(dockTooltips).forEach(([id, label]) => {
        const el = document.getElementById(id);
        if (el) { const tip = el.querySelector('.dock-tooltip'); if (tip) tip.textContent = label; }
      });
      // header de tareas diarias
      const dtHdr = document.getElementById('daily-tasks-header');
      if (dtHdr) { const state = getDailyTasksState ? getDailyTasksState() : null; const done = state ? Object.values(state.done||{}).filter(Boolean).length : 0; const tot = state ? (state.tasks||[]).length : 3; dtHdr.textContent = `${L.daily_header} · ${done}/${tot}`; }
      // label de motor
      const aboutEngLbl = document.getElementById('about-engine-lbl'); if (aboutEngLbl) aboutEngLbl.textContent = L.about_engine_lbl || 'Engine';
      // filas extra de sistema
      const sysAllRows = document.querySelectorAll('#pane-system .settings-group:first-child .settings-row');
      const sysExtraLabels = { 4: L.set_plat_lbl, 5: L.set_build_lbl, 6: L.set_storage_lbl, 7: L.set_theme_active_lbl };
      sysAllRows.forEach((row, i) => { if (sysExtraLabels[i]) { const sp = row.querySelector('span:first-child'); if (sp) sp.textContent = sysExtraLabels[i]; }});
      // tooltips de controles
      document.querySelectorAll('.win-min').forEach(el => el.setAttribute('title', L.min_tooltip));
      document.querySelectorAll('.win-max').forEach(el => el.setAttribute('title', L.max_tooltip));
      document.querySelectorAll('.win-close').forEach(el => el.setAttribute('title', L.close_tooltip));

      // label de gemas
      const widGemsLbl = document.getElementById('wid-gems-lbl'); if (widGemsLbl) widGemsLbl.textContent = t('wid_gems');

      // clima labels
      const wHum = document.getElementById('w-lbl-hum'); if (wHum) wHum.textContent = L.weather_humidity;
      const wWind = document.getElementById('w-lbl-wind'); if (wWind) wWind.textContent = L.weather_wind;
      const wFeel = document.getElementById('w-lbl-feel'); if (wFeel) wFeel.textContent = L.weather_feels;
      const wUV = document.getElementById('w-lbl-uv'); if (wUV) wUV.textContent = L.weather_uv;
      const wRefresh = document.getElementById('weather-refresh-btn'); if (wRefresh) wRefresh.innerHTML = `<i class="fa-solid fa-rotate"></i> ${t('weather_refresh')}`;

      // labels de iconos
      const diconLabels = {
        'dicon-store': L.tb_shop,
        'dicon-gallery': L.tb_gallery,
        'dicon-games': L.tb_games,
        'dicon-notes': L.tb_notes,
        'dicon-pet': L.tb_pet,
        'dicon-music': L.app_music,
        'dicon-draw': L.app_draw,
        'dicon-calendar': L.app_calendar,
        'dicon-todo': L.app_todo,
        'dicon-timer': L.app_timer,
        'dicon-codelab': L.app_codelab,
        'dicon-chat': L.app_chat,
      };
      Object.entries(diconLabels).forEach(([id, label]) => {
        const el = document.getElementById(id);
        if (el) { const lbl = el.querySelector('.desk-icon-label'); if (lbl) lbl.textContent = label; }
      });

      // menú contextual
      const ctxItems = document.querySelectorAll('#ctx-menu .ctx-item');
      const ctxTexts = currentLang === 'en'
        ? ['Change wallpaper', 'New note', 'Show/hide widgets', 'Open Shop', 'Settings', 'Show/hide icons', 'Claim bonus', 'Lock screen']
        : ['Cambiar fondo', 'Nueva nota', 'Mostrar/ocultar widgets', 'Abrir Shop', 'Ajustes', 'Mostrar/ocultar íconos', 'Reclamar bonus', 'Bloquear pantalla'];
      const ctxIcons = ['fa-image','fa-note-sticky','fa-square-poll-vertical','fa-bag-shopping','fa-gear','fa-border-all','fa-gift','fa-lock'];
      ctxItems.forEach((item, i) => {
        if (ctxTexts[i]) item.innerHTML = `<i class="fa-solid ${ctxIcons[i]}"></i> ${ctxTexts[i]}`;
      });

      // ranking header text
      const lbHeaderDiv = document.querySelector('.lb-header > div');
      if (lbHeaderDiv) lbHeaderDiv.innerHTML = `<strong>${L.lb_strong}</strong>${L.lb_desc}`;

      // galería desc
      const galDesc = document.querySelector('#app-gallery .window-body > div:first-child');
      if (galDesc && !galDesc.id && galDesc.className === '') galDesc.textContent = L.gallery_desc;

      // re-renderizar tienda/galería/notas
      if (typeof renderStore === 'function') setTimeout(renderStore, 0);
      if (typeof renderGallery === 'function') setTimeout(renderGallery, 0);
      if (typeof renderNotes === 'function') setTimeout(renderNotes, 0);
      if (typeof renderLeaderboard === 'function') setTimeout(renderLeaderboard, 0);
      if (typeof refreshWeather === 'function') setTimeout(refreshWeather, 0);

      // bloque extra de i18n
      (() => {
      const _xe = (id) => document.getElementById(id);
      const _xq = (sel) => document.querySelector(sel);
      const _xqa = (sel) => document.querySelectorAll(sel);

      // barra de tareas/status bar tooltips
      const xNotifBell = _xq('.notif-bell-btn'); if (xNotifBell) xNotifBell.title = L.cp_tile_notif;
      const xCpToggle = _xq('.cp-toggle'); if (xCpToggle) xCpToggle.title = L.cp_tile_cp;

      // pantalla de bloqueo screen notif pill
      const xLockNotif = _xe('lock-notif-text'); if (xLockNotif) xLockNotif.textContent = L.status_notif_none;

      // panel de control tile labels (DND, Lock, Logout)
      const xCpTileLabels = _xqa('.cp-tile-label');
      const xCpTileMap = [L.cp_dnd, L.cp_lock, L.cp_logout];
      xCpTileLabels.forEach((xEl, i) => { if (xCpTileMap[i]) xEl.textContent = xCpTileMap[i]; });

      // panel de control sliders labels
      const xBrightLabel = _xq('.cp-slider-label:nth-child(1) span:first-child');
      if (xBrightLabel) xBrightLabel.innerHTML = `<i class="fa-solid fa-sun"></i> ${L.cp_brightness}`;
      const xBlurLabel = _xq('.cp-slider-label:nth-child(2) span:first-child');
      if (xBlurLabel) xBlurLabel.innerHTML = `<i class="fa-solid fa-droplet"></i> ${L.cp_blur}`;
      _xqa('.cp-title').forEach(xEl => { if (xEl.textContent.trim().includes('Color') || xEl.textContent.trim().includes('acento')) xEl.textContent = L.cp_accent; });

      // configuración sidebar buttons
      _xqa('.settings-sidebar-btn[data-pane]').forEach(xBtn => {
        const xPane = xBtn.dataset.pane;
        const xPaneLabels = { account: L.set_account, appear: L.set_appear, notif: L.set_notif, system: L.set_system, about: L.set_about };
        if (xPaneLabels[xPane]) {
          const xIcons = { account:'fa-user', appear:'fa-palette', notif:'fa-bell', system:'fa-microchip', about:'fa-circle-info' };
          xBtn.innerHTML = `<i class="fa-solid ${xIcons[xPane]}"></i> ${xPaneLabels[xPane]}`;
        }
      });

      // Account pane
      const xBdayTitle = _xq('#pane-account .settings-group:nth-child(3) .settings-group-header .settings-title'); if (xBdayTitle) xBdayTitle.textContent = L.acc_bday_title || L.set_bday_title;
      const xBdayDesc = _xq('#pane-account .settings-group:nth-child(3) .settings-row-desc'); if (xBdayDesc) xBdayDesc.textContent = L.acc_bday_desc;
      const xBdaySaveBtn = _xq('#bday-edit-wrap .auth-btn'); if (xBdaySaveBtn) xBdaySaveBtn.textContent = L.acc_bday_save;
      const xAccActionsTitle = _xq('#pane-account .settings-group:last-child .settings-title'); if (xAccActionsTitle) xAccActionsTitle.textContent = L.acc_actions_title;
      const xLogoutRows = _xqa('#pane-account .settings-group:last-child .settings-row');
      if (xLogoutRows[0]) {
        const xLbl = xLogoutRows[0].querySelector('.settings-row-label span:first-child'); if (xLbl) xLbl.textContent = L.acc_logout_lbl;
        const xDesc = xLogoutRows[0].querySelector('.settings-row-desc'); if (xDesc) xDesc.textContent = L.acc_logout_desc;
        const xBtn2 = xLogoutRows[0].querySelector('.danger-btn'); if (xBtn2) xBtn2.innerHTML = `<i class="fa-solid fa-right-from-bracket"></i> ${L.acc_logout_btn}`;
      }
      if (xLogoutRows[1]) {
        const xLbl2 = xLogoutRows[1].querySelector('.settings-row-label span:first-child'); if (xLbl2) xLbl2.textContent = L.acc_delete_lbl;
        const xDesc2 = xLogoutRows[1].querySelector('.settings-row-desc'); if (xDesc2) xDesc2.textContent = L.acc_delete_desc;
        const xBtn3 = xLogoutRows[1].querySelector('.danger-btn'); if (xBtn3) xBtn3.innerHTML = `<i class="fa-solid fa-trash"></i> ${L.acc_delete_btn}`;
      }
      const xUploadTitle = _xq('#pane-account .settings-group:nth-child(2) div[style*="13px"]'); if (xUploadTitle) xUploadTitle.textContent = L.acc_upload_title;
      const xUploadDesc = _xq('#pane-account .settings-group:nth-child(2) div[style*="11px"]'); if (xUploadDesc) xUploadDesc.textContent = L.acc_upload_desc;
      const xUploadBtn = _xq('#pane-account button[onclick*="avatar-file-input"]'); if (xUploadBtn) xUploadBtn.innerHTML = `<i class="fa-solid fa-upload"></i> ${L.acc_upload_btn}`;
      const xRemoveBtn = _xe('avatar-remove-btn'); if (xRemoveBtn) xRemoveBtn.innerHTML = `<i class="fa-solid fa-trash"></i> ${L.acc_remove_btn}`;

      // Appearance pane
      const xAppearSections = _xqa('#pane-appear .settings-title');
      if (xAppearSections[0]) xAppearSections[0].textContent = L.appear_quick_title;
      if (xAppearSections[1]) xAppearSections[1].textContent = L.appear_accent_title;
      const xLangTitle = _xq('#lang-settings-group .settings-title'); if (xLangTitle) xLangTitle.textContent = L.appear_lang_title;
      const xAppearRows = _xqa('#pane-appear .settings-row-label');
      const xAppearMap = [[L.appear_dnd_lbl, L.appear_dnd_desc],[L.appear_wifi_lbl, L.appear_wifi_desc],[L.appear_sound_lbl, L.appear_sound_desc],[L.appear_lang_lbl, L.appear_lang_desc]];
      xAppearRows.forEach((xRow, i) => { if (xAppearMap[i]) { const xL = xRow.querySelector('span:first-child'); const xD = xRow.querySelector('.settings-row-desc'); if (xL) xL.textContent = xAppearMap[i][0]; if (xD) xD.textContent = xAppearMap[i][1]; } });

      // Notification pane
      const xNotifTitles = _xqa('#pane-notif .settings-title');
      if (xNotifTitles[0]) xNotifTitles[0].textContent = L.notif_pref_title;
      if (xNotifTitles[1]) xNotifTitles[1].textContent = L.notif_test_title;
      const xNotifRows = _xqa('#pane-notif .settings-row-label');
      const xNotifMap = [[L.notif_show_lbl, L.notif_show_desc],[L.notif_bonus_lbl, L.notif_bonus_desc],[L.notif_capi_lbl, L.notif_capi_desc],[L.notif_anim_lbl, L.notif_anim_desc]];
      xNotifRows.forEach((xRow, i) => { if (xNotifMap[i]) { const xL = xRow.querySelector('span:first-child'); const xD = xRow.querySelector('.settings-row-desc'); if (xL) xL.textContent = xNotifMap[i][0]; if (xD) xD.textContent = xNotifMap[i][1]; } });
      const xNotifTestLbl = _xq('#pane-notif .settings-group:last-child .settings-row > span'); if (xNotifTestLbl) xNotifTestLbl.textContent = L.notif_test_lbl;
      const xNotifTestBtn = _xq('#pane-notif .settings-group:last-child .store-btn'); if (xNotifTestBtn) xNotifTestBtn.innerHTML = `<i class="fa-solid fa-bell"></i> ${L.notif_test_btn}`;

      // pantalla de bloqueoscreen pane
      const xLockTitles = _xqa('#pane-lockscreen .settings-title');
      const xLockTitleMap = [L.lock_title, L.lock_emoji_title, L.lock_accent_title];
      xLockTitles.forEach((xEl, i) => { if (xLockTitleMap[i]) xEl.textContent = xLockTitleMap[i]; });
      const xLockRows = _xqa('#pane-lockscreen .settings-row-label');
      const xLockMap = [[L.lock_quote_lbl, L.lock_quote_desc],[L.lock_weather_lbl, L.lock_weather_desc],[L.lock_notifs_lbl, L.lock_notifs_desc]];
      xLockRows.forEach((xRow, i) => { if (xLockMap[i]) { const xL = xRow.querySelector('span:first-child'); const xD = xRow.querySelector('.settings-row-desc'); if (xL) xL.textContent = xLockMap[i][0]; if (xD) xD.textContent = xLockMap[i][1]; } });
      const xLockQuoteInput = _xe('lock-custom-quote'); if (xLockQuoteInput) xLockQuoteInput.setAttribute('placeholder', L.lock_quote_ph);

      // Accessibility pane
      const xAccTitleEl = _xq('#pane-accessibility .settings-title'); if (xAccTitleEl) xAccTitleEl.textContent = L.acc_title;
      const xAccRows = _xqa('#pane-accessibility .settings-row-label');
      const xAccMap = [[L.acc_reduce_lbl, L.acc_reduce_desc],[L.acc_large_lbl, L.acc_large_desc],[L.acc_contrast_lbl, L.acc_contrast_desc],[L.acc_colorblind_lbl, L.acc_colorblind_desc],[L.acc_underline_lbl, L.acc_underline_desc]];
      xAccRows.forEach((xRow, i) => { if (xAccMap[i]) { const xL = xRow.querySelector('span:first-child'); const xD = xRow.querySelector('.settings-row-desc'); if (xL) xL.textContent = xAccMap[i][0]; if (xD) xD.textContent = xAccMap[i][1]; } });
      const xCursorTitles = _xqa('#pane-accessibility .settings-title');
      if (xCursorTitles[1]) xCursorTitles[1].textContent = L.acc_cursor_title;
      if (xCursorTitles[2]) xCursorTitles[2].textContent = L.acc_font_title;
      const xCursorNormal = _xe('cursor-btn-normal'); if (xCursorNormal) xCursorNormal.textContent = L.acc_cursor_normal;
      const xCursorLarge = _xe('cursor-btn-large'); if (xCursorLarge) xCursorLarge.textContent = L.acc_cursor_large;
      const xCursorXL = _xe('cursor-btn-xlarge'); if (xCursorXL) xCursorXL.textContent = L.acc_cursor_xl;

      // System pane titles and rows
      const xSysTitles = _xqa('#pane-system .settings-title');
      if (xSysTitles[0]) xSysTitles[0].textContent = L.sys_info_title;
      const xSysRows = _xqa('#pane-system .settings-group:first-child .settings-row span:first-child');
      const xSysRowMap = { 0: L.sys_version_lbl, 1: L.sys_kernel_lbl, 2: L.set_ai_lbl, 3: L.set_res_lbl, 4: L.set_plat_lbl, 5: L.set_engine_lbl||'Engine', 6: L.set_build_lbl, 7: L.set_storage_lbl, 8: L.set_theme_active_lbl };
      xSysRows.forEach((xEl, i) => { if (xSysRowMap[i] !== undefined) xEl.textContent = xSysRowMap[i]; });

      // About pane footer
      const xAboutFooter = _xq('#pane-about .settings-group:last-child div');
      if (xAboutFooter && (xAboutFooter.innerHTML.includes('amor') || xAboutFooter.innerHTML.includes('love'))) {
        xAboutFooter.innerHTML = currentLang === 'en'
          ? '© 2026 Capibara OS · All Rights Reserved<br>🦫 capibara OS<br><span style="font-size:10px;letter-spacing:1px;"></span>'
          : '© 2026 Capibara OS · All Rights Reserved<br>🦫 capibara OS<br><span style="font-size:10px;letter-spacing:1px;"></span>';
      }

      // menú contextual Calendar item
      const xCtxCal = _xq('#ctx-menu .ctx-item[onclick*="calendar"]');
      if (xCtxCal) xCtxCal.innerHTML = `<i class="fa-solid fa-calendar" style="color:#ff9f43;"></i> ${L.app_calendar}`;
      })(); // end IIFE
    }


    function _bootInit() {
      executeBootloader();
      initClock();
      updateGemDisplay();
      initWallpaper();
      makeWindowsDraggable();
      renderColors();
      renderNotes();
      updatePetUI();
      updateBonusUI();
      attachRipples();
      initDesktopIcons();
      initContextMenu();
      initWidgets();
      setTimeout(() => { renderDailyTasks(); updateDailyTasksDock(); }, 500);
      // iniciar sistemas nuevos
      populateBdaySelects('auth-bday-day','auth-bday-month');
      syncAvatarAll();
      refreshRankDisplay();
      updateNotifBadge();
      renderNotifList();
      applyLang();
      setInterval(updateSessionTime, 30000);
      setInterval(() => { addXP(1); }, 60000); // 1 XP per minute online
      const users = JSON.parse(localStorage.getItem('capios_users') || '{}');
      if (Object.keys(users).length === 0) setAuthMode('register');
      document.addEventListener('click', (e) => {
        const cp = document.getElementById('control-panel');
        if (cp.classList.contains('open') && !cp.contains(e.target) && !e.target.closest('.cp-toggle')) {
          cp.classList.remove('open');
        }
        const np = document.getElementById('notif-panel');
        if (np && np.classList.contains('open') && !np.contains(e.target) && !e.target.closest('.notif-bell-btn')) {
          np.classList.remove('open');
        }
      });
      document.getElementById('auth-pass').addEventListener('keydown', e => { if (e.key === 'Enter') submitAuth(); });
      setInterval(() => {
        petStats.hunger = Math.max(0, petStats.hunger - 2);
        petStats.happy = Math.max(0, petStats.happy - 1);
        petStats.energy = Math.max(0, petStats.energy - 1);
        savePet(); updatePetUI();
      }, 60000);
      // iniciar polling de mensajes y mantenimiento
      startGlobalMessagePolling();
    }
    // Lanzar tanto si DOMContentLoaded ya pasó (iframe) como si aún no
    if (document.readyState === 'loading') {
      window.addEventListener('DOMContentLoaded', _bootInit);
    } else {
      _bootInit();
    }

    function executeBootloader() {
      const bar = document.getElementById('boot-bar');
      if (!bar) { showAuthScreen(); return; }

      // forzar visibilidad si CSS falla
      setTimeout(() => {
        const bootTitle = document.querySelector('.boot-title');
        const bootSub   = document.querySelector('.boot-subtitle');
        const bootBarC  = document.querySelector('.boot-bar-container');
        if (bootTitle) bootTitle.style.opacity = '1';
        if (bootSub)   bootSub.style.opacity   = '1';
        if (bootBarC)  bootBarC.style.opacity  = '1';
      }, 2500);

      // safety net: forzar auth si no termina en 8s
      const safetyTimer = setTimeout(() => {
        const bootloader = document.getElementById('bootloader');
        if (bootloader && bootloader.style.display !== 'none') {
          bootloader.style.display = 'none';
          showAuthScreen();
        }
      }, 8000);

      let progress = 0;
      // inicio rápido
      setTimeout(() => {
        const interval = setInterval(() => {
          progress += Math.floor(Math.random()*10)+4;
          if (progress >= 100) {
            progress = 100; clearInterval(interval);
            clearTimeout(safetyTimer);
            setTimeout(() => {
              const bootloader = document.getElementById('bootloader');
              if (bootloader) bootloader.style.opacity = '0';
              setTimeout(() => {
                if (bootloader) bootloader.style.display = 'none';
                showAuthScreen();
              }, 800);
            }, 300);
          }
          bar.style.width = progress + '%';
        }, 70);
      }, 100);
    }


    function showAuthScreen() {
      const s = document.getElementById('auth-screen');
      s.style.display = 'flex'; s.classList.remove('hide');
      document.getElementById('auth-user').focus();
    }
    function setAuthMode(mode) {
      authMode = mode;
      document.getElementById('auth-title').textContent = t('auth_welcome');
      document.getElementById('auth-sub').textContent = mode === 'login' ? t('auth_login_sub') : t('auth_register_sub');
      document.getElementById('auth-submit').textContent = mode === 'login' ? t('auth_submit_login') : t('auth_submit_register');
      document.getElementById('auth-switch-text').textContent = mode === 'login' ? t('auth_switch_no_account') : t('auth_switch_have_account');
      document.getElementById('auth-switch-link').textContent = mode === 'login' ? t('auth_switch_create') : t('auth_switch_login');
      document.getElementById('auth-error').textContent = '';
      const bwrap = document.getElementById('auth-birthday-wrap');
      if (bwrap) bwrap.style.display = mode === 'register' ? 'block' : 'none';
    }
    function toggleAuthMode() { setAuthMode(authMode === 'login' ? 'register' : 'login'); }
    function submitAuth() {
      const user = document.getElementById('auth-user').value.trim();
      const pass = document.getElementById('auth-pass').value;
      const err = document.getElementById('auth-error');
      err.textContent = '';
      if (!user || !pass) { err.textContent = currentLang==='en'?'Please fill in all fields.':'Completa todos los campos.'; return; }
      const users = JSON.parse(localStorage.getItem('capios_users') || '{}');
      if (authMode === 'register') {
        if (users[user]) { err.textContent = currentLang==='en'?'That username already exists.':'Ese usuario ya existe.'; return; }
        users[user] = { pass }; localStorage.setItem('capios_users', JSON.stringify(users));
        loginUser(user);
      } else {
        if (!users[user] || users[user].pass !== pass) { err.textContent = currentLang==='en'?'Incorrect credentials.':'Credenciales incorrectas.'; return; }
        loginUser(user);
      }
    }
    async function loginUser(name) {
      // verificar ban antes de login
      try {
        const banRes = await window.storage.get('ban:' + name.toLowerCase(), true);
        if (banRes && banRes.value === 'true') {
          const err = document.getElementById('auth-error');
          if (err) err.textContent = currentLang==='en'?'🚫 Your account is suspended. Contact an administrator.':'🚫 Tu cuenta está suspendida. Contacta al administrador.';
          return;
        }
      } catch(e) {}
      currentUser = name;
      localStorage.setItem('capios_current_user', name);
      // cargar stats del usuario
      gems = parseInt(localStorage.getItem('capios_gems_' + name) || '0');
      unlockedWallpapers = JSON.parse(localStorage.getItem('capios_unlocked_wp_' + name) || '[]');
      unlockedThemes = JSON.parse(localStorage.getItem('capios_unlocked_themes_' + name) || '[]');
      // cargar stats de apps
      appStats = JSON.parse(localStorage.getItem('capios_app_stats_' + name) || '{}');
      // cargar notas del usuario
      notes = JSON.parse(localStorage.getItem('capios_notes_' + name) || '[]');
      // cargar mascota del usuario
      try { petStats = JSON.parse(localStorage.getItem('capios_pet_' + name) || '{"hunger":100,"happy":100,"energy":100}'); } catch(e) {}
      // cargar avatar del usuario
      // (avatar functions read from localStorage directly, update them to be user-prefixed)
      updateGemDisplay();
      document.getElementById('lock-user').textContent = '@' + name;
      const su = document.getElementById('settings-user'); if (su) su.textContent = '@' + name;
      const np = document.getElementById('notif-profile-name'); if (np) np.textContent = '@' + name;
      syncAvatarAll();
      if (authMode === 'register') {
        const bd = document.getElementById('auth-bday-day'); const bm = document.getElementById('auth-bday-month');
        if (bd && bm && bd.value && bm.value) {
          const users = JSON.parse(localStorage.getItem('capios_users') || '{}');
          if (users[name]) { users[name].birthday = {day:+bd.value,month:+bm.value}; localStorage.setItem('capios_users', JSON.stringify(users)); }
        }
      }
      // guardar puntaje en ranking
      lbSaveMyScore();
      // iniciar heartbeat
      heartbeat();
      setInterval(heartbeat, 30000);
      // verificar multiplicador de evento
      checkEventMultiplier();
      setInterval(checkEventMultiplier, 30000);
      const auth = document.getElementById('auth-screen');
      auth.classList.add('hide');
      setTimeout(() => { auth.style.display = 'none'; showLockScreen(); }, 500);
    }
    function logoutUser() {
      document.getElementById('control-panel').classList.remove('open');
      document.getElementById('desktop').style.display = 'none';
      document.getElementById('lockscreen').style.display = 'none';
      currentUser = null; invalidateAvatarCache();
      localStorage.removeItem('capios_current_user');
      document.getElementById('auth-user').value = '';
      document.getElementById('auth-pass').value = '';
      setAuthMode('login'); showAuthScreen();
    }

    function confirmDeleteAccount() {
      const overlay = document.createElement('div');
      overlay.id = 'delete-account-overlay';
      overlay.style.cssText = 'position:fixed;inset:0;z-index:99999;background:rgba(0,0,0,0.75);backdrop-filter:blur(10px);display:flex;align-items:center;justify-content:center;';
      overlay.innerHTML = `
        <div style="background:rgba(18,15,25,0.97);border:1px solid rgba(255,55,55,0.35);border-radius:24px;padding:32px 28px;max-width:340px;width:92%;text-align:center;box-shadow:0 30px 80px rgba(0,0,0,0.7),0 0 40px rgba(255,55,55,0.1);animation:popIn 0.4s var(--bouncy);">
          <div style="font-size:52px;margin-bottom:10px;">🗑️</div>
          <div style="font-size:18px;font-weight:800;color:#ef4444;margin-bottom:8px;">¿Borrar tu cuenta?</div>
          <div style="font-size:12px;color:var(--text-muted);line-height:1.6;margin-bottom:20px;">
            Esta acción es <strong style="color:#ef4444;">permanente e irreversible</strong>.<br>
            Se eliminarán tus gemas, wallpapers, amigos y todos tus datos.
          </div>
          <div style="margin-bottom:14px;">
            <div style="font-size:11px;color:var(--text-muted);margin-bottom:6px;text-align:left;">Escribe tu usuario para confirmar:</div>
            <input id="delete-confirm-input" type="text" placeholder="Tu nombre de usuario"
              style="width:100%;background:rgba(0,0,0,0.4);border:1px solid rgba(255,55,55,0.4);padding:10px 12px;border-radius:12px;color:#fff;font-size:13px;outline:none;font-family:inherit;">
          </div>
          <div style="display:flex;gap:10px;">
            <button onclick="document.getElementById('delete-account-overlay').remove()"
              style="flex:1;background:rgba(255,255,255,0.06);border:1px solid var(--border-glass);color:var(--text-main);padding:11px;border-radius:12px;cursor:pointer;font-size:13px;font-weight:700;font-family:inherit;">
              Cancelar
            </button>
            <button onclick="executeDeleteAccount()"
              style="flex:1;background:linear-gradient(120deg,rgba(255,55,55,0.8),rgba(180,0,0,0.8));border:1px solid rgba(255,55,55,0.5);color:#fff;padding:11px;border-radius:12px;cursor:pointer;font-size:13px;font-weight:800;font-family:inherit;">
              🗑️ Borrar cuenta
            </button>
          </div>
          <div id="delete-confirm-err" style="color:#ef4444;font-size:11px;margin-top:8px;min-height:14px;"></div>
        </div>`;
      document.body.appendChild(overlay);
      setTimeout(() => document.getElementById('delete-confirm-input').focus(), 100);
    }

    async function executeDeleteAccount() {
      const input = document.getElementById('delete-confirm-input');
      const err = document.getElementById('delete-confirm-err');
      if (!input) return;
      const typed = input.value.trim().toLowerCase();
      if (typed !== currentUser.toLowerCase()) {
        err.textContent = currentLang==='en'?'❌ Username does not match. Try again.':'❌ El usuario no coincide. Inténtalo de nuevo.';
        input.style.borderColor = 'rgba(255,55,55,0.8)';
        return;
      }
      err.textContent = currentLang==='en'?'Deleting account...':'Borrando cuenta...';
      // eliminar de usuarios locales
      const users = JSON.parse(localStorage.getItem('capios_users') || '{}');
      delete users[currentUser];
      localStorage.setItem('capios_users', JSON.stringify(users));
      // eliminar datos de amigos en cloud
      try { await window.storage.delete('friends:' + currentUser, true); } catch(e) {}
      // eliminar de presencia
      try {
        const r = await window.storage.get('presence', true);
        if (r && r.value) {
          const online = JSON.parse(r.value).filter(u => u.user !== currentUser);
          await window.storage.set('presence', JSON.stringify(online), true);
        }
      } catch(e) {}
      // eliminar datos locales
      // eliminar claves del usuario
      const userKeys = ['capios_gems_', 'capios_unlocked_wp_', 'capios_unlocked_themes_', 'capios_app_stats_', 'capios_notes_', 'capios_pet_', 'capios_avatar_base_', 'capios_avatar_acc_', 'capios_avatar_photo_', 'capios_bday_'];
      userKeys.forEach(k => localStorage.removeItem(k + currentUser));
      localStorage.removeItem('capios_current_user');
      // limpieza legacy
      ['capios_gems','capios_unlocked_wp','capios_unlocked_themes','capios_avatar','capios_avatar_base','capios_avatar_acc','capios_avatar_photo','capios_bday','capios_pet','capios_notes'].forEach(k => localStorage.removeItem(k));
      document.getElementById('delete-account-overlay').remove();
      showToast('Cuenta eliminada', 'Tu cuenta ha sido borrada correctamente 👋');
      setTimeout(() => logoutUser(), 1200);
    }


    function showLockScreen() {
      const lock = document.getElementById('lockscreen');
      lock.style.display = 'flex'; lock.classList.remove('hide'); updateLockClock();
    }
    function updateLockClock() {
      const d = new Date();
      const hh = String(d.getHours()).padStart(2,'0');
      const mm = String(d.getMinutes()).padStart(2,'0');
      const lc = document.getElementById('lock-clock'); const ld = document.getElementById('lock-date');
      if (lc) lc.textContent = `${hh}:${mm}`;
      if (ld) ld.textContent = d.toLocaleDateString(currentLang==='en'?'en-US':'es-ES', { weekday:'long', day:'numeric', month:'long' });
    }
    setInterval(updateLockClock, 10000);
    function unlockSystem() {
      dailyTaskEvent('unlock_screen');
      const lock = document.getElementById('lockscreen');
      lock.classList.add('hide');
      const desktop = document.getElementById('desktop');
      desktop.style.display = 'block';
      // mover ventanas a #desktop
      document.querySelectorAll('.window').forEach(win => {
        if (win.parentElement !== desktop) {
          const rect = win.getBoundingClientRect();
          desktop.appendChild(win);
        }
      });
      setTimeout(() => {
        lock.style.display = 'none';
        showToast("Sistema Listo", "Bienvenido a Capibara OS 4.0");
        addXP(10); updateNotifProfileBar(); checkBirthday(); updateBdayDisplay();
      }, 600);
    }
    function lockSystem() {
      document.getElementById('control-panel').classList.remove('open');
      const lock = document.getElementById('lockscreen');
      lock.style.display = 'flex'; updateLockClock();
      requestAnimationFrame(() => lock.classList.remove('hide'));
    }


    function initClock() {
      updateTaskbarClock();
      let _lastClockSec = '';
      setInterval(() => {
        const d = new Date();
        const timeStr = d.toTimeString().split(' ')[0];
        if (timeStr !== _lastClockSec) {
          _lastClockSec = timeStr;
          const el = document.getElementById('clock');
          if (el) el.innerHTML = `<i class="fa-regular fa-clock"></i> ${timeStr}`;
          updateTaskbarClock();
        }
      }, 1000);
      setInterval(() => { addGems(5); showToast("¡Gemas Recibidas!", "+5 gemas por seguir aquí."); }, 120000);
    }
    function addGems(a, silent) {
      // aplicar multiplicador x2 si activo
      const mult = window._activeEventMult || 1;
      const total = Math.round(a * mult);
      gems += total; if (currentUser) localStorage.setItem('capios_gems_' + currentUser, gems); updateGemDisplay();
      if (!silent) {
        const d = document.getElementById('gem-display');
        if (d) { d.classList.add('pop'); setTimeout(() => d.classList.remove('pop'), 400); }
      }
      // flying gem
      const rect = d.getBoundingClientRect();
      const fly = document.createElement('div'); fly.className = 'gem-pop-fly';
      fly.textContent = '+' + total + (mult > 1 ? ' 💎 x'+mult+'!' : ' 💎');
      fly.style.left = (rect.left + rect.width/2 - 20) + 'px';
      fly.style.top = (rect.top - 8) + 'px';
      document.body.appendChild(fly);
      setTimeout(() => fly.remove(), 1000);
      // refresh leaderboard if open
      const lb = document.getElementById('app-leaderboard');
      if (lb && lb.style.display === 'flex') renderLeaderboard();
      // actualizar puntaje en ranking
      lbSaveMyScore();
    }

    function getBonusState() {
      const now = Date.now();
      const key = 'capios_bonus_' + (currentUser || 'guest');
      let b = JSON.parse(localStorage.getItem(key) || '{"t":0,"c":0}');
      if (now - b.t > 86400000) b = { t: now, c: 0 };
      return b;
    }
    function claimBonus() {
      const b = getBonusState(); const now = Date.now();
      const key = 'capios_bonus_' + (currentUser || 'guest');
      if (b.c >= 3) {
        const left = 86400000 - (now - b.t);
        const h = Math.floor(left/3600000), m = Math.floor((left%3600000)/60000);
        showToast(t('bonus_used'), `${t('bonus_come_back')} ${h}h ${m}m`);
        return;
      }
      if (b.c === 0) b.t = now;
      b.c++;
      localStorage.setItem(key, JSON.stringify(b));
      addGems(10); addXP(15);
      showToast(t('bonus_title'), `+10 ${t('bonus_gems')} 💎 · ${3 - b.c} ${t('bonus_remaining')}`, 'gems');
      updateBonusUI();
    }
    function updateBonusUI() {
      const b = getBonusState();
      const left = Math.max(0, 3 - b.c);
      const el = document.getElementById('bonus-left'); if (el) el.textContent = left;
      const tile = document.getElementById('cp-bonus'); if (tile) tile.classList.toggle('disabled', left === 0);
    }
    function updateGemDisplay() {
      const el = document.getElementById('gem-count'); if (el) el.innerText = gems;
      const sg = document.getElementById('settings-gems'); if (sg) sg.innerText = gems;
    }


    function findWp(id) { return WALLPAPERS.find(w => w.id === id); }
    function initWallpaper() {
      const savedId = localStorage.getItem('capios_current_wp_id');
      const w = (savedId && findWp(savedId)) || WALLPAPERS[0];
      renderWallpaper(w);
    }
    function renderWallpaper(w) {
      dailyTaskEvent('change_wallpaper');
      const c = document.getElementById('wallpaper-container'); c.innerHTML = '';
      const shim = document.createElement('div'); shim.className = 'media-shimmer';
      c.appendChild(shim);
      let el;
      if (w.type === 'video') {
        el = document.createElement('video');
        el.src = w.url; el.autoplay = true; el.muted = cpState.mute || !cpState.sound; el.loop = true; el.playsInline = true;
        el.addEventListener('loadeddata', () => { shim.classList.add('gone'); setTimeout(()=>shim.remove(), 500); });
        el.addEventListener('error', () => { showWpFallback(c, shim); });
      } else {
        el = document.createElement('img'); el.src = w.url;
        const _clearShim = () => { shim.classList.add('gone'); setTimeout(()=>shim.remove(), 500); };
        el.addEventListener('load', _clearShim);
        el.addEventListener('error', () => { showWpFallback(c, shim); });
        if (el.complete && el.naturalWidth) _clearShim();
        else if (el.complete && !el.naturalWidth) showWpFallback(c, shim);
      }
      el.className = 'wp-media';
      c.appendChild(el);
      setTimeout(() => shim.remove(), 4000);
      localStorage.setItem('capios_current_wp_id', w.id);
    }
    function showWpFallback(container, shim) {
      if (shim) { shim.classList.add('gone'); setTimeout(()=>shim.remove(), 500); }
      container.innerHTML = '';
      container.style.background = 'linear-gradient(135deg, #0f0c29, #302b63, #24243e)';
      container.style.minHeight = '100vh';
    }


    function toggleControlPanel(e) { e.stopPropagation(); document.getElementById('control-panel').classList.toggle('open'); }
    function cpToggle(key) {
      cpState[key] = !cpState[key];
      document.getElementById('cp-'+key).classList.toggle('on', cpState[key]);
      const sw = document.getElementById('sw-'+key); if (sw) sw.classList.toggle('on', cpState[key]);
      showToast("Control Panel", `${key.toUpperCase()}: ${cpState[key] ? 'ON' : 'OFF'}`);
    }
    function cpToggleMute() {
      cpState.mute = !cpState.mute;
      const tile = document.getElementById('cp-mute');
      tile.classList.toggle('on', cpState.mute);
      tile.querySelector('i').className = cpState.mute ? 'fa-solid fa-volume-xmark' : 'fa-solid fa-volume-high';
      const v = document.querySelector('#wallpaper-container video');
      if (v) v.muted = cpState.mute;
    }
    function cpBrightness(v) {
      document.getElementById('cp-bright-val').textContent = v+'%';
      const m = document.querySelector('.wp-media');
      if (m) m.style.filter = `brightness(${v}%)`;
    }
    function cpBlur(v) {
      document.getElementById('cp-blur-val').textContent = v+'px';
      const m = document.querySelector('.wp-media');
      if (m) m.style.filter = (m.style.filter||'').replace(/blur\([^)]*\)/,'') + ` blur(${v}px)`;
    }
    function renderColors() {
      const palette = ['#ff9f43','#00f5ff','#e8658a','#4ade80','#a78bfa','#fbbf24','#ff6b6b','#5dade2'];
      const make = (target) => {
        target.innerHTML = '';
        palette.forEach((hex, i) => {
          const d = document.createElement('div');
          d.className = 'cp-color' + (i===0 ? ' active' : '');
          d.style.background = hex;
          d.onclick = () => applyTheme(hex, d);
          target.appendChild(d);
        });
      };
      make(document.getElementById('cp-colors'));
      make(document.getElementById('settings-colors'));
    }


    function openApp(id) {
      const w = document.getElementById('app-'+id);
      const d = document.getElementById('dock-'+id);
      w.classList.remove('minimized');
      w.style.display = 'flex';
      w.classList.remove('opening'); void w.offsetWidth; w.classList.add('opening');
      d.classList.add('active-app');
      document.querySelectorAll('.window').forEach(x => x.style.zIndex='10');
      w.style.zIndex = '110';
      trackAppOpen(id);
      if (id === 'store') renderStore();
      if (id === 'gallery') renderGallery();
      if (id === 'games') initGames();
      if (id === 'notes') renderNotes();
      if (id === 'settings') refreshSettings();
      if (id === 'pet') updatePetUI();
      if (id === 'leaderboard') renderLeaderboard();
      if (id === 'weather') refreshWeather();
      if (id === 'admin') { adminLogout(); setTimeout(() => document.getElementById('admin-pass-input').focus(), 100); }
      if (id === 'chat') startChatPolling();
      // tareas diarias: trackear apps
      if (id === 'games') dailyTaskEvent('open_arcade');
      if (id === 'pet')   dailyTaskEvent('open_pet');
      if (id === 'settings') dailyTaskEvent('open_settings');

      window.dispatchEvent(new CustomEvent('openapp', {detail: id}));}
    function closeApp(id) {
      const w = document.getElementById('app-'+id);
      w.style.display='none';
      w.classList.remove('fullscreen','minimized','opening');
      document.getElementById('dock-'+id).classList.remove('active-app');
    }
    function minimizeApp(id) {
      const w = document.getElementById('app-'+id);
      w.style.display = 'none';
      w.classList.add('minimized');
    }
    function toggleFullscreen(id) {
      document.getElementById('app-'+id).classList.toggle('fullscreen');
    }
    function makeWindowsDraggable() {
      document.querySelectorAll('.window').forEach(win => {
        const h = win.querySelector('.window-header') || win.querySelector('[data-window-drag]') || (win.id === 'app-chat' ? win.querySelector('#chat-sidebar > div:first-child') : null);
        if (!h) return;
        let x=0,y=0,mx=0,my=0;
        h.onmousedown = (e) => {
          if (e.target.closest('button, input, textarea, select, a, .win-btn')) return;
          if (win.classList.contains('fullscreen')) return;
          e.preventDefault(); mx=e.clientX; my=e.clientY;
          (window._allWindows || (window._allWindows = Array.from(document.querySelectorAll('.window')))).forEach(w => w.style.zIndex='10');
          win.style.zIndex='110';
          let _rafDrag = null;
          document.onmousemove = (e) => { e.preventDefault(); x=mx-e.clientX; y=my-e.clientY; mx=e.clientX; my=e.clientY;
            if (!_rafDrag) _rafDrag = requestAnimationFrame(() => { win.style.top=(win.offsetTop-y)+'px'; win.style.left=(win.offsetLeft-x)+'px'; _rafDrag=null; }); };
          document.onmouseup = () => { document.onmousemove=null; document.onmouseup=null; if(_rafDrag){cancelAnimationFrame(_rafDrag);_rafDrag=null;} };
        };
      });
    }


    function initGames() {
      // arcade es iframe srcdoc
    }


    const APPS_DATA = [
    ];

    function switchStoreTab(t) {
      currentStoreTab=t;
      document.getElementById('tab-wp').classList.toggle('active', t==='wp');
      document.getElementById('tab-themes').classList.toggle('active', t==='themes');
      const tabApps = document.getElementById('tab-apps');
      if (tabApps) tabApps.classList.toggle('active', t==='apps');
      renderStore();
    }
    function wpPreviewHTML(w) {
      const media = w.type === 'video'
        ? `<video src="${w.url}" muted loop autoplay playsinline onloadeddata="this.previousElementSibling&&this.previousElementSibling.classList.add('gone')"></video>`
        : `<img src="${w.url}" alt="${w.name}" onload="this.previousElementSibling&&this.previousElementSibling.classList.add('gone')">`;
      return `<div class="media-shimmer"></div>${media}`;
    }
    function renderStore() {
      const grid = document.getElementById('store-grid'); grid.innerHTML='';
      const q = (document.getElementById('store-search')?.value || '').toLowerCase();
      const counter = document.getElementById('store-counter');
      if (currentStoreTab==='wp') {
        const list = WALLPAPERS.filter(w => w.name.toLowerCase().includes(q));
        counter.textContent = `${unlockedWallpapers.length}/${WALLPAPERS.length}`;
        list.forEach((w, i) => {
          const owned = unlockedWallpapers.includes(w.id) || w.price === 0;
          const isCurrent = localStorage.getItem('capios_current_wp_id') === w.id;
          let btn;
          if (isCurrent) btn = `<button class="store-btn owned"><i class="fa-solid fa-check"></i> ${t('store_owned')}</button>`;
          else if (owned) btn = `<button class="store-btn owned" onclick="applyWp('${w.id}')"><i class="fa-solid fa-wand-magic-sparkles"></i> ${t('store_apply')}</button>`;
          else btn = `<button class="store-btn" onclick="buyWp('${w.id}')"><i class="fa-solid fa-gem"></i> ${w.price}</button>`;
          const tag = w.price === 0 ? `<div class="badge-tag" style="color:#4ade80;">Free</div>` : (owned ? '' : `<div class="badge-tag">${w.type.toUpperCase()}</div>`);
          const card = document.createElement('div'); card.className='store-card'; card.style.animationDelay = (i*0.03)+'s';
          card.innerHTML = `<div class="store-card-preview">${wpPreviewHTML(w)}${tag}</div><div class="store-card-title">${w.name}</div>${btn}`;
          grid.appendChild(card);
        });
        if (list.length === 0) grid.innerHTML = '<div class="empty-state"><span class="emoji">🔎</span>' + t('store_no_results') + '</div>';
      } else if (currentStoreTab === 'apps') {
        const list = APPS_DATA.filter(a => a.name.toLowerCase().includes(q));
        counter.textContent = `${list.length} apps`;
        list.forEach((app, i) => {
          const card = document.createElement('div'); card.className='store-card'; card.style.animationDelay = (i*0.04)+'s';
          const iconClass = 'fa-solid';
          card.innerHTML = `
            <div class="store-card-preview" style="background:linear-gradient(150deg,${app.color}22,rgba(0,0,0,0.5));display:flex;align-items:center;justify-content:center;">
              <i class="${iconClass} ${app.icon}" style="font-size:38px;color:${app.color};opacity:0.9;"></i>
            </div>
            <div class="store-card-title">${app.name}</div>
            <div style="font-size:10px;color:var(--text-muted);padding:0 10px 6px;text-align:center;">${app.desc}</div>
            <button class="store-btn" style="background:linear-gradient(90deg,${app.color}88,${app.color}55);border-color:${app.color}66;" onclick="openApp('${app.id}')"><i class="fa-solid fa-rocket"></i> Abrir</button>`;
          grid.appendChild(card);
        });
        if (list.length === 0) grid.innerHTML = '<div class="empty-state"><span class="emoji">🔎</span>' + t('store_no_results') + '</div>';
      } else {
        const list = THEMES_DATA.filter(th => th.name.toLowerCase().includes(q));
        counter.textContent = `${unlockedThemes.length}/${THEMES_DATA.length}`;
        list.forEach((theme, i) => {
          const isUnlocked = unlockedThemes.includes(theme.id);
          let btnHtml = isUnlocked
            ? `<button class="store-btn owned" onclick="applyTheme('${theme.hex}')"><i class="fa-solid fa-check"></i> ${t('store_apply')}</button>`
            : `<button class="store-btn" onclick="buyTheme('${theme.id}', ${theme.price})"><i class="fa-solid fa-gem"></i> ${theme.price}</button>`;
          const card = document.createElement('div'); card.className='store-card'; card.style.animationDelay = (i*0.04)+'s';
          card.innerHTML = `<div class="store-card-preview" style="background:linear-gradient(160deg, ${theme.hex}, rgba(0,0,0,0.4));"><i class="fa-solid fa-palette" style="font-size:32px;color:#fff;opacity:0.85;"></i></div><div class="store-card-title">${theme.name}</div>${btnHtml}`;
          grid.appendChild(card);
        });
      }
    }
    function renderGallery() {
      const grid = document.getElementById('gallery-grid'); grid.innerHTML = '';
      const owned = WALLPAPERS.filter(w => unlockedWallpapers.includes(w.id) || w.price === 0);
      if (owned.length === 0) { grid.innerHTML = '<div class="empty-state"><span class="emoji">🖼️</span>' + t('store_no_wallpapers') + '</div>'; return; }
      owned.forEach((w, i) => {
        const isCurrent = localStorage.getItem('capios_current_wp_id') === w.id;
        const card = document.createElement('div'); card.className='store-card'; card.style.animationDelay = (i*0.03)+'s';
        card.innerHTML = `<div class="store-card-preview">${wpPreviewHTML(w)}</div><div class="store-card-title">${w.name}</div><button class="store-btn ${isCurrent?'owned':''}" onclick="applyWp('${w.id}')">${isCurrent?`<i class="fa-solid fa-check"></i> ${t('store_owned')}`:`<i class="fa-solid fa-wand-magic-sparkles"></i> ${t('store_apply')}`}</button>`;
        grid.appendChild(card);
      });
    }
    function applyWp(id) {
      const w = findWp(id); if (!w) return;
      renderWallpaper(w); renderStore(); renderGallery();
      showToast(t('store_wp_changed'), w.name);
    }
    function buyWp(id) {
      const w = findWp(id); if (!w) return;
      if (gems < w.price) { showToast(t('store_no_gems'), t('store_earn_gems')); return; }
      gems -= w.price; if (currentUser) localStorage.setItem('capios_gems_' + currentUser, gems); updateGemDisplay();
      unlockedWallpapers.push(id); if (currentUser) localStorage.setItem('capios_unlocked_wp_' + currentUser, JSON.stringify(unlockedWallpapers));
      renderWallpaper(w); renderStore(); renderGallery();
      addXP(5);
      showToast(t('store_purchase_ok'), `${w.name} ${t('store_unlocked')} 🎉`, 'app');
    }
    function buyTheme(id, price) {
      if (gems < price) { showToast(t('store_no_gems'), t('store_earn_gems')); return; }
      gems-=price; if (currentUser) localStorage.setItem('capios_gems_' + currentUser, gems);
      unlockedThemes.push(id); if (currentUser) localStorage.setItem('capios_unlocked_themes_' + currentUser, JSON.stringify(unlockedThemes));
      updateGemDisplay();
      const th=THEMES_DATA.find(x=>x.id===id); applyTheme(th.hex);
      renderStore(); showToast(t('store_purchase'), `${t('store_theme')} ${th.name} ${t('store_activated')}.`);
    }
    function applyTheme(hex, el) {
      document.documentElement.style.setProperty('--accent-color', hex);
      document.querySelectorAll('.cp-color').forEach(c => c.classList.remove('active'));
      if (el) el.classList.add('active');
    }


    function switchSettings(p) {
      document.querySelectorAll('.settings-sidebar-btn').forEach(b => b.classList.toggle('active', b.dataset.pane === p));
      document.querySelectorAll('.settings-pane').forEach(el => el.classList.toggle('active', el.id === 'pane-'+p));
      // actualizar preview de acento
      if (p === 'appear') {
        const val = getComputedStyle(document.documentElement).getPropertyValue('--accent-color').trim();
        const el = document.getElementById('settings-color-val');
        if (el) el.textContent = val;
      }
    }
    function refreshSettings() {
      document.getElementById('settings-user').textContent = currentUser ? '@'+currentUser : '—';
      document.getElementById('settings-gems').textContent = gems;
      document.getElementById('settings-wp-count').textContent = `${unlockedWallpapers.length}/${WALLPAPERS.length}`;
      document.getElementById('settings-th-count').textContent = `${unlockedThemes.length}/${THEMES_DATA.length}`;
      document.getElementById('settings-res').textContent = `${window.innerWidth}×${window.innerHeight}`;
      renderAvatarPicker(); renderAppStats(); refreshRankDisplay(); updateSessionTime(); updateBdayDisplay();
      syncAvatarAll();
      document.getElementById('sw-dnd').classList.toggle('on', cpState.dnd);
      document.getElementById('sw-wifi').classList.toggle('on', cpState.wifi);
      document.getElementById('sw-sound').classList.toggle('on', cpState.sound);
      // llenar grilla de colores
      const sc = document.getElementById('settings-colors');
      if (sc && ACCENT_COLORS) {
        sc.innerHTML = '';
        const cur = getComputedStyle(document.documentElement).getPropertyValue('--accent-color').trim();
        ACCENT_COLORS.forEach(c => {
          const s = document.createElement('div');
          s.className = 'color-swatch' + (c === cur ? ' active' : '');
          s.style.background = c;
          s.title = c;
          s.onclick = () => { applyTheme(c); sc.querySelectorAll('.color-swatch').forEach(x => x.classList.remove('active')); s.classList.add('active'); const el = document.getElementById('settings-color-val'); if(el) el.textContent = c; };
          sc.appendChild(s);
        });
        const el = document.getElementById('settings-color-val');
        if (el) el.textContent = cur;
      }
    }
    function toggleSetting(k) {
      cpState[k] = !cpState[k];
      document.getElementById('sw-'+k).classList.toggle('on', cpState[k]);
      const tile = document.getElementById('cp-'+k); if (tile) tile.classList.toggle('on', cpState[k]);
      if (k === 'sound') { const v = document.querySelector('#wallpaper-container video'); if (v) v.muted = !cpState.sound || cpState.mute; }
    }
    function resetAll() {
      if (!confirm(t('reset_confirm'))) return;
      localStorage.clear(); location.reload();
    }


    function renderNotes() {
      const list = document.getElementById('notes-list');
      if (!list) return;
      if (notes.length === 0) { list.innerHTML = '<div class="empty-state"><span class="emoji">📝</span>' + t('notes_empty') + '</div>'; return; }
      list.innerHTML = '';
      notes.forEach((n, i) => {
        const card = document.createElement('div'); card.className = 'note-card';
        card.innerHTML = `<span>${escapeHtml(n)}</span><button class="note-del" onclick="delNote(${i})"><i class="fa-solid fa-trash"></i></button>`;
        list.appendChild(card);
      });
    }
    function addNote() {
      addXP(3);
      const inp = document.getElementById('note-input');
      const v = inp.value.trim(); if (!v) return;
      notes.unshift(v); if (currentUser) localStorage.setItem('capios_notes_' + currentUser, JSON.stringify(notes));
      inp.value = ''; renderNotes();
    }
    function delNote(i) { notes.splice(i,1); if (currentUser) localStorage.setItem('capios_notes_' + currentUser, JSON.stringify(notes)); renderNotes(); }
    function escapeHtml(s) { return s.replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c])); }


    function calc(k) {
      const d = document.getElementById('calc-display');
      if (k === 'C') { calcExpr = ''; d.textContent = '0'; return; }
      if (k === '=') {
        try {
          if (!/^[\d+\-*/().\s]+$/.test(calcExpr)) throw 0;
          const r = Function('"use strict";return ('+calcExpr+')')();
          d.textContent = String(r); calcExpr = String(r);
        } catch { d.textContent = 'Error'; calcExpr = ''; }
        return;
      }
      calcExpr += k;
      d.textContent = calcExpr || '0';
    }


    function savePet() { if (currentUser) localStorage.setItem('capios_pet_' + currentUser, JSON.stringify(petStats)); }
    function updatePetUI() {
      const set = (id, v) => {
        const f = document.getElementById('pet-'+id); const lab = document.getElementById('pet-'+id+'-v');
        if (f) f.style.width = v + '%';
        if (lab) lab.textContent = v + '%';
      };
      set('hunger', petStats.hunger); set('happy', petStats.happy); set('energy', petStats.energy);
      const capi = document.getElementById('pet-capi');
      if (!capi) return;
      const isSad = petStats.happy < 30 || petStats.hunger < 20;
      capi.classList.toggle('sad', isSad);
      // Update SVG expression
      petUpdateExpression(isSad ? 'sad' : petStats.energy < 20 ? 'sleep' : 'normal');
    }

    function petUpdateExpression(mood) {
      const mouth  = document.getElementById('pet-mouth');
      const browL  = document.getElementById('brow-l');
      const browR  = document.getElementById('brow-r');
      const eyeL   = document.getElementById('eye-l');
      const eyeR   = document.getElementById('eye-r');
      const capi   = document.getElementById('pet-capi');
      if (!mouth) return;
      if (mood === 'happy') {
        mouth.setAttribute('d', 'M57 57 Q65 65 73 57');
        if (browL) browL.setAttribute('d', 'M46 29 Q51 26 56 28');
        if (browR) browR.setAttribute('d', 'M74 28 Q79 26 84 29');
        if (eyeL)  eyeL.setAttribute('ry', '7');
        if (eyeR)  eyeR.setAttribute('ry', '7');
        capi && capi.classList.remove('sleep');
      } else if (mood === 'sad') {
        mouth.setAttribute('d', 'M57 61 Q65 57 73 61');
        if (browL) browL.setAttribute('d', 'M46 32 Q51 30 56 33');
        if (browR) browR.setAttribute('d', 'M74 33 Q79 30 84 32');
        capi && capi.classList.remove('sleep');
      } else if (mood === 'sleep') {
        mouth.setAttribute('d', 'M60 58 Q65 61 70 58');
        if (eyeL)  eyeL.setAttribute('ry', '2');
        if (eyeR)  eyeR.setAttribute('ry', '2');
        capi && capi.classList.add('sleep');
      } else {
        mouth.setAttribute('d', 'M60 58 Q65 62 70 58');
        if (browL) browL.setAttribute('d', 'M46 31 Q51 28 56 30');
        if (browR) browR.setAttribute('d', 'M74 30 Q79 28 84 31');
        if (eyeL)  eyeL.setAttribute('ry', '7');
        if (eyeR)  eyeR.setAttribute('ry', '7');
        capi && capi.classList.remove('sleep');
      }
    }

    function petShowBubble(emoji) {
      const b = document.getElementById('pet-bubble');
      if (!b) return;
      b.textContent = emoji;
      b.classList.add('show');
      setTimeout(() => b.classList.remove('show'), 1800);
    }

    function petAction(a) {
      if (a === 'feed')  { petStats.hunger = Math.min(100, petStats.hunger + 30); petShowBubble('😋 +hunger'); showToast('Capi Pet', t('pet_feed_toast')); dailyTaskEvent('feed_pet'); }
      if (a === 'play')  { petStats.happy = Math.min(100, petStats.happy + 25); petStats.energy = Math.max(0, petStats.energy - 10); addGems(1); petShowBubble('🎉 +happy'); showToast('Capi Pet', t('pet_play_toast')); dailyTaskEvent('play_pet'); }
      if (a === 'sleep') { petStats.energy = Math.min(100, petStats.energy + 40); petShowBubble('💤 +energy'); showToast('Capi Pet', 'Zzz... 💤'); }
      savePet(); updatePetUI();
      const capi = document.getElementById('pet-capi');
      if (capi) { capi.classList.remove('happy'); void capi.offsetWidth; capi.classList.add('happy'); }
      petUpdateExpression('happy');
      setTimeout(() => petUpdateExpression('normal'), 800);
    }
    function petInteract() {
      petStats.happy = Math.min(100, petStats.happy + 3); savePet(); updatePetUI();
      const emojis = ['😊','🥰','✨','💛','🌟','🐾'];
      petShowBubble(emojis[Math.floor(Math.random()*emojis.length)]);
      const capi = document.getElementById('pet-capi');
      if (capi) { capi.classList.remove('happy'); void capi.offsetWidth; capi.classList.add('happy'); }
      petUpdateExpression('happy');
      setTimeout(() => petUpdateExpression('normal'), 900);
    }


    const LB_BOTS = [
      { name:'Yumei', gems: 620 }, { name:'Mei', gems: 510 }, { name:'Luma', gems: 430 },
      { name:'Riku', gems: 360 }, { name:'Aiko', gems: 290 }, { name:'Nori', gems: 210 },
      { name:'Sora', gems: 165 }, { name:'Yuki', gems: 120 }, { name:'Hana', gems: 80 }, { name:'Ren', gems: 45 },
    ];

    // guardar gemas en storage compartido
    async function lbSaveMyScore() {
      if (!currentUser) return;
      const freshGems = gems; // use current in-memory value
      try {
        await window.storage.set('lb:' + currentUser, JSON.stringify({ name: currentUser, gems: freshGems, ts: Date.now() }), true);
      } catch(e) {}
    }

    async function renderLeaderboard() {
      // re-leer gemas de localStorage
      const freshGems = gems; // use current in-memory value
      gems = freshGems;
      updateGemDisplay();

      const list = document.getElementById('lb-list');
      list.innerHTML = '<div style="text-align:center;padding:20px;color:var(--text-muted);font-size:13px;">🔄 Cargando ranking...</div>';

      // guardar puntaje propio
      await lbSaveMyScore();

      // cargar puntajes de storage
      let realUsers = [];
      try {
        const keys = await window.storage.list('lb:', true);
        if (keys && keys.keys) {
          for (const key of keys.keys) {
            try {
              const res = await window.storage.get(key, true);
              if (res && res.value) {
                const u = JSON.parse(res.value);
                // solo mostrar puntajes de últimos 30 días
                if (u && u.name && typeof u.gems === 'number' && (Date.now() - (u.ts||0)) < 30*24*3600*1000) {
                  realUsers.push({ name: u.name, gems: u.gems, me: u.name === currentUser });
                }
              }
            } catch(e) {}
          }
        }
      } catch(e) {}

      // Merge: bots fill spots where no real user exists
      // eliminar bots con nombres de usuarios reales
      const realNames = new Set(realUsers.map(u => u.name.toLowerCase()));
      const botsFiltered = LB_BOTS.filter(b => !realNames.has(b.name.toLowerCase()));

      // agregar usuario local si no está en storage
      if (!realUsers.find(u => u.me)) {
        realUsers.push({ name: currentUser || t('lb_you'), gems: freshGems, me: true });
      }

      const all = [...realUsers, ...botsFiltered];
      all.sort((a,b) => b.gems - a.gems);

      list.innerHTML = '';
      all.forEach((u, i) => {
        const r = document.createElement('div'); r.className = 'lb-row' + (u.me ? ' me' : '');
        r.style.animationDelay = (i*0.04) + 's';
        const rc = i < 3 ? `r${i+1}` : '';
        const medal = i===0?'🥇':i===1?'🥈':i===2?'🥉':'';
        const isReal = !LB_BOTS.find(b=>b.name===u.name);
        const realBadge = isReal && !u.me ? '<span style="font-size:9px;background:rgba(80,250,123,0.2);color:#4ade80;padding:1px 5px;border-radius:6px;margin-left:4px;">REAL</span>' : '';
        r.innerHTML = `<div class="lb-rank ${rc}">${medal || (i+1)}</div><div class="lb-name">${u.me?'👑 ':''}${escapeHtml(u.name)}${realBadge}</div><div class="lb-gems"><i class="fa-solid fa-gem"></i> ${u.gems}</div>`;
        list.appendChild(r);
      });
    }


    let _globalMsgPollInterval = null;
    let _lastSeenGlobalMsgId = localStorage.getItem('capios_last_global_msg') || '0';

    async function startGlobalMessagePolling() {
      if (_globalMsgPollInterval) clearInterval(_globalMsgPollInterval);
      await checkGlobalMessages();
      _globalMsgPollInterval = setInterval(checkGlobalMessages, 12000);
    }

    async function checkGlobalMessages() {
      try {
        // verificar mensajes globales
        const res = await window.storage.get('admin:global_msg', true);
        if (res && res.value) {
          const msg = JSON.parse(res.value);
          if (msg && msg.id && msg.id > _lastSeenGlobalMsgId) {
            _lastSeenGlobalMsgId = msg.id;
            localStorage.setItem('capios_last_global_msg', msg.id);
            showToast('📢 ' + (msg.title || 'Mensaje del Admin'), msg.text || '', 'system', 'fa-bullhorn');
            if (msg.urgent) showGlobalMsgModal(msg.title, msg.text);
          }
        }
      } catch(e) {}

      try {
        // verificar modo mantenimiento
        const mres = await window.storage.get('admin:maintenance', true);
        if (mres && mres.value) {
          const mdata = JSON.parse(mres.value);
          const overlay = document.getElementById('admin-maintenance-overlay');
          if (mdata.active && overlay && overlay.style.display !== 'flex') {
            // admin activated maintenance — show overlay to this user
            overlay.style.display = 'flex';
            maintenanceActive = true;
            localStorage.setItem('capios_maintenance', 'true');
          } else if (!mdata.active && overlay && overlay.style.display === 'flex') {
            // admin deactivated — if user is not the admin, hide it
            if (!adminAuthenticated) {
              overlay.style.display = 'none';
              maintenanceActive = false;
              localStorage.setItem('capios_maintenance', 'false');
              showToast('✅ Sistema disponible', 'El mantenimiento ha terminado. ¡Bienvenido de vuelta!', 'system');
            }
          }
        }
      } catch(e) {}
    }

    function showGlobalMsgModal(title, text) {
      let modal = document.getElementById('global-msg-modal');
      if (!modal) {
        modal = document.createElement('div');
        modal.id = 'global-msg-modal';
        modal.style.cssText = 'position:fixed;inset:0;z-index:99998;display:flex;align-items:center;justify-content:center;background:rgba(0,0,0,0.65);backdrop-filter:blur(8px);';
        modal.innerHTML = `<div style="background:rgba(14,15,20,0.97);border:1px solid rgba(255,159,67,0.35);border-radius:20px;padding:32px 28px;max-width:400px;width:90%;text-align:center;box-shadow:0 30px 80px rgba(0,0,0,0.7);animation:popIn 0.4s cubic-bezier(0.34,1.56,0.64,1);">
          <div style="font-size:48px;margin-bottom:12px;">📢</div>
          <div id="gm-title" style="font-size:18px;font-weight:800;color:var(--accent-color);margin-bottom:10px;"></div>
          <div id="gm-text" style="font-size:13px;color:var(--text-muted);line-height:1.6;margin-bottom:20px;white-space:pre-wrap;"></div>
          <button onclick="document.getElementById('global-msg-modal').remove()" style="background:linear-gradient(110deg,var(--accent-color),var(--accent-2));color:#1a1208;border:none;padding:10px 28px;border-radius:12px;font-weight:800;cursor:pointer;font-size:14px;">Entendido ✓</button>
        </div>`;
        document.body.appendChild(modal);
      }
      document.getElementById('gm-title').textContent = title || 'Mensaje del Admin';
      document.getElementById('gm-text').textContent = text || '';
      modal.style.display = 'flex';
    }


    function refreshWeather() {
      const conds = currentLang === 'en' ? [
        { e:'☀️', t:'Sunny', tmin:24, tmax:33 },
        { e:'⛅', t:'Partly cloudy', tmin:18, tmax:26 },
        { e:'🌧️', t:'Rainy', tmin:12, tmax:19 },
        { e:'⛈️', t:'Stormy', tmin:14, tmax:21 },
        { e:'❄️', t:'Snowing', tmin:-3, tmax:4 },
        { e:'🌤️', t:'Clear', tmin:20, tmax:28 },
      ] : [
        { e:'☀️', t:'Soleado', tmin:24, tmax:33 },
        { e:'⛅', t:'Parcialmente nublado', tmin:18, tmax:26 },
        { e:'🌧️', t:'Lluvioso', tmin:12, tmax:19 },
        { e:'⛈️', t:'Tormenta', tmin:14, tmax:21 },
        { e:'❄️', t:'Nevando', tmin:-3, tmax:4 },
        { e:'🌤️', t:'Despejado', tmin:20, tmax:28 },
      ];
      const c = conds[Math.floor(Math.random()*conds.length)];
      const temp = Math.floor(c.tmin + Math.random()*(c.tmax-c.tmin));
      document.getElementById('weather-emoji').textContent = c.e;
      document.getElementById('weather-temp').textContent = temp + '°';
      document.getElementById('weather-city').textContent = (currentUser ? '@'+currentUser+' · ' : '') + c.t;
      document.getElementById('w-hum').textContent = (30 + Math.floor(Math.random()*60)) + '%';
      document.getElementById('w-wind').textContent = (5 + Math.floor(Math.random()*25)) + ' km/h';
      document.getElementById('w-feel').textContent = (temp + (Math.random() > 0.5 ? -2 : 2)) + '°';
      document.getElementById('w-uv').textContent = String(1 + Math.floor(Math.random()*10));
    }


    const CAPI_SCRAMJET = {
      prefix: '/scramjet/',
      files: {
        wasm: '/scram/scramjet.wasm.wasm',
        all: '/scram/scramjet.all.js',
        sync: '/scram/scramjet.sync.js'
      },
      worker: '/sw.js',
      baremuxWorker: '/baremux/worker.js'
    };
    let capiScramjet = null;
    let capiScramjetFrame = null;
    let capiScramjetInit = null;
    let brCurrentUrl = '';
    let brLoadTimer = null;

    function brHomeHtml() {
      return `
        <div style="min-height:100%;font-family:Segoe UI,Arial,sans-serif;background:linear-gradient(145deg,#f8fafc,#e8f3f8);color:#172033;display:flex;align-items:center;justify-content:center;padding:34px;text-align:center;">
          <div style="max-width:620px;">
            <div style="font-size:50px;margin-bottom:10px;">🌐</div>
            <h1 style="font-size:30px;margin:0 0 8px;">CapiBrowser</h1>
            <p style="font-size:14px;line-height:1.6;color:#4b5563;margin:0 0 20px;">Mini navegador integrado. Escribe una URL o una búsqueda arriba.</p>
            <div style="display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:10px;">
              ${[
                ['Google','https://google.com'],
                ['YouTube','https://youtube.com'],
                ['GitHub','https://github.com'],
                ['Wikipedia','https://wikipedia.org'],
                ['Reddit','https://reddit.com'],
                ['Scramjet','https://scramjet.mercurywork.shop/']
              ].map(([name,url]) => `<button onclick="parent.brNavigateFromHome('${url}')" style="border:1px solid #dbe4ef;border-radius:12px;background:#fff;color:#172033;padding:13px 10px;font-weight:800;cursor:pointer;box-shadow:0 8px 22px rgba(15,23,42,.08);">${name}</button>`).join('')}
            </div>
            <p style="font-size:12px;color:#64748b;margin-top:18px;">Si un sitio bloquea iframes, usa el botón de abrir fuera. Scramjet se activa cuando esta web se sirve con /scram/, /baremux/ y sw.js.</p>
          </div>
        </div>`;
    }

    function brShowOverlay(title, text) {
      const overlay = document.getElementById('br-overlay');
      if (!overlay) return;
      document.getElementById('br-overlay-title').textContent = title;
      document.getElementById('br-overlay-text').textContent = text;
      overlay.classList.add('show');
    }

    function brHideOverlay() {
      const overlay = document.getElementById('br-overlay');
      if (overlay) overlay.classList.remove('show');
    }

    function setBrowserProxyStatus(kind, text) {
      const status = document.getElementById('br-status');
      if (!status) return;
      status.className = 'br-status' + (kind ? ' ' + kind : '');
      const label = status.querySelector('span');
      if (label) label.textContent = text;
      if (kind === 'ready') status.title = 'Scramjet proxy activo';
      else if (kind === 'direct') status.title = 'Modo directo dentro de iframe';
      else status.title = 'Scramjet necesita /scram/, /baremux/, sw.js y HTTPS o localhost';
    }

    function loadBrowserScript(src) {
      return new Promise((resolve, reject) => {
        if ([...document.scripts].some((script) => script.src.endsWith(src))) return resolve();
        const script = document.createElement('script');
        script.src = src;
        script.onload = resolve;
        script.onerror = () => reject(new Error('No se pudo cargar ' + src));
        document.head.appendChild(script);
      });
    }

    function brNormalizeInput(value) {
      let u = value.trim();
      if (!u) return '';
      const looksLikeUrl = /^https?:\/\//i.test(u) || /^localhost(:\d+)?(\/|$)/i.test(u) || /^(\d{1,3}\.){3}\d{1,3}(:\d+)?(\/|$)/.test(u) || /^[\w-]+(\.[\w-]+)+(\/|$)/.test(u);
      if (!looksLikeUrl) return 'https://duckduckgo.com/?q=' + encodeURIComponent(u);
      if (!/^https?:\/\//i.test(u)) u = 'https://' + u;
      return u;
    }

    async function brAssetExists(url) {
      try {
        const res = await fetch(url, { method: 'HEAD', cache: 'no-store' });
        return res.ok;
      } catch (_) {
        return false;
      }
    }

    async function ensureScramjetBrowser() {
      if (capiScramjet) return capiScramjet;
      if (capiScramjetInit) return capiScramjetInit;
      capiScramjetInit = (async () => {
        if (!window.isSecureContext || location.protocol === 'file:') {
          throw new Error('Scramjet requiere HTTPS o localhost para registrar Service Workers.');
        }
        if (!('serviceWorker' in navigator)) {
          throw new Error('Este navegador no soporta Service Workers.');
        }
        if (!await brAssetExists(CAPI_SCRAMJET.files.all)) {
          throw new Error('Falta /scram/scramjet.all.js. Sirve los archivos de MercuryWorkshop/scramjet en /scram/.');
        }
        await loadBrowserScript(CAPI_SCRAMJET.files.all);
        if (typeof $scramjetLoadController !== 'function') {
          throw new Error('scramjet.all.js no expuso $scramjetLoadController().');
        }
        const { ScramjetController } = $scramjetLoadController();
        capiScramjet = new ScramjetController({
          prefix: CAPI_SCRAMJET.prefix,
          files: CAPI_SCRAMJET.files
        });
        await capiScramjet.init();
        await navigator.serviceWorker.register(CAPI_SCRAMJET.worker);
        if (window.BareMux && await brAssetExists(CAPI_SCRAMJET.baremuxWorker)) {
          try {
            const connection = new BareMux.BareMuxConnection(CAPI_SCRAMJET.baremuxWorker);
            if (window.EpoxyTransport && typeof connection.setTransport === 'function') {
              await connection.setTransport('/epoxy/index.mjs', [{ wisp: location.origin.replace(/^http/, 'ws') + '/wisp/' }]);
            }
          } catch (err) {
            console.warn('[CapiBrowser] BareMux no pudo inicializar transporte:', err);
          }
        }
        if (typeof capiScramjet.createFrame === 'function' && !capiScramjetFrame) {
          const frame = document.getElementById('br-frame');
          capiScramjetFrame = capiScramjet.createFrame(frame);
        }
        setBrowserProxyStatus('ready', 'Scramjet');
        return capiScramjet;
      })();
      return capiScramjetInit;
    }

    function brSetFrameUrl(url) {
      const frame = document.getElementById('br-frame');
      brHideOverlay();
      clearTimeout(brLoadTimer);
      brLoadTimer = setTimeout(() => {
        if (!capiScramjet) {
          brShowOverlay(
            'El sitio puede bloquear iframes',
            'CapiBrowser está funcionando, pero muchos sitios no permiten verse dentro de otro sitio sin Scramjet. Abre fuera o sirve Capibara OS con Scramjet real.'
          );
        }
      }, 4500);
      frame.onload = () => {
        clearTimeout(brLoadTimer);
        brHideOverlay();
      };
      frame.onerror = () => {
        clearTimeout(brLoadTimer);
        brShowOverlay('No se pudo cargar', 'Prueba otra URL o abre la página fuera del mini navegador.');
      };
      frame.srcdoc = '';
      frame.src = url;
    }

    async function brGo() {
      let u = brNormalizeInput(document.getElementById('br-url').value);
      if (!u) return;
      brCurrentUrl = u;
      document.getElementById('br-url').value = u;
      try {
        const scramjet = await ensureScramjetBrowser();
        if (capiScramjetFrame && typeof capiScramjetFrame.navigate === 'function') {
          capiScramjetFrame.navigate(u);
        } else if (typeof scramjet.encodeUrl === 'function') {
          brSetFrameUrl(scramjet.encodeUrl(u));
        } else {
          brSetFrameUrl(CAPI_SCRAMJET.prefix + encodeURIComponent(u));
        }
      } catch (err) {
        console.warn('[CapiBrowser] Scramjet no disponible:', err);
        setBrowserProxyStatus(location.protocol === 'file:' ? 'direct' : 'warn', 'Directo');
        brSetFrameUrl(u);
      }
    }

    function brBack() {
      const frame = document.getElementById('br-frame');
      try { frame.contentWindow.history.back(); } catch (_) {}
    }

    function brForward() {
      const frame = document.getElementById('br-frame');
      try { frame.contentWindow.history.forward(); } catch (_) {}
    }

    function brReload() {
      const frame = document.getElementById('br-frame');
      if (brCurrentUrl) brSetFrameUrl(frame.src || brCurrentUrl);
      else brHome();
    }

    function brHome() {
      brCurrentUrl = '';
      clearTimeout(brLoadTimer);
      document.getElementById('br-url').value = '';
      document.getElementById('br-frame').removeAttribute('src');
      document.getElementById('br-frame').srcdoc = brHomeHtml();
      brHideOverlay();
      setBrowserProxyStatus(location.protocol === 'file:' ? 'direct' : 'warn', location.protocol === 'file:' ? 'Directo' : 'Proxy');
    }

    function brNavigateFromHome(url) {
      document.getElementById('br-url').value = url;
      brGo();
    }

    function brOpenExternal() {
      const u = brCurrentUrl || brNormalizeInput(document.getElementById('br-url').value);
      if (u) window.open(u, '_blank', 'noopener,noreferrer');
    }

    setTimeout(brHome, 0);


    function attachRipples() {
      document.addEventListener('pointerdown', (e) => {
        const t = e.target.closest('button, .cp-tile, .dock-icon, .store-card, .lb-row');
        if (!t) return;
        const rect = t.getBoundingClientRect();
        const r = document.createElement('span'); r.className = 'rp';
        const size = Math.max(rect.width, rect.height);
        r.style.width = r.style.height = size + 'px';
        r.style.left = (e.clientX - rect.left - size/2) + 'px';
        r.style.top = (e.clientY - rect.top - size/2) + 'px';
        const prev = getComputedStyle(t).position;
        if (prev === 'static') t.style.position = 'relative';
        t.style.overflow = 'hidden';
        t.appendChild(r);
        setTimeout(() => r.remove(), 600);
      });
    }


    let notifList = JSON.parse(localStorage.getItem('capios_notifs') || '[]');
    let notifTab = 'all';
    function showToast(title, text, category='system', icon='fa-circle-info') {
      // agregar a notificaciones
      const entry = { id: Date.now(), title, text, category, icon, time: new Date().toLocaleTimeString('es-ES',{hour:'2-digit',minute:'2-digit'}), read: false };
      notifList.unshift(entry);
      if (notifList.length > 60) notifList = notifList.slice(0,60);
      localStorage.setItem('capios_notifs', JSON.stringify(notifList));
      updateNotifBadge();
      renderNotifList();
      if (cpState.dnd) return;
      const c = document.getElementById('notification-center');
      const t = document.createElement('div'); t.className='toast';
      const iconMap = {gems:'fa-gem','system':'fa-circle-info',app:'fa-grid-2',achievement:'fa-trophy',birthday:'fa-cake-candles'};
      const ic = iconMap[category] || icon;
      t.innerHTML = `<i class="fa-solid ${ic}" style="color:var(--accent-color);font-size:18px;flex-shrink:0;"></i><div style="flex:1;"><div style="font-weight:bold;font-size:13px;">${title}</div><div style="font-size:11px;color:var(--text-muted);margin-top:2px;">${text}</div></div><button onclick="this.parentElement.remove()" style="background:none;border:none;color:rgba(255,255,255,0.3);cursor:pointer;padding:2px 4px;font-size:12px;">✕</button>`;
      c.appendChild(t);
      setTimeout(() => t.classList.add('show'), 50);
      setTimeout(() => { t.classList.remove('show'); setTimeout(() => t.remove(), 500); }, 4500);
    }
    function toggleNotifPanel() {
      const p = document.getElementById('notif-panel');
      p.classList.toggle('open');
      if (p.classList.contains('open')) {
        markAllRead();
        updateNotifProfileBar();
      }
    }
    function closeNotifPanel() { document.getElementById('notif-panel').classList.remove('open'); }
    function switchNotifTab(t) {
      notifTab = t;
      ['all','system','gems','app'].forEach(id => {
        document.getElementById('ntab-'+id).classList.toggle('active', id===t);
      });
      renderNotifList();
    }
    function renderNotifList() {
      const list = document.getElementById('notif-list');
      if (!list) return;
      const cats = { gems:['gems'], system:['system','achievement'], app:['app','birthday'] };
      const filtered = notifTab==='all' ? notifList : notifList.filter(n => (cats[notifTab]||[]).includes(n.category));
      if (filtered.length === 0) {
        list.innerHTML = '<div class="notif-empty"><span class="emoji">🔔</span>Sin notificaciones aquí</div>';
        return;
      }
      list.innerHTML = '';
      const iconMap = {gems:'💎',system:'⚙️',app:'📂',achievement:'🏆',birthday:'🎂'};
      filtered.forEach(n => {
        const item = document.createElement('div');
        item.className = 'notif-item ' + (n.read ? 'read' : 'unread');
        item.innerHTML = `<div class="notif-item-icon">${iconMap[n.category]||'🔔'}</div><div class="notif-item-body"><div class="notif-item-title">${n.title}</div><div class="notif-item-text">${n.text}</div><div class="notif-item-time">${n.time}</div></div><button class="notif-item-del" onclick="deleteNotif(${n.id})">✕</button>`;
        item.onclick = (e) => { if (e.target.classList.contains('notif-item-del')) return; n.read=true; item.classList.add('read'); item.classList.remove('unread'); localStorage.setItem('capios_notifs', JSON.stringify(notifList)); };
        list.appendChild(item);
      });
    }
    function deleteNotif(id) {
      notifList = notifList.filter(n => n.id !== id);
      localStorage.setItem('capios_notifs', JSON.stringify(notifList));
      updateNotifBadge(); renderNotifList();
    }
    function clearAllNotifs() {
      notifList = []; localStorage.setItem('capios_notifs', JSON.stringify(notifList));
      updateNotifBadge(); renderNotifList();
    }
    function markAllRead() {
      notifList.forEach(n => n.read = true);
      localStorage.setItem('capios_notifs', JSON.stringify(notifList));
      updateNotifBadge();
    }
    function updateNotifBadge() {
      const unread = notifList.filter(n => !n.read).length;
      const badge = document.getElementById('notif-badge');
      const dot = document.getElementById('notif-dot');
      if (badge) badge.textContent = unread > 0 ? unread : notifList.length;
      if (dot) dot.classList.toggle('visible', unread > 0);
    }


    const RANKS = [
      { min:0,    name:'Capibara Novato',   icon:'', color:'#a4b0be' },
      { min:120,  name:'Capibara Explorador',   icon:'', color:'#fbbf24' },
      { min:350,  name:'Capibara Curioso',  icon:'', color:'#4ade80' },
      { min:640,  name:'Capibara Veterano',    icon:'', color:'#74b9ff' },
      { min:1050, name:'Capibara Élite',    icon:'', color:'#e8658a' },
      { min:2100, name:'Capibara Maestro',  icon:'', color:'#ffd700' },
      { min:4800, name:'Gran Capibara',     icon:'', color:'#ff9f43' },
    ];
    function getXP() { if (!currentUser) return 0; return parseInt(localStorage.getItem('capios_xp_' + currentUser) || '0'); }
    function addXP(amount) {
      const before = getXP();
      const after = before + amount;
      if (currentUser) localStorage.setItem('capios_xp_' + currentUser, after);
      const rb = getRank(before), ra = getRank(after);
      if (rb.name !== ra.name) {
        showToast('¡Subiste de rango!', `Ahora eres ${ra.icon} ${ra.name}`, 'achievement');
        setTimeout(()=>refreshRankDisplay(), 200);
      }
      refreshRankDisplay();
    }
    function getRank(xp) {
      let r = RANKS[0];
      for (const rank of RANKS) { if (xp >= rank.min) r = rank; }
      return r;
    }
    function getNextRank(xp) {
      for (const rank of RANKS) { if (rank.min > xp) return rank; }
      return null;
    }
    function getXPProgress(xp) {
      const cur = getRank(xp); const next = getNextRank(xp);
      if (!next) return { pct: 100, cur: xp, next: 0, nextName: '¡Máximo!' };
      const pct = Math.min(100, Math.round(((xp - cur.min) / (next.min - cur.min)) * 100));
      return { pct, cur: xp - cur.min, next: next.min - cur.min, nextName: next.name };
    }
    function refreshRankDisplay() {
      const xp = getXP(); const rank = getRank(xp); const prog = getXPProgress(xp);
      const level = RANKS.indexOf(rank) + 1;
      // settings
      const rn = document.getElementById('rank-name-display'); if(rn) rn.textContent = rank.icon+' '+rank.name;
      const rl = document.getElementById('rank-level-display'); if(rl) rl.textContent = `Nivel ${level} · ${xp} XP`;
      const rb = document.getElementById('rank-badge-big'); if(rb) rb.textContent = rank.icon;
      const rf = document.getElementById('rank-xp-fill-settings'); if(rf) rf.style.width = prog.pct+'%';
      const rc = document.getElementById('rank-xp-cur'); if(rc) rc.textContent = prog.cur+' /';
      const rnx = document.getElementById('rank-xp-next'); if(rnx) rnx.textContent = prog.next > 0 ? prog.next+' XP para "'+prog.nextName+'"' : '¡Rango máximo!';
      const sb = document.getElementById('settings-rank-badge'); if(sb) sb.innerHTML = `<i class="fa-solid fa-star"></i> ${rank.name} · Nv.${level}`;
      // notif panel
      const np = document.getElementById('notif-profile-rank'); if(np) np.innerHTML = `<i class="fa-solid fa-star"></i> ${rank.name} · Nv.${level}`;
      const nx = document.getElementById('notif-xp-fill'); if(nx) nx.style.width = prog.pct+'%';
    }
    function updateNotifProfileBar() {
      const name = document.getElementById('notif-profile-name');
      if (name && currentUser) name.textContent = '@' + currentUser;
      const ava = document.getElementById('notif-avatar-el');
      if (ava) {
        const _navPhoto = getCustomAvatarPhoto();
        if (_navPhoto) {
          const _navEmoji = ava.querySelector('#notif-avatar-emoji');
          const _navImg = ava.querySelector('#notif-avatar-img');
          if (_navEmoji) _navEmoji.style.display = 'none';
          if (_navImg) { _navImg.style.display = 'block'; _navImg.src = _navPhoto; }
          else ava.innerHTML = '<img src="' + _navPhoto + '" style="width:100%;height:100%;object-fit:cover;border-radius:50%;position:absolute;inset:0;" onerror="this.style.display=&apos;none&apos;">';
        } else {
          const _navEmoji = ava.querySelector('#notif-avatar-emoji');
          const _navImg = ava.querySelector('#notif-avatar-img');
          if (_navEmoji) { _navEmoji.style.display = 'block'; _navEmoji.textContent = getFullAvatar(); }
          if (_navImg) { _navImg.style.display = 'none'; }
          else ava.textContent = getFullAvatar();
        }
      }
      refreshRankDisplay();
    }


    const AVATAR_BASES = ['🦫','🐹','🐻','🐼','🐨','🦊','🐺','🐸','🐧','🦁'];
    const AVATAR_ACCS  = ['','🎩','👑','🌸','⚡','🔥','❄️','🎮','🎸','🌈'];
    const ACC_LABELS   = ['Ninguno','Sombrero','Corona','Flor','Rayo','Fuego','Nieve','Control','Guitarra','Arcoíris'];
    function getAvatarBase() { const k = currentUser ? 'capios_avatar_base_' + currentUser : 'capios_avatar_base'; return localStorage.getItem(k) || '🦫'; }
    function getAvatarAcc()  { const k = currentUser ? 'capios_avatar_acc_' + currentUser : 'capios_avatar_acc'; return localStorage.getItem(k) || ''; }
    let _avatarPhotoCache = null, _avatarPhotoCacheUser = null;
    function getCustomAvatarPhoto() {
      if (_avatarPhotoCacheUser === currentUser && _avatarPhotoCache !== null) return _avatarPhotoCache;
      const k = currentUser ? 'capios_avatar_photo_' + currentUser : 'capios_avatar_photo';
      _avatarPhotoCache = localStorage.getItem(k) || '';
      _avatarPhotoCacheUser = currentUser;
      return _avatarPhotoCache;
    }
    function invalidateAvatarCache() { _avatarPhotoCache = null; _avatarPhotoCacheUser = null; }
    function getFullAvatar() {
      const photo = getCustomAvatarPhoto();
      if (photo) return photo; // base64 photo takes priority
      const b = getAvatarBase(), a = getAvatarAcc();
      return a ? b + a : b;
    }
    function isPhotoAvatar() { return !!getCustomAvatarPhoto(); }

    function handleAvatarUpload(event) {
      const file = event.target.files[0];
      if (!file) return;
      if (!file.type.startsWith('image/')) { showToast('Error', 'Solo se aceptan imágenes'); return; }
      if (file.size > 2 * 1024 * 1024) { showToast('Error', 'La imagen debe ser menor de 2MB'); return; }
      const reader = new FileReader();
      reader.onload = (e) => {
        const dataUrl = e.target.result;
        // redimensionar a 200x200
        const img = new Image();
        img.onload = () => {
          const canvas = document.createElement('canvas');
          const size = 200;
          canvas.width = size; canvas.height = size;
          const ctx = canvas.getContext('2d');
          // recortar al centro
          const minSide = Math.min(img.width, img.height);
          const sx = (img.width - minSide) / 2;
          const sy = (img.height - minSide) / 2;
          ctx.drawImage(img, sx, sy, minSide, minSide, 0, 0, size, size);
          const compressed = canvas.toDataURL('image/jpeg', 0.82);
          const _pk = currentUser ? 'capios_avatar_photo_' + currentUser : 'capios_avatar_photo'; localStorage.setItem(_pk, compressed); invalidateAvatarCache();
          syncAvatarAll();
          renderAvatarPicker();
          showToast('¡Foto actualizada!', 'Tu foto de perfil guardada');
        };
        img.src = dataUrl;
      };
      reader.readAsDataURL(file);
      // resetear input
      event.target.value = '';
    }

    function removeCustomAvatar() {
      const _rk = currentUser ? 'capios_avatar_photo_' + currentUser : 'capios_avatar_photo'; localStorage.removeItem(_rk); invalidateAvatarCache();
      syncAvatarAll();
      renderAvatarPicker();
      showToast('Avatar', 'Foto eliminada, usando emoji');
    }

    function setAvatarBase(e) {
      const _epk = currentUser ? 'capios_avatar_photo_' + currentUser : 'capios_avatar_photo'; localStorage.removeItem(_epk); invalidateAvatarCache(); // switching to emoji removes photo
      const _bk = currentUser ? 'capios_avatar_base_' + currentUser : 'capios_avatar_base'; localStorage.setItem(_bk, e);
      syncAvatarAll(); refreshAvatarPicker();
    }
    function setAvatarAcc(e) {
      const _ak = currentUser ? 'capios_avatar_acc_' + currentUser : 'capios_avatar_acc'; localStorage.setItem(_ak, e);
      syncAvatarAll(); refreshAvatarPicker();
    }

    function syncAvatarAll() {
      const photo = getCustomAvatarPhoto();
      const emojiAv = (() => { const b = getAvatarBase(), a = getAvatarAcc(); return a ? b + a : b; })();

      // aplicar a contenedor de avatar
      function applyToContainer(emojiId, imgId, isPhoto, src, emoji) {
        const emojiEl = document.getElementById(emojiId);
        const imgEl   = document.getElementById(imgId);
        if (!emojiEl || !imgEl) return;
        if (isPhoto) {
          emojiEl.style.display = 'none';
          imgEl.style.display = 'block';
          imgEl.src = src;
        } else {
          emojiEl.style.display = 'block';
          emojiEl.textContent = emoji;
          imgEl.style.display = 'none';
          imgEl.src = '';
        }
      }

      applyToContainer('settings-avatar-emoji','settings-avatar-img', !!photo, photo, emojiAv);
      applyToContainer('notif-avatar-emoji','notif-avatar-img', !!photo, photo, emojiAv);
      applyToContainer('avatar-preview-emoji','avatar-preview-img', !!photo, photo, emojiAv);

      // visibilidad del botón eliminar
      const removeBtn = document.getElementById('avatar-remove-btn');
      if (removeBtn) removeBtn.style.display = photo ? 'inline-flex' : 'none';

      // Emoji-only spots (lockscreen capi, auth capi, pet)
      const la = document.getElementById('lock-capi'); if(la) la.textContent = getAvatarBase();
      const aa = document.getElementById('auth-capi'); if(aa) aa.textContent = getAvatarBase();
      const pa = document.getElementById('pet-capi'); if(pa) pa.textContent = getAvatarBase();
    }

    function renderAvatarPicker() {
      const bg = document.getElementById('avatar-base-grid');
      if (!bg) return;
      bg.innerHTML = '';
      const photo = getCustomAvatarPhoto();
      AVATAR_BASES.forEach(b => {
        const d = document.createElement('div');
        d.className = 'avatar-option' + (!photo && b === getAvatarBase() ? ' selected' : '');
        d.textContent = b; d.onclick = () => setAvatarBase(b);
        bg.appendChild(d);
      });
      // acc grid vacío
      const ag = document.getElementById('avatar-acc-grid');
      if (ag) ag.innerHTML = '';
    }
    function refreshAvatarPicker() {
      const photo = getCustomAvatarPhoto();
      document.querySelectorAll('#avatar-base-grid .avatar-option').forEach((d,i) => {
        d.classList.toggle('selected', !photo && AVATAR_BASES[i] === getAvatarBase());
      });
    }

    // CSS de hover overlay
    document.head.insertAdjacentHTML('beforeend', `<style>
      #avatar-preview-big:hover .avatar-hover-overlay { opacity: 1 !important; }
    </style>`);


    const APP_META = {
      store:{label:'Shop',icon:'🛍️'}, gallery:{label:'Galería',icon:'🖼️'}, games:{label:'Juegos',icon:'🎮'},
      notes:{label:'Notas',icon:'📝'}, pet:{label:'Capi Pet',icon:'🦫'},
      settings:{label:'Ajustes',icon:'⚙️'}, leaderboard:{label:'Ranking',icon:'🏆'},
      weather:{label:'Clima',icon:'🌤️'}, browser:{label:'Browser',icon:'🌐'}, calc:{label:'Calc',icon:'🔢'},
    };
    let appStats = {}; // cargado por usuario al login
    let sessionStart = Date.now();
    function trackAppOpen(id) {
      if (!appStats[id]) appStats[id] = 0;
      appStats[id]++;
      if (currentUser) localStorage.setItem('capios_app_stats_' + currentUser, JSON.stringify(appStats));
      addXP(2);
    }
    function renderAppStats() {
      const el = document.getElementById('settings-app-stats');
      if (!el) return;
      const sorted = Object.entries(appStats).sort((a,b)=>b[1]-a[1]).slice(0,8);
      if (sorted.length === 0) { el.innerHTML = '<div style="font-size:12px;color:var(--text-muted);padding:8px 0;">Aún no has abierto ninguna app.</div>'; return; }
      const max = sorted[0][1];
      el.innerHTML = sorted.map(([id, count]) => {
        const m = APP_META[id] || {label:id,icon:'📂'};
        return `<div class="stats-app-row"><div class="stats-app-icon">${m.icon}</div><div class="stats-app-name">${m.label}</div><div class="stats-app-bar-wrap"><div class="stats-app-bar" style="width:${Math.round((count/max)*100)}%"></div></div><div class="stats-app-count">${count}x</div></div>`;
      }).join('');
    }
    function updateSessionTime() {
      const el = document.getElementById('settings-session-time');
      if (!el) return;
      const mins = Math.floor((Date.now() - sessionStart) / 60000);
      el.textContent = mins < 60 ? mins+'m' : Math.floor(mins/60)+'h '+( mins%60)+'m';
    }


    const MONTHS_ES = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];
    function populateBdaySelects(dayId, monthId) {
      const ds = document.getElementById(dayId); const ms = document.getElementById(monthId);
      if (!ds || !ms) return;
      for (let i=1;i<=31;i++) { const o=document.createElement('option');o.value=i;o.textContent=i;ds.appendChild(o); }
      MONTHS_ES.forEach((m,i)=>{ const o=document.createElement('option');o.value=i+1;o.textContent=m;ms.appendChild(o); });
    }
    function checkBirthday() {
      const bday = getBirthdayForUser();
      if (!bday) return;
      const now = new Date();
      if (bday.day===now.getDate() && bday.month===now.getMonth()+1) {
        const lastShown = localStorage.getItem('capios_bday_shown_'+currentUser);
        const today = now.toDateString();
        if (lastShown === today) return;
        localStorage.setItem('capios_bday_shown_'+currentUser, today);
        setTimeout(()=>launchBirthday(), 2000);
      }
    }
    function getBirthdayForUser() {
      if (!currentUser) return null;
      const users = JSON.parse(localStorage.getItem('capios_users') || '{}');
      return users[currentUser]?.birthday || null;
    }
    function launchBirthday() {
      const overlay = document.getElementById('birthday-overlay');
      const title = document.getElementById('birthday-title');
      const sub = document.getElementById('birthday-sub');
      if(title) title.textContent = `¡Feliz Cumpleaños, @${currentUser}! 🎂`;
      if(sub) sub.textContent = `El capibara y todo Capibara OS te desean un día increíble 🦫🎉\n+50 gemas de regalo por tu cumple 💎`;
      overlay.classList.add('show');
      launchConfetti();
      addGems(50);
      showToast('¡Feliz Cumpleaños!', `+50 gemas de regalo 🎂`, 'birthday');
    }
    function closeBirthday() {
      document.getElementById('birthday-overlay').classList.remove('show');
      clearConfetti();
    }
    function launchConfetti() {
      const colors = ['#ff9f43','#e8658a','#4ade80','#74b9ff','#ffd700','#a78bfa','#ff6b6b'];
      const container = document.getElementById('confetti-container');
      for (let i=0;i<80;i++) {
        const p = document.createElement('div'); p.className='confetti-piece';
        p.style.left = Math.random()*100+'vw';
        p.style.background = colors[Math.floor(Math.random()*colors.length)];
        p.style.animationDuration = (2+Math.random()*4)+'s';
        p.style.animationDelay = (Math.random()*2)+'s';
        p.style.width = (6+Math.random()*8)+'px';
        p.style.height = (8+Math.random()*10)+'px';
        p.style.borderRadius = Math.random()>0.5?'50%':'2px';
        container.appendChild(p);
      }
    }
    function clearConfetti() { document.getElementById('confetti-container').innerHTML=''; }
    function openBirthdaySettings() {
      const wrap = document.getElementById('bday-edit-wrap');
      if (!wrap) return;
      wrap.style.display = wrap.style.display==='none' ? 'block' : 'none';
      populateBdaySelects('settings-bday-day','settings-bday-month');
      const b = getBirthdayForUser();
      if (b) {
        const d=document.getElementById('settings-bday-day'); const m=document.getElementById('settings-bday-month');
        if(d) d.value=b.day; if(m) m.value=b.month;
      }
    }
    function saveBirthdayFromSettings() {
      const d=+document.getElementById('settings-bday-day').value;
      const m=+document.getElementById('settings-bday-month').value;
      if (!d||!m) { showToast('Error','Selecciona día y mes'); return; }
      const users=JSON.parse(localStorage.getItem('capios_users')||'{}');
      if (!users[currentUser]) return;
      users[currentUser].birthday={day:d,month:m};
      localStorage.setItem('capios_users',JSON.stringify(users));
      updateBdayDisplay();
      document.getElementById('bday-edit-wrap').style.display='none';
      showToast('Cumpleaños guardado',`🎂 ${d} de ${MONTHS_ES[m-1]}`);
    }
    function updateBdayDisplay() {
      const el=document.getElementById('settings-bday-display');
      const b=getBirthdayForUser();
      if(el) el.textContent = b ? `🎂 ${b.day} de ${MONTHS_ES[b.month-1]}` : 'Sin cumpleaños guardado';
    }


    function initDesktopIcons() {
      document.querySelectorAll('.desk-icon').forEach(icon => {
        // cargar posición guardada
        const saved = localStorage.getItem('dicon_pos_' + icon.id);
        if (saved) { const p = JSON.parse(saved); icon.style.left = p.x+'px'; icon.style.top = p.y+'px'; }

        let startX, startY, origLeft, origTop, dragging = false, moved = false;
        icon.addEventListener('mousedown', e => {
          if (e.button !== 0) return;
          e.preventDefault();
          startX = e.clientX; startY = e.clientY;
          origLeft = parseInt(icon.style.left)||0; origTop = parseInt(icon.style.top)||0;
          dragging = true; moved = false;
          document.querySelectorAll('.desk-icon').forEach(i => i.classList.remove('selected'));
          icon.classList.add('selected');
        });
        document.addEventListener('mousemove', e => {
          if (!dragging) return;
          const dx = e.clientX - startX, dy = e.clientY - startY;
          if (Math.abs(dx) > 4 || Math.abs(dy) > 4) {
            moved = true;
            icon.classList.add('dragging');
            const area = document.getElementById('desktop-icons');
            const maxX = Math.max(0, (area?.clientWidth || window.innerWidth) - icon.offsetWidth);
            const maxY = Math.max(0, (area?.clientHeight || window.innerHeight) - icon.offsetHeight);
            icon.style.left = Math.max(0, Math.min(maxX, origLeft + dx)) + 'px';
            icon.style.top  = Math.max(0, Math.min(maxY, origTop  + dy)) + 'px';
          }
        });
        document.addEventListener('mouseup', () => {
          if (!dragging) return;
          dragging = false;
          icon.classList.remove('dragging');
          if (moved) {
            localStorage.setItem('dicon_pos_' + icon.id, JSON.stringify({ x: parseInt(icon.style.left), y: parseInt(icon.style.top) }));
          }
        });
      });

      // click en desktop deselecciona
      document.getElementById('desktop').addEventListener('mousedown', e => {
        if (!e.target.closest('.desk-icon') && !e.target.closest('#ctx-menu')) {
          document.querySelectorAll('.desk-icon').forEach(i => i.classList.remove('selected'));
        }
      });
    }


    let iconsVisible = true, widgetsVisible = true;
    function initContextMenu() {
      const menu = document.getElementById('ctx-menu');
      document.getElementById('desktop').addEventListener('contextmenu', e => {
        // no mostrar en ventanas/dock/panel
        if (e.target.closest('.window, .dock-container, #control-panel, #ctx-menu, #spotlight')) return;
        e.preventDefault();
        const x = Math.min(e.clientX, window.innerWidth - 220);
        const y = Math.min(e.clientY, window.innerHeight - 320);
        menu.style.left = x + 'px';
        menu.style.top  = y + 'px';
        menu.style.display = 'block';
      });
      document.addEventListener('mousedown', e => {
        if (!e.target.closest('#ctx-menu')) closeCtxMenu();
      });
      document.addEventListener('keydown', e => {
        if (e.key === 'Escape') { closeCtxMenu(); closeSpotlight(); }
        if ((e.ctrlKey || e.metaKey) && e.code === 'Space') { e.preventDefault(); openSpotlight(); }
      });
    }
    function closeCtxMenu() { document.getElementById('ctx-menu').style.display = 'none'; }
    function ctxChangeWallpaper() {
      closeCtxMenu();
      const free = WALLPAPERS.filter(w => unlockedWallpapers.includes(w.id) || w.price === 0);
      if (free.length === 0) { showToast('Sin wallpapers', 'Desbloquea fondos en la tienda'); return; }
      const next = free[(free.findIndex(w => w.id === localStorage.getItem('capios_current_wp_id')) + 1) % free.length];
      applyWp(next.id); showToast('Fondo cambiado', next.name);
    }
    function ctxNewNote() {
      closeCtxMenu();
      openApp('notes');
      setTimeout(() => { const el = document.getElementById('note-input'); if (el) el.focus(); }, 300);
    }
    function ctxToggleWidgets() {
      closeCtxMenu();
      widgetsVisible = !widgetsVisible;
      ['widget-clock','widget-gems','widget-weather'].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.style.display = widgetsVisible ? 'block' : 'none';
      });
      showToast('Widgets', widgetsVisible ? 'Widgets visibles' : 'Widgets ocultos');
    }
    function ctxToggleIcons() {
      closeCtxMenu();
      iconsVisible = !iconsVisible;
      document.getElementById('desktop-icons').style.opacity = iconsVisible ? '1' : '0';
      document.getElementById('desktop-icons').style.pointerEvents = iconsVisible ? 'all' : 'none';
    }
    function toggleWidget(id) {
      const el = document.getElementById('widget-'+id);
      if (el) el.style.display = 'none';
    }


    function initWidgets() {
      // widgets arrastrables
      document.querySelectorAll('.desk-widget').forEach(w => {
        const id = w.id;
        const saved = localStorage.getItem('widget_pos_'+id);
        if (saved) { const p = JSON.parse(saved); w.style.top = p.top; w.style.right = 'auto'; w.style.left = p.left; }

        let sx, sy, origLeft, origTop, drag = false;
        w.addEventListener('mousedown', e => {
          if (e.target.classList.contains('wid-close')) return;
          e.preventDefault();
          const rect = w.getBoundingClientRect();
          sx = e.clientX; sy = e.clientY;
          origLeft = rect.left; origTop = rect.top;
          drag = true; w.style.right = 'auto'; w.style.left = origLeft+'px'; w.style.top = origTop+'px';
          w.style.zIndex = 500;
        });
        document.addEventListener('mousemove', e => {
          if (!drag) return;
          w.style.left = (origLeft + e.clientX - sx) + 'px';
          w.style.top  = (origTop  + e.clientY - sy) + 'px';
        });
        document.addEventListener('mouseup', () => {
          if (!drag) return; drag = false; w.style.zIndex = '';
          localStorage.setItem('widget_pos_'+id, JSON.stringify({ left: w.style.left, top: w.style.top }));
        });
      });

      // reloj del widget
      function updateWidgetClock() {
        const d = new Date();
        const hh = String(d.getHours()).padStart(2,'0');
        const mm = String(d.getMinutes()).padStart(2,'0');
        const t = document.getElementById('wid-clock-time'); if (t) t.textContent = hh+':'+mm;
        const dt = document.getElementById('wid-clock-date');
        if (dt) dt.textContent = d.toLocaleDateString('es-ES', { day:'numeric', month:'long', year:'numeric' });
        const dy = document.getElementById('wid-clock-day');
        if (dy) dy.textContent = d.toLocaleDateString('es-ES', { weekday:'long' });
      }
      updateWidgetClock();
      setInterval(updateWidgetClock, 10000);

      // init clima del widget
      const conds = currentLang === 'en' ? [
        { e:'☀️', t:'Sunny', tmin:24, tmax:33 }, { e:'⛅', t:'Cloudy', tmin:18, tmax:26 },
        { e:'🌧️', t:'Rainy', tmin:12, tmax:19 }, { e:'🌤️', t:'Clear', tmin:20, tmax:28 },
      ] : [
        { e:'☀️', t:'Soleado', tmin:24, tmax:33 }, { e:'⛅', t:'Nublado', tmin:18, tmax:26 },
        { e:'🌧️', t:'Lluvioso', tmin:12, tmax:19 }, { e:'🌤️', t:'Despejado', tmin:20, tmax:28 },
      ];
      const c = conds[Math.floor(Math.random()*conds.length)];
      const temp = Math.floor(c.tmin + Math.random()*(c.tmax-c.tmin));
      const wi = document.getElementById('wid-weather-icon'); if (wi) wi.textContent = c.e;
      const wt = document.getElementById('wid-weather-temp'); if (wt) wt.textContent = temp+'°';
      const wc = document.getElementById('wid-weather-cond'); if (wc) wc.textContent = c.t;

      // actualizar gemas del widget
      function updateWidgetGems() {
        const el = document.getElementById('wid-gem-count'); if (el) el.textContent = gems;
      }
      updateWidgetGems();
      setInterval(updateWidgetGems, 10000);
    }


    let spotlightFocusIdx = -1;

    function getSpotlightApps() {
      return currentLang === 'en' ? [
        { id:'store',      label:'Capibara Shop',    sub:'Fondos y temas',      icon:'🛍️',  type:'app' },
        { id:'gallery',    label:'Gallery',           sub:'Tus fondos',          icon:'🖼️',  type:'app' },
        { id:'games',      label:'Games',             sub:'Juegos de Capibara',           icon:'🎮',  type:'app' },
        { id:'leaderboard',label:'Ranking',           sub:'Los mejores',            icon:'🏆',  type:'app' },
        { id:'weather',    label:'Weather',           sub:'Pronóstico',         icon:'🌤️', type:'app' },
        { id:'browser',    label:'CapiBrowser',       sub:'Navegador',           icon:'🌐',  type:'app' },
        { id:'pet',        label:'Capi Pet',          sub:'Tu mascota',         icon:'🦫',  type:'app' },
        { id:'notes',      label:'Notes',             sub:'Tus notas',               icon:'📝',  type:'app' },
        { id:'calc',       label:'Calculator',        sub:'Calculadora',               icon:'🔢',  type:'app' },
        { id:'settings',   label:'Settings',          sub:'Configuración',         icon:'⚙️',  type:'app' },
        { id:'music',      label:'Capi Music', sub: currentLang==='en' ? 'Music player' : 'Reproductor de música', icon:'🎵', type:'app' },
        { id:'draw',       label:'Capi Draw', sub: currentLang==='en' ? 'Paint and draw' : 'Pintar y dibujar', icon:'🎨', type:'app' },
        { id:'calendar',   label: currentLang==='en' ? 'Calendar' : 'Calendario', sub: currentLang==='en' ? 'Calendar & events' : 'Calendario y eventos', icon:'📅', type:'app' },
        { id:'todo',       label: currentLang==='en' ? 'Tasks' : 'Tareas', sub: currentLang==='en' ? 'Task manager' : 'Gestor de tareas', icon:'✅', type:'app' },
        { id:'timer',      label:'Pomodoro', sub: currentLang==='en' ? 'Focus timer' : 'Temporizador de enfoque', icon:'⏱️', type:'app' },
      ] : [
        { id:'store',      label:'Capibara Shop',    sub:'Fondos y temas',    icon:'🛍️',  type:'app' },
        { id:'gallery',    label:'Galería',           sub:'Tus fondos',        icon:'🖼️',  type:'app' },
        { id:'games',      label:'Juegos',            sub:'Juegos de Capibara',        icon:'🎮',  type:'app' },
        { id:'leaderboard',label:'Ranking',           sub:'Los mejores',         icon:'🏆',  type:'app' },
        { id:'weather',    label:'Clima',             sub:'Pronóstico', icon:'🌤️', type:'app' },
        { id:'browser',    label:'CapiBrowser',       sub:'Navegador',         icon:'🌐',  type:'app' },
        { id:'pet',        label:'Capi Pet',          sub:'Tu mascota',    icon:'🦫',  type:'app' },
        { id:'notes',      label:'Notas',             sub:'Tus notas',           icon:'📝',  type:'app' },
        { id:'calc',       label:'Calculadora',       sub:'Calculadora',   icon:'🔢',  type:'app' },
        { id:'settings',   label:'Ajustes',           sub:'Configuración',  icon:'⚙️',  type:'app' },
      ];
    }

    function getSpotlightCmds() {
      return currentLang === 'en' ? [
        { label:'Change wallpaper',    sub:'Next unlocked wallpaper',       icon:'🖼️',  action:()=>{ ctxChangeWallpaper(); closeSpotlight(); } },
        { label:'Claim bonus',         sub:'+10 gems available',            icon:'🎁',  action:()=>{ claimBonus(); closeSpotlight(); } },
        { label:'Lock screen',         sub:'Go to lock screen',             icon:'🔒',  action:()=>{ lockSystem(); closeSpotlight(); } },
        { label:'Control panel',       sub:'Open quick settings',           icon:'🎛️', action:()=>{ document.getElementById('control-panel').classList.add('open'); closeSpotlight(); } },
        { label:'Notifications',       sub:'Open side panel',               icon:'🔔',  action:()=>{ toggleNotifPanel(); closeSpotlight(); } },
      ] : [
        { label:'Cambiar wallpaper',   sub:'Siguiente fondo desbloqueado',  icon:'🖼️',  action:()=>{ ctxChangeWallpaper(); closeSpotlight(); } },
        { label:'Reclamar bonus',      sub:'+10 gemas disponibles',         icon:'🎁',  action:()=>{ claimBonus(); closeSpotlight(); } },
        { label:'Bloquear pantalla',   sub:'Ir a pantalla de bloqueo',      icon:'🔒',  action:()=>{ lockSystem(); closeSpotlight(); } },
        { label:'Panel de control',    sub:'Abrir configuración rápida',    icon:'🎛️', action:()=>{ document.getElementById('control-panel').classList.add('open'); closeSpotlight(); } },
        { label:'Ver notificaciones',  sub:'Abrir panel lateral',           icon:'🔔',  action:()=>{ toggleNotifPanel(); closeSpotlight(); } },
      ];
    }

    function openSpotlight() {
      const sp = document.getElementById('spotlight');
      sp.classList.add('open');
      setTimeout(() => document.getElementById('spotlight-input').focus(), 80);
      spotlightSearch();
    }
    function closeSpotlight() {
      document.getElementById('spotlight').classList.remove('open');
      document.getElementById('spotlight-input').value = '';
      spotlightFocusIdx = -1;
    }
    function spotlightKey(e) {
      const items = document.querySelectorAll('.spotlight-item');
      if (e.key === 'Escape') { closeSpotlight(); return; }
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        spotlightFocusIdx = Math.min(spotlightFocusIdx + 1, items.length - 1);
        updateSpotlightFocus(items);
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        spotlightFocusIdx = Math.max(spotlightFocusIdx - 1, 0);
        updateSpotlightFocus(items);
      } else if (e.key === 'Enter') {
        const focused = document.querySelector('.spotlight-item.focused');
        if (focused) focused.click();
      }
    }
    function updateSpotlightFocus(items) {
      items.forEach((el, i) => el.classList.toggle('focused', i === spotlightFocusIdx));
      const focused = items[spotlightFocusIdx];
      if (focused) focused.scrollIntoView({ block: 'nearest' });
    }
    function spotlightSearch() {
      const q = (document.getElementById('spotlight-input').value || '').toLowerCase().trim();
      const res = document.getElementById('spotlight-results');
      spotlightFocusIdx = -1;
      let html = '';

      // — Apps —
      const SPOTLIGHT_APPS = getSpotlightApps();
      const SPOTLIGHT_CMDS = getSpotlightCmds();
      const appMatches = SPOTLIGHT_APPS.filter(a =>
        !q || a.label.toLowerCase().includes(q) || a.sub.toLowerCase().includes(q)
      );
      if (appMatches.length) {
        html += `<div class="spotlight-section-label">${t('sp_apps')}</div>`;
        appMatches.forEach((a, i) => {
          html += `<div class="spotlight-item" onclick="openApp('${a.id}');closeSpotlight()" tabindex="-1">
            <div class="spotlight-item-icon">${a.icon}</div>
            <div class="spotlight-item-info">
              <div class="spotlight-item-title">${a.label}</div>
              <div class="spotlight-item-sub">${a.sub}</div>
            </div>
          </div>`;
        });
      }

      // — Wallpapers —
      const wpMatches = WALLPAPERS.filter(w =>
        q && w.name.toLowerCase().includes(q)
      ).slice(0, 4);
      if (wpMatches.length) {
        html += `<div class="spotlight-section-label">${t('sp_wallpapers')}</div>`;
        wpMatches.forEach(w => {
          const owned = unlockedWallpapers.includes(w.id) || w.price === 0;
          html += `<div class="spotlight-item" onclick="${owned ? `applyWp('${w.id}')` : `openApp('store')`};closeSpotlight()" tabindex="-1">
            <div class="spotlight-item-icon">🖼️</div>
            <div class="spotlight-item-info">
              <div class="spotlight-item-title">${w.name}</div>
              <div class="spotlight-item-sub">${owned ? t('sp_apply_wp') : `${w.price} 💎 · ${t('sp_locked_wp')}`}</div>
            </div>
            ${owned ? '' : `<span class="spotlight-item-shortcut">${w.price}💎</span>`}
          </div>`;
        });
      }

      // — Notas —
      const noteMatches = notes.filter(n =>
        q && n.text && n.text.toLowerCase().includes(q)
      ).slice(0, 3);
      if (noteMatches.length) {
        html += `<div class="spotlight-section-label">${t('sp_notes_label')}</div>`;
        noteMatches.forEach(n => {
          html += `<div class="spotlight-item" onclick="openApp('notes');closeSpotlight()" tabindex="-1">
            <div class="spotlight-item-icon">📝</div>
            <div class="spotlight-item-info">
              <div class="spotlight-item-title">${escapeHtml(n.text.substring(0,50))}${n.text.length>50?'…':''}</div>
              <div class="spotlight-item-sub">${t('sp_note_saved')}</div>
            </div>
          </div>`;
        });
      }

      // — Comandos —
      const cmdMatches = SPOTLIGHT_CMDS.filter(c =>
        !q || c.label.toLowerCase().includes(q) || c.sub.toLowerCase().includes(q)
      );
      if (cmdMatches.length) {
        html += `<div class="spotlight-section-label">${t('sp_actions')}</div>`;
        cmdMatches.forEach((c, i) => {
          html += `<div class="spotlight-item" tabindex="-1">
            <div class="spotlight-item-icon">${c.icon}</div>
            <div class="spotlight-item-info">
              <div class="spotlight-item-title">${c.label}</div>
              <div class="spotlight-item-sub">${c.sub}</div>
            </div>
          </div>`;
        });
        // adjuntar acciones después de render
        setTimeout(() => {
          const allItems = res.querySelectorAll('.spotlight-item');
          let cmdStart = appMatches.length + wpMatches.length + noteMatches.length;
          SPOTLIGHT_CMDS.filter(c => !q || c.label.toLowerCase().includes(q) || c.sub.toLowerCase().includes(q))
            .forEach((c, i) => {
              const el = allItems[cmdStart + i];
              if (el) el.onclick = () => c.action();
            });
        }, 0);
      }

      // — Calc on-the-fly —
      if (q && /^[\d\s\+\-\*\/\.\(\)]+$/.test(q)) {
        try {
          const result = Function('"use strict"; return (' + q + ')')();
          if (typeof result === 'number' && isFinite(result)) {
            html += `<div class="spotlight-section-label">${t('sp_calc')}</div>
            <div class="spotlight-item" onclick="openApp('calc');closeSpotlight()">
              <div class="spotlight-item-icon">🔢</div>
              <div class="spotlight-item-info">
                <div class="spotlight-item-title">${q} = <strong style="color:var(--accent-color)">${result}</strong></div>
                <div class="spotlight-item-sub">${t('sp_calc_sub')}</div>
              </div>
            </div>`;
          }
        } catch(e) {}
      }

      if (!html) {
        html = `<div class="spotlight-empty">${t('sp_empty')} "<strong>${escapeHtml(q)}</strong>"</div>`;
      }

      res.innerHTML = html;
    }


    let adminAuthenticated = false;
    let adminLogs = JSON.parse(localStorage.getItem('capios_admin_logs') || '[]');
    let maintenanceActive = localStorage.getItem('capios_maintenance') === 'true';

    function adminLogin() {
      const pass = document.getElementById('admin-pass-input').value;
      const err = document.getElementById('admin-login-err');
      if (pass === 'pibblecapy209034') {
        adminAuthenticated = true;
        document.getElementById('admin-login').style.display = 'none';
        const panel = document.getElementById('admin-panel');
        panel.style.display = 'flex';
        adminLog('✅ Sesión iniciada');
        adminRefreshAll();
        document.getElementById('admin-session-time').textContent = new Date().toLocaleTimeString('es-ES');
        document.getElementById('admin-ua').textContent = navigator.userAgent.substring(0,60) + '…';
        // check storage size
        let total = 0;
        for (let k in localStorage) { if (localStorage.hasOwnProperty(k)) total += (localStorage[k].length + k.length) * 2; }
        document.getElementById('admin-storage-size').textContent = (total / 1024).toFixed(1) + ' KB';
      } else {
        err.textContent = currentLang==='en'?'❌ Incorrect password':'❌ Contraseña incorrecta';
        document.getElementById('admin-pass-input').style.borderColor = 'rgba(255,85,85,0.6)';
        setTimeout(() => { err.textContent = ''; document.getElementById('admin-pass-input').style.borderColor = 'rgba(255,85,85,0.3)'; }, 2000);
        adminLog('❌ Intento de acceso fallido');
      }
    }

    function adminLogout() {
      adminAuthenticated = false;
      document.getElementById('admin-login').style.display = 'flex';
      document.getElementById('admin-panel').style.display = 'none';
      document.getElementById('admin-pass-input').value = '';
      document.getElementById('admin-login-err').textContent = '';
    }

    function adminRefreshAll() {
      document.getElementById('admin-current-gems').textContent = gems;
      document.getElementById('admin-cur-gems2').textContent = gems;
      const curUser = localStorage.getItem('capios_current_user') || '—';
      document.getElementById('admin-cur-user').textContent = curUser;
      // users list
      const users = JSON.parse(localStorage.getItem('capios_users') || '{}');
      const list = document.getElementById('admin-users-list');
      list.innerHTML = Object.keys(users).length === 0
        ? '<div style="color:var(--text-muted);font-size:12px;">No hay usuarios registrados en este navegador.</div>'
        : Object.keys(users).map(u => `<div style="display:flex;justify-content:space-between;align-items:center;background:rgba(255,255,255,0.03);border:1px solid var(--border-glass);border-radius:10px;padding:8px 12px;font-size:12px;"><span style="font-weight:600;">👤 ${u}</span><span style="color:var(--text-muted);">${users[u].pass ? '🔒 con clave' : ''}</span></div>`).join('');
      // maint btn
      const mb = document.getElementById('admin-maint-btn');
      if (maintenanceActive) {
        mb.textContent = currentLang==='en'?'✅ Deactivate':'✅ Desactivar';
        mb.style.background = 'rgba(80,250,123,0.12)';
        mb.style.borderColor = 'rgba(80,250,123,0.4)';
        mb.style.color = '#4ade80';
      } else {
        mb.textContent = currentLang==='en'?'🔧 Activate':'🔧 Activar';
        mb.style.background = 'rgba(255,159,67,0.15)';
        mb.style.borderColor = 'rgba(255,159,67,0.4)';
        mb.style.color = 'var(--accent-color)';
      }
      adminRenderLogs();
    }

    function adminLog(msg) {
      const time = new Date().toLocaleTimeString('es-ES');
      adminLogs.unshift(`[${time}] ${msg}`);
      if (adminLogs.length > 50) adminLogs.pop();
      localStorage.setItem('capios_admin_logs', JSON.stringify(adminLogs));
      adminRenderLogs();
    }

    function adminRenderLogs() {
      const el = document.getElementById('admin-logs');
      if (!el) return;
      el.innerHTML = adminLogs.length === 0
        ? '<span style="color:var(--text-muted);">Sin registros aún.</span>'
        : adminLogs.map(l => `<div>${l}</div>`).join('');
    }

    function adminClearLogs() {
      adminLogs = [];
      localStorage.setItem('capios_admin_logs', '[]');
      adminRenderLogs();
    }

    function adminToast(msg) {
      const t = document.getElementById('admin-toast');
      t.textContent = msg;
      t.style.opacity = '1';
      setTimeout(() => { t.style.opacity = '0'; }, 2500);
    }

    function adminGiveGems(amount) {
      addGems(amount);
      adminLog(`💎 +${amount} gemas dadas`);
      adminToast(`✅ +${amount} 💎 dados!`);
      document.getElementById('admin-current-gems').textContent = gems;
      document.getElementById('admin-cur-gems2').textContent = gems;
    }

    function adminGiveGemsCustom() {
      const val = parseInt(document.getElementById('admin-gems-custom').value);
      if (!val || val < 1) { adminToast('⚠️ Cantidad inválida'); return; }
      adminGiveGems(val);
      document.getElementById('admin-gems-custom').value = '';
    }

    function adminSetGems(amount) {
      if (!confirm(`¿Resetear gemas a ${amount}?`)) return;
      gems = amount;
      if (currentUser) localStorage.setItem('capios_gems_' + currentUser, gems);
      updateGemDisplay();
      const lb = document.getElementById('app-leaderboard');
      if (lb && lb.style.display === 'flex') renderLeaderboard();
      adminLog(`🔄 Gemas reseteadas a ${amount}`);
      adminToast(`✅ Gemas reseteadas a ${amount}`);
      document.getElementById('admin-current-gems').textContent = gems;
      document.getElementById('admin-cur-gems2').textContent = gems;
    }

    function adminUnlockAll() {
      unlockedWallpapers = WALLPAPERS.map(w => w.id);
      localStorage.setItem('capios_unlocked_wp', JSON.stringify(unlockedWallpapers));
      unlockedThemes = ['amber','purple','green','blue','pink','red'];
      localStorage.setItem('capios_unlocked_themes', JSON.stringify(unlockedThemes));
      adminLog('🔓 Todo desbloqueado');
      adminToast('✅ Todo desbloqueado!');
    }

    function adminSendNotif() {
      const title = document.getElementById('admin-notif-title').value.trim();
      const msg = document.getElementById('admin-notif-msg').value.trim();
      if (!title || !msg) { adminToast('⚠️ Completa título y mensaje'); return; }
      // mostrar localmente
      showToast('📢 ' + title, msg, 'system', 'fa-bullhorn');
      // enviar a todos via storage
      const globalMsg = { id: String(Date.now()), title, text: msg, urgent: true };
      window.storage.set('admin:global_msg', JSON.stringify(globalMsg), true)
        .then(() => adminToast('✅ Mensaje enviado a todos!'))
        .catch(() => adminToast('⚠️ Error al enviar a storage compartido'));
      document.getElementById('admin-notif-title').value = '';
      document.getElementById('admin-notif-msg').value = '';
      adminLog(`📢 Global msg enviado: "${title}"`);
    }

    function adminBroadcast(type) {
      const msgs = {
        maintenance: { t:'🔧 Mantenimiento programado', m:'Habrá mantenimiento esta noche. Guarda tu progreso.' },
        update: { t:'✨ Nueva actualización disponible', m:'Capibara OS ha sido actualizado con nuevas funciones y mejoras.' },
        event: { t:'🎉 ¡Evento especial activo!', m:'¡Hay un evento especial en curso! Reclama tus gemas extra.' }
      };
      const { t, m } = msgs[type];
      showToast(t, m, 'system', type === 'event' ? 'fa-star' : type === 'maintenance' ? 'fa-wrench' : 'fa-bolt');
      // enviar a todos via storage
      const globalMsg = { id: String(Date.now()), title: t, text: m, urgent: false };
      window.storage.set('admin:global_msg', JSON.stringify(globalMsg), true)
        .then(() => adminToast('✅ Broadcast enviado a todos!'))
        .catch(() => adminToast('⚠️ Error al enviar a storage compartido'));
      adminLog(`📢 Broadcast: ${t}`);
    }

    function adminShutdown() {
      if (!confirm('¿Cerrar la página para este usuario?')) return;
      adminLog('🔴 Página cerrada por admin');
      document.body.innerHTML = '<div style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100vh;background:#050508;color:#fff;gap:20px;font-family:system-ui;"><div style="font-size:80px;">🦫</div><div style="font-size:24px;font-weight:800;color:#ef4444;">Capibara OS — Offline</div><div style="font-size:14px;color:#666;max-width:300px;text-align:center;">El administrador ha cerrado el sistema. Vuelve más tarde.</div></div>';
    }

    function adminToggleMaintenance() {
      maintenanceActive = !maintenanceActive;
      localStorage.setItem('capios_maintenance', maintenanceActive);
      const overlay = document.getElementById('admin-maintenance-overlay');
      if (maintenanceActive) {
        overlay.style.display = 'flex';
        adminLog('🔧 Modo mantenimiento ACTIVADO');
        adminToast('🔧 Activando para todos...');
        window.storage.set('admin:maintenance', JSON.stringify({ active: true, ts: Date.now() }), true)
          .then(() => adminToast('✅ Mantenimiento global activado!'))
          .catch(() => adminToast('⚠️ Error al sincronizar'));
      } else {
        overlay.style.display = 'none';
        adminLog('✅ Modo mantenimiento DESACTIVADO');
        adminToast('Desactivando para todos...');
        window.storage.set('admin:maintenance', JSON.stringify({ active: false, ts: Date.now() }), true)
          .then(() => adminToast('✅ Mantenimiento desactivado para todos!'))
          .catch(() => adminToast('⚠️ Error al sincronizar'));
      }
      adminRefreshAll();
    }

    function adminShowMaintUnlock() {
      const modal = document.getElementById('admin-maint-unlock');
      modal.style.display = modal.style.display === 'none' ? 'block' : 'none';
      if (modal.style.display === 'block') {
        document.getElementById('admin-maint-pass').value = '';
        document.getElementById('admin-maint-err').textContent = '';
        setTimeout(() => document.getElementById('admin-maint-pass').focus(), 50);
      }
    }

    function adminCheckMaintPass() {
      const pass = document.getElementById('admin-maint-pass').value;
      const err = document.getElementById('admin-maint-err');
      if (pass === 'pibblecapy209034') {
        adminExitMaintenance();
        document.getElementById('admin-maint-unlock').style.display = 'none';
      } else {
        err.textContent = currentLang==='en'?'❌ Incorrect password':'❌ Contraseña incorrecta';
        document.getElementById('admin-maint-pass').style.borderColor = 'rgba(255,85,85,0.7)';
        setTimeout(() => {
          err.textContent = '';
          document.getElementById('admin-maint-pass').style.borderColor = 'rgba(255,85,85,0.3)';
        }, 2000);
      }
    }

    function adminExitMaintenance() {
      // secret click to exit maintenance (for the admin themselves)
      maintenanceActive = false;
      localStorage.setItem('capios_maintenance', 'false');
      document.getElementById('admin-maintenance-overlay').style.display = 'none';
      // también deshabilitar para todos
      window.storage.set('admin:maintenance', JSON.stringify({ active: false, ts: Date.now() }), true).catch(()=>{});
    }

    function adminClearCache() {
      if (!confirm('¿Limpiar TODOS los datos del localStorage? Esto no se puede deshacer.')) return;
      localStorage.clear();
      adminLog('🗑️ Caché limpiado');
      adminToast('✅ Caché limpiado — recargando...');
      setTimeout(() => location.reload(), 1500);
    }

    function switchAdminTab(tab) {
      ['gems','broadcast','system','users','stats','events','bans','logs'].forEach(t => {
        const pane = document.getElementById('apane-' + t);
        const btn = document.getElementById('atab-' + t);
        if (pane) pane.style.display = t === tab ? 'block' : 'none';
        if (btn) {
          if (t === tab) {
            btn.style.background = 'rgba(255,85,85,0.12)';
            btn.style.borderBottom = '2px solid #ef4444';
            btn.style.color = '#ef4444';
          } else {
            btn.style.background = 'transparent';
            btn.style.borderBottom = '2px solid transparent';
            btn.style.color = 'var(--text-muted)';
          }
        }
      });
      if (tab === 'users') adminRefreshAll();
      if (tab === 'stats') adminRefreshStats();
      if (tab === 'bans') renderBanList();
      if (tab === 'events') {
        window.storage.get('admin:event', true).then(r => {
          if (r && r.value) updateEventStatus(JSON.parse(r.value));
          else updateEventStatus({ active: false });
        }).catch(() => updateEventStatus({ active: false }));
      }
    }

    // verificar mantenimiento al cargar
    if (maintenanceActive) {
      window.addEventListener('load', () => {
        const overlay = document.getElementById('admin-maintenance-overlay');
        if (overlay) overlay.style.display = 'flex';
      });
    }


    (function(){
      let frames = 0, last = performance.now();
      const COLORS  = { good:'#00ff88', mid:'#ffaa00', bad:'#ff4444' };
      const BORDERS = { good:'rgba(0,255,136,0.3)', mid:'rgba(255,170,0,0.3)', bad:'rgba(255,68,68,0.3)' };
      function tick(now) {
        frames++;
        const delta = now - last;
        if (delta >= 300) {
          const fps = Math.round(frames * 1000 / delta);
          frames = 0; last = now;
          const el  = document.getElementById('fps-value');
          const cnt = document.getElementById('fps-counter');
          if (!el) return requestAnimationFrame(tick);
          const key = fps >= 50 ? 'good' : fps >= 30 ? 'mid' : 'bad';
          el.textContent = fps;
          el.style.color = COLORS[key];
          if (cnt) cnt.style.borderColor = BORDERS[key];
        }
        requestAnimationFrame(tick);
      }
      requestAnimationFrame(tick);
    })();


    let _lastTBMinute = '';
    function updateTaskbarClock() {
      const d = new Date();
      const hh = String(d.getHours()).padStart(2,'0');
      const mm = String(d.getMinutes()).padStart(2,'0');
      const key = hh + mm;
      const tbc = document.getElementById('tb-time');
      if (tbc) tbc.textContent = hh+':'+mm;
      if (key !== _lastTBMinute) {
        _lastTBMinute = key;
        const tbd = document.getElementById('tb-date');
        if(tbd) tbd.textContent = d.toLocaleDateString('es-ES',{day:'numeric',month:'short'});
      }
      // sync notif dot
      const d2 = document.getElementById('notif-dot2');
      const d1 = document.getElementById('notif-dot');
      if(d2 && d1) d2.className = d1.className;
    }

    let chatPollInterval = null;
    let chatRenderedIds = new Set();
    let currentDMTarget = null;
    window._activeEventMult = 1;
    window._eventBannerShown = false;

    function showChatTab(tab) {
      ['global','online','dms'].forEach(t => {
        const panel = document.getElementById('chat-panel-' + t);
        const btn   = document.getElementById('chat-tab-' + t);
        if (!panel || !btn) return;
        const active = t === tab;
        panel.style.display = active ? 'flex' : 'none';
        if (active) panel.style.flexDirection = 'column';
        btn.classList.toggle('dc-active', active);
      });
      const bar = document.getElementById('chat-input-bar');
      if (bar) bar.style.display = tab === 'global' ? 'block' : 'none';

      // actualizar header del canal
      const header = document.getElementById('chat-channel-header');
      if (header) {
        if (tab === 'global') {
          header.innerHTML = `<span style="color:#72767d;font-size:18px;font-weight:300;">#</span><div><div style="font-size:13px;font-weight:700;color:#fff;">general</div><div style="font-size:11px;color:#72767d;">Canal de chat de Capibara OS</div></div>`;
        } else if (tab === 'online') {
          header.innerHTML = `<i class="fa-solid fa-users" style="color:#4ade80;"></i><div><div style="font-size:13px;font-weight:700;color:#fff;">Usuarios online</div><div style="font-size:11px;color:#72767d;">Ver quién está conectado</div></div>`;
        } else {
          header.innerHTML = `<i class="fa-solid fa-user-group" style="color:#a78bfa;"></i><div><div style="font-size:13px;font-weight:700;color:#fff;">Amigos</div><div style="font-size:11px;color:#72767d;">Gestiona tus amigos y solicitudes</div></div>`;
        }
      }

      // actualizar nombre en sidebar
      const userNameEl = document.getElementById('chat-user-name-bottom');
      const userAvEl = document.getElementById('chat-user-av-bottom');
      if (userNameEl && currentUser) userNameEl.textContent = currentUser;
      // mostrar foto/emoji en sidebar
      if (userAvEl) {
        const photo = getCustomAvatarPhoto();
        if (photo) {
          userAvEl.style.overflow = 'hidden';
          userAvEl.innerHTML = '<img src="' + photo + '" style="width:100%;height:100%;object-fit:cover;border-radius:50%;" onerror="this.parentElement.textContent=\'🦫\'">';
        } else {
          userAvEl.textContent = getFullAvatar();
        }
      }

      if (tab === 'online') renderOnlineList();
      if (tab === 'dms')    renderDMList();
    }

    async function sendChatMsg() {
      const input = document.getElementById('chat-input');
      if (!input) return;
      const text = input.value.trim();
      if (!text || !currentUser) return;
      dailyTaskEvent('send_message');
      try {
        const b = await window.storage.get('ban:' + currentUser.toLowerCase(), true);
        if (b && b.value === 'true') { showToast('Baneado','No puedes chatear.'); return; }
      } catch(e) {}
      input.value = '';
      let msgs = [];
      try {
        const res = await window.storage.get('globalchat', true);
        if (res && res.value) msgs = JSON.parse(res.value);
      } catch(e) {}
      msgs.push({ id: Date.now() + '_' + Math.random().toString(36).slice(2,5), user: currentUser, text, ts: Date.now(), av: getAv() });
      if (msgs.length > 100) msgs = msgs.slice(-100);
      try {
        await window.storage.set('globalchat', JSON.stringify(msgs), true);
      } catch(e) { showToast('Error','No se pudo enviar.'); return; }
      addXP(1);
      renderGlobalChat(msgs);
    }

    function renderAvatarHtml(av, color, size) {
      // av can be emoji string or base64 data URL
      const isPhoto = av && (av.startsWith('data:') || av.startsWith('http'));
      size = size || 40;
      if (isPhoto) {
        return `<div style="width:${size}px;height:${size}px;border-radius:50%;overflow:hidden;flex-shrink:0;border:2px solid ${color||'rgba(255,255,255,0.15)'};">
          <img src="${av}" style="width:100%;height:100%;object-fit:cover;" onerror="this.parentElement.innerHTML='🦫'">
        </div>`;
      }
      return `<div style="width:${size}px;height:${size}px;background:linear-gradient(140deg,${color||'#ff9f43'}33,${color||'#ff9f43'}18);border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:${Math.round(size*0.5)}px;flex-shrink:0;border:1px solid ${color||'#ff9f43'}33;">${av||'🦫'}</div>`;
    }

    function renderGlobalChat(msgs) {
      const container = document.getElementById('chat-panel-global');
      if (!container) return;
      const newMsgs = msgs.filter(m => !chatRenderedIds.has(m.id));
      if (newMsgs.length === 0) return;

      // caché de colores de usuario
      if (!window._userColors) window._userColors = {};
      const colorPalette = ['#ff9f43','#4ade80','#67e8f9','#a78bfa','#e8658a','#f1fa8c','#74b9ff','#fd79a8','#a29bfe','#55efc4'];
      function getUserColor(user) {
        if (!window._userColors[user]) {
          let hash = 0;
          for (let i = 0; i < user.length; i++) hash = user.charCodeAt(i) + ((hash << 5) - hash);
          window._userColors[user] = colorPalette[Math.abs(hash) % colorPalette.length];
        }
        return window._userColors[user];
      }

      newMsgs.forEach(m => {
        chatRenderedIds.add(m.id);
        const isMe = m.user === currentUser;
        const color = getUserColor(m.user);
        const av = m.av || '🦫';

        // verificar si mensaje es del mismo usuario
        const lastRow = container.lastElementChild;
        const lastUser = lastRow ? lastRow.dataset.user : null;
        const lastTs = lastRow ? parseInt(lastRow.dataset.ts || 0) : 0;
        const isGrouped = lastUser === m.user && (m.ts - lastTs) < 5 * 60 * 1000;

        const time = new Date(m.ts).toLocaleTimeString('es-ES', { hour:'2-digit', minute:'2-digit' });

        const div = document.createElement('div');
        div.className = 'dc-msg-row';
        div.dataset.user = m.user;
        div.dataset.ts = m.ts;
        div.style.cssText = 'display:flex;gap:12px;align-items:flex-start;padding:2px 16px;position:relative;transition:background 0.1s;';

        if (isGrouped) {
          div.innerHTML = `
            <div style="width:40px;flex-shrink:0;display:flex;justify-content:flex-end;align-items:center;">
              <span class="dc-msg-ts-hover" style="font-size:9px;color:#4f545c;opacity:0;transition:opacity 0.1s;white-space:nowrap;">${time}</span>
            </div>
            <div style="flex:1;min-width:0;">
              <div style="font-size:13.5px;color:#dcddde;line-height:1.5;word-break:break-word;">${escapeHtml(m.text)}</div>
            </div>
            ${!isMe ? `<div class="dc-msg-actions" style="opacity:0;transition:opacity 0.1s;position:absolute;right:12px;top:50%;transform:translateY(-50%);display:flex;gap:4px;">
              <button onclick="openDMWith('${m.user.replace(/'/g,"\\'")}')"; title="Mensaje privado"
                style="background:rgba(30,32,40,0.95);border:1px solid rgba(255,255,255,0.08);color:#72767d;padding:4px 8px;border-radius:6px;cursor:pointer;font-size:11px;transition:color 0.15s;" onmouseenter="this.style.color='#fff'" onmouseleave="this.style.color='#72767d'">✉️</button>
            </div>` : ''}`;
        } else {
          div.style.paddingTop = '8px';
          div.innerHTML = `
            ${renderAvatarHtml(av, color, 40)}
            <div style="flex:1;min-width:0;">
              <div style="display:flex;align-items:baseline;gap:8px;margin-bottom:3px;">
                <span style="font-size:13px;font-weight:700;color:${color};">${escapeHtml(m.user)}</span>
                <span style="font-size:10px;color:#4f545c;">${time}</span>
              </div>
              <div style="font-size:13.5px;color:#dcddde;line-height:1.5;word-break:break-word;">${escapeHtml(m.text)}</div>
            </div>
            ${!isMe ? `<div class="dc-msg-actions" style="opacity:0;transition:opacity 0.1s;position:absolute;right:12px;top:10px;display:flex;gap:4px;">
              <button onclick="openDMWith('${m.user.replace(/'/g,"\\'")}')"; title="Mensaje privado"
                style="background:rgba(30,32,40,0.95);border:1px solid rgba(255,255,255,0.08);color:#72767d;padding:4px 8px;border-radius:6px;cursor:pointer;font-size:11px;transition:color 0.15s;" onmouseenter="this.style.color='#fff'" onmouseleave="this.style.color='#72767d'">✉️</button>
            </div>` : ''}`;
        }

        container.appendChild(div);
      });

      while (container.children.length > 150) container.removeChild(container.firstChild);
      container.scrollTop = container.scrollHeight;
    }

    function chatPickEmoji() {
      let picker = document.getElementById('chat-emoji-picker');
      if (picker) { picker.style.display = picker.style.display === 'none' ? 'block' : 'none'; return; }
      const emojis = ['😀','😂','🥹','😍','🤩','😎','🥳','😤','😭','🫡','👍','👎','❤️','🔥','💎','✨','🎉','🦫','🐾','💬','😊','🤔','👀','💀','🗿','🫶','🙏','👏','🚀','⭐'];
      picker = document.createElement('div');
      picker.id = 'chat-emoji-picker';
      picker.innerHTML = `<div style="font-size:10px;color:rgba(255,255,255,0.4);margin-bottom:8px;text-transform:uppercase;letter-spacing:1px;">Emojis</div><div class="dc-emoji-grid">${emojis.map(e=>`<button class="dc-emoji-btn" onclick="appendEmoji('${e}')">${e}</button>`).join('')}</div>`;
      const chatWin = document.getElementById('app-chat');
      chatWin.style.position = 'absolute';
      picker.style.cssText = 'position:absolute;bottom:70px;left:216px;background:rgba(18,20,28,0.98);border:1px solid rgba(255,255,255,0.08);border-radius:14px;padding:12px;z-index:9999;box-shadow:0 16px 40px rgba(0,0,0,0.6);width:220px;';
      chatWin.appendChild(picker);
      document.addEventListener('mousedown', function closePicker(e) {
        if (!picker.contains(e.target)) { picker.style.display='none'; document.removeEventListener('mousedown',closePicker); }
      });
    }

    function appendEmoji(emoji) {
      const inp = document.getElementById('chat-input');
      if (inp) { inp.value += emoji; inp.focus(); }
      const picker = document.getElementById('chat-emoji-picker');
      if (picker) picker.style.display = 'none';
    }

    async function chatPoll() {
      try {
        const res = await window.storage.get('globalchat', true);
        if (res && res.value) renderGlobalChat(JSON.parse(res.value));
      } catch(e) {}
      try {
        const res = await window.storage.get('presence', true);
        if (res && res.value) {
          const active = JSON.parse(res.value).filter(u => Date.now() - u.ts < 90000);
          const badge = document.getElementById('chat-online-badge');
          if (badge) badge.textContent = active.length + ' online';
        }
      } catch(e) {}
    }

    async function heartbeat() {
      if (!currentUser) return;
      try {
        let online = [];
        try { const r = await window.storage.get('presence', true); if (r && r.value) online = JSON.parse(r.value); } catch(e) {}
        online = online.filter(u => u.user !== currentUser);
        online.push({ user: currentUser, ts: Date.now(), av: getAv() });
        online = online.filter(u => Date.now() - u.ts < 90000);
        await window.storage.set('presence', JSON.stringify(online), true);
      } catch(e) {}
    }

    async function renderOnlineList() {
      const panel = document.getElementById('chat-panel-online');
      if (!panel) return;
      panel.style.flexDirection = 'column';
      panel.innerHTML = '<div style="font-size:12px;color:var(--text-muted);margin-bottom:12px;">Usuarios conectados ahora:</div>';
      try {
        const res = await window.storage.get('presence', true);
        let active = [];
        if (res && res.value) active = JSON.parse(res.value).filter(u => Date.now() - u.ts < 90000);
        if (active.length === 0) { panel.innerHTML += '<div style="color:var(--text-muted);">Nadie conectado</div>'; return; }
        active.forEach(u => {
          const row = document.createElement('div');
          row.style.cssText = 'display:flex;align-items:center;gap:10px;background:rgba(80,250,123,0.06);border:1px solid rgba(80,250,123,0.2);border-radius:10px;padding:10px 14px;margin-bottom:6px;';
          row.innerHTML =
            renderAvatarHtml(u.av||'🦫', '#4ade80', 36) +
            '<div style="flex:1;"><div style="font-size:13px;font-weight:700;">@' + escapeHtml(u.user) + '</div><div style="font-size:10px;color:#4ade80;">🟢 Online</div></div>' +
            (u.user !== currentUser ? `<button onclick="openDMWith('${u.user.replace(/'/g,"\\'")}')"; style="background:rgba(255,255,255,0.05);border:1px solid var(--border-glass);color:var(--text-muted);padding:5px 12px;border-radius:8px;cursor:pointer;font-size:12px;">✉ DM</button>` : '<span style="font-size:11px;color:var(--text-muted);">(tú)</span>');
          panel.appendChild(row);
        });
      } catch(e) { panel.innerHTML += '<div style="color:#ef4444;font-size:12px;">Error al cargar.</div>'; }
    }


    // amigos data stored in cloud: friends:USER -> {friends:[], sentReqs:[], recvReqs:[]}

    async function getFriendsData(user) {
      try {
        const r = await window.storage.get('friends:' + user, true);
        if (r && r.value) return JSON.parse(r.value);
      } catch(e) {}
      return { friends: [], sentReqs: [], recvReqs: [] };
    }

    async function saveFriendsData(user, data) {
      try { await window.storage.set('friends:' + user, JSON.stringify(data), true); } catch(e) {}
    }

    async function sendFriendRequest(toUser) {
      if (!currentUser || toUser === currentUser) return;
      const myData = await getFriendsData(currentUser);
      if (myData.friends.includes(toUser) || myData.sentReqs.includes(toUser)) {
        showToast('Amigos', 'Ya enviaste solicitud o ya son amigos');
        return;
      }
      // agregar a enviados
      if (!myData.sentReqs.includes(toUser)) myData.sentReqs.push(toUser);
      await saveFriendsData(currentUser, myData);
      // agregar a recibidos
      const theirData = await getFriendsData(toUser);
      if (!theirData.recvReqs.includes(currentUser)) theirData.recvReqs.push(currentUser);
      await saveFriendsData(toUser, theirData);
      showToast('Amigos 👥', 'Solicitud enviada a @' + toUser);
      renderDMList();
    }

    async function acceptFriendRequest(fromUser) {
      const myData = await getFriendsData(currentUser);
      myData.recvReqs = myData.recvReqs.filter(u => u !== fromUser);
      if (!myData.friends.includes(fromUser)) myData.friends.push(fromUser);
      await saveFriendsData(currentUser, myData);
      const theirData = await getFriendsData(fromUser);
      theirData.sentReqs = theirData.sentReqs.filter(u => u !== currentUser);
      if (!theirData.friends.includes(currentUser)) theirData.friends.push(currentUser);
      await saveFriendsData(fromUser, theirData);
      showToast('Amigos 👥', '¡Ahora eres amigo de @' + fromUser + '!');
      renderDMList();
    }

    async function rejectFriendRequest(fromUser) {
      const myData = await getFriendsData(currentUser);
      myData.recvReqs = myData.recvReqs.filter(u => u !== fromUser);
      await saveFriendsData(currentUser, myData);
      const theirData = await getFriendsData(fromUser);
      theirData.sentReqs = theirData.sentReqs.filter(u => u !== currentUser);
      await saveFriendsData(fromUser, theirData);
      renderDMList();
    }

    async function removeFriend(friendUser) {
      const myData = await getFriendsData(currentUser);
      myData.friends = myData.friends.filter(u => u !== friendUser);
      await saveFriendsData(currentUser, myData);
      const theirData = await getFriendsData(friendUser);
      theirData.friends = theirData.friends.filter(u => u !== currentUser);
      await saveFriendsData(friendUser, theirData);
      showToast('Amigos', 'Eliminaste a @' + friendUser + ' de amigos');
      renderDMList();
    }

    async function renderDMList() {
      const panel = document.getElementById('chat-panel-dms');
      if (!panel) return;
      panel.style.flexDirection = 'column';
      panel.innerHTML = '';

      const myData = await getFriendsData(currentUser);

      // actualizar badge de solicitudes
      const badge = document.getElementById('friends-req-badge');
      if (badge) {
        const count = myData.recvReqs.length;
        badge.style.display = count > 0 ? 'inline' : 'none';
        badge.textContent = count;
      }

      // obtener presencia online
      let onlineUsers = new Set();
      try {
        const res = await window.storage.get('presence', true);
        if (res && res.value) {
          JSON.parse(res.value).filter(u => Date.now() - u.ts < 90000).forEach(u => onlineUsers.add(u.user));
        }
      } catch(e) {}

      // --- ADD FRIEND BAR ---
      const addBar = document.createElement('div');
      addBar.style.cssText = 'display:flex;gap:8px;margin-bottom:14px;flex-shrink:0;';
      addBar.innerHTML = `
        <input id="friend-search-input" type="text" placeholder="Buscar usuario para añadir..." maxlength="30"
          style="flex:1;background:rgba(0,0,0,0.3);border:1px solid var(--border-glass);padding:7px 12px;border-radius:10px;color:#fff;font-size:12px;outline:none;"
          onkeydown="if(event.key==='Enter'){const v=this.value.trim().toLowerCase();if(v)sendFriendRequest(v);this.value='';}"
        >
        <button onclick="const v=document.getElementById('friend-search-input').value.trim().toLowerCase();if(v){sendFriendRequest(v);document.getElementById('friend-search-input').value='';}"
          style="background:linear-gradient(100deg,#ff9f43,#fdba74);color:#000;border:none;padding:7px 14px;border-radius:10px;cursor:pointer;font-size:12px;font-weight:700;white-space:nowrap;">
          ➕ Añadir
        </button>`;
      panel.appendChild(addBar);

      // --- SOLICITUDES ---
      if (myData.recvReqs.length > 0) {
        const secTitle = document.createElement('div');
        secTitle.style.cssText = 'font-size:10px;text-transform:uppercase;letter-spacing:1.5px;color:var(--accent-color);font-weight:700;margin-bottom:8px;flex-shrink:0;';
        secTitle.textContent = (currentLang==='en'?'📩 Requests':'📩 Solicitudes') + ' (' + myData.recvReqs.length + ')';
        panel.appendChild(secTitle);

        myData.recvReqs.forEach(reqUser => {
          const row = document.createElement('div');
          row.style.cssText = 'display:flex;align-items:center;gap:10px;background:rgba(255,159,67,0.07);border:1px solid rgba(255,159,67,0.25);border-radius:10px;padding:10px 12px;margin-bottom:6px;flex-shrink:0;';
          row.innerHTML = `
            <span style="font-size:20px;">🦫</span>
            <span style="flex:1;font-size:13px;font-weight:600;">@${escapeHtml(reqUser)}</span>
            <button onclick="acceptFriendRequest('${reqUser.replace(/'/g,"\\'")}')"
              style="background:rgba(80,250,123,0.18);border:1px solid rgba(80,250,123,0.4);color:#4ade80;padding:5px 10px;border-radius:8px;cursor:pointer;font-size:11px;font-weight:700;">✓ Aceptar</button>
            <button onclick="rejectFriendRequest('${reqUser.replace(/'/g,"\\'")}')"
              style="background:rgba(255,85,85,0.12);border:1px solid rgba(255,85,85,0.35);color:#ef4444;padding:5px 10px;border-radius:8px;cursor:pointer;font-size:11px;font-weight:700;">✕</button>`;
          panel.appendChild(row);
        });

        const sep = document.createElement('div');
        sep.style.cssText = 'height:1px;background:var(--border-glass);margin:10px 0;flex-shrink:0;';
        panel.appendChild(sep);
      }

      // --- AMIGOS ---
      const friendsTitle = document.createElement('div');
      friendsTitle.style.cssText = 'font-size:10px;text-transform:uppercase;letter-spacing:1.5px;color:var(--text-muted);font-weight:700;margin-bottom:8px;flex-shrink:0;';
      friendsTitle.textContent = (currentLang==='en'?'👥 Friends':'👥 Amigos') + ' (' + myData.friends.length + ')';
      panel.appendChild(friendsTitle);

      if (myData.friends.length === 0) {
        const empty = document.createElement('div');
        empty.style.cssText = 'color:var(--text-muted);font-size:12px;text-align:center;padding:20px 0;';
        empty.innerHTML = '🦫<br>Aún no tienes amigos.<br>¡Añade a alguien arriba!';
        panel.appendChild(empty);
      } else {
        // obtener avatares de amigos
        let presenceMap = {};
        try {
          const res = await window.storage.get('presence', true);
          if (res && res.value) JSON.parse(res.value).forEach(u => { presenceMap[u.user] = u.av||'🦫'; });
        } catch(e) {}

        myData.friends.forEach(friendUser => {
          const isOnline = onlineUsers.has(friendUser);
          const av = presenceMap[friendUser] || '🦫';
          const row = document.createElement('div');
          row.style.cssText = 'display:flex;align-items:center;gap:10px;background:rgba(255,255,255,0.04);border:1px solid var(--border-glass);border-radius:10px;padding:10px 12px;margin-bottom:6px;cursor:pointer;flex-shrink:0;transition:background 0.2s;';
          row.onmouseenter = () => row.style.background = 'rgba(255,255,255,0.08)';
          row.onmouseleave = () => row.style.background = 'rgba(255,255,255,0.04)';
          row.innerHTML = `
            <span style="font-size:20px;position:relative;">${av}<span style="position:absolute;bottom:-2px;right:-2px;width:9px;height:9px;border-radius:50%;background:${isOnline?'#4ade80':'#666'};border:2px solid #0d0e12;display:block;"></span></span>
            <div style="flex:1;">
              <div style="font-size:13px;font-weight:600;">@${escapeHtml(friendUser)}</div>
              <div style="font-size:10px;color:${isOnline?'#4ade80':'var(--text-muted)'};">${isOnline?'🟢 Online':'⚫ Offline'}</div>
            </div>
            <button onclick="event.stopPropagation();openDMWith('${friendUser.replace(/'/g,"\\'")}')"
              style="background:rgba(189,147,249,0.18);border:1px solid rgba(189,147,249,0.35);color:#a78bfa;padding:5px 10px;border-radius:8px;cursor:pointer;font-size:11px;font-weight:700;">✉ Chat</button>
            <button onclick="event.stopPropagation();if(confirm('¿Eliminar a @${friendUser.replace(/'/g,"\\'").replace(/"/g,'\\"')} de amigos?'))removeFriend('${friendUser.replace(/'/g,"\\'")}')"
              style="background:rgba(255,85,85,0.08);border:1px solid rgba(255,85,85,0.25);color:#ef4444;padding:5px 8px;border-radius:8px;cursor:pointer;font-size:11px;">✕</button>`;
          row.onclick = () => openDMWith(friendUser);
          panel.appendChild(row);
        });
      }

      // solicitudes enviadas
      if (myData.sentReqs.length > 0) {
        const sentSep = document.createElement('div');
        sentSep.style.cssText = 'height:1px;background:var(--border-glass);margin:10px 0;flex-shrink:0;';
        panel.appendChild(sentSep);
        const sentTitle = document.createElement('div');
        sentTitle.style.cssText = 'font-size:10px;text-transform:uppercase;letter-spacing:1.5px;color:var(--text-muted);font-weight:700;margin-bottom:8px;flex-shrink:0;';
        sentTitle.textContent = (currentLang==='en'?'⏳ Sent':'⏳ Enviadas') + ' (' + myData.sentReqs.length + ')';
        panel.appendChild(sentTitle);
        myData.sentReqs.forEach(u => {
          const row = document.createElement('div');
          row.style.cssText = 'display:flex;align-items:center;gap:10px;background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.06);border-radius:10px;padding:8px 12px;margin-bottom:6px;flex-shrink:0;';
          row.innerHTML = `<span style="font-size:18px;">🦫</span><span style="flex:1;font-size:12px;color:var(--text-muted);">@${escapeHtml(u)}</span><span style="font-size:10px;color:var(--text-muted);">Pendiente…</span>`;
          panel.appendChild(row);
        });
      }
    }

    async function openDMWith(user, av) {
      // intentar avatar de presencia
      if (!av) {
        try {
          const res = await window.storage.get('presence', true);
          if (res && res.value) {
            const found = JSON.parse(res.value).find(u => u.user === user);
            if (found) av = found.av || '🦫';
          }
        } catch(e) {}
      }
      av = av || '🦫';
      currentDMTarget = { user, av };
      showChatTab('dms');
      const panel = document.getElementById('chat-panel-dms');
      if (!panel) return;
      panel.style.flexDirection = 'column';

      const header = document.createElement('div');
      header.style.cssText = 'display:flex;align-items:center;gap:8px;margin-bottom:12px;flex-shrink:0;';
      header.innerHTML = '<button style="background:none;border:none;color:#4ade80;cursor:pointer;font-size:18px;">←</button>' +
        '<span style="font-size:18px;">' + av + '</span>' +
        '<span style="font-size:13px;font-weight:700;">@' + escapeHtml(user) + '</span>';
      header.querySelector('button').onclick = () => { currentDMTarget = null; renderDMList(); };

      const messages = document.createElement('div');
      messages.id = 'dm-messages';
      messages.style.cssText = 'flex:1;overflow-y:auto;display:flex;flex-direction:column;gap:6px;margin-bottom:10px;min-height:0;';

      const inputRow = document.createElement('div');
      inputRow.style.cssText = 'display:flex;gap:8px;flex-shrink:0;';

      const inp = document.createElement('input');
      inp.id = 'dm-input';
      inp.type = 'text';
      inp.placeholder = 'Mensaje privado...';
      inp.maxLength = 200;
      inp.style.cssText = 'flex:1;background:rgba(0,0,0,0.3);border:1px solid var(--border-glass);padding:8px 12px;border-radius:10px;color:#fff;font-size:13px;outline:none;';
      inp.addEventListener('keydown', e => { if (e.key === 'Enter') sendDM(); });

      const sendBtn = document.createElement('button');
      sendBtn.textContent = '▶';
      sendBtn.style.cssText = 'background:linear-gradient(130deg,#a78bfa,#8b5cf6);color:#fff;border:none;width:34px;height:34px;border-radius:10px;cursor:pointer;font-size:15px;flex-shrink:0;';
      sendBtn.onclick = sendDM;

      inputRow.appendChild(inp);
      inputRow.appendChild(sendBtn);

      panel.innerHTML = '';
      panel.appendChild(header);
      panel.appendChild(messages);
      panel.appendChild(inputRow);

      loadDMConvo(user);
      // Poll DM messages every 5s while open
      if (window._dmPollInterval) clearInterval(window._dmPollInterval);
      window._dmPollInterval = setInterval(() => {
        if (currentDMTarget && currentDMTarget.user === user) loadDMConvo(user);
        else clearInterval(window._dmPollInterval);
      }, 7000);
    }

    async function loadDMConvo(target) {
      const dmEl = document.getElementById('dm-messages');
      if (!dmEl) return;
      const dmKey = 'dm:' + [currentUser, target].sort().join(':');
      try {
        const res = await window.storage.get(dmKey, true);
        let msgs = [];
        if (res && res.value) msgs = JSON.parse(res.value);
        dmEl.innerHTML = '';
        if (msgs.length === 0) { dmEl.innerHTML = '<div style="color:var(--text-muted);font-size:12px;text-align:center;">Sin mensajes aún.</div>'; return; }
        msgs.forEach(m => {
          const isMe = m.from === currentUser;
          const div = document.createElement('div');
          div.style.cssText = 'display:flex;justify-content:' + (isMe?'flex-end':'flex-start') + ';';
          div.innerHTML = '<div style="background:' + (isMe?'rgba(189,147,249,0.2)':'rgba(255,255,255,0.07)') + ';border-radius:10px;padding:7px 11px;max-width:78%;font-size:13px;word-break:break-word;">' + escapeHtml(m.text) + '</div>';
          dmEl.appendChild(div);
        });
        dmEl.scrollTop = dmEl.scrollHeight;
      } catch(e) {}
    }

    async function sendDM() {
      const input = document.getElementById('dm-input');
      if (!input || !currentDMTarget) return;
      const text = input.value.trim();
      if (!text) return;
      input.value = '';
      const dmKey = 'dm:' + [currentUser, currentDMTarget.user].sort().join(':');
      let msgs = [];
      try { const r = await window.storage.get(dmKey, true); if (r && r.value) msgs = JSON.parse(r.value); } catch(e) {}
      msgs.push({ from: currentUser, text, ts: Date.now() });
      if (msgs.length > 200) msgs = msgs.slice(-200);
      try { await window.storage.set(dmKey, JSON.stringify(msgs), true); loadDMConvo(currentDMTarget.user); } catch(e) {}
    }

    function getAv() {
      const photo = getCustomAvatarPhoto();
      if (photo) return photo; // base64 for chat presence
      return getFullAvatar();
    }

    function startChatPolling() {
      if (chatPollInterval) return;
      chatRenderedIds.clear();
      // init info de sidebar
      setTimeout(() => {
        const userNameEl = document.getElementById('chat-user-name-bottom');
        const userAvEl = document.getElementById('chat-user-av-bottom');
        if (userNameEl && currentUser) userNameEl.textContent = currentUser;
        // mostrar foto/emoji en sidebar
      if (userAvEl) {
        const photo = getCustomAvatarPhoto();
        if (photo) {
          userAvEl.style.overflow = 'hidden';
          userAvEl.innerHTML = '<img src="' + photo + '" style="width:100%;height:100%;object-fit:cover;border-radius:50%;" onerror="this.parentElement.textContent=\'🦫\'">';
        } else {
          userAvEl.textContent = getFullAvatar();
        }
      }
      }, 100);
      showChatTab('global');
      chatPoll();
      heartbeat();
      pollFriendsBadge();
      chatPollInterval = setInterval(() => { chatPoll(); pollFriendsBadge(); }, 6000);
    }

    async function pollFriendsBadge() {
      if (!currentUser) return;
      try {
        const myData = await getFriendsData(currentUser);
        const badge = document.getElementById('friends-req-badge');
        if (badge) {
          const count = myData.recvReqs.length;
          badge.style.display = count > 0 ? 'inline' : 'none';
          badge.textContent = count;
        }
      } catch(e) {}
    }


    async function adminRefreshStats() {
      try {
        let active = [];
        try { const r = await window.storage.get('presence', true); if (r && r.value) active = JSON.parse(r.value).filter(u => Date.now() - u.ts < 90000); } catch(e) {}
        const elOnline = document.getElementById('stat-online');
        if (elOnline) elOnline.textContent = active.length;
        const elList = document.getElementById('stat-online-list');
        if (elList) elList.innerHTML = active.length
          ? active.map(u => '<span style="color:#4ade80;margin-right:10px;">🟢 @' + escapeHtml(u.user) + '</span>').join('')
          : '<span style="color:var(--text-muted)">Nadie conectado ahora</span>';
        const users = JSON.parse(localStorage.getItem('capios_users') || '{}');
        const elTotal = document.getElementById('stat-total-users');
        if (elTotal) elTotal.textContent = Object.keys(users).length;
        const elGems = document.getElementById('stat-total-gems');
        if (elGems) elGems.textContent = gems + ' 💎';
        try {
          const cr = await window.storage.get('globalchat', true);
          const cm = cr && cr.value ? JSON.parse(cr.value) : [];
          const elChat = document.getElementById('stat-chat-msgs');
          if (elChat) elChat.textContent = cm.length;
        } catch(e) {}
      } catch(e) {}
    }


    async function adminStartEvent(minutes) {
      const endTs = Date.now() + minutes * 60000;
      const ev = { active: true, endTs, multiplier: 2 };
      try {
        await window.storage.set('admin:event', JSON.stringify(ev), true);
        const msg = { id: String(Date.now()), title: '🎉 Evento x2 Gemas!', text: 'Por ' + minutes + ' minutos ganas el doble de gemas! 🔥', urgent: true };
        await window.storage.set('admin:global_msg', JSON.stringify(msg), true);
        window._activeEventMult = 2;
        adminLog('⏱️ Evento x2 por ' + minutes + ' min');
        adminToast('✅ Evento x2 activo!');
        updateEventStatus(ev);
      } catch(e) { adminToast('⚠️ Error'); }
    }

    async function adminStopEvent() {
      try {
        await window.storage.set('admin:event', JSON.stringify({ active: false }), true);
        window._activeEventMult = 1;
        adminLog('🛑 Evento detenido');
        adminToast('✅ Evento detenido');
        updateEventStatus({ active: false });
      } catch(e) {}
    }

    function updateEventStatus(ev) {
      const el = document.getElementById('event-status-label');
      if (!el) return;
      if (!ev || !ev.active) { el.textContent = 'Sin evento activo'; el.style.color = 'var(--text-muted)'; }
      else { const left = Math.max(0, Math.round((ev.endTs - Date.now()) / 60000)); el.innerHTML = '<span style="color:#4ade80;">🔥 Evento x2 ACTIVO — ' + left + ' min restantes</span>'; }
    }

    async function checkEventMultiplier() {
      try {
        const r = await window.storage.get('admin:event', true);
        if (!r || !r.value) { window._activeEventMult = 1; return; }
        const ev = JSON.parse(r.value);
        if (!ev.active || Date.now() > ev.endTs) { window._activeEventMult = 1; }
        else {
          window._activeEventMult = ev.multiplier || 1;
          if (window._activeEventMult > 1 && !window._eventBannerShown) {
            window._eventBannerShown = true;
            showToast('🎉 Evento x2!', 'Ganas el doble de gemas ahora');
          }
        }
      } catch(e) { window._activeEventMult = 1; }
    }


    async function adminBanUser() {
      const input = document.getElementById('ban-user-input');
      if (!input) return;
      const user = input.value.trim().toLowerCase();
      if (!user) { adminToast('⚠️ Escribe un usuario'); return; }
      try {
        await window.storage.set('ban:' + user, 'true', true);
        adminLog('Baneado: @' + user);
        adminToast('✅ @' + user + ' baneado');
        input.value = '';
        renderBanList();
      } catch(e) { adminToast('⚠️ Error al banear'); }
    }

    async function adminUnbanUser(user) {
      try {
        await window.storage.delete('ban:' + user, true);
        adminLog('✅ Desbaneado: @' + user);
        adminToast('✅ @' + user + ' desbaneado');
        renderBanList();
      } catch(e) {}
    }

    async function renderBanList() {
      const list = document.getElementById('admin-bans-list');
      if (!list) return;
      list.innerHTML = '<div style="color:var(--text-muted);font-size:12px;">Cargando...</div>';
      try {
        const keys = await window.storage.list('ban:', true);
        if (!keys || !keys.keys || keys.keys.length === 0) {
          list.innerHTML = '<div style="color:var(--text-muted);font-size:12px;">No hay usuarios baneados.</div>';
          return;
        }
        list.innerHTML = '';
        for (const k of keys.keys) {
          const uname = k.replace('ban:', '');
          const row = document.createElement('div');
          row.style.cssText = 'display:flex;justify-content:space-between;align-items:center;background:rgba(255,71,87,0.08);border:1px solid rgba(255,71,87,0.25);border-radius:10px;padding:7px 12px;font-size:12px;margin-bottom:6px;';
          row.innerHTML = `<span style="color:#ff4757;">🚫 @${escapeHtml(uname)}</span><button onclick="adminUnbanUser('${uname}')" style="background:rgba(80,250,123,0.15);border:1px solid rgba(80,250,123,0.3);color:#4ade80;padding:3px 10px;border-radius:7px;cursor:pointer;font-size:11px;font-weight:700;">Desbanear</button>`;
          list.appendChild(row);
        }
      } catch(e) { list.innerHTML = '<div style="color:var(--text-muted);font-size:12px;">Error.</div>'; }
    }





/* --- block (orig 10331-11788) --- */


  let activeWindowId = null;
  let highestZ = 20;
  let openApps = {}; // { id: { label, icon, minimized } }
  let desktopHidden = false;
  let widgetsHidden = false;
  let windowingSystemReady = false;

  function saveWinPos(id, x, y, w, h) {
    try { localStorage.setItem('capios_win_' + id, JSON.stringify({x,y,w,h})); } catch(e){}
  }
  function loadWinPos(id) {
    try { const d = localStorage.getItem('capios_win_' + id); return d ? JSON.parse(d) : null; } catch(e){ return null; }
  }
  function saveWidgetPos(id, x, y) {
    try { localStorage.setItem('capios_wid_' + id, JSON.stringify({x,y})); } catch(e){}
  }
  function loadWidgetPos(id) {
    try { const d = localStorage.getItem('capios_wid_' + id); return d ? JSON.parse(d) : null; } catch(e){ return null; }
  }

  const APP_REGISTRY = {
    'store':      { label:'Shop',        icon:'fa-bag-shopping' },
    'gallery':    { label:'Galería',     icon:'fa-image' },
    'games':      { label:'Juegos',      icon:'fa-gamepad' },
    'notes':      { label:'Notas',       icon:'fa-pen' },
    'pet':        { label:'Capi Pet',    icon:'fa-hippo' },
    'chat':       { label:'Chat',        icon:'fa-comment' },
    'settings':   { label:'Ajustes',     icon:'fa-gear' },
    'leaderboard':{ label:'Ranking',     icon:'fa-trophy' },
    'weather':    { label:'Clima',       icon:'fa-cloud-sun' },
    'browser':    { label:'Browser',     icon:'fa-globe' },
    'calc':       { label:'Calc',        icon:'fa-calculator' },
    'admin':      { label:'Admin',       icon:'fa-shield' },
  };

  window.addEventListener('openapp', function(e) { trackOpenApp(e.detail); bringToFront(e.detail); });

  function trackOpenApp(id) {
    const meta = APP_REGISTRY[id] || { label: id, icon: '📱' };
    if (!openApps[id]) {
      openApps[id] = { label: meta.label, icon: meta.icon, minimized: false };
    } else {
      openApps[id].minimized = false;
    }
    renderTaskbarApps();
    updateDesktopBlur();
  }

  const _origMinimize = window.minimizeApp;
  window.minimizeApp = function(id) {
    const el = document.getElementById('app-' + id);
    if (!el) return;
    el.classList.add('minimizing');
    setTimeout(() => {
      el.classList.remove('minimizing');
      _origMinimize && _origMinimize(id);
      if (openApps[id]) openApps[id].minimized = true;
      renderTaskbarApps();
      updateDesktopBlur();
    }, 240);
  };

  const _origClose = window.closeApp;
  window.closeApp = function(id) {
    _origClose && _origClose(id);
    delete openApps[id];
    renderTaskbarApps();
    if (activeWindowId === id) { activeWindowId = null; }
    updateDesktopBlur();
  };

  function bringToFront(id) {
    const el = document.getElementById('app-' + id);
    if (!el || el.style.display === 'none') return;
    highestZ++;
    el.style.zIndex = highestZ;
    document.querySelectorAll('.window').forEach(w => w.classList.remove('active-window'));
    el.classList.add('active-window');
    activeWindowId = id;
    updateDesktopBlur();
  }

  function updateDesktopBlur() {
    const overlay = document.getElementById('desktop-blur-overlay');
    if (!overlay) return;
    const anyOpen = Object.keys(openApps).some(id => !openApps[id].minimized);
    overlay.classList.toggle('active', anyOpen);
  }

  function renderTaskbarApps() {
    const container = document.getElementById('taskbar-open-apps');
    if (!container) return;
    container.innerHTML = '';
    Object.entries(openApps).forEach(([id, info]) => {
      const btn = document.createElement('div');
      btn.className = 'taskbar-open-app' + (info.minimized ? ' minimized-app' : '');
      btn.innerHTML = `<span>${info.icon}</span><span class="app-dot"></span><span class="app-label">${info.label}</span>`;
      btn.title = info.label;
      btn.onclick = () => toggleAppFromTaskbar(id);
      container.appendChild(btn);
    });
  }

  function toggleAppFromTaskbar(id) {
    const el = document.getElementById('app-' + id);
    if (!el) return;
    if (openApps[id] && openApps[id].minimized) {
      // Restore
      el.style.display = 'flex';
      el.classList.remove('minimized');
      el.classList.add('restoring');
      setTimeout(() => el.classList.remove('restoring'), 300);
      openApps[id].minimized = false;
      bringToFront(id);
      renderTaskbarApps();
      updateDesktopBlur();
    } else if (activeWindowId === id) {
      // Minimize
      minimizeApp(id);
    } else {
      bringToFront(id);
    }
  }

  function toggleShowDesktop() {
    desktopHidden = !desktopHidden;
    document.querySelectorAll('.window').forEach(win => {
      if (win.style.display === 'none') return;
      if (desktopHidden) {
        win.classList.add('hiding-desktop');
        setTimeout(() => {
          win.classList.remove('hiding-desktop');
          win._wasVisible = true;
          win.style.display = 'none';
        }, 210);
      } else {
        if (win._wasVisible) {
          win.style.display = 'flex';
          win.classList.add('showing-desktop');
          setTimeout(() => win.classList.remove('showing-desktop'), 300);
          delete win._wasVisible;
        }
      }
    });
    if (!desktopHidden) {
      Object.keys(openApps).forEach(id => { if (openApps[id]) openApps[id].minimized = false; });
      renderTaskbarApps();
      updateDesktopBlur();
    } else {
      updateDesktopBlur();
    }
    const btn = document.getElementById('show-desktop-btn');
    if (btn) btn.classList.toggle('active', desktopHidden);
  }

  function makeDraggable(win) {
    const header = win.querySelector('.window-header') || win.querySelector('[data-window-drag]') || (win.id === 'app-chat' ? win.querySelector('#chat-sidebar > div:first-child') : null);
    if (!header || header._dragSetup) return;
    header._dragSetup = true;
    header.style.cursor = 'move';
    const id = win.id.replace('app-', '');

    let dragging = false, startX, startY, startL, startT;

    function onStart(e) {
      if (e.target.closest('button, input, textarea, select, a, .win-btn') || win.classList.contains('fullscreen')) return;
      dragging = true;
      const rect = win.getBoundingClientRect();
      const touch = e.touches ? e.touches[0] : e;
      startX = touch.clientX; startY = touch.clientY;
      startL = rect.left; startT = rect.top;
      win.style.position = 'fixed';
      win.style.margin = '0';
      win.style.left = startL + 'px';
      win.style.top  = startT + 'px';
      bringToFront(id);
      document.addEventListener(e.touches ? 'touchmove' : 'mousemove', onMove, { passive: false });
      document.addEventListener(e.touches ? 'touchend' : 'mouseup', onEnd);
      e.preventDefault();
    }

    function onMove(e) {
      if (!dragging) return;
      const touch = e.touches ? e.touches[0] : e;
      let dx = touch.clientX - startX;
      let dy = touch.clientY - startY;
      let newL = startL + dx;
      let newT = startT + dy;

      // límites de pantalla
      newL = Math.max(0, Math.min(newL, window.innerWidth - win.offsetWidth));
      newT = Math.max(44, Math.min(newT, window.innerHeight - 58 - win.offsetHeight));

      // detección de snap
      const snap = checkSnap(newL, newT, win.offsetWidth, win.offsetHeight);
      showSnapIndicator(snap);

      win.style.left = newL + 'px';
      win.style.top  = newT + 'px';
      e.preventDefault();
    }

    function onEnd(e) {
      if (!dragging) return;
      dragging = false;
      hideSnapIndicator();
      const snap = checkSnap(parseInt(win.style.left), parseInt(win.style.top), win.offsetWidth, win.offsetHeight);
      if (snap) applySnap(win, snap);
      saveWinPos(id, parseInt(win.style.left), parseInt(win.style.top), win.offsetWidth, win.offsetHeight);
      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseup', onEnd);
      document.removeEventListener('touchmove', onMove);
      document.removeEventListener('touchend', onEnd);
    }

    header.addEventListener('mousedown', onStart);
    header.addEventListener('touchstart', onStart, { passive: false });
  }

  const SNAP_THRESHOLD = 30;
  function checkSnap(x, y, w, h) {
    const vw = window.innerWidth, vh = window.innerHeight - 58;
    if (x < SNAP_THRESHOLD) return 'left';
    if (x + w > vw - SNAP_THRESHOLD) return 'right';
    if (y < 44 + SNAP_THRESHOLD) return 'top';
    return null;
  }
  function showSnapIndicator(snap) {
    const ind = document.getElementById('snap-indicator');
    if (!ind) return;
    if (!snap) { ind.style.display = 'none'; return; }
    const vw = window.innerWidth, vh = window.innerHeight - 58;
    ind.style.display = 'block';
    if (snap === 'left')  { ind.style.cssText += ';left:8px;top:52px;width:' + (vw/2 - 16) + 'px;height:' + (vh-16) + 'px;'; }
    if (snap === 'right') { ind.style.cssText += ';left:' + (vw/2+8) + 'px;top:52px;width:' + (vw/2-16) + 'px;height:' + (vh-16) + 'px;'; }
    if (snap === 'top')   { ind.style.cssText += ';left:8px;top:52px;width:' + (vw-16) + 'px;height:' + (vh-16) + 'px;'; }
  }
  function hideSnapIndicator() {
    const ind = document.getElementById('snap-indicator');
    if (ind) ind.style.display = 'none';
  }
  function applySnap(win, snap) {
    const vw = window.innerWidth, vh = window.innerHeight - 58;
    const id = win.id.replace('app-', '');
    if (snap === 'left')  { win.style.left='8px'; win.style.top='52px'; win.style.width=(vw/2-16)+'px'; win.style.height=(vh-16)+'px'; }
    if (snap === 'right') { win.style.left=(vw/2+8)+'px'; win.style.top='52px'; win.style.width=(vw/2-16)+'px'; win.style.height=(vh-16)+'px'; }
    if (snap === 'top')   { win.style.left='8px'; win.style.top='52px'; win.style.width=(vw-16)+'px'; win.style.height=(vh-16)+'px'; }
  }

  function makeWidgetDraggable(wid) {
    if (wid._dragSetup) return;
    wid._dragSetup = true;
    const id = wid.id.replace('widget-', '');

    let dragging = false, startX, startY, startL, startT;

    function onStart(e) {
      if (e.target.closest('.wid-close')) return;
      dragging = true;
      const rect = wid.getBoundingClientRect();
      const touch = e.touches ? e.touches[0] : e;
      startX = touch.clientX; startY = touch.clientY;
      startL = rect.left; startT = rect.top;
      wid.style.position = 'fixed';
      wid.style.left = startL + 'px';
      wid.style.top  = startT + 'px';
      wid.style.right = 'auto';
      wid.style.bottom = 'auto';
      document.addEventListener(e.touches ? 'touchmove' : 'mousemove', onMove, { passive: false });
      document.addEventListener(e.touches ? 'touchend' : 'mouseup', onEnd);
      e.preventDefault();
    }
    let _widRaf = null;
    function onMove(e) {
      if (!dragging) return;
      const touch = e.touches ? e.touches[0] : e;
      let newL = startL + (touch.clientX - startX);
      let newT = startT + (touch.clientY - startY);
      e.preventDefault();
      if (_widRaf) return;
      _widRaf = requestAnimationFrame(() => {
        newL = Math.max(0, Math.min(newL, window.innerWidth - wid.offsetWidth));
        newT = Math.max(44, Math.min(newT, window.innerHeight - 58 - wid.offsetHeight));
        wid.style.left = newL + 'px';
        wid.style.top  = newT + 'px';
        _widRaf = null;
      });
    }
    function onEnd() {
      if (!dragging) return;
      dragging = false;
      saveWidgetPos(id, parseInt(wid.style.left), parseInt(wid.style.top));
      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseup', onEnd);
      document.removeEventListener('touchmove', onMove);
      document.removeEventListener('touchend', onEnd);
    }
    wid.addEventListener('mousedown', onStart);
    wid.addEventListener('touchstart', onStart, { passive: false });
  }

  function toggleAllWidgets() {
    widgetsHidden = !widgetsHidden;
    document.querySelectorAll('.desk-widget').forEach(w => {
      w.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
      w.style.opacity = widgetsHidden ? '0' : '1';
      w.style.transform = widgetsHidden ? 'scale(0.8)' : 'scale(1)';
      w.style.pointerEvents = widgetsHidden ? 'none' : 'all';
    });
    const btn = document.querySelector('.widget-toggle-btn[data-toggle="widgets"]');
    if (btn) btn.classList.toggle('active', widgetsHidden);
  }

  function toggleAllAppIcons() {
    const icons = document.getElementById('desktop-icons');
    if (!icons) return;
    const isHidden = icons.style.opacity === '0';
    icons.style.transition = 'opacity 0.3s ease';
    icons.style.opacity = isHidden ? '1' : '0';
    icons.style.pointerEvents = isHidden ? 'all' : 'none';
  }

  function updateGemWidget(val) {
    const el = document.getElementById('wid-gem-count');
    if (!el) return;
    const old = parseInt(el.textContent) || 0;
    if (old === val) return;
    el.textContent = val;
    const wid = document.getElementById('widget-gems');
    const gemVal = wid && wid.querySelector('.wid-gems-val');
    if (gemVal) {
      gemVal.classList.add('updating');
      setTimeout(() => gemVal.classList.remove('updating'), 400);
    }
  }

  function buildEnhancedTaskbar() {
    const taskbar = document.getElementById('taskbar');
    if (!taskbar) return;

    // apps fijadas junto a búsqueda
    const sep = taskbar.querySelector('.taskbar-sep');
    if (sep && !document.getElementById('taskbar-open-apps')) {
      const appsDiv = document.createElement('div');
      appsDiv.id = 'taskbar-open-apps';
      const tr = taskbar.querySelector('.taskbar-right');
      if (tr) taskbar.insertBefore(appsDiv, tr);
      else taskbar.appendChild(appsDiv);

      const sdBtn = document.createElement('div');
      sdBtn.id = 'show-desktop-btn';
      sdBtn.innerHTML = '<i class="fa-solid fa-desktop"></i> Desktop';
      sdBtn.onclick = toggleShowDesktop;
      sdBtn.title = 'Mostrar escritorio';
      if (tr) taskbar.insertBefore(sdBtn, tr);
      else taskbar.appendChild(sdBtn);
    }
  }

  function buildWidgetBar() {
    if (document.getElementById('widget-bar')) return;
    const bar = document.createElement('div');
    bar.id = 'widget-bar';
    bar.innerHTML = `
      <button class="widget-toggle-btn" data-toggle="widgets" onclick="toggleAllWidgets()" title="Mostrar/ocultar widgets">
        <i class="fa-solid fa-border-all"></i> Widgets
      </button>
      <button class="widget-toggle-btn" onclick="toggleAllAppIcons()" title="Mostrar/ocultar iconos del escritorio">
        <i class="fa-solid fa-th"></i> Iconos
      </button>
      <div id="fps-counter" style="padding:5px 10px;border-radius:10px;border:1px solid rgba(255,255,255,0.1);background:rgba(18,18,24,0.85);backdrop-filter:blur(12px);font-size:11px;display:flex;align-items:center;gap:4px;user-select:none;pointer-events:none;transition:border-color 0.4s;">
        <span id="fps-value" style="font-weight:800;font-size:13px;font-family:monospace;letter-spacing:-0.5px;transition:color 0.4s;color:#00ff88;">--</span>
        <span style="opacity:0.45;color:var(--text-muted);font-size:10px;font-family:sans-serif;letter-spacing:0.5px;">fps</span>
      </div>
    `;
    const desktopContent = document.getElementById('desktop-content');
    if (desktopContent) desktopContent.appendChild(bar);
  }

  function buildBlurOverlay() {
    if (document.getElementById('desktop-blur-overlay')) return;
    const overlay = document.createElement('div');
    overlay.id = 'desktop-blur-overlay';
    const desktop = document.getElementById('desktop');
    if (desktop) desktop.insertBefore(overlay, desktop.firstChild);
  }

  function buildSnapIndicator() {
    if (document.getElementById('snap-indicator')) return;
    const ind = document.createElement('div');
    ind.id = 'snap-indicator';
    document.body.appendChild(ind);
  }

  function initWindowingSystem() {
    if (windowingSystemReady) return;
    windowingSystemReady = true;
    buildEnhancedTaskbar();
    buildWidgetBar();
    buildBlurOverlay();
    buildSnapIndicator();

    // configurar arrastre de ventanas
    document.querySelectorAll('.window').forEach(win => {
      win.addEventListener('mousedown', () => {
        const id = win.id.replace('app-', '');
        bringToFront(id);
      });
      win.addEventListener('touchstart', () => {
        const id = win.id.replace('app-', '');
        bringToFront(id);
      }, { passive: true });
      makeDraggable(win);

      // restaurar posición guardada
      const id = win.id.replace('app-', '');
      const saved = loadWinPos(id);
      if (saved) {
        win.style.position = 'fixed';
        win.style.left = Math.max(0, Math.min(saved.x, window.innerWidth - 200)) + 'px';
        win.style.top  = Math.max(44, Math.min(saved.y, window.innerHeight - 100)) + 'px';
        if (saved.w) win.style.width = saved.w + 'px';
        if (saved.h) win.style.height = saved.h + 'px';
      }
    });

    // configurar arrastre de widgets
    document.querySelectorAll('.desk-widget').forEach(wid => {
      makeWidgetDraggable(wid);
      // restaurar posición guardadas
      const id = wid.id.replace('widget-', '');
      const saved = loadWidgetPos(id);
      if (saved) {
        wid.style.position = 'fixed';
        wid.style.right = 'auto';
        wid.style.bottom = 'auto';
        wid.style.left = Math.max(0, Math.min(saved.x, window.innerWidth - wid.offsetWidth - 10)) + 'px';
        wid.style.top  = Math.max(44, Math.min(saved.y, window.innerHeight - 200)) + 'px';
      }
    });

    // sincronizar gemas
    const _origGemUpdate = window.updateGemDisplay;
    if (typeof updateGemDisplay === 'function') {
      const _old = window.updateGemDisplay;
      window.updateGemDisplay = function() {
        _old && _old();
        updateGemWidget(typeof gems !== 'undefined' ? gems : 0);
      };
    }

    // poll gemas para widget
    setInterval(() => {
      if (typeof gems !== 'undefined') updateGemWidget(gems);
    }, 5000);
  }


  function updatePwMeter(val) {
    const wrap = document.getElementById('pw-meter-wrap');
    const fill = document.getElementById('pw-meter-fill');
    const label = document.getElementById('pw-meter-label');
    if (!wrap || !fill) return;
    if (!wrap.style.display || wrap.style.display === 'none') return;
    let score = 0;
    if (val.length >= 8) score++;
    if (val.length >= 12) score++;
    if (/[A-Z]/.test(val)) score++;
    if (/[0-9]/.test(val)) score++;
    if (/[^A-Za-z0-9]/.test(val)) score++;
    const levels = [
      { pct: '0%', color: 'transparent', text: '' },
      { pct: '20%', color: '#ff4757', text: 'Muy débil' },
      { pct: '40%', color: '#ffa502', text: 'Débil' },
      { pct: '60%', color: '#ffdd59', text: 'Regular' },
      { pct: '80%', color: '#7bed9f', text: 'Fuerte' },
      { pct: '100%', color: '#2ed573', text: 'Muy fuerte' },
    ];
    const lv = levels[Math.min(score, 5)];
    fill.style.width = val.length ? lv.pct : '0%';
    fill.style.background = lv.color;
    label.textContent = val.length ? lv.text : 'Seguridad de la contraseña';
    label.style.color = lv.color || 'var(--text-muted)';
  }

  let _selectedAuthAvatar = '🦫';
  function selectAuthAvatar(el) {
    document.querySelectorAll('.auth-avatar-opt').forEach(e => e.classList.remove('selected'));
    el.classList.add('selected');
    _selectedAuthAvatar = el.dataset.emoji;
  }

  // toggle auth mode
  const _origToggleAuthMode = window.toggleAuthMode;
  window.toggleAuthMode = function() {
    _origToggleAuthMode && _origToggleAuthMode();
    setTimeout(() => {
      const isRegister = document.getElementById('auth-title') && document.getElementById('auth-title').textContent !== 'Bienvenido';
      const emailWrap = document.getElementById('auth-email');
      const pass2 = document.getElementById('auth-pass2');
      const pwMeter = document.getElementById('pw-meter-wrap');
      const avatarWrap = document.getElementById('auth-avatar-wrap');
      const termsWrap = document.getElementById('auth-terms-wrap');
      if (emailWrap) emailWrap.style.display = isRegister ? 'block' : 'none';
      if (pass2) pass2.style.display = isRegister ? 'block' : 'none';
      if (pwMeter) pwMeter.style.display = isRegister ? 'block' : 'none';
      if (avatarWrap) avatarWrap.style.display = isRegister ? 'block' : 'none';
      if (termsWrap) termsWrap.style.display = isRegister ? 'flex' : 'none';
    }, 50);
  };

  function toggleLockOption(key, el) {
    el.classList.toggle('on');
    const on = el.classList.contains('on');
    if (key === 'quote') {
      const q = document.getElementById('lock-quote');
      if (q) q.style.display = on ? 'block' : 'none';
    } else if (key === 'weather') {
      const w = document.getElementById('lock-weather-mini');
      if (w) w.style.display = on ? 'flex' : 'none';
    } else if (key === 'notifs') {
      const n = document.getElementById('lock-notif-pill');
      if (n) n.style.display = on ? 'flex' : 'none';
    }
    try { window.storage && window.storage.set('lock-opt-' + key, on ? '1' : '0'); } catch(e) {}
  }

  function setLockEmoji(emoji, el) {
    document.querySelectorAll('#lock-emoji-picker .auth-avatar-opt').forEach(e => e.classList.remove('selected'));
    if (el) el.classList.add('selected');
    const le = document.getElementById('lock-capi-emoji');
    if (le) le.textContent = emoji;
    try { window.storage && window.storage.set('lock-emoji', emoji); } catch(e) {}
  }

  function setLockAccent(color) {
    const overlay = document.getElementById('lock-bg-overlay');
    if (overlay) overlay.style.background = 'radial-gradient(circle at 50% 30%,' + color + ',transparent 65%)';
    try { window.storage && window.storage.set('lock-accent', color); } catch(e) {}
  }

  function saveLockQuote(val) {
    const q = document.getElementById('lock-quote');
    if (q && val.trim()) q.textContent = '«' + val.trim() + '»';
    try { window.storage && window.storage.set('lock-quote-text', val); } catch(e) {}
  }

  const DAILY_TASK_POOL = [
    { id:'feed_pet',        label:'Alimenta a Capi Pet',     desc:'Pulsa "Alimentar" en Capi Pet',     icon:'', reward:8  },
    { id:'play_pet',        label:'Juega con Capi Pet',      desc:'Pulsa "Jugar" con tu capibara',      icon:'', reward:6  },
    { id:'change_language', label:'Cambia el idioma',        desc:'Cambia el idioma en Ajustes',        icon:'', reward:7  },
    { id:'change_wallpaper',label:'Cambia el fondo',         desc:'Elige un nuevo wallpaper',           icon:'', reward:5  },
    { id:'open_arcade',     label:'Abre Capi Arcade',        desc:'Abre la app de Juegos',              icon:'', reward:6  },
    { id:'open_pet',        label:'Visita a Capi Pet',       desc:'Abre la app de tu mascota',          icon:'', reward:4  },
    { id:'open_settings',   label:'Explora Ajustes',         desc:'Abre la app de Configuración',       icon:'', reward:4  },
    { id:'write_note',      label:'Escribe una nota',        desc:'Crea una nota en la app Notas',      icon:'', reward:8  },
    { id:'send_message',    label:'Envía un mensaje',        desc:'Envía un mensaje en el Chat global', icon:'', reward:7  },
    { id:'unlock_screen',   label:'Desbloquea el sistema',   desc:'Usa la pantalla de bloqueo',         icon:'', reward:5  },
    { id:'check_weather',   label:'Consulta el clima',       desc:'Abre la app del Tiempo',             icon:'', reward:4  },
  ];

  function getDailyTasksState() {
    const key = 'capi_daily_tasks_' + (typeof currentUser !== 'undefined' ? currentUser || 'guest' : 'guest');
    const now = Date.now();
    let state = JSON.parse(localStorage.getItem(key) || 'null');
    // reiniciar si es nuevo día
    const todayStart = new Date(); todayStart.setHours(0,0,0,0);
    if (!state || state.date !== todayStart.getTime()) {
      // elegir 3 tareas al azar
      const shuffled = [...DAILY_TASK_POOL].sort(() => Math.random() - 0.5);
      state = { date: todayStart.getTime(), tasks: shuffled.slice(0,3).map(t => ({...t, done: false})) };
      localStorage.setItem(key, JSON.stringify(state));
    }
    return state;
  }

  function saveDailyTasksState(state) {
    const key = 'capi_daily_tasks_' + (typeof currentUser !== 'undefined' ? currentUser || 'guest' : 'guest');
    localStorage.setItem(key, JSON.stringify(state));
  }

  function dailyTaskEvent(eventId) {
    const state = getDailyTasksState();
    let changed = false;
    state.tasks.forEach(task => {
      if (task.id === eventId && !task.done) {
        task.done = true;
        changed = true;
        if (typeof addGems === 'function') addGems(task.reward);
        if (typeof addXP === 'function') addXP(task.reward * 2);
        if (typeof showToast === 'function') showToast('Tarea completada!', `+${task.reward} · "${task.label}"`, 'gems');
      }
    });
    if (changed) {
      saveDailyTasksState(state);
      renderDailyTasks();
      // verificar si todas completadas
      if (state.tasks.every(t => t.done)) {
        setTimeout(() => {
          if (typeof addGems === 'function') addGems(15);
          if (typeof showToast === 'function') showToast('🏆 ¡Todas las tareas!', '+15💎 bonus por completar el día', 'gems');
        }, 800);
      }
    }
  }

  function renderDailyTasks() {
    const container = document.getElementById('daily-tasks-list');
    if (!container) return;
    const state = getDailyTasksState();
    const done = state.tasks.filter(t => t.done).length;
    const total = state.tasks.length;
    // progreso del header
    const hdr = document.getElementById('daily-tasks-header');
    if (hdr) hdr.textContent = `${(typeof currentLang!=='undefined'&&currentLang==='en')?'Daily Tasks':'Tareas del día'} · ${done}/${total}`;
    // barra de progreso
    const bar = document.getElementById('daily-tasks-bar');
    if (bar) bar.style.width = ((done/total)*100) + '%';

    container.innerHTML = '';
    state.tasks.forEach(task => {
      const div = document.createElement('div');
      div.style.cssText = `display:flex;align-items:center;gap:12px;padding:12px 14px;border-radius:14px;margin-bottom:8px;background:${task.done ? 'rgba(80,250,123,0.08)' : 'rgba(255,255,255,0.04)'};border:1px solid ${task.done ? 'rgba(80,250,123,0.25)' : 'var(--border-glass)'};transition:all 0.3s;`;
      div.innerHTML = `
        <div style="font-size:22px;flex-shrink:0;">${task.icon}</div>
        <div style="flex:1;min-width:0;">
          <div style="font-size:13px;font-weight:${task.done?'600':'500'};color:${task.done?'#4ade80':'var(--text-main)'};text-decoration:${task.done?'line-through':'none'};opacity:${task.done?'0.7':'1'};">${task.label}</div>
          <div style="font-size:11px;color:var(--text-muted);margin-top:2px;">${task.desc}</div>
        </div>
        <div style="display:flex;align-items:center;gap:4px;flex-shrink:0;">
          ${task.done
            ? '<span style="font-size:18px;">✅</span>'
            : `<span style="font-size:11px;color:var(--accent-color);font-weight:700;">+${task.reward}💎</span>`
          }
        </div>
      `;
      container.appendChild(div);
    });
  }

  // Inject Daily Tasks widget in the control panel / somewhere visible
  (function injectDailyTasksUI() {
    // inyectar como widget
    setTimeout(() => {
      // buscar área de widget
      const tasksApp = document.getElementById('app-todo');
      if (tasksApp) {
        // panel de tareas diarias
      }
      // inyectar como indicador del dock
      updateDailyTasksDock();
    }, 2000);
  })();

  function updateDailyTasksDock() {
    const state = getDailyTasksState();
    const done = state.tasks.filter(t => t.done).length;
    const total = state.tasks.length;
    // buscar o crear badge
    let badge = document.getElementById('daily-tasks-dock-badge');
    const dockTasks = document.getElementById('dock-todo');
    if (dockTasks && !badge) {
      badge = document.createElement('span');
      badge.id = 'daily-tasks-dock-badge';
      badge.style.cssText = 'position:absolute;top:-4px;right:-4px;background:#ff4757;color:white;font-size:9px;font-weight:900;border-radius:50%;width:16px;height:16px;display:flex;align-items:center;justify-content:center;pointer-events:none;z-index:5;';
      dockTasks.style.position = 'relative';
      dockTasks.appendChild(badge);
    }
    if (badge) {
      const pending = total - done;
      badge.textContent = pending;
      badge.style.display = pending > 0 ? 'flex' : 'none';
    }
  }

  // hook notas para tareas
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Enter' && document.activeElement && document.activeElement.id === 'note-input') {
      dailyTaskEvent('write_note');
    }
  });

  // hook app de clima
  window.addEventListener('openapp', function(e) { if (e.detail === 'weather') dailyTaskEvent('check_weather'); updateDailyTasksDock(); });

  // cargar prefs de lock screen
  (async function loadLockPrefs() {
    await new Promise(r => setTimeout(r, 3000));
    try {
      const emoji = await window.storage.get('lock-emoji');
      if (emoji && emoji.value) setLockEmoji(emoji.value, null);
      const accent = await window.storage.get('lock-accent');
      if (accent && accent.value) setLockAccent(accent.value);
      const qt = await window.storage.get('lock-quote-text');
      if (qt && qt.value) { const q = document.getElementById('lock-quote'); if(q) q.textContent = '«' + qt.value + '»'; }
    } catch(e) {}
  })();

  const _accKeys = ['reduce-motion','large-text','high-contrast','colorblind','underline-links'];
  function toggleAccessibility(key, el) {
    el.classList.toggle('on');
    const on = el.classList.contains('on');
    _applyAccessibility(key, on);
    localStorage.setItem('capi-acc-' + key, on ? '1' : '0');
  }
  function _applyAccessibility(key, on) {
    if (key === 'reduce-motion') {
      document.documentElement.style.setProperty('--bouncy', on ? 'linear' : 'cubic-bezier(0.34, 1.56, 0.64, 1)');
    } else if (key === 'large-text') {
      document.documentElement.style.fontSize = on ? '17px' : '';
    } else if (key === 'high-contrast') {
      document.documentElement.style.setProperty('--border-glass', on ? 'rgba(255,255,255,0.28)' : 'rgba(255,255,255,0.09)');
      document.documentElement.style.setProperty('--text-muted', on ? '#d0d5de' : '#a4b0be');
      document.documentElement.style.setProperty('--bg-glass', on ? 'rgba(10,10,18,0.92)' : 'rgba(18,18,24,0.72)');
    } else if (key === 'colorblind') {
      document.documentElement.style.filter = on ? 'saturate(0.5) hue-rotate(30deg)' : '';
    } else if (key === 'underline-links') {
      let st = document.getElementById('acc-underline-style');
      if (on) {
        if (!st) { st = document.createElement('style'); st.id = 'acc-underline-style'; document.head.appendChild(st); }
        st.textContent = 'button,a,[onclick]{text-decoration:underline !important;}';
      } else if (st) st.textContent = '';
    }
  }
  function applyReduceMotion(on) { _applyAccessibility('reduce-motion', on); }
  function applyLargeText(on) { _applyAccessibility('large-text', on); }
  function applyHighContrast(on) { _applyAccessibility('high-contrast', on); }

  function setCursorSize(size) {
    const svgL = encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><circle cx="4" cy="4" r="3" fill="white" stroke="black" stroke-width="1"/></svg>');
    const svgX = encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32"><circle cx="5" cy="5" r="4" fill="white" stroke="black" stroke-width="1.5"/></svg>');
    const sizes = { normal: '', large: 'url("data:image/svg+xml,' + svgL + '") 4 4, auto', xlarge: 'url("data:image/svg+xml,' + svgX + '") 5 5, auto' };
    document.body.style.cursor = sizes[size] || '';
    localStorage.setItem('capi-cursor-size', size);
    document.querySelectorAll('#cursor-size-btns button').forEach(b => {
      const isActive = b.id === 'cursor-btn-' + size;
      b.style.background = isActive ? 'rgba(255,159,67,0.18)' : 'rgba(255,255,255,0.04)';
      b.style.border = isActive ? '1px solid var(--accent-color)' : '1px solid var(--border-glass)';
      b.style.color = isActive ? 'var(--text-main)' : 'var(--text-muted)';
      b.style.fontWeight = isActive ? '700' : 'normal';
    });
  }
  function setFontSize(px) {
    document.documentElement.style.fontSize = px + 'px';
    const lbl = document.getElementById('font-size-label'); if (lbl) lbl.textContent = px + 'px';
    localStorage.setItem('capi-font-size', px);
  }
  // cargar prefs de accesibilidad
  (function loadAccessibilityPrefs() {
    _accKeys.forEach(key => {
      const val = localStorage.getItem('capi-acc-' + key);
      if (val === '1') {
        const sw = document.getElementById('sw-' + key);
        if (sw) sw.classList.add('on');
        _applyAccessibility(key, true);
      }
    });
    const cursorSz = localStorage.getItem('capi-cursor-size');
    if (cursorSz && cursorSz !== 'normal') setCursorSize(cursorSz);
    const savedFs = localStorage.getItem('capi-font-size');
    if (savedFs) {
      setFontSize(savedFs);
      const sl = document.getElementById('font-size-slider'); if (sl) sl.value = savedFs;
    }
  })();


  // música
  var _muGenre = 'all';
  var _muQuery = '';
  var _muTrack = 0;

  var _muTracks = [
    // LOFI
    {t:'Lofi Hip Hop Radio',a:'Lofi Girl',g:'lofi',y:'jfKfPfyJRdk'},
    {t:'Beats to Relax',a:'ChilledCow',g:'lofi',y:'5qap5aO4i9A'},
    {t:'Coffee Shop Lofi',a:'Cafe Music BGM',g:'lofi',y:'Dx5qFachd3A'},
    {t:'Rainy Day Lofi',a:'Rain Beats',g:'lofi',y:'mPZkdNFkNps'},
    {t:'Chillhop Essentials',a:'Chillhop Music',g:'lofi',y:'5yMr5F7i0ms'},
    {t:'Autumn Lofi',a:'The Jazz Hop Café',g:'lofi',y:'92FcFHGagjk'},
    {t:'Tokyo Lofi Night',a:'Lofi Tokyo',g:'lofi',y:'_AVT_0LMXX8'},
    {t:'Night Drive Lofi',a:'Lofi Fruits Music',g:'lofi',y:'H-MJHb6T9Ys'},
    {t:'Deep Focus Lofi',a:'Deep Focus Music',g:'lofi',y:'SXMBaA0gjTg'},
    {t:'Lazy Sunday',a:'Chillhop Music',g:'lofi',y:'lD-9mEHBmHI'},
    {t:'Cozy Lofi Mix',a:'Ambition',g:'lofi',y:'7NOSDKb0HlU'},
    {t:'Lofi Chill Mix',a:'The Lofi Mix',g:'lofi',y:'RHhk7VNe64U'},
    {t:'Spring Lofi',a:'The Jazz Hop Café',g:'lofi',y:'e8VPSAhkGhE'},
    {t:'Lofi Vibes',a:'Aesthetic Lofi',g:'lofi',y:'HuFYqnbVbzY'},
    {t:'Winter Lofi',a:'WinterBeats',g:'lofi',y:'kgx4WGK0oNU'},
    // POP
    {t:'1-800-273-8255',a:'Logic ft. Alessia Cara & Khalid',g:'pop',y:'Kb24RrHIbFk'},
    {t:'Blinding Lights',a:'The Weeknd',g:'pop',y:'4NRXx6U8ABQ'},
    {t:'Shape of You',a:'Ed Sheeran',g:'pop',y:'JGwWNGJdvx8'},
    {t:'Levitating',a:'Dua Lipa',g:'pop',y:'TUVcZfQe-Kw'},
    {t:'drivers license',a:'Olivia Rodrigo',g:'pop',y:'ZmDBbnmKpqQ'},
    {t:'Good 4 U',a:'Olivia Rodrigo',g:'pop',y:'gNi_6U5Pm_o'},
    {t:'As It Was',a:'Harry Styles',g:'pop',y:'H5v3kku4y6Q'},
    {t:'Anti-Hero',a:'Taylor Swift',g:'pop',y:'b1kbLwvqugk'},
    {t:'Flowers',a:'Miley Cyrus',g:'pop',y:'G7KNmW9a75Y'},
    {t:'Heat Waves',a:'Glass Animals',g:'pop',y:'mRD0-GxqHVo'},
    {t:'Easy On Me',a:'Adele',g:'pop',y:'U3ASj1L6_sY'},
    {t:'bad guy',a:'Billie Eilish',g:'pop',y:'DyDfgMOUjCI'},
    {t:'Happier Than Ever',a:'Billie Eilish',g:'pop',y:'5GJWxDKyk3A'},
    {t:'Stay',a:'The Kid LAROI & Justin Bieber',g:'pop',y:'kTJczUoc26U'},
    {t:'Save Your Tears',a:'The Weeknd',g:'pop',y:'XXYlFuWEuKI'},
    {t:'7 rings',a:'Ariana Grande',g:'pop',y:'QYh6mYIJG2Y'},
    {t:'thank u, next',a:'Ariana Grande',g:'pop',y:'gl1aHhXnN1k'},
    {t:'Leave the Door Open',a:'Silk Sonic',g:'pop',y:'adLGHcg_dH8'},
    {t:'Perfect',a:'Ed Sheeran',g:'pop',y:'2Vv-BfVoq4g'},
    {t:'Someone You Loved',a:'Lewis Capaldi',g:'pop',y:'zABZyAoxX9Y'},
    {t:'Shallow',a:'Lady Gaga & Bradley Cooper',g:'pop',y:'bo_efYhYU2A'},
    {t:'Watermelon Sugar',a:'Harry Styles',g:'pop',y:'E07s5ZYygMg'},
    {t:'Butter',a:'BTS',g:'pop',y:'WMweEpGlu_U'},
    {t:'Dynamite',a:'BTS',g:'pop',y:'gdZLi9oWNZg'},
    // HIP-HOP
    {t:'HUMBLE.',a:'Kendrick Lamar',g:'hiphop',y:'tvTRZJ-4EyI'},
    {t:"God's Plan",a:'Drake',g:'hiphop',y:'xpVfcZ0ZcFM'},
    {t:'Sicko Mode',a:'Travis Scott ft. Drake',g:'hiphop',y:'6ONRf7h3Mdk'},
    {t:'HIGHEST IN THE ROOM',a:'Travis Scott',g:'hiphop',y:'3VBZ6GEa2o4'},
    {t:'The Box',a:'Roddy Ricch',g:'hiphop',y:'4Z1hJMBHLRk'},
    {t:'Sunflower',a:'Post Malone & Swae Lee',g:'hiphop',y:'ApXoWvfEYVU'},
    {t:'Circles',a:'Post Malone',g:'hiphop',y:'wXhTHyIgQ_U'},
    {t:'Old Town Road',a:'Lil Nas X',g:'hiphop',y:'r7qovpFAGrQ'},
    {t:'MONTERO',a:'Lil Nas X',g:'hiphop',y:'6swmTBVI83k'},
    {t:'Rich Flex',a:'Drake & 21 Savage',g:'hiphop',y:'HSTCGr6GXYE'},
    {t:'Toosie Slide',a:'Drake',g:'hiphop',y:'xWggTb45brM'},
    {t:'WAP',a:'Cardi B ft. Megan Thee Stallion',g:'hiphop',y:'hsm4poTWjMs'},
    {t:'DNA.',a:'Kendrick Lamar',g:'hiphop',y:'NLCQL6QL9Zk'},
    {t:'All the Stars',a:'Kendrick Lamar & SZA',g:'hiphop',y:'JQbjS0p11J0'},
    {t:'Telepatia',a:'Kali Uchis',g:'hiphop',y:'lJJFRmTrwJQ'},
    {t:'Essence',a:'Wizkid ft. Tems',g:'hiphop',y:'aV_OLqAf46k'},
    // R&B
    {t:'Best Part',a:'Daniel Caesar ft. H.E.R.',g:'rnb',y:'4vGimMCkYtk'},
    {t:'Starboy',a:'The Weeknd ft. Daft Punk',g:'rnb',y:'34Na4j8AVgA'},
    {t:'After Hours',a:'The Weeknd',g:'rnb',y:'ygTZZpVkmKg'},
    {t:'Kill Bill',a:'SZA',g:'rnb',y:'LDcBvFBB0c0'},
    {t:'Good Days',a:'SZA',g:'rnb',y:'p7FCgOIHMHM'},
    {t:'Snooze',a:'SZA',g:'rnb',y:'fT3H7qLGpMA'},
    {t:'Saturn',a:'SZA',g:'rnb',y:'2qFKkKMy2AQ'},
    {t:'Heartbreak Anniversary',a:'Giveon',g:'rnb',y:'aFzCJoECIzc'},
    {t:'Running Over',a:'Brent Faiyaz',g:'rnb',y:'eQ1TlQm7l7A'},
    {t:'Call Out My Name',a:'The Weeknd',g:'rnb',y:'C7tCGQ-BO2g'},
    {t:'Earned It',a:'The Weeknd',g:'rnb',y:'waU75jdUnYw'},
    {t:'SoulFly',a:'Rod Wave',g:'rnb',y:'HXQZ59O-CJo'},
    // K-POP
    {t:'Bang Bang Bang',a:'BIGBANG',g:'kpop',y:'2ips2mM7Zqw'},
    {t:'Dynamite',a:'BTS',g:'kpop',y:'gdZLi9oWNZg'},
    {t:'Butter',a:'BTS',g:'kpop',y:'WMweEpGlu_U'},
    {t:'Boy With Luv',a:'BTS ft. Halsey',g:'kpop',y:'XsX3ATc3FbA'},
    {t:'Fake Love',a:'BTS',g:'kpop',y:'7C2z4GqqS5E'},
    {t:'Spring Day',a:'BTS',g:'kpop',y:'xEeFrLSkMm8'},
    {t:'How You Like That',a:'BLACKPINK',g:'kpop',y:'ioNng23DkIM'},
    {t:'Pink Venom',a:'BLACKPINK',g:'kpop',y:'tyTaBpEZCiE'},
    {t:'Shut Down',a:'BLACKPINK',g:'kpop',y:'u_2NxvBKuHA'},
    {t:'Kill This Love',a:'BLACKPINK',g:'kpop',y:'2S24-y0Ij3Y'},
    {t:'DDU-DU DDU-DU',a:'BLACKPINK',g:'kpop',y:'IHNnOkb8oFc'},
    {t:'Next Level',a:'aespa',g:'kpop',y:'4TWR90KJl84'},
    {t:'Drama',a:'aespa',g:'kpop',y:'cbkc3fHYxN0'},
    {t:'Attention',a:'NewJeans',g:'kpop',y:'RCNaKK8S-NY'},
    {t:'Hype Boy',a:'NewJeans',g:'kpop',y:'ArmDp-zijuc'},
    {t:'OMG',a:'NewJeans',g:'kpop',y:'TjSzd7qdCKs'},
    {t:'Eleven',a:'IVE',g:'kpop',y:'e4VsRFXUmio'},
    {t:'After LIKE',a:'IVE',g:'kpop',y:'G5WT_sMEzF4'},
    // JAZZ
    {t:'Blue in Green',a:'Miles Davis',g:'jazz',y:'TLDflhhdPCg'},
    {t:'So What',a:'Miles Davis',g:'jazz',y:'zqNTltOGh5c'},
    {t:'Take Five',a:'Dave Brubeck Quartet',g:'jazz',y:'vmDDOFXSgAs'},
    {t:'Autumn Leaves',a:'Bill Evans Trio',g:'jazz',y:'r-Z8KuwI7Gc'},
    {t:'My Favorite Things',a:'John Coltrane',g:'jazz',y:'qWG2dsXV5HI'},
    {t:'Girl from Ipanema',a:'Stan Getz',g:'jazz',y:'UJkxFhFSKuI'},
    {t:'Fly Me to the Moon',a:'Frank Sinatra',g:'jazz',y:'5yYMicbSf98'},
    {t:'What a Wonderful World',a:'Louis Armstrong',g:'jazz',y:'E2VCwBzGdPM'},
    {t:'Waltz for Debby',a:'Bill Evans',g:'jazz',y:'NVlBkFUqIBU'},
    {t:'Satin Doll',a:'Duke Ellington',g:'jazz',y:'YVhqkqeRAP8'},
    // AMBIENT
    {t:'Weightless',a:'Marconi Union',g:'ambient',y:'UfcAVejslrU'},
    {t:'Spiegel im Spiegel',a:'Arvo Part',g:'ambient',y:'TJ6Mzvh3XCc'},
    {t:'Gymnopédie No.1',a:'Erik Satie',g:'ambient',y:'S-Xm7s9eGxU'},
    {t:'Piano and Rain',a:'Relax Music',g:'ambient',y:'sDGMT_q5wHs'},
    {t:'Deep Sleep Music',a:'Meditation Relax',g:'ambient',y:'1ZYbU82GVz4'},
    {t:'Ocean Waves',a:'Nature Sounds',g:'ambient',y:'V1bFr2SWP1I'},
    {t:'Orinoco Flow',a:'Enya',g:'ambient',y:'LTrk4X9ACtw'},
    {t:'432 Hz Healing',a:'Frequency Music',g:'ambient',y:'74oHt9nTHOI'},
    {t:'Tibetan Bowls',a:'Meditation Music',g:'ambient',y:'s5KVyWVh3oo'},
    {t:'Northern Lights',a:'Nordic Ambient',g:'ambient',y:'mPcNGfIlqBg'},
  ];

  var _muGColors = {lofi:'#a78bfa',pop:'#e8658a',hiphop:'#ff6b6b',rnb:'#fdba74',kpop:'#4ade80',jazz:'#ff9f43',ambient:'#67e8f9'};

  function muFiltered() {
    var list = _muGenre === 'all' ? _muTracks : _muTracks.filter(function(t){ return t.g === _muGenre; });
    var q = _muQuery.toLowerCase().trim();
    if (q) list = list.filter(function(t){ return t.t.toLowerCase().indexOf(q) !== -1 || t.a.toLowerCase().indexOf(q) !== -1; });
    return list;
  }

  function muRender() {
    var el = document.getElementById('mu-list');
    if (!el) return;
    var list = muFiltered();
    el.innerHTML = '';
    list.forEach(function(track, i) {
      var ri = _muTracks.indexOf(track);
      var active = ri === _muTrack;
      var c = _muGColors[track.g] || '#a78bfa';
      var row = document.createElement('div');
      row.style.cssText = 'display:flex;align-items:center;gap:10px;padding:7px 10px;border-radius:10px;cursor:pointer;transition:background .15s;' + (active ? 'background:rgba(189,147,249,0.12);' : '');
      row.onmouseenter = function(){ if (!active) row.style.background='rgba(255,255,255,0.05)'; };
      row.onmouseleave = function(){ if (!active) row.style.background=''; };
      row.onclick = function(){ muPlay(ri); };
      row.innerHTML =
        '<div style="width:32px;height:32px;border-radius:8px;background:rgba(255,255,255,0.06);display:flex;align-items:center;justify-content:center;flex-shrink:0;">'
        + (active ? '<i class="fa-solid fa-volume-up" style="color:'+c+';font-size:13px;"></i>' : '<span style="font-size:10px;color:rgba(255,255,255,0.25);">'+(i+1)+'</span>')
        + '</div>'
        + '<div style="flex:1;min-width:0;">'
        + '<div style="font-size:12px;font-weight:'+(active?'700':'500')+';color:'+(active?c:'#fff')+';white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">'+track.t+'</div>'
        + '<div style="font-size:10px;color:rgba(255,255,255,0.4);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">'+track.a+'</div>'
        + '</div>'
        + '<div style="padding:2px 6px;border-radius:10px;background:rgba(255,255,255,0.06);font-size:9px;color:'+c+';flex-shrink:0;text-transform:uppercase;">'+track.g+'</div>';
      el.appendChild(row);
    });
  }

  function muPlay(ri) {
    _muTrack = ri;
    var t = _muTracks[ri];
    if (!t) return;
    // actualizar header
    var ti = document.getElementById('mu-title');
    var ai = document.getElementById('mu-artist');
    var gi = document.getElementById('mu-genre-pill');
    var thi = document.getElementById('mu-thumb-img');
    var thicon = document.getElementById('mu-thumb-icon');
    var wrap = document.getElementById('mu-player-wrap');
    var frame = document.getElementById('mu-yt-frame');
    if (ti) ti.textContent = t.t;
    if (ai) ai.textContent = t.a;
    if (gi) { gi.textContent = t.g; gi.style.color = _muGColors[t.g]||'#a78bfa'; gi.style.borderColor = (_muGColors[t.g]||'#a78bfa').replace(')',',0.3)').replace('rgb','rgba'); }
    // Thumbnail
    if (thi) { thi.src='https://img.youtube.com/vi/'+t.y+'/mqdefault.jpg'; thi.style.display='block'; }
    if (thicon) thicon.style.display='none';
    // mostrar iframe con autoplay
    if (wrap) wrap.style.display = 'block';
    if (frame) frame.src = 'https://www.youtube.com/embed/'+t.y+'?autoplay=1&controls=1&rel=0&modestbranding=1';
    muRender();
  }

  function muSetGenre(g) {
    _muGenre = g;
    document.querySelectorAll('.mug-btn').forEach(function(b){
      b.style.background='rgba(255,255,255,0.04)';
      b.style.color='rgba(255,255,255,0.5)';
      b.style.borderColor='rgba(255,255,255,0.1)';
      b.style.fontWeight='normal';
    });
    var btn = document.getElementById('mug-'+g);
    if (btn) { btn.style.background='rgba(189,147,249,0.2)'; btn.style.color='#a78bfa'; btn.style.borderColor='rgba(189,147,249,0.5)'; btn.style.fontWeight='600'; }
    muRender();
  }

  function muSearch(q) { _muQuery = q; muRender(); }
  function muClear() { _muQuery=''; var el=document.getElementById('mu-search'); if(el) el.value=''; muRender(); }

  setTimeout(function(){ muRender(); }, 300);

  // flood fill
  function drawFill(x, y) {
    if (!_drawCtx) return;
    const c = document.getElementById('draw-canvas');
    const w = c.width, h = c.height;
    x = x|0; y = y|0;
    const img = _drawCtx.getImageData(0,0,w,h);
    const data = img.data;
    const idx = (y*w + x) * 4;
    const t = [data[idx], data[idx+1], data[idx+2], data[idx+3]];
    const hex = document.getElementById('draw-color').value;
    const fr = parseInt(hex.slice(1,3),16), fg = parseInt(hex.slice(3,5),16), fb = parseInt(hex.slice(5,7),16);
    if (t[0]===fr && t[1]===fg && t[2]===fb) return;
    const stack = [[x,y]];
    const match = (i) => Math.abs(data[i]-t[0])<6 && Math.abs(data[i+1]-t[1])<6 && Math.abs(data[i+2]-t[2])<6;
    while (stack.length) {
      const [cx,cy] = stack.pop();
      if (cx<0||cy<0||cx>=w||cy>=h) continue;
      const i = (cy*w+cx)*4;
      if (!match(i)) continue;
      data[i]=fr; data[i+1]=fg; data[i+2]=fb; data[i+3]=255;
      stack.push([cx+1,cy],[cx-1,cy],[cx,cy+1],[cx,cy-1]);
    }
    _drawCtx.putImageData(img, 0, 0);
  }
  let _drawCtx = null, _drawTool = 'pen', _drawing = false;
  function initDrawCanvas() {
    const canvas = document.getElementById('draw-canvas');
    if (!canvas) return;
    const parent = canvas.parentElement;
    const rect = parent.getBoundingClientRect();
    const W = Math.max(200, Math.floor(rect.width - 20));
    const H = Math.max(200, Math.floor(rect.height - 70));
    let prev = null;
    if (canvas._initDone && _drawCtx && canvas.width > 0) {
      try { prev = _drawCtx.getImageData(0, 0, canvas.width, canvas.height); } catch(e){}
    }
    canvas.width = W; canvas.height = H;
    _drawCtx = canvas.getContext('2d');
    _drawCtx.fillStyle = '#fff'; _drawCtx.fillRect(0, 0, W, H);
    if (prev) { try { _drawCtx.putImageData(prev, 0, 0); } catch(e){} }
    if (canvas._initDone) return;
    canvas._initDone = true;
    const getPos = (e) => {
      const r = canvas.getBoundingClientRect();
      const src = (e.touches && e.touches[0]) ? e.touches[0] : ((e.changedTouches && e.changedTouches[0]) || e);
      return { x: (src.clientX - r.left) * (canvas.width / r.width), y: (src.clientY - r.top) * (canvas.height / r.height) };
    };
    const start = (e) => {
      e.preventDefault();
      const p = getPos(e);
      if (_drawTool === 'fill') { drawFill(Math.floor(p.x), Math.floor(p.y)); return; }
      _drawing = true;
      const size = parseInt(document.getElementById('draw-size').value) || 6;
      if (_drawTool === 'eraser') { _drawCtx.globalCompositeOperation = 'destination-out'; _drawCtx.lineWidth = size * 3; _drawCtx.strokeStyle = 'rgba(0,0,0,1)'; }
      else { _drawCtx.globalCompositeOperation = 'source-over'; _drawCtx.lineWidth = size; _drawCtx.strokeStyle = document.getElementById('draw-color').value; }
      _drawCtx.lineCap = 'round'; _drawCtx.lineJoin = 'round';
      _drawCtx.beginPath(); _drawCtx.moveTo(p.x, p.y);
      _drawCtx.lineTo(p.x + 0.01, p.y + 0.01); _drawCtx.stroke();
    };
    const move = (e) => {
      if (!_drawing) return;
      e.preventDefault();
      const p = getPos(e);
      _drawCtx.lineTo(p.x, p.y); _drawCtx.stroke();
    };
    const end = () => { if (_drawing) { _drawing = false; _drawCtx.closePath(); } };
    canvas.addEventListener('mousedown', start);
    canvas.addEventListener('mousemove', move);
    canvas.addEventListener('mouseup', end);
    canvas.addEventListener('mouseleave', end);
    canvas.addEventListener('touchstart', start, { passive: false });
    canvas.addEventListener('touchmove', move, { passive: false });
    canvas.addEventListener('touchend', end);
    canvas.addEventListener('touchcancel', end);
  }
  function drawSetTool(tool) {
    _drawTool = tool;
    ['pen','eraser','fill'].forEach(t => {
      const btn = document.getElementById('draw-btn-' + t);
      if (btn) { btn.style.background = t===tool ? 'rgba(255,121,198,0.2)' : 'rgba(255,255,255,0.04)'; btn.style.borderColor = t===tool ? '#e8658a' : 'var(--border-glass)'; btn.style.color = t===tool ? '#e8658a' : 'var(--text-muted)'; }
    });
  }
  function drawClear() { if (_drawCtx) { const c=document.getElementById('draw-canvas'); _drawCtx.fillStyle='#fff'; _drawCtx.fillRect(0,0,c.width,c.height); } }
  function drawDownload() {
    const c = document.getElementById('draw-canvas');
    if (!c) return;
    const a = document.createElement('a'); a.download='capidraw.png'; a.href=c.toDataURL(); a.click();
  }
  (function(){
    const _orig = window.openApp;
    window.openApp = function(id) {
      _orig && _orig(id);
      if (id === 'calendar') setTimeout(renderCalendar, 100);
      if (id === 'draw') setTimeout(() => { const c=document.getElementById('draw-canvas'); if(c){c._initDone=false;} initDrawCanvas(); }, 250);
      if (id === 'timer') setTimeout(() => { updatePomDisplay(); }, 100);
      if (id === 'todo') setTimeout(renderTodos, 100);
    };
  })();
  let _calDate = new Date();
  const _CAL_MONTHS = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];
  const _CAL_DAYS = ['Dom','Lun','Mar','Mié','Jue','Vie','Sáb'];
  function renderCalendar() {
    const grid = document.getElementById('cal-grid');
    const lbl = document.getElementById('cal-month-label');
    if (!grid) return;
    lbl.textContent = _CAL_MONTHS[_calDate.getMonth()] + ' ' + _calDate.getFullYear();
    const firstDay = new Date(_calDate.getFullYear(), _calDate.getMonth(), 1).getDay();
    const daysInMonth = new Date(_calDate.getFullYear(), _calDate.getMonth()+1, 0).getDate();
    const today = new Date();
    let html2 = _CAL_DAYS.map(d => '<div style="font-size:10px;color:var(--text-muted);padding:4px 0;font-weight:600;">' + d + '</div>').join('');
    for (let i=0; i<firstDay; i++) html2 += '<div></div>';
    for (let d=1; d<=daysInMonth; d++) {
      const isToday = d===today.getDate() && _calDate.getMonth()===today.getMonth() && _calDate.getFullYear()===today.getFullYear();
      html2 += '<div onclick="calSelectDay(' + d + ')" style="padding:6px 2px;border-radius:8px;cursor:pointer;font-size:12px;transition:all 0.15s;' + (isToday ? 'background:var(--accent-color);color:#1a1208;font-weight:700;' : 'color:var(--text-main);') + '" onmouseover="if(!this.dataset.today)this.style.background=\'rgba(255,159,67,0.15)\'" onmouseout="if(!this.dataset.today)this.style.background=\'\'" ' + (isToday?'data-today="1"':'') + '>' + d + '</div>';
    }
    grid.innerHTML = html2;
  }
  function calPrev() { _calDate.setMonth(_calDate.getMonth()-1); renderCalendar(); }
  function calNext() { _calDate.setMonth(_calDate.getMonth()+1); renderCalendar(); }
  function calSelectDay(d) {
    const el = document.getElementById('cal-events-list');
    if (el) el.textContent = _calDate.getDate() === d && new Date().getMonth()===_calDate.getMonth() ? '📅 ¡Hoy! Sin eventos programados.' : 'Sin eventos para el ' + d + '.';
  }
  let _todos = [];
  let _todoFilter = 'all';
  function todoAdd() {
    const inp = document.getElementById('todo-input');
    if (!inp || !inp.value.trim()) return;
    _todos.unshift({ id: Date.now(), text: inp.value.trim(), done: false });
    inp.value = '';
    renderTodos();
    saveTodos();
  }
  function todoToggle(id) {
    const t = _todos.find(x => x.id === id);
    if (!t) return;
    const wasDone = t.done;
    t.done = !t.done;
    if (t.done && !wasDone) {
      const reward = Math.floor(Math.random() * 51) + 50;
      if (typeof addGems === 'function') addGems(reward);
      if (typeof showToast === 'function') showToast('Tarea completada!', '+' + reward + ' gemas. Bien hecho!');
      for (let i = 0; i < 6; i++) {
        const fly = document.createElement('div');
        fly.className = 'gem-pop-fly';
        fly.textContent = String.fromCodePoint(0x1F48E);
        fly.style.cssText = 'left:' + (window.innerWidth/2 + (Math.random()-0.5)*200) + 'px;top:' + (window.innerHeight/2) + 'px;font-size:18px;';
        document.body.appendChild(fly);
        setTimeout(() => fly.remove(), 1100);
      }
    }
    renderTodos(); saveTodos();
  }
  function todoDelete(id) {
    _todos = _todos.filter(x => x.id !== id);
    renderTodos(); saveTodos();
  }
  function todoFilter(f) {
    _todoFilter = f;
    ['all','active','done'].forEach(k => {
      const btn = document.getElementById('todo-f-' + k);
      if (btn) { btn.style.background = k===f ? 'rgba(80,250,123,0.2)' : 'rgba(255,255,255,0.04)'; btn.style.borderColor = k===f ? 'rgba(80,250,123,0.3)' : 'var(--border-glass)'; btn.style.color = k===f ? '#4ade80' : 'var(--text-muted)'; }
    });
    renderTodos();
  }
  function renderTodos() {
    const list = document.getElementById('todo-list');
    const count = document.getElementById('todo-count');
    if (!list) return;
    const filtered = _todos.filter(t => _todoFilter==='all' || (_todoFilter==='active'&&!t.done) || (_todoFilter==='done'&&t.done));
    list.innerHTML = filtered.length ? filtered.map(t => '<div style="display:flex;align-items:center;gap:10px;padding:10px 12px;background:rgba(255,255,255,0.03);border:1px solid var(--border-glass);border-radius:10px;' + (t.done?'opacity:0.5;':'') + '">' + '<div onclick="todoToggle(' + t.id + ')" style="width:18px;height:18px;border-radius:50%;border:2px solid ' + (t.done?'#4ade80':'rgba(255,255,255,0.2)') + ';background:' + (t.done?'rgba(80,250,123,0.2)':'transparent') + ';cursor:pointer;display:flex;align-items:center;justify-content:center;flex-shrink:0;">' + (t.done?'<i class="fa-solid fa-check" style="font-size:9px;color:#4ade80;"></i>':'') + '</div><span style="flex:1;font-size:13px;' + (t.done?'text-decoration:line-through;':'') + '">' + t.text + '</span><button onclick="todoDelete(' + t.id + ')" style="background:none;border:none;color:rgba(255,107,107,0.5);cursor:pointer;font-size:12px;" onmouseover="this.style.color=\'#ff6b6b\'" onmouseout="this.style.color=\'rgba(255,107,107,0.5)\'"><i class="fa-solid fa-xmark"></i></button></div>').join('') : '<div style="text-align:center;color:var(--text-muted);font-size:13px;padding:20px;">Sin tareas pendientes</div>';
    if (count) count.textContent = _todos.filter(t=>!t.done).length + ' pendientes · ' + _todos.filter(t=>t.done).length + ' completadas';
  }
  async function saveTodos() { try { await window.storage.set('capi-todos', JSON.stringify(_todos)); } catch(e){} }
  async function loadTodos() { try { const r = await window.storage.get('capi-todos'); if(r&&r.value) { _todos=JSON.parse(r.value); renderTodos(); } } catch(e){} }
  // loadTodos is called inside initTodoDaily below
  const _todoSuggestions = [
    // Bienestar
    "Bebe un vaso de agua 💧","Estírate durante 2 minutos 🧘","Respira hondo 5 veces 🌬️",
    "Ordena tu escritorio 🧹","Camina 5 minutos 🚶","Escribe algo por lo que estés agradecido ✨",
    "Manda un mensaje a alguien que aprecies 💬","Lee 1 página de un libro 📖","Haz 10 sentadillas 💪",
    "Cierra pestañas que no uses 🗂️","Mira por la ventana 20 segundos 👀","Sonríe sin razón 😄",
    "Apunta tu objetivo del día 🎯","Tómate un descanso de pantalla ⏸️","Escucha tu canción favorita 🎵",
    "Lava una taza o plato 🍽️","Haz tu cama si no la has hecho 🛏️","Escribe 3 ideas locas 💡",
    "Manda foto a un amigo 📸","Aprende una palabra nueva 📚","Haz 20 saltos 🤸",
    "Borra 5 fotos viejas del móvil 📱","Riega una planta 🪴","Pon música y baila 30s 🕺",
    "Limpia la pantalla del móvil 🧽","Apúntate algo divertido para mañana 📝","Abraza a alguien 🤗",
    "Haz una lista de 3 metas semanales 🎯","Desconecta el wifi 5 minutos 📵","Dibuja un garabato ✏️",
    "Cierra los ojos 1 minuto 😌","Estira el cuello suavemente 🧎","Pide perdón si lo debes 🙏",
    "Di algo bonito a alguien 💕","Repasa tus gastos del día 💰","Reorganiza un cajón 📦",
    "Escribe en un diario 2 frases 📔","Haz una flexión 💪","Bebe otro vaso de agua 💧",
    "Investiga algo que te dé curiosidad 🔍",
    // Web & tech productivity
    "Revisa tus favoritos del navegador y borra los viejos 🔖",
    "Actualiza las contraseñas de una cuenta importante 🔐",
    "Busca un tutorial de algo que siempre quisiste aprender 🎓",
    "Activa las actualizaciones automáticas en tu dispositivo ⚙️",
    "Limpia tu carpeta de descargas 🗑️",
    "Lee las noticias de tecnología de hoy 📰",
    "Prueba una extensión de productividad para el navegador 🧩",
    "Comprueba si tienes apps sin usar en el móvil y bórralas 📲",
    "Revisa tu bandeja de entrada y archiva 5 emails 📧",
    "Aprende un atajo de teclado nuevo hoy ⌨️",
    "Configura el modo oscuro en una app que no lo tenga 🌙",
    "Haz una copia de seguridad de tus fotos importantes ☁️",
    "Lee la wiki de un tema de tecnología que no conozcas 🌐",
    "Comparte un recurso útil con un amigo 🤝",
    "Escribe un comando de terminal que no recuerdes bien 💻"
  ];
  async function _fetchWebChallenge() {
    // APIs públicas como fallback
    const sources = [
      { url: 'https://api.adviceslip.com/advice', extract: j => j.slip && j.slip.advice },
      { url: 'https://uselessfacts.jsph.pl/api/v2/facts/random?language=en', extract: j => j.text },
      { url: 'https://official-joke-api.appspot.com/random_joke', extract: j => j.setup && j.punchline ? j.setup + ' — ' + j.punchline : null },
      { url: 'https://api.api-ninjas.com/v1/facts?limit=1', extract: j => Array.isArray(j) && j[0] ? j[0].fact : null },
    ];
    for (const s of sources) {
      try {
        const r = await fetch(s.url, { cache: 'no-store' });
        if (!r.ok) continue;
        const j = await r.json();
        const txt = s.extract(j);
        if (txt && typeof txt === 'string' && txt.length > 5) return '🌐 Reto web: ' + txt.slice(0, 120);
      } catch(e){}
    }
    return null;
  }
  async function todoSuggest(fromWeb) {
    let pick = null;
    if (fromWeb) {
      pick = await _fetchWebChallenge();
      if (!pick && typeof showToast === 'function') showToast('Sin conexión', 'Cojo una tarea local 🦫');
    }
    if (!pick) {
      const pool = _todoSuggestions.filter(t => !_todos.some(x => x.text === t));
      const list = pool.length ? pool : _todoSuggestions;
      pick = list[Math.floor(Math.random() * list.length)];
    }
    _todos.unshift({ id: Date.now(), text: pick, done: false });
    renderTodos(); saveTodos();
    if (typeof showToast === 'function') showToast('Nueva tarea 🦫', pick.slice(0,80) + ' — completa para ganar 50-100 💎');
  }
  // ── Daily reset: clear completed tasks + add fresh web task every 24h ──
  (function initTodoDaily() {
    const KEY = 'capi-todos-daily-ts';
    async function checkDailyReset() {
      try {
        const r = await window.storage.get(KEY);
        const lastReset = r && r.value ? parseInt(r.value, 10) : 0;
        const now = Date.now();
        if (now - lastReset >= 86400000) { // 24h
          // eliminar tareas hechas
          _todos = _todos.filter(t => !t.done);
          await window.storage.set(KEY, String(now));
          await saveTodos();
          renderTodos();
          // agregar challenge para hoy
          await todoSuggest(true);
          if (typeof showToast === 'function') showToast(currentLang==='en'?'New day! 🌅':'¡Nuevo día! 🌅', currentLang==='en'?'Completed tasks cleared. New daily task added 🦫':'Tareas completadas eliminadas. Nueva tarea del día añadida 🦫');
        }
      } catch(e) {}
    }
    // verificar al cargar
    setTimeout(async () => {
      await loadTodos();
      await checkDailyReset();
      if (!_todos.length) await todoSuggest(true);
    }, 3500);
    // verificar cada hora
    setInterval(checkDailyReset, 3600000);
  })();

  let _pomRunning = false, _pomSeconds = 25*60, _pomTotal = 25*60, _pomInterval = null, _pomSessions = 0;
  const _POM_MODES = { work: {sec:25*60,label:'Trabajo',color:'#ff6b6b'}, short:{sec:5*60,label:'Descanso',color:'#4ade80'}, long:{sec:15*60,label:'Descanso L.',color:'#74b9ff'} };
  function pomodoroMode(m) {
    pomodoroReset();
    const md = _POM_MODES[m];
    _pomSeconds = md.sec; _pomTotal = md.sec;
    const ring = document.getElementById('pom-ring');
    if (ring) ring.style.stroke = md.color;
    const lbl = document.getElementById('pom-label');
    if (lbl) lbl.textContent = md.label;
    ['work','short','long'].forEach(k => {
      const btn = document.getElementById('pom-btn-' + k);
      if (btn) { btn.style.background = k===m ? 'rgba(255,255,255,0.12)' : 'rgba(255,255,255,0.04)'; btn.style.borderColor = k===m ? md.color : 'var(--border-glass)'; btn.style.color = k===m ? md.color : 'var(--text-muted)'; }
    });
    updatePomDisplay();
  }
  function pomodoroToggle() {
    _pomRunning = !_pomRunning;
    const icon = document.getElementById('pom-start-icon');
    if (icon) icon.className = _pomRunning ? 'fa-solid fa-pause' : 'fa-solid fa-play';
    if (_pomRunning) {
      _pomInterval = setInterval(() => {
        _pomSeconds--;
        if (_pomSeconds <= 0) {
          _pomRunning = false; _pomSessions++;
          const sc = document.getElementById('pom-sessions'); if (sc) sc.textContent = _pomSessions;
          clearInterval(_pomInterval);
          if (icon) icon.className = 'fa-solid fa-play';
          if (typeof showToast === 'function') showToast('🍅 Pomodoro!', currentLang==='en'?'Session completed. Take a break!':'Sesión completada. ¡Toma un descanso!');
          _pomSeconds = 0;
        }
        updatePomDisplay();
      }, 1000);
    } else {
      clearInterval(_pomInterval);
    }
  }
  function pomodoroReset() {
    clearInterval(_pomInterval); _pomRunning = false;
    _pomSeconds = _pomTotal;
    const icon = document.getElementById('pom-start-icon'); if (icon) icon.className = 'fa-solid fa-play';
    updatePomDisplay();
  }
  function updatePomDisplay() {
    const m = Math.floor(_pomSeconds/60), s = _pomSeconds%60;
    const el = document.getElementById('pom-time'); if (el) el.textContent = m + ':' + (s<10?'0':'') + s;
    const ring = document.getElementById('pom-ring');
    if (ring) { const circ = 2*Math.PI*70; ring.style.strokeDashoffset = circ * (1 - _pomSeconds/_pomTotal); }
  }

  (function() {
    const st = document.createElement('style');
    st.textContent = '@keyframes spinRecord { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }';
    document.head.appendChild(st);
  })();

  const _winObserver = new MutationObserver((muts) => {
    muts.forEach(m => {
      m.addedNodes.forEach(node => {
        if (node.classList && node.classList.contains('window')) {
          makeDraggable(node);
        }
      });
    });
  });

  // esperar desktop para init
  const _desktopObserver = new MutationObserver(() => {
    const desktop = document.getElementById('desktop');
    if (desktop && getComputedStyle(desktop).display !== 'none') {
      setTimeout(initWindowingSystem, 300);
      _desktopObserver.disconnect();
      const _winObserverTarget = document.body || document.documentElement;
      if (_winObserverTarget && _winObserverTarget.nodeType) {
        _winObserver.observe(_winObserverTarget, { childList: true, subtree: true });
      }
    }
  });
  const _desktopObserverTarget = document.getElementById('desktop') || document.body || document.documentElement;
  if (_desktopObserverTarget && _desktopObserverTarget.nodeType) {
    _desktopObserver.observe(_desktopObserverTarget, {
      attributes: true, attributeFilter: ['style', 'class']
    });
  }

  // init después de 2s como fallback
  setTimeout(() => {
    const desktop = document.getElementById('desktop');
    if (desktop && getComputedStyle(desktop).display !== 'none') {
      initWindowingSystem();
    }
  }, 2500);
  const _desktopReadyPoll = setInterval(() => {
    const desktop = document.getElementById('desktop');
    if (desktop && getComputedStyle(desktop).display !== 'none') {
      initWindowingSystem();
      clearInterval(_desktopReadyPoll);
    }
  }, 700);

  /* ════════════════════════════════════════════
     v4 ENHANCEMENTS — pet, auth, settings polish
     ════════════════════════════════════════════ */
  (function(){
    // --- Auth UI: properly toggle register-only fields ---
    function syncAuthUI(){
      const mode = (window.authMode || 'login');
      const isReg = mode === 'register';
      const set = (id,disp) => { const el=document.getElementById(id); if(el) el.style.display = disp; };
      set('auth-email', isReg?'block':'none');
      set('auth-pass2', isReg?'block':'none');
      set('pw-meter-wrap', isReg?'block':'none');
      set('auth-avatar-wrap', isReg?'block':'none');
      set('auth-terms-wrap', isReg?'flex':'none');
      const pass = document.getElementById('auth-pass');
      if (pass && isReg && typeof updatePwMeter==='function') updatePwMeter(pass.value||'');
    }
    const _origSet = window.setAuthMode;
    window.setAuthMode = function(m){ _origSet && _origSet(m); syncAuthUI(); };
    setTimeout(syncAuthUI, 500);
    setTimeout(syncAuthUI, 1500);

    // --- Pet: more actions, XP & level ---
    window.petStats = window.petStats || { hunger:100, happy:100, energy:100 };
    window.petMeta  = window.petMeta  || { xp:0, level:1, clean:100 };
    async function loadPetMeta(){ try{ const r=await window.storage.get('capi-pet-meta'); if(r&&r.value) window.petMeta=Object.assign(window.petMeta, JSON.parse(r.value)); }catch(e){} renderPetExtras(); }
    async function savePetMeta(){ try{ await window.storage.set('capi-pet-meta', JSON.stringify(window.petMeta)); }catch(e){} }
    function addPetXP(n){
      window.petMeta.xp += n;
      const need = window.petMeta.level * 20;
      if (window.petMeta.xp >= need){ window.petMeta.xp -= need; window.petMeta.level++; if (typeof showToast==='function') showToast('🦫 ¡Subió de nivel!','Capi ahora es nivel '+window.petMeta.level); if (typeof addGems==='function') addGems(3); }
      savePetMeta(); renderPetExtras();
    }
    function renderPetExtras(){
      const host = document.querySelector('#app-pet .pet-stats');
      if (!host) return;
      let extra = document.getElementById('pet-extra');
      if (!extra){
        extra = document.createElement('div'); extra.id='pet-extra';
        extra.style.cssText='display:flex;flex-direction:column;gap:6px;margin-top:8px;';
        host.appendChild(extra);
      }
      const need = window.petMeta.level * 20;
      extra.innerHTML =
        '<div class="pet-stat"><div class="pet-stat-label"><span><i class="fa-solid fa-soap"></i> Limpieza</span><span>'+Math.round(window.petMeta.clean)+'%</span></div>'+
        '<div class="pet-stat-bar"><div class="pet-stat-fill" style="background:#67e8f9;width:'+window.petMeta.clean+'%;"></div></div></div>'+
        '<div class="pet-stat"><div class="pet-stat-label"><span><i class="fa-solid fa-star"></i> Nivel '+window.petMeta.level+'</span><span>'+window.petMeta.xp+' / '+need+' XP</span></div>'+
        '<div class="pet-stat-bar"><div class="pet-stat-fill" style="background:#ffd700;width:'+Math.min(100,(window.petMeta.xp/need)*100)+'%;"></div></div></div>';
      // fila de acciones extra
      const actions = document.querySelector('#app-pet .pet-actions');
      if (actions && !document.getElementById('pet-actions-2')){
        const row = document.createElement('div'); row.id='pet-actions-2';
        row.className='pet-actions'; row.style.marginTop='8px';
        row.innerHTML =
          '<button class="pet-action" onclick="petActionX(\'bathe\')"><i class="fa-solid fa-shower"></i> Bañar</button>'+
          '<button class="pet-action" onclick="petActionX(\'train\')"><i class="fa-solid fa-dumbbell"></i> Entrenar</button>'+
          '<button class="pet-action" onclick="petActionX(\'walk\')"><i class="fa-solid fa-shoe-prints"></i> Pasear</button>';
        actions.parentNode.insertBefore(row, actions.nextSibling);
      }
    }
    window.petActionX = function(a){
      if (a==='bathe'){ window.petMeta.clean = Math.min(100, window.petMeta.clean + 40); addPetXP(3); if (typeof showToast==='function') showToast('Capi Pet','¡Limpio y fresquito!'); }
      if (a==='train'){ window.petStats.energy = Math.max(0, window.petStats.energy - 15); window.petStats.happy = Math.min(100, window.petStats.happy + 10); addPetXP(6); if (typeof addGems==='function') addGems(2); if (typeof showToast==='function') showToast('Capi Pet','+2 entrenando'); }
      if (a==='walk'){ window.petStats.happy = Math.min(100,window.petStats.happy+15); window.petStats.energy = Math.max(0, window.petStats.energy-8); window.petMeta.clean = Math.max(0, window.petMeta.clean-10); addPetXP(4); if (typeof showToast==='function') showToast('Capi Pet','Paseo feliz'); }
      if (typeof savePet==='function') savePet();
      if (typeof updatePetUI==='function') updatePetUI();
      const capi = document.getElementById('pet-capi');
      if (capi){ capi.classList.remove('happy'); void capi.offsetWidth; capi.classList.add('happy'); }
    };
    // decaer limpieza con el tiempo
    setInterval(()=>{ window.petMeta.clean = Math.max(0, window.petMeta.clean - 1); savePetMeta(); renderPetExtras(); }, 90000);
    // hook openApp para extras
    (function(){
      const _o = window.openApp;
      window.openApp = function(id){ _o && _o(id); if (id==='pet') setTimeout(renderPetExtras, 120); };
    })();
    loadPetMeta();
    // Reward XP on existing actions
    const _origPetAction = window.petAction;
    if (_origPetAction) window.petAction = function(a){ _origPetAction(a); addPetXP(a==='play'?4:2); };

    // --- Settings extras: add a small "Capibara extras" panel inside personalization ---
    function addSettingsExtras(){
      const pane = document.getElementById('extras-mount') || document.querySelector('#app-settings .settings-content');
      if (!pane || document.getElementById('settings-extras-card')) return;
      const card = document.createElement('div');
      card.id='settings-extras-card';
      card.style.cssText='margin-top:16px;padding:14px;border:1px solid var(--border-glass);border-radius:14px;background:rgba(255,255,255,0.03);';
      card.innerHTML =
        '<div style="font-weight:700;margin-bottom:10px;display:flex;align-items:center;gap:8px;"><i class="fa-solid fa-wand-magic-sparkles" style="color:var(--accent-color);"></i> Extras Capibara</div>'+
        '<label style="display:flex;justify-content:space-between;align-items:center;padding:8px 0;font-size:13px;"><span>Animaciones reducidas</span><input type="checkbox" id="set-x-reduce"></label>'+
        '<label style="display:flex;justify-content:space-between;align-items:center;padding:8px 0;font-size:13px;border-top:1px solid var(--border-glass);"><span>Auto-bloqueo al inactivar</span><input type="checkbox" id="set-x-autolock"></label>'+
        '<label style="display:flex;justify-content:space-between;align-items:center;padding:8px 0;font-size:13px;border-top:1px solid var(--border-glass);"><span>Sonidos de interfaz</span><input type="checkbox" id="set-x-sfx" checked></label>'+
        '<label style="display:flex;justify-content:space-between;align-items:center;padding:8px 0;font-size:13px;border-top:1px solid var(--border-glass);"><span>Mostrar segundos en reloj</span><input type="checkbox" id="set-x-secs"></label>'+
        '<button onclick="(async()=>{try{const ks=await window.storage.list(\'capi-\');for(const k of (ks.keys||ks)){await window.storage.delete(k);}localStorage.clear();location.reload();}catch(e){alert(\'Error: \'+e.message)}})()" style="margin-top:10px;padding:8px 14px;border-radius:10px;background:rgba(255,71,87,0.15);border:1px solid rgba(255,71,87,0.35);color:#ff4757;cursor:pointer;font-size:12px;font-weight:600;">🧹 Restablecer todo</button>';
      pane.appendChild(card);
      const bind = (id,key,def)=>{ const el=document.getElementById(id); if(!el) return; el.checked = localStorage.getItem(key) === '1' || (def && localStorage.getItem(key)===null);
        el.addEventListener('change', ()=>{ localStorage.setItem(key, el.checked?'1':'0'); applyExtras(); }); };
      bind('set-x-reduce','capi-x-reduce',false);
      bind('set-x-autolock','capi-x-autolock',false);
      bind('set-x-sfx','capi-x-sfx',true);
      bind('set-x-secs','capi-x-secs',false);
      applyExtras();
    }
    function applyExtras(){
      const reduce = localStorage.getItem('capi-x-reduce')==='1';
      document.documentElement.style.setProperty('--bouncy', reduce ? 'cubic-bezier(0.4,0,0.2,1)' : 'cubic-bezier(0.34,1.18,0.64,1)');
    }
    (function(){
      const _o = window.openApp;
      window.openApp = function(id){ _o && _o(id); if (id==='settings') setTimeout(addSettingsExtras, 200); };
    })();
    setTimeout(addSettingsExtras, 4000);
  })();



/* --- block (orig 11895-12530) --- */
  (function(){
    'use strict';


    const CAPY_BODY = `
      <svg class="capy-svg" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="capyBodyG" cx="50%" cy="40%" r="65%">
            <stop offset="0%" stop-color="#b88860"/>
            <stop offset="60%" stop-color="#8e6240"/>
            <stop offset="100%" stop-color="#5e3f28"/>
          </radialGradient>
          <radialGradient id="capyEarG" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="#6b4528"/>
            <stop offset="100%" stop-color="#3d2615"/>
          </radialGradient>
          <radialGradient id="capyCheekG" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="#ff9f9f" stop-opacity=".55"/>
            <stop offset="100%" stop-color="#ff9f9f" stop-opacity="0"/>
          </radialGradient>
        </defs>
        <ellipse cx="100" cy="186" rx="62" ry="6" fill="#000" opacity=".35"/>
        <ellipse cx="100" cy="130" rx="72" ry="52" fill="url(#capyBodyG)"/>
        <ellipse cx="68" cy="178" rx="12" ry="8" fill="#5e3f28"/>
        <ellipse cx="132" cy="178" rx="12" ry="8" fill="#5e3f28"/>
        <g id="capy-ears">
          <ellipse cx="55" cy="68" rx="11" ry="8" fill="url(#capyEarG)"/>
          <ellipse cx="55" cy="68" rx="6" ry="4" fill="#291810"/>
          <ellipse cx="145" cy="68" rx="11" ry="8" fill="url(#capyEarG)"/>
          <ellipse cx="145" cy="68" rx="6" ry="4" fill="#291810"/>
        </g>
        <ellipse cx="100" cy="88" rx="58" ry="46" fill="url(#capyBodyG)"/>
        <g id="capy-acc-hat"></g>
        <circle cx="62" cy="100" r="11" fill="url(#capyCheekG)"/>
        <circle cx="138" cy="100" r="11" fill="url(#capyCheekG)"/>
        <g id="capy-eyes">
          <ellipse cx="80" cy="86" rx="5.5" ry="6.5" fill="#1a0f08"/>
          <ellipse cx="120" cy="86" rx="5.5" ry="6.5" fill="#1a0f08"/>
          <circle cx="82" cy="84" r="1.8" fill="#fff"/>
          <circle cx="122" cy="84" r="1.8" fill="#fff"/>
        </g>
        <g id="capy-acc-eyes"></g>
        <ellipse cx="100" cy="108" rx="22" ry="14" fill="#a47650"/>
        <ellipse cx="92" cy="106" rx="2" ry="1.5" fill="#1a0f08"/>
        <ellipse cx="108" cy="106" rx="2" ry="1.5" fill="#1a0f08"/>
        <path d="M 92 114 Q 100 120 108 114" stroke="#3d2615" stroke-width="2" fill="none" stroke-linecap="round"/>
        <g id="capy-acc-neck"></g>
        <g id="capy-acc-held"></g>
      </svg>`;

    // Built-in accessories catalog
    const BASE_ACC = {
      hat: {
        none:    { name:'Sin sombrero', svg:'' },
        tophat:  { name:'Sombrero de copa', svg:'<rect x="72" y="20" width="56" height="10" rx="2" fill="#1a1a1a"/><rect x="80" y="-2" width="40" height="26" fill="#1a1a1a"/><rect x="80" y="14" width="40" height="4" fill="#c0392b"/>' },
        cap:     { name:'Gorra', svg:'<path d="M 60 38 Q 100 8 140 38 L 150 44 Q 100 36 50 44 Z" fill="#e74c3c"/><ellipse cx="100" cy="42" rx="50" ry="4" fill="#c0392b"/><path d="M 138 40 L 172 36 L 170 46 L 140 46 Z" fill="#e74c3c"/>' },
        crown:   { name:'Corona', svg:'<path d="M 60 36 L 70 12 L 84 30 L 100 8 L 116 30 L 130 12 L 140 36 Z" fill="#ffd700" stroke="#b8860b" stroke-width="1.5"/><circle cx="100" cy="22" r="4" fill="#e84393"/><circle cx="76" cy="28" r="3" fill="#0984e3"/><circle cx="124" cy="28" r="3" fill="#00b894"/><rect x="60" y="36" width="80" height="5" fill="#f1c40f"/>' },
        beret:   { name:'Boina', svg:'<ellipse cx="100" cy="32" rx="40" ry="14" fill="#2c3e50"/><circle cx="118" cy="20" r="6" fill="#34495e"/>' },
        wizard:  { name:'Sombrero mago', svg:'<path d="M 70 42 L 100 -4 L 130 42 Z" fill="#5d3a9b"/><ellipse cx="100" cy="42" rx="36" ry="6" fill="#3d2470"/><circle cx="92" cy="18" r="2" fill="#ffd700"/><circle cx="108" cy="28" r="1.5" fill="#fff"/><circle cx="86" cy="32" r="1.5" fill="#ffd700"/>' },
        flower:  { name:'Corona de flores', svg:'<g><circle cx="60" cy="38" r="6" fill="#e8658a"/><circle cx="60" cy="38" r="2" fill="#ffd700"/><circle cx="78" cy="28" r="6" fill="#fff"/><circle cx="78" cy="28" r="2" fill="#ffd700"/><circle cx="100" cy="22" r="7" fill="#ff6b9d"/><circle cx="100" cy="22" r="2.5" fill="#ffd700"/><circle cx="122" cy="28" r="6" fill="#fff"/><circle cx="122" cy="28" r="2" fill="#ffd700"/><circle cx="140" cy="38" r="6" fill="#e8658a"/><circle cx="140" cy="38" r="2" fill="#ffd700"/></g>' },
        santa:   { name:'Gorro navideño', svg:'<path d="M 70 42 Q 88 8 138 16 L 130 42 Z" fill="#e74c3c"/><ellipse cx="100" cy="42" rx="36" ry="6" fill="#fff"/><circle cx="140" cy="16" r="7" fill="#fff"/>' },
        samurai: { name:'Casco samurái', svg:'<path d="M 56 42 Q 100 0 144 42 L 150 46 L 50 46 Z" fill="#1c2833"/><path d="M 56 42 Q 100 0 144 42" fill="none" stroke="#c0392b" stroke-width="2"/><path d="M 90 18 L 100 4 L 110 18 L 100 14 Z" fill="#ffd700"/><path d="M 48 42 L 36 56 L 50 50 Z" fill="#1c2833"/><path d="M 152 42 L 164 56 L 150 50 Z" fill="#1c2833"/>' },
      },
      eyes: {
        none:    { name:'Sin gafas', svg:'' },
        sun:     { name:'Lentes de sol', svg:'<rect x="64" y="78" width="32" height="18" rx="6" fill="#1a1a1a"/><rect x="104" y="78" width="32" height="18" rx="6" fill="#1a1a1a"/><rect x="96" y="84" width="8" height="3" fill="#1a1a1a"/><path d="M 68 82 L 74 80 L 76 86 Z" fill="#fff" opacity=".25"/><path d="M 108 82 L 114 80 L 116 86 Z" fill="#fff" opacity=".25"/>' },
        nerd:    { name:'Gafas geek', svg:'<circle cx="80" cy="86" r="13" fill="rgba(255,255,255,0.08)" stroke="#1a1a1a" stroke-width="2.5"/><circle cx="120" cy="86" r="13" fill="rgba(255,255,255,0.08)" stroke="#1a1a1a" stroke-width="2.5"/><line x1="93" y1="86" x2="107" y2="86" stroke="#1a1a1a" stroke-width="2.5"/>' },
        monocle: { name:'Monóculo', svg:'<circle cx="120" cy="86" r="14" fill="rgba(255,255,255,0.1)" stroke="#ffd700" stroke-width="2"/><line x1="134" y1="86" x2="146" y2="100" stroke="#ffd700" stroke-width="1.5"/>' },
        heart:   { name:'Gafas corazón', svg:'<path d="M 72 80 C 68 76, 62 78, 64 84 C 66 90, 80 96, 80 96 C 80 96, 94 90, 96 84 C 98 78, 92 76, 88 80 C 86 82, 80 82, 80 82 C 80 82, 74 82, 72 80 Z" fill="#ff4757"/><path d="M 112 80 C 108 76, 102 78, 104 84 C 106 90, 120 96, 120 96 C 120 96, 134 90, 136 84 C 138 78, 132 76, 128 80 C 126 82, 120 82, 120 82 C 120 82, 114 82, 112 80 Z" fill="#ff4757"/>' },
        star:    { name:'Gafas estrella', svg:'<path d="M 80 72 L 84 82 L 95 82 L 86 88 L 90 98 L 80 92 L 70 98 L 74 88 L 65 82 L 76 82 Z" fill="#ffd700" stroke="#b8860b" stroke-width="1"/><path d="M 120 72 L 124 82 L 135 82 L 126 88 L 130 98 L 120 92 L 110 98 L 114 88 L 105 82 L 116 82 Z" fill="#ffd700" stroke="#b8860b" stroke-width="1"/>' },
        eyepatch:{ name:'Parche pirata', svg:'<path d="M 65 80 L 95 80 L 95 96 L 65 96 Z" fill="#1a1a1a"/><line x1="55" y1="78" x2="148" y2="92" stroke="#1a1a1a" stroke-width="1.5"/>' },
        vr:      { name:'Gafas VR', svg:'<rect x="56" y="76" width="88" height="22" rx="6" fill="#2c3e50"/><rect x="62" y="80" width="32" height="14" rx="3" fill="#74b9ff" opacity=".8"/><rect x="106" y="80" width="32" height="14" rx="3" fill="#74b9ff" opacity=".8"/><circle cx="78" cy="87" r="2" fill="#fff"/><circle cx="122" cy="87" r="2" fill="#fff"/>' },
      },
      neck: {
        none:    { name:'Sin collar', svg:'' },
        bowtie:  { name:'Pajarita', svg:'<path d="M 84 128 L 76 120 L 76 138 L 84 130 Z" fill="#c0392b"/><path d="M 116 128 L 124 120 L 124 138 L 116 130 Z" fill="#c0392b"/><rect x="92" y="124" width="16" height="10" rx="2" fill="#a02818"/>' },
        scarf:   { name:'Bufanda', svg:'<path d="M 60 122 Q 100 138 140 122 L 140 132 Q 100 146 60 132 Z" fill="#3498db"/><path d="M 130 130 L 145 158 L 152 154 L 138 128 Z" fill="#2980b9"/><line x1="64" y1="126" x2="138" y2="126" stroke="#fff" stroke-width="1" opacity=".4"/>' },
        collar:  { name:'Collar dorado', svg:'<path d="M 60 122 Q 100 140 140 122" fill="none" stroke="#ffd700" stroke-width="4" stroke-linecap="round"/><circle cx="100" cy="138" r="6" fill="#ffd700" stroke="#b8860b" stroke-width="1"/><circle cx="100" cy="138" r="2.5" fill="#0984e3"/>' },
        tie:     { name:'Corbata', svg:'<path d="M 94 122 L 106 122 L 108 130 L 100 134 L 92 130 Z" fill="#2c3e50"/><path d="M 92 130 L 108 130 L 112 168 L 100 178 L 88 168 Z" fill="#34495e"/><line x1="96" y1="140" x2="104" y2="140" stroke="#2c3e50" stroke-width="1"/>' },
        chain:   { name:'Cadena de oro', svg:'<g fill="none" stroke="#ffd700" stroke-width="3"><circle cx="76" cy="126" r="3"/><circle cx="86" cy="132" r="3"/><circle cx="96" cy="135" r="3"/><circle cx="106" cy="135" r="3"/><circle cx="116" cy="132" r="3"/><circle cx="126" cy="126" r="3"/></g><text x="100" y="158" text-anchor="middle" font-family="Arial Black" font-size="14" font-weight="900" fill="#ffd700" stroke="#b8860b" stroke-width=".5">$</text>' },
        cape:    { name:'Capa de héroe', svg:'<path d="M 50 110 Q 100 100 150 110 L 160 175 Q 100 165 40 175 Z" fill="#e74c3c"/><path d="M 50 110 Q 100 100 150 110 L 148 118 Q 100 108 52 118 Z" fill="#c0392b"/>' },
      },
      held: {
        none:    { name:'Nada', svg:'' },
        flower:  { name:'Flor', svg:'<g transform="translate(155 140)"><line x1="0" y1="0" x2="-6" y2="30" stroke="#27ae60" stroke-width="2"/><path d="M -4 4 L -10 0 L -4 -2 Z" fill="#27ae60"/><circle cx="0" cy="0" r="6" fill="#e8658a"/><circle cx="6" cy="-4" r="5" fill="#e8658a"/><circle cx="-4" cy="-6" r="5" fill="#e8658a"/><circle cx="6" cy="4" r="5" fill="#e8658a"/><circle cx="-4" cy="4" r="5" fill="#e8658a"/><circle cx="0" cy="0" r="3" fill="#ffd700"/></g>' },
        balloon: { name:'Globo', svg:'<line x1="155" y1="130" x2="158" y2="60" stroke="#fff" stroke-width="1" opacity=".6"/><ellipse cx="158" cy="50" rx="16" ry="20" fill="#ff4757"/><path d="M 155 65 L 158 70 L 161 65 Z" fill="#ff4757"/><ellipse cx="152" cy="44" rx="4" ry="6" fill="#fff" opacity=".4"/>' },
        sword:   { name:'Espada', svg:'<g transform="translate(160 100) rotate(20)"><rect x="-2" y="-40" width="4" height="50" fill="#bdc3c7"/><polygon points="0,-46 -3,-40 3,-40" fill="#bdc3c7"/><rect x="-8" y="10" width="16" height="3" fill="#ffd700"/><rect x="-2" y="13" width="4" height="14" fill="#8b4513"/></g>' },
        katana:  { name:'Katana', svg:'<g transform="translate(45 100) rotate(-25)"><rect x="-2" y="-50" width="4" height="60" fill="#ecf0f1"/><rect x="-3" y="-50" width="2" height="60" fill="#bdc3c7"/><rect x="-6" y="10" width="12" height="3" fill="#1c2833"/><rect x="-2" y="13" width="4" height="18" fill="#8b4513"/><circle cx="0" cy="31" r="3" fill="#ffd700"/></g>' },
      }
    };

    // ----- state -----
    window.CAPY = window.CAPY || {};
    const C = window.CAPY;
    C.BASE_ACC = BASE_ACC;
    C.equipped = { hat:'none', eyes:'none', neck:'none', held:'none' };
    C.outfits  = [];   // [{id,name,equipped}]
    C.custom   = {};   // {hat:{id:{name,svg}}, ...}
    C.lab      = { dressFx:true, autoSparkle:true, capySize:160, dockShortcut:true, soundOnDress:false, idleAnim:true };

    function uid(p){ return p + '_' + Date.now().toString(36) + Math.random().toString(36).slice(2,6); }

    async function loadAll(){
      try{
        const keys = ['capi-pet-cosmetics','capi-pet-outfits','capi-pet-custom','capi-pet-lab'];
        for (const k of keys){
          let val = localStorage.getItem(k);
          if (!val && window.storage && window.storage.get){
            try { const r = await window.storage.get(k); if (r && r.value) val = r.value; } catch(e){}
          }
          if (!val) continue;
          try {
            const v = JSON.parse(val);
            if (k==='capi-pet-cosmetics') C.equipped = Object.assign(C.equipped, v);
            if (k==='capi-pet-outfits')   C.outfits  = Array.isArray(v) ? v : [];
            if (k==='capi-pet-custom')    C.custom   = v || {};
            if (k==='capi-pet-lab')       C.lab      = Object.assign(C.lab, v);
          } catch(e){}
        }
      } catch(e){}
      applyLab();
      renderCapy();
    }
    async function saveK(k, v){
      try { localStorage.setItem(k, JSON.stringify(v)); } catch(e){}
      try { if (window.storage && window.storage.set) await window.storage.set(k, JSON.stringify(v)); } catch(e){}
    }
    function saveAll(){
      saveK('capi-pet-cosmetics', C.equipped);
      saveK('capi-pet-outfits',   C.outfits);
      saveK('capi-pet-custom',    C.custom);
      saveK('capi-pet-lab',       C.lab);
    }

    function accCatalog(slot){
      const out = Object.assign({}, BASE_ACC[slot] || {});
      const cs = (C.custom[slot] || {});
      for (const id in cs){ out[id] = { name: cs[id].name, svg: cs[id].svg, _custom:true }; }
      return out;
    }
    function accGet(slot, id){
      if (BASE_ACC[slot] && BASE_ACC[slot][id]) return BASE_ACC[slot][id];
      if (C.custom[slot] && C.custom[slot][id]) return { name:C.custom[slot][id].name, svg:C.custom[slot][id].svg, _custom:true };
      return { name:'—', svg:'' };
    }

    function buildSVG(equipped){
      const e = equipped || C.equipped;
      return CAPY_BODY
        .replace('<g id="capy-acc-hat"></g>',  '<g id="capy-acc-hat">'  + accGet('hat',  e.hat).svg  + '</g>')
        .replace('<g id="capy-acc-eyes"></g>', '<g id="capy-acc-eyes">' + accGet('eyes', e.eyes).svg + '</g>')
        .replace('<g id="capy-acc-neck"></g>', '<g id="capy-acc-neck">' + accGet('neck', e.neck).svg + '</g>')
        .replace('<g id="capy-acc-held"></g>', '<g id="capy-acc-held">' + accGet('held', e.held).svg + '</g>');
    }
    function buildSingleSVG(slot, id){
      const eq = { hat:'none', eyes:'none', neck:'none', held:'none' };
      eq[slot] = id;
      return buildSVG(eq);
    }

    function renderCapy(){
      const host = document.getElementById('pet-capi');
      if (!host) return;
      host.innerHTML = buildSVG();
      const svg = host.querySelector('.capy-svg');
      if (svg && C.lab.capySize) svg.style.width = svg.style.height = C.lab.capySize + 'px';
    }
    function flashDress(){
      const host = document.getElementById('pet-capi');
      if (!host || !C.lab.dressFx) return;
      const svg = host.querySelector('.capy-svg');
      if (svg){ svg.classList.remove('dressing'); void svg.offsetWidth; svg.classList.add('dressing'); }
      host.classList.remove('happy'); void host.offsetWidth; host.classList.add('happy');
      if (C.lab.autoSparkle) spawnSparkles(host);
      if (C.lab.soundOnDress) playDressSfx();
    }
    function spawnSparkles(host){
      const wrap = document.createElement('div');
      wrap.className = 'capy-sparkle-layer';
      const sparkles = ['✦','✧','★','✩','✨'];
      const colors = ['#ff9f43','#ffd700','#e8658a','#74b9ff','#fff'];
      for (let i=0;i<10;i++){
        const s = document.createElement('span'); s.className='capy-sparkle';
        s.textContent = sparkles[Math.floor(Math.random()*sparkles.length)];
        s.style.left = (40+Math.random()*80)+'px';
        s.style.top  = (40+Math.random()*120)+'px';
        s.style.color = colors[Math.floor(Math.random()*colors.length)];
        s.style.setProperty('--dx', (Math.random()*80 - 40)+'px');
        s.style.setProperty('--dy', (-30 - Math.random()*60)+'px');
        s.style.animationDelay = (Math.random()*0.2)+'s';
        wrap.appendChild(s);
      }
      host.appendChild(wrap);
      setTimeout(()=> wrap.remove(), 1400);
    }
    function playDressSfx(){
      try {
        const ctx = new (window.AudioContext||window.webkitAudioContext)();
        const o = ctx.createOscillator(); const g = ctx.createGain();
        o.connect(g); g.connect(ctx.destination);
        o.type='sine'; o.frequency.setValueAtTime(880, ctx.currentTime);
        o.frequency.exponentialRampToValueAtTime(1760, ctx.currentTime+0.18);
        g.gain.setValueAtTime(.15, ctx.currentTime); g.gain.exponentialRampToValueAtTime(.001, ctx.currentTime+0.35);
        o.start(); o.stop(ctx.currentTime+0.36);
      } catch(e){}
    }

    function toast(msg){
      const el = document.createElement('div'); el.className='capy-toast-mini'; el.textContent = msg;
      document.body.appendChild(el); setTimeout(()=> el.remove(), 2800);
    }

    function equip(slot, id){
      C.equipped[slot] = (C.equipped[slot]===id) ? 'none' : id;
      saveAll(); renderCapy(); flashDress();
    }

    // ============= Inventory Modal =============
    let activeView = 'inv', activeSlot = 'hat';
    function openInventory(view){
      activeView = view || 'inv';
      let bg = document.getElementById('capy-inv-modal');
      if (bg) bg.remove();
      bg = document.createElement('div'); bg.id='capy-inv-modal'; bg.className='capy-modal-bg';
      bg.innerHTML = `
        <div class="capy-modal" onclick="event.stopPropagation()">
          <div class="capy-modal-head">
            <h3><i class="fa-solid fa-shirt"></i> Vestidor & Inventario de Capy</h3>
            <button class="capy-modal-close" onclick="document.getElementById('capy-inv-modal').remove()"><i class="fa-solid fa-xmark"></i></button>
          </div>
          <div class="capy-nav">
            <button data-v="inv"><i class="fa-solid fa-box-archive"></i> Inventario</button>
            <button data-v="outfits"><i class="fa-solid fa-bookmark"></i> Colecciones</button>
            <button data-v="create"><i class="fa-solid fa-wand-magic-sparkles"></i> Crear</button>
            <button data-v="export"><i class="fa-solid fa-image"></i> Exportar</button>
          </div>
          <div class="capy-modal-body" id="capy-inv-body"></div>
        </div>`;
      bg.addEventListener('click', ()=> bg.remove());
      document.body.appendChild(bg);
      bg.querySelectorAll('.capy-nav button').forEach(b => b.addEventListener('click', ()=>{ activeView=b.dataset.v; renderInv(); }));
      renderInv();
    }
    window.openCapyInventory = openInventory;
    window.openCapyCosmetics = openInventory;

    function renderInv(){
      const body = document.getElementById('capy-inv-body'); if (!body) return;
      document.querySelectorAll('#capy-inv-modal .capy-nav button').forEach(b => b.classList.toggle('active', b.dataset.v===activeView));
      if (activeView==='inv')      body.innerHTML = invHTML();
      if (activeView==='outfits')  body.innerHTML = outfitsHTML();
      if (activeView==='create')   body.innerHTML = createHTML();
      if (activeView==='export')   body.innerHTML = exportHTML();
      wireInv(body);
    }
    function invHTML(){
      const slots = [
        {id:'hat',  label:'Sombreros', icon:'fa-hat-wizard'},
        {id:'eyes', label:'Gafas',     icon:'fa-glasses'},
        {id:'neck', label:'Cuello',    icon:'fa-bow-tie'},
        {id:'held', label:'Accesorio', icon:'fa-leaf'},
      ];
      const items = accCatalog(activeSlot);
      const cards = Object.keys(items).map(key => {
        const it = items[key];
        const eq = C.equipped[activeSlot]===key;
        return `<div class="capy-item ${eq?'equipped':''} ${it._custom?'custom':''}" data-eq="${activeSlot}|${key}">
          <div class="capy-thumb">${buildSingleSVG(activeSlot, key)}</div>
          <div class="capy-item-name">${it.name}</div>
        </div>`;
      }).join('');
      return `
        <div class="capy-layout">
          <div class="capy-preview-big">
            <div>${buildSVG()}</div>
            <div style="font-size:11px;color:var(--text-muted);text-align:center;">Tu Capy actual</div>
            <div class="capy-preview-actions">
              <button class="primary" data-act="save-outfit"><i class="fa-solid fa-bookmark"></i> Guardar look</button>
              <button data-act="reset-outfit"><i class="fa-solid fa-rotate-left"></i> Quitar</button>
            </div>
          </div>
          <div>
            <div class="capy-slot-tabs">
              ${slots.map(s => `<button class="capy-slot-tab ${s.id===activeSlot?'active':''}" data-slot="${s.id}"><i class="fa-solid ${s.icon}"></i> ${s.label}</button>`).join('')}
            </div>
            <div class="capy-grid">${cards}</div>
          </div>
        </div>`;
    }
    function outfitsHTML(){
      if (!C.outfits.length){
        return `<div class="capy-empty"><i class="fa-solid fa-bookmark" style="font-size:32px;display:block;margin-bottom:10px;opacity:.5;"></i>Aún no guardaste colecciones.<br>Arma un look en Inventario y guárdalo.</div>`;
      }
      return `<div class="capy-outfits">${C.outfits.map(o => `
        <div class="capy-outfit">
          <div class="capy-outfit-thumb">${buildSVG(o.equipped)}</div>
          <div class="capy-outfit-name">${o.name}</div>
          <div class="capy-outfit-row">
            <button class="eq" data-act="apply-outfit" data-id="${o.id}"><i class="fa-solid fa-shirt"></i> Equipar</button>
            <button class="del" data-act="del-outfit" data-id="${o.id}" title="Eliminar"><i class="fa-solid fa-trash"></i></button>
          </div>
        </div>`).join('')}</div>`;
    }
    function createHTML(){
      const slots = [['hat','Sombrero'],['eyes','Gafas'],['neck','Cuello'],['held','En mano']];
      const shapes = [
        ['top-hat','Sombrero copa'],['cap-shape','Gorra'],['crown-shape','Corona'],['hood','Capucha'],
        ['round-glasses','Gafas redondas'],['square-glasses','Gafas cuadradas'],['heart-glasses','Gafas corazón'],
        ['bowtie-shape','Pajarita'],['necklace','Collar'],['scarf-shape','Bufanda'],
        ['flower-held','Flor'],['orb','Orbe mágica'],['star-held','Estrella']
      ];
      return `
        <div class="capy-creator">
          <div class="capy-creator-form">
            <label>Nombre<input type="text" id="cc-name" placeholder="Mi accesorio" maxlength="22"></label>
            <label>Slot<select id="cc-slot">${slots.map(s=>`<option value="${s[0]}">${s[1]}</option>`).join('')}</select></label>
            <label>Forma<select id="cc-shape">${shapes.map(s=>`<option value="${s[0]}">${s[1]}</option>`).join('')}</select></label>
            <div class="row">
              <label>Color principal<input type="color" id="cc-color1" value="#ff9f43"></label>
              <label>Color sec.<input type="color" id="cc-color2" value="#ffd700"></label>
            </div>
            <label>Tamaño<input type="range" id="cc-size" min="0.6" max="1.5" step="0.05" value="1"></label>
            <button class="capy-creator-save" id="cc-save"><i class="fa-solid fa-floppy-disk"></i> Guardar accesorio</button>
            <div style="font-size:11px;color:var(--text-muted);line-height:1.5;">Los accesorios creados aparecen marcados con ★ en tu inventario.</div>
          </div>
          <div class="capy-preview-big">
            <div id="cc-preview">${buildSVG()}</div>
            <div style="font-size:11px;color:var(--text-muted);text-align:center;">Vista previa en vivo</div>
          </div>
        </div>`;
    }
    function exportHTML(){
      return `
        <div class="capy-layout">
          <div class="capy-preview-big">
            <div>${buildSVG()}</div>
            <div style="font-size:11px;color:var(--text-muted);text-align:center;">Look actual</div>
          </div>
          <div style="display:flex; flex-direction:column; gap:14px;">
            <div style="padding:14px; background:rgba(255,255,255,0.04); border:1px solid var(--border-glass); border-radius:14px;">
              <div style="font-weight:800; color:#fff; margin-bottom:6px;"><i class="fa-solid fa-image" style="color:var(--accent-color); margin-right:6px;"></i> Exportar imagen</div>
              <div style="font-size:12px; color:var(--text-muted); line-height:1.6; margin-bottom:12px;">Descarga tu Capy con accesorios como PNG transparente, listo para compartir o usar como avatar.</div>
              <div style="display:flex; gap:8px; flex-wrap:wrap;">
                <button class="capy-lab-btn" data-act="export-png" data-size="512">PNG 512px</button>
                <button class="capy-lab-btn" data-act="export-png" data-size="1024">PNG 1024px</button>
                <button class="capy-lab-btn" data-act="export-svg">SVG</button>
              </div>
            </div>
            <div style="padding:14px; background:rgba(255,255,255,0.04); border:1px solid var(--border-glass); border-radius:14px;">
              <div style="font-weight:800; color:#fff; margin-bottom:6px;"><i class="fa-solid fa-user" style="color:var(--accent-color); margin-right:6px;"></i> Usar como avatar</div>
              <div style="font-size:12px; color:var(--text-muted); line-height:1.6; margin-bottom:12px;">Aplica el Capy vestido como tu avatar de usuario en Capibara OS.</div>
              <button class="capy-lab-btn" data-act="set-avatar"><i class="fa-solid fa-circle-user"></i> Usar como avatar</button>
            </div>
          </div>
        </div>`;
    }

    function wireInv(root){
      // slot tabs
      root.querySelectorAll('.capy-slot-tab').forEach(b => b.addEventListener('click', ()=>{ activeSlot=b.dataset.slot; renderInv(); }));
      // equip items
      root.querySelectorAll('.capy-item').forEach(it => it.addEventListener('click', ()=>{
        const [slot,id] = it.dataset.eq.split('|');
        equip(slot, id); renderInv();
      }));
      // actions
      root.querySelectorAll('[data-act]').forEach(b => b.addEventListener('click', (e)=>{
        const act = b.dataset.act;
        if (act==='save-outfit') saveOutfit();
        if (act==='reset-outfit'){ C.equipped={hat:'none',eyes:'none',neck:'none',held:'none'}; saveAll(); renderCapy(); flashDress(); renderInv(); }
        if (act==='apply-outfit'){ const o = C.outfits.find(x=>x.id===b.dataset.id); if (o){ C.equipped = Object.assign({}, o.equipped); saveAll(); renderCapy(); flashDress(); toast('Look "'+o.name+'" equipado'); renderInv(); } }
        if (act==='del-outfit'){ C.outfits = C.outfits.filter(x=>x.id!==b.dataset.id); saveAll(); renderInv(); }
        if (act==='export-png') exportPNG(parseInt(b.dataset.size||'512', 10));
        if (act==='export-svg') exportSVG();
        if (act==='set-avatar') setAsAvatar();
      }));
      // creator wiring
      if (activeView==='create'){
        const update = ()=>{
          const slot = document.getElementById('cc-slot').value;
          const shape= document.getElementById('cc-shape').value;
          const c1   = document.getElementById('cc-color1').value;
          const c2   = document.getElementById('cc-color2').value;
          const size = parseFloat(document.getElementById('cc-size').value);
          const svg  = buildCustomSVG(shape, c1, c2, size);
          // live preview: overlay onto base SVG ignoring equipped
          const eq = Object.assign({}, C.equipped); eq[slot]='__preview__';
          // Inject preview directly
          const previewSvg = CAPY_BODY
            .replace('<g id="capy-acc-hat"></g>',  '<g id="capy-acc-hat">'  + (slot==='hat' ? svg : (accGet('hat',  C.equipped.hat).svg)) + '</g>')
            .replace('<g id="capy-acc-eyes"></g>', '<g id="capy-acc-eyes">' + (slot==='eyes'? svg : (accGet('eyes', C.equipped.eyes).svg))+ '</g>')
            .replace('<g id="capy-acc-neck"></g>', '<g id="capy-acc-neck">' + (slot==='neck'? svg : (accGet('neck', C.equipped.neck).svg))+ '</g>')
            .replace('<g id="capy-acc-held"></g>', '<g id="capy-acc-held">' + (slot==='held'? svg : (accGet('held', C.equipped.held).svg))+ '</g>');
          document.getElementById('cc-preview').innerHTML = previewSvg;
        };
        ['cc-slot','cc-shape','cc-color1','cc-color2','cc-size'].forEach(id => document.getElementById(id).addEventListener('input', update));
        document.getElementById('cc-save').addEventListener('click', ()=>{
          const name = document.getElementById('cc-name').value.trim() || 'Mi accesorio';
          const slot = document.getElementById('cc-slot').value;
          const shape= document.getElementById('cc-shape').value;
          const c1   = document.getElementById('cc-color1').value;
          const c2   = document.getElementById('cc-color2').value;
          const size = parseFloat(document.getElementById('cc-size').value);
          const svg  = buildCustomSVG(shape, c1, c2, size);
          if (!C.custom[slot]) C.custom[slot] = {};
          const id = uid('cust');
          C.custom[slot][id] = { name, svg };
          C.equipped[slot] = id;
          saveAll(); renderCapy(); flashDress(); toast('Accesorio "'+name+'" creado y equipado');
          activeView='inv'; activeSlot=slot; renderInv();
        });
        update();
      }
    }

    function saveOutfit(){
      const name = prompt('Nombre del look:', 'Mi look #' + (C.outfits.length+1));
      if (!name) return;
      C.outfits.push({ id: uid('fit'), name: name.slice(0,30), equipped: Object.assign({}, C.equipped) });
      saveAll(); toast('Look guardado'); renderInv();
    }

    // ---- Custom accessory shape generator ----
    function buildCustomSVG(shape, c1, c2, size){
      const s = size || 1;
      const G = (inner) => `<g transform="translate(100 ${shapeYOffset(shape)}) scale(${s}) translate(-100 ${-shapeYOffset(shape)})">${inner}</g>`;
      const shapes = {
        'top-hat':       `<rect x="72" y="20" width="56" height="10" rx="2" fill="${c1}"/><rect x="80" y="-2" width="40" height="26" fill="${c1}"/><rect x="80" y="14" width="40" height="4" fill="${c2}"/>`,
        'cap-shape':     `<path d="M 60 38 Q 100 8 140 38 L 150 44 Q 100 36 50 44 Z" fill="${c1}"/><path d="M 138 40 L 172 36 L 170 46 L 140 46 Z" fill="${c2}"/>`,
        'crown-shape':   `<path d="M 60 36 L 70 12 L 84 30 L 100 8 L 116 30 L 130 12 L 140 36 Z" fill="${c1}" stroke="${c2}" stroke-width="1.5"/><circle cx="100" cy="22" r="4" fill="${c2}"/>`,
        'hood':          `<path d="M 48 60 Q 100 -8 152 60 Q 152 80 100 76 Q 48 80 48 60 Z" fill="${c1}"/><path d="M 48 60 Q 100 -8 152 60" fill="none" stroke="${c2}" stroke-width="2"/>`,
        'round-glasses': `<circle cx="80" cy="86" r="13" fill="none" stroke="${c1}" stroke-width="3"/><circle cx="120" cy="86" r="13" fill="none" stroke="${c1}" stroke-width="3"/><line x1="93" y1="86" x2="107" y2="86" stroke="${c1}" stroke-width="3"/><circle cx="80" cy="86" r="10" fill="${c2}" opacity=".35"/><circle cx="120" cy="86" r="10" fill="${c2}" opacity=".35"/>`,
        'square-glasses':`<rect x="64" y="76" width="32" height="22" rx="4" fill="${c2}" opacity=".4" stroke="${c1}" stroke-width="3"/><rect x="104" y="76" width="32" height="22" rx="4" fill="${c2}" opacity=".4" stroke="${c1}" stroke-width="3"/><line x1="96" y1="86" x2="104" y2="86" stroke="${c1}" stroke-width="3"/>`,
        'heart-glasses': `<path d="M 72 80 C 68 76, 62 78, 64 84 C 66 90, 80 96, 80 96 C 80 96, 94 90, 96 84 C 98 78, 92 76, 88 80 C 86 82, 80 82, 80 82 C 80 82, 74 82, 72 80 Z" fill="${c1}"/><path d="M 112 80 C 108 76, 102 78, 104 84 C 106 90, 120 96, 120 96 C 120 96, 134 90, 136 84 C 138 78, 132 76, 128 80 C 126 82, 120 82, 120 82 C 120 82, 114 82, 112 80 Z" fill="${c1}"/>`,
        'bowtie-shape':  `<path d="M 84 128 L 72 118 L 72 140 L 84 130 Z" fill="${c1}"/><path d="M 116 128 L 128 118 L 128 140 L 116 130 Z" fill="${c1}"/><rect x="90" y="124" width="20" height="11" rx="2" fill="${c2}"/>`,
        'necklace':      `<path d="M 60 122 Q 100 142 140 122" fill="none" stroke="${c1}" stroke-width="4" stroke-linecap="round"/><circle cx="100" cy="140" r="7" fill="${c2}" stroke="${c1}" stroke-width="1.5"/>`,
        'scarf-shape':   `<path d="M 56 122 Q 100 140 144 122 L 144 134 Q 100 148 56 134 Z" fill="${c1}"/><path d="M 132 132 L 148 162 L 156 158 L 140 130 Z" fill="${c2}"/>`,
        'flower-held':   `<g transform="translate(155 140)"><line x1="0" y1="0" x2="-6" y2="30" stroke="#27ae60" stroke-width="2"/><circle cx="0" cy="0" r="7" fill="${c1}"/><circle cx="7" cy="-5" r="6" fill="${c1}"/><circle cx="-5" cy="-7" r="6" fill="${c1}"/><circle cx="7" cy="5" r="6" fill="${c1}"/><circle cx="-5" cy="5" r="6" fill="${c1}"/><circle cx="0" cy="0" r="3.5" fill="${c2}"/></g>`,
        'orb':           `<g transform="translate(50 140)"><circle cx="0" cy="0" r="14" fill="${c1}" opacity=".85"/><circle cx="-4" cy="-4" r="4" fill="${c2}" opacity=".7"/><circle cx="0" cy="0" r="14" fill="none" stroke="${c2}" stroke-width="1"/></g>`,
        'star-held':     `<g transform="translate(155 140)"><path d="M 0 -14 L 4 -4 L 14 -4 L 6 3 L 9 13 L 0 7 L -9 13 L -6 3 L -14 -4 L -4 -4 Z" fill="${c1}" stroke="${c2}" stroke-width="1.5"/></g>`,
      };
      return G(shapes[shape] || shapes['top-hat']);
    }
    function shapeYOffset(){ return 100; }

    // ---- Export PNG / SVG ----
    function getCurrentSVGString(){
      const svgStr = buildSVG();
      const tmp = document.createElement('div'); tmp.innerHTML = svgStr;
      const svg = tmp.querySelector('svg');
      svg.removeAttribute('class'); svg.setAttribute('xmlns','http://www.w3.org/2000/svg');
      return tmp.innerHTML;
    }
    function exportPNG(size){
      const svgStr = getCurrentSVGString();
      const blob = new Blob([svgStr], { type:'image/svg+xml;charset=utf-8' });
      const url  = URL.createObjectURL(blob);
      const img  = new Image();
      img.onload = ()=>{
        const c = document.createElement('canvas'); c.width = c.height = size;
        const ctx = c.getContext('2d'); ctx.clearRect(0,0,size,size);
        ctx.drawImage(img, 0,0, size, size);
        URL.revokeObjectURL(url);
        c.toBlob((png)=>{
          const a = document.createElement('a'); a.download = 'capy-pet-'+Date.now()+'.png';
          a.href = URL.createObjectURL(png); a.click(); setTimeout(()=> URL.revokeObjectURL(a.href), 1500);
          toast('PNG '+size+'px descargado');
        }, 'image/png');
      };
      img.src = url;
    }
    function exportSVG(){
      const blob = new Blob([getCurrentSVGString()], { type:'image/svg+xml;charset=utf-8' });
      const a = document.createElement('a'); a.download = 'capy-pet-'+Date.now()+'.svg'; a.href = URL.createObjectURL(blob); a.click();
      setTimeout(()=> URL.revokeObjectURL(a.href), 1500);
      toast('SVG descargado');
    }
    function setAsAvatar(){
      try {
        const svgStr = getCurrentSVGString();
        const blob = new Blob([svgStr], { type:'image/svg+xml;charset=utf-8' });
        const url = URL.createObjectURL(blob);
        const img = new Image();
        img.onload = ()=>{
          const c = document.createElement('canvas'); c.width=c.height=256;
          c.getContext('2d').drawImage(img,0,0,256,256);
          URL.revokeObjectURL(url);
          const dataUrl = c.toDataURL('image/png');
          localStorage.setItem('capy-avatar-image', dataUrl);
          document.querySelectorAll('[id*="avatar"]').forEach(el => {
            if (el.tagName==='IMG'){ el.src = dataUrl; }
          });
          // Replace common avatar emoji holders
          const ids = ['settings-avatar-emoji','avatar-preview-emoji','chat-user-av-bottom'];
          ids.forEach(id => { const el=document.getElementById(id); if (el){ el.innerHTML = `<img src="${dataUrl}" style="width:100%;height:100%;border-radius:50%;object-fit:cover;">`; } });
          toast('Avatar actualizado con tu Capy vestido');
        };
        img.src = url;
      } catch(e){ toast('No se pudo aplicar avatar'); }
    }

    // ============= Pet UI hooks =============
    function ensureAccButton(){
      const row = document.querySelector('#app-pet .pet-actions');
      if (!row || document.getElementById('pet-acc-btn')) return;
      const btn = document.createElement('button');
      btn.id='pet-acc-btn'; btn.className='pet-action capy-acc-btn';
      btn.innerHTML = '<i class="fa-solid fa-shirt"></i> Vestidor';
      btn.onclick = ()=> openInventory('inv');
      row.appendChild(btn);
    }

    // ============= Floating shortcut =============
    function ensureFloater(){
      if (!C.lab.dockShortcut){ const f=document.getElementById('capy-floater'); if (f) f.style.display='none'; return; }
      let f = document.getElementById('capy-floater');
      if (!f){
        f = document.createElement('button'); f.id='capy-floater';
        f.title='Vestidor de Capy'; f.innerHTML='<i class="fa-solid fa-shirt"></i>';
        f.onclick = ()=> openInventory('inv');
        document.body.appendChild(f);
      }
      f.style.display='flex';
    }

    // ============= LAB =============
    function applyLab(){ ensureFloater(); renderCapy(); }
    function openLab(){
      let bg = document.getElementById('capy-lab-modal');
      if (bg) bg.remove();
      bg = document.createElement('div'); bg.id='capy-lab-modal'; bg.className='capy-modal-bg';
      bg.innerHTML = `
        <div class="capy-modal" style="max-width:560px;" onclick="event.stopPropagation()">
          <div class="capy-modal-head">
            <h3><i class="fa-solid fa-flask"></i> Capy Lab</h3>
            <button class="capy-modal-close" onclick="document.getElementById('capy-lab-modal').remove()"><i class="fa-solid fa-xmark"></i></button>
          </div>
          <div class="capy-modal-body">
            <div class="capy-lab-card">
              <h4><i class="fa-solid fa-shirt"></i> Vestidor</h4>
              <div class="capy-lab-row"><div><div>Animación al vestir</div><div class="desc">Flash dorado al equipar</div></div><label class="switch"><input type="checkbox" id="lab-dressFx"></label></div>
              <div class="capy-lab-row"><div><div>Partículas mágicas</div><div class="desc">Chispas alrededor del Capy</div></div><label class="switch"><input type="checkbox" id="lab-autoSparkle"></label></div>
              <div class="capy-lab-row"><div><div>Sonido al vestir</div><div class="desc">Beep suave de confirmación</div></div><label class="switch"><input type="checkbox" id="lab-soundOnDress"></label></div>
              <div class="capy-lab-row"><div><div>Botón flotante</div><div class="desc">Acceso rápido al vestidor</div></div><label class="switch"><input type="checkbox" id="lab-dockShortcut"></label></div>
              <div class="capy-lab-row"><div><div>Tamaño del Capy</div><div class="desc">${C.lab.capySize}px</div></div><input type="range" id="lab-capySize" min="100" max="220" step="5"></div>
            </div>
            <div class="capy-lab-card">
              <h4><i class="fa-solid fa-share-nodes"></i> Acciones rápidas</h4>
              <div class="capy-lab-row"><div>Abrir Vestidor</div><button class="capy-lab-btn" onclick="openCapyInventory('inv')">Abrir</button></div>
              <div class="capy-lab-row"><div>Ver Colecciones</div><button class="capy-lab-btn" onclick="openCapyInventory('outfits')">Abrir</button></div>
              <div class="capy-lab-row"><div>Crear accesorio</div><button class="capy-lab-btn" onclick="openCapyInventory('create')">Abrir</button></div>
              <div class="capy-lab-row"><div>Exportar imagen</div><button class="capy-lab-btn" onclick="openCapyInventory('export')">Abrir</button></div>
            </div>
          </div>
        </div>`;
      bg.addEventListener('click', ()=> bg.remove());
      document.body.appendChild(bg);
      // wire
      const bools = ['dressFx','autoSparkle','soundOnDress','dockShortcut'];
      bools.forEach(k => { const el=document.getElementById('lab-'+k); el.checked = !!C.lab[k]; el.addEventListener('change', ()=>{ C.lab[k] = el.checked; saveAll(); applyLab(); }); });
      const sz = document.getElementById('lab-capySize'); sz.value = C.lab.capySize; sz.addEventListener('input', ()=>{ C.lab.capySize = parseInt(sz.value,10); saveAll(); renderCapy(); sz.parentElement.querySelector('.desc').textContent = C.lab.capySize+'px'; });
    }
    window.openCapyLab = openLab;

    // ============= Settings panel injection =============
    function addCapyToSettings(){
      const pane = document.getElementById('extras-mount') || document.querySelector('#app-settings .settings-content');
      if (!pane || document.getElementById('capy-lab-card-mounted')) return;
      const card = document.createElement('div'); card.id='capy-lab-card-mounted'; card.className='capy-lab-card';
      card.innerHTML = `
        <h4><i class="fa-solid fa-shirt"></i> Capy Pet — Vestidor & Lab</h4>
        <div class="capy-lab-row"><div><div>Vestidor de Capy</div><div class="desc">Inventario, colecciones y creador</div></div><button class="capy-lab-btn" onclick="openCapyInventory('inv')">Abrir</button></div>
        <div class="capy-lab-row"><div><div>Capy Lab</div><div class="desc">Animaciones, tamaño y accesos</div></div><button class="capy-lab-btn" onclick="openCapyLab()">Abrir</button></div>
        <div class="capy-lab-row"><div><div>Exportar Capy como PNG</div><div class="desc">Avatar con accesorios</div></div><button class="capy-lab-btn" onclick="openCapyInventory('export')">Exportar</button></div>`;
      pane.appendChild(card);
    }

    // ============= NEW WALLPAPERS — Japonés & Manga =============
    function addJapanManga(){
      if (!Array.isArray(window.WALLPAPERS)) return;
      const tagged = window.WALLPAPERS.some(w => w.id && w.id.startsWith('jp_'));
      if (tagged) return;
      const list = [
        { id:'jp_torii',     name:'Torii al amanecer',    type:'image', price:420, url:'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=1920&q=80&auto=format' },
        { id:'jp_sakura',    name:'Sakura en flor',       type:'image', price:430, url:'https://images.unsplash.com/photo-1522383225653-ed111181a951?w=1920&q=80&auto=format' },
        { id:'jp_fuji',      name:'Monte Fuji',           type:'image', price:480, url:'https://images.unsplash.com/photo-1570459027562-4a916cb4877a?w=1920&q=80&auto=format' },
        { id:'jp_shibuya',   name:'Shibuya Neón',         type:'image', price:520, url:'https://images.unsplash.com/photo-1542931287-023b922fa89b?w=1920&q=80&auto=format' },
        { id:'jp_pagoda',    name:'Pagoda Roja',          type:'image', price:460, url:'https://images.unsplash.com/photo-1493997181344-712f2f19d87a?w=1920&q=80&auto=format' },
        { id:'jp_lanterns',  name:'Linternas Rojas',      type:'image', price:470, url:'https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=1920&q=80&auto=format' },
        { id:'jp_kyoto',     name:'Kyoto Lluvia',         type:'image', price:500, url:'https://images.unsplash.com/photo-1480796927426-f609979314bd?w=1920&q=80&auto=format' },
        { id:'jp_garden',    name:'Jardín Zen',           type:'image', price:440, url:'https://images.unsplash.com/photo-1528164344705-47542687000d?w=1920&q=80&auto=format' },
        { id:'jp_arashiyama',name:'Bosque Arashiyama',    type:'image', price:490, url:'https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=1920&q=80&auto=format' },
        { id:'jp_temple',    name:'Templo Nocturno',      type:'image', price:510, url:'https://images.unsplash.com/photo-1526481280693-3bfa7568e0f3?w=1920&q=80&auto=format' },
        { id:'mg_panels',    name:'Manga Panels',         type:'image', price:530, url:'https://images.unsplash.com/photo-1578632767115-351597cf2477?w=1920&q=80&auto=format' },
        { id:'mg_pages',     name:'Manga Pages',          type:'image', price:540, url:'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=1920&q=80&auto=format' },
        { id:'mg_speed',     name:'Speed Lines BW',       type:'image', price:550, url:'https://images.unsplash.com/photo-1611138445872-c6fae9e02cd2?w=1920&q=80&auto=format' },
        { id:'mg_studio',    name:'Anime Studio Vibes',   type:'image', price:560, url:'https://images.unsplash.com/photo-1633613286848-e6f43bbafb8d?w=1920&q=80&auto=format' },
        { id:'mg_akihabara', name:'Akihabara Manga',      type:'image', price:580, url:'https://images.unsplash.com/photo-1554797589-7241bb691973?w=1920&q=80&auto=format' },
        { id:'mg_cat',       name:'Manga Cat Sketch',     type:'image', price:520, url:'https://images.unsplash.com/photo-1601651411009-d50dee72d2cf?w=1920&q=80&auto=format' },
      ];
      list.forEach(w => window.WALLPAPERS.push(w));
      if (typeof window.renderStore === 'function') try { window.renderStore(); } catch(e){}
    }

    // ============= Boot =============
    function boot(){
      renderCapy();
      ensureAccButton();
      ensureFloater();
      addJapanManga();
      addCapyToSettings();
    }
    const _o = window.openApp;
    window.openApp = function(id){
      _o && _o(id);
      if (id==='pet')       setTimeout(boot, 150);
      if (id==='settings')  setTimeout(addCapyToSettings, 300);
      if (id==='store')     setTimeout(addJapanManga, 100);
    };
    // Re-render if other code resets the emoji
    const obs = new MutationObserver(()=>{
      const host = document.getElementById('pet-capi');
      if (host && !host.querySelector('.capy-svg')) renderCapy();
    });
    document.addEventListener('DOMContentLoaded', ()=>{
      const host = document.getElementById('pet-capi');
      if (host) obs.observe(host, { childList:true, characterData:true, subtree:true });
    });
    setTimeout(boot, 1200);
    setTimeout(boot, 3000);
    setTimeout(addJapanManga, 800);
    setTimeout(addCapyToSettings, 4500);
    loadAll();
  })();


