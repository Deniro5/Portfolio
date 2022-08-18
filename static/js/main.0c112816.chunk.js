(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{150:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(45),i=a.n(r),c=a(11),s=a(3),l=a(10),m=a(51),d=a.n(m),u=(a(57),function(e){return o.a.createElement("div",{className:"homeContainer"},o.a.createElement("div",{className:"homeContent"},o.a.createElement("div",{className:"fadeDown"},o.a.createElement("h1",{className:"homeName"}," Dean Towheed "),o.a.createElement("h2",{className:"homeSubName"}," Front End Developer")),o.a.createElement("div",{className:"fadeUp"},o.a.createElement("h2",{className:"homeSubText"},"Hello and welcome to my personal portfolio. Click on one of the buttons below to get started or navigate using the header at the top of the page."),o.a.createElement(s.b,{to:"/about"},o.a.createElement("button",{onClick:function(){e.setCurrent("about")}},"Read More")),o.a.createElement(s.b,{to:"/projects"},o.a.createElement("button",{onClick:function(){e.setCurrent("projects")}},"View Projects")))))}),h=function(e){return o.a.createElement("div",{className:"footerContainer"},o.a.createElement("p",null," Dean Towheed \xa9 2020. All rights reserved. "))},p=function(e){var t=e.current,a=e.setCurrent;return Object(n.useEffect)(function(){var e=window.location.href.split("/"),t=e[e.length-1];a(t)}),o.a.createElement("div",{className:"headerContainer"},o.a.createElement(s.b,{onClick:function(){a("")},to:"/"},o.a.createElement("p",{className:"headerItem "+(""===t?"selected":"")}," Home ")),o.a.createElement(s.b,{onClick:function(){a("about")},to:"/about"},o.a.createElement("p",{className:"headerItem "+("about"===t?"selected":"")}," About ")),o.a.createElement(s.b,{onClick:function(){a("projects")},to:"/projects"},o.a.createElement("p",{className:"headerItem "+("projects"===t?"selected":"")}," ","Projects"," ")),o.a.createElement(s.b,{onClick:function(){a("contact")},to:"/contact"},o.a.createElement("p",{className:"headerItem "+("contact"===t?"selected":"")}," ","Contact"," ")))},g={color:"white"},b=[{name:"HTML",img:"imgs/html.png"},{name:"CSS/SASS",img:"imgs/css.png"},{name:"Typescript",img:"imgs/typescript.png"},{name:"React",img:"imgs/react.png"},{name:"Redux",img:"imgs/redux.png"},{name:"Node.js",img:"imgs/node.png"},{name:"Git",img:"imgs/git.png"},{name:"ES6",img:"imgs/es6.png"}],E=function(e){return o.a.createElement("div",{className:"aboutContainer2"},o.a.createElement("div",{className:"aboutImgContainer2"},o.a.createElement("img",{alt:"portrait",src:"imgs/edited.jpg"})),o.a.createElement("div",{className:"titleContainer"},o.a.createElement("h1",{className:"aboutName2"}," Dean Towheed "),o.a.createElement("h2",{className:"aboutSubtitle2"}," (Front End Developer)")),o.a.createElement("div",{className:"aboutTextContainer2"},o.a.createElement("h1",{style:{fontSize:"28px",marginBottom:"20px",color:"white"},className:"aboutName2"},"Who am I?"),o.a.createElement("div",{className:"showcaseDivider"}),o.a.createElement("p",null,"Hi! My name is Dean. I was born London, England but moved to Ajax, Ontario at the age of 10 where it\u2019s been home since. I\u2019ve been programming for over 10 years and hold a Bachelor's Degree in Computer Science from the University of Toronto. It was during my undergraduate tenure that I discovered my love for front end development which allows me to pursue my dream of creating high quality applications that can benefit a variety of different users. Since then I have devoted my time to developing various projects and strengthening my skills as a Front End Developer. When I\u2019m not coding, I\u2019m either playing sports, spending time with family or enjoying nature."),o.a.createElement("p",null," ","To view recent samples of my work, feel free to browse the"," ",o.a.createElement(s.b,{style:g,to:"/projects"}," ","Projects"," ")," ","page. If you have any questions or just want to chat about all things computer science, please contact me at deantowheed5@gmail.com."," ")),o.a.createElement("h1",{style:{fontSize:"28px",marginBottom:"20px"},className:"aboutName2"},"Main Skills"),o.a.createElement("div",{className:"showcaseDivider"}),o.a.createElement("div",{className:"skillContainer"},b.map(function(e){return o.a.createElement("div",{className:"skill"},o.a.createElement("img",{alt:"icon",src:e.img}),o.a.createElement("p",null," ",e.name," "))})))},f=function(e){var t=Object(n.useState)(""),a=Object(c.a)(t,2),r=a[0],i=a[1],s=Object(n.useState)(""),l=Object(c.a)(s,2),m=l[0],d=l[1],u=Object(n.useState)(""),h=Object(c.a)(u,2),p=h[0],g=h[1];return o.a.createElement("div",{className:"uploadContainer"},o.a.createElement("h1",{id:"contactTitle"}," Get in Touch "),o.a.createElement("p",{className:"subTitle"}," ","Fill out the form below if you have any questions. I will get back to you as soon as possible."," "),o.a.createElement("form",{className:"fieldContainer"},o.a.createElement("input",{type:"text",placeholder:"Email",value:r,onChange:function(e){return i(e.target.value)}}),o.a.createElement("input",{type:"text",placeholder:"Subject",value:m,onChange:function(e){return d(e.target.value)}}),o.a.createElement("textarea",{placeholder:"Write your message here...",value:p,onChange:function(e){return g(e.target.value)}})),o.a.createElement("button",{onClick:function(e){alert("This action is not supported yet. Please contact me at deantowheed5@gmail.com instead")}.bind(void 0)}," Submit "))},v=a(48),k=a.n(v),w=a(50),y=a.n(w),C=function(e){var t=e.projects,a=Object(n.useState)(0),r=Object(c.a)(a,2),i=r[0],s=r[1],l=t[i],m=l.imgsrc,d=l.title,u=l.link,h=l.description,p=l.src;return o.a.createElement("div",null,o.a.createElement("div",{className:"slideshowContainer"},o.a.createElement("p",{onClick:function(){s(0===i?t.length-1:i-1)},id:"prev"},o.a.createElement(k.a,null)),o.a.createElement("p",{onClick:function(){i===t.length-1?s(0):s(i+1)},id:"next"},o.a.createElement(y.a,null)),o.a.createElement("div",{className:"slideshowImgContainer"},o.a.createElement("a",{href:u},o.a.createElement("img",{alt:"Project",src:m}))),o.a.createElement("div",{className:"slideshowTextContainer"},o.a.createElement("a",{id:"title",href:u},d),o.a.createElement("p",null," ",h," "),o.a.createElement("p",{style:{color:"white"}},o.a.createElement("b",null,"Demo:"),o.a.createElement("a",{style:{display:"block",color:"lightgrey"},href:u},u)),o.a.createElement("p",{style:{color:"white"}},o.a.createElement("b",null,"Source Code:"),o.a.createElement("a",{style:{display:"block",color:"lightgrey"},href:p},p)))),o.a.createElement("div",{id:"slideBtnContainer"},t.map(function(e,t){return o.a.createElement("img",{onClick:function(){s(t)},className:"slideBtns"+(t===i?" selectedSlide":""),src:e.imgsrc})})))},N=[{src:"https://github.com/Deniro5/blogsite",link:"https://blog55555.herokuapp.com",imgsrc:"imgs/blog.png",title:"Blogging Site",description:"Users can create articles and read, like and comment on articles posted by other users. Can follow other users and have followed users articles displayed in the custom feed. Made using React, Node.js, MongoDb and Express."},{src:"https://github.com/Deniro5/Gram",link:"https://rocky-lake-89848.herokuapp.com",imgsrc:"imgs/gram.png",title:"Instagram Inspired Site",description:"Social media website. Follow users, post content, like/comment on other posts and more. Made using React, Node.js, MongoDb and Express"},{src:"https://github.com/Deniro5/Tetris",link:"https://deniro5.github.io/Tetris",imgsrc:"imgs/tetris.png",title:"Tetris",description:"Classic game of Tetris. Made with React.             "},{src:"https://github.com/Deniro5/clothingStore",link:"https://deniro5.github.io/clothingStore",imgsrc:"imgs/ecommerce.png",title:"Clothing Store Template",description:"Mock clothing store. Search for items using the search bar or browse through the store using the header items. Can select different styles/sizes of each product."},{src:"https://github.com/Deniro5/dungeoncrawler",link:"https://deniro5.github.io/dungeoncrawler",imgsrc:"imgs/dungeoncrawler.png",title:"Dungeon Crawler",description:"2D dungeon crawler game. Made with React."},{src:"https://github.com/Deniro5/Clinic",link:"https://deniro5.github.io/Clinic",imgsrc:"imgs/clinic.png",title:"Clinic Template",description:"Clinic Website Template. View information about the clinic and it's doctors. Contact the clinic about any inquiries."},{src:"https://github.com/Deniro5/Playbook",link:"https://deniro5.github.io/Playbook",imgsrc:"imgs/playbook.png",title:"Football Playbook Creator",description:"Website that allows users to create and save football playbooks, formations and plays. Made with React and canvas."},{src:"https://github.com/Deniro5/Blackjack",link:"https://deniro5.github.io/Blackjack",imgsrc:"imgs/blackjack.png",title:"Blackjack",description:"Play Blackjack against the automated dealer. Made with React."},{src:"https://github.com/Deniro5/Wordsearch",link:"https://deniro5.github.io/Wordsearch",imgsrc:"imgs/wordsearch.png",title:"Wordsearch",description:"Randomly generated wordsearch game. Made using Canvas."},{src:"https://github.com/Deniro5/Pokedex2",link:"https://deniro5.github.io/Pokedex2",imgsrc:"imgs/pokedex.png",title:"Pokedex",description:"Pokedex App made with Typescript and React.  Displays basic information about 800+ pokemon. Can search for specific pokemon using the search bar or navigate using the arrows. Made with the help of pokeapi API."}],j=function(e){return o.a.createElement("div",{className:"showcaseContainer"},o.a.createElement("h1",null," Projects "),o.a.createElement("div",{className:"showcaseDivider"}),o.a.createElement(C,{projects:N}))},S=d()(),D=function(){var e=Object(n.useState)(""),t=Object(c.a)(e,2),a=t[0],r=t[1];return o.a.createElement(s.a,{history:S},o.a.createElement("div",{className:"app-container"},o.a.createElement(p,{current:a,setCurrent:r}),o.a.createElement(l.c,null,o.a.createElement(l.a,{exact:!0,path:"/",render:function(e){return o.a.createElement(u,Object.assign({},e,{setCurrent:r}))}}),o.a.createElement(l.a,{exact:!0,path:"/about",component:E}),o.a.createElement(l.a,{exact:!0,path:"/contact",component:f}),o.a.createElement(l.a,{exact:!0,path:"/projects",component:j}),"/>"),o.a.createElement(h,null)))};i.a.render(o.a.createElement(D,null),document.getElementById("root"))},52:function(e,t,a){e.exports=a(150)},57:function(e,t,a){}},[[52,2,1]]]);
//# sourceMappingURL=main.0c112816.chunk.js.map