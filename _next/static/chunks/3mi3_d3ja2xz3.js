(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,476601,795018,e=>{"use strict";var r=e.i(271645),a=e.i(101484);async function t(e,r){let t=window.location.hostname,i=window.location.pathname,l="u">typeof document?document.title:"",o=document.referrer,n=new Date().toISOString(),s="u">typeof navigator?navigator.language:"en-US",c="u">typeof Intl?Intl.DateTimeFormat().resolvedOptions().timeZone:"UTC",d=null,m=null,u=null;{let e=new URLSearchParams(window.location.search);d=e.get("utm_source"),m=e.get("utm_medium"),u=e.get("utm_campaign")}let g=(r.name||"").trim().split(/\s+/),h=g[0]||"",p=g.slice(1).join(" ")||"",{name:b,...f}=r,x={firstName:h,lastName:p,...f},y={website:a.siteConfig.website.id,formId:e,version:"1.0",lead:x,meta:{hostname:t,pathname:i,pageTitle:l,referrer:o,language:s,timezone:c,timestamp:n,utmSource:d,utmMedium:m,utmCampaign:u}},v=a.siteConfig.leadHandling.apiUrl||"/api/leads";try{let e={"Content-Type":"application/json"};a.siteConfig.leadHandling.apiKey&&(e["X-Website-Key"]=a.siteConfig.leadHandling.apiKey);let r=await fetch(v,{method:"POST",headers:e,body:JSON.stringify(y)});if(!r.ok){let e=await r.json().catch(()=>({}));throw Error(e.error||`HTTP error! Status: ${r.status}`)}return await r.json()}catch(e){return console.error("Error submitting lead:",e),{success:!1,error:e instanceof Error?e.message:"Submission failed"}}}let i={contact:{enabled:!0,formId:"contact",successMessage:"Thank you. We have received your enquiry and will contact you shortly.",redirectUrl:"",allowedFields:["name","phone","email","message"]},callback:{enabled:!0,formId:"callback",successMessage:"Thank you. We will call you back shortly.",redirectUrl:"",allowedFields:["name","phone"]},booking:{enabled:!0,formId:"booking",successMessage:"Thank you. Your booking request has been submitted successfully.",redirectUrl:"",allowedFields:["name","phone","email","pickup","drop","travelDate","vehicle","message"]},quote:{enabled:!0,formId:"quote",successMessage:"Thank you. We will send your quotation shortly.",redirectUrl:"",allowedFields:["name","phone","email","service","message"]},vehicleEnquiry:{enabled:!0,formId:"vehicleEnquiry",successMessage:"Thank you. We will contact you shortly regarding this vehicle.",redirectUrl:"",allowedFields:["name","phone","email","vehicle","message"]}};e.s(["useLeadForm",0,function({formId:e,onSuccess:a,validate:l}){let[o,n]=(0,r.useState)("idle"),[s,c]=(0,r.useState)(""),[d,m]=(0,r.useState)({}),u=i[e];async function g(r,i){r.preventDefault(),n("loading"),c(""),m({});let o=new FormData(r.currentTarget),s={};if(o.forEach((e,r)=>{s[r]=e.toString()}),i&&Object.assign(s,i),l){let e=l(s);if(Object.keys(e).length>0){m(e),n("idle");return}}try{let r=await t(e,s);r.success?(n("success"),c(u.successMessage),a&&a()):(n("error"),c(r.error||"Something went wrong. Please try again or contact us directly."))}catch(e){n("error"),c("Failed to submit. Please check your connection or contact us directly.")}}return{state:o,message:s,errors:d,handleSubmit:g,reset:function(){n("idle"),c(""),m({})}}}],476601),e.s(["validateBooking",0,function(e){let r={};return e.name&&""!==e.name.trim()?e.name.trim().length<2&&(r.name="Name must be at least 2 characters."):r.name="Name is required.",e.phone&&""!==e.phone.trim()?e.phone.trim().length<10&&(r.phone="Please enter a valid phone number."):r.phone="Phone number is required.",e.email&&""!==e.email.trim()&&(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.email)||(r.email="Please enter a valid email address.")),e.pickup&&""!==e.pickup.trim()||(r.pickup="Pickup location is required."),e.drop&&""!==e.drop.trim()||(r.drop="Drop location is required."),e.travelDate&&""!==e.travelDate.trim()||(r.travelDate="Travel date is required."),r},"validateContact",0,function(e){let r={};return e.name&&""!==e.name.trim()?e.name.trim().length<2&&(r.name="Name must be at least 2 characters."):r.name="Name is required.",e.phone&&""!==e.phone.trim()?e.phone.trim().length<10&&(r.phone="Please enter a valid phone number."):r.phone="Phone number is required.",e.email&&""!==e.email.trim()&&(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.email)||(r.email="Please enter a valid email address.")),e.message&&""!==e.message.trim()||(r.message="Message is required."),r},"validateVehicleEnquiry",0,function(e){let r={};return e.name&&""!==e.name.trim()?e.name.trim().length<2&&(r.name="Name must be at least 2 characters."):r.name="Name is required.",e.phone&&""!==e.phone.trim()?e.phone.trim().length<10&&(r.phone="Please enter a valid phone number."):r.phone="Phone number is required.",e.email&&""!==e.email.trim()&&(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.email)||(r.email="Please enter a valid email address.")),r}],795018)},184122,e=>{"use strict";var r=e.i(843476),a=e.i(271645);function t({item:e,isOpen:a,onToggle:i}){return(0,r.jsxs)("div",{style:{border:"1px solid var(--color-border)",borderRadius:"var(--radius-md)",overflow:"hidden",background:"#fff",transition:"box-shadow var(--transition-base)",boxShadow:a?"var(--shadow-md)":"none"},children:[(0,r.jsxs)("button",{onClick:i,style:{width:"100%",padding:"1.125rem 1.25rem",display:"flex",alignItems:"center",justifyContent:"space-between",gap:"1rem",background:"none",border:"none",cursor:"pointer",textAlign:"left",fontWeight:"600",fontSize:"0.9375rem",color:a?"var(--color-primary)":"var(--color-secondary)",transition:"color 150ms"},"aria-expanded":a,children:[(0,r.jsx)("span",{children:e.question}),(0,r.jsx)("span",{style:{flexShrink:0,width:"28px",height:"28px",borderRadius:"var(--radius-full)",background:a?"var(--color-primary)":"var(--color-muted)",color:a?"#fff":"var(--color-muted-fg)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"1.25rem",fontWeight:"300",transition:"all 200ms",transform:a?"rotate(45deg)":"none"},children:"+"})]}),a&&(0,r.jsx)("div",{style:{padding:"0 1.25rem 1.25rem",color:"var(--color-muted-fg)",fontSize:"0.9375rem",lineHeight:"1.7",borderTop:"1px solid var(--color-border)",paddingTop:"1rem"},children:e.answer})]})}e.s(["default",0,function({faqs:e,limit:i}){let[l,o]=(0,a.useState)(e.length>0?e[0].id:null),n=i?e.slice(0,i):e;return n.length?(0,r.jsx)("div",{style:{display:"flex",flexDirection:"column",gap:"0.75rem"},children:n.map(e=>(0,r.jsx)(t,{item:e,isOpen:l===e.id,onToggle:()=>o(l===e.id?null:e.id)},e.id))}):null}])},601687,e=>{"use strict";e.s(["permalinksConfig",0,{pages:"",vehicles:"vehicles",services:"services",routes:"routes",locations:"locations",blogs:"blog",categories:"categories",tags:"tags",authors:"authors"}])},214528,e=>{"use strict";var r=e.i(843476),a=e.i(522016),t=e.i(601687),i=e.i(101484);function l({icon:e,label:a}){return(0,r.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"0.25rem",fontSize:"0.8125rem",color:"var(--color-muted-fg)"},children:[(0,r.jsx)("span",{children:e}),(0,r.jsx)("span",{children:a})]})}e.s(["default",0,function({vehicle:e,showPrice:o=!0}){let n=`/${t.permalinksConfig.vehicles}/${e.slug}`,s=i.siteConfig.locale.currencySymbol,c=e.amenities?e.amenities.split("|").slice(0,3):[];return(0,r.jsxs)("div",{className:"card",style:{height:"100%",display:"flex",flexDirection:"column"},children:[(0,r.jsxs)("div",{style:{position:"relative",aspectRatio:"4/3",overflow:"hidden"},children:[e.thumbnail_image?(0,r.jsx)("img",{src:e.thumbnail_image,alt:e.title,className:"img-cover",style:{transition:"transform 400ms ease"},onMouseEnter:e=>{e.currentTarget.style.transform="scale(1.05)"},onMouseLeave:e=>{e.currentTarget.style.transform="scale(1)"}}):(0,r.jsx)("div",{className:"img-placeholder",style:{aspectRatio:"4/3"},children:"🚗"}),e.category_slugs&&(0,r.jsx)("div",{style:{position:"absolute",top:"0.75rem",left:"0.75rem"},children:(0,r.jsx)("span",{className:"badge badge-primary",style:{textTransform:"capitalize",backdropFilter:"blur(4px)",background:"rgba(37,99,235,0.85)",color:"#fff"},children:e.category_slugs.split("|")[0].replace(/-/g," ")})}),e.is_featured?(0,r.jsx)("div",{style:{position:"absolute",top:"0.75rem",right:"0.75rem"},children:(0,r.jsx)("span",{className:"badge badge-accent",style:{background:"rgba(245,158,11,0.9)",color:"#fff"},children:"★ Featured"})}):null]}),(0,r.jsxs)("div",{className:"card-body",style:{flex:1,display:"flex",flexDirection:"column",gap:"0.75rem"},children:[(0,r.jsx)("h3",{style:{fontFamily:"var(--font-display)",fontSize:"1.0625rem",fontWeight:"700",color:"var(--color-secondary)",lineHeight:1.3},children:e.title}),(0,r.jsxs)("div",{style:{display:"flex",gap:"0.75rem",flexWrap:"wrap"},children:[(0,r.jsx)(l,{icon:"👥",label:`${e.seating_capacity} Seats`}),(0,r.jsx)(l,{icon:"🧳",label:`${e.luggage_capacity} Bags`}),"True"===e.air_conditioned&&(0,r.jsx)(l,{icon:"❄️",label:"AC"}),e.fuel_type&&(0,r.jsx)(l,{icon:"⛽",label:e.fuel_type})]}),c.length>0&&(0,r.jsx)("div",{style:{display:"flex",gap:"0.375rem",flexWrap:"wrap"},children:c.map(e=>(0,r.jsx)("span",{style:{fontSize:"0.7rem",padding:"0.2rem 0.5rem",background:"var(--color-muted)",borderRadius:"var(--radius-sm)",color:"var(--color-muted-fg)"},children:e},e))}),o&&e.airport_rate>0&&(0,r.jsxs)("div",{style:{marginTop:"auto"},children:[(0,r.jsx)("div",{style:{fontSize:"0.75rem",color:"var(--color-muted-fg)",marginBottom:"0.25rem"},children:"Airport Rate from"}),(0,r.jsxs)("div",{style:{fontFamily:"var(--font-display)",fontWeight:"800",fontSize:"1.5rem",color:"var(--color-primary)"},children:[s,e.airport_rate.toLocaleString()]})]}),(0,r.jsx)(a.default,{href:n,className:"btn btn-primary",style:{marginTop:"0.5rem",justifyContent:"center"},children:"View Details & Rates"})]})]})}])},881722,e=>{"use strict";var r=e.i(843476),a=e.i(271645);e.s(["default",0,function({images:e,altPrefix:t}){let[i,l]=(0,a.useState)(null),[o,n]=(0,a.useState)(1),[s,c]=(0,a.useState)({x:0,y:0}),[d,m]=(0,a.useState)(!1),[u,g]=(0,a.useState)({x:0,y:0}),h=null!==i,p=(0,a.useCallback)(e=>{l(e),n(1),c({x:0,y:0})},[]),b=(0,a.useCallback)(()=>{l(null),n(1),c({x:0,y:0})},[]),f=(0,a.useCallback)(()=>{l(r=>null===r?0:(r-1+e.length)%e.length),n(1),c({x:0,y:0})},[e.length]),x=(0,a.useCallback)(()=>{l(r=>null===r?0:(r+1)%e.length),n(1),c({x:0,y:0})},[e.length]);(0,a.useEffect)(()=>{if(!h)return;let e=e=>{"Escape"===e.key&&b(),"ArrowLeft"===e.key&&f(),"ArrowRight"===e.key&&x(),("+"===e.key||"="===e.key)&&n(e=>Math.min(4,e+.5)),"-"===e.key&&n(e=>Math.max(1,e-.5))};return window.addEventListener("keydown",e),()=>window.removeEventListener("keydown",e)},[h,b,f,x]),(0,a.useEffect)(()=>(document.body.style.overflow=h?"hidden":"",()=>{document.body.style.overflow=""}),[h]);let y=(0,a.useCallback)(e=>{e.preventDefault(),n(r=>Math.min(4,Math.max(1,r-.002*e.deltaY)))},[]),v=(0,a.useCallback)(e=>{o<=1||(m(!0),g({x:e.clientX-s.x,y:e.clientY-s.y}))},[o,s]),j=(0,a.useCallback)(e=>{d&&c({x:e.clientX-u.x,y:e.clientY-u.y})},[d,u]),k=(0,a.useCallback)(()=>m(!1),[]);return 0===e.length?null:(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{className:"gallery-grid",children:e.map((a,i)=>(0,r.jsxs)("button",{onClick:()=>p(i),className:"gallery-thumb","aria-label":`View ${t} image ${i+1} of ${e.length} — click to enlarge`,type:"button",children:[(0,r.jsx)("img",{src:a,alt:`${t} — photo ${i+1}`,className:"gallery-thumb-img",loading:"lazy",width:300,height:225}),(0,r.jsx)("span",{className:"gallery-thumb-overlay","aria-hidden":"true",children:(0,r.jsx)("span",{className:"gallery-zoom-icon",children:"⊕"})})]},i))}),h&&null!==i&&(0,r.jsxs)("div",{className:"lightbox-backdrop",onClick:e=>{e.target===e.currentTarget&&b()},role:"dialog","aria-modal":"true","aria-label":`Image viewer — ${t}`,children:[(0,r.jsxs)("div",{className:"lightbox-controls",children:[(0,r.jsx)("button",{onClick:()=>n(e=>Math.min(4,e+.5)),className:"lb-ctrl-btn","aria-label":"Zoom in",title:"Zoom in (+)",children:"＋"}),(0,r.jsxs)("span",{className:"lb-zoom-label","aria-live":"polite",children:[Math.round(100*o),"%"]}),(0,r.jsx)("button",{onClick:()=>n(e=>Math.max(1,e-.5)),className:"lb-ctrl-btn","aria-label":"Zoom out",title:"Zoom out (-)",children:"－"}),o>1&&(0,r.jsx)("button",{onClick:()=>{n(1),c({x:0,y:0})},className:"lb-ctrl-btn","aria-label":"Reset zoom",title:"Reset",children:"⟳"})]}),(0,r.jsx)("button",{onClick:b,className:"lightbox-close","aria-label":"Close image viewer (Escape)",children:"✕"}),e.length>1&&(0,r.jsx)("button",{onClick:f,className:"lightbox-nav lightbox-prev","aria-label":"Previous image (← arrow key)",children:"‹"}),(0,r.jsx)("div",{className:"lightbox-img-wrap",onWheel:y,onMouseDown:v,onMouseMove:j,onMouseUp:k,onMouseLeave:k,style:{cursor:o>1?d?"grabbing":"grab":"zoom-in"},children:(0,r.jsx)("img",{src:e[i],alt:`${t} — photo ${i+1}`,className:"lightbox-img",style:{transform:`scale(${o}) translate(${s.x/o}px, ${s.y/o}px)`,transition:d?"none":"transform 250ms ease"},draggable:!1})}),e.length>1&&(0,r.jsx)("button",{onClick:x,className:"lightbox-nav lightbox-next","aria-label":"Next image (→ arrow key)",children:"›"}),(0,r.jsxs)("div",{className:"lightbox-footer",children:[(0,r.jsxs)("p",{className:"lb-counter","aria-live":"polite",children:[i+1," / ",e.length]}),e.length>1&&(0,r.jsx)("div",{className:"lb-strip",children:e.map((e,a)=>(0,r.jsx)("button",{onClick:()=>p(a),className:`lb-strip-btn ${a===i?"active":""}`,"aria-label":`Go to image ${a+1}`,"aria-current":a===i?"true":void 0,children:(0,r.jsx)("img",{src:e,alt:"","aria-hidden":"true",className:"lb-strip-img"})},a))})]})]}),(0,r.jsx)("style",{children:`
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
      `})]})}])},570137,e=>{"use strict";var r=e.i(843476),a=e.i(476601),t=e.i(795018);e.s(["default",0,function({vehicleTitle:e,vehicleSlug:i}){let{state:l,message:o,errors:n,handleSubmit:s}=(0,a.useLeadForm)({formId:"vehicleEnquiry",validate:t.validateVehicleEnquiry});return(0,r.jsxs)("form",{onSubmit:r=>s(r,{vehicle_slug:i||"",vehicle_title:e||"",vehicle:e||""}),style:{display:"flex",flexDirection:"column",gap:"1rem"},id:`vehicle-enquiry-form-${i||"generic"}`,children:[(0,r.jsxs)("div",{className:"grid-2",children:[(0,r.jsxs)("div",{className:"form-group",children:[(0,r.jsx)("label",{htmlFor:"venq-name",className:"form-label",children:"Your Name *"}),(0,r.jsx)("input",{id:"venq-name",name:"name",type:"text",className:"form-input",placeholder:"John Doe",style:n.name?{borderColor:"var(--color-danger, #ef4444)"}:void 0}),n.name&&(0,r.jsx)("span",{style:{color:"var(--color-danger, #ef4444)",fontSize:"0.75rem",marginTop:"0.25rem",display:"block"},children:n.name})]}),(0,r.jsxs)("div",{className:"form-group",children:[(0,r.jsx)("label",{htmlFor:"venq-phone",className:"form-label",children:"Phone Number *"}),(0,r.jsx)("input",{id:"venq-phone",name:"phone",type:"tel",className:"form-input",placeholder:"+91 98765 43210",style:n.phone?{borderColor:"var(--color-danger, #ef4444)"}:void 0}),n.phone&&(0,r.jsx)("span",{style:{color:"var(--color-danger, #ef4444)",fontSize:"0.75rem",marginTop:"0.25rem",display:"block"},children:n.phone})]})]}),(0,r.jsxs)("div",{className:"form-group",children:[(0,r.jsx)("label",{htmlFor:"venq-email",className:"form-label",children:"Email Address"}),(0,r.jsx)("input",{id:"venq-email",name:"email",type:"email",className:"form-input",placeholder:"john@example.com",style:n.email?{borderColor:"var(--color-danger, #ef4444)"}:void 0}),n.email&&(0,r.jsx)("span",{style:{color:"var(--color-danger, #ef4444)",fontSize:"0.75rem",marginTop:"0.25rem",display:"block"},children:n.email})]}),e&&(0,r.jsxs)("div",{className:"form-group",children:[(0,r.jsx)("label",{className:"form-label",children:"Vehicle"}),(0,r.jsx)("input",{type:"text",className:"form-input",value:e,readOnly:!0,style:{background:"var(--color-muted)"}})]}),(0,r.jsxs)("div",{className:"form-group",children:[(0,r.jsx)("label",{htmlFor:"venq-message",className:"form-label",children:"Message"}),(0,r.jsx)("textarea",{id:"venq-message",name:"message",className:"form-textarea",placeholder:"I'm interested in this vehicle for...",style:{minHeight:"80px"}})]}),o&&(0,r.jsx)("div",{style:{padding:"1rem",borderRadius:"var(--radius-md)",background:"success"===l?"rgba(34,197,94,0.1)":"rgba(239,68,68,0.1)",color:"success"===l?"#15803d":"#dc2626",fontSize:"0.9rem"},children:o}),(0,r.jsx)("button",{type:"submit",className:"btn btn-primary",disabled:"loading"===l||"success"===l,children:"loading"===l?"Sending...":"success"===l?"✓ Enquiry Sent!":"Send Enquiry"})]})}])}]);