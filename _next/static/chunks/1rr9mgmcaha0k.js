(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,505802,e=>{"use strict";var r=e.i(843476),a=e.i(271645);e.s(["default",0,function({items:e,renderCard:l,searchPlaceholder:i="Search…",filterGroups:o=[],itemsPerPage:t=12,noResultsText:c="No results found. Try a different search or filter.",gridCols:s=3}){let[n,d]=(0,a.useState)(""),[m,p]=(0,a.useState)({}),[g,h]=(0,a.useState)(1),f=(0,a.useMemo)(()=>{let r=n.toLowerCase().trim();return e.filter(e=>{let a=!r||e.title.toLowerCase().includes(r)||(e.description||"").toLowerCase().includes(r)||(e.tag_slugs||"").toLowerCase().includes(r)||(e.category_slugs||"").toLowerCase().replace(/-/g," ").includes(r)||e.content&&"string"==typeof e.content&&e.content.toLowerCase().includes(r),l=o.every(r=>{let a=m[r.label];return!a||"all"===a||(r.getField(e)||"").split("|").map(e=>e.trim()).includes(a)});return a&&l})},[e,n,m,o]),u=Math.max(1,Math.ceil(f.length/t)),b=Math.min(g,u),x=f.slice((b-1)*t,b*t),v=(0,a.useCallback)(e=>{d(e),h(1)},[]),w=(0,a.useCallback)((e,r)=>{p(a=>({...a,[e]:r})),h(1)},[]),y=n||Object.values(m).some(e=>e&&"all"!==e),j=(0,a.useCallback)(()=>{d(""),p({}),h(1)},[]);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{className:"lc-filter-bar",children:(0,r.jsxs)("div",{className:"container",children:[(0,r.jsxs)("div",{className:"lc-search-row",children:[(0,r.jsxs)("div",{className:"lc-search-wrap",children:[(0,r.jsx)("span",{className:"lc-search-icon","aria-hidden":"true",children:"🔍"}),(0,r.jsx)("input",{id:"listing-search",type:"search",placeholder:i,value:n,onChange:e=>v(e.target.value),"aria-label":i,className:"lc-search-input",autoComplete:"off"}),n&&(0,r.jsx)("button",{onClick:()=>v(""),className:"lc-search-clear","aria-label":"Clear search",children:"✕"})]}),y&&(0,r.jsx)("button",{onClick:j,className:"lc-clear-all-btn","aria-label":"Clear all filters",children:"✕ Clear all"})]}),o.map(e=>(0,r.jsxs)("div",{className:"lc-pill-row",role:"group","aria-label":`Filter by ${e.label}`,children:[(0,r.jsxs)("span",{className:"lc-pill-label",children:[e.label,":"]}),(0,r.jsxs)("div",{className:"lc-pills",children:[(0,r.jsx)("button",{onClick:()=>w(e.label,"all"),className:`lc-pill ${!m[e.label]||"all"===m[e.label]?"active":""}`,"aria-pressed":!m[e.label]||"all"===m[e.label],children:"All"}),e.values.map(a=>(0,r.jsx)("button",{onClick:()=>w(e.label,a),className:`lc-pill ${m[e.label]===a?"active":""}`,"aria-pressed":m[e.label]===a,children:e.labelMap?.[a]||a.replace(/-/g," ")},a))]})]},e.label))]})}),(0,r.jsx)("div",{className:"container lc-results-header",children:(0,r.jsx)("p",{className:"lc-results-count","aria-live":"polite",children:0===f.length?"No results":`Showing ${(b-1)*t+1}–${Math.min(b*t,f.length)} of ${f.length} result${1!==f.length?"s":""}`})}),(0,r.jsxs)("div",{className:"container lc-grid-wrap",children:[0===f.length?(0,r.jsxs)("div",{className:"lc-empty",children:[(0,r.jsx)("p",{style:{fontSize:"2.5rem",margin:"0 0 1rem"},children:"🔍"}),(0,r.jsx)("p",{style:{fontFamily:"var(--font-display)",fontWeight:"700",fontSize:"1.125rem",color:"var(--color-secondary)",marginBottom:"0.5rem"},children:"No results found"}),(0,r.jsx)("p",{style:{color:"var(--color-muted-fg)",marginBottom:"1.25rem",fontSize:"0.9375rem"},children:c}),(0,r.jsx)("button",{onClick:j,className:"lc-clear-all-btn",children:"✕ Clear filters"})]}):(0,r.jsx)("div",{className:`lc-grid ${2===s?"lc-grid-2":4===s?"lc-grid-4":"lc-grid-3"}`,children:x.map(e=>(0,r.jsx)("div",{children:l(e)},e.id))}),u>1&&(0,r.jsxs)("nav",{className:"lc-pagination","aria-label":"Page navigation",children:[(0,r.jsx)("button",{onClick:()=>h(e=>Math.max(1,e-1)),disabled:1===b,className:"lc-page-btn","aria-label":"Previous page",children:"← Prev"}),Array.from({length:u},(e,r)=>r+1).map(e=>(0,r.jsx)("button",{onClick:()=>h(e),className:`lc-page-btn ${b===e?"active":""}`,"aria-current":b===e?"page":void 0,children:e},e)),(0,r.jsx)("button",{onClick:()=>h(e=>Math.min(u,e+1)),disabled:b===u,className:"lc-page-btn","aria-label":"Next page",children:"Next →"})]})]}),(0,r.jsx)("style",{children:`
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
      `})]})}])},661964,e=>{"use strict";var r=e.i(843476),a=e.i(522016),l=e.i(505802),i=e.i(101484);let o={airport:["airport","kial","kempegowda"],east:["whitefield","marathahalli","brookefield","varthur","bellandur","sarjapur"],south:["electronic-city","hsr","koramangala","jayanagar","bannerghatta","jp-nagar","btm"],north:["yelahanka","hebbal","peenya","yeshwanthpur"],central:["mg-road","brigade","richmond","residency","indiranagar","cbd"],west:["rajajinagar","vijayanagar","malleswaram"]};function t(e){for(let[r,a]of Object.entries(o))if(a.some(r=>e.includes(r)))return r;return"other"}let c={airport:"Airport",east:"East Bangalore",south:"South Bangalore",north:"North Bangalore",central:"Central / CBD",west:"West Bangalore",other:"Other Areas"};function s({location:e}){let l=c[t(e.slug)]||"Bangalore";return(0,r.jsx)("article",{className:"loc-list-card",itemScope:!0,itemType:"https://schema.org/Place",children:(0,r.jsxs)(a.default,{href:`/locations/${e.slug}`,className:"loc-card-inner","aria-label":`Taxi service in ${e.title}`,children:[e.thumbnail_image?(0,r.jsx)("div",{className:"loc-card-img-wrap",children:(0,r.jsx)("img",{src:e.thumbnail_image,alt:`Taxi service in ${e.title}, ${i.siteConfig.address.city}`,className:"loc-card-img",loading:"lazy",width:400,height:225,itemProp:"image"})}):(0,r.jsxs)("div",{className:"loc-card-icon-wrap",children:[(0,r.jsx)("span",{style:{fontSize:"2.25rem"},children:"📍"}),(0,r.jsx)("span",{className:"loc-icon-name",children:e.title.split(" ").slice(0,2).join(" ")})]}),(0,r.jsxs)("div",{className:"loc-card-body",children:[(0,r.jsx)("div",{className:"loc-card-meta",children:(0,r.jsx)("span",{className:"loc-area-badge",children:l})}),(0,r.jsx)("h2",{className:"loc-card-title",itemProp:"name",children:e.title}),e.description&&(0,r.jsx)("p",{className:"loc-card-desc",itemProp:"description",children:e.description.length>90?e.description.slice(0,90)+"…":e.description}),(0,r.jsxs)("div",{className:"loc-card-footer",children:[(0,r.jsxs)("div",{className:"loc-services-mini",children:[(0,r.jsx)("span",{children:"✈️ Airport"}),(0,r.jsx)("span",{children:"🏙️ Local"}),(0,r.jsx)("span",{children:"🛣️ Outstation"})]}),(0,r.jsx)("span",{className:"loc-cta-link",children:"Book Taxi →"})]})]})]})})}e.s(["default",0,function({allLocations:e,areaGroupValues:a}){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(l.default,{items:e.map(e=>({...e,_area:t(e.slug)})),renderCard:e=>(0,r.jsx)(s,{location:e}),searchPlaceholder:"Search area — Whitefield, Koramangala, Indiranagar…",filterGroups:[{label:"Area",values:a,labelMap:c,getField:e=>t(e.slug)}],itemsPerPage:12,gridCols:3,noResultsText:"Try a neighbourhood name like Koramangala, Whitefield or Electronic City."}),(0,r.jsx)("style",{children:`
        .loc-list-card { border-radius: var(--radius-xl); overflow: hidden; border: 1px solid var(--color-border); box-shadow: var(--shadow-md); background: #fff; height: 100%; transition: transform 220ms, box-shadow 220ms; }
        .loc-list-card:hover { transform: translateY(-4px); box-shadow: var(--shadow-xl); }
        .loc-card-inner { display: flex; flex-direction: column; height: 100%; text-decoration: none; color: inherit; }
        .loc-card-img-wrap { overflow: hidden; aspect-ratio: 16/9; }
        .loc-card-img { width: 100%; height: 100%; object-fit: cover; display: block; transition: transform 350ms; }
        .loc-list-card:hover .loc-card-img { transform: scale(1.05); }
        .loc-card-icon-wrap { aspect-ratio: 16/9; background: var(--gradient-secondary); display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 0.5rem; min-height: 120px; }
        .loc-icon-name { color: rgba(255,255,255,0.7); font-size: 0.875rem; font-weight: 600; }
        .loc-card-body { padding: 1rem; display: flex; flex-direction: column; gap: 0.5rem; flex: 1; }
        .loc-card-meta { display: flex; align-items: center; gap: 0.5rem; }
        .loc-area-badge { font-size: 0.7rem; font-weight: 600; padding: 0.15rem 0.5rem; background: rgba(37,99,235,0.08); color: var(--color-primary); border-radius: var(--radius-full); border: 1px solid rgba(37,99,235,0.15); text-transform: uppercase; letter-spacing: 0.04em; }
        .loc-card-title { font-family: var(--font-display); font-size: 1.0625rem; font-weight: 700; color: var(--color-secondary); margin: 0; line-height: 1.3; }
        .loc-card-desc { font-size: 0.875rem; color: var(--color-muted-fg); line-height: 1.55; margin: 0; flex: 1; }
        .loc-card-footer { display: flex; align-items: center; justify-content: space-between; margin-top: auto; padding-top: 0.625rem; border-top: 1px solid var(--color-border); flex-wrap: wrap; gap: 0.375rem; }
        .loc-services-mini { display: flex; gap: 0.5rem; font-size: 0.75rem; color: var(--color-muted-fg); flex-wrap: wrap; }
        .loc-cta-link { font-size: 0.8125rem; font-weight: 700; color: var(--color-primary); white-space: nowrap; }
      `})]})}])}]);