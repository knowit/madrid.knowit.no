(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{145:function(e,t,a){"use strict";a.r(t);a(53),a(162);var n=a(8),i=a.n(n),r=a(54),l=a.n(r),o=a(177),s=a(0),c=a.n(s),m=a(147),u=a(158),d=(a(78),a(55),a(4)),p=a.n(d),g=function(e){var t=e.collection;return c.a.createElement("div",{className:"slot gray-background"},c.a.createElement("span",{className:"time"},t.time),c.a.createElement("div",{className:"title"},c.a.createElement("span",null,t.title)))};g.propTypes={collection:p.a.array};var k=g,f={title:"Fagseminar høst 2018",event:{date:"25. oktober - 28. oktober 2018",longDate:"25. oktober - 28. oktober 2018",venue:"Meliá Castilla, Calle del Poeta Joan Maragall, 43, Madrid, España",city:"Madrid",country:"España",gmapsUrl:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3035.6269024565067!2d-3.6943040487441863!3d40.46139406074399!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xd1ce794508da5e9d!2sMeli%C3%A1+Castilla!5e0!3m2!1sen!2sno!4v1537421113811"},schedules:[{day:"Fredag 19. Oktober",collections:[{time:"19:00",title:"Flyet drar fra Stavanger Lufthavn"},{time:"23:00",title:"Vi ankommer Madrid"}]},{day:"Lørdag 20. Oktober",collections:[{time:"09:30-18:00",title:"Aktiviteter"}]},{day:"Søndag 21. Oktober",collections:[{time:"09:00-09:45",title:"Internmøte",entries:[{room:"Auditorium 🎥",slots:["internmeet"]}]},{time:"10:00-10:20",title:"Pause",isBreak:!0},{time:"10:15-12:30",title:"Plenumsforedrag",entries:[{room:"Auditorium 🎥",slots:[]}]},{time:"12:30-13:30",title:"Lunsj",isBreak:!0},{time:"13:30 - 16:30",title:"Workshops",entries:[{room:"Auditorium 🎥",slots:[]},{room:"Parliament 🎥",slots:[]},{room:"Congress",slots:[]},{room:"Bundestag",slots:[]}]},{time:"16:30-17:30",title:"Open Space"},{time:"19:15",title:"Felles avgang til restaurant"},{time:"19:30",title:"Restaurant"}]},{day:"Mandag 22. Oktober",collections:[{time:"09:00-12:00",title:"Workshops",entries:[{room:"Auditorium 🎥",slots:[]},{room:"Parliament 🎥",slots:[]},{room:"Congress",slots:[]},{room:"Bundestag",slots:[]}]},{time:"12:00-13:00",title:"Lunsj"}]}],talks:{internmeet:{pending:!1,speakers:[{name:"Jan Henrik Gundelsby",bio:"Jan Henrik er fagsjef i Knowit Objectnet. Jobber for tiden litt hos Oslo kommune med arkitektur og prosess. Driver også med salg, marked og hvordan vi skal få de rette nye prosjektene. Glad i naturen og lidenskapelig opptatt av fag!",email:"jhg@knowit.no",pic:"jhg.jpg"}],title:"Velkommen og internmøte",type:"Talk",description:"Beskrivelse kommer"}}},h=function(){return c.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 100 125"},c.a.createElement("polygon",{points:"80.9,32.3 77.2,28.5 50,55.7 22.8,28.5 19.1,32.3 46.3,59.5 19.1,86.6 22.8,90.4 50,63.2 77.2,90.4 80.9,86.6 53.7,59.5 "}))},v=function(e){var t=e.showDescription,a=e.toggleShowDescription,n=e.description;return n.length<101?c.a.createElement("span",{className:"talk-description"},n):t?c.a.createElement("span",{className:"talk-description"},n,c.a.createElement("button",{className:"un-button",onClick:a},c.a.createElement(h,null))):c.a.createElement("span",{className:"talk-description",onClick:a},function(e){return e.length>100?e.substring(0,100)+"...":e}(n))};v.propTypes={showDescription:p.a.bool.isRequired,toggleShowDescription:p.a.func.isRequired,description:p.a.string.isRequired},v.defaultProps={description:""};var y=v,E=(a(178),function(){return c.a.createElement("svg",{fill:"#000000",height:"48",viewBox:"0 0 24 24",width:"48",xmlns:"http://www.w3.org/2000/svg"},c.a.createElement("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"}),c.a.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}))}),w=function(e){var t=e.speaker,a=e.numberOfSpeakers,n=e.talkId;return c.a.createElement("div",{className:"speaker"},c.a.createElement("span",{className:"speaker-image"},t.pic?c.a.createElement("img",{src:"/static/pics/"+t.pic,alt:"speaker"}):c.a.createElement(E,null)),c.a.createElement(m.Link,{className:"speaker-name",to:"/speakers#"+n},a>1?t.name+" med flere":t.name))};w.propTypes={speaker:p.a.object.isRequired,numberOfSpeakers:p.a.number.isRequired,talkId:p.a.string.isRequired};var b=w,N=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={showDescription:!1},a.toggleShowDescription=a.toggleShowDescription.bind(l()(l()(a))),a}i()(t,e);var a=t.prototype;return a.toggleShowDescription=function(){this.setState(function(e){return{showDescription:!e.showDescription}})},a.render=function(){var e=this.props.talkId,t=f.talks[e];return c.a.createElement("div",{className:"talk"},c.a.createElement("div",{className:"talk-speakers"},t.speakers&&0!==t.speakers.length?c.a.createElement(b,{speaker:t.speakers[0],numberOfSpeakers:t.speakers.length,talkId:e}):null),c.a.createElement("div",{className:"talk-info"},c.a.createElement("strong",{className:"talk-title"},t.title),c.a.createElement(y,{description:t.description,showDescription:this.state.showDescription,toggleShowDescription:this.toggleShowDescription})))},t}(c.a.Component);N.propTypes={talkId:p.a.string.isRequired};var S=N,F=function(e){var t=e.collectionTitle,a=e.entry;return c.a.createElement("div",{className:"talks container"},c.a.createElement("span",{className:"type"},t),c.a.createElement("span",{className:"room"},a.room),a.slots.map(function(e){return c.a.createElement(S,{talkId:e})}))};F.propTypes={collectionTitle:p.a.string.isRequired,entry:p.a.object};var M=F,C=function(e){var t=e.collection;return c.a.createElement("div",{className:"slot entries"},c.a.createElement("span",{className:"time"},t.time),c.a.createElement("div",{className:"talks"},t.entries.map(function(e){return c.a.createElement(M,{entry:e,collectionTitle:t.title})})))};C.propTypes={collection:p.a.array};var q=C,x=(a(179),function(e){var t=e.collection;return c.a.createElement("div",{className:"slot white-background"},c.a.createElement("span",{className:"time"},t.time),c.a.createElement("div",{className:"title"},t.link&&t.link.length>0?c.a.createElement("a",{href:t.link},t.title):c.a.createElement("span",null,t.title)))});x.propTypes={collection:p.a.object};var T=x,D=function(e){var t=e.collection;return t?t.isBreak?c.a.createElement(k,{collection:t}):t.entries?c.a.createElement(q,{collection:t}):c.a.createElement(T,{collection:t}):null};D.propTypes={collection:p.a.object};var j=D,O=(a(181),j),R=(a(183),function(e){function t(t){var a;return(a=e.call(this,t)||this).onDayClick=a.onDayClick.bind(l()(l()(a))),a.state={activeIndex:0},a}i()(t,e);var a=t.prototype;return a.onDayClick=function(e,t){this.setState({activeIndex:t})},a.render=function(){var e=this;return c.a.createElement(m.StaticQuery,{query:"1508586842",render:function(t){var a=t.site.siteMetadata.data.schedules,n=a[e.state.activeIndex];return c.a.createElement(u.a,null,c.a.createElement("div",null,c.a.createElement("div",{className:"schedule page"},c.a.createElement("h1",null,"Skjema"),c.a.createElement("div",{className:"nav-button-group"},c.a.createElement(m.Link,{className:"button white",to:"/"},"Forside"),c.a.createElement(m.Link,{className:"button white hidden",to:"/speakers/"},"Talere")),c.a.createElement("div",{className:"button-group button-group-schedule-days"},a.map(function(t,a){return c.a.createElement("button",{key:"day-"+a,onClick:function(t){return e.onDayClick(t,a)},className:e.state.activeIndex===a?"button active":"button"},t.day)})),c.a.createElement("div",{className:"container"},n.collections.map(function(e){return c.a.createElement(O,{key:"slot-"+e.time,collection:e})})))))},data:o})},t}(c.a.Component));t.default=R},147:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return k}),a.d(t,"StaticQueryContext",function(){return p}),a.d(t,"StaticQuery",function(){return g});var n=a(0),i=a.n(n),r=a(4),l=a.n(r),o=a(146),s=a.n(o);a.d(t,"Link",function(){return s.a}),a.d(t,"withPrefix",function(){return o.withPrefix}),a.d(t,"navigate",function(){return o.navigate}),a.d(t,"push",function(){return o.push}),a.d(t,"replace",function(){return o.replace}),a.d(t,"navigateTo",function(){return o.navigateTo});var c=a(27);a.d(t,"waitForRouteChange",function(){return c.c});var m=a(148),u=a.n(m);a.d(t,"PageRenderer",function(){return u.a});var d=a(38);a.d(t,"parsePath",function(){return d.a});var p=i.a.createContext({}),g=function(e){return i.a.createElement(p.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):i.a.createElement("div",null,"Loading (StaticQuery)")})};function k(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}g.propTypes={data:l.a.object,query:l.a.string.isRequired,render:l.a.func,children:l.a.func}},148:function(e,t,a){var n;e.exports=(n=a(150))&&n.default||n},149:function(e){e.exports={data:{site:{siteMetadata:{title:"Knowit Stavanger Fagseminar",data:{title:"Fagseminar høst 2018",keywords:["knowit","fagseminar","stavanger","madrid","2018"]}}}}}},150:function(e,t,a){"use strict";a.r(t);a(39);var n=a(0),i=a.n(n),r=a(4),l=a.n(r),o=a(52),s=a(1),c=function(e){var t=e.location,a=s.default.getResourcesForPathnameSync(t.pathname);return i.a.createElement(o.a,Object.assign({key:t.pathname,location:t,pageResources:a},a.json))};c.propTypes={location:l.a.shape({pathname:l.a.string.isRequired}).isRequired},t.default=c},151:function(e,t,a){},155:function(e){e.exports={data:{site:{siteMetadata:{title:"Knowit Stavanger Fagseminar",data:{event:{city:"Madrid",address:"Calle del Poeta Joan Maragall, 43",hotel:"Meliá Castilla",gmapsUrl:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3035.6269024565067!2d-3.6943040487441863!3d40.46139406074399!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xd1ce794508da5e9d!2sMeli%C3%A1+Castilla!5e0!3m2!1sen!2sno!4v1537421113811"}}}}}}},156:function(e,t,a){},158:function(e,t,a){"use strict";var n=a(149),i=a(0),r=a.n(i),l=a(4),o=a.n(l),s=a(159),c=a.n(s),m=a(147),u=(a(151),a(155)),d=(a(156),function(){return r.a.createElement(m.StaticQuery,{query:"816841966",render:function(e){return r.a.createElement("div",{className:"google-maps-wrapper"},r.a.createElement("div",{className:"google-maps-blocker"}),r.a.createElement("div",{className:"google-maps-content"},r.a.createElement("h1",null,"Lokasjon"),r.a.createElement("h3",null,e.site.siteMetadata.data.event.hotel),r.a.createElement("h3",null,e.site.siteMetadata.data.event.address),r.a.createElement("h3",null,e.site.siteMetadata.data.event.city)),r.a.createElement("iframe",{title:"Map",className:"google-maps",src:e.site.siteMetadata.data.event.gmapsUrl,frameBorder:"0"}))},data:u})}),p=function(e){var t=e.children;return r.a.createElement(m.StaticQuery,{query:"3533691344",render:function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(c.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:e.site.siteMetadata.data.title},{name:"keywords",content:e.site.siteMetadata.data.keywords.join(",")}]},r.a.createElement("html",{lang:"no"}),r.a.createElement("link",{"data-react-helmet":"true",href:"https://fonts.googleapis.com/css?family=Raleway",rel:"stylesheet"})),r.a.createElement("div",null,t,r.a.createElement(d,null)))},data:n})};p.propTypes={children:o.a.node.isRequired};t.a=p},162:function(e,t,a){var n=a(6);n(n.P,"Function",{bind:a(176)})},176:function(e,t,a){"use strict";var n=a(19),i=a(11),r=a(79),l=[].slice,o={};e.exports=Function.bind||function(e){var t=n(this),a=l.call(arguments,1),s=function(){var n=a.concat(l.call(arguments));return this instanceof s?function(e,t,a){if(!(t in o)){for(var n=[],i=0;i<t;i++)n[i]="a["+i+"]";o[t]=Function("F,a","return new F("+n.join(",")+")")}return o[t](e,a)}(t,n.length,n):r(t,n,e)};return i(t.prototype)&&(s.prototype=t.prototype),s}},177:function(e){e.exports={data:{site:{siteMetadata:{data:{title:"Fagseminar høst 2018",schedules:[{day:"Torsdag 25. Oktober",collections:[{time:"16:30",title:"Flyet drar fra Stavanger Lufthavn",link:""},{time:"22:00",title:"Vi ankommer Madrid",link:""}]},{day:"Fredag 26. Oktober",collections:[{time:"07:00-09:00",title:"Frokost",link:""},{time:"09:00-09:15",title:"Velkommen til MadCon Dev Track - Froddgeir",link:""},{time:"09:15-09:45",title:"Tales from Altibox - Henrik",link:""},{time:"09:45-10:15",title:"Update fra JavaZone - Sindre",link:""},{time:"10:15-11:00",title:"Flutter (Google) - Johan",link:""},{time:"11:00-11:15",title:"Pause",link:""},{time:"11:15-12:00",title:"Maskinlæring ting - Truls",link:""},{time:"12:00-13:00",title:"Lunch",link:""},{time:"13:00-14:00",title:"Kategori Teori - Oddgeir",link:""},{time:"14:00-15:00",title:"GitOps med JenkinsX på Kubernetes - Frode",link:""},{time:"15:10-15:15",title:"Pause",link:""},{time:"15:15-16:15",title:"Azure m.m. - Glenn",link:""},{time:"16:15-17:00",title:"Espens historietime - Espen",link:""}]},{day:"Lørdag 27. Oktober",collections:[{time:"07:00-10:00",title:"Frokost",link:""},{time:"19:15",title:"? Felles avgang til restaurant",link:""},{time:"20:00",title:"El Botin",link:'https://www.google.com/maps?q=C/+de+Cuchilleros,+17++%0D%0A+28005+Madrid"'}]},{day:"Søndag 28. Oktober",collections:[{time:"07:00-10:00",title:"Frokost",link:""},{time:"12:00-13:00",title:"? Lunsj",link:""},{time:"13:00",title:"? Avreise til flyplassen",link:""},{time:"15:25",title:"Fly til Oslo",link:""},{time:"20:45",title:"Fly til Stavanger",link:""}]}]}}}}}},178:function(e,t,a){var n=a(28).f,i=Function.prototype,r=/^\s*function ([^ (]*)/;"name"in i||a(17)&&n(i,"name",{configurable:!0,get:function(){try{return(""+this).match(r)[1]}catch(e){return""}}})},179:function(e,t,a){"use strict";a(180)("link",function(e){return function(t){return e(this,"a","href",t)}})},180:function(e,t,a){var n=a(6),i=a(18),r=a(29),l=/"/g,o=function(e,t,a,n){var i=String(r(e)),o="<"+t;return""!==a&&(o+=" "+a+'="'+String(n).replace(l,"&quot;")+'"'),o+">"+i+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(o),n(n.P+n.F*i(function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}),"String",a)}},181:function(e,t,a){},183:function(e,t,a){}}]);
//# sourceMappingURL=component---src-pages-schedule-js-cf3c1735afe52e039288.js.map