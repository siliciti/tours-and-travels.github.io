(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,632036,e=>{"use strict";var r=e.i(101484);e.s(["formatDate",0,function(e,a){if(!e)return"";let l=e instanceof Date?e:new Date(e),o=r.siteConfig.locale?.language||"en-IN",t=r.siteConfig.locale?.timezone||"Asia/Kolkata";return l.toLocaleDateString(o,{timeZone:t,...a})},"formatNumber",0,function(e,a){if(null==e||isNaN(e))return"0";let l=r.siteConfig.locale?.language||"en-IN";return e.toLocaleString(l,a)}])},505802,e=>{"use strict";var r=e.i(843476),a=e.i(271645);e.s(["default",0,function({items:e,renderCard:l,searchPlaceholder:o="Search…",filterGroups:t=[],itemsPerPage:i=12,noResultsText:s="No results found. Try a different search or filter.",gridCols:c=3}){let[n,d]=(0,a.useState)(""),[m,p]=(0,a.useState)({}),[u,g]=(0,a.useState)(1),f=(0,a.useMemo)(()=>{let r=n.toLowerCase().trim();return e.filter(e=>{let a=!r||e.title.toLowerCase().includes(r)||(e.description||"").toLowerCase().includes(r)||(e.tag_slugs||"").toLowerCase().includes(r)||(e.category_slugs||"").toLowerCase().replace(/-/g," ").includes(r)||e.content&&"string"==typeof e.content&&e.content.toLowerCase().includes(r),l=t.every(r=>{let a=m[r.label];return!a||"all"===a||(r.getField(e)||"").split("|").map(e=>e.trim()).includes(a)});return a&&l})},[e,n,m,t]),h=Math.max(1,Math.ceil(f.length/i)),b=Math.min(u,h),x=f.slice((b-1)*i,b*i),v=(0,a.useCallback)(e=>{d(e),g(1)},[]),y=(0,a.useCallback)((e,r)=>{p(a=>({...a,[e]:r})),g(1)},[]),w=n||Object.values(m).some(e=>e&&"all"!==e),j=(0,a.useCallback)(()=>{d(""),p({}),g(1)},[]);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{className:"lc-filter-bar",children:(0,r.jsxs)("div",{className:"container",children:[(0,r.jsxs)("div",{className:"lc-search-row",children:[(0,r.jsxs)("div",{className:"lc-search-wrap",children:[(0,r.jsx)("span",{className:"lc-search-icon","aria-hidden":"true",children:"🔍"}),(0,r.jsx)("input",{id:"listing-search",type:"search",placeholder:o,value:n,onChange:e=>v(e.target.value),"aria-label":o,className:"lc-search-input",autoComplete:"off"}),n&&(0,r.jsx)("button",{onClick:()=>v(""),className:"lc-search-clear","aria-label":"Clear search",children:"✕"})]}),w&&(0,r.jsx)("button",{onClick:j,className:"lc-clear-all-btn","aria-label":"Clear all filters",children:"✕ Clear all"})]}),t.map(e=>(0,r.jsxs)("div",{className:"lc-pill-row",role:"group","aria-label":`Filter by ${e.label}`,children:[(0,r.jsxs)("span",{className:"lc-pill-label",children:[e.label,":"]}),(0,r.jsxs)("div",{className:"lc-pills",children:[(0,r.jsx)("button",{onClick:()=>y(e.label,"all"),className:`lc-pill ${!m[e.label]||"all"===m[e.label]?"active":""}`,"aria-pressed":!m[e.label]||"all"===m[e.label],children:"All"}),e.values.map(a=>(0,r.jsx)("button",{onClick:()=>y(e.label,a),className:`lc-pill ${m[e.label]===a?"active":""}`,"aria-pressed":m[e.label]===a,children:e.labelMap?.[a]||a.replace(/-/g," ")},a))]})]},e.label))]})}),(0,r.jsx)("div",{className:"container lc-results-header",children:(0,r.jsx)("p",{className:"lc-results-count","aria-live":"polite",children:0===f.length?"No results":`Showing ${(b-1)*i+1}–${Math.min(b*i,f.length)} of ${f.length} result${1!==f.length?"s":""}`})}),(0,r.jsxs)("div",{className:"container lc-grid-wrap",children:[0===f.length?(0,r.jsxs)("div",{className:"lc-empty",children:[(0,r.jsx)("p",{style:{fontSize:"2.5rem",margin:"0 0 1rem"},children:"🔍"}),(0,r.jsx)("p",{style:{fontFamily:"var(--font-display)",fontWeight:"700",fontSize:"1.125rem",color:"var(--color-secondary)",marginBottom:"0.5rem"},children:"No results found"}),(0,r.jsx)("p",{style:{color:"var(--color-muted-fg)",marginBottom:"1.25rem",fontSize:"0.9375rem"},children:s}),(0,r.jsx)("button",{onClick:j,className:"lc-clear-all-btn",children:"✕ Clear filters"})]}):(0,r.jsx)("div",{className:`lc-grid ${2===c?"lc-grid-2":4===c?"lc-grid-4":"lc-grid-3"}`,children:x.map(e=>(0,r.jsx)("div",{children:l(e)},e.id))}),h>1&&(0,r.jsxs)("nav",{className:"lc-pagination","aria-label":"Page navigation",children:[(0,r.jsx)("button",{onClick:()=>g(e=>Math.max(1,e-1)),disabled:1===b,className:"lc-page-btn","aria-label":"Previous page",children:"← Prev"}),Array.from({length:h},(e,r)=>r+1).map(e=>(0,r.jsx)("button",{onClick:()=>g(e),className:`lc-page-btn ${b===e?"active":""}`,"aria-current":b===e?"page":void 0,children:e},e)),(0,r.jsx)("button",{onClick:()=>g(e=>Math.min(h,e+1)),disabled:b===h,className:"lc-page-btn","aria-label":"Next page",children:"Next →"})]})]}),(0,r.jsx)("style",{children:`
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
      `})]})}])},201381,e=>{"use strict";var r=e.i(843476),a=e.i(522016),l=e.i(505802),o=e.i(101484),t=e.i(632036);function i({route:e}){let l=o.siteConfig.locale.currencySymbol,s=e.title.match(/(.+?)\s+to\s+(.+?)\s+(Taxi|Cab)/i),c=s?s[1].trim():"Bangalore",n=s?s[2].trim():e.title;return(0,r.jsx)("article",{className:"route-card",itemScope:!0,itemType:"https://schema.org/TouristTrip",children:(0,r.jsxs)(a.default,{href:`/routes/${e.slug}`,className:"route-card-inner","aria-label":`${e.title} — details and rates`,children:[e.thumbnail_image?(0,r.jsx)("div",{className:"route-card-img-wrap",children:(0,r.jsx)("img",{src:e.thumbnail_image,alt:e.title,className:"route-card-img",loading:"lazy",width:400,height:225})}):(0,r.jsx)("div",{className:"route-card-map",children:(0,r.jsx)("span",{children:"🗺️"})}),(0,r.jsxs)("div",{className:"route-card-body",children:[(0,r.jsxs)("div",{className:"route-path",children:[(0,r.jsx)("span",{className:"route-city",children:c}),(0,r.jsx)("span",{className:"route-arrow",children:"→"}),(0,r.jsx)("span",{className:"route-city to",itemProp:"touristType",children:n})]}),(0,r.jsxs)("div",{className:"route-stats",children:[e.distance_km>0&&(0,r.jsxs)("span",{className:"route-stat",children:["📏 ",e.distance_km," km"]}),e.duration_hours>0&&(0,r.jsxs)("span",{className:"route-stat",children:["⏱ ~",e.duration_hours," hrs"]})]}),e.description&&(0,r.jsx)("p",{className:"route-desc",itemProp:"description",children:e.description.length>85?e.description.slice(0,85)+"…":e.description}),(0,r.jsxs)("div",{className:"route-footer",children:[e.price_from>0?(0,r.jsxs)("div",{className:"route-price",children:[(0,r.jsx)("span",{className:"route-price-label",children:"from"}),(0,r.jsxs)("span",{className:"route-price-val",itemProp:"offers",children:[l,(0,t.formatNumber)(e.price_from)]})]}):(0,r.jsx)("span",{className:"route-price-label",children:"Call for rates"}),(0,r.jsx)("span",{className:"route-cta-link",children:"View →"})]})]})]})})}e.s(["default",0,function({allRoutes:e,cats:a}){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(l.default,{items:e,renderCard:e=>(0,r.jsx)(i,{route:e}),searchPlaceholder:"Search destination — Mysore, Coorg, Ooty, Tirupati…",filterGroups:a.length?[{label:"Type",values:a,getField:e=>e.category_slugs||""}]:[],itemsPerPage:12,gridCols:3,noResultsText:"Try a city name like Mysore, Coorg, Hampi or Tirupati."}),(0,r.jsx)("style",{children:`
        .route-card { border-radius: var(--radius-xl); overflow: hidden; border: 1px solid var(--color-border); box-shadow: var(--shadow-md); background: #fff; height: 100%; transition: transform 220ms, box-shadow 220ms; }
        .route-card:hover { transform: translateY(-4px); box-shadow: var(--shadow-xl); }
        .route-card-inner { display: flex; flex-direction: column; height: 100%; text-decoration: none; color: inherit; }
        .route-card-img-wrap { overflow: hidden; aspect-ratio: 16/9; }
        .route-card-img { width: 100%; height: 100%; object-fit: cover; display: block; transition: transform 350ms; }
        .route-card:hover .route-card-img { transform: scale(1.05); }
        .route-card-map { aspect-ratio: 16/9; background: var(--gradient-secondary); display: flex; align-items: center; justify-content: center; font-size: 2.5rem; min-height: 120px; }
        .route-card-body { padding: 1.125rem; display: flex; flex-direction: column; gap: 0.5rem; flex: 1; }
        .route-path { display: flex; align-items: center; gap: 0.4rem; flex-wrap: wrap; }
        .route-city { font-family: var(--font-display); font-weight: 700; font-size: 1.0625rem; color: var(--color-secondary); }
        .route-city.to { color: var(--color-primary); }
        .route-arrow { color: var(--color-muted-fg); }
        .route-stats { display: flex; gap: 0.5rem; flex-wrap: wrap; }
        .route-stat { font-size: 0.775rem; color: var(--color-muted-fg); background: var(--color-muted); padding: 0.15rem 0.5rem; border-radius: var(--radius-sm); }
        .route-desc { font-size: 0.875rem; color: var(--color-muted-fg); line-height: 1.55; margin: 0; flex: 1; }
        .route-footer { display: flex; align-items: center; justify-content: space-between; margin-top: auto; padding-top: 0.625rem; border-top: 1px solid var(--color-border); }
        .route-price { display: flex; align-items: baseline; gap: 0.25rem; }
        .route-price-label { font-size: 0.75rem; color: var(--color-muted-fg); }
        .route-price-val { font-family: var(--font-display); font-weight: 800; font-size: 1.25rem; color: var(--color-primary); }
        .route-cta-link { font-size: 0.8125rem; font-weight: 600; color: var(--color-primary); }
      `})]})}])}]);