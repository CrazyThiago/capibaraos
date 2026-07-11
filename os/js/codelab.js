/* ========================================
   Capibara OS — CodeLab Editor
   ======================================== */

/* --- block (orig 12533-13045) --- */
  (function(){
    // Default starter code
    const CL_DEFAULTS = {
      html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>My Project</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700;900&display=swap" rel="stylesheet">
</head>
<body>
  <div class="card">
    <div class="badge">CodeLab</div>
    <h1>Hello, world<span class="dot">.</span></h1>
    <p>Edit the HTML, CSS &amp; JS — the preview updates when you click <strong>Run</strong>.</p>
    <div class="btns">
      <button id="btn-primary">Get Started</button>
      <button id="btn-ghost">Learn More</button>
    </div>
    <div class="chips">
      <span class="chip">HTML</span>
      <span class="chip">CSS</span>
      <span class="chip">JavaScript</span>
    </div>
  </div>
</body>
</html>`,
      css: `*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

body {
  font-family: 'Inter', 'Segoe UI', sans-serif;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #0f0f17;
  background-image:
    radial-gradient(ellipse 60% 50% at 20% 20%, rgba(189,147,249,0.12) 0%, transparent 70%),
    radial-gradient(ellipse 50% 40% at 80% 80%, rgba(255,159,67,0.10) 0%, transparent 70%);
}

.card {
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.09);
  border-radius: 24px;
  padding: 48px 44px;
  max-width: 480px;
  width: 90%;
  backdrop-filter: blur(12px);
  box-shadow: 0 24px 64px rgba(0,0,0,0.5);
  animation: fadeUp 0.6s cubic-bezier(0.34,1.18,0.64,1) both;
}

.badge {
  display: inline-block;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: #ff9f43;
  background: rgba(255,159,67,0.12);
  border: 1px solid rgba(255,159,67,0.25);
  border-radius: 99px;
  padding: 4px 12px;
  margin-bottom: 20px;
}

h1 {
  font-size: 2.6rem;
  font-weight: 900;
  color: #f5f6fa;
  line-height: 1.1;
  margin-bottom: 14px;
}

.dot { color: #ff9f43; }

p {
  font-size: 15px;
  color: #8892a4;
  line-height: 1.65;
  margin-bottom: 28px;
}

p strong { color: #a78bfa; font-weight: 700; }

.btns { display: flex; gap: 10px; margin-bottom: 24px; flex-wrap: wrap; }

button {
  padding: 11px 26px;
  border-radius: 12px;
  border: none;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
  transition: transform 0.18s, box-shadow 0.18s;
}
button:hover { transform: translateY(-2px); }
button:active { transform: scale(0.96); }

#btn-primary {
  background: linear-gradient(100deg, #ff9f43, #fdba74);
  color: #0f0f17;
  box-shadow: 0 4px 20px rgba(255,159,67,0.35);
}
#btn-primary:hover { box-shadow: 0 8px 28px rgba(255,159,67,0.5); }

#btn-ghost {
  background: rgba(255,255,255,0.06);
  color: #f5f6fa;
  border: 1px solid rgba(255,255,255,0.12);
}
#btn-ghost:hover { background: rgba(255,255,255,0.10); }

.chips { display: flex; gap: 8px; flex-wrap: wrap; }

.chip {
  font-size: 12px;
  font-weight: 600;
  padding: 4px 12px;
  border-radius: 99px;
  background: rgba(139,233,253,0.08);
  border: 1px solid rgba(139,233,253,0.18);
  color: #67e8f9;
}

@keyframes fadeUp {
  from { opacity: 0; transform: translateY(24px); }
  to   { opacity: 1; transform: translateY(0); }
}`,
      js: `const primary = document.getElementById('btn-primary');
const ghost   = document.getElementById('btn-ghost');
const h1      = document.querySelector('h1');
const badge   = document.querySelector('.badge');

const phrases = ['Hello, world', 'Hola, mundo', 'Bonjour monde', 'Ciao mondo'];
let idx = 0;

primary.addEventListener('click', function() {
  idx = (idx + 1) % phrases.length;
  h1.innerHTML = phrases[idx] + '<span class="dot">.</span>';
  this.textContent = 'Changed!';
  setTimeout(() => { this.textContent = 'Get Started'; }, 1200);
});

ghost.addEventListener('click', function() {
  const colors = ['#ff9f43','#a78bfa','#4ade80','#e8658a','#67e8f9'];
  const c = colors[Math.floor(Math.random() * colors.length)];
  document.querySelector('.dot').style.color = c;
  badge.style.color = c;
  badge.style.background = c + '22';
  badge.style.borderColor = c + '44';
});`
    };

    // State
    let clCurrentTab = 'html';
    let clCurrentView = 'split'; // 'split' | 'tabs'

    // editor Settings state
    let CL_SETTINGS = { fontSize: 13, lineHeight: 1.65, theme: 'dark', tabSize: 2, wrap: false };
    const CL_SETTINGS_KEY = 'capi-codelab-settings';

    function clLoadSettings(){
      try {
        const raw = localStorage.getItem(CL_SETTINGS_KEY);
        if (raw) CL_SETTINGS = Object.assign(CL_SETTINGS, JSON.parse(raw));
      } catch(e){}
      clApplyAllSettings();
      // Sync UI
      const fs = document.getElementById('cl-font-size');
      const lh = document.getElementById('cl-line-height');
      const wt = document.getElementById('cl-wrap-toggle');
      if (fs) { fs.value = CL_SETTINGS.fontSize; document.getElementById('cl-font-size-val').textContent = CL_SETTINGS.fontSize + 'px'; }
      if (lh) { lh.value = CL_SETTINGS.lineHeight; document.getElementById('cl-line-height-val').textContent = CL_SETTINGS.lineHeight; }
      if (wt) wt.checked = CL_SETTINGS.wrap;
      document.querySelectorAll('.cl-theme-btn').forEach(b => b.classList.toggle('active', b.dataset.theme === CL_SETTINGS.theme));
      document.querySelectorAll('.cl-tabsize-btn').forEach(b => b.classList.toggle('active', parseInt(b.dataset.size) === CL_SETTINGS.tabSize));
    }

    function clApplyAllSettings(){
      document.querySelectorAll('.codelab-textarea').forEach(ta => {
        ta.style.fontSize = CL_SETTINGS.fontSize + 'px';
        ta.style.lineHeight = CL_SETTINGS.lineHeight;
        ta.style.whiteSpace = CL_SETTINGS.wrap ? 'pre-wrap' : 'pre';
        ta.style.overflowWrap = CL_SETTINGS.wrap ? 'break-word' : 'normal';
        ta.setAttribute('data-tab-size', CL_SETTINGS.tabSize);
        // Remove all theme classes, add current one
        ta.classList.remove('theme-dark','theme-oscuro','theme-monokai','theme-nord','theme-light');
        ta.classList.add('theme-' + CL_SETTINGS.theme);
      });
    }

    window.clApplySetting = function(key, val){
      if (key === 'fontSize') {
        CL_SETTINGS.fontSize = parseInt(val);
        const el = document.getElementById('cl-font-size-val');
        if (el) el.textContent = val + 'px';
      } else if (key === 'lineHeight') {
        CL_SETTINGS.lineHeight = parseFloat(val);
        const el = document.getElementById('cl-line-height-val');
        if (el) el.textContent = parseFloat(val).toFixed(1);
      } else if (key === 'theme') {
        CL_SETTINGS.theme = val;
        document.querySelectorAll('.cl-theme-btn').forEach(b => b.classList.toggle('active', b.dataset.theme === val));
      } else if (key === 'tabSize') {
        CL_SETTINGS.tabSize = parseInt(val);
        document.querySelectorAll('.cl-tabsize-btn').forEach(b => b.classList.toggle('active', parseInt(b.dataset.size) === CL_SETTINGS.tabSize));
      } else if (key === 'wrap') {
        CL_SETTINGS.wrap = !!val;
      }
      clApplyAllSettings();
    };

    window.clSaveSettings = function(){
      try { localStorage.setItem(CL_SETTINGS_KEY, JSON.stringify(CL_SETTINGS)); } catch(e){}
      clCloseSettings();
      if (typeof showToast === 'function') showToast('CodeLab', 'Configuración guardada ✓');
    };

    window.clResetSettings = function(){
      CL_SETTINGS = { fontSize: 13, lineHeight: 1.65, theme: 'dark', tabSize: 2, wrap: false };
      try { localStorage.removeItem(CL_SETTINGS_KEY); } catch(e){}
      clLoadSettings();
    };

    window.clOpenSettings = function(){
      const overlay = document.getElementById('codelab-settings-overlay');
      if (!overlay) return;
      clLoadSettings();
      overlay.style.display = 'flex';
    };

    window.clCloseSettings = function(){
      const overlay = document.getElementById('codelab-settings-overlay');
      if (overlay) overlay.style.display = 'none';
    };

    // ---- Python support (Pyodide) ----
    let _pyodide = null, _pyodideLoading = false;

    async function clGetPyodide(){
      if (_pyodide) return _pyodide;
      if (_pyodideLoading) {
        // Wait until loaded
        return new Promise(res => {
          const chk = setInterval(()=>{ if (_pyodide){ clearInterval(chk); res(_pyodide); } }, 200);
        });
      }
      _pyodideLoading = true;
      const status = document.getElementById('cl-py-status');
      if (status) status.textContent = currentLang==='en'?'Loading Pyodide…':'Cargando Pyodide…';
      // Load Pyodide from CDN
      await new Promise((res, rej) => {
        const s = document.createElement('script');
        s.src = 'https://cdn.jsdelivr.net/pyodide/v0.26.2/full/pyodide.js';
        s.onload = res; s.onerror = rej;
        document.head.appendChild(s);
      });
      _pyodide = await loadPyodide({ indexURL: 'https://cdn.jsdelivr.net/pyodide/v0.26.2/full/' });
      if (status) status.textContent = currentLang==='en'?'Ready':'Listo';
      return _pyodide;
    }

    window.clRunPython = async function(){
      const pyTA = document.getElementById('cl-py');
      if (!pyTA) return;
      const code = pyTA.value;

      // Show output overlay
      const overlay = document.getElementById('codelab-py-overlay');
      if (overlay) { overlay.style.display = 'flex'; }
      const outEl = document.getElementById('cl-py-output');
      const status = document.getElementById('cl-py-status');
      if (outEl) outEl.innerHTML = '<span style="color:#6b7280;">⏳ ' + (currentLang==='en'?'Running…':'Ejecutando…') + '</span>\n';
      if (status) status.textContent = currentLang==='en'?'Running…':'Ejecutando…';

      try {
        const pyodide = await clGetPyodide();
        // Redirect stdout/stderr
        let output = '';
        pyodide.setStdout({ batched: (s) => { output += s + '\n'; } });
        pyodide.setStderr({ batched: (s) => { output += '⚠ ' + s + '\n'; } });
        await pyodide.runPythonAsync(code);
        if (outEl) outEl.innerHTML = output ? escHtml(output) : '<span style="color:#4ade80;">✓ Ejecutado (sin output)</span>';
        if (status) status.textContent = '✓ OK';
      } catch(e){
        if (outEl) outEl.innerHTML = '<span style="color:#ff7675;">❌ Error:\n' + escHtml(e.message) + '</span>';
        if (status) status.textContent = '✗ Error';
      }
    };

    function escHtml(s){ return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;'); }

    window.clClosePyOutput = function(){
      const overlay = document.getElementById('codelab-py-overlay');
      if (overlay) overlay.style.display = 'none';
    };

    window.clClearPyOutput = function(){
      const out = document.getElementById('cl-py-output');
      if (out) out.innerHTML = '';
      const status = document.getElementById('cl-py-status');
      if (status) status.textContent = '';
    };

    // Initialize when app opens
    function clInit() {
      const htmlTA = document.getElementById('cl-html');
      const cssTA  = document.getElementById('cl-css');
      const jsTA   = document.getElementById('cl-js');
      const pyTA   = document.getElementById('cl-py');
      if (!htmlTA._clInited) {
        htmlTA.value = CL_DEFAULTS.html;
        cssTA.value  = CL_DEFAULTS.css;
        jsTA.value   = CL_DEFAULTS.js;
        if (pyTA) pyTA.value = CL_DEFAULTS.py || '# Python en Capibara OS 🐾\n# Usa print() para ver el output\n\nfor i in range(1, 6):\n    print(f"Capibara #{i} 🦫")\n\nprint("\\n✅ Python funcionando con Pyodide!")';
        htmlTA._clInited = true;
        // Tab key support
        const allTAs = pyTA ? [htmlTA, cssTA, jsTA, pyTA] : [htmlTA, cssTA, jsTA];
        allTAs.forEach(ta => {
          ta.addEventListener('keydown', function(e) {
            if (e.key === 'Tab') {
              e.preventDefault();
              const tabs = ' '.repeat(CL_SETTINGS.tabSize || 2);
              const s = this.selectionStart, end = this.selectionEnd;
              this.value = this.value.substring(0, s) + tabs + this.value.substring(end);
              this.selectionStart = this.selectionEnd = s + (CL_SETTINGS.tabSize || 2);
            }
          });
        });
      }
      clLoadSettings();
      clSetView(clCurrentView);
      clRunCode();
    }

    // Set view mode: 'split' (3 editors side by side) or 'tabs' (one at a time)
    window.clSetView = function(mode) {
      clCurrentView = mode;
      const editors = document.getElementById('cl-editors');
      const tabSep = document.getElementById('cl-tab-sep');
      const tabBtns = ['cltab-html','cltab-css','cltab-js','cltab-py'];

      // Update view buttons
      ['clview-split','clview-tabs'].forEach(id => {
        const b = document.getElementById(id);
        if (b) b.classList.toggle('active', id === 'clview-' + mode);
      });

      if (mode === 'split') {
        // Show html/css/js panes side by side; hide Python pane (Python only works in tabs)
        editors.classList.remove('tabbed');
        ['html','css','js'].forEach(t => {
          const p = document.getElementById('cl-pane-' + t);
          if (p) p.style.display = 'flex';
        });
        // Hide Python pane in split
        const pyPane = document.getElementById('cl-pane-py');
        if (pyPane) pyPane.style.display = 'none';
        // Hide tab buttons
        tabBtns.forEach(id => { const b = document.getElementById(id); if (b) b.style.display = 'none'; });
        if (tabSep) tabSep.style.display = 'none';
        // Hide Python run button
        const pyBtn = document.getElementById('cl-py-run-btn');
        if (pyBtn) pyBtn.style.display = 'none';
        // Show HTML preview panel
        const preview = document.querySelector('.codelab-preview-panel');
        if (preview) preview.style.display = '';
        const runBtn = document.querySelector('.codelab-run-btn');
        if (runBtn) runBtn.style.display = '';
      } else {
        // Tabs mode — stack panes vertically, show one at a time
        editors.classList.add('tabbed');
        // Show tab buttons
        tabBtns.forEach(id => { const b = document.getElementById(id); if (b) b.style.display = 'flex'; });
        if (tabSep) tabSep.style.display = '';
        clSwitchTab(clCurrentTab);
      }
    };

    // Switch editor tab (only used in tabs mode)
    window.clSwitchTab = function(tab) {
      clCurrentTab = tab;
      const allTabs = ['html','css','js','py'];
      allTabs.forEach(t => {
        const pane = document.getElementById('cl-pane-' + t);
        if (pane) pane.style.display = (t === tab) ? 'flex' : 'none';
        const btn = document.getElementById('cltab-' + t);
        if (btn) btn.classList.toggle('active', t === tab);
      });

      const isPython = (tab === 'py');
      // In Python mode: hide HTML preview, show Python run; vice versa
      const preview = document.querySelector('.codelab-preview-panel');
      if (preview) preview.style.display = isPython ? 'none' : '';
      const runBtn = document.querySelector('.codelab-run-btn');
      if (runBtn) runBtn.style.display = isPython ? 'none' : '';
      const pyBtn = document.getElementById('cl-py-run-btn');
      if (pyBtn) pyBtn.style.display = isPython ? '' : 'none';
    };

    // Build the preview document
    function clBuildDoc() {
      const html = document.getElementById('cl-html').value;
      const css  = document.getElementById('cl-css').value;
      const js   = document.getElementById('cl-js').value;

      // If html has <html> tag, inject style+script inside it
      if (/<html[\s>]/i.test(html)) {
        let doc = html;
        const cssTag = `<style>\n${css}\n</style>`;
        const jsTag  = `<script>\ntry{\n${js}\n}catch(e){console.error(e)}\n<\/script>`;
        if (/<\/head>/i.test(doc)) {
          doc = doc.replace(/<\/head>/i, cssTag + '\n</head>');
        } else {
          doc = cssTag + '\n' + doc;
        }
        if (/<\/body>/i.test(doc)) {
          doc = doc.replace(/<\/body>/i, jsTag + '\n</body>');
        } else {
          doc = doc + '\n' + jsTag;
        }
        return doc;
      } else {
        return `<!DOCTYPE html><html><head><meta charset="UTF-8"><style>${css}</style></head><body>${html}<script>try{${js}}catch(e){console.error(e)}<\/script></body></html>`;
      }
    }

    // Run / update preview
    window.clRunCode = function() {
      const iframe = document.getElementById('cl-preview');
      if (!iframe) return;
      iframe.srcdoc = clBuildDoc();
      const dot = document.getElementById('cl-live-dot');
      if (dot) {
        dot.style.display = 'block';
        clearTimeout(dot._t);
        dot._t = setTimeout(() => { dot.style.display = 'none'; }, 2000);
      }
    };

    // Open fullscreen preview — INSIDE the app window
    window.clOpenFullscreen = function() {
      const overlay = document.getElementById('codelab-fs-overlay');
      const fsIframe = document.getElementById('codelab-fs-iframe');
      if (!overlay || !fsIframe) return;
      fsIframe.srcdoc = clBuildDoc();
      overlay.classList.add('show');
    };

    // Close fullscreen preview
    window.clCloseFullscreen = function() {
      const overlay = document.getElementById('codelab-fs-overlay');
      if (overlay) overlay.classList.remove('show');
    };

    // Close on Escape key
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape') {
        const overlay = document.getElementById('codelab-fs-overlay');
        if (overlay && overlay.classList.contains('show')) {
          clCloseFullscreen();
        }
      }
    });

    // Show welcome splash with username
    function clShowSplash() {
      const splash = document.getElementById('cl-welcome-splash');
      const nameEl = document.getElementById('cl-splash-name');
      const barFill = document.getElementById('cl-splash-bar-fill');
      if (!splash) return;

      // Set username
      const userName = (window.STATE && STATE.user && STATE.user.name) ? STATE.user.name : null;
      if (nameEl) {
        nameEl.textContent = userName ? 'Hey, ' + userName : 'Your code editor';
      }

      // Show splash
      splash.classList.remove('cl-splash-gone', 'cl-splash-hidden');

      // Animate bar
      requestAnimationFrame(() => {
        if (barFill) { barFill.style.width = '0%'; }
        requestAnimationFrame(() => {
          if (barFill) barFill.style.width = '100%';
        });
      });

      // Fade out after 2.4s, then hide
      setTimeout(() => {
        splash.classList.add('cl-splash-hidden');
        setTimeout(() => splash.classList.add('cl-splash-gone'), 650);
      }, 2400);
    }

    // Hook into openApp to initialize CodeLab and auto-maximize games
    window.addEventListener('openapp', function(e) { if (e.detail === 'codelab') { clShowSplash(); setTimeout(clInit, 120); } });

    // Also init if window is already visible
    document.addEventListener('DOMContentLoaded', function() {
      const win = document.getElementById('app-codelab');
      if (win && win.style.display !== 'none' && win.style.display !== '') {
        setTimeout(clInit, 200);
      }
    });

  })();


