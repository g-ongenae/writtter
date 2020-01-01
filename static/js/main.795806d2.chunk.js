(this.webpackJsonpwrittter=this.webpackJsonpwrittter||[]).push([[0],{25:function(e,t,a){e.exports=a(38)},30:function(e,t,a){},31:function(e,t,a){},38:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(22),c=a.n(l),s=(a(30),a(2)),o=a(3),i=a(5),m=a(4),u=a(6),p=a(1),d=a(13),h=(a(31),new(function(){function e(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];Object(s.a)(this,e),this.FRONT_BASE_URL=t?"http://localhost:8080":"http://g-ongeane.github.io/writtter",this.API_BASE_URL=t?"http://localhost:5050":"https://writtter.herokuapp.com"}return Object(o.a)(e,[{key:"getApi",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return"".concat(this.API_BASE_URL).concat(e)}},{key:"getUrl",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return"".concat(this.FRONT_BASE_URL).concat(e)}}]),e}())),E=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(i.a)(this,Object(m.a)(t).call(this))).state={},e}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement("h1",null," Connect "),r.a.createElement("form",null,r.a.createElement("fieldset",{className:"form-group"},r.a.createElement("label",null,"Username:"),r.a.createElement("input",{id:"username",type:"text",name:"title",className:"form-control",placeholder:"Enter your username",required:!0})),r.a.createElement("fieldset",{className:"form-group"},r.a.createElement("label",null,"Password:"),r.a.createElement("input",{id:"password",type:"password",name:"password",className:"form-control",placeholder:"Enter your password",required:!0})),r.a.createElement("fieldset",{className:"form-group text-center"},r.a.createElement("input",{type:"submit",value:"Log in",className:"btn btn-primary"}))))}}]),t}(n.Component),f=a(15),b=a(9),g=a.n(b),v=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this))).state={tags:[],isLoading:!1},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e,t;return g.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return this.setState({isLoading:!0}),a.prev=1,a.next=4,g.a.awrap(fetch(h.getApi("/tags")));case 4:if((e=a.sent).ok){a.next=7;break}throw new Error("Could not fetch tags");case 7:return a.next=9,g.a.awrap(e.json());case 9:t=a.sent,this.setState({tags:t.tags,isLoading:!1}),a.next=16;break;case 13:a.prev=13,a.t0=a.catch(1),this.setState({error:a.t0,isLoading:!1});case 16:case"end":return a.stop()}}),null,this,[[1,13]])}},{key:"render",value:function(){var e=this.state.tags.map((function(e){return r.a.createElement("option",{value:e.id},e.name)}));return r.a.createElement("select",{name:"tags",className:"form-control",multiple:!0},e)}}]),t}(n.Component),N=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this))).state={rules:[],isLoading:!1},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e,t;return g.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return this.setState({isLoading:!0}),a.prev=1,a.next=4,g.a.awrap(fetch(h.getApi("/rules")));case 4:if((e=a.sent).ok){a.next=7;break}throw new Error("Could not fetch tags");case 7:return a.next=9,g.a.awrap(e.json());case 9:t=a.sent,this.setState({tags:t.tags,isLoading:!1}),a.next=16;break;case 13:a.prev=13,a.t0=a.catch(1),this.setState({error:a.t0,isLoading:!1});case 16:case"end":return a.stop()}}),null,this,[[1,13]])}},{key:"render",value:function(){var e=this.state.rules.map((function(e){return r.a.createElement("option",{value:e.id},e.name)}));return r.a.createElement("select",{name:"rules",className:"form-control",multiple:!0},e)}}]),t}(n.Component),y=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this))).state={name:"",description:"",finishDate:""},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement("h1",null,"Create a new competition"),r.a.createElement("form",null,r.a.createElement("fieldset",{className:"form-group"},r.a.createElement("label",{for:"title"},"Title:"),r.a.createElement("input",{value:this.state.name,onChange:this.onChange.bind(this,"name"),id:"name",type:"text",name:"name",className:"form-control",placeholder:"Enter title"})),r.a.createElement("fieldset",{className:"form-group"},r.a.createElement("label",null,"Description:"),r.a.createElement("textarea",{value:this.state.description,onChange:this.onChange.bind(this,"description"),name:"description",className:"form-control",placeholder:"Write a description for your story",rows:"3"})),r.a.createElement("fieldset",{className:"form-group"},r.a.createElement("label",null,"Due date:"),r.a.createElement(j,{competition:this})),r.a.createElement("fieldset",{className:"form-group"},r.a.createElement("input",{className:"form-check-input",type:"checkbox",name:"isPublic"}),r.a.createElement("label",{className:"form-check-label"},"Public Mode")),r.a.createElement("fieldset",{className:"form-group"},r.a.createElement("input",{className:"form-check-input",type:"checkbox",name:"commentsEnabled",defaultChecked:!0}),r.a.createElement("label",{className:"form-check-label"},"Comments enabled")),r.a.createElement("fieldset",{className:"form-group"},r.a.createElement("label",null,"Rules:"),r.a.createElement(N,{userId:this.props.userId,binder:this})),r.a.createElement("fieldset",{className:"form-group"},r.a.createElement("label",null,"Tags:"),r.a.createElement(v,{userId:this.props.userId,binder:this})),r.a.createElement("fieldset",{className:"form-group text-center"},r.a.createElement("input",{type:"submit",value:"Create competition",className:"btn btn-primary"}))))}}]),t}(n.Component);function j(e){var t=e.binder,a=new Date,n="".concat(a.getDate(),"/").concat(a.getMonth(),"/").concat(a.getUTCFullYear());return r.a.createElement("div",{className:"input-group date"},r.a.createElement("input",{value:this.state.finishDate,onChange:t.onChange.bind(t,"finishDate"),className:"form-control","data-date-format":"mm/dd/yyyy",type:"date",min:n}),r.a.createElement("span",{className:"input-group-append"},r.a.createElement("span",{className:"input-group-text"},r.a.createElement(f.c,{icon:f.a}))))}var w=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement("h1",null,"Create a new rule"),r.a.createElement("form",null,r.a.createElement("fieldset",{className:"form-group"},r.a.createElement("label",{for:"title"},"Title:"),r.a.createElement("input",{id:"title",type:"text",name:"title",className:"form-control",placeholder:"Enter title"})),r.a.createElement("fieldset",{className:"form-group"},r.a.createElement("label",null,"Description:"),r.a.createElement("textarea",{name:"description",className:"form-control",placeholder:"Write a description for your story",rows:"3"})),r.a.createElement("fieldset",{className:"form-group"},r.a.createElement("input",{className:"form-check-input",type:"checkbox",name:"isPublic"}),r.a.createElement("label",{className:"form-check-label"},"Public Mode")),r.a.createElement("fieldset",{className:"form-group"},r.a.createElement("label",null,"Tags:"),r.a.createElement(v,{userId:this.props.userId})),r.a.createElement("fieldset",{className:"form-group text-center"},r.a.createElement("input",{type:"submit",value:"Create rule",className:"btn btn-primary"}))))}}]),t}(n.Component),O=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement("h1",null,"Create a new story"),r.a.createElement("form",null,r.a.createElement("fieldset",{className:"form-group"},r.a.createElement("label",{for:"title"},"Title:"),r.a.createElement("input",{id:"title",type:"text",name:"title",className:"form-control",placeholder:"Enter title"})),r.a.createElement("fieldset",{className:"form-group"},r.a.createElement("label",null,"Description:"),r.a.createElement("textarea",{name:"description",className:"form-control",placeholder:"Write a description for your story",rows:"3"})),r.a.createElement("fieldset",{className:"form-group"},r.a.createElement("input",{className:"form-check-input",type:"checkbox",name:"isPublic"}),r.a.createElement("label",{className:"form-check-label"},"Public Mode")),r.a.createElement("fieldset",{className:"form-group"},r.a.createElement("input",{className:"form-check-input",type:"checkbox",name:"commentsEnabled",defaultChecked:!0}),r.a.createElement("label",{className:"form-check-label"},"Comments enabled")),r.a.createElement("fieldset",{className:"form-group"},r.a.createElement("label",null,"Rules:"),r.a.createElement(N,{userId:this.props.userId})),r.a.createElement("fieldset",{className:"form-group"},r.a.createElement("label",null,"Tags:"),r.a.createElement(v,{userId:this.props.userId})),r.a.createElement("fieldset",{className:"form-group text-center"},r.a.createElement("input",{type:"submit",value:"Create story",className:"btn btn-primary"}))))}}]),t}(n.Component);function k(){return r.a.createElement("div",null,r.a.createElement(p.a,null,r.a.createElement(p.b,{to:h.getUrl("/create/story")}," Story "),r.a.createElement(p.b,{to:h.getUrl("/create/competition")}," Competition "),r.a.createElement(p.b,{to:h.getUrl("/create/rule")}," Rule "),r.a.createElement(d.c,null,r.a.createElement(d.a,{path:h.getUrl("/create/story")},r.a.createElement(O,null)),r.a.createElement(d.a,{path:h.getUrl("/create/competition")},r.a.createElement(y,null)),r.a.createElement(d.a,{path:h.getUrl("/create/rule")},r.a.createElement(w,null)),r.a.createElement(d.a,{path:h.getUrl("/create")},r.a.createElement(O,null)))))}var x=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(p.a,null,r.a.createElement(C,null),r.a.createElement(U,null)))}}]),t}(n.Component);function C(){return r.a.createElement("div",{className:"container"},r.a.createElement("h1",null," Search Page "),r.a.createElement("form",{className:"form-row"},r.a.createElement("div",{className:"col-sm-2"}),r.a.createElement("fieldset",{className:"col-sm-7 form-group"},r.a.createElement("div",{className:"input-group"},r.a.createElement("div",{className:"input-group-prepend"},r.a.createElement("div",{className:"input-group-text"},r.a.createElement(f.c,{icon:f.b}))),r.a.createElement("input",{id:"search",type:"search",name:"search",className:"form-control",required:!0}))),r.a.createElement("fieldset",{className:"col-sm-2 form-group"},r.a.createElement("input",{type:"submit",value:"Search",className:"btn btn-primary"}))))}function U(e){var t=e.results;if(!t)return r.a.createElement(S,{text:"Make a search"});if(Array.isEmpty(t))return r.a.createElement(S,{text:"No search results found"});var a=t.map((function(e,t){return r.a.createElement(I,{index:t,item:e})}));return r.a.createElement("div",{className:"container"},a)}function I(e){var t=e.item;e.index;return r.a.createElement("div",{className:"panel panel-default"},r.a.createElement("div",{className:"panel-heading"},t.name," \u2014 by ",t.ownerId," \u2014 ",t.lastEditedAt),r.a.createElement("div",{className:"panel-body"},t.description),r.a.createElement("div",{className:"panel-footer"},r.a.createElement(p.b,{to:"/stories/".concat(t.id)},"Read the story"),r.a.createElement(p.b,{to:"/stories/".concat(t.id,"/edit")},"Edit the story")))}function S(e){var t=e.text;return r.a.createElement("div",{className:"jumbotron d-flex align-items-center"},r.a.createElement("div",{className:"container text-center"},r.a.createElement("h2",null,t)))}function L(e){var t;return t=e.loggedIn?r.a.createElement("div",null,r.a.createElement(p.b,{to:h.getUrl("/profile")}," Profile "),r.a.createElement(p.b,{to:h.getUrl("/logout")}," Log out ")):r.a.createElement("div",null,r.a.createElement(p.b,{to:h.getUrl("/login")}," Log in "),r.a.createElement(p.b,{to:h.getUrl("/register")}," Register ")),r.a.createElement("menu",null,r.a.createElement(p.b,{to:h.getUrl("/")}," Writtter "),r.a.createElement(p.b,{to:h.getUrl("/about")}," About "),r.a.createElement(p.b,{to:h.getUrl("/search")}," Search "),r.a.createElement(p.b,{to:h.getUrl("/create")}," Create "),t)}var A=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(i.a)(this,Object(m.a)(t).call(this))).state={isLoading:!1},e}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(p.a,null,r.a.createElement("div",null),r.a.createElement(p.b,{to:h.getUrl("/user/:userId/stories")}," Stories "),r.a.createElement(p.b,{to:h.getUrl("/user/:userId/competitions")}," ","Competitions"," "),r.a.createElement(p.b,{to:h.getUrl("/user/:userId/likes")}," Likes "),r.a.createElement(p.b,{to:h.getUrl("/user/:userId/comments")}," Comments "),r.a.createElement(d.c,null,r.a.createElement(d.a,{path:h.getUrl("/user/:userId/stories")}," ",r.a.createElement(D,{liked:!1})," "),r.a.createElement(d.a,{path:h.getUrl("/user/:userId/competitions")}," ",r.a.createElement(P,null)," "),r.a.createElement(d.a,{path:h.getUrl("/user/:userId/likes")}," ",r.a.createElement(D,{liked:!0})," "),r.a.createElement(d.a,{path:h.getUrl("/user/:userId/comments")}," ",r.a.createElement(R,null)," "),r.a.createElement(d.a,{path:h.getUrl("/user/:userId")}," ",r.a.createElement(D,{liked:!1})," "))))}}]),t}(n.Component);function D(e){}function P(e){}function R(e){}var M=a(16),T=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).state={username:"",email:"",password:""},a.handleChange=a.handleChange.bind(Object(M.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(M.a)(a)),a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"handleChange",value:function(e,t){var a={};a[e]=t.target.value,this.setState(a)}},{key:"handleSubmit",value:function(e){var t;return g.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return e.preventDefault(),console.log("Event",e),a.next=4,g.a.awrap(fetch(h.getApi("/users"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({username:this.state.username,email:this.state.email,password:this.state.password})}));case 4:t=a.sent,console.log("response",t),window.location.href=h.getUrl("/");case 7:case"end":return a.stop()}}),null,this)}},{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement("h1",null,"Create a new account"),r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("fieldset",{className:"form-group"},r.a.createElement("label",null,"Username:"),r.a.createElement("div",{className:"input-group"},r.a.createElement("div",{className:"input-group-prepend"},r.a.createElement("div",{className:"input-group-text"},"@")),r.a.createElement("input",{value:this.state.username,onChange:this.handleChange.bind(this,"username"),id:"username",type:"text",name:"title",className:"form-control",placeholder:"Enter your username",required:!0}))),r.a.createElement("fieldset",{className:"form-group"},r.a.createElement("label",null,"Email:"),r.a.createElement("input",{value:this.state.email,onChange:this.handleChange.bind(this,"email"),id:"email",type:"email",name:"email",className:"form-control",placeholder:"Enter your email address",required:!0})),r.a.createElement("fieldset",{className:"form-group"},r.a.createElement("label",null,"Password:"),r.a.createElement("input",{value:this.state.password,onChange:this.handleChange.bind(this,"password"),id:"password",type:"password",name:"password",className:"form-control",placeholder:"Enter your password",required:!0}),r.a.createElement("small",{id:"passwordHelpInline",className:"text-muted"},"Must be 8-20 characters long.")),r.a.createElement("fieldset",{className:"form-group"},r.a.createElement("input",{className:"form-check-input",type:"checkbox",name:"rules",required:!0}),r.a.createElement("label",{className:"form-check-label"},"Accept rules and email subscription"),r.a.createElement("small",{id:"passwordHelpInline",className:"text-muted"},"No commercial offer will be send to you, just regular usage.")),r.a.createElement("fieldset",{className:"form-group text-center"},r.a.createElement("input",{type:"submit",value:"Create account",className:"btn btn-primary"}))))}}]),t}(n.Component),_=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this))).state={story:{},isLoading:!1,error:null,storyId:e.storyId},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentWillMount",value:function(){var e,t;return g.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return this.setState({isLoading:!0}),a.prev=1,a.next=4,g.a.awrap(fetch(h.getApi("/stories/".concat(this.storyId))));case 4:if((e=a.sent).ok){a.next=7;break}throw new Error("Something went wrong ...");case 7:return a.next=9,g.a.awrap(e.json());case 9:t=a.sent,this.setState({story:t.story,isLoading:!1}),a.next=16;break;case 13:a.prev=13,a.t0=a.catch(1),this.setState({error:a.t0,isLoading:!1});case 16:case"end":return a.stop()}}),null,this,[[1,13]])}},{key:"componentWillUnmount",value:function(){this._isMounted=!1}},{key:"render",value:function(){var e=this.state,t=e.story,a=e.isLoading,n=e.error;return n?r.a.createElement("p",null,n.message):a||!t?r.a.createElement("div",null," Loading story "):r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"panel panel-default"},r.a.createElement("div",{className:"panel-heading"},t.name," \u2014 by ",t.ownerId," \u2014 ",t.lastEditedAt),r.a.createElement("div",{className:"panel-body"},t.content)))}}]),t}(n.Component),W=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this))).state={},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("URL").then((function(e){return e.json()})).then((function(t){e.setState({})}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(p.a,null,r.a.createElement(L,null),r.a.createElement(d.c,null,r.a.createElement(d.a,{path:h.getUrl("/create")},r.a.createElement(k,null)),r.a.createElement(d.a,{path:h.getUrl("/search")},r.a.createElement(x,null)),r.a.createElement(d.a,{path:h.getUrl("/profile")},r.a.createElement(A,{userId:this.state.userId})),r.a.createElement(d.a,{path:h.getUrl("/user")},r.a.createElement(A,null)),r.a.createElement(d.a,{path:h.getUrl("/login")},r.a.createElement(E,null)),r.a.createElement(d.a,{path:h.getUrl("/register")},r.a.createElement(T,null)),r.a.createElement(d.a,{path:"/stories/:id",component:function(e){var t=e.match;return r.a.createElement(_,{storyId:t.params.id})}}))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(W,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[25,1,2]]]);
//# sourceMappingURL=main.795806d2.chunk.js.map