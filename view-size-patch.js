(function(){
  const KEY='draft-war-room-view-size-v6';
  const MODES=['compact','80','75','65','55'];
  const OLD_SELECTORS=['#viewSizeBtnV1','#viewSizeMenuV1','.view-size-wrap-v1','#compactBtn'];
  let observerStarted=false;
  function qs(s){return document.querySelector(s)}
  function qsa(s){return Array.from(document.querySelectorAll(s))}
  function injectStyles(){
    if(qs('#viewSizePatchStylesV6')) return;
    const st=document.createElement('style');
    st.id='viewSizePatchStylesV6';
    st.textContent=`
      #compactBtn,#viewSizeBtnV1,#viewSizeMenuV1,.view-size-wrap-v1{display:none!important;visibility:hidden!important;pointer-events:none!important}
      .view-size-wrap-v6{position:relative;display:inline-flex;align-items:center;z-index:5000}
      .view-size-btn-v6{background:linear-gradient(135deg,#314a74,#5b7fc0)!important;color:#fff!important;white-space:nowrap!important}
      .view-size-menu-v6{position:absolute;top:calc(100% + 6px);right:0;min-width:150px;background:#08172a;border:1px solid #315b95;border-radius:14px;padding:6px;box-shadow:0 18px 45px rgba(0,0,0,.55);display:none;z-index:99999}
      .view-size-menu-v6.open{display:block}
      .view-size-menu-v6 button{display:block;width:100%;text-align:left;margin:2px 0;background:#10233e!important;border:1px solid #203655!important;color:#eef5ff!important;padding:8px 10px!important;border-radius:10px!important;font-size:13px!important}
      .view-size-menu-v6 button.active{background:#f7c948!important;color:#13213a!important;border-color:#f7c948!important}
      body.view-zoom-80 .hero,body.view-zoom-80 .page{zoom:.80}
      body.view-zoom-75 .hero,body.view-zoom-75 .page{zoom:.75}
      body.view-zoom-65 .hero,body.view-zoom-65 .page{zoom:.65}
      body.view-zoom-55 .hero,body.view-zoom-55 .page{zoom:.55}
      body.view-zoom-80 .hero,body.view-zoom-80 .page,body.view-zoom-75 .hero,body.view-zoom-75 .page,body.view-zoom-65 .hero,body.view-zoom-65 .page,body.view-zoom-55 .hero,body.view-zoom-55 .page{transform-origin:top center}
      @media(max-width:760px){.view-size-wrap-v6{grid-column:auto}.view-size-menu-v6{right:auto;left:0}}
    `;
    document.head.appendChild(st);
  }
  function removeOldControls(){
    OLD_SELECTORS.forEach(sel=>qsa(sel).forEach(el=>{ if(!el.closest('.view-size-wrap-v6')) el.remove(); }));
    qsa('button').forEach(btn=>{
      const txt=(btn.textContent||'').trim().toLowerCase();
      if(btn.id!=='viewSizeBtnV6' && txt.startsWith('view size:')){
        const wrap=btn.closest('span,div');
        if(wrap && !wrap.classList.contains('view-size-wrap-v6')) wrap.remove(); else btn.remove();
      }
      if(txt==='compact view' || txt==='normal view') btn.remove();
    });
  }
  function normalize(mode){return MODES.includes(String(mode))?String(mode):'compact'}
  function clearZoom(){document.body.classList.remove('view-zoom-80','view-zoom-75','view-zoom-65','view-zoom-55','view-zoom-90')}
  function apply(mode){
    mode=normalize(mode);
    clearZoom();
    document.body.classList.add('compact-view');
    if(mode!=='compact') document.body.classList.add('view-zoom-'+mode);
    localStorage.setItem(KEY,mode);
    try{localStorage.setItem('draft-war-room-view-size-v1','compact');localStorage.setItem('draft-war-room-view-size-v2','compact');}catch(e){}
    const labels={compact:'Compact',80:'80%',75:'75%',65:'65%',55:'55%'};
    const btn=qs('#viewSizeBtnV6');
    if(btn) btn.textContent='View Size: '+labels[mode]+' ▼';
    qsa('.view-size-menu-v6 button').forEach(b=>b.classList.toggle('active',b.dataset.viewSize===mode));
  }
  function installControl(){
    removeOldControls();
    if(qs('#viewSizeBtnV6')){apply(localStorage.getItem(KEY)||'compact');return;}
    const row=qs('.top-actions .button-row')||qs('.button-row');
    if(!row) return;
    const wrap=document.createElement('span');
    wrap.className='view-size-wrap-v6';
    wrap.innerHTML=`<button id="viewSizeBtnV6" class="view-size-btn-v6" type="button">View Size: Compact ▼</button><div id="viewSizeMenuV6" class="view-size-menu-v6"><button type="button" data-view-size="compact">Compact Default</button><button type="button" data-view-size="80">80%</button><button type="button" data-view-size="75">75%</button><button type="button" data-view-size="65">65%</button><button type="button" data-view-size="55">55%</button></div>`;
    const edit=qs('#editRanksBtn');
    if(edit && edit.parentElement===row) edit.insertAdjacentElement('afterend',wrap); else row.appendChild(wrap);
    const btn=qs('#viewSizeBtnV6');
    const menu=qs('#viewSizeMenuV6');
    btn.addEventListener('click',e=>{e.stopPropagation();removeOldControls();menu.classList.toggle('open')});
    menu.querySelectorAll('button').forEach(b=>b.addEventListener('click',e=>{e.stopPropagation();menu.classList.remove('open');apply(b.dataset.viewSize);removeOldControls()}));
    document.addEventListener('click',()=>menu.classList.remove('open'));
    apply(localStorage.getItem(KEY)||'compact');
  }
  function startObserver(){
    if(observerStarted) return;
    observerStarted=true;
    let scheduled=false;
    const obs=new MutationObserver(()=>{
      if(scheduled) return;
      scheduled=true;
      requestAnimationFrame(()=>{scheduled=false;removeOldControls();installControl();});
    });
    obs.observe(document.body,{childList:true,subtree:true});
  }
  function boot(){injectStyles();installControl();startObserver();setTimeout(()=>{removeOldControls();installControl();apply(localStorage.getItem(KEY)||'compact');},600)}
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',boot); else boot();
  window.applyDraftWarRoomViewSize=apply;
})();
