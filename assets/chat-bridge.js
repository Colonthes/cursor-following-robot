/* Cursor Following Robot: existing Site Chatbot DOM integration. No requests or audio. */
(() => {
  'use strict';
  if(window.CursorRobotChat)return;
  const roots=new Set();
  let owner=null,panel=null,observer=null,stopTimer=0,openTimer=0,watchdog=0;
  let waiting=false,activeRow=null,sawStream=false,known=new WeakMap(),userCount=0;
  const query=(selector,root=document)=>{try{return root.querySelector(selector);}catch{return null;}};
  const opened=p=>!!p&&!p.hidden&&getComputedStyle(p).display!=='none'&&getComputedStyle(p).visibility!=='hidden';
  function publish(el,active,speaking=false) {
    el.dataset.chatActive=String(active);el.dataset.replyActive=String(active&&speaking);
    el.querySelector('.cursor-robot__chat')?.setAttribute('aria-expanded',String(active));
    el.dispatchEvent(new CustomEvent('cursor-robot:state',{detail:{active,speaking:active&&speaking}}));
  }
  function stop() {clearTimeout(stopTimer);clearTimeout(watchdog);if(owner)publish(owner,true,false);}
  function close() {
    stop();clearTimeout(openTimer);observer?.disconnect();observer=null;
    if(owner)publish(owner,false,false);
    owner=null;panel=null;waiting=false;activeRow=null;sawStream=false;
  }
  function speak() {
    if(!owner||!opened(panel)||document.hidden)return;
    clearTimeout(stopTimer);clearTimeout(watchdog);publish(owner,true,true);
    // If a provider fails to finish a reply, do not leave the mouth moving forever.
    watchdog=setTimeout(stop,15000);
  }
  function remember() {
    known=new WeakMap();
    panel?.querySelectorAll('.scb-row.bot .scb-bubble').forEach(b=>known.set(b,b.textContent||''));
    userCount=panel?.querySelectorAll('.scb-row.user').length||0;
  }
  function inspect() {
    if(!owner||!panel)return;
    if(!opened(panel)){close();return;}
    const nowUsers=panel.querySelectorAll('.scb-row.user').length;
    if(nowUsers>userCount){waiting=true;activeRow=null;sawStream=false;stop();}
    userCount=nowUsers;
    const rows=Array.from(panel.querySelectorAll('.scb-row.bot'));
    const users=panel.querySelectorAll('.scb-row.user');
    const latestUser=users[users.length-1];
    for(const row of rows) {
      const bubble=row.querySelector('.scb-bubble');if(!bubble)continue;
      const text=bubble.textContent||'',previous=known.get(bubble);
      known.set(bubble,text);
      if(row.classList.contains('err')) {
        if(waiting&&text!==previous&&row===rows[rows.length-1]){waiting=false;activeRow=null;stop();}
        continue;
      }
      if(bubble.querySelector('.scb-typing-indicator'))continue;
      if(latestUser&&!(latestUser.compareDocumentPosition(row)&4))continue;
      const changed=text.trim()&&text!==previous;
      if(waiting&&changed) {
        activeRow=row;sawStream=sawStream||row.classList.contains('is-streaming');speak();
        if(!row.classList.contains('is-streaming')) {
          waiting=false;
          // A whole text reply has no audio timestamps: use a bounded reading gesture.
          stopTimer=setTimeout(stop,Math.min(10000,Math.max(1800,text.length*42)));
        }
      }
    }
    if(activeRow&&sawStream&&!activeRow.classList.contains('is-streaming')) {
      waiting=false;activeRow=null;sawStream=false;
      clearTimeout(stopTimer);stopTimer=setTimeout(stop,350);
    }
  }
  function announce(el,text) {
    const status=el.querySelector('.cursor-robot__status');if(!status)return;
    status.textContent=text;status.hidden=false;el.dataset.chatError='true';
    setTimeout(()=>{if(el.isConnected){status.hidden=true;delete el.dataset.chatError;}},6000);
  }
  function open(el) {
    if(!el?.isConnected)return false;
    const launcher=query(el.dataset.chatSelector||'.scb-fab');
    const nextPanel=query(el.dataset.chatPanel||'.scb-panel');
    if(!launcher||!nextPanel) {
      announce(el,el.dataset.chatUnavailable||'Support chat is not available on this page yet.');
      el.dispatchEvent(new CustomEvent('cursor-robot:chat-unavailable',{bubbles:true}));
      return false;
    }
    if(owner&&owner!==el)close();
    if(owner===el&&opened(nextPanel))return true;
    owner=el;panel=nextPanel;waiting=false;activeRow=null;sawStream=false;remember();
    if(!opened(panel))launcher.click();
    if(opened(panel)) {
      publish(el,true,false);remember();
      observer?.disconnect();observer=new MutationObserver(inspect);
      observer.observe(panel,{childList:true,subtree:true,characterData:true,attributes:true,attributeFilter:['class','style','hidden','aria-hidden']});
    } else {
      // Allow a widget that updates its panel asynchronously to open first.
      observer?.disconnect();observer=new MutationObserver(()=>{
        if(opened(panel)) {clearTimeout(openTimer);publish(el,true,false);remember();observer.disconnect();observer=new MutationObserver(inspect);observer.observe(panel,{childList:true,subtree:true,characterData:true,attributes:true,attributeFilter:['class','style','hidden','aria-hidden']});}
      });
      observer.observe(panel,{attributes:true,attributeFilter:['class','style','hidden']});
      openTimer=setTimeout(()=>{if(owner===el&&!opened(panel)){close();announce(el,el.dataset.chatUnavailable||'Please open support chat using the site chat button.');}},2500);
    }
    return true;
  }
  function positionFallback(el) {
    if(el.dataset.rendered==='true'&&!matchMedia('(prefers-reduced-motion:reduce)').matches&&matchMedia('(hover:hover) and (pointer:fine)').matches)return;
    const b=el.querySelector('.cursor-robot__chat');if(!b)return;
    const w=el.clientWidth,h=el.clientHeight,f=Math.min(w/1000,h/800);
    Object.assign(b.style,{left:((w-1000*f)/2+419.14*f)+'px',top:((h-800*f)/2+276.977*f)+'px',width:(161.72*f)+'px',height:(184.067*f)+'px'});
  }
  function attach(el) {
    if(roots.has(el))return;roots.add(el);
    const button=el.querySelector('.cursor-robot__chat');
    if(button)button.addEventListener('click',e=>{
      // Fine-pointer clicks are resolved against the actual 3D surface instead.
      if(e.detail!==0&&el.dataset.rendered==='true'&&matchMedia('(hover:hover) and (pointer:fine)').matches&&!matchMedia('(prefers-reduced-motion:reduce)').matches)return;
      open(el);
    });
    positionFallback(el);
    // Re-align the hit area with the poster after a preference or WebGL fallback.
    const statusObserver=new MutationObserver(()=>positionFallback(el));
    statusObserver.observe(el,{attributes:true,attributeFilter:['data-status']});
    if('ResizeObserver' in window){const ro=new ResizeObserver(()=>{if(!el.isConnected){ro.disconnect();statusObserver.disconnect();roots.delete(el);if(owner===el)close();}else positionFallback(el);});ro.observe(el);}
  }
  document.addEventListener('submit',e=>{
    if(owner&&panel?.contains(e.target)&&e.target.matches('.scb-form')){waiting=true;activeRow=null;sawStream=false;stop();remember();}
  },true);
  // Optional explicit same-document hooks for future chat versions; never window messages.
  document.addEventListener('cursor-robot:reply-start',()=>{if(owner&&opened(panel))speak();});
  document.addEventListener('cursor-robot:reply-end',stop);
  document.addEventListener('cursor-robot:chat-closed',close);
  document.addEventListener('visibilitychange',()=>{if(document.hidden)stop();});
  window.CursorRobotChat={attach,open,close};
})();
