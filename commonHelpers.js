import{a as L,S as w,A as k,i as m}from"./assets/vendor-445a0bd3.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const v of s.addedNodes)v.tagName==="LINK"&&v.rel==="modulepreload"&&i(v)}).observe(document,{childList:!0,subtree:!0});function n(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(o){if(o.ep)return;o.ep=!0;const s=n(o);fetch(o.href,s)}})();const e={popupEl:document.querySelector(".header-pop-up-menu"),burgerEl:document.querySelector(".header-burger-btn"),closeBtnEl:document.querySelector(".pop-up-close-btn"),closeModalEl:document.querySelector(".pop-up-list"),closeModEl:document.querySelector(".pop-up-order-link"),openMenuEl:document.querySelector(".header-menu-list"),menuListEl:document.querySelector(".header-menu-btn"),headerSection:document.querySelector(".header"),selectThemeElem:document.querySelector("#theme-select"),heroSectionElem:document.querySelector("#hero-section"),bodyElem:document.querySelector("body"),contactForm:document.querySelector(".footer-form"),email:document.getElementById("user-email"),comments:document.getElementById("user-comment"),backdropEl:document.querySelector(".footer-backdrop"),modalEl:document.querySelector(".modal"),closeModalBtnEl:document.querySelector(".close-btn"),modalTitleEl:document.querySelector(".modal-title"),modalMessageEl:document.querySelector(".modal-message"),reviewsList:document.querySelector("#reviews-list"),swiperBtns:document.querySelector(".navigation-buttons-reviews"),loader:document.querySelector(".load-container"),upBtn:document.querySelector(".up-button"),toggleContainer:document.querySelector(".toggle-container"),toggle:document.querySelector("#theme-toggle")};L.defaults.baseURL="https://portfolio-js.b.goit.study/api/";async function M(){return(await L.get("reviews")).data}new w(".project .swiper",{loop:!1,onlyInViewport:!0,mousewheel:!0,keyboard:{enabled:!0},slidesPerView:1,spaceBetween:28,navigation:{nextEl:".swiper-button-next-project",prevEl:".swiper-button-prev-project"},speed:1e3,effect:"cube",cubeEffect:{slideShadows:!0,shadow:!1},direction:"vertical",grabCursor:!0});new w(".about .swiper",{slidesPerView:2,autoplay:{delay:1500,disableOnInteraction:!0,pauseOnMouseEnter:!0},spaceBetween:0,loop:!0,mousewheel:!0,keyboard:{enabled:!0},breakpoints:{768:{slidesPerView:3},1440:{slidesPerView:6}},navigation:{nextEl:".swiper-button-next"},speed:1e3,grabCursor:!0});new k(".about .accordion-container",{openOnInit:[0]});const p="/DevTeam5/assets/icon-error-40fa32d5.svg";function u(t,r){const n=JSON.stringify(r);localStorage.setItem(t,n)}function q(t){const r=localStorage.getItem(t);try{return JSON.parse(r)}catch{return r}}e.contactForm.addEventListener("submit",async function(t){t.preventDefault();const r=e.email.value,n=e.comments.value;if(!r||!n){m.error({title:"Error!",titleSize:"16",titleColor:"#fafafa",message:"Please fill in both fields",messageSize:"16",messageColor:"#fafafa",backgroundColor:"var(--primary-color)",theme:"dark",position:"center",closeOnEscape:!0,closeOnClick:!0,iconUrl:p});return}const i={email:r,comment:n};u("email",r),u("comment",n);try{const s=(await L.post("requests",i,{headers:{"Content-Type":"application/json"},body:JSON.stringify(i)})).data;s.error?m.error({title:"Error!",titleSize:"16",titleColor:"#fafafa",message:`${s.error}`,messageSize:"16",messageColor:"#fafafa",backgroundColor:"var(--primary-color)",theme:"dark",position:"bottomCenter",closeOnEscape:!0,closeOnClick:!0,iconUrl:p}):(localStorage.removeItem(b),e.contactForm.reset()),e.modalTitleEl.textContent=s.title,e.modalMessageEl.textContent=s.message,O()}catch(o){m.error({title:"Error!",titleSize:"16",titleColor:"#fafafa",message:`${o.message}`,messageSize:"16",messageColor:"#fafafa",backgroundColor:"var(--primary-color)",theme:"dark",position:"bottomCenter",closeOnEscape:!0,closeOnClick:!0,iconUrl:p})}});function O(){e.backdropEl.classList.add("is-open")}function y(){e.backdropEl.classList.remove("is-open")}e.closeModalBtnEl.addEventListener("click",y);document.addEventListener("keydown",t=>{t.key==="Escape"&&e.backdropEl.classList.contains("is-open")&&y()});document.addEventListener("click",t=>{t.composedPath().includes(e.modalEl)||y()});const b="feedback-form-state",h=q(b),d={email:"",comments:""};h&&(d.email=h.email,d.comments=h.comments);e.email.value=d.email;e.comments.value=d.comments;e.contactForm.addEventListener("input",t=>{d[t.target.name]=t.target.value.trim(),u(b,d)});const E="Theme",{toggle:g,bodyElem:a,heroSectionElem:l,popupEl:c}=e;document.addEventListener("DOMContentLoaded",()=>{q(E)==="blue"?(g.checked=!0,a.classList.add("theme-blue"),l.classList.add("theme-blue"),c.classList.add("theme-blue"),document.querySelector(".toggle-container").classList.remove("hidden"),document.querySelector(".order-link").classList.remove("hidden")):(a.classList.add("theme-red"),l.classList.add("theme-red"),c.classList.add("theme-red"),document.querySelector(".toggle-container").classList.remove("hidden"),document.querySelector(".order-link").classList.remove("hidden")),g.addEventListener("change",()=>{g.checked?(a.classList.remove("theme-red"),l.classList.remove("theme-red"),c.classList.remove("theme-red"),a.classList.add("theme-blue"),l.classList.add("theme-blue"),c.classList.add("theme-blue"),u(E,"blue")):(a.classList.remove("theme-blue"),l.classList.remove("theme-blue"),c.classList.remove("theme-blue"),a.classList.add("theme-red"),l.classList.add("theme-red"),c.classList.add("theme-red"),u(E,"red"))})});document.addEventListener("DOMContentLoaded",function(){new k(".faq-accordion",{duration:400,showMultiple:!0,elementClass:"faq-accordion-item",triggerClass:"question-wrapper",panelClass:"faq-accordion-panel"})});function B(t,r){const n=t.map(({avatar_url:i,author:o,review:s})=>`
    <li class="review-card swiper-slide">
      <div class="author-info">
        <img class="review-card-image" src="${i}" alt="${o}">
        <h3 class="review-author-name">${o}</h3>
      </div>
      <p class="review-text">${s}</p>
    </li>
  `).join("");r.innerHTML=n}function P(){e.loader.classList.remove("hidden")}function S(){e.loader.classList.add("hidden")}T();async function T(){try{P();const t=await M();S(),V(),B(t,e.reviewsList)}catch{S();const r=`<div class="reviews-error">
    <h3>Not found</h3>
    </div>`;e.reviewsList.insertAdjacentHTML("afterend",r),m.error({title:"Reviews not found!",titleSize:"16",titleColor:"#fafafa",messageSize:"16",messageColor:"#fafafa",backgroundColor:"var(--primary-color)",theme:"dark",position:"center",closeOnEscape:!0,closeOnClick:!0,iconUrl:p})}}function V(){e.swiperBtns.classList.remove("hidden")}new w(".reviews-container.swiper ",{navigation:{nextEl:".swiper-button-next-reviews",prevEl:".swiper-button-prev-reviews"},keyboard:{enabled:!0,onlyInViewport:!1},grabCursor:!0,loop:!1,slidesPerView:1,spaceBetween:16,breakpoints:{375:{slidesPerView:1,spaceBetween:16},768:{slidesPerView:2,spaceBetween:16},1440:{slidesPerView:4,spaceBetween:16}}});e.burgerEl.addEventListener("click",x);e.closeModalEl.addEventListener("click",f);e.closeModEl.addEventListener("click",f);function x(){e.popupEl.classList.add("is-open")}function f(){e.popupEl.classList.remove("is-open")}e.closeBtnEl.addEventListener("click",f);document.addEventListener("keydown",t=>{t.key==="Escape"&&e.popupEl.classList.contains("is-open")&&f()});function I(){e.openMenuEl.classList.toggle("is-hidden")}function C(){e.openMenuEl.classList.add("is-hidden")}e.menuListEl.addEventListener("click",I);document.addEventListener("click",t=>{t.composedPath().includes(e.menuListEl)||C()});document.addEventListener("keydown",t=>{t.key==="Escape"&&!e.openMenuEl.classList.contains("is-hidden")&&C()});function j(){window.scrollY>=700?e.upBtn.classList.remove("is-hidden"):e.upBtn.classList.add("is-hidden")}window.addEventListener("scroll",j);
//# sourceMappingURL=commonHelpers.js.map