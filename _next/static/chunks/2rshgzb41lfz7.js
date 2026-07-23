(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,516015,(e,r,t)=>{},898547,(e,r,t)=>{var i=e.i(247167);e.r(516015);var s=e.r(271645),o=s&&"object"==typeof s&&"default"in s?s:{default:s},a=void 0!==i.default&&i.default.env&&!0,l=function(e){return"[object String]"===Object.prototype.toString.call(e)},n=function(){function e(e){var r=void 0===e?{}:e,t=r.name,i=void 0===t?"stylesheet":t,s=r.optimizeForSpeed,o=void 0===s?a:s;c(l(i),"`name` must be a string"),this._name=i,this._deletedRulePlaceholder="#"+i+"-deleted-rule____{}",c("boolean"==typeof o,"`optimizeForSpeed` must be a boolean"),this._optimizeForSpeed=o,this._serverSheet=void 0,this._tags=[],this._injected=!1,this._rulesCount=0;var n="u">typeof window&&document.querySelector('meta[property="csp-nonce"]');this._nonce=n?n.getAttribute("content"):null}var r,t=e.prototype;return t.setOptimizeForSpeed=function(e){c("boolean"==typeof e,"`setOptimizeForSpeed` accepts a boolean"),c(0===this._rulesCount,"optimizeForSpeed cannot be when rules have already been inserted"),this.flush(),this._optimizeForSpeed=e,this.inject()},t.isOptimizeForSpeed=function(){return this._optimizeForSpeed},t.inject=function(){var e=this;if(c(!this._injected,"sheet already injected"),this._injected=!0,"u">typeof window&&this._optimizeForSpeed){this._tags[0]=this.makeStyleTag(this._name),this._optimizeForSpeed="insertRule"in this.getSheet(),this._optimizeForSpeed||(a||console.warn("StyleSheet: optimizeForSpeed mode not supported falling back to standard mode."),this.flush(),this._injected=!0);return}this._serverSheet={cssRules:[],insertRule:function(r,t){return"number"==typeof t?e._serverSheet.cssRules[t]={cssText:r}:e._serverSheet.cssRules.push({cssText:r}),t},deleteRule:function(r){e._serverSheet.cssRules[r]=null}}},t.getSheetForTag=function(e){if(e.sheet)return e.sheet;for(var r=0;r<document.styleSheets.length;r++)if(document.styleSheets[r].ownerNode===e)return document.styleSheets[r]},t.getSheet=function(){return this.getSheetForTag(this._tags[this._tags.length-1])},t.insertRule=function(e,r){if(c(l(e),"`insertRule` accepts only strings"),"u"<typeof window)return"number"!=typeof r&&(r=this._serverSheet.cssRules.length),this._serverSheet.insertRule(e,r),this._rulesCount++;if(this._optimizeForSpeed){var t=this.getSheet();"number"!=typeof r&&(r=t.cssRules.length);try{t.insertRule(e,r)}catch(r){return a||console.warn("StyleSheet: illegal rule: \n\n"+e+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),-1}}else{var i=this._tags[r];this._tags.push(this.makeStyleTag(this._name,e,i))}return this._rulesCount++},t.replaceRule=function(e,r){if(this._optimizeForSpeed||"u"<typeof window){var t="u">typeof window?this.getSheet():this._serverSheet;if(r.trim()||(r=this._deletedRulePlaceholder),!t.cssRules[e])return e;t.deleteRule(e);try{t.insertRule(r,e)}catch(i){a||console.warn("StyleSheet: illegal rule: \n\n"+r+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),t.insertRule(this._deletedRulePlaceholder,e)}}else{var i=this._tags[e];c(i,"old rule at index `"+e+"` not found"),i.textContent=r}return e},t.deleteRule=function(e){if("u"<typeof window)return void this._serverSheet.deleteRule(e);if(this._optimizeForSpeed)this.replaceRule(e,"");else{var r=this._tags[e];c(r,"rule at index `"+e+"` not found"),r.parentNode.removeChild(r),this._tags[e]=null}},t.flush=function(){this._injected=!1,this._rulesCount=0,"u">typeof window?(this._tags.forEach(function(e){return e&&e.parentNode.removeChild(e)}),this._tags=[]):this._serverSheet.cssRules=[]},t.cssRules=function(){var e=this;return"u"<typeof window?this._serverSheet.cssRules:this._tags.reduce(function(r,t){return t?r=r.concat(Array.prototype.map.call(e.getSheetForTag(t).cssRules,function(r){return r.cssText===e._deletedRulePlaceholder?null:r})):r.push(null),r},[])},t.makeStyleTag=function(e,r,t){r&&c(l(r),"makeStyleTag accepts only strings as second parameter");var i=document.createElement("style");this._nonce&&i.setAttribute("nonce",this._nonce),i.type="text/css",i.setAttribute("data-"+e,""),r&&i.appendChild(document.createTextNode(r));var s=document.head||document.getElementsByTagName("head")[0];return t?s.insertBefore(i,t):s.appendChild(i),i},r=[{key:"length",get:function(){return this._rulesCount}}],function(e,r){for(var t=0;t<r.length;t++){var i=r[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}(e.prototype,r),e}();function c(e,r){if(!e)throw Error("StyleSheet: "+r+".")}var d=function(e){for(var r=5381,t=e.length;t;)r=33*r^e.charCodeAt(--t);return r>>>0},u={};function f(e,r){if(!r)return"jsx-"+e;var t=String(r),i=e+t;return u[i]||(u[i]="jsx-"+d(e+"-"+t)),u[i]}function m(e,r){"u"<typeof window&&(r=r.replace(/\/style/gi,"\\/style"));var t=e+r;return u[t]||(u[t]=r.replace(/__jsx-style-dynamic-selector/g,e)),u[t]}var p=function(){function e(e){var r=void 0===e?{}:e,t=r.styleSheet,i=void 0===t?null:t,s=r.optimizeForSpeed,o=void 0!==s&&s;this._sheet=i||new n({name:"styled-jsx",optimizeForSpeed:o}),this._sheet.inject(),i&&"boolean"==typeof o&&(this._sheet.setOptimizeForSpeed(o),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._fromServer=void 0,this._indices={},this._instancesCounts={}}var r=e.prototype;return r.add=function(e){var r=this;void 0===this._optimizeForSpeed&&(this._optimizeForSpeed=Array.isArray(e.children),this._sheet.setOptimizeForSpeed(this._optimizeForSpeed),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),"u">typeof window&&!this._fromServer&&(this._fromServer=this.selectFromServer(),this._instancesCounts=Object.keys(this._fromServer).reduce(function(e,r){return e[r]=0,e},{}));var t=this.getIdAndRules(e),i=t.styleId,s=t.rules;if(i in this._instancesCounts){this._instancesCounts[i]+=1;return}var o=s.map(function(e){return r._sheet.insertRule(e)}).filter(function(e){return -1!==e});this._indices[i]=o,this._instancesCounts[i]=1},r.remove=function(e){var r=this,t=this.getIdAndRules(e).styleId;if(function(e,r){if(!e)throw Error("StyleSheetRegistry: "+r+".")}(t in this._instancesCounts,"styleId: `"+t+"` not found"),this._instancesCounts[t]-=1,this._instancesCounts[t]<1){var i=this._fromServer&&this._fromServer[t];i?(i.parentNode.removeChild(i),delete this._fromServer[t]):(this._indices[t].forEach(function(e){return r._sheet.deleteRule(e)}),delete this._indices[t]),delete this._instancesCounts[t]}},r.update=function(e,r){this.add(r),this.remove(e)},r.flush=function(){this._sheet.flush(),this._sheet.inject(),this._fromServer=void 0,this._indices={},this._instancesCounts={}},r.cssRules=function(){var e=this,r=this._fromServer?Object.keys(this._fromServer).map(function(r){return[r,e._fromServer[r]]}):[],t=this._sheet.cssRules();return r.concat(Object.keys(this._indices).map(function(r){return[r,e._indices[r].map(function(e){return t[e].cssText}).join(e._optimizeForSpeed?"":"\n")]}).filter(function(e){return!!e[1]}))},r.styles=function(e){var r,t;return r=this.cssRules(),void 0===(t=e)&&(t={}),r.map(function(e){var r=e[0],i=e[1];return o.default.createElement("style",{id:"__"+r,key:"__"+r,nonce:t.nonce?t.nonce:void 0,dangerouslySetInnerHTML:{__html:i}})})},r.getIdAndRules=function(e){var r=e.children,t=e.dynamic,i=e.id;if(t){var s=f(i,t);return{styleId:s,rules:Array.isArray(r)?r.map(function(e){return m(s,e)}):[m(s,r)]}}return{styleId:f(i),rules:Array.isArray(r)?r:[r]}},r.selectFromServer=function(){return Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]')).reduce(function(e,r){return e[r.id.slice(2)]=r,e},{})},e}(),h=s.createContext(null);function g(){return new p}function b(){return s.useContext(h)}h.displayName="StyleSheetContext";var v=o.default.useInsertionEffect||o.default.useLayoutEffect,y="u">typeof window?g():void 0;function x(e){var r=y||b();return r&&("u"<typeof window?r.add(e):v(function(){return r.add(e),function(){r.remove(e)}},[e.id,String(e.dynamic)])),null}x.dynamic=function(e){return e.map(function(e){return f(e[0],e[1])}).join(" ")},t.StyleRegistry=function(e){var r=e.registry,t=e.children,i=s.useContext(h),a=s.useState(function(){return i||r||g()})[0];return o.default.createElement(h.Provider,{value:a},t)},t.createStyleRegistry=g,t.style=x,t.useStyleRegistry=b},437902,(e,r,t)=>{r.exports=e.r(898547).style},632036,e=>{"use strict";var r=e.i(101484);e.s(["formatDate",0,function(e,t){if(!e)return"";let i=e instanceof Date?e:new Date(e),s=r.siteConfig.locale?.language||"en-IN",o=r.siteConfig.locale?.timezone||"Asia/Kolkata";return i.toLocaleDateString(s,{timeZone:o,...t})},"formatNumber",0,function(e,t){if(null==e||isNaN(e))return"0";let i=r.siteConfig.locale?.language||"en-IN";return e.toLocaleString(i,t)}])},505802,e=>{"use strict";var r=e.i(843476),t=e.i(271645);e.s(["default",0,function({items:e,renderCard:i,searchPlaceholder:s="Search…",filterGroups:o=[],itemsPerPage:a=12,noResultsText:l="No results found. Try a different search or filter.",gridCols:n=3}){let[c,d]=(0,t.useState)(""),[u,f]=(0,t.useState)({}),[m,p]=(0,t.useState)(1),h=(0,t.useMemo)(()=>{let r=c.toLowerCase().trim();return e.filter(e=>{let t=!r||e.title.toLowerCase().includes(r)||(e.description||"").toLowerCase().includes(r)||(e.tag_slugs||"").toLowerCase().includes(r)||(e.category_slugs||"").toLowerCase().replace(/-/g," ").includes(r)||e.content&&"string"==typeof e.content&&e.content.toLowerCase().includes(r),i=o.every(r=>{let t=u[r.label];return!t||"all"===t||(r.getField(e)||"").split("|").map(e=>e.trim()).includes(t)});return t&&i})},[e,c,u,o]),g=Math.max(1,Math.ceil(h.length/a)),b=Math.min(m,g),v=h.slice((b-1)*a,b*a),y=(0,t.useCallback)(e=>{d(e),p(1)},[]),x=(0,t.useCallback)((e,r)=>{f(t=>({...t,[e]:r})),p(1)},[]),_=c||Object.values(u).some(e=>e&&"all"!==e),j=(0,t.useCallback)(()=>{d(""),f({}),p(1)},[]);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{className:"lc-filter-bar",children:(0,r.jsxs)("div",{className:"container",children:[(0,r.jsxs)("div",{className:"lc-search-row",children:[(0,r.jsxs)("div",{className:"lc-search-wrap",children:[(0,r.jsx)("span",{className:"lc-search-icon","aria-hidden":"true",children:"🔍"}),(0,r.jsx)("input",{id:"listing-search",type:"search",placeholder:s,value:c,onChange:e=>y(e.target.value),"aria-label":s,className:"lc-search-input",autoComplete:"off"}),c&&(0,r.jsx)("button",{onClick:()=>y(""),className:"lc-search-clear","aria-label":"Clear search",children:"✕"})]}),_&&(0,r.jsx)("button",{onClick:j,className:"lc-clear-all-btn","aria-label":"Clear all filters",children:"✕ Clear all"})]}),o.map(e=>(0,r.jsxs)("div",{className:"lc-pill-row",role:"group","aria-label":`Filter by ${e.label}`,children:[(0,r.jsxs)("span",{className:"lc-pill-label",children:[e.label,":"]}),(0,r.jsxs)("div",{className:"lc-pills",children:[(0,r.jsx)("button",{onClick:()=>x(e.label,"all"),className:`lc-pill ${!u[e.label]||"all"===u[e.label]?"active":""}`,"aria-pressed":!u[e.label]||"all"===u[e.label],children:"All"}),e.values.map(t=>(0,r.jsx)("button",{onClick:()=>x(e.label,t),className:`lc-pill ${u[e.label]===t?"active":""}`,"aria-pressed":u[e.label]===t,children:e.labelMap?.[t]||t.replace(/-/g," ")},t))]})]},e.label))]})}),(0,r.jsx)("div",{className:"container lc-results-header",children:(0,r.jsx)("p",{className:"lc-results-count","aria-live":"polite",children:0===h.length?"No results":`Showing ${(b-1)*a+1}–${Math.min(b*a,h.length)} of ${h.length} result${1!==h.length?"s":""}`})}),(0,r.jsxs)("div",{className:"container lc-grid-wrap",children:[0===h.length?(0,r.jsxs)("div",{className:"lc-empty",children:[(0,r.jsx)("p",{style:{fontSize:"2.5rem",margin:"0 0 1rem"},children:"🔍"}),(0,r.jsx)("p",{style:{fontFamily:"var(--font-display)",fontWeight:"700",fontSize:"1.125rem",color:"var(--color-secondary)",marginBottom:"0.5rem"},children:"No results found"}),(0,r.jsx)("p",{style:{color:"var(--color-muted-fg)",marginBottom:"1.25rem",fontSize:"0.9375rem"},children:l}),(0,r.jsx)("button",{onClick:j,className:"lc-clear-all-btn",children:"✕ Clear filters"})]}):(0,r.jsx)("div",{className:`lc-grid ${2===n?"lc-grid-2":4===n?"lc-grid-4":"lc-grid-3"}`,children:v.map(e=>(0,r.jsx)("div",{children:i(e)},e.id))}),g>1&&(0,r.jsxs)("nav",{className:"lc-pagination","aria-label":"Page navigation",children:[(0,r.jsx)("button",{onClick:()=>p(e=>Math.max(1,e-1)),disabled:1===b,className:"lc-page-btn","aria-label":"Previous page",children:"← Prev"}),Array.from({length:g},(e,r)=>r+1).map(e=>(0,r.jsx)("button",{onClick:()=>p(e),className:`lc-page-btn ${b===e?"active":""}`,"aria-current":b===e?"page":void 0,children:e},e)),(0,r.jsx)("button",{onClick:()=>p(e=>Math.min(g,e+1)),disabled:b===g,className:"lc-page-btn","aria-label":"Next page",children:"Next →"})]})]}),(0,r.jsx)("style",{children:`
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
      `})]})}])},57468,e=>{"use strict";var r=e.i(843476),t=e.i(437902),i=e.i(522016),s=e.i(101484),o=e.i(632036);e.s(["default",0,function({route:e}){let a=s.siteConfig.locale.currencySymbol,l=e.title.match(/(.+?)\s+to\s+(.+?)\s+(Taxi|Cab)/i),n=l?l[1].trim():"Bangalore",c=l?l[2].trim():e.title;return(0,r.jsxs)("article",{itemScope:!0,itemType:"https://schema.org/TouristTrip",className:"jsx-69df921b3c85d3f3 route-card h-entry",children:[(0,r.jsxs)(i.default,{href:`/routes/${e.slug}`,target:"_self",title:`View route details and cab fares for ${e.title}`,className:"route-card-inner u-url","aria-label":`${e.title} — details and rates`,children:[e.thumbnail_image?(0,r.jsxs)("div",{style:{position:"relative"},className:"jsx-69df921b3c85d3f3 route-card-img-wrap",children:[(0,r.jsx)("img",{src:e.thumbnail_image,alt:`${e.title} taxi service`,title:e.title,loading:"lazy",width:400,height:225,className:"jsx-69df921b3c85d3f3 route-card-img u-photo"}),1===e.is_featured&&(0,r.jsx)("div",{style:{position:"absolute",top:"0.75rem",right:"0.75rem",zIndex:2},className:"jsx-69df921b3c85d3f3",children:(0,r.jsx)("span",{style:{background:"rgba(245,158,11,0.9)",color:"#fff",padding:"0.2rem 0.6rem",borderRadius:"var(--radius-full)",fontSize:"0.7rem",fontWeight:"700"},className:"jsx-69df921b3c85d3f3 badge badge-accent",children:"★ Featured"})})]}):(0,r.jsxs)("div",{style:{position:"relative"},className:"jsx-69df921b3c85d3f3 route-card-map",children:[(0,r.jsx)("span",{className:"jsx-69df921b3c85d3f3",children:"🗺️"}),1===e.is_featured&&(0,r.jsx)("div",{style:{position:"absolute",top:"0.75rem",right:"0.75rem",zIndex:2},className:"jsx-69df921b3c85d3f3",children:(0,r.jsx)("span",{style:{background:"rgba(245,158,11,0.9)",color:"#fff",padding:"0.2rem 0.6rem",borderRadius:"var(--radius-full)",fontSize:"0.7rem",fontWeight:"700"},className:"jsx-69df921b3c85d3f3 badge badge-accent",children:"★ Featured"})})]}),(0,r.jsxs)("div",{className:"jsx-69df921b3c85d3f3 route-card-body",children:[(0,r.jsxs)("div",{className:"jsx-69df921b3c85d3f3 route-path p-name",children:[(0,r.jsx)("span",{className:"jsx-69df921b3c85d3f3 route-city",children:n}),(0,r.jsx)("span",{className:"jsx-69df921b3c85d3f3 route-arrow",children:"→"}),(0,r.jsx)("span",{itemProp:"touristType",className:"jsx-69df921b3c85d3f3 route-city to",children:c})]}),(0,r.jsxs)("div",{className:"jsx-69df921b3c85d3f3 route-stats",children:[e.distance_km>0&&(0,r.jsxs)("span",{className:"jsx-69df921b3c85d3f3 route-stat",children:["📏 ",e.distance_km," km"]}),e.duration_hours>0&&(0,r.jsxs)("span",{className:"jsx-69df921b3c85d3f3 route-stat",children:["⏱ ~",e.duration_hours," hrs"]})]}),e.description&&(0,r.jsx)("p",{itemProp:"description",className:"jsx-69df921b3c85d3f3 route-desc e-summary",children:e.description.length>85?e.description.slice(0,85)+"…":e.description}),(0,r.jsxs)("div",{className:"jsx-69df921b3c85d3f3 route-footer",children:[e.price_from>0?(0,r.jsxs)("div",{className:"jsx-69df921b3c85d3f3 route-price",children:[(0,r.jsx)("span",{className:"jsx-69df921b3c85d3f3 route-price-label",children:"from"}),(0,r.jsxs)("span",{itemProp:"offers",className:"jsx-69df921b3c85d3f3 route-price-val",children:[a,(0,o.formatNumber)(e.price_from)]})]}):(0,r.jsx)("span",{className:"jsx-69df921b3c85d3f3 route-price-label",children:"Call for rates"}),(0,r.jsx)("span",{className:"jsx-69df921b3c85d3f3 route-cta-link",children:"View →"})]})]})]}),(0,r.jsx)(t.default,{id:"69df921b3c85d3f3",children:".route-card{border-radius:var(--radius-xl);border:1px solid var(--color-border);box-shadow:var(--shadow-md);background:#fff;height:100%;transition:transform .22s,box-shadow .22s;overflow:hidden}.route-card:hover{box-shadow:var(--shadow-xl);transform:translateY(-4px)}.route-card-inner{height:100%;color:inherit;flex-direction:column;text-decoration:none;display:flex}.route-card-img-wrap{aspect-ratio:16/9;overflow:hidden}.route-card-img{object-fit:cover;width:100%;height:100%;transition:transform .35s;display:block}.route-card:hover .route-card-img{transform:scale(1.05)}.route-card-map{aspect-ratio:16/9;background:var(--gradient-secondary);justify-content:center;align-items:center;min-height:120px;font-size:2.5rem;display:flex}.route-card-body{flex-direction:column;flex:1;gap:.5rem;padding:1.125rem;display:flex}.route-path{flex-wrap:wrap;align-items:center;gap:.4rem;display:flex}.route-city{font-family:var(--font-display);color:var(--color-secondary);font-size:1.0625rem;font-weight:700}.route-city.to{color:var(--color-primary)}.route-arrow{color:var(--color-muted-fg)}.route-stats{flex-wrap:wrap;gap:.5rem;display:flex}.route-stat{color:var(--color-muted-fg);background:var(--color-muted);border-radius:var(--radius-sm);padding:.15rem .5rem;font-size:.775rem}.route-desc{color:var(--color-muted-fg);flex:1;margin:0;font-size:.875rem;line-height:1.55}.route-footer{border-top:1px solid var(--color-border);justify-content:space-between;align-items:center;margin-top:auto;padding-top:.625rem;display:flex}.route-price{align-items:baseline;gap:.25rem;display:flex}.route-price-label{color:var(--color-muted-fg);font-size:.75rem}.route-price-val{font-family:var(--font-display);color:var(--color-primary);font-size:1.25rem;font-weight:800}.route-cta-link{color:var(--color-primary);font-size:.8125rem;font-weight:600}"})]})}])},201381,e=>{"use strict";var r=e.i(843476),t=e.i(505802),i=e.i(57468);e.s(["default",0,function({allRoutes:e,cats:s}){return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(t.default,{items:e,renderCard:e=>(0,r.jsx)(i.default,{route:e}),searchPlaceholder:"Search destination — Mysore, Coorg, Ooty, Tirupati…",filterGroups:s.length?[{label:"Type",values:s,getField:e=>e.category_slugs||""}]:[],itemsPerPage:12,gridCols:3,noResultsText:"Try a city name like Mysore, Coorg, Hampi or Tirupati."})})}])}]);