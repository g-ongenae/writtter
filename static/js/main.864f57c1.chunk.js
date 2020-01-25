(this.webpackJsonpwrittter=this.webpackJsonpwrittter||[]).push([[0],{27:function(e,t,a){e.exports=a(40)},32:function(e,t,a){},33:function(e,t,a){},40:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(24),c=a.n(s),l=(a(32),a(3)),i=a(4),o=a(6),m=a(5),u=a(7),d=a(2),h=a(17),p=(a(33),new(function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"production";Object(l.a)(this,e),this.FRONT_BASE_URL="development"===t?"":"/writtter",this.API_BASE_URL="development"===t?"http://localhost:8080":"https://writtter.herokuapp.com"}return Object(i.a)(e,[{key:"getApi",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return"".concat(this.API_BASE_URL).concat(e)}},{key:"getUrl",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return"".concat(this.FRONT_BASE_URL).concat(e)}}]),e}())),b=a(1),E=a.n(b),f=a(9),g=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).state={username:"",password:"",data:null,auth:null},a.handleChange=a.handleChange.bind(Object(f.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(f.a)(a)),a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"handleChange",value:function(e,t){var a={};a[e]=t.target.value,this.setState(a)}},{key:"handleSubmit",value:function(e){var t,a,n,r;return E.a.async((function(s){for(;;)switch(s.prev=s.next){case 0:return e.preventDefault(),s.next=3,E.a.awrap(fetch(p.getApi("/users/login"),{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json",username:this.state.username,password:this.state.password}}));case 3:if((t=s.sent).ok){s.next=16;break}console.log("Failed to authenticate",t),s.t0=t.status,s.next=404===s.t0?9:401===s.t0?11:13;break;case 9:return a="Username does not exist",s.abrupt("break",14);case 11:return a="Wrong password",s.abrupt("break",14);case 13:throw new Error(t.statusText);case 14:return alert(a),s.abrupt("return");case 16:return s.next=18,E.a.awrap(t.json());case 18:n=s.sent,r={authorization:t.headers.get("authorization"),"x-access-token":t.headers.get("x-access-token")},this.setState({auth:r,data:n}),console.log("Connect Request",JSON.stringify(this.state)),window.location.href=p.getUrl("/?a=".concat(r.authorization));case 23:case"end":return s.stop()}}),null,this)}},{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement("h1",null," Connect "),r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("fieldset",{className:"form-group"},r.a.createElement("label",null,"Username:"),r.a.createElement("input",{id:"username",type:"text",name:"title",className:"form-control",placeholder:"Enter your username",value:this.state.username,onChange:this.handleChange.bind(this,"username"),required:!0})),r.a.createElement("fieldset",{className:"form-group"},r.a.createElement("label",null,"Password:"),r.a.createElement("input",{id:"password",type:"password",name:"password",className:"form-control",placeholder:"Enter your password",value:this.state.password,onChange:this.handleChange.bind(this,"password"),required:!0})),r.a.createElement("fieldset",{className:"form-group text-center"},r.a.createElement("input",{type:"submit",value:"Log in",className:"btn btn-primary"}))))}}]),t}(n.Component),v=new(function(){function e(){Object(l.a)(this,e),this.data={}}return Object(i.a)(e,[{key:"set",value:function(e,t){this.data[e]=t}},{key:"unset",value:function(e){delete this.data[e]}},{key:"get",value:function(e){return this.data[e]}},{key:"has",value:function(e){return this.data.hasOwnProperty(e)}}]),e}()),y=a(11),N=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).state={tags:[],isLoading:!1},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e,t;return E.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return this.setState({isLoading:!0}),a.prev=1,a.next=4,E.a.awrap(fetch(p.getApi("/tags")));case 4:if((e=a.sent).ok){a.next=7;break}throw new Error("Could not fetch tags");case 7:return a.next=9,E.a.awrap(e.json());case 9:t=a.sent,this.setState({tags:t.tags,isLoading:!1}),a.next=16;break;case 13:a.prev=13,a.t0=a.catch(1),this.setState({error:a.t0,isLoading:!1});case 16:case"end":return a.stop()}}),null,this,[[1,13]])}},{key:"render",value:function(){var e=this.state.tags.map((function(e){return r.a.createElement("option",{value:e.id},e.name)}));return r.a.createElement("select",{name:"tags",className:"form-control",multiple:!0},e)}}]),t}(n.Component),k=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).state={rules:[],isLoading:!1},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e,t;return E.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return this.setState({isLoading:!0}),a.prev=1,a.next=4,E.a.awrap(fetch(p.getApi("/rules")));case 4:if((e=a.sent).ok){a.next=7;break}throw new Error("Could not fetch tags");case 7:return a.next=9,E.a.awrap(e.json());case 9:t=a.sent,this.setState({tags:t.tags,isLoading:!1}),a.next=16;break;case 13:a.prev=13,a.t0=a.catch(1),this.setState({error:a.t0,isLoading:!1});case 16:case"end":return a.stop()}}),null,this,[[1,13]])}},{key:"render",value:function(){var e=this.state.rules.map((function(e){return r.a.createElement("option",{value:e.id},e.name)}));return r.a.createElement("select",{name:"rules",className:"form-control",multiple:!0},e)}}]),t}(n.Component),w=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).state={name:"",description:"",finishDate:""},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"handleChange",value:function(e,t){var a={};a[e]=t.target.value,this.setState(a)}},{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement("h1",null,"Create a new competition"),r.a.createElement("form",null,r.a.createElement("fieldset",{className:"form-group"},r.a.createElement("label",{htmlFor:"title"},"Title:"),r.a.createElement("input",{value:this.state.name,onChange:this.handleChange.bind(this,"name"),id:"name",type:"text",name:"name",className:"form-control",placeholder:"Enter title"})),r.a.createElement("fieldset",{className:"form-group"},r.a.createElement("label",null,"Description:"),r.a.createElement("textarea",{value:this.state.description,onChange:this.handleChange.bind(this,"description"),name:"description",className:"form-control",placeholder:"Write a description for your story",rows:"3"})),r.a.createElement("fieldset",{className:"form-group"},r.a.createElement("label",null,"Due date:"),r.a.createElement(j,{competition:this})),r.a.createElement("fieldset",{className:"form-group"},r.a.createElement("input",{className:"form-check-input",type:"checkbox",name:"isPublic"}),r.a.createElement("label",{className:"form-check-label"},"Public Mode")),r.a.createElement("fieldset",{className:"form-group"},r.a.createElement("input",{className:"form-check-input",type:"checkbox",name:"commentsEnabled",defaultChecked:!0}),r.a.createElement("label",{className:"form-check-label"},"Comments enabled")),r.a.createElement("fieldset",{className:"form-group"},r.a.createElement("label",null,"Rules:"),r.a.createElement(k,{userId:this.props.userId,binder:this})),r.a.createElement("fieldset",{className:"form-group"},r.a.createElement("label",null,"Tags:"),r.a.createElement(N,{userId:this.props.userId,binder:this})),r.a.createElement("fieldset",{className:"form-group text-center"},r.a.createElement("input",{type:"submit",value:"Create competition",className:"btn btn-primary"}))))}}]),t}(n.Component);function j(e){var t=e.competition,a=new Date,n="".concat(a.getDate(),"/").concat(a.getMonth(),"/").concat(a.getUTCFullYear());return r.a.createElement("div",{className:"input-group date"},r.a.createElement("input",{value:t.state.finishDate,onChange:t.handleChange.bind(t,"finishDate"),className:"form-control","data-date-format":"mm/dd/yyyy",type:"date",min:n}),r.a.createElement("span",{className:"input-group-append"},r.a.createElement("span",{className:"input-group-text"},r.a.createElement(y.f,{icon:y.b}))))}var C=function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement("h1",null,"Create a new rule"),r.a.createElement("form",null,r.a.createElement("fieldset",{className:"form-group"},r.a.createElement("label",{htmlFor:"title"},"Title:"),r.a.createElement("input",{id:"title",type:"text",name:"title",className:"form-control",placeholder:"Enter title"})),r.a.createElement("fieldset",{className:"form-group"},r.a.createElement("label",null,"Description:"),r.a.createElement("textarea",{name:"description",className:"form-control",placeholder:"Write a description for your story",rows:"3"})),r.a.createElement("fieldset",{className:"form-group"},r.a.createElement("input",{className:"form-check-input",type:"checkbox",name:"isPublic"}),r.a.createElement("label",{className:"form-check-label"},"Public Mode")),r.a.createElement("fieldset",{className:"form-group"},r.a.createElement("label",null,"Tags:"),r.a.createElement(N,{userId:this.props.userId})),r.a.createElement("fieldset",{className:"form-group text-center"},r.a.createElement("input",{type:"submit",value:"Create rule",className:"btn btn-primary"}))))}}]),t}(n.Component),x=a(13),O=a(16),I=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).state={name:"",isPublic:!1,isCommentsDisabled:!1,description:""},a.handleChange=a.handleChange.bind(Object(f.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(f.a)(a)),a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"handleChange",value:function(e,t){this.setState(Object(O.a)({},e,t.target.value))}},{key:"handleCheck",value:function(e,t){this.setState(Object(O.a)({},e,t.target.checked))}},{key:"handleSubmit",value:function(e){var t,a;return E.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return e.preventDefault(),n.next=3,E.a.awrap(fetch(p.getApi("/stories"),{method:"POST",headers:Object(x.a)({Accept:"application/json","Content-Type":"application/json"},v.get("auth")||{}),body:JSON.stringify({ownerId:this.state.ownerId,name:this.state.name,description:this.state.description,isPublic:this.state.isPublic,isCommentsDisabled:!this.state.isCommentsDisabled})}));case 3:if((t=n.sent).ok){n.next=7;break}throw console.error("Failed to create story",t),new Error(t.statusText);case 7:return n.next=9,E.a.awrap(t.json());case 9:a=n.sent,window.location.href=p.getUrl("/story/".concat(a.id,"/?a=").concat(v.get("auth").authorization));case 11:case"end":return n.stop()}}),null,this)}},{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement("h1",null,"Create a new story"),r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("fieldset",{className:"form-group"},r.a.createElement("label",{htmlFor:"title"},"Title:"),r.a.createElement("input",{id:"title",type:"text",name:"title",className:"form-control",placeholder:"Enter title",value:this.state.name,onChange:this.handleChange.bind(this,"name")})),r.a.createElement("fieldset",{className:"form-group"},r.a.createElement("label",null,"Description:"),r.a.createElement("textarea",{name:"description",className:"form-control",placeholder:"Write a description for your story",rows:"3",value:this.state.description,onChange:this.handleChange.bind(this,"description")})),r.a.createElement("fieldset",{className:"form-group"},r.a.createElement("input",{className:"form-check-input",type:"checkbox",name:"isPublic",value:this.state.isPublic,onChange:this.handleCheck.bind(this,"isPublic")}),r.a.createElement("label",{className:"form-check-label"},"Public Mode")),r.a.createElement("fieldset",{className:"form-group"},r.a.createElement("input",{className:"form-check-input",type:"checkbox",name:"commentsEnabled",defaultChecked:!0,value:this.state.isCommentsDisabled,onChange:this.handleCheck.bind(this,"isCommentsDisabled")}),r.a.createElement("label",{className:"form-check-label"},"Comments enabled")),r.a.createElement("fieldset",{className:"form-group text-center"},r.a.createElement("input",{type:"submit",value:"Create story",className:"btn btn-primary"}))))}}]),t}(n.Component);function S(e){return v.has("auth")?r.a.createElement(d.a,null,r.a.createElement(U,{activeViewName:e.location.pathname}),r.a.createElement(h.c,null,r.a.createElement(h.a,{path:p.getUrl("/create/story")},r.a.createElement(I,null)),r.a.createElement(h.a,{path:p.getUrl("/create/competition")},r.a.createElement(w,null)),r.a.createElement(h.a,{path:p.getUrl("/create/rule")},r.a.createElement(C,null)),r.a.createElement(h.a,{path:p.getUrl("/create")},r.a.createElement(I,null)))):r.a.createElement("section",{className:"App-section"},r.a.createElement("h1",null,"Take part in a fantastic world of stories!"),r.a.createElement("p",{className:"text-center"},"You need to be authenticated to create a story.",r.a.createElement("br",null),r.a.createElement(d.b,{to:p.getUrl("/register")},"Create a new account"),r.a.createElement("br",null),r.a.createElement(d.b,{to:p.getUrl("/login")},"Or connect to your account")))}function U(e){var t=e.activeViewName,a=function(e){return"/create/".concat(e)===t?"btn btn-lg btn-block btn-outline-primary":"btn btn-lg btn-block btn-primary"};return r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light rounded"},r.a.createElement("div",{className:"navbar-collapse justify-content-md-center"},r.a.createElement("ul",{className:"navbar-nav"},r.a.createElement("li",{className:"nav-item active"},r.a.createElement("span",{className:"nav-link"},r.a.createElement(d.b,{to:p.getUrl("/create/story"),className:a("story")},"Story"))),r.a.createElement("li",{className:"nav-item"},r.a.createElement("span",{className:"nav-link"},r.a.createElement(d.b,{to:p.getUrl("/create/competition"),className:a("competition")},"Competition"))),r.a.createElement("li",{className:"nav-item"},r.a.createElement("span",{className:"nav-link"},r.a.createElement(d.b,{to:p.getUrl("/create/rule"),className:a("rule")},"Rule"))))))}var A=function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(d.a,null,r.a.createElement(L,null),r.a.createElement(D,null)))}}]),t}(n.Component);function L(){return r.a.createElement("div",{className:"container"},r.a.createElement("h1",null," Search Page "),r.a.createElement("form",{className:"form-row"},r.a.createElement("div",{className:"col-sm-2"}),r.a.createElement("fieldset",{className:"col-sm-7 form-group"},r.a.createElement("div",{className:"input-group"},r.a.createElement("div",{className:"input-group-prepend"},r.a.createElement("div",{className:"input-group-text"},r.a.createElement(y.f,{icon:y.e}))),r.a.createElement("input",{id:"search",type:"search",name:"search",className:"form-control",required:!0}))),r.a.createElement("fieldset",{className:"col-sm-2 form-group"},r.a.createElement("input",{type:"submit",value:"Search",className:"btn btn-primary"}))))}function D(e){var t=e.results;if(!t)return r.a.createElement(P,{text:"Make a search"});if(Array.isEmpty(t))return r.a.createElement(P,{text:"No search results found"});var a=t.map((function(e,t){return r.a.createElement(T,{index:t,item:e})}));return r.a.createElement("div",{className:"container"},a)}function T(e){var t=e.item;e.index;return r.a.createElement("div",{className:"panel panel-default"},r.a.createElement("div",{className:"panel-heading"},t.name," \u2014 by ",t.ownerId," \u2014 ",t.lastEditedAt),r.a.createElement("div",{className:"panel-body"},t.description),r.a.createElement("div",{className:"panel-footer"},r.a.createElement(d.b,{to:p.getUrl("/story/".concat(t.id))},"Read the story"),r.a.createElement(d.b,{to:p.getUrl("/story/".concat(t.id,"/edit"))},"Edit the story")))}function P(e){var t=e.text;return r.a.createElement("div",{className:"jumbotron d-flex align-items-center"},r.a.createElement("div",{className:"container text-center"},r.a.createElement("h2",null,t)))}function F(){var e=[];return v.has("auth")?(e.push(r.a.createElement("li",{className:"nav-item"},r.a.createElement(d.b,{className:"nav-link",to:p.getUrl("/profile")},"Profile"))),e.push(r.a.createElement("li",{className:"nav-item",onClick:function(){v.unset("auth"),window.location.href=p.getUrl("/")}},r.a.createElement("span",{className:"nav-link",style:{color:"lightcoral"}},"Log out")))):(e.push(r.a.createElement("li",{className:"nav-item"},r.a.createElement(d.b,{className:"nav-link",to:p.getUrl("/login")},"Log in"))),e.push(r.a.createElement("li",{className:"nav-item"},r.a.createElement(d.b,{className:"nav-link",to:p.getUrl("/register")},"Register")))),r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light"},r.a.createElement(d.b,{className:"navbar-brand",to:p.getUrl("/")}," ","Writtter"," "),r.a.createElement("div",{className:"collapse navbar-collapse show",id:"navbarSupportedContent"},r.a.createElement("ul",{className:"navbar-nav mr-auto"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(d.b,{className:"nav-link",to:p.getUrl("/about")},"About")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(d.b,{className:"nav-link",to:p.getUrl("/create")},"Create")),e[0],e[1])))}var R=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).state={stories:null,isLoading:!1,userId:e.userId||null,liked:e.liked||!1},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e,t,a,n;return E.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:if(this.setState({isLoading:!0}),r.prev=1,e={Accept:"application/json","Content-Type":"application/json"},v.has("auth")&&(e=Object(x.a)({},e,{},v.get("auth"))),t={method:"GET",headers:e},!this.state.userId||this.state.liked){r.next=11;break}return r.next=8,E.a.awrap(fetch(p.getApi("/stories/users/".concat(this.state.userId)),t));case 8:a=r.sent,r.next=20;break;case 11:if(!this.state.userId||!this.state.liked){r.next=17;break}return r.next=14,E.a.awrap(fetch(p.getApi("/stories/likes/".concat(this.state.userId)),t));case 14:a=r.sent,r.next=20;break;case 17:return r.next=19,E.a.awrap(fetch(p.getApi("/stories/all"),t));case 19:a=r.sent;case 20:if(a.ok){r.next=23;break}throw console.log("Error fetching stories",a),new Error("Could not fetch stories");case 23:return r.next=25,E.a.awrap(a.json());case 25:n=r.sent,this.setState({stories:n,isLoading:!1}),r.next=32;break;case 29:r.prev=29,r.t0=r.catch(1),this.setState({error:r.t0,isLoading:!1});case 32:case"end":return r.stop()}}),null,this,[[1,29]])}},{key:"render",value:function(){var e=this.state,t=e.stories,a=e.isLoading,n=e.error;if(n)return r.a.createElement("div",{className:"App-section"}," ","An error occurred, sorry: ",n.message," ");if(a||!t)return r.a.createElement("div",{className:"App-section"}," Loading story... ");if(Array.isArray(t)&&0===t.length)return r.a.createElement("div",{className:"App-section"}," No stories ");var s=t.map((function(e){return r.a.createElement("li",{key:e.id,className:"list-group-item text-secondary"},r.a.createElement("b",null,r.a.createElement(d.b,{to:p.getUrl("/story/".concat(e.id))},e.name))," ","\u2014 by"," ",r.a.createElement(d.b,{to:p.getUrl("/user/".concat(e.ownerId))},e.ownerId)," ","\u2014 ",new Date(e.lastEditedAt||e.createdAt).toDateString())}));return r.a.createElement("ul",{name:"rules",className:"list-group"},s)}}]),t}(n.Component);function M(){return r.a.createElement("div",{className:"App-section"}," Coming soon... ")}function q(){return r.a.createElement("div",{className:"App-section"}," Coming soon... ")}var W=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).state={isLoading:!1,userId:e.userId,userData:e.userData||null,error:null},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e,t,a,n;return E.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:if(this.setState({isLoading:!0}),e={Accept:"application/json","Content-Type":"application/json"},v.has("auth")&&(e=Object(x.a)({},e,{},v.get("auth"))),t={method:"GET",headers:e},r.prev=4,this.state.userId){r.next=11;break}return r.next=8,E.a.awrap(fetch(p.getApi("/users/auth"),t));case 8:a=r.sent,r.next=14;break;case 11:return r.next=13,E.a.awrap(fetch(p.getApi("/users/".concat(this.state.userId)),t));case 13:a=r.sent;case 14:if(a.ok){r.next=17;break}throw console.log("Request failed",a),new Error(a.statusText);case 17:return r.next=19,E.a.awrap(a.json());case 19:n=r.sent,this.setState({isLoading:!1,userData:n,userId:n.id}),r.next=27;break;case 23:r.prev=23,r.t0=r.catch(4),console.error("An error occurred: ",r.t0),this.setState({error:r.t0,isLoading:!1});case 27:case"end":return r.stop()}}),null,this,[[4,23]])}},{key:"render",value:function(){var e=this.state,t=e.error,a=e.isLoading,n=e.userData;return t||!a&&!n?r.a.createElement("section",{className:"App-section"},r.a.createElement("h1",null,"An error occurred: ",t&&t.message)):a?r.a.createElement("section",{className:"App-section"},r.a.createElement("h1",null,"Loading...")):r.a.createElement("div",null,r.a.createElement(d.a,null,r.a.createElement("div",null,r.a.createElement("h1",null,r.a.createElement("small",{className:"text-muted"},"Profile of")," ",this.state.userData.username)),r.a.createElement(z,{userId:this.state.userId,activeViewName:window.location.pathname}),r.a.createElement(h.c,null,r.a.createElement(h.a,{path:p.getUrl("/user/:userId/stories")},r.a.createElement(R,{liked:!1,userId:this.state.userId})),r.a.createElement(h.a,{path:p.getUrl("/user/:userId/competitions")},r.a.createElement(M,{userId:this.state.userId})),r.a.createElement(h.a,{path:p.getUrl("/user/:userId/likes")},r.a.createElement(R,{liked:!0,userId:this.state.userId})),r.a.createElement(h.a,{path:p.getUrl("/user/:userId/comments")},r.a.createElement(q,{userId:this.state.userId})),r.a.createElement(h.a,{path:p.getUrl("/user/:userId/rules")},r.a.createElement(q,{userId:this.state.userId})),r.a.createElement(h.a,{path:p.getUrl("/user/:userId")},r.a.createElement(R,{liked:!1,userId:this.state.userId})))))}}]),t}(n.Component);function z(e){var t=e.userId,a=e.activeViewName,n=function(e){return"user/".concat(t,"/").concat(e)===a?"btn btn-lg btn-block btn-outline-primary":"btn btn-lg btn-block btn-primary"};return r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light rounded"},r.a.createElement("div",{className:"navbar-collapse justify-content-md-center"},r.a.createElement("ul",{className:"navbar-nav"},r.a.createElement("li",{className:"nav-item active"},r.a.createElement("span",{className:"nav-link"},r.a.createElement(d.b,{to:p.getUrl("/user/".concat(t,"/stories")),className:n("story")},"Stories"))),r.a.createElement("li",{className:"nav-item"},r.a.createElement("span",{className:"nav-link"},r.a.createElement(d.b,{to:p.getUrl("/user/".concat(t,"/competitions")),className:n("competition")},"Competitions"))),r.a.createElement("li",{className:"nav-item"},r.a.createElement("span",{className:"nav-link"},r.a.createElement(d.b,{to:p.getUrl("/user/".concat(t,"/rules")),className:n("rules")},"Rules"))),r.a.createElement("li",{className:"nav-item"},r.a.createElement("span",{className:"nav-link"},r.a.createElement(d.b,{to:p.getUrl("/user/".concat(t,"/comments")),className:n("comments")},"Comments"))),r.a.createElement("li",{className:"nav-item"},r.a.createElement("span",{className:"nav-link"},r.a.createElement(d.b,{to:p.getUrl("/user/".concat(t,"/likes")),className:n("likes")},"Likes"))))))}var _=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).state={username:"",email:"",password:"",data:null,auth:null},a.handleChange=a.handleChange.bind(Object(f.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(f.a)(a)),a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"handleChange",value:function(e,t){var a={};a[e]=t.target.value,this.setState(a)}},{key:"handleSubmit",value:function(e){var t,a,n;return E.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return e.preventDefault(),r.next=3,E.a.awrap(fetch(p.getApi("/users"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({username:this.state.username,email:this.state.email,password:this.state.password})}));case 3:return t=r.sent,r.next=6,E.a.awrap(t.json());case 6:a=r.sent,n={authorization:t.headers.get("authorization"),"x-access-token":t.headers.get("x-access-token")},this.setState({data:a,auth:n}),console.log("Register Request",JSON.stringify(this.state)),window.location.href=p.getUrl("/?a=".concat(n.authorization));case 11:case"end":return r.stop()}}),null,this)}},{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement("h1",null,"Create a new account"),r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("fieldset",{className:"form-group"},r.a.createElement("label",null,"Username:"),r.a.createElement("div",{className:"input-group"},r.a.createElement("div",{className:"input-group-prepend"},r.a.createElement("div",{className:"input-group-text"},"@")),r.a.createElement("input",{value:this.state.username,onChange:this.handleChange.bind(this,"username"),id:"username",type:"text",name:"title",className:"form-control",placeholder:"Enter your username",required:!0}))),r.a.createElement("fieldset",{className:"form-group"},r.a.createElement("label",null,"Email:"),r.a.createElement("input",{value:this.state.email,onChange:this.handleChange.bind(this,"email"),id:"email",type:"email",name:"email",className:"form-control",placeholder:"Enter your email address",required:!0})),r.a.createElement("fieldset",{className:"form-group"},r.a.createElement("label",null,"Password:"),r.a.createElement("div",{className:"input-group"},r.a.createElement("div",{className:"input-group-prepend"},r.a.createElement("div",{className:"input-group-text"},r.a.createElement(y.f,{icon:y.c}))),r.a.createElement("input",{value:this.state.password,onChange:this.handleChange.bind(this,"password"),id:"password",type:"password",name:"password",className:"form-control",placeholder:"Enter your password",required:!0})),r.a.createElement("small",{id:"passwordHelpInline",className:"text-muted"},"Must be 8-20 characters long.")),r.a.createElement("fieldset",{className:"form-group"},r.a.createElement("input",{className:"form-check-input",type:"checkbox",name:"rules",required:!0}),r.a.createElement("label",{className:"form-check-label"},"Accept rules and email subscription"),r.a.createElement("small",{id:"passwordHelpInline",className:"text-muted"},"No commercial offer will be send to you, just regular usage.")),r.a.createElement("fieldset",{className:"form-group text-center"},r.a.createElement("input",{type:"submit",value:"Create account",className:"btn btn-primary"}))))}}]),t}(n.Component),B=new(function(){function e(){Object(l.a)(this,e),window.location.search&&(this.query=new URLSearchParams(window.location.search))}return Object(i.a)(e,[{key:"setAuth",value:function(){if(this.query){var e=this.query.get("a");if(e&&"undefined"!==e){var t={authorization:e,"x-access-token":e};v.set("auth",t)}}}}]),e}()),J=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).state={story:{},isLoading:!1,error:null,storyId:e.storyId},B.setAuth(),a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e,t;return E.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return this.setState({isLoading:!0}),a.prev=1,a.next=4,E.a.awrap(fetch(p.getApi("/stories/".concat(this.state.storyId),{method:"GET",headers:Object(x.a)({Accept:"application/json","Content-Type":"application/json"},v.get("auth")||{})})));case 4:if((e=a.sent).ok){a.next=8;break}throw console.error("Failed to load story",e),new Error("Something went wrong...");case 8:return a.next=10,E.a.awrap(e.json());case 10:return t=a.sent,this.setState({story:t,isLoading:!1}),a.abrupt("return");case 15:a.prev=15,a.t0=a.catch(1),this.setState({error:a.t0,isLoading:!1});case 18:case"end":return a.stop()}}),null,this,[[1,15]])}},{key:"render",value:function(){var e=this.state,t=e.story,a=e.isLoading,n=e.error;if(n)return r.a.createElement("p",null,"An error occurred, sorry: ",n.message);if(a||!t)return r.a.createElement("div",null," Loading story ");var s=r.a.createElement(d.b,{to:p.getUrl("/story/".concat(t.id,"/edit")),className:"btn btn-lg btn-block btn-primary"},"Edit the story"),c=r.a.createElement(d.b,{to:p.getUrl("/login"),className:"btn btn-lg btn-block btn-primary"},"Connect to edit this story"),l=new Date(t.lastEditedAt||t.createdAt);return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"card panel-default"},r.a.createElement("div",{className:"card-header text-center"},r.a.createElement("b",null,t.name)," \u2014 by"," ",r.a.createElement(d.b,{to:p.getUrl("/user/".concat(t.ownerId))},t.ownerId)," ","\u2014 ",l.toDateString()),r.a.createElement("div",{className:"card-body"},t.content||"No content for now"),r.a.createElement("div",{className:"card-footer"},v.has("auth")?s:c)))}}]),t}(n.Component),G=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).state={isLoading:!1,formIsHidden:!1,error:null,storyId:e.storyId,ownerId:null,name:null,isPublic:!1,isCommentsDisabled:!1,description:"",content:""},a.toggleForm=a.toggleForm.bind(Object(f.a)(a)),a.handleCheck=a.handleCheck.bind(Object(f.a)(a)),a.handleChange=a.handleChange.bind(Object(f.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(f.a)(a)),a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e,t;return E.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return this.setState({isLoading:!0}),a.prev=1,a.next=4,E.a.awrap(fetch(p.getApi("/stories/".concat(this.state.storyId),{method:"GET",headers:Object(x.a)({Accept:"application/json","Content-Type":"application/json"},v.get("auth")||{})})));case 4:if((e=a.sent).ok){a.next=8;break}throw console.error("Failed to load story",e),new Error("Something went wrong...");case 8:return a.next=10,E.a.awrap(e.json());case 10:return t=a.sent,this.setState(Object(x.a)({},t,{isLoading:!1})),a.abrupt("return");case 15:a.prev=15,a.t0=a.catch(1),this.setState({error:a.t0,isLoading:!1});case 18:case"end":return a.stop()}}),null,this,[[1,15]])}},{key:"toggleForm",value:function(){this.setState({formIsHidden:!this.state.formIsHidden})}},{key:"handleChange",value:function(e,t){this.setState(Object(O.a)({},e,t.target.value))}},{key:"handleCheck",value:function(e,t){this.setState(Object(O.a)({},e,t.target.checked))}},{key:"handleSubmit",value:function(e){var t,a;return E.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return e.preventDefault(),n.next=3,E.a.awrap(fetch(p.getApi("/stories/".concat(this.state.storyId)),{method:"PUT",headers:Object(x.a)({Accept:"application/json","Content-Type":"application/json"},v.get("auth")||{}),body:JSON.stringify({name:this.state.name,description:this.state.description,isPublic:this.state.isPublic,isCommentsDisabled:!this.state.isCommentsDisabled,content:this.state.content})}));case 3:if((t=n.sent).ok){n.next=7;break}throw console.error("Failed to update story",t),new Error(t.statusText);case 7:return n.next=9,E.a.awrap(t.json());case 9:a=n.sent,window.location.href=p.getUrl("/story/".concat(a.id,"/?a=").concat((v.get("auth")||{}).authorization));case 11:case"end":return n.stop()}}),null,this)}},{key:"render",value:function(){var e=this.state,t=e.storyId,a=e.isLoading,n=e.name,s=e.error;return s?r.a.createElement("div",{className:"App-section"},r.a.createElement("h1",null,"An error occurred, sorry: ",s.message)):!a&&t&&n?r.a.createElement("div",{className:"container"},r.a.createElement("div",null,r.a.createElement("h1",null,"Edit"," ",r.a.createElement(d.b,{to:p.getUrl("/story/".concat(t))},r.a.createElement("i",null,this.state.name))," ","by"," ",r.a.createElement(d.b,{to:p.getUrl("/user/".concat(this.state.ownerId))},this.state.ownerId)," "),!this.state.formIsHidden&&r.a.createElement(H,{binder:this})),r.a.createElement("div",null,r.a.createElement("div",{className:"card panel-default"},r.a.createElement("div",{className:"card-header text-center"},r.a.createElement("button",{className:"btn btn-primary",onClick:this.toggleForm},r.a.createElement(y.f,{icon:y.d})," Toggle story properties")," ",r.a.createElement(d.b,{className:"btn btn-primary",to:p.getUrl("/story/".concat(t))},r.a.createElement(y.f,{icon:y.a})," Back")),r.a.createElement("div",{className:"card-body"},r.a.createElement("textarea",{form:"storyEditor",name:"content",className:"form-control",placeholder:"Write your story here",rows:"3",value:this.state.content,onChange:this.handleChange.bind(this,"content")})),r.a.createElement("div",{className:"card-footer"},r.a.createElement("button",{form:"storyEditor",type:"button",className:"btn btn-lg btn-block btn-primary",placeholder:"Edit the story",onClick:this.handleSubmit},"Edit the story"))))):r.a.createElement("div",{className:"App-section"},r.a.createElement("h1",null,"Loading story"))}}]),t}(n.Component);function H(e){var t=e.binder;return r.a.createElement("form",{id:"storyEditor",onSubmit:t.handleSubmit},r.a.createElement("fieldset",{className:"form-group"},r.a.createElement("label",{htmlFor:"title"},"Title:"),r.a.createElement("input",{id:"title",type:"text",name:"title",className:"form-control",placeholder:"Enter title",value:t.state.name,onChange:t.handleChange.bind(t,"name")})),r.a.createElement("fieldset",{className:"form-group"},r.a.createElement("label",null,"Description:"),r.a.createElement("textarea",{name:"description",className:"form-control",placeholder:"Write a description for your story",rows:"3",value:t.state.description,onChange:t.handleChange.bind(t,"description")})),r.a.createElement("fieldset",{className:"form-group"},r.a.createElement("input",{className:"form-check-input",type:"checkbox",name:"isPublic",value:t.state.isPublic,onChange:t.handleCheck.bind(t,"isPublic")}),r.a.createElement("label",{className:"form-check-label"},"Public Mode")),r.a.createElement("fieldset",{className:"form-group"},r.a.createElement("input",{className:"form-check-input",type:"checkbox",name:"commentsEnabled",value:t.state.isCommentsDisabled,onChange:t.handleCheck.bind(t,"isCommentsDisabled")}),r.a.createElement("label",{className:"form-check-label"},"Comments enabled")),r.a.createElement("fieldset",{className:"form-group text-center"},r.a.createElement("input",{type:"submit",value:"Edit story",className:"btn btn-primary"})))}var V=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).state={},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return r.a.createElement("section",{className:"App-section"},r.a.createElement(R,null))}}]),t}(n.Component),Y=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).state={userId:""},B.setAuth(),a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(d.a,null,r.a.createElement(F,null),r.a.createElement(h.c,null,r.a.createElement(h.a,{path:p.getUrl("/about"),component:$}),r.a.createElement(h.a,{path:p.getUrl("/create"),component:S}),r.a.createElement(h.a,{path:p.getUrl("/search"),component:A}),r.a.createElement(h.a,{path:p.getUrl("/profile")},r.a.createElement(W,{userId:this.state.userId})),r.a.createElement(h.a,{path:p.getUrl("/user/:userId"),component:function(e){var t=e.match;return r.a.createElement(W,{userId:t.params.userId})}}),r.a.createElement(h.a,{path:p.getUrl("/login"),component:g}),r.a.createElement(h.a,{path:p.getUrl("/register"),component:_}),r.a.createElement(h.a,{path:p.getUrl("/story/:id/edit"),component:function(e){var t=e.match;return r.a.createElement(G,{storyId:t.params.id})}}),r.a.createElement(h.a,{path:p.getUrl("/story/:id"),component:function(e){var t=e.match;return r.a.createElement(J,{storyId:t.params.id})}}),r.a.createElement(h.a,{exact:!0,path:p.getUrl("/"),component:V}))))}}]),t}(n.Component);function $(e){return r.a.createElement("section",{className:"App-section"},r.a.createElement("h1",null,"Writtter"),r.a.createElement("h4",null,"The place to play with words and stories, together."),r.a.createElement("p",null,"Created by ",r.a.createElement("a",{href:"https://g-ongenae.github.io/"},"Guillaume Ongenae")))}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(Y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[27,1,2]]]);
//# sourceMappingURL=main.864f57c1.chunk.js.map