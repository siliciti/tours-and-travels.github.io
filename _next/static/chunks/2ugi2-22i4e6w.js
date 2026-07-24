(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,632036,e=>{"use strict";var t=e.i(101484);e.s(["formatDate",0,function(e,r){if(!e)return"";let a=e instanceof Date?e:new Date(e),i=t.siteConfig.locale?.language||"en-IN",l=t.siteConfig.locale?.timezone||"Asia/Kolkata";return a.toLocaleDateString(i,{timeZone:l,...r})},"formatNumber",0,function(e,r){if(null==e||isNaN(e))return"0";let a=t.siteConfig.locale?.language||"en-IN";return e.toLocaleString(a,r)}])},601687,e=>{"use strict";e.s(["permalinksConfig",0,{pages:"",vehicles:"vehicles",services:"services",routes:"routes",locations:"locations",blogs:"blog",media:"media",categories:"categories",tags:"tags",authors:"authors"}])},184122,e=>{"use strict";var t=e.i(843476),r=e.i(271645);function a({item:e,isOpen:r,onToggle:i}){return(0,t.jsxs)("div",{style:{border:"1px solid var(--color-border)",borderRadius:"var(--radius-md)",overflow:"hidden",background:"#fff",transition:"box-shadow var(--transition-base)",boxShadow:r?"var(--shadow-md)":"none"},children:[(0,t.jsxs)("button",{onClick:i,style:{width:"100%",padding:"1.125rem 1.25rem",display:"flex",alignItems:"center",justifyContent:"space-between",gap:"1rem",background:"none",border:"none",cursor:"pointer",textAlign:"left",fontWeight:"600",fontSize:"0.9375rem",color:r?"var(--color-primary)":"var(--color-secondary)",transition:"color 150ms"},"aria-expanded":r,children:[(0,t.jsx)("span",{children:e.question}),(0,t.jsx)("span",{style:{flexShrink:0,width:"28px",height:"28px",borderRadius:"var(--radius-full)",background:r?"var(--color-primary)":"var(--color-muted)",color:r?"#fff":"var(--color-muted-fg)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"1.25rem",fontWeight:"300",transition:"all 200ms",transform:r?"rotate(45deg)":"none"},children:"+"})]}),r&&(0,t.jsx)("div",{style:{padding:"0 1.25rem 1.25rem",color:"var(--color-muted-fg)",fontSize:"0.9375rem",lineHeight:"1.7",borderTop:"1px solid var(--color-border)",paddingTop:"1rem"},children:e.answer})]})}e.s(["default",0,function({faqs:e,limit:i}){let[l,o]=(0,r.useState)(e.length>0?e[0].id:null),n=i?e.slice(0,i):e;return n.length?(0,t.jsx)("div",{style:{display:"flex",flexDirection:"column",gap:"0.75rem"},children:n.map(e=>(0,t.jsx)(a,{item:e,isOpen:l===e.id,onToggle:()=>o(l===e.id?null:e.id)},e.id))}):null}])},214528,e=>{"use strict";var t=e.i(843476),r=e.i(522016),a=e.i(601687),i=e.i(101484),l=e.i(632036);function o({icon:e,label:r}){return(0,t.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"0.25rem",fontSize:"0.8125rem",color:"var(--color-muted-fg)"},children:[(0,t.jsx)("span",{children:e}),(0,t.jsx)("span",{children:r})]})}e.s(["default",0,function({vehicle:e,showPrice:n=!0}){let s=`/${a.permalinksConfig.vehicles}/${e.slug}`,c=i.siteConfig.locale.currencySymbol,d=e.amenities?e.amenities.split("|").slice(0,3):[];return(0,t.jsxs)("div",{className:"card h-entry",style:{height:"100%",display:"flex",flexDirection:"column"},children:[(0,t.jsxs)("div",{style:{position:"relative",aspectRatio:"4/3",overflow:"hidden"},children:[e.thumbnail_image?(0,t.jsx)("img",{src:e.thumbnail_image,alt:`${e.title} rental in ${i.siteConfig.address.city}`,title:e.title,className:"img-cover u-photo",loading:"lazy",width:400,height:300,style:{transition:"transform 400ms ease"},onMouseEnter:e=>{e.currentTarget.style.transform="scale(1.05)"},onMouseLeave:e=>{e.currentTarget.style.transform="scale(1)"}}):(0,t.jsx)("div",{className:"img-placeholder",style:{aspectRatio:"4/3"},children:"🚗"}),e.category_slugs&&(0,t.jsx)("div",{style:{position:"absolute",top:"0.75rem",left:"0.75rem"},children:(0,t.jsx)("span",{className:"badge badge-primary p-category",style:{textTransform:"capitalize",backdropFilter:"blur(4px)",background:"rgba(37,99,235,0.85)",color:"#fff"},children:e.category_slugs.split("|")[0].replace(/-/g," ")})}),e.is_featured?(0,t.jsx)("div",{style:{position:"absolute",top:"0.75rem",right:"0.75rem"},children:(0,t.jsx)("span",{className:"badge badge-accent",style:{background:"rgba(245,158,11,0.9)",color:"#fff"},children:"★ Featured"})}):null]}),(0,t.jsxs)("div",{className:"card-body",style:{flex:1,display:"flex",flexDirection:"column",gap:"0.75rem"},children:[(0,t.jsx)("h3",{className:"p-name",style:{fontFamily:"var(--font-display)",fontSize:"1.0625rem",fontWeight:"700",color:"var(--color-secondary)",lineHeight:1.3},children:e.title}),(0,t.jsxs)("div",{className:"e-summary",style:{display:"flex",gap:"0.75rem",flexWrap:"wrap"},children:[(0,t.jsx)(o,{icon:"👥",label:`${e.seating_capacity} Seats`}),(0,t.jsx)(o,{icon:"🧳",label:`${e.luggage_capacity} Bags`}),"True"===e.air_conditioned&&(0,t.jsx)(o,{icon:"❄️",label:"AC"}),e.fuel_type&&(0,t.jsx)(o,{icon:"⛽",label:e.fuel_type})]}),d.length>0&&(0,t.jsx)("div",{style:{display:"flex",gap:"0.375rem",flexWrap:"wrap"},children:d.map(e=>(0,t.jsx)("span",{style:{fontSize:"0.7rem",padding:"0.2rem 0.5rem",background:"var(--color-muted)",borderRadius:"var(--radius-sm)",color:"var(--color-muted-fg)"},children:e},e))}),n&&e.airport_rate>0&&(0,t.jsxs)("div",{style:{marginTop:"auto"},children:[(0,t.jsx)("div",{style:{fontSize:"0.75rem",color:"var(--color-muted-fg)",marginBottom:"0.25rem"},children:"Airport Rate from"}),(0,t.jsxs)("div",{style:{fontFamily:"var(--font-display)",fontWeight:"800",fontSize:"1.5rem",color:"var(--color-primary)"},children:[c,(0,l.formatNumber)(e.airport_rate)]})]}),(0,t.jsx)(r.default,{href:s,target:"_self",title:`View details and rates for ${e.title}`,className:"btn btn-primary u-url",style:{marginTop:"0.5rem",justifyContent:"center"},children:"View Details & Rates"})]})]})}])},881722,e=>{"use strict";var t=e.i(843476),r=e.i(271645);e.s(["default",0,function({images:e,altPrefix:a}){let[i,l]=(0,r.useState)(null),[o,n]=(0,r.useState)(1),[s,c]=(0,r.useState)({x:0,y:0}),[d,g]=(0,r.useState)(!1),[m,b]=(0,r.useState)({x:0,y:0}),u=null!==i,h=(0,r.useCallback)(e=>{l(e),n(1),c({x:0,y:0})},[]),p=(0,r.useCallback)(()=>{l(null),n(1),c({x:0,y:0})},[]),x=(0,r.useCallback)(()=>{l(t=>null===t?0:(t-1+e.length)%e.length),n(1),c({x:0,y:0})},[e.length]),f=(0,r.useCallback)(()=>{l(t=>null===t?0:(t+1)%e.length),n(1),c({x:0,y:0})},[e.length]);(0,r.useEffect)(()=>{if(!u)return;let e=e=>{"Escape"===e.key&&p(),"ArrowLeft"===e.key&&x(),"ArrowRight"===e.key&&f(),("+"===e.key||"="===e.key)&&n(e=>Math.min(4,e+.5)),"-"===e.key&&n(e=>Math.max(1,e-.5))};return window.addEventListener("keydown",e),()=>window.removeEventListener("keydown",e)},[u,p,x,f]),(0,r.useEffect)(()=>(document.body.style.overflow=u?"hidden":"",()=>{document.body.style.overflow=""}),[u]);let y=(0,r.useCallback)(e=>{e.preventDefault(),n(t=>Math.min(4,Math.max(1,t-.002*e.deltaY)))},[]),v=(0,r.useCallback)(e=>{o<=1||(g(!0),b({x:e.clientX-s.x,y:e.clientY-s.y}))},[o,s]),j=(0,r.useCallback)(e=>{d&&c({x:e.clientX-m.x,y:e.clientY-m.y})},[d,m]),k=(0,r.useCallback)(()=>g(!1),[]);return 0===e.length?null:(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("div",{className:"gallery-grid",children:e.map((r,i)=>(0,t.jsxs)("button",{onClick:()=>h(i),className:"gallery-thumb","aria-label":`View ${a} image ${i+1} of ${e.length} — click to enlarge`,type:"button",children:[(0,t.jsx)("img",{src:r,alt:`${a} — photo ${i+1}`,className:"gallery-thumb-img",loading:"lazy",width:300,height:225}),(0,t.jsx)("span",{className:"gallery-thumb-overlay","aria-hidden":"true",children:(0,t.jsx)("span",{className:"gallery-zoom-icon",children:"⊕"})})]},i))}),u&&null!==i&&(0,t.jsxs)("div",{className:"lightbox-backdrop",onClick:e=>{e.target===e.currentTarget&&p()},role:"dialog","aria-modal":"true","aria-label":`Image viewer — ${a}`,children:[(0,t.jsxs)("div",{className:"lightbox-controls",children:[(0,t.jsx)("button",{onClick:()=>n(e=>Math.min(4,e+.5)),className:"lb-ctrl-btn","aria-label":"Zoom in",title:"Zoom in (+)",children:"＋"}),(0,t.jsxs)("span",{className:"lb-zoom-label","aria-live":"polite",children:[Math.round(100*o),"%"]}),(0,t.jsx)("button",{onClick:()=>n(e=>Math.max(1,e-.5)),className:"lb-ctrl-btn","aria-label":"Zoom out",title:"Zoom out (-)",children:"－"}),o>1&&(0,t.jsx)("button",{onClick:()=>{n(1),c({x:0,y:0})},className:"lb-ctrl-btn","aria-label":"Reset zoom",title:"Reset",children:"⟳"})]}),(0,t.jsx)("button",{onClick:p,className:"lightbox-close","aria-label":"Close image viewer (Escape)",children:"✕"}),e.length>1&&(0,t.jsx)("button",{onClick:x,className:"lightbox-nav lightbox-prev","aria-label":"Previous image (← arrow key)",children:"‹"}),(0,t.jsx)("div",{className:"lightbox-img-wrap",onWheel:y,onMouseDown:v,onMouseMove:j,onMouseUp:k,onMouseLeave:k,style:{cursor:o>1?d?"grabbing":"grab":"zoom-in"},children:(0,t.jsx)("img",{src:e[i],alt:`${a} — photo ${i+1}`,className:"lightbox-img",style:{transform:`scale(${o}) translate(${s.x/o}px, ${s.y/o}px)`,transition:d?"none":"transform 250ms ease"},draggable:!1})}),e.length>1&&(0,t.jsx)("button",{onClick:f,className:"lightbox-nav lightbox-next","aria-label":"Next image (→ arrow key)",children:"›"}),(0,t.jsxs)("div",{className:"lightbox-footer",children:[(0,t.jsxs)("p",{className:"lb-counter","aria-live":"polite",children:[i+1," / ",e.length]}),e.length>1&&(0,t.jsx)("div",{className:"lb-strip",children:e.map((e,r)=>(0,t.jsx)("button",{onClick:()=>h(r),className:`lb-strip-btn ${r===i?"active":""}`,"aria-label":`Go to image ${r+1}`,"aria-current":r===i?"true":void 0,children:(0,t.jsx)("img",{src:e,alt:"","aria-hidden":"true",className:"lb-strip-img"})},r))})]})]}),(0,t.jsx)("style",{children:`
        /* Thumbnail grid */
        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 0.625rem;
          margin-bottom: 2rem;
        }
        @media (min-width: 480px) {
          .gallery-grid { grid-template-columns: repeat(3, 1fr); }
        }
        .gallery-thumb {
          position: relative;
          aspect-ratio: 4/3;
          border-radius: var(--radius-md);
          overflow: hidden;
          border: none;
          padding: 0;
          cursor: pointer;
          background: var(--color-muted);
        }
        .gallery-thumb-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 350ms ease;
          display: block;
        }
        .gallery-thumb:hover .gallery-thumb-img {
          transform: scale(1.05);
        }
        .gallery-thumb-overlay {
          position: absolute;
          inset: 0;
          background: rgba(0,0,0,0);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 200ms;
        }
        .gallery-thumb:hover .gallery-thumb-overlay {
          background: rgba(0,0,0,0.35);
        }
        .gallery-zoom-icon {
          color: #fff;
          font-size: 1.75rem;
          opacity: 0;
          transition: opacity 200ms;
          text-shadow: 0 2px 8px rgba(0,0,0,0.5);
        }
        .gallery-thumb:hover .gallery-zoom-icon { opacity: 1; }

        /* Lightbox backdrop */
        .lightbox-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.93);
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        /* Close button */
        .lightbox-close {
          position: absolute;
          top: 1rem;
          right: 1rem;
          width: 42px;
          height: 42px;
          border-radius: 50%;
          background: rgba(255,255,255,0.12);
          color: #fff;
          border: 1px solid rgba(255,255,255,0.2);
          font-size: 1rem;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 10;
          transition: background 150ms;
        }
        .lightbox-close:hover { background: rgba(255,255,255,0.25); }

        /* Controls (zoom) */
        .lightbox-controls {
          position: absolute;
          top: 1rem;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          align-items: center;
          gap: 0.375rem;
          background: rgba(0,0,0,0.6);
          border-radius: var(--radius-full);
          padding: 0.25rem 0.75rem;
          z-index: 10;
        }
        .lb-ctrl-btn {
          background: rgba(255,255,255,0.12);
          border: 1px solid rgba(255,255,255,0.2);
          color: #fff;
          width: 30px;
          height: 30px;
          border-radius: 50%;
          cursor: pointer;
          font-size: 1rem;
          line-height: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 150ms;
        }
        .lb-ctrl-btn:hover { background: rgba(255,255,255,0.25); }
        .lb-zoom-label {
          color: rgba(255,255,255,0.8);
          font-size: 0.8125rem;
          min-width: 3rem;
          text-align: center;
        }

        /* Nav arrows */
        .lightbox-nav {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 52px;
          height: 52px;
          background: rgba(255,255,255,0.12);
          border: 1px solid rgba(255,255,255,0.2);
          border-radius: 50%;
          color: #fff;
          font-size: 2rem;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 10;
          transition: background 150ms;
          line-height: 1;
        }
        .lightbox-nav:hover { background: rgba(255,255,255,0.25); }
        .lightbox-prev { left: 1rem; }
        .lightbox-next { right: 1rem; }

        /* Image container */
        .lightbox-img-wrap {
          max-width: calc(100vw - 140px);
          max-height: calc(100vh - 180px);
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .lightbox-img {
          max-width: 100%;
          max-height: calc(100vh - 180px);
          object-fit: contain;
          user-select: none;
          -webkit-user-drag: none;
          border-radius: var(--radius-md);
        }

        /* Footer strip */
        .lightbox-footer {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          padding: 1rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.625rem;
          background: linear-gradient(to top, rgba(0,0,0,0.7), transparent);
        }
        .lb-counter {
          color: rgba(255,255,255,0.7);
          font-size: 0.8125rem;
          margin: 0;
        }
        .lb-strip {
          display: flex;
          gap: 0.375rem;
          overflow-x: auto;
          max-width: 90vw;
          scrollbar-width: none;
          padding-bottom: 2px;
        }
        .lb-strip::-webkit-scrollbar { display: none; }
        .lb-strip-btn {
          flex-shrink: 0;
          width: 52px;
          height: 39px;
          border-radius: 4px;
          overflow: hidden;
          border: 2px solid transparent;
          padding: 0;
          cursor: pointer;
          background: none;
          opacity: 0.55;
          transition: opacity 150ms, border-color 150ms;
        }
        .lb-strip-btn.active {
          border-color: var(--color-accent);
          opacity: 1;
        }
        .lb-strip-btn:hover:not(.active) { opacity: 0.85; }
        .lb-strip-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        @media (max-width: 480px) {
          .lightbox-nav { width: 40px; height: 40px; font-size: 1.5rem; }
          .lightbox-prev { left: 0.5rem; }
          .lightbox-next { right: 0.5rem; }
          .lightbox-img-wrap { max-width: calc(100vw - 100px); }
        }
      `})]})}])}]);