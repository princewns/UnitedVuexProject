(function(){"use strict";var t={923:function(t,e,o){var n=o(144),r=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"app"}},[t.$store.state.user?o("div",[o("span",[t._v(t._s(t.$store.state.user)+"님 환영합니다.")]),o("button",{on:{click:t.logOut}},[t._v("로그아웃")])]):t._e(),o("nav",[o("router-link",{attrs:{to:"/"}},[t._v("Home")]),t._v(" | "),o("router-link",{attrs:{to:"/list"}},[t._v("List")]),t._v(" | "),o("router-link",{attrs:{to:"/writeform"}},[t._v("Write")])],1),o("router-view")],1)},i=[],s={data(){return{userOut:""}},methods:{logOut(){this.$store.commit("loginuser",this.userOut),this.$router.push("/")}}},m=s,a=o(1),u=(0,a.Z)(m,r,i,!1,null,null,null),c=u.exports,l=o(345),d=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"home"},[o("label",[t._v("유저 이름")]),t._v(" "),o("br"),o("input",{directives:[{name:"model",rawName:"v-model",value:t.user,expression:"user"}],attrs:{type:"text"},domProps:{value:t.user},on:{input:function(e){e.target.composing||(t.user=e.target.value)}}}),o("button",{on:{click:t.loginuser}},[t._v("로그인")])])},p=[],h={name:"HomeView",components:{},data(){return{user:""}},methods:{loginuser(){this.$store.commit("loginuser",this.user),this.$router.push("/list"),this.user=""}}},v=h,f=(0,a.Z)(v,d,p,!1,null,null,null),_=f.exports,g=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("table",[t._m(0),t._l(t.memos,(function(e){return o("tr",{key:e.id},[o("td",[t._v(t._s(e.id))]),o("td",[t._v(t._s(e.writer))]),o("td",{on:{click:function(o){return t.$router.push("/list/"+e.id)}}},[t._v(t._s(e.title))])])}))],2)])},w=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("tr",[o("td",[t._v("아이디")]),o("td",[t._v("작성자")]),o("td",[t._v("제목")])])}],$={data(){return{memos:this.$store.state.memos}},created(){this.$store.dispatch("getMemoList")}},b=$,x=(0,a.Z)(b,g,w,!1,null,null,null),k=x.exports,O=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("h2",[t._v(t._s(t.$store.state.memo.title))]),o("p",[t._v(t._s(t.$store.state.memo.memo))]),o("hr"),o("ul",t._l(t.$store.state.comments,(function(e,n){return o("li",{key:n},[e.writer?o("span",[t._v(t._s(e.writer)+" : "+t._s(e.comment))]):o("span",[t._v("익명 : "+t._s(e.comment))])])})),0),o("hr"),o("input",{directives:[{name:"model",rawName:"v-model",value:t.comment,expression:"comment"}],attrs:{type:"text"},domProps:{value:t.comment},on:{input:function(e){e.target.composing||(t.comment=e.target.value)}}}),o("button",{on:{click:t.addComment}},[t._v("추가")])])},y=[],M={data(){return{comment:""}},created(){this.$store.dispatch("getMemo",this.$route.params.id),this.$store.dispatch("getComment",this.$route.params.id)},methods:{addComment(){const t={memoId:this.$route.params.id,writer:this.$store.state.user,comment:this.comment};this.$store.dispatch("postComment",t),this.comment=""}}},Z=M,C=(0,a.Z)(Z,O,y,!1,null,null,null),P=C.exports,E=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("h2",[t._v("글을 작성하는 곳입니다.")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],attrs:{type:"text"},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}}),o("br"),o("textarea",{directives:[{name:"model",rawName:"v-model",value:t.memo,expression:"memo"}],attrs:{cols:"30",rows:"10"},domProps:{value:t.memo},on:{input:function(e){e.target.composing||(t.memo=e.target.value)}}}),o("br"),o("button",{on:{click:t.addmemo}},[t._v("제출")])])},j=[],L={data(){return{title:"",memo:"",writer:this.$store.state.user}},methods:{addmemo(){this.$store.dispatch("addMemo",{data:{title:this.title,memo:this.memo,writer:this.writer}}).then((t=>{console.log(t.data)})),this.$router.push("/list")}}},N=L,T=(0,a.Z)(N,E,j,!1,null,null,null),H=T.exports;n.Z.use(l.Z);const F=[{path:"/",name:"home",component:_},{path:"/list",name:"list",component:k},{path:"/list/:id",name:"pageview",component:P},{path:"/writeform",name:"writeform",component:H}],I=new l.Z({mode:"history",base:"/",routes:F});var S=I,V=o(629),W=o(669),q=o.n(W);n.Z.use(V.ZP);var z=new V.ZP.Store({state:{user:"",memos:[{id:1,writer:"익명",title:"확인용입니다."}],memo:{title:"제목",memo:"내용"},comments:[{writer:"익명",comment:"내용"}]},getters:{},mutations:{loginuser(t,e){t.user=e},changeMemoList(t,e){t.memos=e},changeMemo(t,e){t.memo=e},changeComment(t,e){t.comments=e},addMemo(t,e){t.memos=e}},actions:{getMemoList({commit:t}){q().get("/api/memo").then((e=>{t("changeMemoList",e.data)}))},getMemo({commit:t},e){q().get(`/api/memo/${e}`).then((e=>{t("changeMemo",e.data)}))},getComment({commit:t},e){q().get(`/api/comment/${e}`).then((e=>{t("changeComment",e.data)}))},postComment({commit:t},e){q().post("/api/comment",{data:{comment:e}}).then((e=>{console.log(e.data),t("changeComment",e.data)}))},addMemo({commit:t},e){q().post("/api/memo",{data:{memo:e}}).then((e=>{t("addMemo",e.data)}))}},modules:{}});n.Z.config.productionTip=!1,new n.Z({router:S,store:z,render:function(t){return t(c)}}).$mount("#app")}},e={};function o(n){var r=e[n];if(void 0!==r)return r.exports;var i=e[n]={exports:{}};return t[n](i,i.exports,o),i.exports}o.m=t,function(){var t=[];o.O=function(e,n,r,i){if(!n){var s=1/0;for(c=0;c<t.length;c++){n=t[c][0],r=t[c][1],i=t[c][2];for(var m=!0,a=0;a<n.length;a++)(!1&i||s>=i)&&Object.keys(o.O).every((function(t){return o.O[t](n[a])}))?n.splice(a--,1):(m=!1,i<s&&(s=i));if(m){t.splice(c--,1);var u=r();void 0!==u&&(e=u)}}return e}i=i||0;for(var c=t.length;c>0&&t[c-1][2]>i;c--)t[c]=t[c-1];t[c]=[n,r,i]}}(),function(){o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,{a:e}),e}}(),function(){o.d=function(t,e){for(var n in e)o.o(e,n)&&!o.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={143:0};o.O.j=function(e){return 0===t[e]};var e=function(e,n){var r,i,s=n[0],m=n[1],a=n[2],u=0;if(s.some((function(e){return 0!==t[e]}))){for(r in m)o.o(m,r)&&(o.m[r]=m[r]);if(a)var c=a(o)}for(e&&e(n);u<s.length;u++)i=s[u],o.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return o.O(c)},n=self["webpackChunkfrontend"]=self["webpackChunkfrontend"]||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))}();var n=o.O(void 0,[998],(function(){return o(923)}));n=o.O(n)})();
//# sourceMappingURL=app.01ad6cb6.js.map