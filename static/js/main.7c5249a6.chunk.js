(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(e,t,a){e.exports=a(47)},45:function(e,t,a){},47:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(15),c=a.n(s),i=a(8),l=a.n(i),u=a(16),o=a(2),m=a(3),p=a(5),f=a(4),h=a(6),b=a(17),d=a.n(b).a.create({baseURL:"https://api.unsplash.com",headers:{Authorization:"Client-ID 910928052572d85d8e8269b91a6e6a711d2c4e40ec7ba94fef29f87ade38f12a"}}),g=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(p.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(r)))).state={term:""},a.onFormSubmit=function(e){e.preventDefault(),a.props.onSubmit(a.state.term)},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"ui segment"},r.a.createElement("form",{onSubmit:this.onFormSubmit,className:"ui form"},r.a.createElement("div",{className:"field"},r.a.createElement("label",null,"Image Search"),r.a.createElement("input",{type:"text",value:this.state.term,onChange:function(t){return e.setState({term:t.target.value})}})),r.a.createElement("button",{className:"ui button",tabIndex:"0"},"Submit")))}}]),t}(r.a.Component),v=(a(45),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(p.a)(this,Object(f.a)(t).call(this,e))).setSpans=function(){var e=a.imageRef.current.clientHeight,t=Math.ceil(e/10)+7;a.setState({spans:t})},a.state={spans:0},a.imageRef=r.a.createRef(),a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.imageRef.current.addEventListener("load",this.setSpans)}},{key:"render",value:function(){var e=this.props.image,t=e.description,a=e.urls,n=e.likes;return r.a.createElement("div",{style:{gridRowEnd:"span ".concat(this.state.spans)}},r.a.createElement("img",{ref:this.imageRef,alt:t,src:a.small}),r.a.createElement("br",null),r.a.createElement("strong",null,"Likes: "),n,r.a.createElement("br",null),t)}}]),t}(r.a.Component)),E=function(e){var t=e.images,a=e.term,n=e.termCount,s=null,c=null;return t.sort(function(e,t){return t.likes-e.likes}),console.log(t),20===n?(c=r.a.createElement("div",null,"There are ",n," results for ",r.a.createElement("strong",null,'"',a,'"')),s=t.map(function(e){return r.a.createElement(v,{key:e.id,image:e})})):a&&(c=r.a.createElement("div",null,"Sorry there were fewer than 20 results for ",r.a.createElement("strong",null,'"',a,'"'),".\xa0Here are 20 dog pictures instead:"),s=t.map(function(e){return r.a.createElement(v,{key:e.id,image:e})})),r.a.createElement("div",null,c,r.a.createElement("br",null),r.a.createElement("div",{className:"image-list"},s))},y=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(p.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(r)))).state={images:[],term:""},a.onSearchSubmit=function(){var e=Object(u.a)(l.a.mark(function e(t){var n,r;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.get("search/photos",{params:{query:t,per_page:20}});case 2:if(n=e.sent,!((r=n.data.results.length)<20)){e.next=8;break}return e.next=7,d.get("search/photos",{params:{query:"dog",per_page:20}});case 7:n=e.sent;case 8:a.setState({images:n.data.results,term:t,termCount:r});case 9:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"ui container",style:{marginTop:"10px"}},r.a.createElement(g,{onSubmit:this.onSearchSubmit}),r.a.createElement(E,{images:this.state.images,term:this.state.term,termCount:this.state.termCount}))}}]),t}(r.a.Component);c.a.render(r.a.createElement(y,null),document.querySelector("#root"))}},[[18,2,1]]]);
//# sourceMappingURL=main.7c5249a6.chunk.js.map