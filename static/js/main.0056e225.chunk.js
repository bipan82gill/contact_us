(this.webpackJsonpcontact_us=this.webpackJsonpcontact_us||[]).push([[0],{22:function(e,t,a){},23:function(e,t,a){},43:function(e,t,a){"use strict";a.r(t);var s=a(2),n=a.n(s),l=a(12),c=a.n(l),i=(a(22),a(23),a(13)),m=a(14),r=a(17),o=a(16),h=a(15),u=a.n(h),j=a(0),d=function(e){Object(r.a)(a,e);var t=Object(o.a)(a);function a(){var e;Object(i.a)(this,a);for(var s=arguments.length,n=new Array(s),l=0;l<s;l++)n[l]=arguments[l];return(e=t.call.apply(t,[this].concat(n))).state={name:"",lastname:"",email:"",message:"",sent:!1},e.handleName=function(t){e.setState({name:t.target.value})},e.handleLastName=function(t){e.setState({lastname:t.target.value})},e.handleEmail=function(t){e.setState({email:t.target.value})},e.handleMessage=function(t){e.setState({message:t.target.value})},e.formSubmit=function(t){t.preventDefault();var a={name:e.state.name,lastname:e.state.lastname,email:e.state.email,message:e.state.message};u.a.post("/api/forma",a).then((function(t){e.setState({sent:!0},e.resetForm())})).catch((function(){console.log("message not sent")}))},e.resetForm=function(){e.setState({name:"",lastname:"",email:"",message:""}),setTimeout((function(){e.setState({sent:!1})}),3e3)},e}return Object(m.a)(a,[{key:"render",value:function(){return Object(j.jsx)("div",{className:"container",children:Object(j.jsxs)("form",{children:[Object(j.jsxs)("div",{className:"singleItem",children:[Object(j.jsx)("label",{htmlFor:"name",children:"Name"}),Object(j.jsx)("input",{type:"text",name:"name",className:"name",placeholder:"name....",value:this.state.name,onChange:this.handleName})]}),Object(j.jsxs)("div",{className:"singleItem",children:[Object(j.jsx)("label",{htmlFor:"lastname",children:"Last Name"}),Object(j.jsx)("input",{type:"text",name:"lastname",className:"lastname",placeholder:"Last name....",value:this.state.lastname,onChange:this.handleLastName})]}),Object(j.jsxs)("div",{className:"singleItem",children:[Object(j.jsx)("label",{htmlFor:"email",children:"Email"}),Object(j.jsx)("input",{type:"email",name:"email",className:"email",placeholder:"email....",value:this.state.email,onChange:this.handleEmail})]}),Object(j.jsxs)("div",{className:"textArea singleItem",children:[Object(j.jsx)("label",{htmlFor:"message",children:"Message"}),Object(j.jsx)("textarea",{name:"message",id:"",cols:"30",rows:"5",placeholder:"your message ...",value:this.state.message,onChange:this.handleMessage})]}),Object(j.jsx)("div",{className:"msg",children:"Message has been sent."}),Object(j.jsx)("div",{className:"btn",children:Object(j.jsx)("button",{type:"submit",children:"Submit"})})]})})}}]),a}(s.Component);var b=function(){return Object(j.jsx)("div",{className:"App",children:Object(j.jsx)(d,{})})},g=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,44)).then((function(t){var a=t.getCLS,s=t.getFID,n=t.getFCP,l=t.getLCP,c=t.getTTFB;a(e),s(e),n(e),l(e),c(e)}))};c.a.render(Object(j.jsx)(n.a.StrictMode,{children:Object(j.jsx)(b,{})}),document.getElementById("root")),g()}},[[43,1,2]]]);
//# sourceMappingURL=main.0056e225.chunk.js.map