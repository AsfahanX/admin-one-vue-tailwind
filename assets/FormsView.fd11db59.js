import{o as y,q as C,j as h,r as D,s as F,u,t as N,v as w,x,c as O,w as l,_ as j,a as e,b as q,d,g as c,y as S,z,A as i,B as p,i as v,f as _,C as E,D as M,k as T,E as $,F as G}from"./index.d7a27576.js";import{_ as b}from"./FormCheckRadioGroup.2e490d84.js";import{_ as Y}from"./FormFilePicker.1ad3875e.js";import{_ as s}from"./FormField.f2cff32e.js";import{_ as g}from"./SectionTitle.3bd42cc2.js";const A={class:"flex flex-col mb-6 -mt-6 -mr-6 -ml-6 animate-fade-in"},H={__name:"NotificationBarInCard",props:{color:{type:String,required:!0}},setup(V){return(r,t)=>(y(),C("div",A,[h("div",{class:F([[u(N)[V.color]],"rounded-t-2xl flex flex-col p-6 transition-colors"])},[D(r.$slots,"default")],2)]))}},I={class:"capitalize"},P={__name:"FormsView",setup(V){const r=[{id:1,label:"Business development"},{id:2,label:"Marketing"},{id:3,label:"Sales"}],t=w({name:"John Doe",email:"john.doe@example.com",phone:"",department:r[0],subject:"",question:""}),n=w({checkbox:["lorem"],radio:"one",switch:["one"],file:null}),k=()=>{},U=x(!0),m=x(0),f=["info","success","danger","warning"],B=()=>{m.value=f[m.value+1]?m.value+1:0};return(L,o)=>(y(),O(j,null,{default:l(()=>[e(v,null,{default:l(()=>[e(q,{icon:u(M),title:"Forms example",main:""},{default:l(()=>[e(d,{href:"https://github.com/justboil/admin-one-vue-tailwind",target:"_blank",icon:u(T),label:"Star on GitHub",color:"contrast","rounded-full":"",small:""},null,8,["icon"])]),_:1},8,["icon"]),e(c,{form:"",onSubmit:S(k,["prevent"])},{footer:l(()=>[e(z,null,{default:l(()=>[e(d,{type:"submit",color:"info",label:"Submit"}),e(d,{type:"reset",color:"info",outline:"",label:"Reset"})]),_:1})]),default:l(()=>[e(s,{label:"Grouped with icons"},{default:l(()=>[e(i,{modelValue:t.name,"onUpdate:modelValue":o[0]||(o[0]=a=>t.name=a),icon:u($)},null,8,["modelValue","icon"]),e(i,{modelValue:t.email,"onUpdate:modelValue":o[1]||(o[1]=a=>t.email=a),type:"email",icon:u(G)},null,8,["modelValue","icon"])]),_:1}),e(s,{label:"With help line",help:"Do not enter the leading zero"},{default:l(()=>[e(i,{modelValue:t.phone,"onUpdate:modelValue":o[2]||(o[2]=a=>t.phone=a),type:"tel",placeholder:"Your phone number"},null,8,["modelValue"])]),_:1}),e(s,{label:"Dropdown"},{default:l(()=>[e(i,{modelValue:t.department,"onUpdate:modelValue":o[3]||(o[3]=a=>t.department=a),options:r},null,8,["modelValue"])]),_:1}),e(p),e(s,{label:"Question",help:"Your question. Max 255 characters"},{default:l(()=>[e(i,{type:"textarea",placeholder:"Explain how we can help you"})]),_:1})]),_:1},8,["onSubmit"])]),_:1}),e(g,null,{default:l(()=>[_("Custom elements")]),_:1}),e(v,null,{default:l(()=>[e(c,null,{default:l(()=>[e(s,{label:"Checkbox"},{default:l(()=>[e(b,{modelValue:n.checkbox,"onUpdate:modelValue":o[4]||(o[4]=a=>n.checkbox=a),name:"sample-checkbox",options:{lorem:"Lorem",ipsum:"Ipsum",dolore:"Dolore"}},null,8,["modelValue"])]),_:1}),e(p),e(s,{label:"Radio"},{default:l(()=>[e(b,{modelValue:n.radio,"onUpdate:modelValue":o[5]||(o[5]=a=>n.radio=a),name:"sample-radio",type:"radio",options:{one:"One",two:"Two"}},null,8,["modelValue"])]),_:1}),e(p),e(s,{label:"Switch"},{default:l(()=>[e(b,{modelValue:n.switch,"onUpdate:modelValue":o[6]||(o[6]=a=>n.switch=a),name:"sample-switch",type:"switch",options:{one:"One",two:"Two"}},null,8,["modelValue"])]),_:1}),e(p),e(Y,{modelValue:n.file,"onUpdate:modelValue":o[7]||(o[7]=a=>n.file=a),label:"Upload"},null,8,["modelValue"])]),_:1}),e(g,null,{default:l(()=>[_("Form with status example")]),_:1}),e(c,{class:"md:w-7/12 lg:w-5/12 xl:w-4/12 shadow-2xl md:mx-auto","is-form":"","is-hoverable":"",onSubmit:S(B,["prevent"])},{footer:l(()=>[e(d,{label:"Trigger",type:"submit",color:"info"})]),default:l(()=>[e(H,{color:f[m.value],"is-placed-with-header":U.value},{default:l(()=>[h("span",null,[h("b",I,E(f[m.value]),1),_(" state")])]),_:1},8,["color","is-placed-with-header"]),e(s,{label:"Fields"},{default:l(()=>[e(i,{modelValue:t.name,"onUpdate:modelValue":o[8]||(o[8]=a=>t.name=a),"icon-left":u($),help:"Your full name",placeholder:"Name"},null,8,["modelValue","icon-left"])]),_:1})]),_:1},8,["onSubmit"])]),_:1})]),_:1}))}};export{P as default};