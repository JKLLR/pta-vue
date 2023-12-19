import{_ as f,l as x,r as n,o as v,v as A,w as s,a as i,b as o,h as r,t as m,d as q,c as C,e as L}from"./entry.36dc529a.js";import{T as N}from"./Title.30ea1b7c.js";import{S,A as B}from"./AuthFrame.ff4a43fc.js";const D={components:{SocialAuth:S,"title-main":N,AuthFrame:B},data(){return{routerLink:x,valid:!0,email:"",emailRules:[e=>!!e||"E-mail is required",e=>/.+@.+\..+/.test(e)||"E-mail must be valid"],password:"",requiredRules:[e=>!!e||"This field is required"],checkbox:!1}},computed:{isMobile(){return this.$vuetify.display.smAndDown}},methods:{handleSubmit(){this.$refs.form.validate()&&console.log("data submited")}}},E={class:"head"},F={class:"separator"},R={class:"form-helper"},T={class:"form-control-label"},U={class:"btn-area mt-10"};function z(e,t,b,h,l,u){const c=n("title-main"),g=n("v-icon"),d=n("v-btn"),k=n("social-auth"),_=n("v-text-field"),p=n("v-col"),V=n("v-row"),w=n("v-checkbox"),y=n("v-form"),$=n("AuthFrame");return v(),A($,{title:e.$t("common.login_title"),subtitle:e.$t("common.login_subtitle")},{default:s(()=>[i("div",null,[i("div",E,[o(c,{head:e.$t("common.login"),align:"left",color:"secondary"},null,8,["head"]),o(d,{href:l.routerLink.education.register,class:"button-link",variant:"text",size:"small"},{default:s(()=>[o(g,{class:"icon signArrow"},{default:s(()=>[r(" mdi-arrow-right ")]),_:1}),r(" "+m(e.$t("common.login_create")),1)]),_:1},8,["href"])]),o(k),i("div",F,[i("p",null,m(e.$t("common.login_or")),1)]),o(y,{ref:"form",modelValue:l.valid,"onUpdate:modelValue":t[3]||(t[3]=a=>l.valid=a)},{default:s(()=>[o(V,{class:"spacing3"},{default:s(()=>[o(p,{cols:"12",sm:"12",class:"px-3"},{default:s(()=>[o(_,{modelValue:l.email,"onUpdate:modelValue":t[0]||(t[0]=a=>l.email=a),label:e.$t("common.login_email"),rules:l.emailRules,color:"secondary",class:"input",name:"email",filled:"",required:""},null,8,["modelValue","label","rules"])]),_:1}),o(p,{cols:"12",sm:"12",class:"px-3"},{default:s(()=>[o(_,{modelValue:l.password,"onUpdate:modelValue":t[1]||(t[1]=a=>l.password=a),label:e.$t("common.login_password"),rules:l.requiredRules,color:"secondary",type:"password",class:"input",name:"email",filled:"",required:""},null,8,["modelValue","label","rules"])]),_:1})]),_:1}),i("div",R,[i("div",T,[o(w,{modelValue:l.checkbox,"onUpdate:modelValue":t[2]||(t[2]=a=>l.checkbox=a),label:e.$t("common.login_remember"),color:"secondary"},null,8,["modelValue","label"])]),o(d,{size:"small",class:"button-link",variant:"text",href:"#"},{default:s(()=>[r(m(e.$t("common.login_forgot")),1)]),_:1})]),i("div",U,[o(d,{size:"large",block:"",color:"secondary",onClick:u.handleSubmit},{default:s(()=>[r(m(e.$t("common.continue")),1)]),_:1},8,["onClick"])])]),_:1},8,["modelValue"])])]),_:1},8,["title","subtitle"])}const M=f(D,[["render",z],["__scopeId","data-v-ba258e51"]]),I=q({components:{LoginForm:M},head(){return{title:L.education.name+" - Login"}}},"$MnW08vEsNn");function W(e,t,b,h,l,u){const c=n("login-form");return v(),C("div",null,[o(c)])}const J=f(I,[["render",W]]);export{J as default};
