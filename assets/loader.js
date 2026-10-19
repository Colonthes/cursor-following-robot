/* Cursor Following Robot — lazy, same-origin loading. No third-party requests. */
(() => {
  'use strict';
  if (window.__cursorRobotLoader) return;
  window.__cursorRobotLoader = true;
  const bundles = new Map();
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)');
  const mouse = window.matchMedia('(hover: hover) and (pointer: fine)');
  const eligible = () => !reduce.matches && mouse.matches;
  function bundle(url) {
    if (window.CursorRobot) return Promise.resolve();
    if (!bundles.has(url)) {
      bundles.set(url, new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = url;
        script.async = true;
        script.onload = resolve;
        script.onerror = reject;
        document.head.appendChild(script);
      }));
    }
    return bundles.get(url);
  }
  function boot() {
    document.querySelectorAll('[data-cursor-robot]').forEach(el => {
      window.CursorRobotChat?.attach(el);
      if (el.dataset.observed) return;
      el.dataset.observed = 'true';
      let near = !('IntersectionObserver' in window);
      let pending = false;
      async function attempt() {
        if (!near || !eligible() || pending || el.dataset.initialized || !el.isConnected) return;
        pending = true;
        try {
          await bundle(el.dataset.bundle);
          if (eligible() && el.isConnected) window.CursorRobot.init(el);
        } catch (_) {
          el.dataset.status = 'fallback';
        } finally { pending = false; }
      }
      if ('IntersectionObserver' in window) {
        new IntersectionObserver(entries => {
          near = entries[0].isIntersecting;
          attempt();
        }, {rootMargin: '180px'}).observe(el);
      }
      reduce.addEventListener('change', attempt);
      mouse.addEventListener('change', attempt);
      attempt();
    });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot, {once:true});
  else boot();
  // Explicit hook for a developer inserting content through AJAX after page load.
  document.addEventListener('cursor-robot:refresh', boot);
})();
