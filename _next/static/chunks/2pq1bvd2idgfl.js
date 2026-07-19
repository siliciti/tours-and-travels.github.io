(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,601687,e=>{"use strict";e.s(["permalinksConfig",0,{pages:"",vehicles:"vehicles",services:"services",routes:"routes",locations:"locations",blogs:"blog",media:"media",categories:"categories",tags:"tags",authors:"authors"}])},505802,e=>{"use strict";var r=e.i(843476),a=e.i(271645);e.s(["default",0,function({items:e,renderCard:l,searchPlaceholder:i="Search…",filterGroups:o=[],itemsPerPage:t=12,noResultsText:s="No results found. Try a different search or filter.",gridCols:c=3}){let[n,d]=(0,a.useState)(""),[m,g]=(0,a.useState)({}),[p,h]=(0,a.useState)(1),b=(0,a.useMemo)(()=>{let r=n.toLowerCase().trim();return e.filter(e=>{let a=!r||e.title.toLowerCase().includes(r)||(e.description||"").toLowerCase().includes(r)||(e.tag_slugs||"").toLowerCase().includes(r)||(e.category_slugs||"").toLowerCase().replace(/-/g," ").includes(r)||e.content&&"string"==typeof e.content&&e.content.toLowerCase().includes(r),l=o.every(r=>{let a=m[r.label];return!a||"all"===a||(r.getField(e)||"").split("|").map(e=>e.trim()).includes(a)});return a&&l})},[e,n,m,o]),f=Math.max(1,Math.ceil(b.length/t)),u=Math.min(p,f),x=b.slice((u-1)*t,u*t),v=(0,a.useCallback)(e=>{d(e),h(1)},[]),w=(0,a.useCallback)((e,r)=>{g(a=>({...a,[e]:r})),h(1)},[]),y=n||Object.values(m).some(e=>e&&"all"!==e),j=(0,a.useCallback)(()=>{d(""),g({}),h(1)},[]);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{className:"lc-filter-bar",children:(0,r.jsxs)("div",{className:"container",children:[(0,r.jsxs)("div",{className:"lc-search-row",children:[(0,r.jsxs)("div",{className:"lc-search-wrap",children:[(0,r.jsx)("span",{className:"lc-search-icon","aria-hidden":"true",children:"🔍"}),(0,r.jsx)("input",{id:"listing-search",type:"search",placeholder:i,value:n,onChange:e=>v(e.target.value),"aria-label":i,className:"lc-search-input",autoComplete:"off"}),n&&(0,r.jsx)("button",{onClick:()=>v(""),className:"lc-search-clear","aria-label":"Clear search",children:"✕"})]}),y&&(0,r.jsx)("button",{onClick:j,className:"lc-clear-all-btn","aria-label":"Clear all filters",children:"✕ Clear all"})]}),o.map(e=>(0,r.jsxs)("div",{className:"lc-pill-row",role:"group","aria-label":`Filter by ${e.label}`,children:[(0,r.jsxs)("span",{className:"lc-pill-label",children:[e.label,":"]}),(0,r.jsxs)("div",{className:"lc-pills",children:[(0,r.jsx)("button",{onClick:()=>w(e.label,"all"),className:`lc-pill ${!m[e.label]||"all"===m[e.label]?"active":""}`,"aria-pressed":!m[e.label]||"all"===m[e.label],children:"All"}),e.values.map(a=>(0,r.jsx)("button",{onClick:()=>w(e.label,a),className:`lc-pill ${m[e.label]===a?"active":""}`,"aria-pressed":m[e.label]===a,children:e.labelMap?.[a]||a.replace(/-/g," ")},a))]})]},e.label))]})}),(0,r.jsx)("div",{className:"container lc-results-header",children:(0,r.jsx)("p",{className:"lc-results-count","aria-live":"polite",children:0===b.length?"No results":`Showing ${(u-1)*t+1}–${Math.min(u*t,b.length)} of ${b.length} result${1!==b.length?"s":""}`})}),(0,r.jsxs)("div",{className:"container lc-grid-wrap",children:[0===b.length?(0,r.jsxs)("div",{className:"lc-empty",children:[(0,r.jsx)("p",{style:{fontSize:"2.5rem",margin:"0 0 1rem"},children:"🔍"}),(0,r.jsx)("p",{style:{fontFamily:"var(--font-display)",fontWeight:"700",fontSize:"1.125rem",color:"var(--color-secondary)",marginBottom:"0.5rem"},children:"No results found"}),(0,r.jsx)("p",{style:{color:"var(--color-muted-fg)",marginBottom:"1.25rem",fontSize:"0.9375rem"},children:s}),(0,r.jsx)("button",{onClick:j,className:"lc-clear-all-btn",children:"✕ Clear filters"})]}):(0,r.jsx)("div",{className:`lc-grid ${2===c?"lc-grid-2":4===c?"lc-grid-4":"lc-grid-3"}`,children:x.map(e=>(0,r.jsx)("div",{children:l(e)},e.id))}),f>1&&(0,r.jsxs)("nav",{className:"lc-pagination","aria-label":"Page navigation",children:[(0,r.jsx)("button",{onClick:()=>h(e=>Math.max(1,e-1)),disabled:1===u,className:"lc-page-btn","aria-label":"Previous page",children:"← Prev"}),Array.from({length:f},(e,r)=>r+1).map(e=>(0,r.jsx)("button",{onClick:()=>h(e),className:`lc-page-btn ${u===e?"active":""}`,"aria-current":u===e?"page":void 0,children:e},e)),(0,r.jsx)("button",{onClick:()=>h(e=>Math.min(f,e+1)),disabled:u===f,className:"lc-page-btn","aria-label":"Next page",children:"Next →"})]})]}),(0,r.jsx)("style",{children:`
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
      `})]})}])},484048,e=>{"use strict";var r=e.i(843476),a=e.i(522016),l=e.i(505802),i=e.i(601687),o=e.i(101484);function t({blog:e}){var l;let s=`/${i.permalinksConfig.blogs}/${e.slug}`,c=(l=e.created_at)?new Date(l).toLocaleDateString("en-IN",{day:"numeric",month:"short",year:"numeric"}):null,n=e.tag_slugs?e.tag_slugs.split(",").slice(0,2):[];return(0,r.jsxs)("article",{className:"blog-card",itemScope:!0,itemType:"https://schema.org/BlogPosting",children:[(0,r.jsx)("meta",{itemProp:"headline",content:e.title}),e.created_at&&(0,r.jsx)("meta",{itemProp:"datePublished",content:e.created_at}),(0,r.jsx)("meta",{itemProp:"author",content:o.siteConfig.company.name}),(0,r.jsx)(a.default,{href:s,className:"blog-card-img-link",tabIndex:-1,"aria-hidden":"true",children:e.thumbnail_image?(0,r.jsx)("div",{className:"blog-card-img-wrap",children:(0,r.jsx)("img",{src:e.thumbnail_image,alt:`${e.title} — travel guide by ${o.siteConfig.company.name}`,className:"blog-card-img",loading:"lazy",width:600,height:338,itemProp:"image"})}):(0,r.jsx)("div",{className:"blog-card-placeholder",children:(0,r.jsx)("span",{children:"📝"})})}),(0,r.jsxs)("div",{className:"blog-card-body",children:[(0,r.jsxs)("div",{className:"blog-card-meta",children:[n.map(e=>(0,r.jsx)("span",{className:"blog-tag",children:e.replace(/-/g," ")},e)),c&&(0,r.jsx)("span",{className:"blog-date",itemProp:"datePublished",children:c})]}),(0,r.jsx)("h2",{className:"blog-card-title",children:(0,r.jsx)(a.default,{href:s,style:{color:"inherit",textDecoration:"none"},itemProp:"url",children:e.title})}),e.description&&(0,r.jsx)("p",{className:"blog-card-desc",itemProp:"description",children:e.description.length>110?e.description.slice(0,110)+"…":e.description}),(0,r.jsx)(a.default,{href:s,className:"blog-card-cta","aria-label":`Read full article: ${e.title}`,children:"Read Article →"})]})]})}e.s(["default",0,function({allBlogs:e,tags:a}){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(l.default,{items:e,renderCard:e=>(0,r.jsx)(t,{blog:e}),searchPlaceholder:"Search articles — airport taxi, weekend trip, vehicle guide…",filterGroups:a.length>0?[{label:"Topic",values:a.slice(0,12),getField:e=>e.tag_slugs||""}]:[],itemsPerPage:9,gridCols:3,noResultsText:"Try searching 'airport', 'outstation', 'vehicle' or a destination name."}),(0,r.jsx)("style",{children:`
        .blog-card { border-radius: var(--radius-xl); overflow: hidden; border: 1px solid var(--color-border); box-shadow: var(--shadow-md); background: #fff; height: 100%; display: flex; flex-direction: column; transition: transform 220ms, box-shadow 220ms; }
        .blog-card:hover { transform: translateY(-4px); box-shadow: var(--shadow-xl); }
        .blog-card-img-link { display: block; }
        .blog-card-img-wrap { overflow: hidden; aspect-ratio: 16/9; }
        .blog-card-img { width: 100%; height: 100%; object-fit: cover; display: block; transition: transform 350ms; }
        .blog-card:hover .blog-card-img { transform: scale(1.05); }
        .blog-card-placeholder { aspect-ratio: 16/9; background: var(--gradient-primary); display: flex; align-items: center; justify-content: center; font-size: 3rem; min-height: 120px; }
        .blog-card-body { padding: 1.125rem; display: flex; flex-direction: column; gap: 0.625rem; flex: 1; }
        .blog-card-meta { display: flex; align-items: center; gap: 0.5rem; flex-wrap: wrap; }
        .blog-tag { font-size: 0.7rem; font-weight: 600; padding: 0.15rem 0.5rem; background: rgba(37,99,235,0.08); color: var(--color-primary); border-radius: var(--radius-full); text-transform: capitalize; border: 1px solid rgba(37,99,235,0.15); }
        .blog-date { font-size: 0.75rem; color: var(--color-muted-fg); margin-left: auto; }
        .blog-card-title { font-family: var(--font-display); font-size: 1.0625rem; font-weight: 700; color: var(--color-secondary); margin: 0; line-height: 1.35; }
        .blog-card-desc { font-size: 0.875rem; color: var(--color-muted-fg); line-height: 1.6; margin: 0; flex: 1; }
        .blog-card-cta { font-size: 0.875rem; font-weight: 600; color: var(--color-primary); text-decoration: none; margin-top: auto; display: inline-flex; align-items: center; gap: 0.25rem; }
        .blog-card-cta:hover { text-decoration: underline; }
      `})]})}])}]);