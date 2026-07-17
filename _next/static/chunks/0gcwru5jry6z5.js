(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,505802,r=>{"use strict";var e=r.i(843476),a=r.i(271645);r.s(["default",0,function({items:r,renderCard:l,searchPlaceholder:o="Search…",filterGroups:i=[],itemsPerPage:t=12,noResultsText:s="No results found. Try a different search or filter.",gridCols:c=3}){let[n,d]=(0,a.useState)(""),[m,p]=(0,a.useState)({}),[u,g]=(0,a.useState)(1),f=(0,a.useMemo)(()=>{let e=n.toLowerCase().trim();return r.filter(r=>{let a=!e||r.title.toLowerCase().includes(e)||(r.description||"").toLowerCase().includes(e)||(r.tag_slugs||"").toLowerCase().includes(e)||(r.category_slugs||"").toLowerCase().replace(/-/g," ").includes(e),l=i.every(e=>{let a=m[e.label];return!a||"all"===a||(e.getField(r)||"").split("|").map(r=>r.trim()).includes(a)});return a&&l})},[r,n,m,i]),h=Math.max(1,Math.ceil(f.length/t)),b=Math.min(u,h),x=f.slice((b-1)*t,b*t),v=(0,a.useCallback)(r=>{d(r),g(1)},[]),y=(0,a.useCallback)((r,e)=>{p(a=>({...a,[r]:e})),g(1)},[]),w=n||Object.values(m).some(r=>r&&"all"!==r),j=(0,a.useCallback)(()=>{d(""),p({}),g(1)},[]);return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("div",{className:"lc-filter-bar",children:(0,e.jsxs)("div",{className:"container",children:[(0,e.jsxs)("div",{className:"lc-search-row",children:[(0,e.jsxs)("div",{className:"lc-search-wrap",children:[(0,e.jsx)("span",{className:"lc-search-icon","aria-hidden":"true",children:"🔍"}),(0,e.jsx)("input",{id:"listing-search",type:"search",placeholder:o,value:n,onChange:r=>v(r.target.value),"aria-label":o,className:"lc-search-input",autoComplete:"off"}),n&&(0,e.jsx)("button",{onClick:()=>v(""),className:"lc-search-clear","aria-label":"Clear search",children:"✕"})]}),w&&(0,e.jsx)("button",{onClick:j,className:"lc-clear-all-btn","aria-label":"Clear all filters",children:"✕ Clear all"})]}),i.map(r=>(0,e.jsxs)("div",{className:"lc-pill-row",role:"group","aria-label":`Filter by ${r.label}`,children:[(0,e.jsxs)("span",{className:"lc-pill-label",children:[r.label,":"]}),(0,e.jsxs)("div",{className:"lc-pills",children:[(0,e.jsx)("button",{onClick:()=>y(r.label,"all"),className:`lc-pill ${!m[r.label]||"all"===m[r.label]?"active":""}`,"aria-pressed":!m[r.label]||"all"===m[r.label],children:"All"}),r.values.map(a=>(0,e.jsx)("button",{onClick:()=>y(r.label,a),className:`lc-pill ${m[r.label]===a?"active":""}`,"aria-pressed":m[r.label]===a,children:r.labelMap?.[a]||a.replace(/-/g," ")},a))]})]},r.label))]})}),(0,e.jsx)("div",{className:"container lc-results-header",children:(0,e.jsx)("p",{className:"lc-results-count","aria-live":"polite",children:0===f.length?"No results":`Showing ${(b-1)*t+1}–${Math.min(b*t,f.length)} of ${f.length} result${1!==f.length?"s":""}`})}),(0,e.jsxs)("div",{className:"container lc-grid-wrap",children:[0===f.length?(0,e.jsxs)("div",{className:"lc-empty",children:[(0,e.jsx)("p",{style:{fontSize:"2.5rem",margin:"0 0 1rem"},children:"🔍"}),(0,e.jsx)("p",{style:{fontFamily:"var(--font-display)",fontWeight:"700",fontSize:"1.125rem",color:"var(--color-secondary)",marginBottom:"0.5rem"},children:"No results found"}),(0,e.jsx)("p",{style:{color:"var(--color-muted-fg)",marginBottom:"1.25rem",fontSize:"0.9375rem"},children:s}),(0,e.jsx)("button",{onClick:j,className:"lc-clear-all-btn",children:"✕ Clear filters"})]}):(0,e.jsx)("div",{className:`lc-grid ${2===c?"lc-grid-2":4===c?"lc-grid-4":"lc-grid-3"}`,children:x.map(r=>(0,e.jsx)("div",{children:l(r)},r.id))}),h>1&&(0,e.jsxs)("nav",{className:"lc-pagination","aria-label":"Page navigation",children:[(0,e.jsx)("button",{onClick:()=>g(r=>Math.max(1,r-1)),disabled:1===b,className:"lc-page-btn","aria-label":"Previous page",children:"← Prev"}),Array.from({length:h},(r,e)=>e+1).map(r=>(0,e.jsx)("button",{onClick:()=>g(r),className:`lc-page-btn ${b===r?"active":""}`,"aria-current":b===r?"page":void 0,children:r},r)),(0,e.jsx)("button",{onClick:()=>g(r=>Math.min(h,r+1)),disabled:b===h,className:"lc-page-btn","aria-label":"Next page",children:"Next →"})]})]}),(0,e.jsx)("style",{children:`
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
      `})]})}])},201381,r=>{"use strict";var e=r.i(843476),a=r.i(522016),l=r.i(505802),o=r.i(101484);function i({route:r}){let l=o.siteConfig.locale.currencySymbol,t=r.title.match(/(.+?)\s+to\s+(.+?)\s+(Taxi|Cab)/i),s=t?t[1].trim():"Bangalore",c=t?t[2].trim():r.title;return(0,e.jsx)("article",{className:"route-card",itemScope:!0,itemType:"https://schema.org/TouristTrip",children:(0,e.jsxs)(a.default,{href:`/routes/${r.slug}`,className:"route-card-inner","aria-label":`${r.title} — details and rates`,children:[r.thumbnail_image?(0,e.jsx)("div",{className:"route-card-img-wrap",children:(0,e.jsx)("img",{src:r.thumbnail_image,alt:r.title,className:"route-card-img",loading:"lazy",width:400,height:225})}):(0,e.jsx)("div",{className:"route-card-map",children:(0,e.jsx)("span",{children:"🗺️"})}),(0,e.jsxs)("div",{className:"route-card-body",children:[(0,e.jsxs)("div",{className:"route-path",children:[(0,e.jsx)("span",{className:"route-city",children:s}),(0,e.jsx)("span",{className:"route-arrow",children:"→"}),(0,e.jsx)("span",{className:"route-city to",itemProp:"touristType",children:c})]}),(0,e.jsxs)("div",{className:"route-stats",children:[r.distance_km>0&&(0,e.jsxs)("span",{className:"route-stat",children:["📏 ",r.distance_km," km"]}),r.duration_hours>0&&(0,e.jsxs)("span",{className:"route-stat",children:["⏱ ~",r.duration_hours," hrs"]})]}),r.description&&(0,e.jsx)("p",{className:"route-desc",itemProp:"description",children:r.description.length>85?r.description.slice(0,85)+"…":r.description}),(0,e.jsxs)("div",{className:"route-footer",children:[r.price_from>0?(0,e.jsxs)("div",{className:"route-price",children:[(0,e.jsx)("span",{className:"route-price-label",children:"from"}),(0,e.jsxs)("span",{className:"route-price-val",itemProp:"offers",children:[l,r.price_from.toLocaleString("en-IN")]})]}):(0,e.jsx)("span",{className:"route-price-label",children:"Call for rates"}),(0,e.jsx)("span",{className:"route-cta-link",children:"View →"})]})]})]})})}r.s(["default",0,function({allRoutes:r,cats:a}){return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(l.default,{items:r,renderCard:r=>(0,e.jsx)(i,{route:r}),searchPlaceholder:"Search destination — Mysore, Coorg, Ooty, Tirupati…",filterGroups:a.length?[{label:"Type",values:a,getField:r=>r.category_slugs||""}]:[],itemsPerPage:12,gridCols:3,noResultsText:"Try a city name like Mysore, Coorg, Hampi or Tirupati."}),(0,e.jsx)("style",{children:`
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