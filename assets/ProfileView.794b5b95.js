import{Q as $,G as N,x as q,o as g,c as v,w as a,a as e,R as U,i,C as k,u as t,S as j,T as C,U as R,f as p,j as _,v as b,_ as P,b as A,d,y as V,z as x,A as m,B,h as F,E as h,k as M,F as E,V as G,W as y}from"./index.4ea654b0.js";import{a as T,_ as r}from"./FormField.0fb8ffeb.js";import{_ as Y}from"./FormFilePicker.3dbfaf3e.js";const D={class:"space-y-3 text-center md:text-left lg:mx-12"},H={class:"flex justify-center md:block"},O={class:"text-2xl"},z=_(" Howdy, "),L=_("! "),Q=i("p",null,[_("Last login "),i("b",null,"12 mins ago"),_(" from "),i("b",null,"127.0.0.1")],-1),W={class:"flex justify-center md:block"},I={__name:"UserCard",setup(S){const u=$(),n=N(()=>u.userName),s=q(!1);return(f,c)=>(g(),v(p,null,{default:a(()=>[e(R,{type:"justify-around lg:justify-center"},{default:a(()=>[e(U,{class:"lg:mx-12"}),i("div",D,[i("div",H,[e(T,{modelValue:s.value,"onUpdate:modelValue":c[0]||(c[0]=w=>s.value=w),name:"notifications-switch",type:"switch",label:"Notifications","input-value":!0},null,8,["modelValue"])]),i("h1",O,[z,i("b",null,k(t(n)),1),L]),Q,i("div",W,[e(j,{label:"Verified",color:"info",icon:t(C)},null,8,["icon"])])])]),_:1})]),_:1}))}},J={class:"grid grid-cols-1 lg:grid-cols-2 gap-6"},ee={__name:"ProfileView",setup(S){const u=$(),n=b({name:u.userName,email:u.userEmail}),s=b({password_current:"",password:"",password_confirmation:""}),f=()=>{u.setUser(n)},c=()=>{};return(w,o)=>(g(),v(P,null,{default:a(()=>[e(F,null,{default:a(()=>[e(A,{icon:t(h),title:"Profile",main:""},{default:a(()=>[e(d,{href:"https://github.com/justboil/admin-one-vue-tailwind",target:"_blank",icon:t(M),label:"Star on GitHub",color:"contrast","rounded-full":"",small:""},null,8,["icon"])]),_:1},8,["icon"]),e(I,{class:"mb-6"}),i("div",J,[e(p,{"is-form":"",onSubmit:V(f,["prevent"])},{footer:a(()=>[e(x,null,{default:a(()=>[e(d,{color:"info",type:"submit",label:"Submit"}),e(d,{color:"info",label:"Options",outline:""})]),_:1})]),default:a(()=>[e(r,{label:"Avatar",help:"Max 500kb"},{default:a(()=>[e(Y,{label:"Upload"})]),_:1}),e(r,{label:"Name",help:"Required. Your name"},{default:a(()=>[e(m,{modelValue:n.name,"onUpdate:modelValue":o[0]||(o[0]=l=>n.name=l),icon:t(h),name:"username",required:"",autocomplete:"username"},null,8,["modelValue","icon"])]),_:1}),e(r,{label:"E-mail",help:"Required. Your e-mail"},{default:a(()=>[e(m,{modelValue:n.email,"onUpdate:modelValue":o[1]||(o[1]=l=>n.email=l),icon:t(E),type:"email",name:"email",required:"",autocomplete:"email"},null,8,["modelValue","icon"])]),_:1})]),_:1},8,["onSubmit"]),e(p,{"is-form":"",onSubmit:V(c,["prevent"])},{footer:a(()=>[e(x,null,{default:a(()=>[e(d,{type:"submit",color:"info",label:"Submit"}),e(d,{color:"info",label:"Options",outline:""})]),_:1})]),default:a(()=>[e(r,{label:"Current password",help:"Required. Your current password"},{default:a(()=>[e(m,{modelValue:s.password_current,"onUpdate:modelValue":o[2]||(o[2]=l=>s.password_current=l),icon:t(G),name:"password_current",type:"password",required:"",autocomplete:"current-password"},null,8,["modelValue","icon"])]),_:1}),e(B),e(r,{label:"New password",help:"Required. New password"},{default:a(()=>[e(m,{modelValue:s.password,"onUpdate:modelValue":o[3]||(o[3]=l=>s.password=l),icon:t(y),name:"password",type:"password",required:"",autocomplete:"new-password"},null,8,["modelValue","icon"])]),_:1}),e(r,{label:"Confirm password",help:"Required. New password one more time"},{default:a(()=>[e(m,{modelValue:s.password_confirmation,"onUpdate:modelValue":o[4]||(o[4]=l=>s.password_confirmation=l),icon:t(y),name:"password_confirmation",type:"password",required:"",autocomplete:"new-password"},null,8,["modelValue","icon"])]),_:1})]),_:1},8,["onSubmit"])])]),_:1})]),_:1}))}};export{ee as default};