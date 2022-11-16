(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{40:function(e,t,i){},44:function(e,t,i){},45:function(e,t,i){},47:function(e,t,i){},48:function(e,t,i){},49:function(e,t,i){},50:function(e,t,i){},51:function(e,t,i){},52:function(e,t,i){},53:function(e,t,i){},54:function(e,t,i){},56:function(e,t,i){"use strict";i.r(t);var a=i(23),n=i(4),c=i(0),s=i(33),r=i(3),o=i(1),l=Object(c.createContext)(),d=function(e){var t=e.children,i=Object(c.useState)("light"),a=Object(n.a)(i,2),s=a[0],r=a[1];Object(c.useEffect)((function(){var e=window.matchMedia("(prefers-color-scheme: dark)");r(e.matches?"dark":"light")}),[]);return console.log(s),Object(o.jsx)(l.Provider,{value:[{themeName:s,toggleTheme:function(){var e="dark"===s?"light":"dark";localStorage.setItem("themeName",e),r(e)}}],children:t})},h=i.p+"static/media/test.29351b0e.mp4",j=i.p+"static/media/FoodSafety.322b0c2f.mp4",m=i.p+"static/media/website.74e9d52f.mp4",b=i.p+"static/media/bubble.4d8a5a65.mp4",u="https://jimmycreative.github.io/",p="JY.",g=[{name:"Jiun Chi Yang",role:"Full Stack Engineer",description:"I am Jimmy from Taiwan. I am currently a senior-year university student and I have several experiences in start-ups and big tech companies. I love developing helpful software with my creative ideas to make this a world better place. I aim to become an influencer by providing technical solutions to turn impossible ideas into reality.",resume:"https://example.com",social:{linkedin:"https://linkedin.com",github:"https://github.com/Jimmycreative"}}],f=[{name:"Food Ingredient Intelligent Quality Tracker",description:"An app for restaurant chains to manage the ingredients with Optical Character Recognition for recording the items\u2019 expiration date and barcode scanner to checking the items\u2019 existence in the system.",stack:["React-Native","Golang","Docker"],sourceCode:"https://gitfront.io/r/user-9948569/2Vz6drtCFNJt/iFoodSafety-frontend/",livePreview:"",video:j},{name:"Production Job Shop Scheduling Software System",description:"A web-based job-shop scheduling software including a planner to define the schedules using our self-developed script language and a manager to track the progress with the gantt-chart. Managers can assign tasks for planners to define schedules by sending messages on this website. Our script language supports 4 types of JSSP according to the different input data. Moreover, it provides the flexibility of defining decision variables and constraints using linear expressions. This software mainly targets on manufacturers",stack:["React.js","Python","Java(Magic API)","Google-OR-tools"],sourceCode:"https://github.com/Jimmycreative/2021_grp_Team07",livePreview:"",video:h},{name:"Bubble Bobble",description:"A game development for training software engineering techniques by practicing design pattern such as MVC, State Pattern, Observer Pattern, etc. Moreover, this project aims to practice refactoring ability replacing Swing with JavaFx and adding meaningful JUnit Tests.",stack:["Java","Javadoc","Design Pattern","JavaFx","Maven"],sourceCode:"https://github.com/Jimmycreative/GameDev",livePreview:"",video:b},{name:"Side Project Commercial Website",description:"Building a commercial website for practicing the CSS style with images and videos",stack:["React.js","CSS","HTML"],sourceCode:"https://github.com/Jimmycreative/website",livePreview:"",video:m}],v=i(30),O=i.n(v),x=i(28),k=i.n(x),y=(i(40),function(){var e=Object(c.useContext)(l),t=Object(n.a)(e,1)[0],i=(t.themeName,t.toggleTheme,Object(c.useState)(!1)),a=Object(n.a)(i,2),s=a[0],r=a[1],d=function(){return r(!s)};return Object(o.jsxs)("nav",{className:"center nav",children:[Object(o.jsxs)("ul",{style:{display:s?"flex":null},className:"nav__list",children:[g.length?Object(o.jsx)("li",{className:"nav__list-item",children:Object(o.jsx)("a",{href:"/portfolio",onClick:d,className:"link link--nav",children:"Home"})}):null,f.length?Object(o.jsx)("li",{className:"nav__list-item",children:Object(o.jsx)("a",{href:"/project",onClick:d,className:"link link--nav",children:"Project"})}):null]}),Object(o.jsx)("button",{type:"button",onClick:d,className:"btn btn--icon nav__hamburger","aria-label":"toggle navigation",children:s?Object(o.jsx)(k.a,{}):Object(o.jsx)(O.a,{})})]})}),N=(i(44),function(){var e=u,t=p;return Object(o.jsxs)("header",{className:"header center",children:[Object(o.jsx)("h3",{children:e?Object(o.jsx)("a",{href:e,className:"link",children:t}):t}),Object(o.jsx)(y,{})]})}),w=i(24),_=i.n(w),C=(i(45),function(){var e=g[0],t=e.name,i=e.role,a=e.description,n=(e.resume,e.social);return Object(o.jsxs)("div",{className:"about center",children:[t&&Object(o.jsxs)("h1",{children:["Hi, I am ",Object(o.jsxs)("span",{className:"about__name",children:[t,"."]})]}),i&&Object(o.jsxs)("h2",{className:"about__role",children:["A ",i,"."]}),Object(o.jsx)("p",{className:"about__desc",children:a&&a}),Object(o.jsx)("div",{className:"about__contact center",children:n&&Object(o.jsx)(o.Fragment,{children:n.github&&Object(o.jsx)("a",{href:n.github,"aria-label":"github",className:"link link--icon",children:Object(o.jsx)(_.a,{})})})})]})}),J=i(14),S=i.n(J),P=i(31),I=i.n(P),T=(i(47),function(e){var t=e.project;return Object(o.jsxs)("div",{className:"project",children:[Object(o.jsxs)("div",{children:[t.video?Object(o.jsx)("video",{style:{width:654,height:500},src:t.video,autoPlay:!0,loop:!0,muted:!0}):Object(o.jsx)("img",{style:{width:654,height:500},src:t.image,alt:"Logo"}),";"]}),Object(o.jsxs)("div",{style:{marginLeft:10,marginTop:150},children:[Object(o.jsx)("h3",{children:t.name}),Object(o.jsx)("p",{className:"project__description",children:t.description}),t.stack&&Object(o.jsx)("ul",{className:"project__stack",children:t.stack.map((function(e){return Object(o.jsx)("li",{className:"project__stack-item",children:e},S()())}))}),t.sourceCode&&Object(o.jsx)("a",{href:t.sourceCode,"aria-label":"source code",className:"link link--icon",children:Object(o.jsx)(_.a,{})}),t.livePreview&&Object(o.jsx)("a",{href:t.livePreview,"aria-label":"live preview",className:"link link--icon",children:Object(o.jsx)(I.a,{})})]})]})}),F=(i(48),function(){if(!f.length)return null;var e=Object(c.useContext)(l),t=Object(n.a)(e,1)[0].themeName;return console.log(t),Object(o.jsxs)("section",{id:"projects",children:[Object(o.jsx)("h1",{className:"section__title",children:"Projects"}),Object(o.jsx)("div",{className:"projects__grid2",children:f.map((function(e){return Object(o.jsx)(T,{project:e},S()())}))})]})}),M=(i(49),i(32),i(50),i(51),i(52),function(){return Object(o.jsx)("footer",{className:"footer",children:Object(o.jsx)("a",{href:"https://github.com/rajshekhar26/cleanfolio",className:"link footer__link",children:"Created By Jiun Chi Yang"})})}),A=(i(53),function(){var e=Object(c.useContext)(l),t=Object(n.a)(e,1)[0].themeName;return console.log(t),Object(o.jsxs)("div",{id:"top",className:"light app",children:[Object(o.jsx)(N,{}),Object(o.jsx)(s.a,{basename:"/",children:Object(o.jsxs)(r.c,{children:[Object(o.jsx)(r.a,{path:"/portfolio",element:Object(o.jsx)(C,{})}),Object(o.jsx)(r.a,{path:"/project",element:Object(o.jsx)(F,{})})]})}),Object(o.jsx)(M,{})]})});i(54);Object(a.render)(Object(o.jsx)(d,{children:Object(o.jsx)(A,{})}),document.getElementById("root"))}},[[56,1,2]]]);
//# sourceMappingURL=main.006f48e1.chunk.js.map