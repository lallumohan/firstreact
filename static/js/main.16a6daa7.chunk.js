(this.webpackJsonpmyfirstreact=this.webpackJsonpmyfirstreact||[]).push([[0],{23:function(t,e,a){},44:function(t,e,a){"use strict";a.r(e);var n=a(2),s=a.n(n),i=a(18),c=a.n(i),r=(a(23),a(3)),o=a(4),u=a(6),h=a(5),l=a(7),d=a.n(l),j=a(1),v=function(t){Object(u.a)(a,t);var e=Object(h.a)(a);function a(t){var n;return Object(r.a)(this,a),(n=e.call(this,t)).state={StateData:[]},n}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var t=this;d.a.get("https://api.rootnet.in/covid19-in/stats/latest").then((function(e){console.log(e.data);var a=e.data;t.setState({StateData:a})}))}},{key:"render",value:function(){var t=this.state.StateData.lastOriginUpdate,e=new Date(t);return Object(j.jsx)("div",{children:e.toString()})}}]),a}(n.Component),b=function(t){Object(u.a)(a,t);var e=Object(h.a)(a);function a(){var t;return Object(r.a)(this,a),(t=e.call(this)).state={StateData:[]},t}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var t=this;d.a.get("https://www.mohfw.gov.in/data/datanew.json").then((function(e){console.log(e.data);var a=e.data;t.setState({StateData:a})}))}},{key:"render",value:function(){if(null==this.state.StateData[0])return null;var t=parseInt(this.state.StateData[1].active)-parseInt(this.state.StateData[1].new_active);return Object(j.jsxs)("div",{children:[Object(j.jsxs)("span",{children:["Andaman deceased-",this.state.StateData[2].sno," "]}),t,parseInt(this.state.StateData[1].active)-parseInt(this.state.StateData[1].new_active),parseInt(this.state.StateData[36].new_positive)-parseInt(this.state.StateData[36].positive)]})}}]),a}(n.Component),p=function(t){Object(u.a)(a,t);var e=Object(h.a)(a);function a(){return Object(r.a)(this,a),e.call(this)}return Object(o.a)(a,[{key:"render",value:function(){return Object(j.jsxs)("div",{children:["welcome",Object(j.jsx)(v,{}),Object(j.jsx)(b,{})]})}}]),a}(n.Component),f=function(t){t&&t instanceof Function&&a.e(3).then(a.bind(null,45)).then((function(e){var a=e.getCLS,n=e.getFID,s=e.getFCP,i=e.getLCP,c=e.getTTFB;a(t),n(t),s(t),i(t),c(t)}))};c.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(p,{})}),document.getElementById("root")),f()}},[[44,1,2]]]);
//# sourceMappingURL=main.16a6daa7.chunk.js.map