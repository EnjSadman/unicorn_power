(this["webpackJsonpreact-typescript-starter-pack"]=this["webpackJsonpreact-typescript-starter-pack"]||[]).push([[0],{20:function(e,c,t){},21:function(e,c,t){},23:function(e,c,t){},25:function(e,c,t){},28:function(e,c,t){},29:function(e,c,t){},30:function(e,c,t){},31:function(e,c,t){},32:function(e,c,t){"use strict";t.r(c);var s=t(2),n=t.n(s),a=t(10),r=t.n(a),i=(t(20),t(21),t(3)),l=t.n(i),o=t(5),j=t(6),d=function(){var e=Object(o.a)(l.a.mark((function e(){var c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("./data.json");case 2:return c=e.sent,e.abrupt("return",c.json());case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),h=(t(23),t(0)),b=function(e){var c=e.img,t=e.name,s=e.id,n=e.price,a=e.services;return Object(h.jsxs)("div",{className:"card",id:"".concat(s),children:[Object(h.jsx)("img",{src:c,alt:t,className:"card__image"}),Object(h.jsxs)("p",{className:"card__price",children:["\xa3",n]}),Object(h.jsx)("p",{className:"card__name",children:t}),Object(h.jsx)("p",{className:"card__paragraph",children:"Ltd Company package"}),Object(h.jsx)("ul",{className:"card__list preferencesList",children:a.map((function(e){return Object(h.jsx)("li",{className:"preferencesList__item",children:e},e)}))}),Object(h.jsxs)("div",{className:"card__cashback cashback",children:[Object(h.jsx)("p",{className:"cashback__price",children:"\xa3 55"}),Object(h.jsx)("p",{className:"cashback__text",children:"Cash Back"})]}),Object(h.jsx)("button",{type:"button",className:"card__button",children:"Get started"})]})},u=(t(25),function(){var e=Object(s.useState)(null),c=Object(j.a)(e,2),t=c[0],n=c[1];return Object(s.useEffect)((function(){(function(){var e=Object(o.a)(l.a.mark((function e(){var c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d();case 2:c=e.sent,n(c.products);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(h.jsx)("div",{className:"container container--cards cardsSection",children:t&&t.map((function(e){return Object(h.jsx)(b,{img:e.img,id:e.id,name:e.name,services:e.services,price:e.price},e.id)}))})}),f=t(13),O=t(15),x=t(14),p=t(12),m=t(11),_=t(4),N=(t(28),function(){return Object(h.jsx)("footer",{children:Object(h.jsx)("div",{className:"container container--wide footer",children:Object(h.jsxs)("div",{className:"container container--regular footer__container",children:[Object(h.jsx)("a",{href:"#",className:"footer__logo logo",children:"Logo"}),Object(h.jsxs)("div",{className:"footer__links",children:[Object(h.jsx)("p",{className:"footer__links--title",children:"Useful Links"}),Object(h.jsx)("a",{href:"#",className:"footer__links--link",children:"Cookies Policy"}),Object(h.jsx)("a",{href:"#",className:"footer__links--link",children:"Terms & conditions"}),Object(h.jsx)("a",{href:"#",className:"footer__links--link",children:"Privacy policy"}),Object(h.jsx)("a",{href:"#",className:"footer__links--link",children:"Complaint Policy"}),Object(h.jsx)("a",{href:"#",className:"footer__links--link",children:"Contact Us"})]}),Object(h.jsxs)("div",{className:"footer__contacts",children:[Object(h.jsx)("p",{className:"footer__contacts--title",children:"Contact us"}),Object(h.jsx)("p",{className:"footer__contacts--paragraph",children:"Turner Little Limited Registered in England No. 3490752 Vat No. 764466206"}),Object(h.jsx)("p",{className:"footer__contacts--paragraph",children:"Office: Fanshawe House Pioneer Business Park Amy Johnson Way York YO30 4TN"}),Object(h.jsxs)("p",{className:"footer__contacts--paragraph",children:["Or message us on",Object(h.jsx)("br",{}),Object(h.jsx)("a",{href:"#",className:"footer__contacts--link",children:Object(h.jsx)(_.a,{icon:m.faWhatsapp})})," ","WhatsApp",Object(h.jsx)("br",{}),"Licensed by the Financial Conduct Authority No. 734784"]})]}),Object(h.jsxs)("div",{className:"footer__icons",children:[Object(h.jsx)("a",{href:"#",className:"footer__icons--icon",children:Object(h.jsx)(_.a,{icon:p.faInstagram})}),Object(h.jsx)("a",{href:"#",className:"footer__icons--icon",children:Object(h.jsx)(_.a,{icon:f.faBasketball})}),Object(h.jsx)("a",{href:"#",className:"footer__icons--icon",children:Object(h.jsx)(_.a,{icon:x.faTwitter})}),Object(h.jsx)("a",{href:"#",className:"footer__icons--icon",children:Object(h.jsx)(_.a,{icon:O.faYoutube})})]})]})})})}),k=t(7),v=t(9),g=t.n(v),w=(t(29),function(){var e=Object(s.useState)(null),c=Object(j.a)(e,2),t=c[0],n=c[1];return Object(h.jsxs)("header",{children:[Object(h.jsxs)("div",{className:"container--regular header container",children:[Object(h.jsx)("div",{children:Object(h.jsx)("a",{href:"#",className:"header__logo logo",children:"Logo"})}),Object(h.jsxs)("div",{className:"header__buttons",children:[Object(h.jsxs)("div",{children:[Object(h.jsxs)("button",{type:"button",className:"header__dropdown",onClick:function(){n("1"===t?null:"1")},children:["Banking\xa0",Object(h.jsx)(_.a,{icon:k.faCaretDown})]}),Object(h.jsxs)("div",{className:g()("links",{selected:"1"===t}),children:[Object(h.jsx)("a",{className:"link",href:"#",children:"link1"}),Object(h.jsx)("a",{className:"link",href:"#",children:"link2"}),Object(h.jsx)("a",{className:"link",href:"#",children:"link3"})]})]}),Object(h.jsxs)("div",{children:[Object(h.jsxs)("button",{type:"button",className:"header__dropdown",onClick:function(){n("2"===t?null:"2")},children:["About us\xa0",Object(h.jsx)(_.a,{icon:k.faCaretDown})]}),Object(h.jsxs)("div",{className:g()("links",{selected:"2"===t}),children:[Object(h.jsx)("a",{className:"link",href:"#",children:"link3"}),Object(h.jsx)("a",{className:"link",href:"#",children:"link4"}),Object(h.jsx)("a",{className:"link",href:"#",children:"link5"})]})]}),Object(h.jsx)("button",{type:"button",className:"header__button",children:"Enquire now"})]})]}),Object(h.jsxs)("div",{className:"path container container--regular",children:[Object(h.jsx)("p",{className:"path__paragraph",children:"Home /"}),Object(h.jsx)("p",{className:"path__paragraph",children:"Company Formations /"}),Object(h.jsx)("p",{className:"path__paragraph--selected",children:"Companies"})]})]})}),y=(t(30),function(){var e=Object(s.useState)(null),c=Object(j.a)(e,2),t=c[0],n=c[1];return Object(s.useEffect)((function(){(function(){var e=Object(o.a)(l.a.mark((function e(){var c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d();case 2:c=e.sent,n(c.about);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(h.jsx)("div",{className:"container container--regular textSection",children:t&&Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("p",{className:"textSection__about",children:t.text}),Object(h.jsxs)("div",{className:"textSection__list list",children:[Object(h.jsx)("p",{className:"list__title",children:t.list.title}),Object(h.jsx)("ul",{className:"list__list",children:t.list.elements.map((function(e){return Object(h.jsx)("li",{className:"list__item",children:e},e)}))})]})]})})}),C=(t(31),function(){var e=Object(s.useState)(null),c=Object(j.a)(e,2),t=c[0],n=c[1];return Object(s.useEffect)((function(){(function(){var e=Object(o.a)(l.a.mark((function e(){var c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d();case 2:c=e.sent,n(c.hero);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(h.jsx)("div",{className:"container container--full wide",children:null!==t&&Object(h.jsxs)("div",{className:"wide__text",children:[Object(h.jsx)("h1",{className:"wide__text--heading",children:t.title}),Object(h.jsx)("p",{className:"wide__text--paragraph",children:t.description})]})})}),L=function(){return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(w,{}),Object(h.jsx)(C,{}),Object(h.jsx)(y,{}),Object(h.jsx)(u,{}),Object(h.jsx)(N,{})]})};r.a.render(Object(h.jsx)(n.a.StrictMode,{children:Object(h.jsx)(L,{})}),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.b34d9522.chunk.js.map