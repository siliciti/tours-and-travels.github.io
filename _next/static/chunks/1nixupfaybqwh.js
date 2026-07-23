(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,632036,e=>{"use strict";var r=e.i(101484);e.s(["formatDate",0,function(e,a){if(!e)return"";let l=e instanceof Date?e:new Date(e),t=r.siteConfig.locale?.language||"en-IN",i=r.siteConfig.locale?.timezone||"Asia/Kolkata";return l.toLocaleDateString(t,{timeZone:i,...a})},"formatNumber",0,function(e,a){if(null==e||isNaN(e))return"0";let l=r.siteConfig.locale?.language||"en-IN";return e.toLocaleString(l,a)}])},505802,e=>{"use strict";var r=e.i(843476),a=e.i(271645);e.s(["default",0,function({items:e,renderCard:l,searchPlaceholder:t="Search…",filterGroups:i=[],itemsPerPage:o=12,noResultsText:s="No results found. Try a different search or filter.",gridCols:c=3}){let[n,d]=(0,a.useState)(""),[m,f]=(0,a.useState)({}),[p,u]=(0,a.useState)(1),g=(0,a.useMemo)(()=>{let r=n.toLowerCase().trim();return e.filter(e=>{let a=!r||e.title.toLowerCase().includes(r)||(e.description||"").toLowerCase().includes(r)||(e.tag_slugs||"").toLowerCase().includes(r)||(e.category_slugs||"").toLowerCase().replace(/-/g," ").includes(r)||e.content&&"string"==typeof e.content&&e.content.toLowerCase().includes(r),l=i.every(r=>{let a=m[r.label];return!a||"all"===a||(r.getField(e)||"").split("|").map(e=>e.trim()).includes(a)});return a&&l})},[e,n,m,i]),b=Math.max(1,Math.ceil(g.length/o)),h=Math.min(p,b),x=g.slice((h-1)*o,h*o),v=(0,a.useCallback)(e=>{d(e),u(1)},[]),j=(0,a.useCallback)((e,r)=>{f(a=>({...a,[e]:r})),u(1)},[]),y=n||Object.values(m).some(e=>e&&"all"!==e),w=(0,a.useCallback)(()=>{d(""),f({}),u(1)},[]);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{className:"lc-filter-bar",children:(0,r.jsxs)("div",{className:"container",children:[(0,r.jsxs)("div",{className:"lc-search-row",children:[(0,r.jsxs)("div",{className:"lc-search-wrap",children:[(0,r.jsx)("span",{className:"lc-search-icon","aria-hidden":"true",children:"🔍"}),(0,r.jsx)("input",{id:"listing-search",type:"search",placeholder:t,value:n,onChange:e=>v(e.target.value),"aria-label":t,className:"lc-search-input",autoComplete:"off"}),n&&(0,r.jsx)("button",{onClick:()=>v(""),className:"lc-search-clear","aria-label":"Clear search",children:"✕"})]}),y&&(0,r.jsx)("button",{onClick:w,className:"lc-clear-all-btn","aria-label":"Clear all filters",children:"✕ Clear all"})]}),i.map(e=>(0,r.jsxs)("div",{className:"lc-pill-row",role:"group","aria-label":`Filter by ${e.label}`,children:[(0,r.jsxs)("span",{className:"lc-pill-label",children:[e.label,":"]}),(0,r.jsxs)("div",{className:"lc-pills",children:[(0,r.jsx)("button",{onClick:()=>j(e.label,"all"),className:`lc-pill ${!m[e.label]||"all"===m[e.label]?"active":""}`,"aria-pressed":!m[e.label]||"all"===m[e.label],children:"All"}),e.values.map(a=>(0,r.jsx)("button",{onClick:()=>j(e.label,a),className:`lc-pill ${m[e.label]===a?"active":""}`,"aria-pressed":m[e.label]===a,children:e.labelMap?.[a]||a.replace(/-/g," ")},a))]})]},e.label))]})}),(0,r.jsx)("div",{className:"container lc-results-header",children:(0,r.jsx)("p",{className:"lc-results-count","aria-live":"polite",children:0===g.length?"No results":`Showing ${(h-1)*o+1}–${Math.min(h*o,g.length)} of ${g.length} result${1!==g.length?"s":""}`})}),(0,r.jsxs)("div",{className:"container lc-grid-wrap",children:[0===g.length?(0,r.jsxs)("div",{className:"lc-empty",children:[(0,r.jsx)("p",{style:{fontSize:"2.5rem",margin:"0 0 1rem"},children:"🔍"}),(0,r.jsx)("p",{style:{fontFamily:"var(--font-display)",fontWeight:"700",fontSize:"1.125rem",color:"var(--color-secondary)",marginBottom:"0.5rem"},children:"No results found"}),(0,r.jsx)("p",{style:{color:"var(--color-muted-fg)",marginBottom:"1.25rem",fontSize:"0.9375rem"},children:s}),(0,r.jsx)("button",{onClick:w,className:"lc-clear-all-btn",children:"✕ Clear filters"})]}):(0,r.jsx)("div",{className:`lc-grid ${2===c?"lc-grid-2":4===c?"lc-grid-4":"lc-grid-3"}`,children:x.map(e=>(0,r.jsx)("div",{children:l(e)},e.id))}),b>1&&(0,r.jsxs)("nav",{className:"lc-pagination","aria-label":"Page navigation",children:[(0,r.jsx)("button",{onClick:()=>u(e=>Math.max(1,e-1)),disabled:1===h,className:"lc-page-btn","aria-label":"Previous page",children:"← Prev"}),Array.from({length:b},(e,r)=>r+1).map(e=>(0,r.jsx)("button",{onClick:()=>u(e),className:`lc-page-btn ${h===e?"active":""}`,"aria-current":h===e?"page":void 0,children:e},e)),(0,r.jsx)("button",{onClick:()=>u(e=>Math.min(b,e+1)),disabled:h===b,className:"lc-page-btn","aria-label":"Next page",children:"Next →"})]})]}),(0,r.jsx)("style",{children:`
        /* ── Filter bar ── */
        .lc-filter-bar {
          background: #fff;
          border-bottom: 1px solid var(--color-border);
          padding: 0.875rem 0;
          position: sticky;
          top: 72px;
          z-index: 20;
          box-shadow: 0 2px 8px rgba(0,0,0,0.05);
        }
        .lc-filter-bar .container {
          display: flex;
          flex-direction: column;
          gap: 0.625rem;
        }
        .lc-search-row {
          display: flex;
          gap: 0.75rem;
          align-items: center;
          flex-wrap: wrap;
        }
        .lc-search-wrap {
          position: relative;
          flex: 1;
          min-width: 200px;
        }
        .lc-search-icon {
          position: absolute;
          left: 0.875rem;
          top: 50%;
          transform: translateY(-50%);
          pointer-events: none;
          font-size: 0.875rem;
        }
        .lc-search-input {
          width: 100%;
          padding: 0.6rem 2.25rem 0.6rem 2.5rem;
          border: 1.5px solid var(--color-border);
          border-radius: var(--radius-full);
          font-size: 0.9375rem;
          font-family: var(--font-sans);
          background: var(--color-muted);
          color: var(--color-fg);
          outline: none;
          transition: border-color 150ms, box-shadow 150ms;
          box-sizing: border-box;
        }
        .lc-search-input:focus {
          border-color: var(--color-primary);
          background: #fff;
          box-shadow: 0 0 0 3px rgba(37,99,235,0.12);
        }
        .lc-search-clear {
          position: absolute;
          right: 0.75rem;
          top: 50%;
          transform: translateY(-50%);
          background: none; border: none; cursor: pointer;
          color: var(--color-muted-fg); font-size: 0.8rem; padding: 0.25rem;
        }
        .lc-clear-all-btn {
          flex-shrink: 0;
          font-size: 0.8125rem;
          color: var(--color-danger);
          background: rgba(239,68,68,0.06);
          border: 1px solid rgba(239,68,68,0.2);
          border-radius: var(--radius-full);
          padding: 0.375rem 0.875rem;
          cursor: pointer;
          font-weight: 600;
          font-family: var(--font-sans);
          white-space: nowrap;
          transition: background 150ms;
        }
        .lc-clear-all-btn:hover { background: rgba(239,68,68,0.12); }

        /* ── Filter pill rows ── */
        .lc-pill-row {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          flex-wrap: nowrap;
          overflow: hidden;
        }
        .lc-pill-label {
          font-size: 0.75rem;
          font-weight: 600;
          color: var(--color-muted-fg);
          white-space: nowrap;
          text-transform: uppercase;
          letter-spacing: 0.04em;
          flex-shrink: 0;
        }
        .lc-pills {
          display: flex;
          gap: 0.375rem;
          overflow-x: auto;
          scrollbar-width: none;
          padding-bottom: 2px;
          flex: 1;
        }
        .lc-pills::-webkit-scrollbar { display: none; }
        .lc-pill {
          flex-shrink: 0;
          padding: 0.35rem 0.875rem;
          border-radius: var(--radius-full);
          border: 1.5px solid var(--color-border);
          background: var(--color-muted);
          color: var(--color-fg);
          font-size: 0.8rem;
          font-weight: 500;
          cursor: pointer;
          white-space: nowrap;
          transition: all 150ms;
          font-family: var(--font-sans);
          text-transform: capitalize;
        }
        .lc-pill:hover {
          border-color: var(--color-primary);
          color: var(--color-primary);
          background: rgba(37,99,235,0.06);
        }
        .lc-pill.active {
          background: var(--color-primary);
          color: #fff;
          border-color: var(--color-primary);
          font-weight: 600;
        }

        /* ── Results ── */
        .lc-results-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1rem 0 0.25rem;
        }
        .lc-results-count {
          font-size: 0.875rem;
          color: var(--color-muted-fg);
          margin: 0;
        }

        /* ── Grid ── */
        .lc-grid-wrap { padding-bottom: 3rem; }
        .lc-grid {
          display: grid;
          gap: 1.25rem;
          padding: 0.75rem 0;
        }
        .lc-grid-2 { grid-template-columns: 1fr; }
        .lc-grid-3 { grid-template-columns: 1fr; }
        .lc-grid-4 { grid-template-columns: 1fr 1fr; }

        @media (min-width: 480px) {
          .lc-grid-2 { grid-template-columns: repeat(2, 1fr); }
        }
        @media (min-width: 520px) {
          .lc-grid-3 { grid-template-columns: repeat(2, 1fr); }
          .lc-grid-4 { grid-template-columns: repeat(2, 1fr); }
        }
        @media (min-width: 860px) {
          .lc-grid-3 { grid-template-columns: repeat(3, 1fr); }
          .lc-grid-4 { grid-template-columns: repeat(3, 1fr); }
        }
        @media (min-width: 1100px) {
          .lc-grid-4 { grid-template-columns: repeat(4, 1fr); }
        }

        /* Card hover */
        .lc-grid > div { height: 100%; }

        /* ── Empty state ── */
        .lc-empty {
          text-align: center;
          padding: 4rem 1rem;
        }

        /* ── Pagination ── */
        .lc-pagination {
          display: flex;
          justify-content: center;
          gap: 0.5rem;
          padding: 1.75rem 0 2rem;
          flex-wrap: wrap;
        }
        .lc-page-btn {
          min-width: 40px; height: 40px;
          padding: 0 0.75rem;
          border-radius: var(--radius-md);
          border: 1.5px solid var(--color-border);
          background: #fff; color: var(--color-fg);
          font-size: 0.875rem; font-weight: 500;
          cursor: pointer; transition: all 150ms;
          font-family: var(--font-sans);
        }
        .lc-page-btn:hover:not(:disabled) { border-color: var(--color-primary); color: var(--color-primary); }
        .lc-page-btn.active { background: var(--color-primary); border-color: var(--color-primary); color: #fff; font-weight: 700; }
        .lc-page-btn:disabled { opacity: 0.4; cursor: not-allowed; }

        @media (min-width: 768px) {
          .lc-filter-bar .container { flex-direction: column; }
          .lc-search-wrap { max-width: 480px; }
        }
      `})]})}])},57468,e=>{"use strict";var r=e.i(843476),a=e.i(437902),l=e.i(522016),t=e.i(101484),i=e.i(632036);e.s(["default",0,function({route:e}){let o=t.siteConfig.locale.currencySymbol,s=e.title.match(/(.+?)\s+to\s+(.+?)\s+(Taxi|Cab)/i),c=s?s[1].trim():"Bangalore",n=s?s[2].trim():e.title;return(0,r.jsxs)("article",{itemScope:!0,itemType:"https://schema.org/TouristTrip",className:"jsx-69df921b3c85d3f3 route-card h-entry",children:[(0,r.jsxs)(l.default,{href:`/routes/${e.slug}`,target:"_self",title:`View route details and cab fares for ${e.title}`,className:"route-card-inner u-url","aria-label":`${e.title} — details and rates`,children:[e.thumbnail_image?(0,r.jsxs)("div",{style:{position:"relative"},className:"jsx-69df921b3c85d3f3 route-card-img-wrap",children:[(0,r.jsx)("img",{src:e.thumbnail_image,alt:`${e.title} taxi service`,title:e.title,loading:"lazy",width:400,height:225,className:"jsx-69df921b3c85d3f3 route-card-img u-photo"}),1===e.is_featured&&(0,r.jsx)("div",{style:{position:"absolute",top:"0.75rem",right:"0.75rem",zIndex:2},className:"jsx-69df921b3c85d3f3",children:(0,r.jsx)("span",{style:{background:"rgba(245,158,11,0.9)",color:"#fff",padding:"0.2rem 0.6rem",borderRadius:"var(--radius-full)",fontSize:"0.7rem",fontWeight:"700"},className:"jsx-69df921b3c85d3f3 badge badge-accent",children:"★ Featured"})})]}):(0,r.jsxs)("div",{style:{position:"relative"},className:"jsx-69df921b3c85d3f3 route-card-map",children:[(0,r.jsx)("span",{className:"jsx-69df921b3c85d3f3",children:"🗺️"}),1===e.is_featured&&(0,r.jsx)("div",{style:{position:"absolute",top:"0.75rem",right:"0.75rem",zIndex:2},className:"jsx-69df921b3c85d3f3",children:(0,r.jsx)("span",{style:{background:"rgba(245,158,11,0.9)",color:"#fff",padding:"0.2rem 0.6rem",borderRadius:"var(--radius-full)",fontSize:"0.7rem",fontWeight:"700"},className:"jsx-69df921b3c85d3f3 badge badge-accent",children:"★ Featured"})})]}),(0,r.jsxs)("div",{className:"jsx-69df921b3c85d3f3 route-card-body",children:[(0,r.jsxs)("div",{className:"jsx-69df921b3c85d3f3 route-path p-name",children:[(0,r.jsx)("span",{className:"jsx-69df921b3c85d3f3 route-city",children:c}),(0,r.jsx)("span",{className:"jsx-69df921b3c85d3f3 route-arrow",children:"→"}),(0,r.jsx)("span",{itemProp:"touristType",className:"jsx-69df921b3c85d3f3 route-city to",children:n})]}),(0,r.jsxs)("div",{className:"jsx-69df921b3c85d3f3 route-stats",children:[e.distance_km>0&&(0,r.jsxs)("span",{className:"jsx-69df921b3c85d3f3 route-stat",children:["📏 ",e.distance_km," km"]}),e.duration_hours>0&&(0,r.jsxs)("span",{className:"jsx-69df921b3c85d3f3 route-stat",children:["⏱ ~",e.duration_hours," hrs"]})]}),e.description&&(0,r.jsx)("p",{itemProp:"description",className:"jsx-69df921b3c85d3f3 route-desc e-summary",children:e.description.length>85?e.description.slice(0,85)+"…":e.description}),(0,r.jsxs)("div",{className:"jsx-69df921b3c85d3f3 route-footer",children:[e.price_from>0?(0,r.jsxs)("div",{className:"jsx-69df921b3c85d3f3 route-price",children:[(0,r.jsx)("span",{className:"jsx-69df921b3c85d3f3 route-price-label",children:"from"}),(0,r.jsxs)("span",{itemProp:"offers",className:"jsx-69df921b3c85d3f3 route-price-val",children:[o,(0,i.formatNumber)(e.price_from)]})]}):(0,r.jsx)("span",{className:"jsx-69df921b3c85d3f3 route-price-label",children:"Call for rates"}),(0,r.jsx)("span",{className:"jsx-69df921b3c85d3f3 route-cta-link",children:"View →"})]})]})]}),(0,r.jsx)(a.default,{id:"69df921b3c85d3f3",children:".route-card{border-radius:var(--radius-xl);border:1px solid var(--color-border);box-shadow:var(--shadow-md);background:#fff;height:100%;transition:transform .22s,box-shadow .22s;overflow:hidden}.route-card:hover{box-shadow:var(--shadow-xl);transform:translateY(-4px)}.route-card-inner{height:100%;color:inherit;flex-direction:column;text-decoration:none;display:flex}.route-card-img-wrap{aspect-ratio:16/9;overflow:hidden}.route-card-img{object-fit:cover;width:100%;height:100%;transition:transform .35s;display:block}.route-card:hover .route-card-img{transform:scale(1.05)}.route-card-map{aspect-ratio:16/9;background:var(--gradient-secondary);justify-content:center;align-items:center;min-height:120px;font-size:2.5rem;display:flex}.route-card-body{flex-direction:column;flex:1;gap:.5rem;padding:1.125rem;display:flex}.route-path{flex-wrap:wrap;align-items:center;gap:.4rem;display:flex}.route-city{font-family:var(--font-display);color:var(--color-secondary);font-size:1.0625rem;font-weight:700}.route-city.to{color:var(--color-primary)}.route-arrow{color:var(--color-muted-fg)}.route-stats{flex-wrap:wrap;gap:.5rem;display:flex}.route-stat{color:var(--color-muted-fg);background:var(--color-muted);border-radius:var(--radius-sm);padding:.15rem .5rem;font-size:.775rem}.route-desc{color:var(--color-muted-fg);flex:1;margin:0;font-size:.875rem;line-height:1.55}.route-footer{border-top:1px solid var(--color-border);justify-content:space-between;align-items:center;margin-top:auto;padding-top:.625rem;display:flex}.route-price{align-items:baseline;gap:.25rem;display:flex}.route-price-label{color:var(--color-muted-fg);font-size:.75rem}.route-price-val{font-family:var(--font-display);color:var(--color-primary);font-size:1.25rem;font-weight:800}.route-cta-link{color:var(--color-primary);font-size:.8125rem;font-weight:600}"})]})}])},201381,e=>{"use strict";var r=e.i(843476),a=e.i(505802),l=e.i(57468);e.s(["default",0,function({allRoutes:e,cats:t}){return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(a.default,{items:e,renderCard:e=>(0,r.jsx)(l.default,{route:e}),searchPlaceholder:"Search destination — Mysore, Coorg, Ooty, Tirupati…",filterGroups:t.length?[{label:"Type",values:t,getField:e=>e.category_slugs||""}]:[],itemsPerPage:12,gridCols:3,noResultsText:"Try a city name like Mysore, Coorg, Hampi or Tirupati."})})}])}]);