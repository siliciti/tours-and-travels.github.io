(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,184122,e=>{"use strict";var t=e.i(843476),r=e.i(271645);function i({item:e,isOpen:r,onToggle:a}){return(0,t.jsxs)("div",{style:{border:"1px solid var(--color-border)",borderRadius:"var(--radius-md)",overflow:"hidden",background:"#fff",transition:"box-shadow var(--transition-base)",boxShadow:r?"var(--shadow-md)":"none"},children:[(0,t.jsxs)("button",{onClick:a,style:{width:"100%",padding:"1.125rem 1.25rem",display:"flex",alignItems:"center",justifyContent:"space-between",gap:"1rem",background:"none",border:"none",cursor:"pointer",textAlign:"left",fontWeight:"600",fontSize:"0.9375rem",color:r?"var(--color-primary)":"var(--color-secondary)",transition:"color 150ms"},"aria-expanded":r,children:[(0,t.jsx)("span",{children:e.question}),(0,t.jsx)("span",{style:{flexShrink:0,width:"28px",height:"28px",borderRadius:"var(--radius-full)",background:r?"var(--color-primary)":"var(--color-muted)",color:r?"#fff":"var(--color-muted-fg)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"1.25rem",fontWeight:"300",transition:"all 200ms",transform:r?"rotate(45deg)":"none"},children:"+"})]}),r&&(0,t.jsx)("div",{style:{padding:"0 1.25rem 1.25rem",color:"var(--color-muted-fg)",fontSize:"0.9375rem",lineHeight:"1.7",borderTop:"1px solid var(--color-border)",paddingTop:"1rem"},children:e.answer})]})}e.s(["default",0,function({faqs:e,limit:a}){let[o,l]=(0,r.useState)(e.length>0?e[0].id:null),n=a?e.slice(0,a):e;return n.length?(0,t.jsx)("div",{style:{display:"flex",flexDirection:"column",gap:"0.75rem"},children:n.map(e=>(0,t.jsx)(i,{item:e,isOpen:o===e.id,onToggle:()=>l(o===e.id?null:e.id)},e.id))}):null}])},535738,e=>{"use strict";var t=e.i(843476),r=e.i(437902),i=e.i(271645);e.s(["default",0,function({error:e,className:a,style:o,...l}){let n=(0,i.useRef)(null),[s,c]=(0,i.useState)(!1);return(0,i.useEffect)(()=>{let e=()=>{let e=n.current;if(!e||!window.intlTelInput)return;if(e.iti)return void c(!0);let t=window.intlTelInput(e,{initialCountry:"auto",separateDialCode:!0,geoIpLookup:e=>{fetch("https://ipapi.co/json/").then(e=>e.json()).then(t=>e(t.country_code||"IN")).catch(()=>e("IN"))},utilsScript:"https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.19/js/utils.min.js"});e.iti=t,c(!0)},t="intl-tel-input-css";if(!document.getElementById(t)){let e=document.createElement("link");e.id=t,e.rel="stylesheet",e.href="https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.19/css/intlTelInput.min.css",document.head.appendChild(e)}let r="intl-tel-input-js";if(window.intlTelInput)e();else if(document.getElementById(r)){let t=setInterval(()=>{window.intlTelInput&&(clearInterval(t),e())},50)}else{let t=document.createElement("script");t.id=r,t.src="https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.19/js/intlTelInput.min.js",t.async=!0,t.onload=e,document.body.appendChild(t)}return()=>{let e=n.current;e&&e.iti&&(e.iti.destroy(),e.iti=null)}},[]),(0,t.jsxs)("div",{style:{width:"100%",position:"relative"},className:"jsx-6657a264678947d4 intl-phone-wrapper",children:[(0,t.jsx)("input",{type:"tel",ref:n,style:{width:"100%",...o},...l,className:"jsx-6657a264678947d4 "+(l&&null!=l.className&&l.className||a||"")}),(0,t.jsx)(r.default,{id:"6657a264678947d4",children:".iti{width:100%;display:block!important;position:relative!important}.iti__flag-container{z-index:10!important;align-items:center!important;padding:1px!important;display:flex!important;position:absolute!important;top:0!important;bottom:0!important;left:0!important}.iti__selected-flag{z-index:1!important;cursor:pointer!important;background-color:#ffffff05!important;border-right:1px solid #ffffff14!important;border-top-left-radius:.75rem!important;border-bottom-left-radius:.75rem!important;align-items:center!important;height:100%!important;padding:0 6px 0 12px!important;display:flex!important;position:relative!important}.iti__selected-flag:hover{background-color:#ffffff0f!important}.iti__arrow{border-top:4px solid #94a3b8!important;border-left:3px solid #0000!important;border-right:3px solid #0000!important;width:0!important;height:0!important;margin-left:6px!important}.iti__arrow--up{border-top:none!important;border-bottom:4px solid #94a3b8!important}.iti__hide{display:none!important}.iti__country-list{z-index:1000!important;text-align:left!important;color:#f1f5f9!important;-webkit-overflow-scrolling:touch!important;background-color:#0f172a!important;border:1px solid #ffffff14!important;border-radius:.75rem!important;width:280px!important;max-height:200px!important;margin:2px 0 0 -1px!important;padding:0!important;list-style:none!important;position:absolute!important;overflow-y:scroll!important;box-shadow:0 10px 15px -3px #00000080!important}.iti__country{cursor:pointer!important;outline:none!important;align-items:center!important;gap:8px!important;padding:8px 12px!important;font-family:inherit!important;font-size:.875rem!important;display:flex!important}.iti__country:hover{background-color:#1e293b!important}.iti__country.iti__highlight{background-color:#334155!important}.iti__dial-code{color:#94a3b8!important}.iti--separate-dial-code input[type=tel]{padding-left:82px}"})]})}])},618566,(e,t,r)=>{t.exports=e.r(976562)},476601,795018,e=>{"use strict";var t=e.i(271645),r=e.i(618566),i=e.i(783141);let a={contact:{enabled:!0,formId:"contact",successMessage:"Thank you. We have received your enquiry and will contact you shortly.",redirectUrl:"/thank-you",allowedFields:["name","phone","email","message"]},callback:{enabled:!0,formId:"callback",successMessage:"Thank you. We will call you back shortly.",redirectUrl:"/thank-you",allowedFields:["name","phone"]},booking:{enabled:!0,formId:"booking",successMessage:"Thank you. Your booking request has been submitted successfully.",redirectUrl:"/thank-you",allowedFields:["name","phone","email","pickup","drop","travelDate","vehicle","message"]},quote:{enabled:!0,formId:"quote",successMessage:"Thank you. We will send your quotation shortly.",redirectUrl:"/thank-you",allowedFields:["name","phone","email","service","message"]},vehicleEnquiry:{enabled:!0,formId:"vehicleEnquiry",successMessage:"Thank you. We will contact you shortly regarding this vehicle.",redirectUrl:"/thank-you",allowedFields:["name","phone","email","vehicle","message"]}};var o=e.i(809881),l=e.i(720098);e.s(["useLeadForm",0,function({formId:e,onSuccess:n,validate:s}){let[c,d]=(0,t.useState)("idle"),[m,u]=(0,t.useState)(""),[p,g]=(0,t.useState)({}),h=(0,r.useRouter)(),b=a[e];async function f(t,r){var a;if(t.preventDefault(),"loading"===c)return;let m=t.currentTarget;d("loading"),u(""),g({});let p=sessionStorage.getItem("visitor_session_start");if(p&&Date.now()-parseInt(p,10)<3e4){d("error"),u("Form submission blocked. Please browse the page for at least 30 seconds before submitting.");return}let f=new FormData(m),x={};f.forEach((e,t)=>{x[t]=e.toString()}),r&&Object.assign(x,r);let y={};s&&(y=s(x));let v=m.querySelector("input[type='tel']");if(v&&v.iti&&(v.value?.trim()||v.required)&&(v.iti.isValidNumber()?x.phone=v.iti.getNumber():y.phone="Please enter a valid phone number with correct country code."),Object.keys(y).length>0){g(y),d("idle");return}let j="";0;try{let t=await (0,i.submitLead)(e,x,j);t.success?(x.name&&(0,o.setVisitorProfile)({name:x.name,phone:x.phone,email:x.email}),(0,l.trackFormSubmitEvent)(e,x),d("success"),u(b.successMessage),m.reset(),n&&n(),b.redirectUrl&&setTimeout(()=>{h.push(b.redirectUrl)},600)):(d("error"),u(t.error||"Something went wrong. Please try again or contact us directly."))}catch(e){d("error"),u("Failed to submit. Please check your connection or contact us directly.")}}return(0,t.useEffect)(()=>{sessionStorage.getItem("visitor_session_start")||sessionStorage.setItem("visitor_session_start",String(Date.now())),sessionStorage.getItem("visitor_session_id")||sessionStorage.setItem("visitor_session_id",Math.random().toString(36).substring(2)+Date.now().toString(36)),localStorage.getItem("visitor_first_visit")||localStorage.setItem("visitor_first_visit",new Date().toISOString())},[]),(0,t.useEffect)(()=>{1},[]),(0,t.useEffect)(()=>{1},[c,e]),{state:c,message:m,errors:p,handleSubmit:f,reset:function(){d("idle"),u(""),g({})}}}],476601),e.s(["validateBooking",0,function(e){let t={};return e.name&&""!==e.name.trim()?e.name.trim().length<2&&(t.name="Name must be at least 2 characters."):t.name="Name is required.",e.phone&&""!==e.phone.trim()?e.phone.trim().length<10&&(t.phone="Please enter a valid phone number."):t.phone="Phone number is required.",e.email&&""!==e.email.trim()&&(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.email)||(t.email="Please enter a valid email address.")),e.pickup&&""!==e.pickup.trim()||(t.pickup="Pickup location is required."),e.drop&&""!==e.drop.trim()||(t.drop="Drop location is required."),e.travelDate&&""!==e.travelDate.trim()||(t.travelDate="Travel date is required."),t},"validateContact",0,function(e){let t={};return e.name&&""!==e.name.trim()?e.name.trim().length<2&&(t.name="Name must be at least 2 characters."):t.name="Name is required.",e.phone&&""!==e.phone.trim()?e.phone.trim().length<10&&(t.phone="Please enter a valid phone number."):t.phone="Phone number is required.",e.email&&""!==e.email.trim()&&(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.email)||(t.email="Please enter a valid email address.")),e.message&&""!==e.message.trim()||(t.message="Message is required."),t},"validateVehicleEnquiry",0,function(e){let t={};return e.name&&""!==e.name.trim()?e.name.trim().length<2&&(t.name="Name must be at least 2 characters."):t.name="Name is required.",e.phone&&""!==e.phone.trim()?e.phone.trim().length<10&&(t.phone="Please enter a valid phone number."):t.phone="Phone number is required.",e.email&&""!==e.email.trim()&&(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.email)||(t.email="Please enter a valid email address.")),t}],795018)},632036,e=>{"use strict";var t=e.i(101484);e.s(["formatDate",0,function(e,r){if(!e)return"";let i=e instanceof Date?e:new Date(e),a=t.siteConfig.locale?.language||"en-IN",o=t.siteConfig.locale?.timezone||"Asia/Kolkata";return i.toLocaleDateString(a,{timeZone:o,...r})},"formatNumber",0,function(e,r){if(null==e||isNaN(e))return"0";let i=t.siteConfig.locale?.language||"en-IN";return e.toLocaleString(i,r)}])},601687,e=>{"use strict";e.s(["permalinksConfig",0,{pages:"",vehicles:"vehicles",services:"services",routes:"routes",locations:"locations",blogs:"blog",media:"media",categories:"categories",tags:"tags",authors:"authors"}])},214528,e=>{"use strict";var t=e.i(843476),r=e.i(522016),i=e.i(601687),a=e.i(101484),o=e.i(632036);function l({icon:e,label:r}){return(0,t.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"0.25rem",fontSize:"0.8125rem",color:"var(--color-muted-fg)"},children:[(0,t.jsx)("span",{children:e}),(0,t.jsx)("span",{children:r})]})}e.s(["default",0,function({vehicle:e,showPrice:n=!0}){let s=`/${i.permalinksConfig.vehicles}/${e.slug}`,c=a.siteConfig.locale.currencySymbol,d=e.amenities?e.amenities.split("|").slice(0,3):[];return(0,t.jsxs)("div",{className:"card h-entry",style:{height:"100%",display:"flex",flexDirection:"column"},children:[(0,t.jsxs)("div",{style:{position:"relative",aspectRatio:"4/3",overflow:"hidden"},children:[e.thumbnail_image?(0,t.jsx)("img",{src:e.thumbnail_image,alt:`${e.title} rental in ${a.siteConfig.address.city}`,title:e.title,className:"img-cover u-photo",loading:"lazy",width:400,height:300,style:{transition:"transform 400ms ease"},onMouseEnter:e=>{e.currentTarget.style.transform="scale(1.05)"},onMouseLeave:e=>{e.currentTarget.style.transform="scale(1)"}}):(0,t.jsx)("div",{className:"img-placeholder",style:{aspectRatio:"4/3"},children:"🚗"}),e.category_slugs&&(0,t.jsx)("div",{style:{position:"absolute",top:"0.75rem",left:"0.75rem"},children:(0,t.jsx)("span",{className:"badge badge-primary p-category",style:{textTransform:"capitalize",backdropFilter:"blur(4px)",background:"rgba(37,99,235,0.85)",color:"#fff"},children:e.category_slugs.split("|")[0].replace(/-/g," ")})}),e.is_featured?(0,t.jsx)("div",{style:{position:"absolute",top:"0.75rem",right:"0.75rem"},children:(0,t.jsx)("span",{className:"badge badge-accent",style:{background:"rgba(245,158,11,0.9)",color:"#fff"},children:"★ Featured"})}):null]}),(0,t.jsxs)("div",{className:"card-body",style:{flex:1,display:"flex",flexDirection:"column",gap:"0.75rem"},children:[(0,t.jsx)("h3",{className:"p-name",style:{fontFamily:"var(--font-display)",fontSize:"1.0625rem",fontWeight:"700",color:"var(--color-secondary)",lineHeight:1.3},children:e.title}),(0,t.jsxs)("div",{className:"e-summary",style:{display:"flex",gap:"0.75rem",flexWrap:"wrap"},children:[(0,t.jsx)(l,{icon:"👥",label:`${e.seating_capacity} Seats`}),(0,t.jsx)(l,{icon:"🧳",label:`${e.luggage_capacity} Bags`}),"True"===e.air_conditioned&&(0,t.jsx)(l,{icon:"❄️",label:"AC"}),e.fuel_type&&(0,t.jsx)(l,{icon:"⛽",label:e.fuel_type})]}),d.length>0&&(0,t.jsx)("div",{style:{display:"flex",gap:"0.375rem",flexWrap:"wrap"},children:d.map(e=>(0,t.jsx)("span",{style:{fontSize:"0.7rem",padding:"0.2rem 0.5rem",background:"var(--color-muted)",borderRadius:"var(--radius-sm)",color:"var(--color-muted-fg)"},children:e},e))}),n&&e.airport_rate>0&&(0,t.jsxs)("div",{style:{marginTop:"auto"},children:[(0,t.jsx)("div",{style:{fontSize:"0.75rem",color:"var(--color-muted-fg)",marginBottom:"0.25rem"},children:"Airport Rate from"}),(0,t.jsxs)("div",{style:{fontFamily:"var(--font-display)",fontWeight:"800",fontSize:"1.5rem",color:"var(--color-primary)"},children:[c,(0,o.formatNumber)(e.airport_rate)]})]}),(0,t.jsx)(r.default,{href:s,target:"_self",title:`View details and rates for ${e.title}`,className:"btn btn-primary u-url",style:{marginTop:"0.5rem",justifyContent:"center"},children:"View Details & Rates"})]})]})}])},881722,e=>{"use strict";var t=e.i(843476),r=e.i(271645);e.s(["default",0,function({images:e,altPrefix:i}){let[a,o]=(0,r.useState)(null),[l,n]=(0,r.useState)(1),[s,c]=(0,r.useState)({x:0,y:0}),[d,m]=(0,r.useState)(!1),[u,p]=(0,r.useState)({x:0,y:0}),g=null!==a,h=(0,r.useCallback)(e=>{o(e),n(1),c({x:0,y:0})},[]),b=(0,r.useCallback)(()=>{o(null),n(1),c({x:0,y:0})},[]),f=(0,r.useCallback)(()=>{o(t=>null===t?0:(t-1+e.length)%e.length),n(1),c({x:0,y:0})},[e.length]),x=(0,r.useCallback)(()=>{o(t=>null===t?0:(t+1)%e.length),n(1),c({x:0,y:0})},[e.length]);(0,r.useEffect)(()=>{if(!g)return;let e=e=>{"Escape"===e.key&&b(),"ArrowLeft"===e.key&&f(),"ArrowRight"===e.key&&x(),("+"===e.key||"="===e.key)&&n(e=>Math.min(4,e+.5)),"-"===e.key&&n(e=>Math.max(1,e-.5))};return window.addEventListener("keydown",e),()=>window.removeEventListener("keydown",e)},[g,b,f,x]),(0,r.useEffect)(()=>(document.body.style.overflow=g?"hidden":"",()=>{document.body.style.overflow=""}),[g]);let y=(0,r.useCallback)(e=>{e.preventDefault(),n(t=>Math.min(4,Math.max(1,t-.002*e.deltaY)))},[]),v=(0,r.useCallback)(e=>{l<=1||(m(!0),p({x:e.clientX-s.x,y:e.clientY-s.y}))},[l,s]),j=(0,r.useCallback)(e=>{d&&c({x:e.clientX-u.x,y:e.clientY-u.y})},[d,u]),k=(0,r.useCallback)(()=>m(!1),[]);return 0===e.length?null:(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("div",{className:"gallery-grid",children:e.map((r,a)=>(0,t.jsxs)("button",{onClick:()=>h(a),className:"gallery-thumb","aria-label":`View ${i} image ${a+1} of ${e.length} — click to enlarge`,type:"button",children:[(0,t.jsx)("img",{src:r,alt:`${i} — photo ${a+1}`,className:"gallery-thumb-img",loading:"lazy",width:300,height:225}),(0,t.jsx)("span",{className:"gallery-thumb-overlay","aria-hidden":"true",children:(0,t.jsx)("span",{className:"gallery-zoom-icon",children:"⊕"})})]},a))}),g&&null!==a&&(0,t.jsxs)("div",{className:"lightbox-backdrop",onClick:e=>{e.target===e.currentTarget&&b()},role:"dialog","aria-modal":"true","aria-label":`Image viewer — ${i}`,children:[(0,t.jsxs)("div",{className:"lightbox-controls",children:[(0,t.jsx)("button",{onClick:()=>n(e=>Math.min(4,e+.5)),className:"lb-ctrl-btn","aria-label":"Zoom in",title:"Zoom in (+)",children:"＋"}),(0,t.jsxs)("span",{className:"lb-zoom-label","aria-live":"polite",children:[Math.round(100*l),"%"]}),(0,t.jsx)("button",{onClick:()=>n(e=>Math.max(1,e-.5)),className:"lb-ctrl-btn","aria-label":"Zoom out",title:"Zoom out (-)",children:"－"}),l>1&&(0,t.jsx)("button",{onClick:()=>{n(1),c({x:0,y:0})},className:"lb-ctrl-btn","aria-label":"Reset zoom",title:"Reset",children:"⟳"})]}),(0,t.jsx)("button",{onClick:b,className:"lightbox-close","aria-label":"Close image viewer (Escape)",children:"✕"}),e.length>1&&(0,t.jsx)("button",{onClick:f,className:"lightbox-nav lightbox-prev","aria-label":"Previous image (← arrow key)",children:"‹"}),(0,t.jsx)("div",{className:"lightbox-img-wrap",onWheel:y,onMouseDown:v,onMouseMove:j,onMouseUp:k,onMouseLeave:k,style:{cursor:l>1?d?"grabbing":"grab":"zoom-in"},children:(0,t.jsx)("img",{src:e[a],alt:`${i} — photo ${a+1}`,className:"lightbox-img",style:{transform:`scale(${l}) translate(${s.x/l}px, ${s.y/l}px)`,transition:d?"none":"transform 250ms ease"},draggable:!1})}),e.length>1&&(0,t.jsx)("button",{onClick:x,className:"lightbox-nav lightbox-next","aria-label":"Next image (→ arrow key)",children:"›"}),(0,t.jsxs)("div",{className:"lightbox-footer",children:[(0,t.jsxs)("p",{className:"lb-counter","aria-live":"polite",children:[a+1," / ",e.length]}),e.length>1&&(0,t.jsx)("div",{className:"lb-strip",children:e.map((e,r)=>(0,t.jsx)("button",{onClick:()=>h(r),className:`lb-strip-btn ${r===a?"active":""}`,"aria-label":`Go to image ${r+1}`,"aria-current":r===a?"true":void 0,children:(0,t.jsx)("img",{src:e,alt:"","aria-hidden":"true",className:"lb-strip-img"})},r))})]})]}),(0,t.jsx)("style",{children:`
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
      `})]})}])},570137,e=>{"use strict";var t=e.i(843476),r=e.i(476601),i=e.i(795018),a=e.i(535738);e.s(["default",0,function({vehicleTitle:e,vehicleSlug:o}){let{state:l,message:n,errors:s,handleSubmit:c}=(0,r.useLeadForm)({formId:"vehicleEnquiry",validate:i.validateVehicleEnquiry});return(0,t.jsxs)("form",{onSubmit:t=>{let r={};o&&(r.vehicle_slug=o),e&&(r.vehicle_title=e,r.vehicle=e),c(t,r)},style:{display:"flex",flexDirection:"column",gap:"1rem"},id:`vehicle-enquiry-form-${o||"generic"}`,children:[(0,t.jsxs)("div",{className:"grid-2",children:[(0,t.jsxs)("div",{className:"form-group",children:[(0,t.jsx)("label",{htmlFor:"venq-name",className:"form-label",children:"Your Name *"}),(0,t.jsx)("input",{id:"venq-name",name:"name",type:"text",className:"form-input",placeholder:"John Doe",style:s.name?{borderColor:"var(--color-danger, #ef4444)"}:void 0}),s.name&&(0,t.jsx)("span",{style:{color:"var(--color-danger, #ef4444)",fontSize:"0.75rem",marginTop:"0.25rem",display:"block"},children:s.name})]}),(0,t.jsxs)("div",{className:"form-group",children:[(0,t.jsx)("label",{htmlFor:"venq-phone",className:"form-label",children:"Phone Number *"}),(0,t.jsx)(a.default,{id:"venq-phone",name:"phone",className:"form-input",placeholder:"98765 43210",required:!0,style:s.phone?{borderColor:"var(--color-danger, #ef4444)"}:void 0}),s.phone&&(0,t.jsx)("span",{style:{color:"var(--color-danger, #ef4444)",fontSize:"0.75rem",marginTop:"0.25rem",display:"block"},children:s.phone})]})]}),(0,t.jsxs)("div",{className:"form-group",children:[(0,t.jsx)("label",{htmlFor:"venq-email",className:"form-label",children:"Email Address"}),(0,t.jsx)("input",{id:"venq-email",name:"email",type:"email",className:"form-input",placeholder:"john@example.com",style:s.email?{borderColor:"var(--color-danger, #ef4444)"}:void 0}),s.email&&(0,t.jsx)("span",{style:{color:"var(--color-danger, #ef4444)",fontSize:"0.75rem",marginTop:"0.25rem",display:"block"},children:s.email})]}),e&&(0,t.jsxs)("div",{className:"form-group",children:[(0,t.jsx)("label",{className:"form-label",children:"Vehicle"}),(0,t.jsx)("input",{type:"text",className:"form-input",value:e,readOnly:!0,style:{background:"var(--color-muted)"}})]}),(0,t.jsxs)("div",{className:"form-group",children:[(0,t.jsx)("label",{htmlFor:"venq-message",className:"form-label",children:"Message"}),(0,t.jsx)("textarea",{id:"venq-message",name:"message",className:"form-textarea",placeholder:"I'm interested in this vehicle for...",style:{minHeight:"80px"}})]}),n&&(0,t.jsx)("div",{style:{padding:"1rem",borderRadius:"var(--radius-md)",background:"success"===l?"rgba(34,197,94,0.1)":"rgba(239,68,68,0.1)",color:"success"===l?"#15803d":"#dc2626",fontSize:"0.9rem"},children:n}),(0,t.jsx)("button",{type:"submit",className:"btn btn-primary",disabled:"loading"===l||"success"===l,children:"loading"===l?"Sending...":"success"===l?"✓ Enquiry Sent!":"Send Enquiry"})]})}])}]);