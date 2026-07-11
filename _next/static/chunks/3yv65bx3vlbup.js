(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,601687,e=>{"use strict";e.s(["permalinksConfig",0,{pages:"",vehicles:"vehicles",services:"services",routes:"routes",locations:"locations",blogs:"blog",categories:"categories",tags:"tags",authors:"authors"}])},289555,e=>{"use strict";var r=e.i(843476),a=e.i(271645),i=e.i(522016),l=e.i(601687),o=e.i(101484);e.s(["default",0,function({vehicles:e,categoryLabels:t}){let[s,c]=(0,a.useState)(""),[n,d]=(0,a.useState)("all"),[m,h]=(0,a.useState)(1),p=o.siteConfig.locale.currencySymbol,g=(0,a.useMemo)(()=>{let r=new Set;return e.forEach(e=>{e.category_slugs&&e.category_slugs.split("|").forEach(e=>r.add(e.trim()))}),Array.from(r)},[e]),f=(0,a.useMemo)(()=>{let r=s.toLowerCase().trim();return e.filter(e=>{let a=!r||e.title.toLowerCase().includes(r)||(e.vehicle_brand||"").toLowerCase().includes(r)||(e.vehicle_model||"").toLowerCase().includes(r)||(e.description||"").toLowerCase().includes(r)||String(e.seating_capacity).includes(r),i="all"===n||(e.category_slugs||"").split("|").map(e=>e.trim()).includes(n);return a&&i})},[e,s,n]),v=Math.max(1,Math.ceil(f.length/9)),u=Math.min(m,v),b=f.slice((u-1)*9,9*u),x=(0,a.useCallback)(e=>{c(e),h(1)},[]),y=(0,a.useCallback)(e=>{d(e),h(1)},[]);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{className:"vehicle-filter-bar",children:(0,r.jsxs)("div",{className:"container",children:[(0,r.jsxs)("div",{className:"vehicle-search-wrap",children:[(0,r.jsx)("span",{className:"vehicle-search-icon","aria-hidden":"true",children:"🔍"}),(0,r.jsx)("input",{type:"search",placeholder:"Search vehicles — e.g. Innova, Sedan, 7 seats…",value:s,onChange:e=>x(e.target.value),"aria-label":"Search vehicles",className:"vehicle-search-input",id:"vehicle-search"}),s&&(0,r.jsx)("button",{onClick:()=>x(""),"aria-label":"Clear search",className:"vehicle-search-clear",children:"✕"})]}),(0,r.jsxs)("div",{className:"vehicle-cats",role:"group","aria-label":"Filter by category",children:[(0,r.jsxs)("button",{onClick:()=>y("all"),className:`vehicle-cat-pill ${"all"===n?"active":""}`,"aria-pressed":"all"===n,children:["All (",e.length,")"]}),g.map(a=>{let i=e.filter(e=>(e.category_slugs||"").split("|").map(e=>e.trim()).includes(a)).length,l=t[a]||a.replace(/-/g," ");return(0,r.jsxs)("button",{onClick:()=>y(a),className:`vehicle-cat-pill ${n===a?"active":""}`,"aria-pressed":n===a,children:[l," (",i,")"]},a)})]})]})}),(0,r.jsxs)("div",{className:"container",children:[(0,r.jsxs)("div",{className:"vehicle-results-header",children:[(0,r.jsxs)("p",{className:"vehicle-results-count",children:[0===f.length?"No vehicles found":`Showing ${(u-1)*9+1}–${Math.min(9*u,f.length)} of ${f.length} vehicle${1!==f.length?"s":""}`,"all"!==n&&` in "${t[n]||n}"`,s&&` for "${s}"`]}),(s||"all"!==n)&&(0,r.jsx)("button",{onClick:()=>{x(""),y("all")},className:"vehicle-clear-all",children:"✕ Clear filters"})]}),0===f.length?(0,r.jsxs)("div",{className:"vehicle-empty",children:[(0,r.jsx)("p",{style:{fontSize:"3rem",margin:"0 0 1rem"},children:"🚗"}),(0,r.jsx)("h2",{style:{fontFamily:"var(--font-display)",fontSize:"1.25rem",color:"var(--color-secondary)",marginBottom:"0.5rem"},children:"No vehicles match your search"}),(0,r.jsxs)("p",{style:{color:"var(--color-muted-fg)",marginBottom:"1.5rem"},children:["Try a different keyword or category, or"," ",(0,r.jsx)("button",{onClick:()=>{x(""),y("all")},className:"link-btn",children:"view all vehicles"}),"."]})]}):(0,r.jsx)("div",{className:"vehicle-grid",children:b.map(e=>(0,r.jsxs)("article",{className:"vehicle-card",itemScope:!0,itemType:"https://schema.org/Product",children:[(0,r.jsxs)(i.default,{href:`/${l.permalinksConfig.vehicles}/${e.slug}`,className:"vehicle-card-img-wrap",tabIndex:-1,"aria-hidden":"true",children:[e.thumbnail_image?(0,r.jsx)("img",{src:e.thumbnail_image,alt:`${e.title} - ${e.vehicle_brand} ${e.vehicle_model} available for hire in ${o.siteConfig.address.city}`,className:"vehicle-card-img",loading:"lazy",width:600,height:450,itemProp:"image"}):(0,r.jsx)("div",{className:"vehicle-card-placeholder",children:"🚗"}),e.category_slugs&&(0,r.jsx)("span",{className:"vehicle-card-badge-cat",children:e.category_slugs.split("|")[0].replace(/-/g," ")}),e.is_featured&&(0,r.jsx)("span",{className:"vehicle-card-badge-feat",children:"★ Featured"})]}),(0,r.jsxs)("div",{className:"vehicle-card-body",children:[(0,r.jsx)("h3",{className:"vehicle-card-title",itemProp:"name",children:(0,r.jsx)(i.default,{href:`/${l.permalinksConfig.vehicles}/${e.slug}`,style:{color:"inherit",textDecoration:"none"},children:e.title})}),(0,r.jsxs)("div",{className:"vehicle-card-specs",itemProp:"description",children:[(0,r.jsxs)("span",{className:"spec-pill",children:["👥 ",e.seating_capacity," Seats"]}),(0,r.jsxs)("span",{className:"spec-pill",children:["🧳 ",e.luggage_capacity," Bags"]}),"True"===e.air_conditioned&&(0,r.jsx)("span",{className:"spec-pill",children:"❄️ AC"}),e.fuel_type&&(0,r.jsxs)("span",{className:"spec-pill",children:["⛽ ",e.fuel_type]})]}),e.amenities&&(0,r.jsx)("div",{className:"vehicle-card-amenities",children:e.amenities.split("|").slice(0,3).map(e=>(0,r.jsx)("span",{className:"amenity-chip",children:e.trim()},e))}),e.airport_rate>0&&(0,r.jsxs)("div",{className:"vehicle-card-price",itemProp:"offers",itemScope:!0,itemType:"https://schema.org/Offer",children:[(0,r.jsx)("span",{className:"price-label",children:"Airport from"}),(0,r.jsxs)("span",{className:"price-value",itemProp:"price",content:String(e.airport_rate),children:[p,e.airport_rate.toLocaleString("en-IN")]}),(0,r.jsx)("meta",{itemProp:"priceCurrency",content:o.siteConfig.locale.currencyCode})]}),(0,r.jsx)(i.default,{href:`/${l.permalinksConfig.vehicles}/${e.slug}`,className:"vehicle-card-cta","aria-label":`View details and rates for ${e.title}`,children:"View Details & Rates →"})]})]},e.id))}),v>1&&(0,r.jsxs)("nav",{className:"vehicle-pagination","aria-label":"Vehicle listing pages",children:[(0,r.jsx)("button",{onClick:()=>h(e=>Math.max(1,e-1)),disabled:1===u,className:"page-btn","aria-label":"Previous page",children:"← Prev"}),Array.from({length:v},(e,r)=>r+1).map(e=>(0,r.jsx)("button",{onClick:()=>h(e),className:`page-btn ${u===e?"active":""}`,"aria-label":`Page ${e}`,"aria-current":u===e?"page":void 0,children:e},e)),(0,r.jsx)("button",{onClick:()=>h(e=>Math.min(v,e+1)),disabled:u===v,className:"page-btn","aria-label":"Next page",children:"Next →"})]})]}),(0,r.jsx)("style",{children:`
        /* ── Filter Bar ── */
        .vehicle-filter-bar {
          background: #fff;
          border-bottom: 1px solid var(--color-border);
          padding: 1rem 0;
          position: sticky;
          top: 72px;
          z-index: 20;
          box-shadow: 0 2px 8px rgba(0,0,0,0.06);
        }
        .vehicle-filter-bar .container {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }
        .vehicle-search-wrap {
          position: relative;
          width: 100%;
        }
        .vehicle-search-icon {
          position: absolute;
          left: 0.875rem;
          top: 50%;
          transform: translateY(-50%);
          pointer-events: none;
          font-size: 0.9rem;
        }
        .vehicle-search-input {
          width: 100%;
          padding: 0.625rem 2.5rem 0.625rem 2.5rem;
          border: 1.5px solid var(--color-border);
          border-radius: var(--radius-full);
          font-size: 0.9375rem;
          font-family: var(--font-sans);
          outline: none;
          background: var(--color-muted);
          color: var(--color-fg);
          transition: border-color 150ms, box-shadow 150ms;
          box-sizing: border-box;
        }
        .vehicle-search-input:focus {
          border-color: var(--color-primary);
          background: #fff;
          box-shadow: 0 0 0 3px rgba(37,99,235,0.12);
        }
        .vehicle-search-clear {
          position: absolute;
          right: 0.75rem;
          top: 50%;
          transform: translateY(-50%);
          background: none;
          border: none;
          cursor: pointer;
          color: var(--color-muted-fg);
          font-size: 0.85rem;
          padding: 0.25rem;
          line-height: 1;
        }
        .vehicle-cats {
          display: flex;
          gap: 0.5rem;
          overflow-x: auto;
          padding-bottom: 2px;
          scrollbar-width: none;
        }
        .vehicle-cats::-webkit-scrollbar { display: none; }
        .vehicle-cat-pill {
          flex-shrink: 0;
          padding: 0.45rem 1rem;
          border-radius: var(--radius-full);
          border: 1.5px solid var(--color-border);
          background: var(--color-muted);
          color: var(--color-fg);
          font-size: 0.8125rem;
          font-weight: 500;
          cursor: pointer;
          white-space: nowrap;
          transition: all 150ms;
          font-family: var(--font-sans);
          text-transform: capitalize;
        }
        .vehicle-cat-pill:hover {
          border-color: var(--color-primary);
          color: var(--color-primary);
          background: rgba(37,99,235,0.06);
        }
        .vehicle-cat-pill.active {
          background: var(--color-primary);
          color: #fff;
          border-color: var(--color-primary);
          font-weight: 600;
        }

        /* ── Results header ── */
        .vehicle-results-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1.5rem 0 0.75rem;
          flex-wrap: wrap;
          gap: 0.5rem;
        }
        .vehicle-results-count {
          font-size: 0.9rem;
          color: var(--color-muted-fg);
          margin: 0;
        }
        .vehicle-clear-all {
          font-size: 0.8125rem;
          color: var(--color-primary);
          background: none;
          border: none;
          cursor: pointer;
          font-weight: 600;
          padding: 0;
          font-family: var(--font-sans);
        }
        .vehicle-clear-all:hover { text-decoration: underline; }

        /* ── Grid ── */
        .vehicle-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
          padding-bottom: 3rem;
        }
        @media (min-width: 520px) {
          .vehicle-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (min-width: 1024px) {
          .vehicle-grid { grid-template-columns: repeat(3, 1fr); }
        }

        /* ── Card ── */
        .vehicle-card {
          background: #fff;
          border-radius: var(--radius-xl);
          overflow: hidden;
          box-shadow: var(--shadow-md);
          display: flex;
          flex-direction: column;
          transition: transform 220ms ease, box-shadow 220ms ease;
          border: 1px solid var(--color-border);
        }
        .vehicle-card:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-xl);
        }
        .vehicle-card-img-wrap {
          position: relative;
          display: block;
          overflow: hidden;
          aspect-ratio: 4/3;
          background: var(--color-muted);
        }
        .vehicle-card-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 400ms ease;
          display: block;
        }
        .vehicle-card:hover .vehicle-card-img {
          transform: scale(1.06);
        }
        .vehicle-card-placeholder {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 3rem;
          background: var(--gradient-primary);
          opacity: 0.15;
        }
        .vehicle-card-badge-cat {
          position: absolute;
          top: 0.75rem;
          left: 0.75rem;
          background: rgba(37,99,235,0.88);
          color: #fff;
          font-size: 0.7rem;
          font-weight: 600;
          padding: 0.2rem 0.6rem;
          border-radius: var(--radius-full);
          text-transform: capitalize;
          backdrop-filter: blur(4px);
        }
        .vehicle-card-badge-feat {
          position: absolute;
          top: 0.75rem;
          right: 0.75rem;
          background: rgba(245,158,11,0.92);
          color: #fff;
          font-size: 0.7rem;
          font-weight: 700;
          padding: 0.2rem 0.6rem;
          border-radius: var(--radius-full);
        }
        .vehicle-card-body {
          padding: 1.125rem;
          display: flex;
          flex-direction: column;
          gap: 0.625rem;
          flex: 1;
        }
        .vehicle-card-title {
          font-family: var(--font-display);
          font-size: 1.05rem;
          font-weight: 700;
          color: var(--color-secondary);
          line-height: 1.3;
          margin: 0;
        }
        .vehicle-card-specs {
          display: flex;
          gap: 0.375rem;
          flex-wrap: wrap;
        }
        .spec-pill {
          font-size: 0.75rem;
          color: var(--color-muted-fg);
          background: var(--color-muted);
          padding: 0.2rem 0.55rem;
          border-radius: var(--radius-sm);
          white-space: nowrap;
        }
        .vehicle-card-amenities {
          display: flex;
          gap: 0.3rem;
          flex-wrap: wrap;
        }
        .amenity-chip {
          font-size: 0.7rem;
          padding: 0.15rem 0.45rem;
          border-radius: var(--radius-sm);
          background: rgba(37,99,235,0.07);
          color: var(--color-primary);
          border: 1px solid rgba(37,99,235,0.12);
        }
        .vehicle-card-price {
          display: flex;
          align-items: baseline;
          gap: 0.375rem;
          margin-top: auto;
          padding-top: 0.375rem;
        }
        .price-label {
          font-size: 0.75rem;
          color: var(--color-muted-fg);
        }
        .price-value {
          font-family: var(--font-display);
          font-weight: 800;
          font-size: 1.375rem;
          color: var(--color-primary);
        }
        .vehicle-card-cta {
          display: block;
          text-align: center;
          background: var(--gradient-primary);
          color: #fff;
          padding: 0.625rem 1rem;
          border-radius: var(--radius-md);
          font-weight: 600;
          font-size: 0.875rem;
          text-decoration: none;
          margin-top: 0.5rem;
          transition: opacity 150ms, transform 150ms;
        }
        .vehicle-card-cta:hover {
          opacity: 0.92;
          transform: translateY(-1px);
        }

        /* ── Empty state ── */
        .vehicle-empty {
          text-align: center;
          padding: 4rem 1rem;
          color: var(--color-muted-fg);
        }
        .link-btn {
          background: none;
          border: none;
          cursor: pointer;
          color: var(--color-primary);
          font-weight: 600;
          font-family: var(--font-sans);
          font-size: inherit;
          padding: 0;
          text-decoration: underline;
        }

        /* ── Pagination ── */
        .vehicle-pagination {
          display: flex;
          justify-content: center;
          gap: 0.5rem;
          padding: 2rem 0 3rem;
          flex-wrap: wrap;
        }
        .page-btn {
          min-width: 40px;
          height: 40px;
          padding: 0 0.75rem;
          border-radius: var(--radius-md);
          border: 1.5px solid var(--color-border);
          background: #fff;
          color: var(--color-fg);
          font-size: 0.875rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 150ms;
          font-family: var(--font-sans);
        }
        .page-btn:hover:not(:disabled) {
          border-color: var(--color-primary);
          color: var(--color-primary);
        }
        .page-btn.active {
          background: var(--color-primary);
          border-color: var(--color-primary);
          color: #fff;
          font-weight: 700;
        }
        .page-btn:disabled {
          opacity: 0.4;
          cursor: not-allowed;
        }

        @media (min-width: 768px) {
          .vehicle-filter-bar .container {
            flex-direction: row;
            align-items: center;
            flex-wrap: wrap;
          }
          .vehicle-search-wrap {
            width: 320px;
            flex-shrink: 0;
          }
          .vehicle-cats { flex: 1; }
        }
      `})]})}])}]);