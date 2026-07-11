(function(){
  var cfg = (window.CAPY_CONFIG || {});
  var SUPA_URL = cfg.SUPA_URL || "";
  var SUPA_KEY = cfg.SUPA_KEY || "";
  if (!SUPA_URL || !SUPA_KEY) {
    window.storage = {
      get: function(){ return Promise.resolve({ value: null }); },
      set: function(){ return Promise.resolve(true); },
      list: function(){ return Promise.resolve({ keys: [] }); },
      delete: function(){ return Promise.resolve(true); },
      del: function(){ return Promise.resolve(true); }
    };
    return;
  }
  var REST = SUPA_URL + "/rest/v1/kv_store";
  var H = { apikey: SUPA_KEY, Authorization: "Bearer " + SUPA_KEY, "Content-Type": "application/json" };
  async function get(key, _shared){
    try{
      const r = await fetch(REST + "?key=eq." + encodeURIComponent(key) + "&select=value", { headers: H });
      if(!r.ok) return { value: null };
      const rows = await r.json();
      return { value: rows && rows[0] ? rows[0].value : null };
    }catch(e){ return { value: null }; }
  }
  async function set(key, value, _shared){
    const body = JSON.stringify({ key, value, updated_at: new Date().toISOString() });
    const r = await fetch(REST + "?on_conflict=key", {
      method: "POST",
      headers: Object.assign({}, H, { Prefer: "resolution=merge-duplicates,return=minimal" }),
      body
    });
    if(!r.ok) throw new Error("storage.set failed: " + r.status);
    return true;
  }
  async function list(prefix, _shared){
    try{
      const r = await fetch(REST + "?key=like." + encodeURIComponent(prefix + "%") + "&select=key", { headers: H });
      if(!r.ok) return { keys: [] };
      const rows = await r.json();
      const keys = rows.map(x => x.key);
      const arr = keys.slice();
      arr.keys = keys;
      return arr;
    }catch(e){ return { keys: [] }; }
  }
  async function del(key, _shared){
    await fetch(REST + "?key=eq." + encodeURIComponent(key), { method: "DELETE", headers: H });
    return true;
  }
  window.storage = { get, set, list, delete: del, del };
})();