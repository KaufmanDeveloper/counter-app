(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,n){e.exports=n(19)},16:function(e,t,n){},17:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(7),c=n.n(o),s=(n(16),n(9)),u=n(8),l=n(1),i=n(2),m=n(4),b=n(3),d=n(5),h=(n(17),function(e){var t=e.totalCounters;return r.a.createElement("nav",{className:"navbar navbar-light bg-light"},r.a.createElement("a",{className:"navbar-brand",href:"#"},"Navbar"," ",r.a.createElement("span",{className:"badge badge-pill badge-secondary"},t)))}),p=function(e){function t(){return Object(l.a)(this,t),Object(m.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("span",{className:this.getBadgeClasses()},this.formatCount()),r.a.createElement("button",{onClick:function(){return e.props.onIncrement(e.props.counter)},className:"btn btn-secondary btn-sm"},"Increment"),r.a.createElement("button",{onClick:function(){return e.props.onDelete(e.props.counter.id)},className:"btn btn-danger btn-sm m-2"},"Delete"))}},{key:"getBadgeClasses",value:function(){var e="badge m-2 badge-";return e+=0===this.props.counter.value?"warning":"primary"}},{key:"formatCount",value:function(){var e=this.props.counter.value;return 0===e?"Zero":e}}]),t}(a.Component),v=function(e){function t(){return Object(l.a)(this,t),Object(m.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props,t=e.onReset,n=e.counters,a=e.onDelete,o=e.onIncrement;return r.a.createElement("div",null,r.a.createElement("button",{className:"btn btn-primary btn-sm m-2",onClick:t},"Reset"),n.map(function(e){return r.a.createElement(p,{key:e.id,onDelete:a,onIncrement:o,counter:e})}))}}]),t}(a.Component),f=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(m.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(r)))).state={counters:[{id:1,value:0},{id:2,value:0},{id:3,value:0},{id:4,value:0}]},n.handleIncrement=function(e){var t=Object(u.a)(n.state.counters),a=t.indexOf(e);t[a]=Object(s.a)({},e),t[a].value++,n.setState({counters:t})},n.handleReset=function(){var e=n.state.counters.map(function(e){return e.value=0,e});n.setState({counters:e})},n.handleDelete=function(e){var t=n.state.counters.filter(function(t){return t.id!==e});n.setState({counters:t})},n}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(h,{totalCounters:this.state.counters.filter(function(e){return e.value>0}).length}),r.a.createElement("main",{className:""},r.a.createElement(v,{counters:this.state.counters,onReset:this.handleReset,onIncrement:this.handleIncrement,onDelete:this.handleDelete})))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(18);c.a.render(r.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[10,1,2]]]);
//# sourceMappingURL=main.b1cb9ff4.chunk.js.map